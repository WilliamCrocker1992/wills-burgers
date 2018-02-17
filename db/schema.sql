create database burger_too;
use burger_too;
create table burgers(
	id integer not null auto_increment primary key, 
	burger_name varchar(30) not null,
	eaten boolean default "0"
	);