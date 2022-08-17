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

let StartOfRound = () => {
  let correctStudentId = RandomStudent();
  ChangeImage(students[correctStudentId].img);
  let options = GetOptions(correctStudentId);

  option1Label.innerHTML = options[0];
  option2Label.innerHTML = options[1];
  option3Label.innerHTML = options[2];
  console.log(options[0]);
  console.log(options[1]);
  console.log(options[2]);
};

let CorrectAnswer = () => {
  console.log("Correct");
};

let WrongAnswer = () => {
  console.log("Wrong dumbass");
};

let SubmitAnswer = (selectedOption) => {
  if (selectedOption == correctAnswer) {
    CorrectAnswer();
  } else {
    WrongAnswer();
  }
  uncheckOptions();
  StartOfRound();
  console.log(correctAnswer);
  console.log(selectedOption);
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

const img = (document.getElementById("img").src = "images/Albin.jpg");

const option1 = document.querySelector(".option1");
const option1Label = document.querySelector(".option1-label");

const option2 = document.querySelector(".option2");
const option2Label = document.querySelector(".option2-label");

const option3 = document.querySelector(".option3");
const option3Label = document.querySelector(".option3-label");

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
