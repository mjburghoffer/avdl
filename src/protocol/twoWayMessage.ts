import { JsonValue } from "../json";
import { Schema } from "../schema";
import { Message } from "./message";

export class TwoWayMessage extends Message {
    public readonly isOneWay = false;

    public constructor(
        name: string,
        request: Schema,
        public readonly response: Schema,
        public readonly errors: Schema,
        doc?: string,
        props?: Map<string, JsonValue>,
    ) {
        super(name, request, doc, props);
    }
}
