---- 经典的事务问题，转账问题 ----

drop table if exists account;

create table account (
    id int primary key,
    balance int
);

insert into account(id, balance) values
(1, 800),   -- 账户1 800块
(2, 0);     -- 账户2 0块

-- set @a = 2;

drop procedure if exists transferAccount;


DELIMITER $$

-- 从账户1转账500到账户2上
create procedure transferAccount()
begin
    
    start transaction;
    -- 一定要先减去500， 再查看余额是否大于0， 而不是直接看余额是否大于500。 因为事务能够保证写互斥。
    -- 当第一个事务在写一个数据，第二事务也写同一个数据必须要等到第一个事务提交或回滚。
    update account set balance = balance - 500 where id = 1;
    set @balance1 = (select balance from account where id = 1);
    select @balance1;


    if @balance1 > 0 then
        update account set balance = balance + 500 where id = 2;
        commit;
        select sleep(5);
    else
        rollback;
    end if;

    select * from account;

    
end;
$$

DELIMITER ;


