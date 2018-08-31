---- 外键练习


drop table if exists student;
drop table if exists class;


create table class (
    id int not null auto_increment primary key,
    className varchar(255) not null
)character set utf8;

create table student (
    id int not null auto_increment primary key,
    name varchar(255) not null,
    gender varchar(10) not null,
    classId int,
    constraint studentClass
    foreign key (classId) 
    references class(id)
)character set utf8;


insert into class(className) values
('初一（1）班'),
('初一（2）班'),
('初一（3）班'),
('初一（4）班'),
('初一（5）班');

insert into student(name, gender, classId)
values 
('张亮', 'male', (select id from class where className = '初一（3）班')),
('李丽', 'female', (select id from class where className = '初一（1）班')),
('梁鸿', 'male', (select id from class where className = '初一（2）班')),
('张勋', 'male', (select id from class where className = '初一（1）班')),
('李明', 'male', (select id from class where className = '初一）班'));

select * from student;

select s.*, ifnull(c.className, '') from student s
left join class c on s.classId = c.id