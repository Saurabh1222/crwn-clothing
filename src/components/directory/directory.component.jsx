import React from "react";
import sections from "./directory.data";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

const Directory = () => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherSectionsProps }) => (
      <MenuItem key={id} {...otherSectionsProps} />
    ))}
  </div>
);

export default Directory;
