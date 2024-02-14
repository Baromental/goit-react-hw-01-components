import React from 'react';
import s from './Profile.module.css';

const Profile = ({ username, tag, location, avatar, stats }) => (
  <div className={s.profile}>
    <div className={s.description}>
      <img src={avatar} alt="User avatar" className={s.avatar} />
      <p className={s.name}>{username}</p>
      <p className={s.tag}>{`@${tag}`}</p>
      <p className={s.location}>{location}</p>
    </div>

    <ul className={s.stats}>
      {Object.keys(stats).map((label) => (
        <li key={label}>
          <span className={s.label}>{label}</span>
          <span className={s.quantity}>{stats[label]}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default Profile;
