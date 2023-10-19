import styled from 'styled-components';

export const StyledheadTable = styled.table`
  border: 1px solid black;
  border-radius: 10px;
  text-align: center;
  font-size: 20px;
  width: 600px;
  background-color: black;
  color: white;
  & thead {
    height: 50px;
  }
`;

export const StyledTbody = styled.tbody`
  color: green;

  background-color: ${props => (props.$index % 2 === 0 ? 'lightblue' : 'cyan')};
`;
