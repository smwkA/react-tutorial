import React from "react";
import styled from "styled-components";

export const Main: React.FC = () => {
  return (
    <$Main>
      <section>
        <article>
          <$Crosshead>私の個人主義(夏目漱石)</$Crosshead>
          <$Paragraph>あいつは今いったんこんな助力人というのの中へ見せるあっで。</$Paragraph>
          <$Paragraph>至極十月に腐敗事もどうもその答弁たでだけとしているなけれを創設あるますないで、そうには用いですないました。</$Paragraph>
          <$Paragraph>国家になりでのももち今にもうなくずで。そのうち張さんを随行列わざわざ経験が使いで責任その地位私か中止をって実相違いですたたまして、そのすべては・・・</$Paragraph>
        </article>
      </section>
    </$Main>
  )
}

const $Main = styled("main")`
  flex-grow: 1;
  margin: 0 1rem;
  padding: 1.1rem;
  background-color: #fff;
  color: #333;
  box-shadow: 0px 0px 5px #ccc;
`;

const $Crosshead = styled("h2")`
  margin: 1rem 0;
  font-weight: bold;
  &:first-of-type {
    margin-top: 0%;
  }
`;

const $Paragraph = styled("h2")`
  margin: 1rem 0;
  line-height: 2rem;
  &:last-of-type {
    margin-bottom: 0;
  }
`;
