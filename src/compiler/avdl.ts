import { ANTLRInputStream, CommonTokenStream } from "antlr4ts";
import { AbstractParseTreeVisitor, TerminalNode } from "antlr4ts/tree";
import { AvdlLexer } from "../avdl/AvdlLexer";
import {
    ArrayContext,
    AvdlParser,
    JsonContext,
    NumberContext,
    ProtocolContext,
    StringContext,
} from "../avdl/AvdlParser";
import { AvdlVisitor } from "../avdl/AvdlVisitor";
import { AvroError } from "../errors/index";
import { JsonValue } from "../json";
import { Message, Protocol } from "../protocol";
import { NamedSchema, Schema } from "../schema";

export function compileAvdl(source: string): Protocol {
    // Create the lexer and parser
    const inputStream = new ANTLRInputStream(source);
    const lexer = new AvdlLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new AvdlParser(tokenStream);

    return parser.protocol().accept(new ProtocolVisitor());
}

class ProtocolVisitor extends AbstractParseTreeVisitor<Protocol> implements AvdlVisitor<Protocol> {

    public visitProtocol(ctx: ProtocolContext): Protocol {
        const protocolName = ctx.identifier().IDENTIFIER().text;

        let props: Map<string, JsonValue> | undefined;
        for (const annotation of ctx.annotation()) {
            const name = annotation.ANNOTATION().text.substring(1);
            const value = parseJson(annotation.json());
            if (value) {
                if (!props) {
                    props = new Map();
                }
                props.set(name, value);
            }
        }

        const types = new Array<NamedSchema>();
        for (const ad of ctx.annotatedDeclaration()) {
            // TODO: annotation
            const record = ad.declaration().declareRecord();
        }

        const messages = new Array<Message>();

        return new Protocol(protocolName, "namespace", types, messages, undefined, props);
    }

    protected defaultResult(): Protocol {
        throw new Error("Method not implemented.");
    }
}

function parseJson(ctx?: JsonContext): JsonValue | undefined {
    if (ctx) {
        return JSON.parse(ctx.text) as JsonValue;
    }
    return undefined;
}
