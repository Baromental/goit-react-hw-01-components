import React from 'react';
import s from './Statistics.module.css';

const Statistics = ({ title, stats }) => (
  <section className={s.statistics}>
    {title && <h2 className={s.title}>{title}</h2>}

    <ul className={s.statList}>
      {stats.map(({ id, label, percentage }) => (
        <li key={id} className={s.item} style={{ background: getBackgroundColor(id) }}>
          <span className={s.label}>{label}</span>
          <span className={s.percentage}>{percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

const getBackgroundColor = (id) => {
  switch (id) {
    case 'id-1':
      return '#87CEEB';
    case 'id-2':
      return '#800080';
    case 'id-3':
      return '#FF0000';
    case 'id-4':
      return '#7FFFD4';
    case 'id-5':
      return '#0000FF';
    default:
      return '#f0f0f0';
  }
};

export default Statistics;
