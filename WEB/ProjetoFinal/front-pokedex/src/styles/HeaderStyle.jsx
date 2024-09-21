import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  height: 70px;
  background-color: #f0f0f0;
`;

export const Img = styled.img`
  margin: 5px 50px;
  width: 60px;
  height: 60px;

  @media (max-width: 768px) {
    margin: 5 auto;
    background-color: red;
  }
`;
