insert into currency_operation (id,user_id,code,created_at,processed_at,debit_account_id,credit_account_id,course,deadline,status) values
(nextval('currency_operation_seq'), 151, 0, '2024-03-20 20:21:11.525507+03', '2024-03-21 15:21:11.525507+03', 351, 451, 15.3453, '2024-03-25 20:21:11.525507+03', 'SUCCESSFUL'),
(nextval('currency_operation_seq'), 151, 1, '2023-06-15 00:22:11.525507+03', '2023-06-18 15:21:11.525507+03', 451, 351, 22.8437, '2023-06-22 20:21:11.525507+03', 'SUCCESSFUL'),
(nextval('currency_operation_seq'), 151, 2, '2024-03-23 06:10:11.525507+03', null, 301, 151, 40.0000, '2024-03-25 20:21:11.525507+03',  'EXPIRED'),
(nextval('currency_operation_seq'), 151, 1, '2024-03-25 20:21:11.525507+03', null, 501, 401, 75.0000, '2024-04-10 15:00:11.525507+03', 'ACTIVE');