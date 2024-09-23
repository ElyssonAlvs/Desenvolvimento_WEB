import styled from 'styled-components';

export const Header = styled.header`
  margin-left: 20.5%;
  display: flex;
  height: 61px;
  background-color: #222222;
  position: fixed;
  top: 0;
  left: 0;
  width: 60.5%;
  box-sizing: border-box;
  z-index: 10;
`;

export const Img = styled.img`
  margin: 10px 50px;
  width: 112px;
  height: 41px;

  @media (max-width: 768px) {
    margin: 5 auto;
    background-color: red;
  }
`;