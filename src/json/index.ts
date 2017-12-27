// tslint:disable:interface-name

export type JsonValue = null | string | number | boolean | JsonObject | JsonArray;

export interface JsonObject {
    [x: string]: JsonValue;
}

// tslint:disable-next-line:no-empty-interface
export interface JsonArray extends Array<JsonValue> { }
