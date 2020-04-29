let tab = document.querySelectorAll('.info-header-tab'),
    //родитель меню
    info = document.querySelector('.info-header'),
    //каждый таб
    tabContent = document.querySelectorAll('.info-tabcontent');

// скрывает табы, все кроме первого
function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');
    }
}

hideTabContent(1);

// показывает тот таб, который нужно
function showTabContent(b) {
    if (tabContent[b].classList.contains('hide')) {
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
    }
}

//действия при клике
info.addEventListener('click', function(event) {
    let target = event.target;
    if (target && target.classList.contains('info-header-tab')) {
        //совпоставляем target и таб
        for (let i = 0; i < tab.length; i++) {
            if (target == tab[i]) {
                hideTabContent(0);
                showTabContent(i);
                break;
            }
        }
    }
});