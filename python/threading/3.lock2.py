
# 参考：http://effbot.org/zone/thread-synchronization.htm

import threading

def commonLock():
    '''普通锁'''
    # 普通锁同一个线程请求2次，会造成死锁
    lock = threading.Lock()
    lock.acquire()
    lock.acquire()
    print(123)
    lock.release()
    lock.release()


def reentrantLock():
    '''重入锁'''
    # 重入锁可以重入，同一个线程请求2次，不会造成死锁
    lock = threading.RLock()
    lock.acquire()
    lock.acquire()
    print(123)
    lock.release()
    lock.release()


if __name__ == '__main__':
    # commonLock()
    reentrantLock()
