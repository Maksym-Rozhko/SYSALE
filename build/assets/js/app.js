let select = function() {
    const cards= document.querySelectorAll('.cards__item');
    const selectHeader = document.querySelectorAll('.select__header');
    const selectItem = document.querySelectorAll('.select__item');

    selectHeader.forEach(item => {
        item.addEventListener('mouseover', selectOnToogle);
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose);
    });

    for(let card of cards) {
        card.addEventListener('mouseout', e => {
            let selects = document.querySelectorAll('.select');
            for (let select of selects) {
                target = e.target;
                if (target === card) {
                    select.classList.remove('is-active');
                }
            }
        });
    }

    function selectOnToogle() {
        this.parentElement.classList.add('is-active');
    }

    function selectChoose() {
        let itemText = this.innerText;
        let select = this.closest('.select');
        let currentText = select.querySelector('.select__current');
        currentText.innerText = itemText;
        select.classList.remove('is-active');
    }
}

select();

const baskets = document.querySelectorAll('.cards__btn-basket');
const cardsBuyBtns = document.querySelectorAll('.cards__buy');

for (let basket of baskets) {
    basket.addEventListener('click', e => {
        e.preventDefault();
        basket.classList.toggle('cards__btn-basket--active');
        let targetDataIdBasket = basket.getAttribute("data-basket");
        findDataId(targetDataIdBasket);
    });
}

for (let btn of cardsBuyBtns) {
    btn.addEventListener('click', e => {
        e.preventDefault();
        btn.classList.toggle('cards__buy--active');
        let targetDataIdBtn = btn.getAttribute("data-card");
        findDataId(targetDataIdBtn);
    });
}

const findDataId = (dataId) => {
    switch(dataId) {
        case 'data-basket-1':
            cardsBuyBtns[0].classList.toggle('cards__buy--active');
            break;
        case 'data-basket-2':
            cardsBuyBtns[1].classList.toggle('cards__buy--active');
            break;
        case 'data-basket-3':
            cardsBuyBtns[2].classList.toggle('cards__buy--active');
            break;
        case 'card-1':
            baskets[0].classList.toggle('cards__btn-basket--active');
            break;
        case 'card-2':
            baskets[1].classList.toggle('cards__btn-basket--active');
            break;
        case 'card-3':
            baskets[2].classList.toggle('cards__btn-basket--active');
            break;
        default:
            baskets.classList.remove('cards__btn-basket--active');
            baskets.classList.remove('cards__buy--active');
    }
}

let checkboxDescr = document.querySelectorAll('.checkbox__descr');
let currentPrice = document.querySelectorAll('.cards__price');

let cardsAmount = document.querySelectorAll('.cards__amount');

for (let counter of cardsAmount) {
    counter.addEventListener('click', e => {
        let target = e.target;
        let container = e.currentTarget;
        let counter = container.querySelectorAll('.cards__counter')[0];
        let sum = target.querySelectorAll('.cards__price');
        let count = parseInt(counter.getAttribute("data-count"));
        let price = parseInt(counter.getAttribute("data-price"));
        
    	if (target.classList.contains('decrease')) {
            count = count === 1 ? count : (count - 1);
        } else if (target.classList.contains('increase')){
            count += 1;
        }
        sum.innerHTML = price * count;
        counter.setAttribute('data-count', count);
        counter.value = count;
    });
};


