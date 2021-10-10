class AppErrors {
  constructor(msg, code = 400) {
    this.msg = msg
    this.code = code
  }
}

module.exports = AppErrors