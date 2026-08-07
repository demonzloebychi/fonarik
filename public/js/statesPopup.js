// Оборачиваем логику в один глобальный объект
window.PopupStates = {
  // Находим элементы внутри объекта (чтобы не плодить глобальные переменные)
  successPopup: document.querySelector("[data-success-popup]"),
  failedPopup: document.querySelector("[data-failed-popup]"),

  openSuccess() {
    this.successPopup.classList.add("active")
  },
  closeSuccess() {
    this.successPopup.classList.remove("active")
  },
  openFailed(message = null) {
    if (!this.failedPopup) 
        return

    const messageHolder = this.failedPopup.querySelector('[data-popup-message]')

    if (message && messageHolder) {
        messageHolder.textContent = message;
    }
    this.failedPopup.classList.add("active")
  },
  closeFailed() {
    this.failedPopup.classList.remove("active")
  },
}

const closeSuccessBtns =
  window.PopupStates.successPopup?.querySelectorAll("[data-close-popup]")
const closeFailedBtns =
  window.PopupStates.failedPopup?.querySelectorAll("[data-close-popup]")

if (closeSuccessBtns) {
  closeSuccessBtns.forEach((button) => {
    button.addEventListener("click", function () {
      window.PopupStates.closeSuccess()
    })
  })
}

if (closeFailedBtns) {
  closeFailedBtns.forEach((button) => {
    button.addEventListener("click", function () {
      window.PopupStates.closeFailed()
    })
  })
}
