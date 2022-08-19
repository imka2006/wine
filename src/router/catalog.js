const catalogWrapper = document.querySelector(".catalog__wrapper");

catalogWrapper.innerHTML = `
        <h2 class="catalog__title">Futured <span class="another__title">Products</span></h2>
        <ul class="catalog__filter--wrapper"></ul> 
        <div class="catalog__line"></div>
        <div class="catalog__content"></div>
    `;

const catalogFiltr = ["All", "Red", "Rose", "White"];

const catalogList = document.querySelector(".catalog__filter--wrapper");

for (let i = 0; i < catalogFiltr.length; i++) {
    catalogList.innerHTML += `
            <li class="catalog__item">${catalogFiltr[i]}</li>
        `;
}

const catalogItem = document.querySelectorAll(".catalog__item");
catalogItem[0].classList.add("click");

catalogItem.forEach((item) => {
    item.addEventListener("click", () => {
        catalogItem.forEach((inner) => {
            inner.classList.remove("click");
        });
        item.classList.add("click");
    });
});

const getData = async () => {
    const content = document.querySelector(".catalog__content");
    console.log(content);

    const result = await fetch("http://localhost:3000/wine");
    const data = await result.json();
    for (let i = 0; i < data.length; i++) {
        content.innerHTML += `
            <div class="catalog__block">
                <div class="catalog__sale">${data[i].sale}</div>
                <img class="catalog__image" src="${data[i].img}" alt="wine">
                <div class="catalog__info">
                    <h5 class="catalog__name">${data[i].years} ${data[i].name}</h5>
                </div>
                <div class="catalog__info">
                    <s class="catalog__discount">$${data[i].discount}.00</s>
                    <span class="catalog__price">$${data[i].price}.00</span>
                </div>
            </div>
        `;
    }
};
getData();
