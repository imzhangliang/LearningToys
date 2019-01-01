# 参考：https://www.thecodeship.com/patterns/guide-to-python-function-decorators/

# 使用functools可以保持被装饰的函数的一些属性不变
import functools

def tags(tag_name):
    def tags_decorator(func):
        @functools.wraps(func)
        def func_wrapper(name):
            return "<{0}>{1}</{0}>".format(tag_name, func(name))
        return func_wrapper
    return tags_decorator

@tags("p")
def get_text(name):
    """returns some text"""
    return "Hello "+name

if __name__ == '__main__':
    print(get_text.__name__) # get_text
    print(get_text.__doc__) # returns some text
    print(get_text.__module__) # __main__