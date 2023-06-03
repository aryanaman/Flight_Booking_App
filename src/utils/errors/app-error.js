class AppError extends Error{
    constructor(message, stausCode) {
        super(message);
        this.statusCode = stausCode;
        this.explanation = message;
    }
}

module.exports = AppError; 