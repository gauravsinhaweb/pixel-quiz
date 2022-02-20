const openModal = document.querySelector("#open-modal");
const closeModal = document.querySelector("#close-modal");

const closeModalRule = document.querySelector("#close-rules");

openModal.addEventListener("click", () => {
  document.querySelector("#modal").style.display = "block";
});

closeModal.addEventListener("click", () => {
  document.querySelector("#modal").style.display = "none";
});

document.querySelector("#modal-rules").style.display = "block";

closeModalRule.addEventListener("click", () => {
  document.querySelector("#modal-rules").style.display = "none";
});
