document.addEventListener("DOMContentLoaded", () => {
  const forms = document.querySelectorAll('[data-form="donation"]')

  forms.forEach((form) => {
    const amountRadios = form.querySelectorAll("[data-amount-option]")
    const customAmountInput = form.querySelector("[data-amount-custom]")
    const submitBtn = form.querySelector("[data-submit-btn]")

    // 1. Взаимоисключение для сумм: если вводим свою сумму — снимаем radio
    customAmountInput?.addEventListener("input", () => {
      if (customAmountInput.value) {
        amountRadios.forEach((radio) => (radio.checked = false))
      }
    })

    // Если кликаем на radio — очищаем текстовое поле своей суммы
    amountRadios.forEach((radio) => {
      radio.addEventListener("change", () => {
        if (radio.checked && customAmountInput) {
          customAmountInput.value = ""
        }
      })
    })

    // 2. Обработка отправки формы
    form.addEventListener("submit", async (e) => {
      e.preventDefault()

      try {
        const checkedRadio = form.querySelector("[data-amount-option]:checked")
        const customValue = customAmountInput?.value.trim()
        const finalAmount = customValue
          ? parseFloat(customValue)
          : checkedRadio
            ? parseFloat(checkedRadio.value)
            : 0

        if (!finalAmount || finalAmount <= 0) {
          alert("Пожалуйста, выберите или введите сумму пожертвования.")
          customAmountInput?.focus()
          return
        }

        const formData = {
          paymentType:
            form.querySelector("[data-payment-type]:checked")?.value || "once",
          amount: finalAmount,
          name: form.querySelector('[data-field="name"]')?.value.trim(),
          email: form.querySelector('[data-field="email"]')?.value.trim(),
          agreement:
            form.querySelector('[data-field="agreement"]')?.checked ?? true,
        }

        if (submitBtn) submitBtn.disabled = true

        // Делаем запрос
        const response = await fetch("/api/donate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })

        const result = await response.json().catch(() => ({}))

        // Если бэкенд вернул статус 4xx или 5xx
        if (!response.ok) {
          throw new Error(
            result.message || `Сервер ответил со статусом ${response.status}`,
          )
        }

        alert("Спасибо за ваш вклад!")
        form.reset()
      } catch (error) {
        console.error("Детали ошибки отправки:", error)
        alert(`Ошибка отправки: ${error.message}`)
      } finally {
        if (submitBtn) submitBtn.disabled = false
      }
    })
  })
})
