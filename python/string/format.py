
# 字符串格式化，参考https://pyformat.info/

from datetime import datetime

if __name__ == '__main__':
    s = 'My name is {}, I am {} years old'.format('George', 25)
    print(s)

    s = 'I am {1} years old. My name is {0}.'.format('George', 25)
    print(s)

    # 变量来控制模版字符串
    s = 'My name is {name}, I am {age} years old. My name is {name}, again.'.format(name='George', age=25)
    print(s)

    # 日期格式
    s = '{:%Y-%m-%d %H:%M:%S}'.format(datetime.now())
    print(s)

    # 向左对其，占10个字符
    s = '{col1:10}{col2:10}'.format(col1="Name", col2="Age")
    print(s)

    # 向右对其，占10个字符
    s = '{col1:>10}{col2:>10}'.format(col1="Name", col2="Age")
    print(s)

    # 浮点数精度
    s = '{value:.2f}'.format(value=3.1415926)
    print(s)

    # 格式数字的时候，.3f表示小数点后面的进度, .3表示有效位数为3
    s = '{:.3f}  {:.3}'.format(21.2345, 21.2345)
    print(s)

    # 采用变量控制浮点精读
    s = '{value:.{precision}f}'.format(value=3.1415926, precision=3)
    print(s)

    # 采用变量控制日期格式
    s = '{:{format}}'.format(datetime.now(), format="%Y年%m月%d日")
    print(s)

    s = '{:{prec}} = {:{prec}f}'.format('Gibberish', 2.7182, prec='.3')
    print(s)