document.addEventListener('DOMContentLoaded', () => {
  const loadMoreButtons = document.querySelectorAll('[data-load-more]');

  loadMoreButtons.forEach(btn => {
    btn.addEventListener('click', async () => {
      const targetId = btn.dataset.target;
      const container = document.getElementById(targetId);
      
      // Параметры для детей
      const filter = btn.dataset.filter; 
      
      // Параметры для документов / отчетов
      const contentType = btn.dataset.type; // 'docs' или 'reports'
      
      // Динамический шаг: берем 3 для детей, либо то, что указано в лимите документов (например, 4)
      const limitStep = parseInt(btn.dataset.limitStep || '3'); 
      const currentCount = parseInt(btn.dataset.showCount || '3');
      const nextCount = currentCount + limitStep; 

      if (!container) return;

      btn.disabled = true;

      try {
        // Формируем правильный URL в зависимости от типа контента
        let url = `/api/children?filter=${filter}&limit=${nextCount}`;
        if (contentType) {
          url = `/api/docs?type=${contentType}&limit=${nextCount}`;
        }

        const response = await fetch(url);
        if (!response.ok) throw new Error('Network error');
        
        const data = await response.json();

        if (data.html) {
          container.innerHTML = data.html;
          // Обновляем текущий счетчик на кнопке
          btn.dataset.showCount = nextCount;
        }

        // Если сервер сказал, что больше элементов нет — скрываем кнопку
        if (!data.hasMore) {
          btn.style.display = 'none';
        }
      } catch (error) {
        console.error('Load more error:', error);
      } finally {
        btn.disabled = false;
      }
    });
  });
});
