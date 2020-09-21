
document.querySelector('.wrapper').classList.add('loaded');

$(document).ready(function() {

    $.fn.setCursorPosition = function(pos) {
        if ($(this).get(0).setSelectionRange) {
            $(this).get(0).setSelectionRange(pos, pos);
        } else if ($(this).get(0).createTextRange) {
            let range = $(this).get(0).createTextRange();
            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    };

    //маски для телефонов
    $(".phone").click(function(){
        $(this).setCursorPosition(3);
    }).mask("+7 (999) 99-99-999",{autoclear: false});

    let controller = new ScrollMagic.Controller();
    let revealElements = document.getElementsByClassName("icon-animate");
    for (let i = 0; i < revealElements.length; i++) { // create a scene for each element
        new ScrollMagic.Scene({
            triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
            offset: 50,												 // start a little later
            triggerHook: 0.9,
        })
            .setClassToggle(revealElements[i], "visible") // add class toggle
            .addTo(controller);
    }
});


let popupHeader = document.querySelector('.popup-header-bg');
let popupHeaderOpener = document.querySelectorAll('.popup-header-open');
let popupHeaderClose = popupHeader.querySelector('.popup-header__close');

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

popupHeaderClose.addEventListener('click', () => {
    popupHeader.style.opacity = '0';
    setTimeout(() => {
        popupHeader.style.zIndex = '-1';
        popupHeader.style.visibility = 'hidden';
    },200)
})

let blocks = document.querySelectorAll('.block');
let popupDesc = document.querySelector('.popup-description-bg');
let popupDescClose = popupDesc.querySelector('.popup-description__close');
let popupDescTop = popupDesc.querySelector('.popup-description__top');
let popupDescTopImg = popupDescTop.querySelector('img');
let popupDescTopSpan = popupDescTop.querySelector('span');
let popupDescName = popupDesc.querySelector('.popup-description__name');
let popupDescImg = popupDesc.querySelector('.popup-description__image');
let popupDescList = popupDesc.querySelector('.popup-description__list');
let popupDescToOrder = popupDesc.querySelector('.popup-description__button');
let popupDescFull = popupDesc.querySelector('.popup-description__full');

let popupOrder = document.querySelector('.popup-order-bg');
let popupOrderName = popupOrder.querySelector('.popup-order__title').querySelector('span');
let popupOrderClose = popupOrder.querySelector('.popup-order__close');

let popupThanks = document.querySelector('.popup-thanks-bg');
let popupThanksClose = popupThanks.querySelector('.popup-order__close');

popupThanksClose.addEventListener('click', (event) => {
    popupThanks.style.opacity = '0';
    setTimeout(() => {
        popupThanks.style.zIndex = '-1';
        popupThanks.style.visibility = 'hidden';
    },200)
})

popupOrderClose.addEventListener('click', (event) => {
    popupOrder.style.opacity = '0';
    setTimeout(() => {
        popupOrder.style.zIndex = '-1';
        popupOrder.style.visibility = 'hidden';
    },200)
})

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

popupThanks.addEventListener('click', (event) => {
    if (event.target === popupThanks) {
        popupThanks.style.opacity = '0';
        setTimeout(() => {
            popupThanks.style.zIndex = '-1';
            popupThanks.style.visibility = 'hidden';
        },200)
    }
})

blocks.forEach(block => {
    let top = block.querySelector('.block__top').querySelector('span').textContent;
    let name = block.querySelector('.block__name');
    let img = block.querySelector('.block__image');
    let lists = block.querySelectorAll('.block__paragraph');
    let openMore = block.querySelector('.block__more');
    let toOrder = block.querySelector('.block__button');
    let full = block.dataset.full;
    openMore.addEventListener('click', () => {
        popupDescName.textContent = name.textContent;
        popupDescImg.src = img.src;
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


let forms = document.querySelectorAll('form');

forms.forEach(form => {
    let inputs = form.querySelectorAll('input');
    let wrongMessage = form.querySelector('.wrong');
    let button = form.querySelector('button');
    button.addEventListener('click', () => {
        if (inputs[0].value === '' || inputs[1].value.length < 10) {
            wrongMessage.style.visibility = 'visible';
            return false
        } else {
            wrongMessage.style.visibility = 'hidden';
            popupThanks.style.opacity = '1';
            popupThanks.style.zIndex = '300';
            popupThanks.style.visibility = 'visible';
            setTimeout(() => {
                popupOrder.style.opacity = '0';
                popupOrder.style.zIndex = '-1';
                popupOrder.style.visibility = 'hidden';
                popupHeader.style.opacity = '0';
                popupHeader.style.zIndex = '-1';
                popupHeader.style.visibility = 'hidden';
            },200)
            form.submit();
        }
    })
})

let bg = document.querySelector('.gifts__right').querySelector('img');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    bg.style.transform = 'translate(-' + x * 30 + 'px, -' + y * 30 + 'px)';
});