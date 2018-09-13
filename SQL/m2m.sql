-- 多对多关系

drop table if exists user;
drop table if exists role;
drop table if exists power;
drop table if exists userRole;
drop table if exists rolePower;


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

create table rolePower (
    roleId int not null,
    powerId int not null,
    primary key(roleId, powerId)
);


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

insert into power(powerName)
values
('AAA'),
('BBB'),
('CCC'),
('DDD'),
('EEE'),
('FFF'),
('GGG'),
('HHH');


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


insert into rolePower(roleId, powerId)
values
((select id from role where roleName = '排长'), (select id from power where powerName = 'BBB')),
((select id from role where roleName = '排长'), (select id from power where powerName = 'CCC')),
((select id from role where roleName = '营长'), (select id from power where powerName = 'AAA')),
((select id from role where roleName = '营长'), (select id from power where powerName = 'BBB')),
((select id from role where roleName = '超级管理员'), (select id from power where powerName = 'AAA')),
((select id from role where roleName = '超级管理员'), (select id from power where powerName = 'BBB')),
((select id from role where roleName = '超级管理员'), (select id from power where powerName = 'CCC')),
((select id from role where roleName = '超级管理员'), (select id from power where powerName = 'DDD')),
((select id from role where roleName = '浏览者'), (select id from power where powerName = 'AAA')),
((select id from role where roleName = '排长'), (select id from power where powerName = 'GGG')),
((select id from role where roleName = '超级管理员'), (select id from power where powerName = 'EEE'));





select * from rolePower;

select u.*, ur.*, r.* from user u 
left join userRole ur on ur.userId = u.id
left join role r on r.id = ur.roleId;


select u.id, u.username, group_concat(roleName) roles from user u 
left join userRole ur on ur.userId = u.id
left join role r on r.id = ur.roleId
group by u.id, u.username;


select u.*, ur.*, rp.*, p.* from user u
left join userRole ur on ur.userId = u.id
left join rolePower rp on rp.roleId = ur.roleId
left join power p on p.Id = rp.powerId;


select u.id, u.username, group_concat(powerName) from user u
left join userRole ur on ur.userId = u.id
left join rolePower rp on rp.roleId = ur.roleId
left join power p on p.Id = rp.powerId
group by u.id, u.username