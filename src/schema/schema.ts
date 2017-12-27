// tslint:disable:max-classes-per-file

import { AvroTypeError, AvroValidationError } from "../errors";
import { ContainerType, NamedType, PrimitiveType, Type } from "../type";
import { Field } from "./field";
import { JsonProperties } from "./jsonProperties";

const SCHEMA_RESERVED = new Set<string>([
    "doc",
    "fields",
    "items",
    "name",
    "namespace",
    "size",
    "symbols",
    "values",
    "type",
    "aliases",
]);

export abstract class Schema extends JsonProperties {
    public abstract readonly type: Type;

    public constructor(props?: Map<string, any>) {
        super(props, SCHEMA_RESERVED);
    }
}

export abstract class PrimitiveSchema extends Schema {
    public abstract readonly type: PrimitiveType;

    public constructor(props?: Map<string, any>) {
        super(props);
    }
}

export class IntSchema extends PrimitiveSchema {
    public readonly type = Type.Int;

    public constructor(props?: Map<string, any>) {
        super(props);
    }
}

export class LongSchema extends PrimitiveSchema {
    public readonly type = Type.Long;

    public constructor(props?: Map<string, any>) {
        super(props);
    }
}

export class FloatSchema extends PrimitiveSchema {
    public readonly type = Type.Float;

    public constructor(props?: Map<string, any>) {
        super(props);
    }
}

export class DoubleSchema extends PrimitiveSchema {
    public readonly type = Type.Double;

    public constructor(props?: Map<string, any>) {
        super(props);
    }
}

export class StringSchema extends PrimitiveSchema {
    public readonly type = Type.String;

    public constructor(props?: Map<string, any>) {
        super(props);
    }
}

export class NullSchema extends PrimitiveSchema {
    public readonly type = Type.Null;

    public constructor(props?: Map<string, any>) {
        super(props);
    }
}

export class BytesSchema extends PrimitiveSchema {
    public readonly type = Type.Bytes;

    public constructor(props?: Map<string, any>) {
        super(props);
    }
}

export class BooleanSchema extends PrimitiveSchema {
    public readonly type = Type.Boolean;

    public constructor(props?: Map<string, any>) {
        super(props);
    }
}

export abstract class ContainerSchema extends Schema {
    public abstract readonly type: ContainerType;

    public constructor(props?: Map<string, any>) {
        super(props);
    }
}

export class ArraySchema extends ContainerSchema {
    public readonly type = Type.Array;

    public constructor(public readonly elementType: Schema, props?: Map<string, any>) {
        super(props);
    }
}

export class MapSchema extends ContainerSchema {
    public readonly type = Type.Map;

    public constructor(public readonly valueType: Schema, props?: Map<string, any>) {
        super(props);
    }
}

export class UnionSchema extends Schema {
    public readonly type = Type.Union;
    public readonly types: Schema[];

    public constructor(types: Schema[], props?: Map<string, any>) {
        super(props);
        this.types = new Array(types.length);
        for (const t of types) {
            if (t.type === Type.Union) {
                throw new AvroTypeError("Unions cannot directly contain other unions");
            }
            this.types.push(t);
        }
        Object.freeze(this.types);
    }
}

export abstract class NamedSchema extends Schema {
    public abstract readonly type: NamedType;
    public readonly fullName: string;
    public readonly aliases: string[];

    public constructor(
        public readonly name: string,
        aliases: string[],
        public readonly namespace?: string,
        public readonly doc?: string,
        props?: Map<string, any>,
    ) {
        super(props);
        this.fullName = namespace ? `${namespace}.${name}` : name;
        this.aliases = new Array(aliases.length);
        for (const alias of aliases) {
            this.aliases.push(alias);
        }
        Object.freeze(this.aliases);
    }
}

export class RecordSchema extends NamedSchema {
    public readonly type = Type.Record;
    public readonly fields: Field[];
    public readonly isError: boolean;
    private readonly _fieldsByName: Map<string, Field>;

    public constructor(
        fields: Field[],
        name: string,
        aliases: string[],
        namespace?: string,
        doc?: string,
        isError?: boolean,
        props?: Map<string, any>,
    ) {
        super(name, aliases, namespace, doc, props);
        this.fields = new Array(fields.length);
        this._fieldsByName = new Map();
        for (let i = 0; i < fields.length; ++i) {
            const field = fields[i];
            this.fields.push(field);
            this._fieldsByName.set(field.name, field);
        }
        Object.freeze(this.fields);
        Object.freeze(this._fieldsByName);
        this.isError = isError || false;
    }

    public getField(name: string): Field | undefined {
        return this._fieldsByName.get(name);
    }
}

export class FixedSchema extends NamedSchema {
    public readonly type = Type.Fixed;

    public constructor(
        name: string,
        aliases: string[],
        public readonly size: number,
        namespace?: string,
        doc?: string,
        props?: Map<string, any>,
    ) {
        super(name, aliases, namespace, doc, props);
        if (size < 0) {
            throw new AvroValidationError(`Invalid fixed size: ${size}`);
        }
    }
}

export class EnumSchema extends NamedSchema {
    public readonly type = Type.Enum;
    public readonly symbols: string[];
    private readonly _symbolOrdinals: Map<string, number>;

    public constructor(
        name: string,
        aliases: string[],
        symbols: string[],
        namespace?: string,
        doc?: string,
        props?: Map<string, any>,
    ) {
        super(name, aliases, namespace, doc, props);
        this.symbols = new Array(symbols.length);
        this._symbolOrdinals = new Map();
        for (let i = 0; i < symbols.length; ++i) {
            const s = symbols[i];
            this.symbols.push(s);
            this._symbolOrdinals.set(s, i);
        }
        Object.freeze(this.symbols);
        Object.freeze(this._symbolOrdinals);
    }

    public getSymbolOrdinal(symbol: string): number | undefined {
        return this._symbolOrdinals.get(symbol);
    }

    public hasSymbol(symbol: string): boolean {
        return this._symbolOrdinals.has(symbol);
    }
}
