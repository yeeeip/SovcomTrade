create table if not exists app_user(
    id bigserial primary key,
    email varchar(255) not null,
    password varchar(255) not null,
    first_name varchar(255) not null,
    last_name varchar(255) not null,
    middle_name varchar(255) default null,
    phone_number varchar(30) not null,
    created_at timestamp with time zone not null,
    is_active boolean not null
);

create table if not exists bank_account (

    id bigserial primary key,
    owner_id bigserial references app_user (id),
    currency varchar not null,
    balance numeric(8,4) not null
)