import React from "react";
import "../css/ItemDetail.css";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Item } from "../store/slices/itemSlice";

function ItemDetail() {
  const detail: Item = useSelector(
    (state: RootState) => state.itemSlice.items[0]
  );

  return (
    <>
      {/* Render product details after get data from server side */}
      {detail && (
        <>
          <div id="item-detail-image-container">
            <img
              id="item-detail-image"
              src={detail.image}
              alt={`Product Name:${detail.title}-Product Details${detail.subtitle}`}
            />
            <div id="item-detail-title">{detail.title}</div>
            <div id="item-detail-subtitle">{detail.subtitle}</div>
          </div>
          <div className="divider" />
          <div id="item-detail-tags">
            {detail.tags.map((tag, index) => (
              <div key={`item-detail-tag-${index}`} className="item-detail-tag">
                {tag}
              </div>
            ))}
          </div>
          <div className="divider" />
        </>
      )}
    </>
  );
}

export default ItemDetail;
