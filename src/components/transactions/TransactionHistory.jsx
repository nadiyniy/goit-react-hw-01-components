import { Trans } from './Trans';
import { StyledheadTable } from './Transaction.style';

export const TransactionHistory = ({ transactions }) => {
  return (
    <StyledheadTable>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      {transactions.map((transaction, i) => {
        return <Trans indexForBg={i} {...transaction} key={transaction.id} />;
      })}
    </StyledheadTable>
  );
};
