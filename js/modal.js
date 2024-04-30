export const getActionsWithModal = () => {
  const btnOpen = document.getElementById("btn-open");
  const modal = document.getElementById("modal");
  const btnClose = document.getElementById("btn-close");
  const modalForm = document.getElementById("form");
  const sendBtn = document.getElementById("submit");
  const confirmText = document.getElementById("confirm-text");

  const modalName = document.getElementById("modal-name");
  const modalPhoneNumber = document.getElementById("modal-phone-number");
  const modalQuestion = document.getElementById("modal-question");

  btnOpen.addEventListener("click", () => {
    modal.classList.add("open");
    sendBtn.classList.remove("close");
    confirmText.classList.remove("open");

    modalName.value = "";
    modalPhoneNumber.value = "";
    modalQuestion.value = "";
  })

  btnClose.addEventListener("click", () => {
    modal.classList.remove("open");
  })

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      modal.classList.remove("open");
    }
  })

  // modalForm.addEventListener("submit", (e) => {
  //   e.preventDefault();
  // })

  sendBtn.addEventListener("click", () => {
    if (document.querySelectorAll(".modal__input") !== "" && modalQuestion.value !== "") {
      sendBtn.classList.add("close");
      confirmText.classList.add("open");
    }
  })
}