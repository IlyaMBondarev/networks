
document.querySelector('.wrapper').classList.add('loaded');

$(document).ready(function() {
    //маски для телефонов
    $(".phone").mask("+7 (999) 99-99-999");
});

let forms = document.querySelectorAll('form');

forms.forEach(form => {
    let inputs = form.querySelectorAll('input');
    let wrongMessage = form.querySelector('.wrong');
    let button = form.querySelector('button');
    button.addEventListener('click', () => {
        if (inputs[0].value === '' || inputs[1].value === '') {
            wrongMessage.style.visibility = 'visible';
            return false
        } else {
            wrongMessage.style.visibility = 'hidden';
            form.submit();
        }
    })
})

let popupHeader = document.querySelector('.popup-header-bg');
let popupHeaderOpener = document.querySelectorAll('.popup-header-open');

popupHeaderOpener.forEach(opener => {
    opener.addEventListener('click', () => {
        popupHeader.style.zIndex = '100';
        popupHeader.style.visibility = 'visible';
        popupHeader.style.opacity = '1';
    })
})

popupHeader.addEventListener('click', (event) => {
    if (event.target === popupHeader) {
        popupHeader.style.opacity = '0';
        setTimeout(() => {
            popupHeader.style.zIndex = '-1';
            popupHeader.style.visibility = 'hidden';
        },200)
    }
})

let blocks = document.querySelectorAll('.block');
let popupDesc = document.querySelector('.popup-description-bg');
let popupDescClose = popupDesc.querySelector('.popup-description__close');
let popupDescTop = popupDesc.querySelector('.popup-description__top');
let popupDescTopImg = popupDescTop.querySelector('img');
let popupDescTopSpan = popupDescTop.querySelector('span');
let popupDescName = popupDesc.querySelector('.popup-description__name');
let popupDescList = popupDesc.querySelector('.popup-description__list');
let popupDescToOrder = popupDesc.querySelector('.popup-description__button');
let popupDescFull = popupDesc.querySelector('.popup-description__full');

let popupOrder = document.querySelector('.popup-order-bg');
let popupOrderName = popupOrder.querySelector('.popup-order__title').querySelector('span');

popupOrder.addEventListener('click', (event) => {
    if (event.target === popupOrder) {
        popupOrder.style.opacity = '0';
        setTimeout(() => {
            popupOrder.style.zIndex = '-1';
            popupOrder.style.visibility = 'hidden';
        },200)
    }
})

popupDescToOrder.addEventListener('click', () => {
    popupOrderName.textContent = popupDescName.textContent;
    popupOrder.style.zIndex = '200';
    popupOrder.style.visibility = 'visible';
    popupOrder.style.opacity = '1';
})

popupDesc.addEventListener('click', (event) => {
    if (event.target === popupDesc) {
        popupDesc.style.opacity = '0';
        setTimeout(() => {
            popupDesc.style.zIndex = '-1';
            popupDesc.style.visibility = 'hidden';
        },200)
    }
})

popupDescClose.addEventListener('click', () => {
    popupDesc.style.opacity = '0';
    setTimeout(() => {
            popupDesc.style.zIndex = '-1';
            popupDesc.style.visibility = 'hidden';
        },200)
})

blocks.forEach(block => {
    let top = block.querySelector('.block__top').querySelector('span').textContent;
    let name = block.querySelector('.block__name');
    let lists = block.querySelectorAll('.block__paragraph');
    let openMore = block.querySelector('.block__more');
    let toOrder = block.querySelector('.block__button');
    let full = name.dataset.full;
    openMore.addEventListener('click', () => {
        popupDescName.textContent = name.textContent;
        popupDescTopImg.src = `img/300-serie/${top}.svg`;
        popupDescTopImg.alt = `${top}`;
        popupDescTopSpan.textContent = `${top}`;
        popupDescFull.href = `${full}`;
        let inner = '';
        lists.forEach(list => {
            inner += '<li class="popup-description__paragraph">' + list.textContent + '</li>'
        })
        popupDescList.innerHTML = inner;
        popupDesc.style.zIndex = '100';
        popupDesc.style.visibility = 'visible';
        popupDesc.style.opacity = '1';
    })
    toOrder.addEventListener('click', () => {
        popupOrderName.textContent = name.textContent;
        popupOrder.style.zIndex = '200';
        popupOrder.style.visibility = 'visible';
        popupOrder.style.opacity = '1';
    })
})