// Функция для отображения следующего слайда
function btn_run() {
    hide(spisok[x].classList, '100vw')
    if (x < spisok.length - 1) {
        x += 1
    } else {
        x = 0
    }
    setTimeout(() => {
        show(spisok[x].classList, '-100vw')
    }, 1000)

}

// Функция для отображения предыдущего слайда
function btn_back() {
    hide(spisok[x].classList, '-100vw')
    if (x != 0) {
        x -= 1
    } else {
        x = spisok.length - 1
    }
    setTimeout(() => {
        show(spisok[x].classList, '100vw')
    }, 1000)

}

// Функция для отображения нижного поля введёного в поле ввода
function btn_num() {
    let slideIndex = parseInt(document.getElementById('slide_num').value) - 1;
    if (slideIndex >= 0 && slideIndex < spisok.length) {
        hide(spisok[x].classList, '100vw')
        x = slideIndex;
        setTimeout(() => {
            show(spisok[x].classList, '-100vw')
        }, 1000)
        document.getElementById('error_message').innerText = '';
    } else {
        document.getElementById('error_message').innerText = 'Неправильный номер слайда';
    }
}

// Функция для отображения слайда
function show(classL, pos) {
    document.documentElement.style.setProperty('--pos', pos)
    classL.add('displayText')
    setTimeout(() => {
        document.documentElement.style.setProperty('--pos', '0')
    }, 20);
}

// Функция для скрытия слайда
function hide(classL, pos) {

    document.documentElement.style.setProperty('--pos', pos)
    setTimeout(() => {
        classL.remove('displayText')
        document.documentElement.style.setProperty('--pos', '0')
    }, 1000);
}
// Инициализируем индекс текущего слайда
let x = 0;

// Получаем def
const spisok = document.getElementsByClassName('def')

// Добавляем обработчики
document.getElementById('btn_run').addEventListener('click', btn_run)
document.getElementById('btn_back').addEventListener('click', btn_back)
document.getElementById('btn_num').addEventListener('click', btn_num)