# 基本用法
import logging

def log2screen():
    '''
    输出到屏幕
    '''
    # 仅显示在控制台
    logging.info("I told you so")   # 将不会打印，因为默认级别是warning
    logging.warning('Watch out')

def log2file():
    '''
    输出到文件
    '''
    # 此配置代码必须在所有logging记录方法的使用之前，否则无效
    logging.basicConfig(filename='out.log', level=logging.DEBUG)
    logging.debug('This message should go to the log file')
    logging.info('So should this')
    logging.warning('And this, too')

def log2fileOverwrite():
    '''
    输出到文件,覆盖模式
    '''
    # filemode='w', 覆盖模式，每一次记录时覆盖之前的日志
    logging.basicConfig(filename='out.log', filemode='w', level=logging.DEBUG)
    logging.debug('This message should go to the log file')
    logging.info('So should this')
    logging.warning('And this, too')

def logFormat():
    '''
    消息格式
    '''
    logging.warning("My name is %s, I'm %d years old.", 'George', 25)


def logFormat2():
    '''
    日志格式
    '''
    # 参考https://docs.python.org/3.7/library/logging.html#logrecord-attributes
    logging.basicConfig(format='级别:%(levelname)s 消息:%(message)s', level=logging.DEBUG)
    logging.debug('This message should appear on the console')
    logging.info('So should this')
    logging.warning('And this, too')

def logFormat3():
    '''
    日志格式2
    '''
    # .%(msecs)03d为毫秒格式，因为datefmt不支持%f
    logging.basicConfig(format='[%(asctime)s.%(msecs)03d][%(levelname)s] %(message)s', 
        level=logging.DEBUG,
        datefmt='%Y-%m-%d %H:%M:%S')
    logging.debug('This message should appear on the console')
    logging.info('So should this')
    logging.warning('And this, too')


if __name__ == '__main__':
    # log2screen()
    # log2file()
    # log2fileOverwrite()
    # logFormat()
    # logFormat2()
    logFormat3()