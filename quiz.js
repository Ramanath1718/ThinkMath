const quizData = [
  {
    question: "What is the value of x in 2x + 5 = 15?",
    options: ["10", "5", "7", "8"],
    answer: "5"
  },
  {
    question: "Expand (a + b)^2",
    options: [
      "a^2 + b^2",
      "a^2 + 2ab + b^2",
      "2a^2 + b^2",
      "a^2 - 2ab + b^2"
    ],
    answer: "a^2 + 2ab + b^2"
  },
  {
    question: "Which one is a factorization identity?",
    options: [
      "(a + b)^2 = a^2 + 2ab + b^2",
      "a + b = c",
      "ab = c^2",
      "a^2 = b + c"
    ],
    answer: "(a + b)^2 = a^2 + 2ab + b^2"
  },

  // Geometry
  {
    question: "Sum of all angles in a triangle?",
    options: ["180°", "360°", "90°", "270°"],
    answer: "180°"
  },
  {
    question: "What is a triangle with all sides equal?",
    options: ["Scalene", "Isosceles", "Right-angled", "Equilateral"],
    answer: "Equilateral"
  },
  {
    question: "How many degrees are there in a right angle?",
    options: ["45°", "90°", "180°", "60°"],
    answer: "90°"
  },

  // Mensuration
  {
    question: "Area of a rectangle is given by?",
    options: ["l × b", "2l + 2b", "l + b", "l / b"],
    answer: "l × b"
  },
  {
    question: "Volume of a cube (side = 3 cm)?",
    options: ["9 cm³", "27 cm³", "18 cm³", "36 cm³"],
    answer: "27 cm³"
  },
  {
    question: "Area of a circle formula?",
    options: ["πr²", "2πr", "πd", "r²"],
    answer: "πr²"
  },

  // Trigonometry
  {
    question: "sin(90°) = ?",
    options: ["1", "0", "√3", "1/2"],
    answer: "1"
  },
  {
    question: "cos(0°) = ?",
    options: ["0", "1", "-1", "Undefined"],
    answer: "1"
  },
  {
    question: "tan(45°) = ?",
    options: ["1", "0", "∞", "√3"],
    answer: "1"
  },

  // Speed, Time & Distance
  {
    question: "Speed = 60 km/h, Time = 2 h. Distance = ?",
    options: ["120 km", "100 km", "90 km", "60 km"],
    answer: "120 km"
  },
  {
    question: "If distance = 180 km and speed = 90 km/h, time = ?",
    options: ["1 h", "2 h", "3 h", "4 h"],
    answer: "2 h"
  },
  {
    question: "Time = Distance ÷ ?",
    options: ["Speed", "Time", "Distance", "None"],
    answer: "Speed"
  },

  // Averages & Percentages
  {
    question: "Average of 10, 20, and 30?",
    options: ["20", "25", "30", "15"],
    answer: "20"
  },
  {
    question: "What is 25% of 200?",
    options: ["50", "40", "60", "30"],
    answer: "50"
  },
  {
    question: "What is 10% of 450?",
    options: ["40", "45", "50", "35"],
    answer: "45"
  },

  // Probability
  {
    question: "Probability of getting 'Heads' in coin toss?",
    options: ["0", "0.5", "1", "2"],
    answer: "0.5"
  },
  {
    question: "Probability of rolling 3 on a dice?",
    options: ["1/6", "1/4", "1/2", "1/3"],
    answer: "1/6"
  },
  {
    question: "Total outcomes of tossing 2 coins?",
    options: ["4", "2", "6", "3"],
    answer: "4"
  },

  // Linear Equations
  {
    question: "Solve: x + 7 = 14",
    options: ["5", "6", "7", "8"],
    answer: "7"
  },
  {
    question: "3x = 15. x = ?",
    options: ["5", "4", "3", "6"],
    answer: "5"
  },
  {
    question: "x - 4 = 10. x = ?",
    options: ["14", "6", "8", "12"],
    answer: "14"
  },
  {
    question: "If x = 2, then value of 2x² + 3x = ?",
    options: ["10", "14", "16", "18"],
    answer: "14"
  }
];

let currentQuestion = 0;
let score = 0;
let scoreboard = document.querySelector("#score");
let prevBtn = document.getElementById("prev-btn")
prevBtn.classList.add("remove");
let selectedAnswers = new Array(quizData.length).fill(null);

function loadQuestion() {
  const data = quizData[currentQuestion];
  document.getElementById("question").innerText = data.question;
  scoreboard.innerHTML = `Question ${currentQuestion+1} of ${quizData.length}`

  const optionsContainer = document.querySelector(".options");
  optionsContainer.innerHTML = ""; // remove old options

  data.options.forEach((optionText) => {
    const label = document.createElement("label");
    const input = document.createElement("input");
    input.type = "radio";
    input.name = "option";
    input.value = optionText;

    label.appendChild(input);
    label.append(" " + optionText);
    optionsContainer.appendChild(label);
    optionsContainer.appendChild(document.createElement("br"));
  });

  if(currentQuestion >= 1){
    prevBtn.classList.remove("remove");
  }else{
    prevBtn.classList.add("remove");
  }
}

document.getElementById("next-btn").addEventListener("click", () => {
  const selected = document.querySelector('input[name="option"]:checked');
  if (!selected) {
    alert("Please select an option.");
    return;
  }


  selectedAnswers[currentQuestion] = selected.value;

  if (quizData[currentQuestion].answer === selected.value && selectedAnswers[currentQuestion] !== "✓counted✓") {
    score++;
    selectedAnswers[currentQuestion] = "✓counted✓";
  }


  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    document.querySelector(".quiz-container").innerHTML = `
      <h2>Quiz Completed!</h2>
      <p>Your score: ${score} / ${quizData.length}</p>
      <button onclick="location.reload()" class="restart-btn">&#8592 Restart</button>
    `;
    scoreboard.remove();
  }
});

prevBtn.addEventListener("click",()=>{
  currentQuestion--;
  loadQuestion();
})

loadQuestion();



