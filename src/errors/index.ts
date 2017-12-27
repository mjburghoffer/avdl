// tslint:disable:max-classes-per-file

export class AvroError extends Error {
    constructor(message?: string) {
        super(message);
        Object.setPrototypeOf(this, AvroError.prototype);
        this.name = "AvroError";
    }
}

export class AvroValidationError extends AvroError {
    constructor(message?: string) {
        super(message);
        Object.setPrototypeOf(this, AvroValidationError.prototype);
        this.name = "AvroValidationError";
    }
}

export class AvroTypeError extends AvroError {
    constructor(message?: string) {
        super(message);
        Object.setPrototypeOf(this, AvroTypeError.prototype);
        this.name = "AvroTypeError";
    }
}

export class AvroRemoteError extends AvroError {
    constructor(message?: string) {
        super(message);
        Object.setPrototypeOf(this, AvroRemoteError.prototype);
        this.name = "AvroRemoteError";
    }
}
