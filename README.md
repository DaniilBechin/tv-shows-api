# TV Shows API

REST API для управления каталогом телешоу с веб-интерфейсом.

## Ссылки

- **Деплой:** (https://tv-shows-api-7jzs.onrender.com)
- **Swagger:** (https://tv-shows-api-7jzs.onrender.com/api-docs)
- **Демо-видео:** (https://drive.google.com/file/d/10j3GgXAN4pIxp14RM2n1LIgETp-KqKpP/view?usp=sharing)

## Функции

- Просмотр списка шоу в таблице
- Добавление, редактирование и удаление шоу
- Сортировка по названию, каналу, жанру и рейтингу
- Валидация форм с выводом ошибок
- Подтверждение удаления через модальное окно
- Swagger-документация API
- Тёмная тема

## Технологии

- **Backend:** Node.js, Express
- **Database:** PostgreSQL, Knex (миграции и сиды)
- **Frontend:** HTML, CSS, JavaScript (Vanilla)
- **Документация:** Swagger (swagger-jsdoc, swagger-ui-express)

## Локальный запуск

```bash
# Установка зависимостей
npm install

# Настройка базы данных (PostgreSQL должен быть установлен)
npx knex migrate:latest --env development
npx knex seed:run --env development

# Запуск сервера
npm start
