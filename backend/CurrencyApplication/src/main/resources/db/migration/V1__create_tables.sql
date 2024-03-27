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
    balance numeric(12,4) not null
);

create table if not exists currency_operation (
    id bigserial primary key,
    user_id bigserial references app_user(id),
    code integer not null,
    created_at timestamp with time zone not null,
    processed_at timestamp with time zone default null,
    debit_account_id bigserial references bank_account(id),
    credit_account_id bigserial references bank_account(id),
    deadline timestamp with time zone not null,
    status varchar not null
);