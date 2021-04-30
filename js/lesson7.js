// Игра змейка. Урок 7
// Глобальные переменные:                            
var FIELD_SIZE_X = 20; //строки
var FIELD_SIZE_Y = 20; //столбцы
var SNAKE_SPEED = 200; // Интервал между перемещениями змейки
var snake = []; // Сама змейка
var danger = [];
var direction = 'y+'; // Направление движения змейки
var gameIsRunning = false; // Запущена ли игра
var snakeTimer; // Таймер змейки
var foodTimer; // Таймер для еды
var score = 0; // Результат
var getScore;
var dangerTimer;

function init() {
    prepareGameField(); // Генерация поля

    var wrap = document.getElementsByClassName('wrap')[0];
    // Подгоняем размер контейнера под игровое поле


    if (16 * (FIELD_SIZE_X + 1) < 380) {
        wrap.style.width = '380px';
    } else {
        wrap.style.width = (16 * (FIELD_SIZE_X + 1)).toString() + 'px';
    }

    wrap.style.width = '400px';
    // События кнопок Старт и Новая игра
    document.getElementById('snake-start').addEventListener('click', startGame);
    document.getElementById('snake-renew').addEventListener('click', refreshGame);

    // Отслеживание клавиш клавиатуры
    addEventListener('keydown', changeDirection);
}

/**
 * Функция генерации игрового поля
 */
function prepareGameField() {
    // Создаём таблицу
    var gameTable = document.createElement('table');
    gameTable.setAttribute('class', 'game-table');

    // Генерация ячеек игровой таблицы
    for (var i = 0; i < FIELD_SIZE_X; i++) {
        // Создание строки
        var row = document.createElement('tr');
        row.className = 'game-table-row row-' + i;

        for (var j = 0; j < FIELD_SIZE_Y; j++) {
            // Создание ячейки
            var cell = document.createElement('td');
            cell.className = 'game-table-cell cell-' + i + '-' + j;

            row.appendChild(cell); // Добавление ячейки
        }
        gameTable.appendChild(row); // Добавление строки
    }

    document.getElementById('snake-field').appendChild(gameTable); // Добавление таблицы
}

/**
 * Старт игры
 */
function startGame() {
    gameIsRunning = true;
    respawn(); //создали змейку

    snakeTimer = setInterval(move, SNAKE_SPEED); //каждые 200мс запускаем функцию move
    setTimeout(createFood, 5000);
    setTimeout(createDanger, 4000);
}

/**
 * Функция расположения змейки на игровом поле
 */
function respawn() {
    // Змейка - массив td
    // Стартовая длина змейки = 2

    // Respawn змейки из центра
    var startCoordX = Math.floor(FIELD_SIZE_X / 2);
    var startCoordY = Math.floor(FIELD_SIZE_Y / 2);

    // Хвост змейки
    var snakeTail = document.getElementsByClassName('cell-' + startCoordY + '-' + startCoordX)[0];
    snakeTail.setAttribute('class', snakeTail.getAttribute('class') + ' snake-unit');
    // Голова змейки
    var snakeHead = document.getElementsByClassName('cell-' + (startCoordY - 1) + '-' + startCoordX)[0];
    snakeHead.setAttribute('class', snakeHead.getAttribute('class') + ' snake-unit');

    snake.push(snakeTail);
    snake.push(snakeHead);
}

/**
 * Движение змейки
 */
function move() {
    //console.log('move',direction);
    // Сборка классов
    var snakeHeadClasses = snake[snake.length - 1].getAttribute('class').split(' ');

    // Сдвиг головы
    var newUnit;
    var snakeCoords = snakeHeadClasses[1].split('-'); //преобразовали строку в массив
    var coordY = parseInt(snakeCoords[1]);
    var coordX = parseInt(snakeCoords[2]);

    // Определяем новую точку
    if (direction == 'x-') {
        newUnit = document.getElementsByClassName('cell-' + (coordY) + '-' + (coordX - 1))[0];
    } else if (direction == 'x+') {
        newUnit = document.getElementsByClassName('cell-' + (coordY) + '-' + (coordX + 1))[0];
    } else if (direction == 'y+') {
        newUnit = document.getElementsByClassName('cell-' + (coordY - 1) + '-' + (coordX))[0];
    } else if (direction == 'y-') {
        newUnit = document.getElementsByClassName('cell-' + (coordY + 1) + '-' + (coordX))[0];
    }

    // Проверки
    // 1) new_unit не часть змейки
    // 2) Змейка не ушла за границу поля
    //console.log(new_unit);

    if (!isSnakeUnit(newUnit) && !isDangerUnit(newUnit) && newUnit !== undefined) {
        // Добавление новой части змейки
        newUnit.setAttribute('class', newUnit.getAttribute('class') + ' snake-unit');
        snake.push(newUnit);

        // Проверяем, надо ли убрать хвост
        if (!haveFood(newUnit)) {
            // Находим хвост
            var removed = snake.splice(0, 1)[0];
            var classes = removed.getAttribute('class').split(' ');

            // удаляем хвост
            removed.setAttribute('class', classes[0] + ' ' + classes[1]);
        }
    } else {
        finishTheGame();
    }
}

/**
 * Проверка на змейку
 * @param unit
 * @returns {boolean}
 */
function isSnakeUnit(unit) {
    var check = false;

    if (snake.includes(unit)) {
        check = true;
    }
    return check;
}


function isDangerUnit(unit) {
    var check = false;

    if (danger.includes(unit)) {
        check = true;
    }
    return check;
}
/**
 * проверка на еду
 * @param unit
 * @returns {boolean}
 */
function haveFood(unit) {
    var check = false;

    var unitClasses = unit.getAttribute('class').split(' ');

    // Если еда
    if (unitClasses.includes('food-unit')) {
        check = true;
        createFood();

        score++;

        console.log(score);
        getScore = document.getElementById("get-score").innerHTML = score;
    }
    return check;
}

/**
 * Создание еды
 */
function createFood() {
    var foodCreated = false;

    while (!foodCreated) { //пока еду не создали
        // рандом
        var foodX = Math.floor(Math.random() * FIELD_SIZE_X);
        var foodY = Math.floor(Math.random() * FIELD_SIZE_Y);

        var foodCell = document.getElementsByClassName('cell-' + foodY + '-' + foodX)[0];
        var foodCellClasses = foodCell.getAttribute('class').split(' ');

        // проверка на змейку
        if (!foodCellClasses.includes('snake-unit')) {
            var classes = '';
            for (var i = 0; i < foodCellClasses.length; i++) {
                classes += foodCellClasses[i] + ' ';
            }

            foodCell.setAttribute('class', classes + 'food-unit');
            foodCreated = true;
        }
    }
}

// function haveDanger(unit) {
//     var check = false;

//     var unitClasses = unit.getAttribute('class').split(' ');

//     // Если danger
//     if (unitClasses.includes('danger-unit')) {
//         check = true;
//         createDanger();
//     }
//     return check;
// }

function createDanger() { 
    var dangerCreated = false;

    while (!dangerCreated) {

        var dangerX = Math.floor(Math.random() * FIELD_SIZE_X);
        var dangerY = Math.floor(Math.random() * FIELD_SIZE_Y);

        var dangerCell = document.getElementsByClassName('cell-' + dangerY + '-' + dangerX)[0];
        var dangerCellClasses = dangerCell.getAttribute('class').split(' ');

        if (!dangerCellClasses.includes('snake-unit')) {
            var classes = '';
            for (var i = 0; i < dangerCellClasses.length; i++) {
                classes += dangerCellClasses[i] + ' ';
            }

            dangerCell.setAttribute('class', classes + 'danger-unit');
            dangerCreated = true;
            danger.push(dangerCell);
        }
    }
}

/**
 * Изменение направления движения змейки
 * @param e - событие
 */
function changeDirection(e) {
    console.log(e);
    switch (e.keyCode) {
        case 37: // Клавиша влево
            if (direction != 'x+') {
                direction = 'x-';
            }
            break;
        case 38: // Клавиша вверх
            if (direction != 'y-') {
                direction = 'y+';
            }
            break;
        case 39: // Клавиша вправо
            if (direction != 'x-') {
                direction = 'x+';
            }
            break;
        case 40: // Клавиша вниз
            if (direction != 'y+') {
                direction = 'y-';
            }
            break;
    }
}

/**
 * Функция завершения игры
 */
function finishTheGame() {
    gameIsRunning = false;
    clearInterval(snakeTimer);
    alert('Вы проиграли! Ваш результат: ' + score.toString());
    getScore.innerText = score;
    location.reload();
}

/**
 * Новая игра
 */
function refreshGame() {
    location.reload();
}

// Инициализация
init();
// window.onload = init;