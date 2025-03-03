const name = document.getElementById("newpage")
const menuIcon = document.getElementById('menu-icon');
const dropDownMenu = document.getElementById('drop-down-menu');


function openPage(page) {
    window.open(page, "-self")
}


menuIcon.addEventListener('click', () => {
    dropDownMenu.style.display = dropDownMenu.style.display === 'block' ? 'none' : 'block';
});