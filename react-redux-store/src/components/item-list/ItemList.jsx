import React, { Component } from "react";
import Item from "../item";
import "./scss/item-list.css";

export default class ItemList extends Component {
  render() {
    const { items } = this.props;
    return (
      <div className="item-list">
        {items.map((item) => {
          return (
            <div key={item.id}>
              <Item item={item}></Item>
            </div>
          );
        })}
      </div>
    );
  }
}
