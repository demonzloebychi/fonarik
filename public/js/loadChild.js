document.addEventListener('DOMContentLoaded', () => {
  const loadMoreButtons = document.querySelectorAll('[data-load-more]');

  loadMoreButtons.forEach(btn => {
    btn.addEventListener('click', async () => {
      const targetId = btn.dataset.target;
      const container = document.getElementById(targetId);
      const filter = btn.dataset.filter; 
      
      // Калькулируем, сколько карточек нужно показать после клика (3 -> просим 6)
      const currentCount = parseInt(btn.dataset.showCount || '3');
      const nextCount = currentCount + 3; 

      if (!container) return;

      btn.disabled = true;

      try {
        // Стучимся на единый чистый URL
        const response = await fetch(`/api/children?filter=${filter}&limit=${nextCount}`);
        if (!response.ok) throw new Error('Network error');
        
        const data = await response.json();

        if (data.html) {
          // Заменяем содержимое сетки на обновленный пак от сервера
          container.innerHTML = data.html;
          
          // Перезаписываем счетчик на кнопке
          btn.dataset.showCount = nextCount;
        }

        // Если сервер вернул hasMore: false — убираем кнопку
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
