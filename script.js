function showTab(tabId) {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.classList.add('hidden');
  });

  document.getElementById(tabId).classList.remove('hidden');
}

function openMap(link) {
  window.open(link, '_blank');
}