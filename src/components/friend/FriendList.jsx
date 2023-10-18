import { Friend } from './Friend';

export const FriendList = ({ friends }) => (
  <ul className="friend-list">
    {friends.map(friend => {
      return <Friend {...friend} key={friend.id} />;
    })}
  </ul>
);
