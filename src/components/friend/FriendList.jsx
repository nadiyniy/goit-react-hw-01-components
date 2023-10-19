import { Friend } from './Friend';
import { StyledListUl } from './Friends.style';

export const FriendList = ({ friends }) => (
  <StyledListUl className="friend-list">
    {friends.map(friend => {
      return <Friend {...friend} key={friend.id} />;
    })}
  </StyledListUl>
);
