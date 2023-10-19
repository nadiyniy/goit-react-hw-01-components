import { Stat } from './Stat';
import clsx from 'clsx';
import css from './statistics.module.css';
import styled from 'styled-components';

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

getRandomColor(console.log);

export const Statistics = ({ title, stats }) => {
  return (
    <section className={clsx(css.statistics)}>
      {title ? <h2 className={clsx(css.title)}>{title}</h2> : null}

      <ul className={clsx(css.statList)}>
        {stats.map(statItem => (
          <Stat
            {...statItem}
            key={statItem.id}
            backgroundColor={getRandomColor()}
          />
        ))}
      </ul>
    </section>
  );
};

const StyleSection = styled.section''
