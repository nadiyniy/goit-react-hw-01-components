import { Trans } from './Trans';

export const TransactionHistory = ({ transactions }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      {transactions.map(transaction => {
        return <Trans {...transaction} key={transaction.id} />;
      })}
    </table>
  );
};
