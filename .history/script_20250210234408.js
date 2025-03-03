const dropdownButton = document.querySelector('.dropdown-button');
const dropdownContent = document.querySelector('.dropdown-content');

dropdownButton.addEventListener('click', () => {
    dropdownContent.classList.toggle('show');
});

window.addEventListener('click', (e) => {
    if (!e.target.classList.contains('dropdown-button') && !e.target.classList.contains('dropdown-content')) {
        dropdownContent.classList.remove('show');
    }
});