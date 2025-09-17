import * as React from "react";

import Container from "./Container";
import { CardPropsType } from "@/types";

const Card: React.FC<CardPropsType> = ({ children, ...delegatedProps }) => {
  return (
    <Container as={"article"} {...delegatedProps}>
      {children}
    </Container>
  );
};

export default Card;
