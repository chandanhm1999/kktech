import React from 'react';
import styles from '../../styles'; // Ensure that this file exists and exports the necessary styles

export const stats = [
  {
    id: 'stat1',
    title: 'Products',
    value: '100+',
  },
  {
    id: 'stat2',
    title: 'Wide range of Services',
    value: '50+',
  },
  {
    id: 'stat3',
    title: 'Clients ',
    value: '1k+',
  },
];

const Status = () => (
  <div className={styles.paddings}>
    <div className="grid md:grid-cols-3 gap-5 md:gap-11">
      {stats.map((stat) => (
        <div key={stat.id} className="text-center">
          <h2 className="text-4xl text-blue md:text-2xl font-bold text-gradient">
            {stat.value}
          </h2>
          <p className="font-semibold text-lg md:text-base uppercase leading-tight">
            {stat.title}
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default Status;
