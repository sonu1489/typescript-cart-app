import Button from "@material-ui/core/Button";
import React from "react";
import { isTemplateMiddle } from "typescript";
// types
import { CartItemType } from "../App";
// styles
import { Wrapper } from "./item.style";

type Props = {
  item: CartItemType;
  handleAddToCart: (clicked: CartItemType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
  <Wrapper>
    <img src={item.image} alt={item.title} />
    <div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <h3>${item.price}</h3>
    </div>
    <Button onClick={() => handleAddToCart(item)}>Add To Cart </Button>
  </Wrapper>
);

export default Item;
