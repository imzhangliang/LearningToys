# 参考： https://www.thecodeship.com/patterns/guide-to-python-function-decorators/

def p_decorate(func):  
    '''
    段落装饰器，给生成的字符串加上<p></p>
    '''
    def fun_wrapper(name):
        return '<p>' + func(name) + '</p>'

    return fun_wrapper

# 装饰器实际上是把一个函数作为一个参数，用另一个函数将它包裹起来，生成一个新的函数
# 下面装饰器的作用相当于p_decorate(greet)(name)
# p_decorate(greet)便是把旧的函数生成梁新的函数
@p_decorate
def greet(name):
    return '你好，' + name


if __name__ == '__main__':
    print(greet('Michael'))