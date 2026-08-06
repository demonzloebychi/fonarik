document.addEventListener('DOMContentLoaded', () => {

  // Общее состояние формы
  let currentStep = 1;
  const totalSteps = 3;
  let selectedAmount = 300;
  let selectedFrequency = 'once'; // monthly | once

  // Элементы
  const form = document.querySelector('.donation-step__form');
  const customInput = document.querySelector('[data-custom-amount]');
  const amountBtns = document.querySelectorAll('[data-amount]');
  const toggleBtns = document.querySelectorAll('[data-frequency]');

  // 1. Обновление динамической суммы во всех местах (на кнопках оплаты)
  const updateAmountDisplay = () => {
    document.querySelectorAll('[data-btn-amount-text]').forEach(el => {
      el.textContent = selectedAmount || 0;
    });
  };

  // Валидация текущего шага перед переходом далее
  const validateStep = (step) => {
    if (step === 1) {
      if (!selectedAmount || selectedAmount <= 0) {
        alert('Пожалуйста, выберите или введите корректную сумму.');
        customInput?.focus();
        return false;
      }
    }

    if (step === 2) {
      const paymentMethod = form.querySelector('input[name="payment_method"]:checked');
      if (!paymentMethod) {
        alert('Пожалуйста, выберите способ оплаты.');
        return false;
      }
    }

    return true;
  };

  // 2. Функция переключения между шагами
  const goToStep = (stepNumber) => {
    const targetStep = parseInt(stepNumber, 10);
    if (isNaN(targetStep) || targetStep < 1 || targetStep > totalSteps) return;

    // Если пытаемся пойти ВПЕРЕД — проверяем текущий шаг
    if (targetStep > currentStep) {
      for (let s = currentStep; s < targetStep; s++) {
        if (!validateStep(s)) return;
      }
    }

    currentStep = targetStep;

    // Переключение видимости панелей
    document.querySelectorAll('[data-step-pane]').forEach(pane => {
      const paneStep = parseInt(pane.getAttribute('data-step-pane'), 10);
      if (paneStep === currentStep) {
        pane.classList.add('donation-step__pane_active');
      } else {
        pane.classList.remove('donation-step__pane_active');
      }
    });

    // Обновление навигации в сайдбаре
    document.querySelectorAll('[data-step-target]').forEach(navItem => {
      const navStep = parseInt(navItem.getAttribute('data-step-target'), 10);
      navItem.classList.remove('donation-step__nav-item_active', 'donation-step__nav-item_completed');

      if (navStep === currentStep) {
        navItem.classList.add('donation-step__nav-item_active');
      } else if (navStep < currentStep) {
        navItem.classList.add('donation-step__nav-item_completed');
      }
    });
  };

  // 3. Открытие поп-апа
  const openPopup = (popupId) => {
    const popup = document.getElementById(popupId);
    if (popup) {
      goToStep(1); // Всегда начинаем с 1 шага
      popup.classList.add('popup-overlay_active');
      popup.setAttribute('aria-hidden', 'false');
      document.body.classList.add('popup-open');
    }
  };

  // 4. Закрытие поп-апа
  const closePopup = (popup) => {
    popup.classList.remove('popup-overlay_active');
    popup.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('popup-open');
  };

  // ==========================================
  // Логика Шага 01 (Интерактив выбора суммы и периода)
  // ==========================================

  // Выбор периодичности (Ежемесячно / Разово)
  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      toggleBtns.forEach(b => b.classList.remove('donation-step__toggle-btn_active'));
      btn.classList.add('donation-step__toggle-btn_active');
      selectedFrequency = btn.getAttribute('data-frequency');
    });
  });

  // Выбор фиксированной суммы
  amountBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      amountBtns.forEach(b => b.classList.remove('donation-step__amount-btn_active'));
      btn.classList.add('donation-step__amount-btn_active');

      if (customInput) {
        customInput.value = '';
        customInput.classList.remove('donation-step__custom-amount-input_active');
      }

      selectedAmount = parseInt(btn.getAttribute('data-amount'), 10);
      updateAmountDisplay();
    });
  });

  // Ввод своей суммы
  if (customInput) {
    customInput.addEventListener('input', (e) => {
      const val = parseInt(e.target.value, 10);

      amountBtns.forEach(b => b.classList.remove('donation-step__amount-btn_active'));

      if (val && val > 0) {
        customInput.classList.add('donation-step__custom-amount-input_active');
        selectedAmount = val;
      } else {
        customInput.classList.remove('donation-step__custom-amount-input_active');
        selectedAmount = 0;
      }

      updateAmountDisplay();
    });
  }

  // ==========================================
  // Глобальная обработка кликов
  // ==========================================
  document.addEventListener('click', (e) => {

    // Открытие по кнопкам [data-open-popup="id"]
    const openBtn = e.target.closest('[data-open-popup]');
    if (openBtn) {
      e.preventDefault();
      const popupId = openBtn.getAttribute('data-open-popup');
      openPopup(popupId);
      return;
    }

    // Закрытие по элементу [data-close-popup]
    const closeBtn = e.target.closest('[data-close-popup]');
    if (closeBtn) {
      const activePopup = closeBtn.closest('.popup-overlay');
      if (activePopup) {
        closePopup(activePopup);
      }
      return;
    }

    // Кнопка Следующий шаг [data-step-next]
    if (e.target.closest('[data-step-next]')) {
      goToStep(currentStep + 1);
      return;
    }

    // Кнопка Предыдущий шаг [data-step-prev]
    if (e.target.closest('[data-step-prev]')) {
      goToStep(currentStep - 1);
      return;
    }

    // Клик по пункту в сайдбаре [data-step-target="N"]
    const navTarget = e.target.closest('[data-step-target]');
    if (navTarget) {
      const targetStep = navTarget.getAttribute('data-step-target');
      goToStep(targetStep);
      return;
    }

  });

  // Закрытие при нажатии Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const activePopup = document.querySelector('.popup-overlay_active');
      if (activePopup) {
        closePopup(activePopup);
      }
    }
  });

  // ==========================================
  // Отправка формы (Шаг 3)
  // ==========================================
  if (form) {
    form.addEventListener('submit', async (e) => {
      // ПЕРВЫМ ДЕЛОМ глушим стандартный HTTP POST браузера
      e.preventDefault();

      // Проверяем валидацию 1 и 2 шага перед финальной отправкой
      if (!validateStep(1) || !validateStep(2)) {
        return;
      }

      const submitBtn = form.querySelector('button[type="submit"]');

      try {
        // Собираем данные из полей 3-го и предыдущих шагов
        const formData = {
          frequency: selectedFrequency,
          amount: selectedAmount,
          paymentMethod: form.querySelector('input[name="payment_method"]:checked')?.value || 'card',
          comment: form.querySelector('input[name="comment"]')?.value.trim() || '',
          firstname: form.querySelector('input[name="firstname"]')?.value.trim() || '',
          lastname: form.querySelector('input[name="lastname"]')?.value.trim() || '',
          email: form.querySelector('input[name="email"]')?.value.trim() || '',
          privacyPolicy: form.querySelector('input[name="privacy_policy"]')?.checked || false,
          offerAgreement: form.querySelector('input[name="offer_agreement"]')?.checked || false,
        };

        if (submitBtn) submitBtn.disabled = true;

        const response = await fetch('/api/donate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const result = await response.json().catch(() => ({}));

        if (!response.ok) {
          throw new Error(result.message || `Сервер ответил со статусом ${response.status}`);
        }

        alert('Спасибо за ваше пожертвование!');
        form.reset();
        closePopup(form.closest('.popup-overlay'));

      } catch (error) {
        console.error('Ошибка при отправке формы:', error);
        alert(`Ошибка при отправке: ${error.message}`);
      } finally {
        if (submitBtn) submitBtn.disabled = false;
      }
    });
  }

});