import styled from 'styled-components';

export const StyledOnlineSpan = styled.span`
  width: 10px;
  height: 10px;
  border: 1px solid black;
  border-radius: 50%;
  background-color: ${props => (props.$isOnline ? 'green' : 'grey')};
  box-shadow: ${props => (props.$isOnline ? '0px 0px 10px 5px green' : 'none')};
`;

export const StyledListUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  li {
    border: 1px solid black;
    border-radius: 10px;
    display: flex;
    gap: 10px;
    padding: 10px 20px;
    box-shadow: 2px 2px 5px 2px gray;
    align-items: center;

    img {
      background-color: lightblue;
      border: 1px solid black;
      border-radius: 20px;
    }
  }
`;
