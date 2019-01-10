# 参考：https://blog.csdn.net/cnweike/article/details/40821283

import threading
import time
import logging
 
logging.basicConfig(level=logging.DEBUG, format='(%(threadName)-10s) %(message)s',)


def worker(event):
    logging.debug("OK, worker开始。。")
    while True:
        event.wait()
        logging.debug("工作中...")
        time.sleep(1)
        logging.debug("工作结束.")
        event.clear()

class Person:
    def __init__(self, no):
        self.no = no
        self.event = threading.Event()
    
    def speak(self, e):
        e.wait()               # 等待事件发生时阻塞
        time.sleep(1)
        logging.debug('报数: {}'.format(self.no))
        e.clear()           # 清除该事件
        self.event.set()    # 轮到下一位


if __name__ == '__main__':
    mainEvent = threading.Event()
    people = []
    threads = []


    for i in range(10):
        p = Person(i+1)
        people.append(p)
    
    for i in range(10):
        t = threading.Thread(target=people[i].speak, args=(mainEvent if i == 0 else people[i-1].event,))    # 每个人的事件由上一个人激发
        t.start()
        logging.debug('线程{}开始。。'.format(i+1))

    time.sleep(2)
    logging.debug('主线程发号！'.format(i))
    mainEvent.set()



    

