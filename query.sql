create database online_shopping;

==========================================

use online_shopping;

create table login_page (email varchar(255), password varchar(255));

=======================================================================

use online_shopping;

insert into login_page (email, password) values ('yuvi@gmail.com', 'user@123');

================================

show databases;

==============================

use learning_nodejs;

create table Users (username varchar(255));

===========================

use learning_nodejs;

insert into Users (username) values ('Ajith');


===========================

use learning_nodejs;

select * from Users;


==================================
-- Authentication ERROR

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Test@123';
flush privileges;