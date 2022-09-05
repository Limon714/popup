const btn = document.querySelector('.btn');
const containerbox = document.querySelector('.container-box');
const closed = document.querySelector('.cls');

btn.addEventListener("click", (e) => {
    containerbox.style.display = "block";
    btn.style.display = "none";
})
closed.addEventListener("click", (e) => {
    containerbox.style.display = "none";
    btn.style.display = "block";
})

