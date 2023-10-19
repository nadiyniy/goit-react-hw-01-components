import { StyledOnlineSpan } from './Friends.style';

export const Friend = ({ avatar, name, isOnline }) => {
  return (
    <li className="item">
      <StyledOnlineSpan $isOnline={isOnline} className="status" />
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
};
