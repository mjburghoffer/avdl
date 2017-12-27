import { JsonValue } from "../json";
import { JsonProperties, NamedSchema } from "../schema";
import { Message } from "./message";

const PROTOCOL_RESERVED = new Set<string>([
    "namespace",
    "protocol",
    "doc",
    "messages",
    "types",
    "errors",
]);

export class Protocol extends JsonProperties {

    public readonly fullName: string;
    public readonly types: NamedSchema[];
    public readonly messages: Message[];
    private readonly _typesByName: Map<string, NamedSchema>;
    private readonly _messagesByName: Map<string, Message>;

    public constructor(
        public readonly name: string,
        public readonly namespace: string,
        types: NamedSchema[],
        messages: Message[],
        public readonly doc?: string,
        props?: Map<string, JsonValue>,
    ) {
        super(props, PROTOCOL_RESERVED);
        this.fullName = `${namespace}.${name}`;

        this.types = new Array(types.length);
        this._typesByName = new Map();
        for (const type of types) {
            this.types.push(type);
            this._typesByName.set(type.fullName, type);
        }
        Object.freeze(this.types);
        Object.freeze(this._typesByName);

        this.messages = new Array(messages.length);
        this._messagesByName = new Map();
        for (const message of messages) {
            this.messages.push(message);
            this._messagesByName.set(message.name, message);
        }
        Object.freeze(this.messages);
        Object.freeze(this._messagesByName);
    }

    public getType(name: string): NamedSchema | undefined {
        return this._typesByName.get(name);
    }

    public getMessage(name: string): Message | undefined {
        return this._messagesByName.get(name);
    }

    public toString(): string {
        let str = "{" +
            `"namespace":${JSON.stringify(this.namespace)}` +
            `,"name":${JSON.stringify(this.name)}`;
        if (this.doc) {
            str += `,"doc":${JSON.stringify(this.doc)}`;
        }
        if (this.types.length) {
            str += ',"types":[';
            for (let i = 0; i < this.types.length; ++i) {
                const type = this.types[i];
                if (i > 0) {
                    str += ",";
                }
                str += type.toString();
            }
            str += "]";
        }
        if (this.messages.length) {
            str += ',"messages":[';
            for (let i = 0; i < this.messages.length; ++i) {
                const message = this.messages[i];
                if (i > 0) {
                    str += ",";
                }
                str += message.toString();
            }
            str += "]";
        }
        if (this.properties && this.properties.size) {
            for (const [propKey, propValue] of this.properties.entries()) {
                str += `,${JSON.stringify(propKey)}:${JSON.stringify(propValue)}`;
            }
        }
        str += "}";
        return str;
    }
}
