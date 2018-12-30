import logging
import logging.handlers

class Logger:
    @staticmethod
    def getLogger(loggerName, filename = None, consoleLevel=logging.DEBUG, fileLevel=logging.DEBUG):

        if filename is None:    # 默认日志文件名称
            filename = loggerName + '.log'

        print(loggerName)
        logger = logging.getLogger(loggerName)
        logger.setLevel(logging.DEBUG)

        # 创建控制台handler，级别为error
        ch = logging.StreamHandler()
        ch.setLevel(consoleLevel)

        # 创建文件handler，级别为debug
        fh = logging.handlers.TimedRotatingFileHandler(filename, 'midnight', 1)    # 设置为1天rotate 1次
        fh.suffix = "%Y-%m-%d"  # 设置rotate时的后缀
        fh.setLevel(fileLevel)

        # 创建日志格式
        formatter = logging.Formatter('[%(asctime)s][%(name)s][%(levelname)s] %(message)s')

        # 两个handler都田间相同的formatter
        ch.setFormatter(formatter)
        fh.setFormatter(formatter)

        # 将handler添加至logger
        logger.addHandler(ch)
        logger.addHandler(fh)

        return logger


if __name__ == '__main__':
    logger = Logger.getLogger('dfdfd', fileLevel=logging.WARNING, consoleLevel=logging.DEBUG)
    logger.debug('debug message')
    logger.info('info message')
    logger.warning('warning message')
    logger.error('error message')
    logger.critical('critical message')
