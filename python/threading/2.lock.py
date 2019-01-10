# 参考：http://effbot.org/zone/thread-synchronization.htm

import threading
import time

counter = 0
lock = threading.Lock()

def add():
    global counter
    t = counter
    time.sleep(1)
    counter = t + 1

def lockAdd():
    '''加上锁的计数器，保证操作的原子性，从而保证数据的一致性'''
    global counter
    
    lock.acquire(); print(threading.currentThread().getName(), 'lock')  # 如果资源锁住了，当前线程被阻塞

    t = counter
    time.sleep(1)
    counter = t + 1

    lock.release(); print(threading.currentThread().getName(), 'unlock')

def lockAdd2():
    '''使用with操作加锁'''
    global counter

    with lock:
        t = counter
        time.sleep(1)
        counter = t + 1



def multiThread(target):
    '''
    多线程操作，target为多线程方法
    '''
    threads = []
    for i in range(10):
        t = threading.Thread(target=target)
        threads.append(t)
        t.start()

    for i in range(10):
        threads[i].join()

    print('counter =', counter)


if __name__ == '__main__':
    #multiThread(add)
    #multiThread(lockAdd)
    multiThread(lockAdd2)
