import { JsonValue } from "../json";
import { JsonProperties, Schema } from "../schema";

const MESSAGE_RESERVED = new Set<string>([
    "doc",
    "response",
    "request",
    "errors",
    "one-way",
]);

export class Message extends JsonProperties {
    public readonly isOneWay: boolean = true;

    public constructor(
        public readonly name: string,
        public readonly request: Schema,
        public readonly doc?: string,
        props?: Map<string, JsonValue>,
    ) {
        super(props, MESSAGE_RESERVED);
    }
}
