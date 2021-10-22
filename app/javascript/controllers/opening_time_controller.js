import { Controller } from "stimulus";

export default class extends Controller {
  static targets = [
    "opensAt",
    "closesAt",
    "timesBlock",
    "closed",
    "closedBlock",
    "open24h",
    "open24hBlock"
  ]

  initialize() {
    this.toggleClosed = this.toggleClosed.bind(this)
    this.toggleOpen24h = this.toggleOpen24h.bind(this)
  }

  connect() {
    if (!this.closedTarget) return
    if (!this.open24hTarget) return

    this.closedTarget.addEventListener('change', this.toggleClosed)
    this.open24hTarget.addEventListener('change', this.toggleOpen24h)
  }

  disconnect() {
    if (!this.closedTarget) return
    if (!this.open24hTarget) return

    this.closedTarget.removeEventListener('change', this.toggleClosed)
    this.open24hTarget.removeEventListener('change', this.toggleOpen24h)
  }

  toggleClosed(e) {
    if (this.closedTarget.checked) {
      this.timesBlockTarget.classList.add("hidden")
      this.open24hBlockTarget.classList.add("hidden")
      this.clearTimes()
    } else {
      this.timesBlockTarget.classList.remove("hidden")
      this.open24hBlockTarget.classList.remove("hidden")
      this.addDefaultTimes()
    }
  }

  toggleOpen24h(e) {
    if (this.open24hTarget.checked) {
      this.timesBlockTarget.classList.add("hidden")
      this.closedBlockTarget.classList.add("hidden")
      this.clearTimest()
    } else {
      this.timesBlockTarget.classList.remove("hidden")
      this.closedBlockTarget.classList.remove("hidden")
      this.addDefaultTimes()
    }
  }

  clearTimes() {
    this.opensAtTarget.value = ""
    this.closesAtTarget.value = ""
  }

  addDefaultTimes() {
    this.opensAtTarget.value = "08:00"
    this.closesAtTarget.value = "18:00"
  }
}