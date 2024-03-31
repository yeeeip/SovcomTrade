CREATE SEQUENCE app_user_seq INCREMENT 50;
CREATE SEQUENCE bank_account_seq INCREMENT 50;
CREATE SEQUENCE currency_operation_seq INCREMENT 50;
CREATE SEQUENCE ai_recommendation_seq INCREMENT 50;
CREATE SEQUENCE currency_news_seq INCREMENT 50;

create table if not exists app_user(
    id bigserial unique,
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
    id bigserial unique,
    owner_id serial references app_user (id),
    currency varchar not null,
    balance numeric(12,4) not null
);

create table if not exists currency_news (
    id bigserial unique,
    title varchar,
    short_desc varchar,
    currency varchar not null,
    publication_date timestamp with time zone,
    news_url varchar,
    analyzed boolean not null,
    image_url varchar
);

create table if not exists ai_recommendation (
    id bigserial unique,
    news_id serial references currency_news(id),
    forecast varchar
);

create table if not exists currency_operation (
    id bigserial unique,
    user_id serial references app_user(id),
    code integer not null,
    created_at timestamp with time zone not null,
    processed_at timestamp with time zone default null,
    debit_account_id serial references bank_account(id),
    credit_account_id serial references bank_account(id),
    course numeric(8,4) not null,
    deadline timestamp with time zone not null,
    status varchar not null
);