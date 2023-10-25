const state = document.querySelectorAll(".faq-toggle");
state.forEach((el) => {
  el.addEventListener("click", () => {
    el.parentNode.classList.toggle("active");
  });
});

const task = document.querySelector(".faq-container");
const question = document.querySelector(".question-field");
const answer = document.querySelector(".answer-field");

function added() {
  const card = document.createElement("div");
  task.appendChild(card);
  card.classList.add("faq");
  //   if (!card.classList.contains("active")) {
  //     card.classList.add("active");
  //   }
  card.innerHTML = ` <h3 class="faq-title">${question.value}</h3>

  <p class="faq-text">${answer.value}</p>

  <button class="faq-toggle" onclick="mychange(this)">
    <i class="fas fa-chevron-down"></i>
    <i class="fas fa-times"></i>
  </button>`;

  question.value = "";
  answer.value = "";
}

function mychange(e) {
  e.parentNode.classList.toggle("active");
  const cross = e.querySelector(".fa-times");
  cross.addEventListener("click", () => {
    let d = e.parentNode;
    d.parentNode.removeChild(d);
  });
}
