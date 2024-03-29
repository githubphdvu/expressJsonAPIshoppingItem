class ExpressError extends Error{//extends normal JS error,easily add a status when we make an instance of it.The error-handling middleware will return this
    constructor(message, status) {
        super()
        this.message = message
        this.status = status
        console.error(this.stack)
    }
}
module.exports = ExpressError