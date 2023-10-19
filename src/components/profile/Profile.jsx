import clsx from 'clsx';
import css from './profile.module.css';

export const Profile = ({ user }) => {
  const { username, tag, location, avatar, stats } = user;

  return (
    <div className={clsx(css.profile)}>
      <div className={clsx(css.description)}>
        <img
          src={avatar}
          alt={username}
          className="avatar"
          width="100"
          height="100"
        />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className={clsx(css.stats)}>
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
