import React from "react";
import SHOP_DATA from "./shop.data";
import PreviewCollection from "../../preview-collection/previewCollection.component";

const ShopPage = () => {
  return (
    <div className="shop-page">
      {SHOP_DATA.map(({ id, ...otherCollections }) => (
        <PreviewCollection key={id} {...otherCollections} />
      ))}
    </div>
  );
};

export default ShopPage;
