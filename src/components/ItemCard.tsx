import React, { useEffect, useState } from 'react';
import * as API from '../modules/api';

interface Props {
  type: string;
  article: string;
}

// Just artifacts for now.
interface Artifact {
  name: string;
  rarity: number;
  bonus2: string;
  bonus4: string;
}

export const ItemCard: React.FC<Props> = (props: Props) => {

  const [item, setItem] = useState<Artifact>();

  useEffect(() => {
    API.get(props.type + "/" + props.article).then(res => {
      setItem({
        name: res["name"],
        rarity: res["max_rarity"],
        bonus2: res["2-piece_bonus"],
        bonus4: res["4-piece_bonus"]
      } as Artifact);
    });
  }, [props]);

  return (
    <div className="card mb-3" style={{maxWidth: "540px"}}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={"https://api.genshin.dev/"+props.type+"/"+props.article+"/flower-of-life"} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{item?.name}</h5>
            <p className="card-text">2-piece: {item?.bonus2}</p>
            <p className="card-text">4-piece: {item?.bonus4}</p>
            <p className="card-text"><small>{"⭐️".repeat(item?.rarity === undefined ? 0 : item.rarity)}</small></p>
          </div>
        </div>
      </div>
    </div>
  );
}
