import { StyledTbody } from './Transaction.style';

export const Trans = ({ type, amount, currency, $index }) => {
  return (
    <StyledTbody $index={$index}>
      <tr>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    </StyledTbody>
  );
};
