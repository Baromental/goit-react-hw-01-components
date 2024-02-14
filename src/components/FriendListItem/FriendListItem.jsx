import React from 'react';
import s from './FriendList.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={s.item}>
    <span className={isOnline ? s.online : s.offline}></span>
    <img className={s.avatar} src={avatar} alt={`User avatar for ${name}`} width="48" />
    <p className={s.name}>{name}</p>
  </li>
);

export default FriendListItem;
