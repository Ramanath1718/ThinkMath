const quizData = [
  // Algebra
  {
    question: "Solve: 3x - 7 = 11",
    options: ["4", "6", "5", "7"],
    answer: "6"
  },
  {
    question: "If x + y = 10 and x - y = 2, find x.",
    options: ["4", "6", "5", "7"],
    answer: "6"
  },
  {
    question: "Find the 5th term of the AP: 2, 5, 8, ...",
    options: ["14", "15", "16", "17"],
    answer: "14"
  },

  // Geometry
  {
    question: "A right triangle has sides 3 cm, 4 cm. Find the hypotenuse.",
    options: ["5", "6", "7", "4"],
    answer: "5"
  },
  {
    question: "Area of a circle with radius 7 cm?",
    options: ["154", "144", "150", "160"],
    answer: "154"
  },
  {
    question: "Perimeter of a rectangle with length 10 and breadth 5?",
    options: ["30", "40", "25", "35"],
    answer: "30"
  },

  // Trigonometry
  {
    question: "If sin θ = 1/2, then θ = ? (0°-90°)",
    options: ["30°", "45°", "60°", "90°"],
    answer: "30°"
  },
  {
    question: "tan 45° = ?",
    options: ["1", "0", "√3", "Undefined"],
    answer: "1"
  },
  {
    question: "cos 60° = ?",
    options: ["1/2", "√3/2", "0", "1"],
    answer: "1/2"
  },

  // Speed & Distance
  {
    question: "A car travels 120 km in 2 hours. Average speed?",
    options: ["60 km/h", "50 km/h", "70 km/h", "80 km/h"],
    answer: "60 km/h"
  },
  {
    question: "If a train covers 150 km in 3 hours, speed = ?",
    options: ["50 km/h", "45 km/h", "60 km/h", "55 km/h"],
    answer: "50 km/h"
  },
  {
    question: "A boat moves 10 km downstream in 2 hours. Find speed downstream.",
    options: ["5 km/h", "6 km/h", "4 km/h", "8 km/h"],
    answer: "5 km/h"
  },

  // Time & Work
  {
    question: "A can do a work in 12 days, B in 16 days. Time together?",
    options: ["6.86 days", "7 days", "8 days", "6 days"],
    answer: "6.86 days"
  },
  {
    question: "Work = Efficiency × Time. If efficiency doubles, time = ?",
    options: ["Half", "Double", "Same", "Cannot say"],
    answer: "Half"
  },
  {
    question: "Pipe fills 1 tank in 6 hours. Two such pipes working together?",
    options: ["3 hours", "6 hours", "4 hours", "2 hours"],
    answer: "3 hours"
  },

  // Profit & Loss
  {
    question: "CP = 250, SP = 300. Profit% = ?",
    options: ["20%", "25%", "15%", "30%"],
    answer: "20%"
  },
  {
    question: "CP = 500, SP = 450. Loss% = ?",
    options: ["10%", "15%", "12%", "8%"],
    answer: "10%"
  },
  {
    question: "Item marked 1200, discount 10%. Selling price = ?",
    options: ["1080", "1100", "1150", "1050"],
    answer: "1080"
  },

  // Averages & Ratios
  {
    question: "Average of 12, 15, 18?",
    options: ["15", "14", "16", "13"],
    answer: "15"
  },
  {
    question: "Ratio of 18 : 24 simplified?",
    options: ["3:4", "4:3", "2:3", "3:5"],
    answer: "3:4"
  },
  {
    question: "Weighted average of 2, 3, 4 with weights 1, 2, 3?",
    options: ["3.33", "3", "2.5", "3.5"],
    answer: "3.33"
  },

  // Probability
  {
    question: "Probability of getting 'Tails' in a coin?",
    options: ["0", "0.5", "1", "2"],
    answer: "0.5"
  },
  {
    question: "Probability of rolling even number on dice?",
    options: ["1/2", "1/3", "1/6", "2/3"],
    answer: "1/2"
  },
  {
    question: "Two coins tossed. Probability both heads?",
    options: ["1/4", "1/2", "1/3", "1"],
    answer: "1/4"
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








