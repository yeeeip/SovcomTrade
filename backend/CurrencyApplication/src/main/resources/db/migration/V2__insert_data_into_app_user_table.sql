insert into app_user(id,email,password,first_name,last_name,middle_name,phone_number,created_at,is_active) values
(nextval('app_user_seq'), 'test1@gmail.com', '$2a$10$nJpz.3CwJApTmH81OeDTGeHqmcdlX/OeypwZCiPk8moQrGLEmrqGO', 'Иван', 'Иванов', 'Иванович', '+79636363666', '2024-03-27 22:21:11.525507+03', true),
(nextval('app_user_seq'), 'test2@gmail.com', '$2a$10$6xVgkzPhetbIOxyL0JUMluFNhGI57f5gR/8kSCFc0w2/ZKYy/eCxC', 'Александров', 'Александр', null, '+12345678901', '2024-02-10 10:00:11.525507+01', true),
(nextval('app_user_seq'), 'test3@gmail.com', '$2a$10$toZvyGHpka8zygqRWcuop.xP9DxO0yB5PPEQ7Koxn74XqBafrdU1u', 'Петров', 'Петр', 'Викторович', '+79152347643', '2023-11-15 20:00:11.525507+03', true),
(nextval('app_user_seq'), 'test4@gmail.com', '$2a$10$bhdQiV6OJh/E.rMmjk7jserMmWh7UrSpSZQFuAIHerBkeNjCUlYGK', 'Тестов', 'Тест', 'Тестович', '+79863454534', '2024-01-10 12:10:11.525507+03', true);