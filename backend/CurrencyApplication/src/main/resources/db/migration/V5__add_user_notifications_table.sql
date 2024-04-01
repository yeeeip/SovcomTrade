CREATE SEQUENCE IF NOT EXISTS user_notifications_seq INCREMENT 50;

create table if not exists user_cur_operation_notification(
    id bigserial primary key,
    user_id bigserial references app_user(id),
    operation_id bigserial references currency_operation(id),
    created_at timestamp with time zone not null,
    info varchar not null
)