let quizBtn = document.querySelector(".quiz-btn");
quizBtn.addEventListener("click",()=>{
    window.location.href="quiz.html";
})

const viewBtn = document.querySelectorAll(".view");

for(let i = 0; i < viewBtn.length; i++) {
  viewBtn[i].addEventListener("click", () => {
    // Save clicked topic index
    localStorage.setItem("selectedTopicIndex", i);
    // Navigate to formula.html
    window.location.href = "formula.html";
  });
}
