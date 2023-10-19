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

      {transactions.map((transaction, idx) => {
        return <Trans $index={idx} {...transaction} key={transaction.id} />;
      })}
    </StyledheadTable>
  );
};
