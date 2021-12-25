import React from "react";
import "./collection-preview.styles.scss";
import ItemCollection from "../collection-item/collection-item.component";

const PreviewCollection = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...itemsProp }) => (
          <ItemCollection key={id} {...itemsProp} />
        ))}
    </div>
  </div>
);

export default PreviewCollection;
