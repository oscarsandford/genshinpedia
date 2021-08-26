import React, { ChangeEvent, Fragment, useEffect, useState } from 'react';
import { ArtifactCard } from './ArtifactCard';
import { CharacterCard } from './CharacterCard';
import { WeaponCard } from './WeaponCard';
import * as GPFormats from '../modules/formatting';
import * as API from '../modules/api';

interface Props {
  type: string;
}

export const Selection: React.FC<Props> = (props: Props) => {

  const [articles, setArticles] = useState<Array<string>>([]);
  const [selectedArticle, setSelectedArticle] = useState<string>("");

  useEffect(() => {
    API.getArticles(props.type).then(res => {
      setArticles(res);
    });
  }, [props]);
  
  const onSelectionUpdate = (event: ChangeEvent<HTMLSelectElement>): void => {
    setSelectedArticle(event.target.value);
  }
  
  // A clumsy way of displaying the content resulting from this Selection.
  const setView = () => {
    if (selectedArticle !== "") {
      if (props.type === "artifacts") {
        return <ArtifactCard type={props.type} article={selectedArticle}/>;
      }
      else if (props.type === "characters") {
        return <CharacterCard type={props.type} article={selectedArticle}/>;
      }
      else if (props.type === "weapons") {
        return <WeaponCard type={props.type} article={selectedArticle}/>;
      }
    }
  }

  return (
    <Fragment>
      <div className="input-group flex-nowrap">
        <span className="input-group-text" id="addon-wrapping">{props.type}</span>
        <select className="form-select" onChange={event => onSelectionUpdate(event)}>
        {
          articles.map(article => (
            <option key={article} value={article}>{GPFormats.stylizeString(article)}</option>
          ))
        }
        </select>
      </div>
      {
        setView()
      }
    </Fragment>
  );
};
