

document.addEventListener('DOMContentLoaded', function() {
    fetch('../components/nav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('nav-placeholder').innerHTML = data;
            const currentPage = window.location.pathname.split("/").pop() || 'index.html';
            document.querySelector(`a[href="${currentPage}"]`)?.classList.add('current');
        });
});