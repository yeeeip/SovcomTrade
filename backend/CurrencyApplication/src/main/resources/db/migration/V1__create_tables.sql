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

create table if not exists currency_news (
    id bigserial primary key,
    title varchar,
    short_desc varchar,
    currency varchar not null,
    publication_date timestamp with time zone,
    news_url varchar,
    analyzed boolean not null,
    image_url varchar
);

create table if not exists ai_recommendation (
    id bigserial primary key,
    news_id bigserial references currency_news(id),
    forecast varchar
);

create table if not exists currency_operation (
    id bigserial primary key,
    user_id bigserial references app_user(id),
    code integer not null,
    created_at timestamp with time zone not null,
    processed_at timestamp with time zone default null,
    debit_account_id bigserial references bank_account(id),
    credit_account_id bigserial references bank_account(id),
    course numeric(8,4) not null,
    deadline timestamp with time zone not null,
    status varchar not null
);