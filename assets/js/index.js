const togleBtn = document.getElementById("togle-btn");
const headerNav = document.getElementById("header-nav");
const showMenu = () => {
  togleBtn.addEventListener('click', () => {
    headerNav.classList.toggle('hidden');
    togleBtn.classList.toggle('change')
  });
  // console.log(togleBtn);
}
showMenu();