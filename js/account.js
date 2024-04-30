const getActionsWithAccount = () => {
  const form = document.querySelector(".account-form");
  const accountContainer = document.querySelector(".account-container");
  const loginInput = document.getElementById("input-1");
  const passwordInput = document.getElementById("input-2");

  loginInput.addEventListener("click", () => {
    loginInput.classList.add("clicked");
    passwordInput.classList.remove("clicked");
  })

  passwordInput.addEventListener("click", () => {
    passwordInput.classList.add("clicked");
    loginInput.classList.remove("clicked");
  })

  window.addEventListener("click", e => {
    if (e.target === form) {
      if (loginInput.classList.contains("clicked")) {
        loginInput.classList.remove("clicked");
      } else if (passwordInput.classList.contains("clicked")) {
        passwordInput.classList.remove("clicked");
      }
    } else if (e.target === accountContainer) {
      if (loginInput.classList.contains("clicked")) {
        loginInput.classList.remove("clicked");
      } else if (passwordInput.classList.contains("clicked")) {
        passwordInput.classList.remove("clicked");
      }
    }
  })
}

getActionsWithAccount();