import clsx from 'clsx';
import css from './statistics.module.css';

export const Stat = ({ label, percentage, backgroundColor }) => {
  return (
    <li className={clsx(css.item)} style={{ backgroundColor }}>
      <span className={clsx(css.label)}>{label}</span>
      <span className={clsx(css.percentage)}>{percentage}%</span>
    </li>
  );
};
