# 参考：https://blog.csdn.net/y2701310012/article/details/40863145

import threading
import time

def worker1(num):
    print('Worker: {0}'.format(num))

def worker2(sleeptime = 2):
    print(threading.currentThread().getName(), 'Starting')
    time.sleep(sleeptime)
    print(threading.currentThread().getName(), 'Exiting')

def test1():
    '''基本的多线程'''
    threads = []
    for i in range(5):
        t = threading.Thread(target = worker1, args=(i,))
        threads.append(t)
        t.start()

def test2():
    '''给线程进行命名'''
    t = threading.Thread(name = 'my_service', target = worker2)
    t2 = threading.Thread(target = worker2) # 默认命名一般为Thread-%d
    t3 = threading.Thread(target=worker2)
    

    t.start()
    t2.start()
    t3.start()

def daemonThread():
    '''守护线程'''
    # 当程序中存活的非守护线程为0时候，程序结束。即不等待守护线程。
    d = threading.Thread(name = 'daemon', target= worker2, args=(5,))
    t = threading.Thread(name = 'non-daemon', target=worker2, args=(1,))
    d.setDaemon(True)
    d.start()
    t.start()

def join():
    '''阻塞线程'''
    t = threading.Thread(name = 'process', target= worker2, args=(3,))
    t.start()
    t.join()    # 阻塞当前线程直至t线程结束
    t2 = threading.Thread(name = 'process2', target= worker2, args=(3,))
    t2.start()


if __name__ == '__main__':
    #test1()
    #test2()
    #daemonThread()
    join()
