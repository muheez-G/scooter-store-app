import React from 'react';

const stats = [
  { title: '70 mph', desc: '4-Speed Mode' },
  { title: '130 mi', desc: 'Range 4Km' },
  { title: '400 lbs', desc: 'Frame Weight' },
  { title: '21 kw', desc: 'Per Charge' },
];

const AboutStats = () => (
  <div className="flex justify-center px-4 flex-wrap gap-6 sm:gap-8 lg:gap-12 my-8 text-center">
    {stats.map((item, i) => (
      <div key={i} className="text-base sm:text-lg font-bold">
        <h3 className="text-3xl sm:text-4xl font-extrabold">{item.title}</h3>
        <p>{item.desc}</p>
      </div>
    ))}
  </div>
);

export default AboutStats;
