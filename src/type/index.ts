export const enum Type {
    Int,
    Long,
    Float,
    Double,
    String,
    Null,
    Bytes,
    Boolean,
    Union,
    Array,
    Map,
    Error,
    Record,
    Fixed,
    Enum,
}

export const enum TypeKind {
    Primitive,
    Container,
    Union,
    Named,
}

export type PrimitiveType =
    Type.Int |
    Type.Long |
    Type.Float |
    Type.Double |
    Type.String |
    Type.Bytes |
    Type.Boolean |
    Type.Null;

export type ContainerType =
    Type.Array |
    Type.Map;

export type UnionType = Type.Union;

export type NamedType =
    Type.Error |
    Type.Record |
    Type.Fixed |
    Type.Enum;

export type ComplexType =
    NamedType |
    UnionType |
    ContainerType;

export type NonUnionType =
    PrimitiveType |
    ContainerType |
    NamedType;

export function getTypeName(type: Type): string {
    switch (type) {
        case Type.Boolean: return "boolean";
        case Type.Int: return "int";
        case Type.Long: return "long";
        case Type.Float: return "float";
        case Type.Double: return "double";
        case Type.String: return "string";
        case Type.Null: return "null";
        case Type.Bytes: return "bytes";
        case Type.Error: return "error";
        case Type.Record: return "record";
        case Type.Fixed: return "fixed";
        case Type.Enum: return "enum";
        case Type.Union: return "union";
        case Type.Array: return "array";
        case Type.Map: return "map";
    }
}

export function getType(name: string): Type | undefined {
    switch (name) {
        case "boolean": return Type.Boolean;
        case "int": return Type.Int;
        case "long": return Type.Long;
        case "float": return Type.Float;
        case "double": return Type.Double;
        case "string": return Type.String;
        case "null": return Type.Null;
        case "bytes": return Type.Bytes;
        case "error": return Type.Error;
        case "fixed": return Type.Fixed;
        case "enum": return Type.Enum;
        case "union": return Type.Union;
        case "array": return Type.Array;
        case "map": return Type.Map;
        default: return undefined;
    }
}

export function getTypeKind(type: Type): TypeKind {
    switch (type) {
        case Type.Boolean: return TypeKind.Primitive;
        case Type.Int: return TypeKind.Primitive;
        case Type.Long: return TypeKind.Primitive;
        case Type.Float: return TypeKind.Primitive;
        case Type.Double: return TypeKind.Primitive;
        case Type.String: return TypeKind.Primitive;
        case Type.Null: return TypeKind.Primitive;
        case Type.Bytes: return TypeKind.Primitive;
        case Type.Error: return TypeKind.Named;
        case Type.Record: return TypeKind.Named;
        case Type.Fixed: return TypeKind.Named;
        case Type.Enum: return TypeKind.Named;
        case Type.Union: return TypeKind.Union;
        case Type.Array: return TypeKind.Container;
        case Type.Map: return TypeKind.Container;
    }
}
