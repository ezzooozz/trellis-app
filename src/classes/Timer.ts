export default class Timer {
  public isRunning: boolean = false
  public elapsed: number = 0
  public progress: number = 0
  private intervalId: number

  constructor (public duration: number, public interval: number = 1000) {}

  start (): this {
    if (this.isRunning) return this
    this.isRunning = true
    // @ts-ignore
    this.intervalId = setInterval(this.tick.bind(this), this.interval)
    return this
  }

  tick (interval?: number): this {
    if (!interval) {
      interval = this.interval
    }
    this.elapsed += interval
    this.progress = this.elapsed / this.duration
    if (this.elapsed >= this.duration) {
      this.stop()
    }
    return this
  }

  stop (): this {
    if (this.intervalId) {
      clearInterval(this.intervalId)
    }
    this.isRunning = false
    return this
  }

  reset (): this {
    this.elapsed = 0
    this.progress = 0
    return this.stop()
  }
}
