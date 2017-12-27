import { AvroTypeError } from "../errors";
import { JsonValue } from "../json";

/**
 * Checks whether or not the props contain a reserved word or null value.
 * @param props The props to validate
 * @param reserved Any reserved keys to check for
 */
function validateProps(props?: Map<string, JsonValue>, reserved?: Set<string>): Map<string, JsonValue> | undefined {
    if (!props) {
        return undefined;
    }
    if (!reserved) {
        return props;
    }
    const baddies = new Array<string>();
    for (const prop of props.keys()) {
        if (reserved && reserved.has(prop)) {
            baddies.push(prop);
        }
    }
    if (baddies.length > 0) {
        throw new AvroTypeError(`Can't set reserved property: ${baddies}`);
    }
    return props;
}

export abstract class JsonProperties {

    public readonly properties?: Map<string, JsonValue>;

    public constructor(props?: Map<string, JsonValue>, reserved?: Set<string>) {
        this.properties = validateProps(props, reserved);
    }

    public getProperty(name: string): JsonValue | undefined {
        if (this.properties) {
            return this.properties.get(name);
        }
        return undefined;
    }
}
