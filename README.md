# JavaScriptSnippet
Some snippets about JavaScript.



## Call stack


* [Tasks, microtasks, queues and schedules](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/)	-----	[翻译版传送门](https://segmentfault.com/a/1190000014940904#articleHeader7)


## MessageQueue And EventLoop

* [MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/EventLoop)

	![event loop](https://developer.mozilla.org/files/4617/default.svg)
* ![event](https://user-gold-cdn.xitu.io/2017/11/21/15fdd88994142347?imageView2/0/w/1280/h/960/ignore-error/1)	

	***导图要表达的内容用文字来表述的话：***

	- 同步和异步任务分别进入不同的执行"场所"，同步的进入主线程，异步的进入Event Table并注册函数。
	- 当指定的事情完成时，Event Table会将这个函数移入Event Queue。
	- 主线程内的任务执行完毕为空，会去Event Queue读取对应的函数，进入主线程执行。
	- 上述过程会不断重复，也就是常说的Event Loop(事件循环)。
* [Macrotask, Microtask](https://juejin.im/post/5a6309f76fb9a01cab2858b1)
* 浏览器环境

  ```js
  while (true) {
	queue = getNextQueue()
  	task = queue.pop()
  	execute(task)

  	while (microtaskQueue.hasTasks())
  		doMicrotask()

  	if (isRepaintTime()) {
  		animationTasks = animationQueue.copyTasks()
  		for (task in animationTasks)
  			doAnimationTask(task)
  		 repaint()
  	}
  }
  
  ```
* Node环境
    ```js
    	while (tasksAreWaiting()) {
		queue = getNextQueue()
    		while (queue.hasTasks())
    			task = queue.pop()
    			execute(task)
    		while (nextTickQueue.hasTasks())
    			doNextTickTask()
    		while (promiseQueue.hasTasks())
    			doPromiseTask()
    	}
    ```

