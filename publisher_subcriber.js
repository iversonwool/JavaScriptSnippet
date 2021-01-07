class Notification {

  eventCenter = {}

  on(name, handler) {
    if (!(handler instanceof Function)) {
      throw new Error('handle should be a function')
    }
    if (!this.eventCenter[name]) {
      this.eventCenter[name] = []
    }
    this.eventCenter[name].push(handler)
  }

  emit(name, msg) {
    if (this.eventCenter[name]) {
      this.eventCenter[name].forEach((func) => {
        func(msg)
      })
    }
  }

  off(name, handle) {
    if (this.eventCenter[name]) {
      this.eventCenter[name].splice(this.eventCenter[name].indexOf(handle) >>> 0, 1)
    }
  }
}

const handler = (msg) => {
  console.log('msg is', msg)
}

const handler1 = (msg) => {
  console.log('msg1 is', msg)
}

const noti = new Notification()
noti.on('hello', handler)
noti.on('hello', handler1)

noti.emit('hello', 'world')

noti.off('hello', handler)
noti.emit('hello', 'world')