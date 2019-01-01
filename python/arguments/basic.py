

def fun(*args, **kwargs):
    print('元组参数：')
    print(args)
    print('键值对参数：')
    print(kwargs)


def add(a, b):
    return a+b



if __name__ == '__main__':
    # 参数定义args, kwargs的用法
    fun(1,2,3,4, name='zhang')
    print()

    # 通过tuple或list来传参
    a = [1,2]
    print(add(*a))
    b = (1,2)
    print(add(*b))

    # 通过dict来传参
    c = {'a':1, 'b':2}
    print(add(**c))