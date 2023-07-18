import React from "react";
import styled from "styled-components";

export const Footer: React.FC = () => {
  return (
    <$Footer>
      <$Copyright>©Stylagy</$Copyright>
    </$Footer>
  )
};

const $Footer = styled("footer")`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50px;
  margin-top: 1rem;
  border-top: 1px solid #ccc;
  background-color: #eee;
`;

const $Copyright = styled("small")`
  font-size: .75rem;
  color: #666;
`;
