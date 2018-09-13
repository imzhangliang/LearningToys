
drop table if exists clown_info;

create table clown_info (
    id int not null primary key,
    name varchar(30),
    boss_id int
);

insert into clown_info values
('1', 'Elsie', '3') , 
('2', 'Pickles', '5') , 
('3', 'Snuggles', '10') , 
('4', 'Mr. Hobo', '3') , 
('5', 'Clarabelle', '10') , 
('6', 'Scooter', '3') , 
('7', 'Zippo', '3') , 
('8', 'Babe', '5') , 
('9', 'Bonzo', '5') , 
('10', 'Mister Sniffles', '10');

select * from clown_info;

select t1.name, (select name from clown_info where id = t1.boss_id) from clown_info t1;