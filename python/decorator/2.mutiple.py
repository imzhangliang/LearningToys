
# 参考： https://www.thecodeship.com/patterns/guide-to-python-function-decorators/

def div_decorate(func):
    def func_wrapper(name):
        return '<div>' + func(name) + '</div>'
    return func_wrapper


def p_decorate(func):  
    def func_wrapper(name):
        return '<p>' + func(name) + '</p>'

    return func_wrapper

def strong_decorate(func):
    def func_wrapper(name):
        return '<strong>' + func(name) + '</strong>'
    return func_wrapper

@div_decorate
@p_decorate
@strong_decorate
def greet(name):
    return '你好，' + name


# 装饰器的顺序不同，结果就不同了
@div_decorate
@strong_decorate
@p_decorate
def greet2(name):
    return '你好，' + name




if __name__ == '__main__':
    print(greet('Michael'))
    print(greet2('Michael'))