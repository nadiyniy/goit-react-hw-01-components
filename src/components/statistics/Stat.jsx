import css from './statistics.module.css';

export const Stat = ({ label, percentage, backgroundColor }) => {
  return (
    <li className={css.item} style={{ backgroundColor }}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
};
