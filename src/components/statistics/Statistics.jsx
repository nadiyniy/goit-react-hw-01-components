import { Stat } from './Stat';

export const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title ? <h2 className="title">Upload stats</h2> : null}

      <ul className="stat-list">
        {stats.map(statItem => (
          <Stat {...statItem} key={statItem.id} />
        ))}
      </ul>
    </section>
  );
};
