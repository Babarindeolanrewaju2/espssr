import React from "react";
import styled from "styled-components";

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 15px;
`;

const Game = styled.div`
  margin-top: 30px;
  text-align: center;
  border: 1px solid rgba(48, 146, 85, 0.2);
  border-radius: 15px;
  padding: 20px;
  -webkit-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
`;

const Name = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-top: 10px;
  color: #212832;
  display: inline-block;
  line-height: 1.4;

  &:hover {
    color: #309255;
  }
`;

const game = ({ games }) => {
  // eslint-disable-next-line no-unused-vars
  return (
    <div className="row">
      {games.map((game, index) => (
        <div className="col-md-6" key={index}>
          <Game>
            <Image src={game?.background || game?.icon_2 || game?.icon_3} />
            <Name>{game?.name}</Name>
          </Game>
        </div>
      ))}
    </div>
  );
};

export default game;
