const formulasData = [
  {
    topic: "Algebra",
    description: "Algebra uses variables to represent numbers in equations and expressions. It's useful for solving problems involving unknown values.",
    formulas: [
      "a² - b² = (a + b)(a - b)",
      "(a + b)² = a² + 2ab + b²",
      "Quadratic Formula: x = (-b ± √(b² - 4ac)) / 2a",
      "a³ + b³ = (a + b)(a² - ab + b²)",
      "a³ - b³ = (a - b)(a² + ab + b²)"
    ]
  },
  {
    topic: "Geometry",
    description: "Geometry studies shapes, sizes, and properties of space. It deals with angles, triangles, circles, and more.",
    formulas: [
      "Sum of angles in triangle = 180°",
      "Area of triangle = (1/2) × base × height",
      "Area of circle = πr²",
      "Circumference of circle = 2πr",
      "Area of square = side²"
    ]
  },
  {
    topic: "Trigonometry",
    description: "Trigonometry studies relationships between angles and sides of triangles using trigonometric ratios.",
    formulas: [
      "sin²θ + cos²θ = 1",
      "tanθ = sinθ / cosθ",
      "sin 0° = 0, sin 90° = 1",
      "cos 0° = 1, cos 90° = 0",
      "tan 45° = 1"
    ]
  },
  {
    topic: "Speed, Time & Distance",
    description: "This topic helps relate how fast an object is moving, how far it goes, and how long it takes.",
    formulas: [
      "Speed = Distance / Time",
      "Time = Distance / Speed",
      "Distance = Speed × Time",
      "Average Speed = Total Distance / Total Time"
    ]
  },
  {
    topic: "Averages & Percentages",
    description: "These are used for summarizing data and comparing values relative to 100.",
    formulas: [
      "Average = Sum of quantities / Number of quantities",
      "Percentage = (Part / Whole) × 100",
      "Profit% = (Profit / Cost Price) × 100",
      "Loss% = (Loss / Cost Price) × 100"
    ]
  },
  {
    topic: "Probability",
    description: "Probability measures how likely an event is to occur.",
    formulas: [
      "Probability = Favorable outcomes / Total outcomes",
      "Probability of head in a coin toss = 1/2",
      "Probability of number 3 on dice = 1/6"
    ]
  },
  {
    topic: "Linear Equations",
    description: "Linear equations involve variables with degree 1. They are used to solve real-life problems algebraically.",
    formulas: [
      "ax + b = 0 ⇒ x = -b / a",
      "2x + 3 = 11 ⇒ x = 4",
      "x/2 + 3 = 7 ⇒ x = 8",
      "3x - 4 = 11 ⇒ x = 5"
    ]
  },
  {
    topic: "Mensuration",
    description: "Mensuration is about measuring area, volume, and perimeter of 2D and 3D objects.",
    formulas: [
      "Area of rectangle = length × breadth",
      "Perimeter of rectangle = 2 × (l + b)",
      "Volume of cube = a³",
      "Volume of cuboid = l × b × h",
      "Surface Area of sphere = 4πr²"
    ]
  }
];

let topicsName = document.querySelector("#formula-heading");
let formulades = document.querySelector("#description");
let formulaSeries = document.querySelector("#formulas");

// Get saved topic index from localStorage
let selectedIndex = localStorage.getItem("selectedTopicIndex");

if (selectedIndex !== null) {
  selectedIndex = Number(selectedIndex);

  // Update page content
  topicsName.innerHTML = formulasData[selectedIndex].topic;
  formulades.innerHTML = formulasData[selectedIndex].description;

  formulaSeries.innerHTML = '';  // clear existing list

  formulasData[selectedIndex].formulas.forEach(formula => {
    let li = document.createElement('li');
    li.textContent = formula;
    formulaSeries.appendChild(li);
  });
} else {
  // fallback if no topic selected
  topicsName.innerHTML = "No topic selected";
  formulades.innerHTML = "";
  formulaSeries.innerHTML = "";
}

let backBtn = document.querySelector("#back-btn");
backBtn.addEventListener("click",()=>{
  window.history.back();
})