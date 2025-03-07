document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanels = document.querySelectorAll('.tab-panel');

    // Set initial active tab
    tabButtons[0].classList.add('active');
    document.getElementById('research').classList.add('active');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and panels
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanels.forEach(panel => panel.classList.remove('active'));

            // Add active class to clicked button
            button.classList.add('active');

            // Show corresponding panel
            const tabId = button.getAttribute('data-tab').toLowerCase();
            document.getElementById(tabId).classList.add('active');
        });
    });
});