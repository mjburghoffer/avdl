// Generated from Avdl.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';

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
 * This interface defines a complete listener for a parse tree produced by
 * `AvdlParser`.
 */
export interface AvdlListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `AvdlParser.protocol`.
	 * @param ctx the parse tree
	 */
	enterProtocol?: (ctx: ProtocolContext) => void;
	/**
	 * Exit a parse tree produced by `AvdlParser.protocol`.
	 * @param ctx the parse tree
	 */
	exitProtocol?: (ctx: ProtocolContext) => void;

	/**
	 * Enter a parse tree produced by `AvdlParser.imports`.
	 * @param ctx the parse tree
	 */
	enterImports?: (ctx: ImportsContext) => void;
	/**
	 * Exit a parse tree produced by `AvdlParser.imports`.
	 * @param ctx the parse tree
	 */
	exitImports?: (ctx: ImportsContext) => void;

	/**
	 * Enter a parse tree produced by `AvdlParser.importAvdl`.
	 * @param ctx the parse tree
	 */
	enterImportAvdl?: (ctx: ImportAvdlContext) => void;
	/**
	 * Exit a parse tree produced by `AvdlParser.importAvdl`.
	 * @param ctx the parse tree
	 */
	exitImportAvdl?: (ctx: ImportAvdlContext) => void;

	/**
	 * Enter a parse tree produced by `AvdlParser.importAvsc`.
	 * @param ctx the parse tree
	 */
	enterImportAvsc?: (ctx: ImportAvscContext) => void;
	/**
	 * Exit a parse tree produced by `AvdlParser.importAvsc`.
	 * @param ctx the parse tree
	 */
	exitImportAvsc?: (ctx: ImportAvscContext) => void;

	/**
	 * Enter a parse tree produced by `AvdlParser.importAvpr`.
	 * @param ctx the parse tree
	 */
	enterImportAvpr?: (ctx: ImportAvprContext) => void;
	/**
	 * Exit a parse tree produced by `AvdlParser.importAvpr`.
	 * @param ctx the parse tree
	 */
	exitImportAvpr?: (ctx: ImportAvprContext) => void;

	/**
	 * Enter a parse tree produced by `AvdlParser.annotatedDeclaration`.
	 * @param ctx the parse tree
	 */
	enterAnnotatedDeclaration?: (ctx: AnnotatedDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `AvdlParser.annotatedDeclaration`.
	 * @param ctx the parse tree
	 */
	exitAnnotatedDeclaration?: (ctx: AnnotatedDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `AvdlParser.declaration`.
	 * @param ctx the parse tree
	 */
	enterDeclaration?: (ctx: DeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `AvdlParser.declaration`.
	 * @param ctx the parse tree
	 */
	exitDeclaration?: (ctx: DeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `AvdlParser.declareEnum`.
	 * @param ctx the parse tree
	 */
	enterDeclareEnum?: (ctx: DeclareEnumContext) => void;
	/**
	 * Exit a parse tree produced by `AvdlParser.declareEnum`.
	 * @param ctx the parse tree
	 */
	exitDeclareEnum?: (ctx: DeclareEnumContext) => void;

	/**
	 * Enter a parse tree produced by `AvdlParser.declareRecord`.
	 * @param ctx the parse tree
	 */
	enterDeclareRecord?: (ctx: DeclareRecordContext) => void;
	/**
	 * Exit a parse tree produced by `AvdlParser.declareRecord`.
	 * @param ctx the parse tree
	 */
	exitDeclareRecord?: (ctx: DeclareRecordContext) => void;

	/**
	 * Enter a parse tree produced by `AvdlParser.declareError`.
	 * @param ctx the parse tree
	 */
	enterDeclareError?: (ctx: DeclareErrorContext) => void;
	/**
	 * Exit a parse tree produced by `AvdlParser.declareError`.
	 * @param ctx the parse tree
	 */
	exitDeclareError?: (ctx: DeclareErrorContext) => void;

	/**
	 * Enter a parse tree produced by `AvdlParser.declareFixed`.
	 * @param ctx the parse tree
	 */
	enterDeclareFixed?: (ctx: DeclareFixedContext) => void;
	/**
	 * Exit a parse tree produced by `AvdlParser.declareFixed`.
	 * @param ctx the parse tree
	 */
	exitDeclareFixed?: (ctx: DeclareFixedContext) => void;

	/**
	 * Enter a parse tree produced by `AvdlParser.declareMethod`.
	 * @param ctx the parse tree
	 */
	enterDeclareMethod?: (ctx: DeclareMethodContext) => void;
	/**
	 * Exit a parse tree produced by `AvdlParser.declareMethod`.
	 * @param ctx the parse tree
	 */
	exitDeclareMethod?: (ctx: DeclareMethodContext) => void;

	/**
	 * Enter a parse tree produced by `AvdlParser.methodParam`.
	 * @param ctx the parse tree
	 */
	enterMethodParam?: (ctx: MethodParamContext) => void;
	/**
	 * Exit a parse tree produced by `AvdlParser.methodParam`.
	 * @param ctx the parse tree
	 */
	exitMethodParam?: (ctx: MethodParamContext) => void;

	/**
	 * Enter a parse tree produced by `AvdlParser.declareField`.
	 * @param ctx the parse tree
	 */
	enterDeclareField?: (ctx: DeclareFieldContext) => void;
	/**
	 * Exit a parse tree produced by `AvdlParser.declareField`.
	 * @param ctx the parse tree
	 */
	exitDeclareField?: (ctx: DeclareFieldContext) => void;

	/**
	 * Enter a parse tree produced by `AvdlParser.typeAny`.
	 * @param ctx the parse tree
	 */
	enterTypeAny?: (ctx: TypeAnyContext) => void;
	/**
	 * Exit a parse tree produced by `AvdlParser.typeAny`.
	 * @param ctx the parse tree
	 */
	exitTypeAny?: (ctx: TypeAnyContext) => void;

	/**
	 * Enter a parse tree produced by `AvdlParser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `AvdlParser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;

	/**
	 * Enter a parse tree produced by `AvdlParser.typeUnion`.
	 * @param ctx the parse tree
	 */
	enterTypeUnion?: (ctx: TypeUnionContext) => void;
	/**
	 * Exit a parse tree produced by `AvdlParser.typeUnion`.
	 * @param ctx the parse tree
	 */
	exitTypeUnion?: (ctx: TypeUnionContext) => void;

	/**
	 * Enter a parse tree produced by `AvdlParser.typeContainer`.
	 * @param ctx the parse tree
	 */
	enterTypeContainer?: (ctx: TypeContainerContext) => void;
	/**
	 * Exit a parse tree produced by `AvdlParser.typeContainer`.
	 * @param ctx the parse tree
	 */
	exitTypeContainer?: (ctx: TypeContainerContext) => void;

	/**
	 * Enter a parse tree produced by `AvdlParser.typeComplex`.
	 * @param ctx the parse tree
	 */
	enterTypeComplex?: (ctx: TypeComplexContext) => void;
	/**
	 * Exit a parse tree produced by `AvdlParser.typeComplex`.
	 * @param ctx the parse tree
	 */
	exitTypeComplex?: (ctx: TypeComplexContext) => void;

	/**
	 * Enter a parse tree produced by `AvdlParser.typeMap`.
	 * @param ctx the parse tree
	 */
	enterTypeMap?: (ctx: TypeMapContext) => void;
	/**
	 * Exit a parse tree produced by `AvdlParser.typeMap`.
	 * @param ctx the parse tree
	 */
	exitTypeMap?: (ctx: TypeMapContext) => void;

	/**
	 * Enter a parse tree produced by `AvdlParser.typeArray`.
	 * @param ctx the parse tree
	 */
	enterTypeArray?: (ctx: TypeArrayContext) => void;
	/**
	 * Exit a parse tree produced by `AvdlParser.typeArray`.
	 * @param ctx the parse tree
	 */
	exitTypeArray?: (ctx: TypeArrayContext) => void;

	/**
	 * Enter a parse tree produced by `AvdlParser.typePrimitive`.
	 * @param ctx the parse tree
	 */
	enterTypePrimitive?: (ctx: TypePrimitiveContext) => void;
	/**
	 * Exit a parse tree produced by `AvdlParser.typePrimitive`.
	 * @param ctx the parse tree
	 */
	exitTypePrimitive?: (ctx: TypePrimitiveContext) => void;

	/**
	 * Enter a parse tree produced by `AvdlParser.annotation`.
	 * @param ctx the parse tree
	 */
	enterAnnotation?: (ctx: AnnotationContext) => void;
	/**
	 * Exit a parse tree produced by `AvdlParser.annotation`.
	 * @param ctx the parse tree
	 */
	exitAnnotation?: (ctx: AnnotationContext) => void;

	/**
	 * Enter a parse tree produced by `AvdlParser.object`.
	 * @param ctx the parse tree
	 */
	enterObject?: (ctx: ObjectContext) => void;
	/**
	 * Exit a parse tree produced by `AvdlParser.object`.
	 * @param ctx the parse tree
	 */
	exitObject?: (ctx: ObjectContext) => void;

	/**
	 * Enter a parse tree produced by `AvdlParser.pair`.
	 * @param ctx the parse tree
	 */
	enterPair?: (ctx: PairContext) => void;
	/**
	 * Exit a parse tree produced by `AvdlParser.pair`.
	 * @param ctx the parse tree
	 */
	exitPair?: (ctx: PairContext) => void;

	/**
	 * Enter a parse tree produced by `AvdlParser.array`.
	 * @param ctx the parse tree
	 */
	enterArray?: (ctx: ArrayContext) => void;
	/**
	 * Exit a parse tree produced by `AvdlParser.array`.
	 * @param ctx the parse tree
	 */
	exitArray?: (ctx: ArrayContext) => void;

	/**
	 * Enter a parse tree produced by `AvdlParser.number`.
	 * @param ctx the parse tree
	 */
	enterNumber?: (ctx: NumberContext) => void;
	/**
	 * Exit a parse tree produced by `AvdlParser.number`.
	 * @param ctx the parse tree
	 */
	exitNumber?: (ctx: NumberContext) => void;

	/**
	 * Enter a parse tree produced by `AvdlParser.string`.
	 * @param ctx the parse tree
	 */
	enterString?: (ctx: StringContext) => void;
	/**
	 * Exit a parse tree produced by `AvdlParser.string`.
	 * @param ctx the parse tree
	 */
	exitString?: (ctx: StringContext) => void;

	/**
	 * Enter a parse tree produced by `AvdlParser.json`.
	 * @param ctx the parse tree
	 */
	enterJson?: (ctx: JsonContext) => void;
	/**
	 * Exit a parse tree produced by `AvdlParser.json`.
	 * @param ctx the parse tree
	 */
	exitJson?: (ctx: JsonContext) => void;

	/**
	 * Enter a parse tree produced by `AvdlParser.qualifiedName`.
	 * @param ctx the parse tree
	 */
	enterQualifiedName?: (ctx: QualifiedNameContext) => void;
	/**
	 * Exit a parse tree produced by `AvdlParser.qualifiedName`.
	 * @param ctx the parse tree
	 */
	exitQualifiedName?: (ctx: QualifiedNameContext) => void;

	/**
	 * Enter a parse tree produced by `AvdlParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `AvdlParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `AvdlParser.namespacedIdentifier`.
	 * @param ctx the parse tree
	 */
	enterNamespacedIdentifier?: (ctx: NamespacedIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `AvdlParser.namespacedIdentifier`.
	 * @param ctx the parse tree
	 */
	exitNamespacedIdentifier?: (ctx: NamespacedIdentifierContext) => void;
}

