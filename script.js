const box = document.getElementsByClassName('myDiv');

box.addEventListener("mouseover", () => {
    box.classList.toggle('animate');
});

box.addEventListener("mouseleave", () => {
    box.classList.toggle('anim');
})