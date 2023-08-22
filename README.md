## Для запуска проекта:

- установить необходимые пакеты : npm i
- запустить localhost: npm start
- проект запуститься по адресу http://localhost:3000

## Функционал: 

- При открытии главной страницы должен загружаться список цитат (GET https://dummyjson.com/quotes?skip=0&limit=100).
2. Список цитат отображать с пагинацией по 10 шт. на странице.
3. Для навигации по страницам должны быть кнопки "в начало", "в конец", "предыдущая", "следующая", а также список номеров страниц, каждая цифра в котором является ссылкой.
4. Номер выбранной страницы в навигационной панели должен быть визуально подсвечен (пользователь должен понимать на какой странице он находится).
5. Для каждой цитаты должна быть возможность сохранения в "Избранное" и удаления из "Избранного".
6. Сохраненные цитаты можно просматривать и удалять на отдельной странице - "Избранное".
7. На главной странице и в "Избранном" должна присутствовать возможность фильтрации цитат по автору (визуальный компонент - выпадающий список, сортировка по алфавиту). Содержимое выпадающего списка должно формироваться в зависимости от страницы: на главной - все авторы, в "избранном" - только авторы из сохраненных цитат.
- С главной страницы есть ссылка на "Избранное" и наоборот.

4. Избранные цитаты сохраняйте в LocalStorage - при перезагрузке страницы и/или выходе из браузера они не должны удаляться.
5. При перезагрузке главной страницы цитаты должны подгружаться заново, при этом "маркер" сохраненной цитаты должен снова "прикрепляться" к уже сохраненной цитате.
