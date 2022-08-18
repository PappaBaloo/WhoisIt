let uncheckOptions = () => {
  option1.checked = false;
  option2.checked = false;
  option3.checked = false;
};

let ChangeImage = (img) => {
  img = document.getElementById("img").src = img;
  console.log(img);
};

let RandomStudent = () => {
  return Math.floor(Math.random() * 7.9);
};

let GetIncorrectAnswer = (options) => {
  let randomStudent;
  do {
    randomStudent = RandomStudent();
  } while (options.includes(students[randomStudent].name));

  return students[randomStudent].name;
};

let GetOptions = (correctStudentId) => {
  let options = [];
  correctAnswer = Math.floor(Math.random() * 2.9);
  options[correctAnswer] = students[correctStudentId].name;

  for (let i = 0; i < 3; i++) {
    if (i == correctAnswer) {
      continue;
    } else {
      options[i] = GetIncorrectAnswer(options);
    }
  }
  return options;
};

let GenerateClue = (firstLetterOfName) => {
  clue.innerHTML = `The first letter is ${firstLetterOfName}`;
};

let StartOfRound = () => {
  let correctStudentId = RandomStudent();
  GenerateClue(students[correctStudentId].name[0]);
  ChangeImage(students[correctStudentId].img);
  let options = GetOptions(correctStudentId);
  slava.currentTime = 3;

  option1Label.innerHTML = options[0];
  option2Label.innerHTML = options[1];
  option3Label.innerHTML = options[2];
  console.log(options[0]);
  console.log(options[1]);
  console.log(options[2]);
};

let NewRound = () => {
  title.innerHTML = "Who is it?";
  document.getElementById("navid").style.backgroundColor = "blanchedalmond";
  e.pause();
  e.currentTime = 0;
  slava.pause();
  slava.currentTime = 3;
  uncheckOptions();
  StartOfRound();
};

let CorrectAnswer = () => {
  title.innerHTML = "Correct!";
  document.getElementById("navid").style.backgroundColor = "green";
  e.play();
  rightCounter.innerHTML++;
  setTimeout(NewRound, 3000);
};

let WrongAnswer = () => {
  title.innerHTML = "Wrong dumbass";
  document.getElementById("navid").style.backgroundColor = "red";
  slava.play();
  wrongCounter.innerHTML++;
  setTimeout(NewRound, 3000);
};

let SubmitAnswer = (selectedOption) => {
  if (selectedOption == correctAnswer) {
    CorrectAnswer();
  } else {
    WrongAnswer();
  }
};

const students = [
  {
    name: "Samuel",
    img: "images/IMG_1322.jpg",
  },
  {
    name: "Charlie",
    img: "images/IMG_1323.jpg",
  },
  {
    name: "Markus",
    img: "images/IMG_1320.jpg",
  },
  {
    name: "Albin",
    img: "images/Albin.jpg",
  },
  {
    name: "Amir",
    img: "images/IMG_1329.jpg",
  },
  {
    name: "Hugo",
    img: "images/IMG_1326.jpg",
  },
  {
    name: "Mathias",
    img: "images/IMG_1324.jpg",
  },
  {
    name: "Robin",
    img: "images/IMG_1321.jpg",
  },
];

let correctAnswer;

const title = document.querySelector(".title");
title.innerHTML = "Who is it?";

const img = (document.getElementById("img").src = "images/Albin.jpg");

const clue = document.querySelector(".hint");

const option1 = document.querySelector(".option1");
const option1Label = document.querySelector(".option1-label");

const option2 = document.querySelector(".option2");
const option2Label = document.querySelector(".option2-label");

const option3 = document.querySelector(".option3");
const option3Label = document.querySelector(".option3-label");

//Counters
const rightCounter = document.querySelector(".correctCount");
const wrongCounter = document.querySelector(".wrongCount");

//Audio
const e = new Audio("audio/e.mp3");
const slava = new Audio("audio/slav.mp3");

//Event listeners
option1.addEventListener("click", () => {
  SubmitAnswer(0);
});
option2.addEventListener("click", () => {
  SubmitAnswer(1);
});
option3.addEventListener("click", () => {
  SubmitAnswer(2);
});

StartOfRound();
uncheckOptions();
