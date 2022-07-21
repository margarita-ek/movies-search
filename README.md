<h1 align="center">Movie search</h1>
<p align="center">
  <img style="height: 50px; width: 200px;" src="https://user-images.githubusercontent.com/73533889/173819826-ad84c1fa-e502-48e6-96d3-b7a7efe490be.png">
</p>
<h2 align="center">Сайт с авторизацией, поиском фильмов и фильтрацией по жанрам</h2>
<p align="center">
  <img style="height: 500px;" src="https://user-images.githubusercontent.com/73533889/175952249-62d49cea-ca74-4629-887c-4c72fa314f68.png">
</p>
<h2 align="center"><a href="https://moviesearchreactapp.herokuapp.com/" target="_blank">:arrow_right: Ссылка на сайт 	:eyes: </a></h2>
<h2>Описание</h2>
Сайт реализован c использованием библиотеки React.js. Пользователь может зарегистрироваться и получить доступ к поиску фильмов. Есть возможность отфильтровать фильмы по жанрам. Каждая карточка с фильмом открывает модальное окно, которое содержит индивидуальную информацию: наименование, описание, рейтинг, дату выхода и жанр. Сайт адаптивный как для ПК, так и для смартфонов. 
<h2>О проекте</h2>
Для реализации сайта я использовала такие технологии как:

- HTML
- CSS(SCSS)
- JavaScript
- Node.js
- Express
- MongoDB
- React.js
- Redux
- Slick
- Heroku

Проект разделен на **frontend** и **backend** части. 
**Frontend** реализован с использованием библиотеки React.js на основании среды Create React App, используя вспомогательные ресурсы (redux, axios, slick). 
**Backend** написан на Node.js и работает с базой данных, размещенной на MongoDB.
<p><a href="https://moviesearchreactapp.herokuapp.com/" target="_blank">Итоговый результат</a> размещен на хостинге Heroku.</p>
<h2>Содержание сайта</h2>

### Авторизация

<p align="center">
  <img src="https://user-images.githubusercontent.com/73533889/175954189-0e92a638-70d6-4a3d-8d1e-7b87667e162d.png">
</p>

На странице авторизации пользователь может пройти регистрацию и войти в систему. При введении некорректных данных будет появляться сообщение об ошибке. Пользователю присваивается токен, который сохраняется в локальном хранилище браузера на 24 часа. 

### Хедер

<p align="center">
  <img src="https://user-images.githubusercontent.com/73533889/175953234-d24602f8-a348-4643-83a8-c1debb058302.png">
</p>

Хедер содержит логотип с ссылкой на главную страницу, ссылку на страницу пользователя и кнопку выхода из системы.

### Карусель

<p align="center">
  <img src="https://user-images.githubusercontent.com/73533889/175953337-649d2cbe-8a6f-4edd-96a2-e150189919c3.png">
</p>

Карусель изображений реализована с помощью библиотеки **Slick** для React. Каждые три секунды изображения автоматически сменяются. Также возможность пролистывать слайды вручную. На слайде присутствует наименование фильма и кнопка, открывающая модальное окно с дополнительной информацией.

### Модальное окно

<p align="center">
  <img src="https://user-images.githubusercontent.com/73533889/173894795-72be1a8a-836e-4900-8963-0ed92c0daf8d.png">
</p>

Модальное окно содержит подробную информацию по выбранному фильму: наименование, описание, рейтинг, жанр и дату выхода. Закрывается при нажатии на крестик.

### Карточка с фильмом

<p>
  <img style="height: 300px;" src="https://user-images.githubusercontent.com/73533889/173896507-e0ed740e-9b46-4fb4-9cb5-3342370cc13e.png">
</p>

Каждая карточка по клику на неё открывает модальное окно, которое содержит подробную информацию для выбранного фильма. Карточка содержит постер, наименование, рейтинг и жанр.

### Фильтр по жанрам

<p>
  <img src="https://user-images.githubusercontent.com/73533889/173900386-b8a8b72e-199d-42e8-8ccf-ff08502e5274.png">
</p>

Фильтр позволяет выбрать жанр, который присутствует в базе данных и рендерит карточки соответсвующие выбранному варианту.

### Поиск по наименованию

<p>
  <img style="height: 330px;" src="https://user-images.githubusercontent.com/73533889/173902581-3b84ac13-2bf4-4fb1-bab6-0fd025360fcc.png">
</p>

Поиск найдет все карточки, у которых в наименовании есть совпадения с введенным в поле значением.


### Страница пользователя

<p align="center">
  <img src="https://user-images.githubusercontent.com/73533889/175953577-3b941cc0-7601-4d87-ae08-05680ef8b038.png">
</p>

На странице пользователя отображается имя и почта, которые были получены во время регистрации.

### Футер

<p>
  <img src="https://user-images.githubusercontent.com/73533889/173905307-d42a6253-4284-43a2-b152-be00e8714dc0.png">
</p>

Футер содержит ссылки на: страницу контактов, домашнюю страницу и социальные сети.

### Установка
Установка зависимостей для проекта
```
npm install
```
Запуск сайта для разработки
```
npm run dev
```
Запуск сайта из папки build
```
npm run client:build
npm run server:start
```







