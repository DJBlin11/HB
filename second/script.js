const containers = document.querySelectorAll('.container');
let currentIndex = 0;

function updateActiveContainer() {
    // Скрываем все контейнеры
    containers.forEach((container, index) => {
        container.classList.remove('active'); // Убираем активный класс
        container.style.display = 'none'; // Скрываем контейнер
    });

    // Показываем текущий контейнер
    if (containers[currentIndex]) {
        containers[currentIndex].classList.add('active'); // Добавляем активный класс
        containers[currentIndex].style.display = 'block'; // Показываем контейнер
    }

    // Проверка на наличие следующего контейнера
    document.querySelector('.arrow.right').disabled = (currentIndex === containers.length - 1);
    document.querySelector('.arrow.left').disabled = (currentIndex === 0);
}

document.querySelector('.arrow.right').addEventListener('click', () => {
    if (currentIndex < containers.length - 1) {
        currentIndex++;
        updateActiveContainer();
    }
});

document.querySelector('.arrow.left').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateActiveContainer();
    }
});

// Инициализация первого контейнера
updateActiveContainer();
