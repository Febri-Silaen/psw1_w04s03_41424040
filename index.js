function searchHandler() {
    const searchInput = document.getElementById('search-input').value.trim();
    if (searchInput) {
        window.location.href = `search.html?q=${searchInput}`;
    }
}