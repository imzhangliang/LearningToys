# 参考：https://www.thecodeship.com/patterns/guide-to-python-function-decorators/

# 方法的修饰器
def p_decorate(func):
    def func_wrapper(self):
        return '<p>' + func(self) + '</p>'
    return func_wrapper


# 通用的修饰符, 效果一样，但更通用
def p_decorate2(func):
    def func_wrapper(*args):    #  更通用的用法是使用func_wrapper(*args, **kwargs)m, 然后下一行用func(*args, **kwargs)
        return '<p>' + func(*args) + '</p>'
    return func_wrapper




class Person:
    def __init__(self):
        self.firstName = 'Michael'
        self.lastName = 'Jordan'

    @p_decorate
    def get_fullname(self):
        return self.firstName + ' ' + self.lastName

    @p_decorate2
    def get_fullname2(self):
        return self.firstName + ' ' + self.lastName





if __name__ == '__main__':
    p = Person()
    print(p.get_fullname())
    print(p.get_fullname2())