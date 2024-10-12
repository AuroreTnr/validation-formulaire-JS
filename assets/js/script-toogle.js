const toggleBtn = document.querySelector(".burger-btn");
const navBar = document.querySelector(".nav-header")
console.log(toggleBtn);
console.log(navBar);


toggleBtn.addEventListener("click", handleClickToogleBtn);

function handleClickToogleBtn(){
    navBar.classList.toggle("active")
}

