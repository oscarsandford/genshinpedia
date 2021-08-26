import React, { useEffect, useState } from 'react';
import * as API from '../modules/api';
import { CardProps } from '../modules/formatting';

interface Weapon {
  name: string;
  rarity: number;
  type: string;
  attack: number;
  substat: string;
  location: string;
  passivename: string;
  passivedesc: string;
}

export const WeaponCard: React.FC<CardProps> = (props: CardProps) => {

  const [item, setItem] = useState<Weapon>();

  useEffect(() => {
    API.get(props.type + "/" + props.article).then(res => {
      setItem({
        name: res["name"],
        rarity: res["rarity"],
        type: res["type"],
        attack: res["baseAttack"],
        substat: res["subStat"],
        location: res["location"],
        passivename: res["passiveName"],
        passivedesc: res["passiveDesc"]
      } as Weapon);
    });
  }, [props]);

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{item?.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted"><small>{item?.type}</small></h6>
            <p className="card-text">{item?.attack} ATK, {item?.substat}</p>
            <p className="card-text"><strong>{item?.passivename}:</strong> {item?.passivedesc}</p>
            <p className="card-text"><small>{"⭐️".repeat(item?.rarity === undefined ? 0 : item.rarity)}</small></p>
          </div>
        </div>
      </div>
    </div>
  );
}
