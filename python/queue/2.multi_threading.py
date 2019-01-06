
import queue
import threading
import time

def putTask(taskQueue):
    # 放任务：每隔一段时间放一个任务
    for item in range(5):
        taskQueue.put(item)
        threadName = threading.currentThread().getName()
        print('[{0}]'.format(threadName),': I put', item)
        time.sleep(2)
    
def getTask(taskQueue):
    # 取任务：只要队列中有任务，就从中取任务，没有就阻塞
    while True:
        item = taskQueue.get()
        threadName = threading.currentThread().getName()
        print('[{0}]'.format(threadName),': I got', item)
        # do_work(item)
        # 这里可以写执行任务的代码


def getAndDoTask(taskQueue):
    # 取任务：只要队列中有任务，就从中取任务，没有就阻塞
    while True:
        item = taskQueue.get()
        threadName = threading.currentThread().getName()
        print('[{0}]'.format(threadName),': I got', item)
        print('[{0}]'.format(threadName),': I am doing', item)
        time.sleep(1)



def test1():
    '''2个线程，一个放置任务，一个接受任务'''
    q = queue.Queue()
    t1 = threading.Thread(name='putTask', target=putTask, args=(q,))
    t2 = threading.Thread(name='getTask', target=getTask, args=(q,))

    t2.start()
    t1.start()

def multiWorkers():
    '''多个工人并发工作'''
    q = queue.Queue()
    t1 = threading.Thread(name='putTask', target=putTask, args=(q,))
    w1 = threading.Thread(name='worker1', target=getAndDoTask, args=(q,))
    w2 = threading.Thread(name='worker2', target=getAndDoTask, args=(q,))
    w3 = threading.Thread(name='worker3', target=getAndDoTask, args=(q,))

    t1.start()
    w1.start()
    w2.start()
    w3.start()
    

if __name__ == '__main__':
    #test1()
    multiWorkers()