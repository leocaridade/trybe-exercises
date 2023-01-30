
const yearSeasons = {
    spring: ['March', 'April', 'May'],
    summer: ['June', 'July', 'August'],
    autumn: ['September', 'October', 'November'],
    winter: ['December', 'January', 'February'],
  };
  // yearSeasons: estações do ano.

//   const seasons = [...yearSeasons.spring, ...yearSeasons.summer, ...yearSeasons.autumn, ...yearSeasons.winter];

//   console.log(seasons);

const seasons = ({ spring, summer, autumn, winter }) => {
    return [...spring, ...summer, ...autumn, ...winter];
};
console.log(seasons(yearSeasons));