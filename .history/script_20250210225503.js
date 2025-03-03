const menuIcon = document.getElementById('menu-icon');
const dropDownMenu = document.getElementById('drop-down-menu');

menuIcon.addEventListener('click', () => {
    if (dropDownMenu.style.display === 'block') {
        dropDownMenu.style.display = 'none';
        menuIcon.classList.remove('active');
    } else {
        dropDownMenu.style.display = 'block';
        menuIcon.classList.add('active');
    }
});

document.addEventListener('click', (e) => {
    if (e.target !== menuIcon && e.target !== dropDownMenu) {
        dropDownMenu.style.display = 'none';
        menuIcon.classList.remove('active');
    }
});