import { JsonValue } from "../json";
import { JsonProperties } from "./jsonProperties";
import { Schema } from "./schema";

export enum Order {
    Ascending,
    Descending,
    Ignore,
}

const FIELD_RESERVED = new Set<string>([
    "name",
    "position",
    "schema",
    "doc",
    "default",
    "defaultValue",
    "order",
    "aliases",
]);

export class Field extends JsonProperties {

    public readonly aliases?: string[];

    public constructor(
        public readonly name: string,
        public readonly position: number,
        public readonly schema: Schema,
        public readonly doc?: string,
        public readonly defaultValue?: any,
        public readonly order?: Order,
        aliases?: string[],
        props?: Map<string, JsonValue>,
    ) {
        super(props, FIELD_RESERVED);
        if (aliases) {
            this.aliases = new Array(aliases.length);
            for (const alias of aliases) {
                this.aliases.push(alias);
            }
            Object.freeze(this.aliases);
        } else {
            this.aliases = undefined;
        }
    }
}
