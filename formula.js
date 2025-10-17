const  formulasData = [
  {
    topic: "Algebra & Linear Equations",
    description: "Covers solving unknowns, linear and quadratic equations, useful for many aptitude and word problems.",
    formulas: [
      "Linear: ax + b = 0 ⇒ x = -b / a",
      "Quadratic: ax² + bx + c = 0 ⇒ x = (-b ± √(b²-4ac)) / 2a",
      "Sum of n terms of AP = n/2 × [2a + (n-1)d]",
      "Sum of n terms of GP = a(1 - rⁿ)/(1 - r), r ≠ 1"
    ]
  },
  {
    topic: "Geometry & Mensuration",
    description: "Deals with shapes, sizes, area, volume, and perimeter calculations.",
    formulas: [
      "Area of triangle = (1/2) × base × height",
      "Area of circle = πr², Circumference = 2πr",
      "Area of rectangle = l × b, Perimeter = 2(l+b)",
      "Volume of cube = a³, Volume of cuboid = l × b × h",
      "Surface Area of sphere = 4πr², Volume = 4/3πr³"
    ]
  },
  {
    topic: "Trigonometry",
    description: "Used for solving problems involving angles, heights, and distances.",
    formulas: [
      "sin²θ + cos²θ = 1",
      "tanθ = sinθ / cosθ",
      "sinA / a = sinB / b = sinC / c (Law of Sines)",
      "Area of triangle = 1/2 × ab × sinC"
    ]
  },
  {
    topic: "Speed, Time & Distance",
    description: "Relates distance, speed, and time; includes average and relative speed problems.",
    formulas: [
      "Speed = Distance / Time",
      "Time = Distance / Speed",
      "Distance = Speed × Time",
      "Average Speed = Total Distance / Total Time",
      "Relative Speed (same direction) = V1 - V2",
      "Relative Speed (opposite direction) = V1 + V2"
    ]
  },
  {
    topic: "Time, Work & Pipes",
    description: "Covers work done, efficiency, and problems involving filling/emptying tanks.",
    formulas: [
      "Work = Efficiency × Time",
      "A+B together = xy/(x+y) days if A in x days & B in y days",
      "Fraction of work done = Part/Total work",
      "Time to fill/empty tank = Capacity / Rate"
    ]
  },
  {
    topic: "Profit, Loss & Percentages",
    description: "Business aptitude basics: calculate gain, loss, discount, and interest.",
    formulas: [
      "Profit% = (Profit / Cost Price) × 100",
      "Loss% = (Loss / Cost Price) × 100",
      "Selling Price = Cost Price ± Profit/Loss",
      "Discount% = (Discount / Marked Price) × 100",
      "Simple Interest = (P × R × T) / 100",
      "Compound Interest = P(1 + R/100)^T - P"
    ]
  },
  {
    topic: "Averages & Ratios",
    description: "Used for summarizing data, comparing quantities, and distributions.",
    formulas: [
      "Average = Sum of quantities / Number of quantities",
      "Ratio = Quantity1 : Quantity2",
      "Proportion = Quantity1 / Quantity2",
      "Weighted Average = (Σ weight × value) / Σ weight"
    ]
  },
  {
    topic: "Probability & Permutation/Combination",
    description: "Measures likelihood of events and counts arrangements of objects.",
    formulas: [
      "Probability = Favorable outcomes / Total outcomes",
      "nPr = n! / (n-r)! (Permutation)",
      "nCr = n! / [r!(n-r)!] (Combination)",
      "Probability of complementary event = 1 - P(event)"
    ]
  }
];


let topicsName = document.querySelector("#formula-heading");
let formulades = document.querySelector("#description");
let formulaSeries = document.querySelector("#formulas");


let selectedIndex = localStorage.getItem("selectedTopicIndex");

if (selectedIndex !== null) {
  selectedIndex = Number(selectedIndex);

  
  topicsName.innerHTML = formulasData[selectedIndex].topic;
  formulades.innerHTML = formulasData[selectedIndex].description;

  formulaSeries.innerHTML = ''; 

  formulasData[selectedIndex].formulas.forEach(formula => {
    let li = document.createElement('li');
    li.textContent = formula;
    formulaSeries.appendChild(li);
  });
} else {
  topicsName.innerHTML = "No topic selected";
  formulades.innerHTML = "";
  formulaSeries.innerHTML = "";
}

let backBtn = document.querySelector("#back-btn");
backBtn.addEventListener("click",()=>{
  window.history.back();
})
