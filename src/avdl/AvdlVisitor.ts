// Generated from Avdl.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';

import { ProtocolContext } from './AvdlParser';
import { ImportsContext } from './AvdlParser';
import { ImportAvdlContext } from './AvdlParser';
import { ImportAvscContext } from './AvdlParser';
import { ImportAvprContext } from './AvdlParser';
import { AnnotatedDeclarationContext } from './AvdlParser';
import { DeclarationContext } from './AvdlParser';
import { DeclareEnumContext } from './AvdlParser';
import { DeclareRecordContext } from './AvdlParser';
import { DeclareErrorContext } from './AvdlParser';
import { DeclareFixedContext } from './AvdlParser';
import { DeclareMethodContext } from './AvdlParser';
import { MethodParamContext } from './AvdlParser';
import { DeclareFieldContext } from './AvdlParser';
import { TypeAnyContext } from './AvdlParser';
import { TypeContext } from './AvdlParser';
import { TypeUnionContext } from './AvdlParser';
import { TypeContainerContext } from './AvdlParser';
import { TypeComplexContext } from './AvdlParser';
import { TypeMapContext } from './AvdlParser';
import { TypeArrayContext } from './AvdlParser';
import { TypePrimitiveContext } from './AvdlParser';
import { AnnotationContext } from './AvdlParser';
import { ObjectContext } from './AvdlParser';
import { PairContext } from './AvdlParser';
import { ArrayContext } from './AvdlParser';
import { NumberContext } from './AvdlParser';
import { StringContext } from './AvdlParser';
import { JsonContext } from './AvdlParser';
import { QualifiedNameContext } from './AvdlParser';
import { IdentifierContext } from './AvdlParser';
import { NamespacedIdentifierContext } from './AvdlParser';


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `AvdlParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface AvdlVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `AvdlParser.protocol`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProtocol?: (ctx: ProtocolContext) => Result;

	/**
	 * Visit a parse tree produced by `AvdlParser.imports`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImports?: (ctx: ImportsContext) => Result;

	/**
	 * Visit a parse tree produced by `AvdlParser.importAvdl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportAvdl?: (ctx: ImportAvdlContext) => Result;

	/**
	 * Visit a parse tree produced by `AvdlParser.importAvsc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportAvsc?: (ctx: ImportAvscContext) => Result;

	/**
	 * Visit a parse tree produced by `AvdlParser.importAvpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportAvpr?: (ctx: ImportAvprContext) => Result;

	/**
	 * Visit a parse tree produced by `AvdlParser.annotatedDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotatedDeclaration?: (ctx: AnnotatedDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `AvdlParser.declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaration?: (ctx: DeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `AvdlParser.declareEnum`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclareEnum?: (ctx: DeclareEnumContext) => Result;

	/**
	 * Visit a parse tree produced by `AvdlParser.declareRecord`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclareRecord?: (ctx: DeclareRecordContext) => Result;

	/**
	 * Visit a parse tree produced by `AvdlParser.declareError`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclareError?: (ctx: DeclareErrorContext) => Result;

	/**
	 * Visit a parse tree produced by `AvdlParser.declareFixed`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclareFixed?: (ctx: DeclareFixedContext) => Result;

	/**
	 * Visit a parse tree produced by `AvdlParser.declareMethod`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclareMethod?: (ctx: DeclareMethodContext) => Result;

	/**
	 * Visit a parse tree produced by `AvdlParser.methodParam`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodParam?: (ctx: MethodParamContext) => Result;

	/**
	 * Visit a parse tree produced by `AvdlParser.declareField`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclareField?: (ctx: DeclareFieldContext) => Result;

	/**
	 * Visit a parse tree produced by `AvdlParser.typeAny`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeAny?: (ctx: TypeAnyContext) => Result;

	/**
	 * Visit a parse tree produced by `AvdlParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;

	/**
	 * Visit a parse tree produced by `AvdlParser.typeUnion`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeUnion?: (ctx: TypeUnionContext) => Result;

	/**
	 * Visit a parse tree produced by `AvdlParser.typeContainer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeContainer?: (ctx: TypeContainerContext) => Result;

	/**
	 * Visit a parse tree produced by `AvdlParser.typeComplex`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeComplex?: (ctx: TypeComplexContext) => Result;

	/**
	 * Visit a parse tree produced by `AvdlParser.typeMap`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeMap?: (ctx: TypeMapContext) => Result;

	/**
	 * Visit a parse tree produced by `AvdlParser.typeArray`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeArray?: (ctx: TypeArrayContext) => Result;

	/**
	 * Visit a parse tree produced by `AvdlParser.typePrimitive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypePrimitive?: (ctx: TypePrimitiveContext) => Result;

	/**
	 * Visit a parse tree produced by `AvdlParser.annotation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotation?: (ctx: AnnotationContext) => Result;

	/**
	 * Visit a parse tree produced by `AvdlParser.object`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObject?: (ctx: ObjectContext) => Result;

	/**
	 * Visit a parse tree produced by `AvdlParser.pair`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPair?: (ctx: PairContext) => Result;

	/**
	 * Visit a parse tree produced by `AvdlParser.array`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArray?: (ctx: ArrayContext) => Result;

	/**
	 * Visit a parse tree produced by `AvdlParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber?: (ctx: NumberContext) => Result;

	/**
	 * Visit a parse tree produced by `AvdlParser.string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString?: (ctx: StringContext) => Result;

	/**
	 * Visit a parse tree produced by `AvdlParser.json`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJson?: (ctx: JsonContext) => Result;

	/**
	 * Visit a parse tree produced by `AvdlParser.qualifiedName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedName?: (ctx: QualifiedNameContext) => Result;

	/**
	 * Visit a parse tree produced by `AvdlParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `AvdlParser.namespacedIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamespacedIdentifier?: (ctx: NamespacedIdentifierContext) => Result;
}

