# Инструкция по запуску проекта
---
Для запуска проекта необходим [Docker](https://www.docker.com/get-started/).  

1) Склонируйте проект с помошью команды ```git clone https://github.com/yeeeip/SovcomTrade```

2) Далее, разместите в главной папке проекта файл .env, который содержит переменные окружения, необходимые для старта приложения

Ниже есть пример заполнения этого файла:
```
SPRING_DATASOURCE_DB_NAME=currency_app_db
SPRING_DATASOURCE_USERNAME=postgres
SPRING_DATASOURCE_PASSWORD=password
JWT_SECRET_KEY=jwtkey
OPENAI_KEY=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
```

Вы можете поменять значения на свои **(кроме OPENAI_KEY, а то все сломается!!!)**, либо же просто скопировать данные.

3) После создания и заполнения .env файла, откройте командную строку в корневой папке проекта и напишите
   ```docker compose up```
   
5) Подождите пару минут, пока докер скачает все необходимое и поднимет контейнеры,
6) А теперь, нужно сделать [ТЫК](http://localhost:3000)
---
## Немного о регистрации и авторизации

В приложении уже есть готовый аккаунт, с помощью которого можно выполнить вход:  
**Email: test4@gmail.com**  
**Пароль: password**

Однако вы можете также зарегистрировать новый аккаунт. Просьба вводить свою настоящую почту, так как ее нужно будет подтвердить.
