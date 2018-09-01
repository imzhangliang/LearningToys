-- 多对多关系

drop table if exists user;
drop table if exists role;
drop table if exists power;
drop table if exists userRole;


create table user (
    id int not null auto_increment primary key,
    username varchar(255) not null
)character set utf8;

create table role (
    id int not null auto_increment primary key,
    roleName varchar(255) not null
)character set utf8;

create table power (
    id int not null auto_increment primary key,
    powerName varchar(255) not null
)character set utf8;

create table userRole (
    userId int not null,
    roleId int not null,
    primary key(userId, roleId)
)character set utf8;



insert into user(username)
values
('abcd'),
('abcd2'),
('abcd3'),
('abcd4'),
('abcd5'),
('abcd6'),
('abcd7');

insert into role(roleName)
values
('排长'),
('连长'),
('营长'),
('师长'),
('司令'),
('超级管理员'),
('发布者'),
('浏览者');


insert into userRole(userId, roleId)
values
((select id from user where username = 'abcd'), (select id from role where roleName = '排长')),
((select id from user where username = 'abcd'), (select id from role where roleName = '发布者')),
((select id from user where username = 'abcd3'), (select id from role where roleName = '营长')),
((select id from user where username = 'abcd7'), (select id from role where roleName = '排长')),
((select id from user where username = 'abcd7'), (select id from role where roleName = '浏览者')),
((select id from user where username = 'abcd4'), (select id from role where roleName = '排长')),
((select id from user where username = 'abcd4'), (select id from role where roleName = '超级管理员')),
((select id from user where username = 'abcd5'), (select id from role where roleName = '排长'));



select u.*, ur.*, r.* from user u 
left join userRole ur on ur.userId = u.id
left join role r on r.id = ur.roleId;


select u.id, u.username, group_concat(roleName) roles from user u 
left join userRole ur on ur.userId = u.id
left join role r on r.id = ur.roleId
group by u.id, u.username;