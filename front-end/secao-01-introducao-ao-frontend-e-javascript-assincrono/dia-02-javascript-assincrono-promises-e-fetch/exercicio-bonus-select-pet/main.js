const randomDogBtn = document.querySelector('#random-dog');
const randomCatBtn = document.querySelector('#random-cat');
const surpriseBtn = document.querySelector('#surprise-me');
const image = document.querySelector('img');

randomDogBtn.addEventListener('click', () => {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
      .then((data) => image.src = data.message);
});

randomCatBtn.addEventListener('click', () => {
  fetch('https://aws.random.cat/meow')
    .then((response) => response.json())
      .then((data) => image.src = data.file);
});

surpriseBtn.addEventListener('click', () => {
  Promise.any([
    fetch('https://dog.ceo/api/breeds/image/random'),
    fetch('https://aws.random.cat/meow'),
  ]).then((result) => result.json())
    .then((data) => {
      const petURL = data.file || data.message;
      image.src = petURL;
    });
});