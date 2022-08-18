const catalogWrapper = document.querySelector(".catalog__wrapper");

catalogWrapper.innerHTML = `
    <h2 class="catalog__title">Futured <span class="another__title">Products</span></h2>
    <ul class="catalog__filter--wrapper"></ul> 
    <div class="catalog__line"></div>
    <div calss="catalog__content"></div>
`;

const catalogFiltr = ["All","Red","Rose","White"];

const catalogList = document.querySelector(".catalog__filter--wrapper")

for (let i = 0; i < catalogFiltr.length; i++) {
    catalogList.innerHTML += `
        <li class="catalog__item">${catalogFiltr[i]}</li>
    `;
}

const catalogItem = document.querySelectorAll(".catalog__item");
catalogItem[0].classList.add("click")

catalogItem.forEach((item) => {
    item.addEventListener("click", () => {
        catalogItem.forEach((inner) => {
            inner.classList.remove("click")
        })
        item.classList.add("click")
    })
})




const getData = async () => {
    
}