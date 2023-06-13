const fs = require('fs').promises;

async function replaceNelson() {
  const fileContent = await fs.readFile('./simpsonFamily.json', 'utf-8');
  const simpsonsFamily = JSON.parse(fileContent);

  const simpsonsWithoutNelson = simpsonsFamily.filter((simpson) => simpson.id !== '8');

  const simpsonsWithMaggie = simpsonsWithoutNelson
    .concat([{ id: '15', name: 'Maggie Simpson' }]);

  await fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsonsWithMaggie));

}

function main() {
  replaceNelson();
}

main();