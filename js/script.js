// Home work 1 
// target 1
var tempTc = +prompt("Введите темп. в градусах по Цельсию") ;
var tempTf = (9 / 5) * tempTc + 32;
alert(tempTf);

// target 2
var name1 = "Василий";
var admin = name1;
document.write(admin);

// target 3
// 1000108

// target 4
// Атрибут defer сообщает браузеру, что он должен продолжать обрабатывать страницу 
// и загружать скрипт в фоновом режиме, а затем запустить этот скрипт, когда он загрузится.
// --Скрипты с defer никогда не блокируют страницу.
// --Скрипты с defer всегда выполняются, когда дерево DOM готово.
// --Содержимое страницы отобразится мгновенно.
// Отложенные с помощью defer скрипты сохраняют порядок относительно друг друга, 
//как и обычные скрипты.

// Маленький скрипт загрузится первым, но выполнится вторым
// Браузеры сканируют страницу на предмет скриптов и загружают их параллельно в целях увеличения производительности. Поэтому и в примере выше оба скрипта скачиваются параллельно. small.js скорее всего загрузится первым.
// Но спецификация требует последовательного выполнения скриптов согласно порядку в документе, поэтому он подождёт выполнения long.js.

// Атрибут defer предназначен только для внешних скриптов
// Атрибут defer будет проигнорирован, если в теге <script> нет src.


// Атрибут async означает, что скрипт абсолютно независим:
// Страница не ждёт асинхронных скриптов, содержимое обрабатывается и отображается.
//  Cкрипты не ждут async, и скрипты casync не ждут другие скрипты.
// Так что если у нас есть несколько скриптов с async, они могут выполняться в любом порядке. То, что первое загрузится – запустится в первую очередь.
// Содержимое страницы отображается сразу же : async его не блокирует.
// DOMContentLoaded может произойти как до, так и после async, никаких гарантий нет.
// Асинхронные скрипты не ждут друг друга. 
// Асинхронные скрипты очень полезны для добавления на страницу сторонних скриптов: счётчиков, рекламы и т.д. Они не зависят от наших скриптов, и мы тоже не должны ждать их.