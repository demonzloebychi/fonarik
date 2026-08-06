document.addEventListener('DOMContentLoaded', () => {

  // Общее состояние формы
  let currentStep = 1;
  const totalSteps = 3;
  let selectedAmount = 300;
  let selectedFrequency = 'monthly'; // monthly | once

  // Элементы
  const customInput = document.querySelector('[data-custom-amount]');
  const amountBtns = document.querySelectorAll('[data-amount]');
  const toggleBtns = document.querySelectorAll('[data-frequency]');

  // 1. Обновление динамической суммы во всех местах (на кнопках оплаты)
  const updateAmountDisplay = () => {
    document.querySelectorAll('[data-btn-amount-text]').forEach(el => {
      el.textContent = selectedAmount || 0;
    });
  };

  // 2. Функция переключения между шагами
  const goToStep = (stepNumber) => {
    const targetStep = parseInt(stepNumber, 10);
    if (isNaN(targetStep) || targetStep < 1 || targetStep > totalSteps) return;

    currentStep = targetStep;

    // Переключениевидимости панелей
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

      // Сбрасываем подсвеченные фиксированные кнопки
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

});