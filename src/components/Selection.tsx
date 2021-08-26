import React, { ChangeEvent, Fragment, useEffect, useState } from 'react';
import { ItemCard } from "./ItemCard";
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
        selectedArticle !== "" ? (<ItemCard type={props.type} article={selectedArticle}/>) : (<div/>)
      }
    </Fragment>
  );
};
