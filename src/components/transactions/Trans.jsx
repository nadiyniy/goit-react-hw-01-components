import { StyledTbody } from './Transaction.style';

export const Trans = ({ type, amount, currency, indexForBg }) => {
  return (
    <StyledTbody $index={indexForBg}>
      <tr>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    </StyledTbody>
  );
};
