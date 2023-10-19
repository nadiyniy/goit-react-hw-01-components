import { Profile } from './profile/Profile';
import user from '../assets/user.json';
import data from '../assets/data.json';
import { Statistics } from './statistics/Statistics';
import { FriendList } from './friend/FriendList';
import friends from '../assets/friends.json';
import { TransactionHistory } from './transactions/TransactionHistory';
import transactions from '../assets/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        padding: 50,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        outline: '1 px solid black',
        gap: 100,
      }}
    >
      <Profile user={user} />
      <Statistics title={'stata'} stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
