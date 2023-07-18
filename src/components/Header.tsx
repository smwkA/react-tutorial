import React from "react";
import styled from "styled-components";

export const Header: React.FC = () => {
  return (
    <$Header>
      <$Title>Hello World</$Title>
    </$Header>
  )
}

const $Header = styled('header')`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100px;
  margin: 1rem;
  border-bottom: 1px solid #ccc;
  color: #fff;
  background-color: #666;
  font-weight: bold;
  box-shadow: 0px 0px 5px #ccc;
`;

const $Title = styled('h1')`
  font-size: 2.5rem;
`;
