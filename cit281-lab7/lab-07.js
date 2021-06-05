//CustomError class
class CustomError extends Error {
    constructor(args) {
        super(args);
        this.name = 'CustomError';
        this.message = 'Custom error'
    }
}

function throwGenericError() {
    throw new Error("Generic error")
}

function throwCustomError() {
    throw new CustomError("Custom error")
}

console.log("Force generic error");
try {
    console.log("Generic error try block");
    throwGenericError();
} catch (err) {
    console.log("Generic error catch block");
    console.log(`${err.name}: ${err.message}`);
} finally {
    console.log("Generic error finally block");
}

console.log("Force custom error");
try {
    console.log("Generic custom try block");
    throwCustomError();
} catch (err) {
    console.log("Generic custom catch block");
    console.log(`${err.name}: ${err.message}`);
} finally {
    console.log("Custom error finally block");
}