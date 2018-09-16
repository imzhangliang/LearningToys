-- 关于mysql事务的实验 --

drop table if exists dataTable;

create table dataTable (
    id int primary key,
    value int
);

insert into dataTable
values
(1, 5),
(2, 6);

select * from dataTable;

---- 1. 写互斥实验

--- 终端1
begin;
select * from dataTable;
update dataTable set value = 10 where id = 1;

--- 终端2
begin;
select * from dataTable;
update dataTable set value = 12 where id = 1;


-- 两边都执行回滚恢复状态
--- 终端1
rollback;
--- 终端2
rollback;


---- 2. 死锁实验

--- 终端1
begin;
select * from dataTable;
update dataTable set value = 10 where id = 1;

--- 终端2
begin;
select * from dataTable;
update dataTable set value = 12 where id = 2;

--- 终端1
update dataTable set value = 13 where id = 2;


--- 终端2
update dataTable set value = 13 where id = 1;

