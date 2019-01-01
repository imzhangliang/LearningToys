# 参考：https://www.thecodeship.com/patterns/guide-to-python-function-decorators/

# 带参数的修饰器
def tags(tag_name):
    def tags_decorator(func):
        def func_wrapper(name):
            return "<{0}>{1}</{0}>".format(tag_name, func(name))
        return func_wrapper
    return tags_decorator

@tags("p")
def get_text(name):
    return "Hello "+name

@tags("div")
def get_text2(name):
    return "Hello "+name

if __name__ == '__main__':
    print(get_text("John"))
    print(get_text2("John"))