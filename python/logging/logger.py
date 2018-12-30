import logging



def basic():
    # 创建logger
    logger = logging.getLogger("basic")
    logger.setLevel(logging.DEBUG)

    # 创建控制台handler，并设置级别为debug
    ch = logging.StreamHandler()
    ch.setLevel(logging.DEBUG)

    # 创建formatter
    formatter = logging.Formatter('[%(asctime)s][%(name)s][%(levelname)s] %(message)s')
    # 添加formatter至handler
    ch.setFormatter(formatter)

    # 添加handler至logger
    logger.addHandler(ch)

    logger.debug('debug message')
    logger.info('info message')
    logger.warning('warning message')
    logger.error('error message')
    logger.critical('critical message')

def fileConfig():
    '''通过配置文件来配置logger'''

    # 关于采用dict配置可以参考 https://docs.python.org/3.7/howto/logging-cookbook.html#logging-cookbook

    import logging.config
    logging.config.fileConfig('logging.conf')

    # 创建logger
    logger = logging.getLogger('simpleExample')

    # 通过下列方法可以覆盖配置文件中的配置
    # logger.setLevel(logging.WARNING)

    logger.debug('debug message')
    logger.info('info message')
    logger.warning('warning message')
    logger.error('error message')
    logger.critical('critical message')

def multiHandlers():
    '''多个handler，用于输出至控制台和文件'''
    import logging.handlers

    logger = logging.getLogger('test')
    logger.setLevel(logging.DEBUG)

    # 创建文件handler，级别为debug
    # fh = logging.FileHandler('out.log')   //普通文件handler
    fh = logging.handlers.TimedRotatingFileHandler('out.log', 'midnight', 1)    # 设置为1天rotate 1次
    fh.suffix = "%Y-%m-%d"  # 设置rotate时的后缀
    fh.setLevel(logging.DEBUG)

    # 创建控制台handler，级别为error
    ch = logging.StreamHandler()
    ch.setLevel(logging.ERROR)

    # 创建日志格式
    formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')

    # 两个handler都田间相同的formatter
    ch.setFormatter(formatter)
    fh.setFormatter(formatter)

    # 将handler添加至logger
    logger.addHandler(ch)
    logger.addHandler(fh)

    logger.debug('debug message')
    logger.info('info message')
    logger.warning('warning message')
    logger.error('error message')
    logger.critical('critical message')



if __name__ == '__main__':
    # basic()
    # fileConfig()
    multiHandlers()
