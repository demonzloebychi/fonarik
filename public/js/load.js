document.addEventListener('DOMContentLoaded', () => {
  const loadMoreButtons = document.querySelectorAll('[data-load-more]');

  loadMoreButtons.forEach(btn => {
    btn.addEventListener('click', async () => {
      const targetId = btn.dataset.target;
      const container = document.getElementById(targetId);

      if (!container) return;

      const filter = btn.dataset.filter;
      const contentType = btn.dataset.type; // 'docs', 'reports', 'news' или undefined
      const limitStep = parseInt(btn.dataset.limitStep || '3', 10);
      const currentCount = parseInt(btn.dataset.showCount || '3', 10);
      const nextCount = currentCount + limitStep;

      btn.disabled = true;

      try {
        let url = `/api/children?filter=${filter || 'all'}&limit=${nextCount}`;

        if (contentType === 'news') {
          url = `/api/news?limit=${nextCount}`;
        } else if (contentType === 'docs' || contentType === 'reports') {
          url = `/api/docs?type=${contentType}&limit=${nextCount}`;
        }

        const response = await fetch(url);
        if (!response.ok) throw new Error('Network error');

        const data = await response.json();

        if (data.html) {
          container.innerHTML = data.html;
          btn.dataset.showCount = nextCount;
        }

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