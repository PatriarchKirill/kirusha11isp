const initialItems = [
    'Джокер',
    'Бэтмен',
    'Робин',
    'Пингвин',
    'Аркхам'
];

// Получаем элементы DOM
const itemList = document.getElementById('itemList');
const newItemInput = document.getElementById('newItem');
const searchInput = document.getElementById('search');
const addButton = document.getElementById('addButton');

// Функция для создания и добавления элемента в список
function addItem(item) {
    const li = document.createElement('li');
    li.textContent = item;
    itemList.appendChild(li);
}

// Функция для отображения начального списка
function renderList(items) {
    itemList.innerHTML = '';  // Очищаем список перед рендером
    items.forEach(item => addItem(item));
}

// Функция для поиска
function searchList(query) {
    const filteredItems = initialItems.filter(item => item.toLowerCase().includes(query.toLowerCase()));
    renderList(filteredItems);
}

// Обработчик добавления нового элемента
function handleAddItem() {
    const newItem = newItemInput.value.trim();
    if (newItem) {
        initialItems.push(newItem);  // Добавляем новый элемент в список
        addItem(newItem);  // Добавляем новый элемент в DOM
        newItemInput.value = '';  // Очищаем поле ввода
    }
}

// Обработчик нажатия клавиши Enter
newItemInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleAddItem();
    }
});

// Обработчик клика на кнопку добавления
addButton.addEventListener('click', handleAddItem);

// Обработчик поиска
searchInput.addEventListener('input', (e) => {
    searchList(e.target.value);
});

// Инициализация начального списка
renderList(initialItems);
