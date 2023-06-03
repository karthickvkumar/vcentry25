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




-- Status Code 
-- 2X - 200, 201, 203 (Success response)
-- 4X - 400, 401, 404 (Client Side error)
-- 5X - 500, 501, 502 (Server Side error)
show databases;

=========================================
use learning_nodejs;

show tables;

=====================================

use learning_nodejs;

create table studentList (firstName varchar(255), lastName varchar(255), age int, id int not null auto_increment, primary key(id));

===================================
use learning_nodejs;

insert into studentList (firstName, lastName, age) values ('Karthick', 'Kumar', 29);

=========================

use learning_nodejs;

update studentList set firstName='ABC' where id=1;