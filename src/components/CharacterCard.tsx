import React, { useEffect, useState } from 'react';
import * as API from '../modules/api';
import { CardProps } from '../modules/formatting';


interface Character {
  name: string;
  rarity: number;
  vision: string;
  weapon: string;
  nation: string;
  affiliation: string;
  birthday: Date;
  description: string;
  constellation: string;
  passives: Array<any>;
  skills: Array<any>;
  constellations: Array<any>;
}

export const CharacterCard: React.FC<CardProps> = (props: CardProps) => {

  const [item, setItem] = useState<Character>();

  useEffect(() => {
    API.get(props.type + "/" + props.article).then(res => {
      console.log(res);
      setItem({
        name: res["name"],
        rarity: res["rarity"],
        vision: res["vision"],
        weapon: res["weapon"],
        nation: res["nation"],
        affiliation: res["affiliation"],
        birthday: new Date(res["birthday"]),
        description: res["description"],
        constellation: res["constellation"],
        passives: res["passiveTalents"],
        skills: res["skillTalents"],
        constellations: res["constellations"]
      } as Character);
    });
  }, [props]);

  return (
     <div className="card mb-3">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Constellations</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#skills" type="button" role="tab" aria-controls="skills" aria-selected="false">Skills</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#passives" type="button" role="tab" aria-controls="passives" aria-selected="false">Passives</button>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
            <div className="card-body">
              <h5 className="card-title">{item?.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted"><small>{item?.affiliation}, {item?.nation}</small></h6>
              <p className="card-text">{item?.description}</p>
              <dl className="row">
                <dt className="col-sm-3">Vision</dt>
                <dd className="col-sm-9">{item?.vision}</dd>
                <dt className="col-sm-3">Weapon</dt>
                <dd className="col-sm-9">{item?.weapon}</dd>
                <dt className="col-sm-3">Constellation</dt>
                <dd className="col-sm-9">{item?.constellation}</dd>
                <dt className="col-sm-3">Birthday</dt>
                <dd className="col-sm-9">{item?.birthday.toDateString().slice(3, 10)}</dd>
              </dl>
              <p className="card-text"><small>{"⭐️".repeat(item?.rarity === undefined ? 0 : item.rarity)}</small></p>
            </div>
          </div>
          <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
            <div className="card-body">
              {
                item?.constellations.map((c, i) => (
                  <div>
                    <h5 className="card-title">C{i+1}: {c["name"]}</h5>
                    <p className="card-text">{c["description"]}</p>
                    <br/>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="tab-pane fade" id="skills" role="tabpanel" aria-labelledby="skills-tab">
            <div className="card-body">
              {
                item?.skills.map(s => (
                  <div>
                    <h5 className="card-title">{s["name"]}</h5>
                    <p className="card-text">{s["description"]}</p>
                    <br/>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="tab-pane fade" id="passives" role="tabpanel" aria-labelledby="passives-tab">
            <div className="card-body">
              {
                item?.passives.map(p => (
                  <div>
                    <h5 className="card-title">{p["name"]}</h5>
                    <p className="card-text">{p["description"]}</p>
                    <br/>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
    </div>
  );
}
