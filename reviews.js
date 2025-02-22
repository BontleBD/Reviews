// local reviews data
const reviews = [
    {
      id: 1,
      name: 'Lionel Messi',
      job: 'Soccer Player',
      img: 'https://images.daznservices.com/di/library/GOAL/73/15/lionel-messi-barcelona-2020-21_rzdm4jsg4bq11f6auy6tszszj.jpg?t=10785638&quality=100',
      text: "Lionel Messi is an Argentine professional footballer widely regarded as one of the greatest players of all time. Born on June 24, 1987, in Rosario, Argentina, he began his football journey at a young age and moved to Spain to join FC Barcelona's youth academy (La Masia) at 13 due to a growth hormone deficiency that needed treatment"
    },
    {
      id: 2,
      name: 'Barack Obama',
      job: 'President',
      img: 'images/obama.jpg',
      text: "Barack Obama is an American politician who served as the 44th president of the United States from 2009 to 2017. Born on August 4, 1961, in Honolulu, Hawaii, he was the first African American to hold the office of the U.S. president. Obama is known for his transformative policies, inspiring speeches, and efforts to promote unity and hope.",
    },
    {
      id: 3,
      name: 'Trevoh Noah',
      job: 'Comedian',
      img: 'https://th.bing.com/th/id/OIP.hPk85IS5X5ZUoMsvIUigowHaEy?w=278&h=180&c=7&r=0&o=5&pid=1.7',
      text: 'Trevor Noah is a South African comedian, television host, writer, producer, and political commentator. He is best known for hosting "The Daily Show", a popular satirical news program on Comedy Central, from 2015 to 2022.',
    },
    {
      id: 4,
      name: 'Zonke Dikana',
      job: 'Song-Writer and Producer',
      img: 'images/Zonke.webp',
      text: 'Zonke Dikana, born on October 11, 1979, in KwaZakhele, Port Elizabeth, Eastern Cape, South Africa, is a renowned singer-songwriter and record producer. She is celebrated for her contributions to the South African R&B and Afro-soul genres.  ',
    }
  ];
  // select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  });

  // show person based on item
function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }
  
  // show next person
nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
// show random person
randomBtn.addEventListener('click', function () {
  console.log('hello');

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});