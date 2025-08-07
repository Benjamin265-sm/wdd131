document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('favoriteBtn');
  if (btn) {
    btn.addEventListener('click', () => {
      const favs = JSON.parse(localStorage.getItem('favorites') || '[]');
      const id = window.location.hash || window.location.pathname;
      if (!favs.includes(id)) {
        favs.push(id);
        localStorage.setItem('favorites', JSON.stringify(favs));
        btn.textContent = 'Added to Favorites';
        btn.disabled = true;
      }
    });
  }

  // Display favorites sidebar if exists
  const sidebar = document.getElementById('favoritesList');
  if (sidebar) {
    const favs = JSON.parse(localStorage.getItem('favorites') || '[]');
    favs.forEach(id => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = id.startsWith('#') ? 'destinations.html' + id : 'destinations.html' + id;
      a.textContent = id.replace('#', '').replace('-', ' ');
      li.appendChild(a);
      sidebar.appendChild(li);
    });
  }
});

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = "Last Modified " + lastModified;
