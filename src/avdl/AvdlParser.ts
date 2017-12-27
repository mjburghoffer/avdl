// Generated from Avdl.g4 by ANTLR 4.6-SNAPSHOT


import { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import { FailedPredicateException } from 'antlr4ts/FailedPredicateException';
import { NotNull } from 'antlr4ts/Decorators';
import { NoViableAltException } from 'antlr4ts/NoViableAltException';
import { Override } from 'antlr4ts/Decorators';
import { Parser } from 'antlr4ts/Parser';
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { ParserATNSimulator } from 'antlr4ts/atn/ParserATNSimulator';
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';
import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';
import { RecognitionException } from 'antlr4ts/RecognitionException';
import { RuleContext } from 'antlr4ts/RuleContext';
import { RuleVersion } from 'antlr4ts/RuleVersion';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { Token } from 'antlr4ts/Token';
import { TokenStream } from 'antlr4ts/TokenStream';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';

import * as Utils from 'antlr4ts/misc/Utils';

import { AvdlListener } from './AvdlListener';
import { AvdlVisitor } from './AvdlVisitor';


export class AvdlParser extends Parser {
	public static readonly T__0=1;
	public static readonly T__1=2;
	public static readonly T__2=3;
	public static readonly T__3=4;
	public static readonly T__4=5;
	public static readonly T__5=6;
	public static readonly T__6=7;
	public static readonly T__7=8;
	public static readonly T__8=9;
	public static readonly T__9=10;
	public static readonly T__10=11;
	public static readonly T__11=12;
	public static readonly T__12=13;
	public static readonly T__13=14;
	public static readonly T__14=15;
	public static readonly T__15=16;
	public static readonly T__16=17;
	public static readonly T__17=18;
	public static readonly T__18=19;
	public static readonly T__19=20;
	public static readonly T__20=21;
	public static readonly T__21=22;
	public static readonly T__22=23;
	public static readonly T__23=24;
	public static readonly T__24=25;
	public static readonly T__25=26;
	public static readonly T__26=27;
	public static readonly T__27=28;
	public static readonly T__28=29;
	public static readonly T__29=30;
	public static readonly T__30=31;
	public static readonly T__31=32;
	public static readonly T__32=33;
	public static readonly T__33=34;
	public static readonly BOOLEAN=35;
	public static readonly NULL=36;
	public static readonly NUMBER=37;
	public static readonly ANNOTATION=38;
	public static readonly IDENTIFIER=39;
	public static readonly STRING=40;
	public static readonly DOCUMENTATION=41;
	public static readonly WS=42;
	public static readonly COMMENT=43;
	public static readonly LINE_COMMENT=44;
	public static readonly RULE_protocol = 0;
	public static readonly RULE_imports = 1;
	public static readonly RULE_importAvdl = 2;
	public static readonly RULE_importAvsc = 3;
	public static readonly RULE_importAvpr = 4;
	public static readonly RULE_annotatedDeclaration = 5;
	public static readonly RULE_declaration = 6;
	public static readonly RULE_declareEnum = 7;
	public static readonly RULE_declareRecord = 8;
	public static readonly RULE_declareError = 9;
	public static readonly RULE_declareFixed = 10;
	public static readonly RULE_declareMethod = 11;
	public static readonly RULE_methodParam = 12;
	public static readonly RULE_declareField = 13;
	public static readonly RULE_typeAny = 14;
	public static readonly RULE_type = 15;
	public static readonly RULE_typeUnion = 16;
	public static readonly RULE_typeContainer = 17;
	public static readonly RULE_typeComplex = 18;
	public static readonly RULE_typeMap = 19;
	public static readonly RULE_typeArray = 20;
	public static readonly RULE_typePrimitive = 21;
	public static readonly RULE_annotation = 22;
	public static readonly RULE_object = 23;
	public static readonly RULE_pair = 24;
	public static readonly RULE_array = 25;
	public static readonly RULE_number = 26;
	public static readonly RULE_string = 27;
	public static readonly RULE_json = 28;
	public static readonly RULE_qualifiedName = 29;
	public static readonly RULE_identifier = 30;
	public static readonly RULE_namespacedIdentifier = 31;
	public static readonly ruleNames: string[] = [
		"protocol", "imports", "importAvdl", "importAvsc", "importAvpr", "annotatedDeclaration", 
		"declaration", "declareEnum", "declareRecord", "declareError", "declareFixed", 
		"declareMethod", "methodParam", "declareField", "typeAny", "type", "typeUnion", 
		"typeContainer", "typeComplex", "typeMap", "typeArray", "typePrimitive", 
		"annotation", "object", "pair", "array", "number", "string", "json", "qualifiedName", 
		"identifier", "namespacedIdentifier"
	];

	private static readonly _LITERAL_NAMES: (string | undefined)[] = [
		undefined, "'protocol'", "'{'", "'}'", "'import'", "'idl'", "';'", "'schema'", 
		"'enum'", "','", "'record'", "'error'", "'fixed'", "'('", "')'", "'void'", 
		"'throws'", "'oneway'", "'='", "'union'", "'map'", "'<'", "'>'", "'array'", 
		"'int'", "'long'", "'float'", "'double'", "'string'", "'bytes'", "'boolean'", 
		"':'", "'['", "']'", "'.'", undefined, "'null'"
	];
	private static readonly _SYMBOLIC_NAMES: (string | undefined)[] = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"BOOLEAN", "NULL", "NUMBER", "ANNOTATION", "IDENTIFIER", "STRING", "DOCUMENTATION", 
		"WS", "COMMENT", "LINE_COMMENT"
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(AvdlParser._LITERAL_NAMES, AvdlParser._SYMBOLIC_NAMES, []);

	@Override
	@NotNull
	public get vocabulary(): Vocabulary {
		return AvdlParser.VOCABULARY;
	}

	@Override
	public get grammarFileName(): string { return "Avdl.g4"; }

	@Override
	public get ruleNames(): string[] { return AvdlParser.ruleNames; }

	@Override
	public get serializedATN(): string { return AvdlParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(AvdlParser._ATN, this);
	}
	@RuleVersion(0)
	public protocol(): ProtocolContext {
		let _localctx: ProtocolContext = new ProtocolContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, AvdlParser.RULE_protocol);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 67;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===AvdlParser.ANNOTATION) {
				{
				{
				this.state = 64;
				this.annotation();
				}
				}
				this.state = 69;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 70;
			this.match(AvdlParser.T__0);
			this.state = 71;
			this.identifier();
			this.state = 72;
			this.match(AvdlParser.T__1);
			this.state = 76;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===AvdlParser.T__3) {
				{
				{
				this.state = 73;
				this.imports();
				}
				}
				this.state = 78;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 82;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 8)) & ~0x1F) === 0 && ((1 << (_la - 8)) & ((1 << (AvdlParser.T__7 - 8)) | (1 << (AvdlParser.T__9 - 8)) | (1 << (AvdlParser.T__10 - 8)) | (1 << (AvdlParser.T__11 - 8)) | (1 << (AvdlParser.T__14 - 8)) | (1 << (AvdlParser.T__18 - 8)) | (1 << (AvdlParser.T__19 - 8)) | (1 << (AvdlParser.T__22 - 8)) | (1 << (AvdlParser.T__23 - 8)) | (1 << (AvdlParser.T__24 - 8)) | (1 << (AvdlParser.T__25 - 8)) | (1 << (AvdlParser.T__26 - 8)) | (1 << (AvdlParser.T__27 - 8)) | (1 << (AvdlParser.T__28 - 8)) | (1 << (AvdlParser.T__29 - 8)) | (1 << (AvdlParser.NULL - 8)) | (1 << (AvdlParser.ANNOTATION - 8)) | (1 << (AvdlParser.IDENTIFIER - 8)))) !== 0)) {
				{
				{
				this.state = 79;
				this.annotatedDeclaration();
				}
				}
				this.state = 84;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 85;
			this.match(AvdlParser.T__2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public imports(): ImportsContext {
		let _localctx: ImportsContext = new ImportsContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, AvdlParser.RULE_imports);
		try {
			this.state = 90;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,3,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 87;
				this.importAvdl();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 88;
				this.importAvsc();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 89;
				this.importAvpr();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public importAvdl(): ImportAvdlContext {
		let _localctx: ImportAvdlContext = new ImportAvdlContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, AvdlParser.RULE_importAvdl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 92;
			this.match(AvdlParser.T__3);
			this.state = 93;
			this.match(AvdlParser.T__4);
			this.state = 94;
			this.string();
			this.state = 95;
			this.match(AvdlParser.T__5);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public importAvsc(): ImportAvscContext {
		let _localctx: ImportAvscContext = new ImportAvscContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, AvdlParser.RULE_importAvsc);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 97;
			this.match(AvdlParser.T__3);
			this.state = 98;
			this.match(AvdlParser.T__6);
			this.state = 99;
			this.string();
			this.state = 100;
			this.match(AvdlParser.T__5);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public importAvpr(): ImportAvprContext {
		let _localctx: ImportAvprContext = new ImportAvprContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, AvdlParser.RULE_importAvpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 102;
			this.match(AvdlParser.T__3);
			this.state = 103;
			this.match(AvdlParser.T__0);
			this.state = 104;
			this.string();
			this.state = 105;
			this.match(AvdlParser.T__5);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public annotatedDeclaration(): AnnotatedDeclarationContext {
		let _localctx: AnnotatedDeclarationContext = new AnnotatedDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, AvdlParser.RULE_annotatedDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 110;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===AvdlParser.ANNOTATION) {
				{
				{
				this.state = 107;
				this.annotation();
				}
				}
				this.state = 112;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 113;
			this.declaration();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, AvdlParser.RULE_declaration);
		try {
			this.state = 120;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AvdlParser.T__7:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 115;
				this.declareEnum();
				}
				break;
			case AvdlParser.T__9:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 116;
				this.declareRecord();
				}
				break;
			case AvdlParser.T__10:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 117;
				this.declareError();
				}
				break;
			case AvdlParser.T__11:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 118;
				this.declareFixed();
				}
				break;
			case AvdlParser.T__14:
			case AvdlParser.T__18:
			case AvdlParser.T__19:
			case AvdlParser.T__22:
			case AvdlParser.T__23:
			case AvdlParser.T__24:
			case AvdlParser.T__25:
			case AvdlParser.T__26:
			case AvdlParser.T__27:
			case AvdlParser.T__28:
			case AvdlParser.T__29:
			case AvdlParser.NULL:
			case AvdlParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 119;
				this.declareMethod();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public declareEnum(): DeclareEnumContext {
		let _localctx: DeclareEnumContext = new DeclareEnumContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, AvdlParser.RULE_declareEnum);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 122;
			this.match(AvdlParser.T__7);
			this.state = 123;
			this.identifier();
			this.state = 124;
			this.match(AvdlParser.T__1);
			this.state = 125;
			this.identifier();
			this.state = 130;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===AvdlParser.T__8) {
				{
				{
				this.state = 126;
				this.match(AvdlParser.T__8);
				this.state = 127;
				this.identifier();
				}
				}
				this.state = 132;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 133;
			this.match(AvdlParser.T__2);
			this.state = 135;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===AvdlParser.T__5) {
				{
				this.state = 134;
				this.match(AvdlParser.T__5);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public declareRecord(): DeclareRecordContext {
		let _localctx: DeclareRecordContext = new DeclareRecordContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, AvdlParser.RULE_declareRecord);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 137;
			this.match(AvdlParser.T__9);
			this.state = 138;
			this.identifier();
			this.state = 139;
			this.match(AvdlParser.T__1);
			this.state = 143;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 19)) & ~0x1F) === 0 && ((1 << (_la - 19)) & ((1 << (AvdlParser.T__18 - 19)) | (1 << (AvdlParser.T__19 - 19)) | (1 << (AvdlParser.T__22 - 19)) | (1 << (AvdlParser.T__23 - 19)) | (1 << (AvdlParser.T__24 - 19)) | (1 << (AvdlParser.T__25 - 19)) | (1 << (AvdlParser.T__26 - 19)) | (1 << (AvdlParser.T__27 - 19)) | (1 << (AvdlParser.T__28 - 19)) | (1 << (AvdlParser.T__29 - 19)) | (1 << (AvdlParser.NULL - 19)) | (1 << (AvdlParser.ANNOTATION - 19)) | (1 << (AvdlParser.IDENTIFIER - 19)))) !== 0)) {
				{
				{
				this.state = 140;
				this.declareField();
				}
				}
				this.state = 145;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 146;
			this.match(AvdlParser.T__2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public declareError(): DeclareErrorContext {
		let _localctx: DeclareErrorContext = new DeclareErrorContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, AvdlParser.RULE_declareError);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 148;
			this.match(AvdlParser.T__10);
			this.state = 149;
			this.identifier();
			this.state = 150;
			this.match(AvdlParser.T__1);
			this.state = 154;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 19)) & ~0x1F) === 0 && ((1 << (_la - 19)) & ((1 << (AvdlParser.T__18 - 19)) | (1 << (AvdlParser.T__19 - 19)) | (1 << (AvdlParser.T__22 - 19)) | (1 << (AvdlParser.T__23 - 19)) | (1 << (AvdlParser.T__24 - 19)) | (1 << (AvdlParser.T__25 - 19)) | (1 << (AvdlParser.T__26 - 19)) | (1 << (AvdlParser.T__27 - 19)) | (1 << (AvdlParser.T__28 - 19)) | (1 << (AvdlParser.T__29 - 19)) | (1 << (AvdlParser.NULL - 19)) | (1 << (AvdlParser.ANNOTATION - 19)) | (1 << (AvdlParser.IDENTIFIER - 19)))) !== 0)) {
				{
				{
				this.state = 151;
				this.declareField();
				}
				}
				this.state = 156;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 157;
			this.match(AvdlParser.T__2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public declareFixed(): DeclareFixedContext {
		let _localctx: DeclareFixedContext = new DeclareFixedContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, AvdlParser.RULE_declareFixed);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 159;
			this.match(AvdlParser.T__11);
			this.state = 160;
			this.identifier();
			this.state = 161;
			this.match(AvdlParser.T__12);
			this.state = 162;
			this.identifier();
			this.state = 163;
			this.match(AvdlParser.T__13);
			this.state = 164;
			this.match(AvdlParser.T__5);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public declareMethod(): DeclareMethodContext {
		let _localctx: DeclareMethodContext = new DeclareMethodContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, AvdlParser.RULE_declareMethod);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 168;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AvdlParser.T__18:
			case AvdlParser.T__19:
			case AvdlParser.T__22:
			case AvdlParser.T__23:
			case AvdlParser.T__24:
			case AvdlParser.T__25:
			case AvdlParser.T__26:
			case AvdlParser.T__27:
			case AvdlParser.T__28:
			case AvdlParser.T__29:
			case AvdlParser.NULL:
			case AvdlParser.IDENTIFIER:
				{
				this.state = 166;
				this.typeAny();
				}
				break;
			case AvdlParser.T__14:
				{
				this.state = 167;
				this.match(AvdlParser.T__14);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 170;
			this.match(AvdlParser.IDENTIFIER);
			this.state = 171;
			this.match(AvdlParser.T__12);
			this.state = 180;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 19)) & ~0x1F) === 0 && ((1 << (_la - 19)) & ((1 << (AvdlParser.T__18 - 19)) | (1 << (AvdlParser.T__19 - 19)) | (1 << (AvdlParser.T__22 - 19)) | (1 << (AvdlParser.T__23 - 19)) | (1 << (AvdlParser.T__24 - 19)) | (1 << (AvdlParser.T__25 - 19)) | (1 << (AvdlParser.T__26 - 19)) | (1 << (AvdlParser.T__27 - 19)) | (1 << (AvdlParser.T__28 - 19)) | (1 << (AvdlParser.T__29 - 19)) | (1 << (AvdlParser.NULL - 19)) | (1 << (AvdlParser.IDENTIFIER - 19)))) !== 0)) {
				{
				this.state = 172;
				this.methodParam();
				this.state = 177;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===AvdlParser.T__8) {
					{
					{
					this.state = 173;
					this.match(AvdlParser.T__8);
					this.state = 174;
					this.methodParam();
					}
					}
					this.state = 179;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 182;
			this.match(AvdlParser.T__13);
			this.state = 185;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===AvdlParser.T__15) {
				{
				this.state = 183;
				this.match(AvdlParser.T__15);
				this.state = 184;
				this.identifier();
				}
			}

			this.state = 188;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===AvdlParser.T__16) {
				{
				this.state = 187;
				this.match(AvdlParser.T__16);
				}
			}

			this.state = 190;
			this.match(AvdlParser.T__5);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public methodParam(): MethodParamContext {
		let _localctx: MethodParamContext = new MethodParamContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, AvdlParser.RULE_methodParam);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 192;
			this.typeAny();
			this.state = 193;
			this.identifier();
			this.state = 196;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===AvdlParser.T__17) {
				{
				this.state = 194;
				this.match(AvdlParser.T__17);
				this.state = 195;
				this.json();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public declareField(): DeclareFieldContext {
		let _localctx: DeclareFieldContext = new DeclareFieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, AvdlParser.RULE_declareField);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 201;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===AvdlParser.ANNOTATION) {
				{
				{
				this.state = 198;
				this.annotation();
				}
				}
				this.state = 203;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 204;
			this.typeAny();
			this.state = 208;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===AvdlParser.ANNOTATION) {
				{
				{
				this.state = 205;
				this.annotation();
				}
				}
				this.state = 210;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 211;
			this.identifier();
			this.state = 214;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===AvdlParser.T__17) {
				{
				this.state = 212;
				this.match(AvdlParser.T__17);
				this.state = 213;
				this.json();
				}
			}

			this.state = 216;
			this.match(AvdlParser.T__5);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public typeAny(): TypeAnyContext {
		let _localctx: TypeAnyContext = new TypeAnyContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, AvdlParser.RULE_typeAny);
		try {
			this.state = 220;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AvdlParser.T__19:
			case AvdlParser.T__22:
			case AvdlParser.T__23:
			case AvdlParser.T__24:
			case AvdlParser.T__25:
			case AvdlParser.T__26:
			case AvdlParser.T__27:
			case AvdlParser.T__28:
			case AvdlParser.T__29:
			case AvdlParser.NULL:
			case AvdlParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 218;
				this.type();
				}
				break;
			case AvdlParser.T__18:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 219;
				this.typeUnion();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public type(): TypeContext {
		let _localctx: TypeContext = new TypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, AvdlParser.RULE_type);
		try {
			this.state = 225;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AvdlParser.T__23:
			case AvdlParser.T__24:
			case AvdlParser.T__25:
			case AvdlParser.T__26:
			case AvdlParser.T__27:
			case AvdlParser.T__28:
			case AvdlParser.T__29:
			case AvdlParser.NULL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 222;
				this.typePrimitive();
				}
				break;
			case AvdlParser.T__19:
			case AvdlParser.T__22:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 223;
				this.typeContainer();
				}
				break;
			case AvdlParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 224;
				this.typeComplex();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public typeUnion(): TypeUnionContext {
		let _localctx: TypeUnionContext = new TypeUnionContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, AvdlParser.RULE_typeUnion);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 227;
			this.match(AvdlParser.T__18);
			this.state = 228;
			this.match(AvdlParser.T__1);
			this.state = 229;
			this.type();
			this.state = 234;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===AvdlParser.T__8) {
				{
				{
				this.state = 230;
				this.match(AvdlParser.T__8);
				this.state = 231;
				this.type();
				}
				}
				this.state = 236;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 237;
			this.match(AvdlParser.T__2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public typeContainer(): TypeContainerContext {
		let _localctx: TypeContainerContext = new TypeContainerContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, AvdlParser.RULE_typeContainer);
		try {
			this.state = 241;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AvdlParser.T__19:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 239;
				this.typeMap();
				}
				break;
			case AvdlParser.T__22:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 240;
				this.typeArray();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public typeComplex(): TypeComplexContext {
		let _localctx: TypeComplexContext = new TypeComplexContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, AvdlParser.RULE_typeComplex);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 243;
			this.qualifiedName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public typeMap(): TypeMapContext {
		let _localctx: TypeMapContext = new TypeMapContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, AvdlParser.RULE_typeMap);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 245;
			this.match(AvdlParser.T__19);
			this.state = 246;
			this.match(AvdlParser.T__20);
			this.state = 250;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===AvdlParser.ANNOTATION) {
				{
				{
				this.state = 247;
				this.annotation();
				}
				}
				this.state = 252;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 253;
			this.typeAny();
			this.state = 254;
			this.match(AvdlParser.T__21);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public typeArray(): TypeArrayContext {
		let _localctx: TypeArrayContext = new TypeArrayContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, AvdlParser.RULE_typeArray);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 256;
			this.match(AvdlParser.T__22);
			this.state = 257;
			this.match(AvdlParser.T__20);
			this.state = 261;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===AvdlParser.ANNOTATION) {
				{
				{
				this.state = 258;
				this.annotation();
				}
				}
				this.state = 263;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 264;
			this.typeAny();
			this.state = 265;
			this.match(AvdlParser.T__21);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public typePrimitive(): TypePrimitiveContext {
		let _localctx: TypePrimitiveContext = new TypePrimitiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, AvdlParser.RULE_typePrimitive);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 267;
			_la = this._input.LA(1);
			if ( !(((((_la - 24)) & ~0x1F) === 0 && ((1 << (_la - 24)) & ((1 << (AvdlParser.T__23 - 24)) | (1 << (AvdlParser.T__24 - 24)) | (1 << (AvdlParser.T__25 - 24)) | (1 << (AvdlParser.T__26 - 24)) | (1 << (AvdlParser.T__27 - 24)) | (1 << (AvdlParser.T__28 - 24)) | (1 << (AvdlParser.T__29 - 24)) | (1 << (AvdlParser.NULL - 24)))) !== 0)) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public annotation(): AnnotationContext {
		let _localctx: AnnotationContext = new AnnotationContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, AvdlParser.RULE_annotation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 269;
			this.match(AvdlParser.ANNOTATION);
			this.state = 274;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===AvdlParser.T__12) {
				{
				this.state = 270;
				this.match(AvdlParser.T__12);
				this.state = 271;
				this.json();
				this.state = 272;
				this.match(AvdlParser.T__13);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public object(): ObjectContext {
		let _localctx: ObjectContext = new ObjectContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, AvdlParser.RULE_object);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 276;
			this.match(AvdlParser.T__1);
			this.state = 285;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===AvdlParser.STRING) {
				{
				this.state = 277;
				this.pair();
				this.state = 282;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===AvdlParser.T__8) {
					{
					{
					this.state = 278;
					this.match(AvdlParser.T__8);
					this.state = 279;
					this.pair();
					}
					}
					this.state = 284;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 287;
			this.match(AvdlParser.T__2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public pair(): PairContext {
		let _localctx: PairContext = new PairContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, AvdlParser.RULE_pair);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 289;
			this.match(AvdlParser.STRING);
			this.state = 290;
			this.match(AvdlParser.T__30);
			this.state = 291;
			this.json();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public array(): ArrayContext {
		let _localctx: ArrayContext = new ArrayContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, AvdlParser.RULE_array);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 293;
			this.match(AvdlParser.T__31);
			this.state = 302;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===AvdlParser.T__1 || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (AvdlParser.T__31 - 32)) | (1 << (AvdlParser.BOOLEAN - 32)) | (1 << (AvdlParser.NULL - 32)) | (1 << (AvdlParser.NUMBER - 32)) | (1 << (AvdlParser.STRING - 32)))) !== 0)) {
				{
				this.state = 294;
				this.json();
				this.state = 299;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===AvdlParser.T__8) {
					{
					{
					this.state = 295;
					this.match(AvdlParser.T__8);
					this.state = 296;
					this.json();
					}
					}
					this.state = 301;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 304;
			this.match(AvdlParser.T__32);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public number(): NumberContext {
		let _localctx: NumberContext = new NumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, AvdlParser.RULE_number);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 306;
			this.match(AvdlParser.NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public string(): StringContext {
		let _localctx: StringContext = new StringContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, AvdlParser.RULE_string);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 308;
			this.match(AvdlParser.STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public json(): JsonContext {
		let _localctx: JsonContext = new JsonContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, AvdlParser.RULE_json);
		try {
			this.state = 316;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AvdlParser.STRING:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 310;
				this.string();
				}
				break;
			case AvdlParser.NUMBER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 311;
				this.number();
				}
				break;
			case AvdlParser.T__1:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 312;
				this.object();
				}
				break;
			case AvdlParser.T__31:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 313;
				this.array();
				}
				break;
			case AvdlParser.BOOLEAN:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 314;
				this.match(AvdlParser.BOOLEAN);
				}
				break;
			case AvdlParser.NULL:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 315;
				this.match(AvdlParser.NULL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public qualifiedName(): QualifiedNameContext {
		let _localctx: QualifiedNameContext = new QualifiedNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, AvdlParser.RULE_qualifiedName);
		try {
			this.state = 320;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,31,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 318;
				this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 319;
				this.namespacedIdentifier();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, AvdlParser.RULE_identifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 322;
			this.match(AvdlParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public namespacedIdentifier(): NamespacedIdentifierContext {
		let _localctx: NamespacedIdentifierContext = new NamespacedIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, AvdlParser.RULE_namespacedIdentifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 324;
			this.match(AvdlParser.IDENTIFIER);
			this.state = 325;
			this.match(AvdlParser.T__33);
			this.state = 326;
			this.match(AvdlParser.IDENTIFIER);
			this.state = 331;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===AvdlParser.T__33) {
				{
				{
				this.state = 327;
				this.match(AvdlParser.T__33);
				this.state = 328;
				this.match(AvdlParser.IDENTIFIER);
				}
				}
				this.state = 333;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03.\u0151\x04\x02"+
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07"+
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04"+
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04"+
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04"+
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04"+
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x03\x02\x07\x02"+
		"D\n\x02\f\x02\x0E\x02G\v\x02\x03\x02\x03\x02\x03\x02\x03\x02\x07\x02M"+
		"\n\x02\f\x02\x0E\x02P\v\x02\x03\x02\x07\x02S\n\x02\f\x02\x0E\x02V\v\x02"+
		"\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x05\x03]\n\x03\x03\x04\x03\x04"+
		"\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06"+
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x07\x07o\n\x07\f\x07\x0E\x07"+
		"r\v\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b{\n\b\x03\t"+
		"\x03\t\x03\t\x03\t\x03\t\x03\t\x07\t\x83\n\t\f\t\x0E\t\x86\v\t\x03\t\x03"+
		"\t\x05\t\x8A\n\t\x03\n\x03\n\x03\n\x03\n\x07\n\x90\n\n\f\n\x0E\n\x93\v"+
		"\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x07\v\x9B\n\v\f\v\x0E\v\x9E\v\v"+
		"\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x05"+
		"\r\xAB\n\r\x03\r\x03\r\x03\r\x03\r\x03\r\x07\r\xB2\n\r\f\r\x0E\r\xB5\v"+
		"\r\x05\r\xB7\n\r\x03\r\x03\r\x03\r\x05\r\xBC\n\r\x03\r\x05\r\xBF\n\r\x03"+
		"\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\xC7\n\x0E\x03\x0F\x07"+
		"\x0F\xCA\n\x0F\f\x0F\x0E\x0F\xCD\v\x0F\x03\x0F\x03\x0F\x07\x0F\xD1\n\x0F"+
		"\f\x0F\x0E\x0F\xD4\v\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\xD9\n\x0F\x03"+
		"\x0F\x03\x0F\x03\x10\x03\x10\x05\x10\xDF\n\x10\x03\x11\x03\x11\x03\x11"+
		"\x05\x11\xE4\n\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x07\x12\xEB"+
		"\n\x12\f\x12\x0E\x12\xEE\v\x12\x03\x12\x03\x12\x03\x13\x03\x13\x05\x13"+
		"\xF4\n\x13\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x07\x15\xFB\n\x15\f"+
		"\x15\x0E\x15\xFE\v\x15\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16"+
		"\x07\x16\u0106\n\x16\f\x16\x0E\x16\u0109\v\x16\x03\x16\x03\x16\x03\x16"+
		"\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18\u0115"+
		"\n\x18\x03\x19\x03\x19\x03\x19\x03\x19\x07\x19\u011B\n\x19\f\x19\x0E\x19"+
		"\u011E\v\x19\x05\x19\u0120\n\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A"+
		"\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x07\x1B\u012C\n\x1B\f\x1B\x0E"+
		"\x1B\u012F\v\x1B\x05\x1B\u0131\n\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03"+
		"\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u013F"+
		"\n\x1E\x03\x1F\x03\x1F\x05\x1F\u0143\n\x1F\x03 \x03 \x03!\x03!\x03!\x03"+
		"!\x03!\x07!\u014C\n!\f!\x0E!\u014F\v!\x03!\x02\x02\x02\"\x02\x02\x04\x02"+
		"\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18"+
		"\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x02"+
		"0\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02\x02\x03\x04\x02\x1A &&\u015A"+
		"\x02E\x03\x02\x02\x02\x04\\\x03\x02\x02\x02\x06^\x03\x02\x02\x02\bc\x03"+
		"\x02\x02\x02\nh\x03\x02\x02\x02\fp\x03\x02\x02\x02\x0Ez\x03\x02\x02\x02"+
		"\x10|\x03\x02\x02\x02\x12\x8B\x03\x02\x02\x02\x14\x96\x03\x02\x02\x02"+
		"\x16\xA1\x03\x02\x02\x02\x18\xAA\x03\x02\x02\x02\x1A\xC2\x03\x02\x02\x02"+
		"\x1C\xCB\x03\x02\x02\x02\x1E\xDE\x03\x02\x02\x02 \xE3\x03\x02\x02\x02"+
		"\"\xE5\x03\x02\x02\x02$\xF3\x03\x02\x02\x02&\xF5\x03\x02\x02\x02(\xF7"+
		"\x03\x02\x02\x02*\u0102\x03\x02\x02\x02,\u010D\x03\x02\x02\x02.\u010F"+
		"\x03\x02\x02\x020\u0116\x03\x02\x02\x022\u0123\x03\x02\x02\x024\u0127"+
		"\x03\x02\x02\x026\u0134\x03\x02\x02\x028\u0136\x03\x02\x02\x02:\u013E"+
		"\x03\x02\x02\x02<\u0142\x03\x02\x02\x02>\u0144\x03\x02\x02\x02@\u0146"+
		"\x03\x02\x02\x02BD\x05.\x18\x02CB\x03\x02\x02\x02DG\x03\x02\x02\x02EC"+
		"\x03\x02\x02\x02EF\x03\x02\x02\x02FH\x03\x02\x02\x02GE\x03\x02\x02\x02"+
		"HI\x07\x03\x02\x02IJ\x05> \x02JN\x07\x04\x02\x02KM\x05\x04\x03\x02LK\x03"+
		"\x02\x02\x02MP\x03\x02\x02\x02NL\x03\x02\x02\x02NO\x03\x02\x02\x02OT\x03"+
		"\x02\x02\x02PN\x03\x02\x02\x02QS\x05\f\x07\x02RQ\x03\x02\x02\x02SV\x03"+
		"\x02\x02\x02TR\x03\x02\x02\x02TU\x03\x02\x02\x02UW\x03\x02\x02\x02VT\x03"+
		"\x02\x02\x02WX\x07\x05\x02\x02X\x03\x03\x02\x02\x02Y]\x05\x06\x04\x02"+
		"Z]\x05\b\x05\x02[]\x05\n\x06\x02\\Y\x03\x02\x02\x02\\Z\x03\x02\x02\x02"+
		"\\[\x03\x02\x02\x02]\x05\x03\x02\x02\x02^_\x07\x06\x02\x02_`\x07\x07\x02"+
		"\x02`a\x058\x1D\x02ab\x07\b\x02\x02b\x07\x03\x02\x02\x02cd\x07\x06\x02"+
		"\x02de\x07\t\x02\x02ef\x058\x1D\x02fg\x07\b\x02\x02g\t\x03\x02\x02\x02"+
		"hi\x07\x06\x02\x02ij\x07\x03\x02\x02jk\x058\x1D\x02kl\x07\b\x02\x02l\v"+
		"\x03\x02\x02\x02mo\x05.\x18\x02nm\x03\x02\x02\x02or\x03\x02\x02\x02pn"+
		"\x03\x02\x02\x02pq\x03\x02\x02\x02qs\x03\x02\x02\x02rp\x03\x02\x02\x02"+
		"st\x05\x0E\b\x02t\r\x03\x02\x02\x02u{\x05\x10\t\x02v{\x05\x12\n\x02w{"+
		"\x05\x14\v\x02x{\x05\x16\f\x02y{\x05\x18\r\x02zu\x03\x02\x02\x02zv\x03"+
		"\x02\x02\x02zw\x03\x02\x02\x02zx\x03\x02\x02\x02zy\x03\x02\x02\x02{\x0F"+
		"\x03\x02\x02\x02|}\x07\n\x02\x02}~\x05> \x02~\x7F\x07\x04\x02\x02\x7F"+
		"\x84\x05> \x02\x80\x81\x07\v\x02\x02\x81\x83\x05> \x02\x82\x80\x03\x02"+
		"\x02\x02\x83\x86\x03\x02\x02\x02\x84\x82\x03\x02\x02\x02\x84\x85\x03\x02"+
		"\x02\x02\x85\x87\x03\x02\x02\x02\x86\x84\x03\x02\x02\x02\x87\x89\x07\x05"+
		"\x02\x02\x88\x8A\x07\b\x02\x02\x89\x88\x03\x02\x02\x02\x89\x8A\x03\x02"+
		"\x02\x02\x8A\x11\x03\x02\x02\x02\x8B\x8C\x07\f\x02\x02\x8C\x8D\x05> \x02"+
		"\x8D\x91\x07\x04\x02\x02\x8E\x90\x05\x1C\x0F\x02\x8F\x8E\x03\x02\x02\x02"+
		"\x90\x93\x03\x02\x02\x02\x91\x8F\x03\x02\x02\x02\x91\x92\x03\x02\x02\x02"+
		"\x92\x94\x03\x02\x02\x02\x93\x91\x03\x02\x02\x02\x94\x95\x07\x05\x02\x02"+
		"\x95\x13\x03\x02\x02\x02\x96\x97\x07\r\x02\x02\x97\x98\x05> \x02\x98\x9C"+
		"\x07\x04\x02\x02\x99\x9B\x05\x1C\x0F\x02\x9A\x99\x03\x02\x02\x02\x9B\x9E"+
		"\x03\x02\x02\x02\x9C\x9A\x03\x02\x02\x02\x9C\x9D\x03\x02\x02\x02\x9D\x9F"+
		"\x03\x02\x02\x02\x9E\x9C\x03\x02\x02\x02\x9F\xA0\x07\x05\x02\x02\xA0\x15"+
		"\x03\x02\x02\x02\xA1\xA2\x07\x0E\x02\x02\xA2\xA3\x05> \x02\xA3\xA4\x07"+
		"\x0F\x02\x02\xA4\xA5\x05> \x02\xA5\xA6\x07\x10\x02\x02\xA6\xA7\x07\b\x02"+
		"\x02\xA7\x17\x03\x02\x02\x02\xA8\xAB\x05\x1E\x10\x02\xA9\xAB\x07\x11\x02"+
		"\x02\xAA\xA8\x03\x02\x02\x02\xAA\xA9\x03\x02\x02\x02\xAB\xAC\x03\x02\x02"+
		"\x02\xAC\xAD\x07)\x02\x02\xAD\xB6\x07\x0F\x02\x02\xAE\xB3\x05\x1A\x0E"+
		"\x02\xAF\xB0\x07\v\x02\x02\xB0\xB2\x05\x1A\x0E\x02\xB1\xAF\x03\x02\x02"+
		"\x02\xB2\xB5\x03\x02\x02\x02\xB3\xB1\x03\x02\x02\x02\xB3\xB4\x03\x02\x02"+
		"\x02\xB4\xB7\x03\x02\x02\x02\xB5\xB3\x03\x02\x02\x02\xB6\xAE\x03\x02\x02"+
		"\x02\xB6\xB7\x03\x02\x02\x02\xB7\xB8\x03\x02\x02\x02\xB8\xBB\x07\x10\x02"+
		"\x02\xB9\xBA\x07\x12\x02\x02\xBA\xBC\x05> \x02\xBB\xB9\x03\x02\x02\x02"+
		"\xBB\xBC\x03\x02\x02\x02\xBC\xBE\x03\x02\x02\x02\xBD\xBF\x07\x13\x02\x02"+
		"\xBE\xBD\x03\x02\x02\x02\xBE\xBF\x03\x02\x02\x02\xBF\xC0\x03\x02\x02\x02"+
		"\xC0\xC1\x07\b\x02\x02\xC1\x19\x03\x02\x02\x02\xC2\xC3\x05\x1E\x10\x02"+
		"\xC3\xC6\x05> \x02\xC4\xC5\x07\x14\x02\x02\xC5\xC7\x05:\x1E\x02\xC6\xC4"+
		"\x03\x02\x02\x02\xC6\xC7\x03\x02\x02\x02\xC7\x1B\x03\x02\x02\x02\xC8\xCA"+
		"\x05.\x18\x02\xC9\xC8\x03\x02\x02\x02\xCA\xCD\x03\x02\x02\x02\xCB\xC9"+
		"\x03\x02\x02\x02\xCB\xCC\x03\x02\x02\x02\xCC\xCE\x03\x02\x02\x02\xCD\xCB"+
		"\x03\x02\x02\x02\xCE\xD2\x05\x1E\x10\x02\xCF\xD1\x05.\x18\x02\xD0\xCF"+
		"\x03\x02\x02\x02\xD1\xD4\x03\x02\x02\x02\xD2\xD0\x03\x02\x02\x02\xD2\xD3"+
		"\x03\x02\x02\x02\xD3\xD5\x03\x02\x02\x02\xD4\xD2\x03\x02\x02\x02\xD5\xD8"+
		"\x05> \x02\xD6\xD7\x07\x14\x02\x02\xD7\xD9\x05:\x1E\x02\xD8\xD6\x03\x02"+
		"\x02\x02\xD8\xD9\x03\x02\x02\x02\xD9\xDA\x03\x02\x02\x02\xDA\xDB\x07\b"+
		"\x02\x02\xDB\x1D\x03\x02\x02\x02\xDC\xDF\x05 \x11\x02\xDD\xDF\x05\"\x12"+
		"\x02\xDE\xDC\x03\x02\x02\x02\xDE\xDD\x03\x02\x02\x02\xDF\x1F\x03\x02\x02"+
		"\x02\xE0\xE4\x05,\x17\x02\xE1\xE4\x05$\x13\x02\xE2\xE4\x05&\x14\x02\xE3"+
		"\xE0\x03\x02\x02\x02\xE3\xE1\x03\x02\x02\x02\xE3\xE2\x03\x02\x02\x02\xE4"+
		"!\x03\x02\x02\x02\xE5\xE6\x07\x15\x02\x02\xE6\xE7\x07\x04\x02\x02\xE7"+
		"\xEC\x05 \x11\x02\xE8\xE9\x07\v\x02\x02\xE9\xEB\x05 \x11\x02\xEA\xE8\x03"+
		"\x02\x02\x02\xEB\xEE\x03\x02\x02\x02\xEC\xEA\x03\x02\x02\x02\xEC\xED\x03"+
		"\x02\x02\x02\xED\xEF\x03\x02\x02\x02\xEE\xEC\x03\x02\x02\x02\xEF\xF0\x07"+
		"\x05\x02\x02\xF0#\x03\x02\x02\x02\xF1\xF4\x05(\x15\x02\xF2\xF4\x05*\x16"+
		"\x02\xF3\xF1\x03\x02\x02\x02\xF3\xF2\x03\x02\x02\x02\xF4%\x03\x02\x02"+
		"\x02\xF5\xF6\x05<\x1F\x02\xF6\'\x03\x02\x02\x02\xF7\xF8\x07\x16\x02\x02"+
		"\xF8\xFC\x07\x17\x02\x02\xF9\xFB\x05.\x18\x02\xFA\xF9\x03\x02\x02\x02"+
		"\xFB\xFE\x03\x02\x02\x02\xFC\xFA\x03\x02\x02\x02\xFC\xFD\x03\x02\x02\x02"+
		"\xFD\xFF\x03\x02\x02\x02\xFE\xFC\x03\x02\x02\x02\xFF\u0100\x05\x1E\x10"+
		"\x02\u0100\u0101\x07\x18\x02\x02\u0101)\x03\x02\x02\x02\u0102\u0103\x07"+
		"\x19\x02\x02\u0103\u0107\x07\x17\x02\x02\u0104\u0106\x05.\x18\x02\u0105"+
		"\u0104\x03\x02\x02\x02\u0106\u0109\x03\x02\x02\x02\u0107\u0105\x03\x02"+
		"\x02\x02\u0107\u0108\x03\x02\x02\x02\u0108\u010A\x03\x02\x02\x02\u0109"+
		"\u0107\x03\x02\x02\x02\u010A\u010B\x05\x1E\x10\x02\u010B\u010C\x07\x18"+
		"\x02\x02\u010C+\x03\x02\x02\x02\u010D\u010E\t\x02\x02\x02\u010E-\x03\x02"+
		"\x02\x02\u010F\u0114\x07(\x02\x02\u0110\u0111\x07\x0F\x02\x02\u0111\u0112"+
		"\x05:\x1E\x02\u0112\u0113\x07\x10\x02\x02\u0113\u0115\x03\x02\x02\x02"+
		"\u0114\u0110\x03\x02\x02\x02\u0114\u0115\x03\x02\x02\x02\u0115/\x03\x02"+
		"\x02\x02\u0116\u011F\x07\x04\x02\x02\u0117\u011C\x052\x1A\x02\u0118\u0119"+
		"\x07\v\x02\x02\u0119\u011B\x052\x1A\x02\u011A\u0118\x03\x02\x02\x02\u011B"+
		"\u011E\x03\x02\x02\x02\u011C\u011A\x03\x02\x02\x02\u011C\u011D\x03\x02"+
		"\x02\x02\u011D\u0120\x03\x02\x02\x02\u011E\u011C\x03\x02\x02\x02\u011F"+
		"\u0117\x03\x02\x02\x02\u011F\u0120\x03\x02\x02\x02\u0120\u0121\x03\x02"+
		"\x02\x02\u0121\u0122\x07\x05\x02\x02\u01221\x03\x02\x02\x02\u0123\u0124"+
		"\x07*\x02\x02\u0124\u0125\x07!\x02\x02\u0125\u0126\x05:\x1E\x02\u0126"+
		"3\x03\x02\x02\x02\u0127\u0130\x07\"\x02\x02\u0128\u012D\x05:\x1E\x02\u0129"+
		"\u012A\x07\v\x02\x02\u012A\u012C\x05:\x1E\x02\u012B\u0129\x03\x02\x02"+
		"\x02\u012C\u012F\x03\x02\x02\x02\u012D\u012B\x03\x02\x02\x02\u012D\u012E"+
		"\x03\x02\x02\x02\u012E\u0131\x03\x02\x02\x02\u012F\u012D\x03\x02\x02\x02"+
		"\u0130\u0128\x03\x02\x02\x02\u0130\u0131\x03\x02\x02\x02\u0131\u0132\x03"+
		"\x02\x02\x02\u0132\u0133\x07#\x02\x02\u01335\x03\x02\x02\x02\u0134\u0135"+
		"\x07\'\x02\x02\u01357\x03\x02\x02\x02\u0136\u0137\x07*\x02\x02\u01379"+
		"\x03\x02\x02\x02\u0138\u013F\x058\x1D\x02\u0139\u013F\x056\x1C\x02\u013A"+
		"\u013F\x050\x19\x02\u013B\u013F\x054\x1B\x02\u013C\u013F\x07%\x02\x02"+
		"\u013D\u013F\x07&\x02\x02\u013E\u0138\x03\x02\x02\x02\u013E\u0139\x03"+
		"\x02\x02\x02\u013E\u013A\x03\x02\x02\x02\u013E\u013B\x03\x02\x02\x02\u013E"+
		"\u013C\x03\x02\x02\x02\u013E\u013D\x03\x02\x02\x02\u013F;\x03\x02\x02"+
		"\x02\u0140\u0143\x05> \x02\u0141\u0143\x05@!\x02\u0142\u0140\x03\x02\x02"+
		"\x02\u0142\u0141\x03\x02\x02\x02\u0143=\x03\x02\x02\x02\u0144\u0145\x07"+
		")\x02\x02\u0145?\x03\x02\x02\x02\u0146\u0147\x07)\x02\x02\u0147\u0148"+
		"\x07$\x02\x02\u0148\u014D\x07)\x02\x02\u0149\u014A\x07$\x02\x02\u014A"+
		"\u014C\x07)\x02\x02\u014B\u0149\x03\x02\x02\x02\u014C\u014F\x03\x02\x02"+
		"\x02\u014D\u014B\x03\x02\x02\x02\u014D\u014E\x03\x02\x02\x02\u014EA\x03"+
		"\x02\x02\x02\u014F\u014D\x03\x02\x02\x02#ENT\\pz\x84\x89\x91\x9C\xAA\xB3"+
		"\xB6\xBB\xBE\xC6\xCB\xD2\xD8\xDE\xE3\xEC\xF3\xFC\u0107\u0114\u011C\u011F"+
		"\u012D\u0130\u013E\u0142\u014D";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!AvdlParser.__ATN) {
			AvdlParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(AvdlParser._serializedATN));
		}

		return AvdlParser.__ATN;
	}

}

export class ProtocolContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public imports(): ImportsContext[];
	public imports(i: number): ImportsContext;
	public imports(i?: number): ImportsContext | ImportsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ImportsContext);
		} else {
			return this.getRuleContext(i, ImportsContext);
		}
	}
	public annotatedDeclaration(): AnnotatedDeclarationContext[];
	public annotatedDeclaration(i: number): AnnotatedDeclarationContext;
	public annotatedDeclaration(i?: number): AnnotatedDeclarationContext | AnnotatedDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotatedDeclarationContext);
		} else {
			return this.getRuleContext(i, AnnotatedDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AvdlParser.RULE_protocol; }
	@Override
	public enterRule(listener: AvdlListener): void {
		if (listener.enterProtocol) listener.enterProtocol(this);
	}
	@Override
	public exitRule(listener: AvdlListener): void {
		if (listener.exitProtocol) listener.exitProtocol(this);
	}
	@Override
	public accept<Result>(visitor: AvdlVisitor<Result>): Result {
		if (visitor.visitProtocol) return visitor.visitProtocol(this);
		else return visitor.visitChildren(this);
	}
}


export class ImportsContext extends ParserRuleContext {
	public importAvdl(): ImportAvdlContext | undefined {
		return this.tryGetRuleContext(0, ImportAvdlContext);
	}
	public importAvsc(): ImportAvscContext | undefined {
		return this.tryGetRuleContext(0, ImportAvscContext);
	}
	public importAvpr(): ImportAvprContext | undefined {
		return this.tryGetRuleContext(0, ImportAvprContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AvdlParser.RULE_imports; }
	@Override
	public enterRule(listener: AvdlListener): void {
		if (listener.enterImports) listener.enterImports(this);
	}
	@Override
	public exitRule(listener: AvdlListener): void {
		if (listener.exitImports) listener.exitImports(this);
	}
	@Override
	public accept<Result>(visitor: AvdlVisitor<Result>): Result {
		if (visitor.visitImports) return visitor.visitImports(this);
		else return visitor.visitChildren(this);
	}
}


export class ImportAvdlContext extends ParserRuleContext {
	public string(): StringContext {
		return this.getRuleContext(0, StringContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AvdlParser.RULE_importAvdl; }
	@Override
	public enterRule(listener: AvdlListener): void {
		if (listener.enterImportAvdl) listener.enterImportAvdl(this);
	}
	@Override
	public exitRule(listener: AvdlListener): void {
		if (listener.exitImportAvdl) listener.exitImportAvdl(this);
	}
	@Override
	public accept<Result>(visitor: AvdlVisitor<Result>): Result {
		if (visitor.visitImportAvdl) return visitor.visitImportAvdl(this);
		else return visitor.visitChildren(this);
	}
}


export class ImportAvscContext extends ParserRuleContext {
	public string(): StringContext {
		return this.getRuleContext(0, StringContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AvdlParser.RULE_importAvsc; }
	@Override
	public enterRule(listener: AvdlListener): void {
		if (listener.enterImportAvsc) listener.enterImportAvsc(this);
	}
	@Override
	public exitRule(listener: AvdlListener): void {
		if (listener.exitImportAvsc) listener.exitImportAvsc(this);
	}
	@Override
	public accept<Result>(visitor: AvdlVisitor<Result>): Result {
		if (visitor.visitImportAvsc) return visitor.visitImportAvsc(this);
		else return visitor.visitChildren(this);
	}
}


export class ImportAvprContext extends ParserRuleContext {
	public string(): StringContext {
		return this.getRuleContext(0, StringContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AvdlParser.RULE_importAvpr; }
	@Override
	public enterRule(listener: AvdlListener): void {
		if (listener.enterImportAvpr) listener.enterImportAvpr(this);
	}
	@Override
	public exitRule(listener: AvdlListener): void {
		if (listener.exitImportAvpr) listener.exitImportAvpr(this);
	}
	@Override
	public accept<Result>(visitor: AvdlVisitor<Result>): Result {
		if (visitor.visitImportAvpr) return visitor.visitImportAvpr(this);
		else return visitor.visitChildren(this);
	}
}


export class AnnotatedDeclarationContext extends ParserRuleContext {
	public declaration(): DeclarationContext {
		return this.getRuleContext(0, DeclarationContext);
	}
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AvdlParser.RULE_annotatedDeclaration; }
	@Override
	public enterRule(listener: AvdlListener): void {
		if (listener.enterAnnotatedDeclaration) listener.enterAnnotatedDeclaration(this);
	}
	@Override
	public exitRule(listener: AvdlListener): void {
		if (listener.exitAnnotatedDeclaration) listener.exitAnnotatedDeclaration(this);
	}
	@Override
	public accept<Result>(visitor: AvdlVisitor<Result>): Result {
		if (visitor.visitAnnotatedDeclaration) return visitor.visitAnnotatedDeclaration(this);
		else return visitor.visitChildren(this);
	}
}


export class DeclarationContext extends ParserRuleContext {
	public declareEnum(): DeclareEnumContext | undefined {
		return this.tryGetRuleContext(0, DeclareEnumContext);
	}
	public declareRecord(): DeclareRecordContext | undefined {
		return this.tryGetRuleContext(0, DeclareRecordContext);
	}
	public declareError(): DeclareErrorContext | undefined {
		return this.tryGetRuleContext(0, DeclareErrorContext);
	}
	public declareFixed(): DeclareFixedContext | undefined {
		return this.tryGetRuleContext(0, DeclareFixedContext);
	}
	public declareMethod(): DeclareMethodContext | undefined {
		return this.tryGetRuleContext(0, DeclareMethodContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AvdlParser.RULE_declaration; }
	@Override
	public enterRule(listener: AvdlListener): void {
		if (listener.enterDeclaration) listener.enterDeclaration(this);
	}
	@Override
	public exitRule(listener: AvdlListener): void {
		if (listener.exitDeclaration) listener.exitDeclaration(this);
	}
	@Override
	public accept<Result>(visitor: AvdlVisitor<Result>): Result {
		if (visitor.visitDeclaration) return visitor.visitDeclaration(this);
		else return visitor.visitChildren(this);
	}
}


export class DeclareEnumContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AvdlParser.RULE_declareEnum; }
	@Override
	public enterRule(listener: AvdlListener): void {
		if (listener.enterDeclareEnum) listener.enterDeclareEnum(this);
	}
	@Override
	public exitRule(listener: AvdlListener): void {
		if (listener.exitDeclareEnum) listener.exitDeclareEnum(this);
	}
	@Override
	public accept<Result>(visitor: AvdlVisitor<Result>): Result {
		if (visitor.visitDeclareEnum) return visitor.visitDeclareEnum(this);
		else return visitor.visitChildren(this);
	}
}


export class DeclareRecordContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public declareField(): DeclareFieldContext[];
	public declareField(i: number): DeclareFieldContext;
	public declareField(i?: number): DeclareFieldContext | DeclareFieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclareFieldContext);
		} else {
			return this.getRuleContext(i, DeclareFieldContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AvdlParser.RULE_declareRecord; }
	@Override
	public enterRule(listener: AvdlListener): void {
		if (listener.enterDeclareRecord) listener.enterDeclareRecord(this);
	}
	@Override
	public exitRule(listener: AvdlListener): void {
		if (listener.exitDeclareRecord) listener.exitDeclareRecord(this);
	}
	@Override
	public accept<Result>(visitor: AvdlVisitor<Result>): Result {
		if (visitor.visitDeclareRecord) return visitor.visitDeclareRecord(this);
		else return visitor.visitChildren(this);
	}
}


export class DeclareErrorContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public declareField(): DeclareFieldContext[];
	public declareField(i: number): DeclareFieldContext;
	public declareField(i?: number): DeclareFieldContext | DeclareFieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclareFieldContext);
		} else {
			return this.getRuleContext(i, DeclareFieldContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AvdlParser.RULE_declareError; }
	@Override
	public enterRule(listener: AvdlListener): void {
		if (listener.enterDeclareError) listener.enterDeclareError(this);
	}
	@Override
	public exitRule(listener: AvdlListener): void {
		if (listener.exitDeclareError) listener.exitDeclareError(this);
	}
	@Override
	public accept<Result>(visitor: AvdlVisitor<Result>): Result {
		if (visitor.visitDeclareError) return visitor.visitDeclareError(this);
		else return visitor.visitChildren(this);
	}
}


export class DeclareFixedContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AvdlParser.RULE_declareFixed; }
	@Override
	public enterRule(listener: AvdlListener): void {
		if (listener.enterDeclareFixed) listener.enterDeclareFixed(this);
	}
	@Override
	public exitRule(listener: AvdlListener): void {
		if (listener.exitDeclareFixed) listener.exitDeclareFixed(this);
	}
	@Override
	public accept<Result>(visitor: AvdlVisitor<Result>): Result {
		if (visitor.visitDeclareFixed) return visitor.visitDeclareFixed(this);
		else return visitor.visitChildren(this);
	}
}


export class DeclareMethodContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(AvdlParser.IDENTIFIER, 0); }
	public typeAny(): TypeAnyContext | undefined {
		return this.tryGetRuleContext(0, TypeAnyContext);
	}
	public methodParam(): MethodParamContext[];
	public methodParam(i: number): MethodParamContext;
	public methodParam(i?: number): MethodParamContext | MethodParamContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MethodParamContext);
		} else {
			return this.getRuleContext(i, MethodParamContext);
		}
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AvdlParser.RULE_declareMethod; }
	@Override
	public enterRule(listener: AvdlListener): void {
		if (listener.enterDeclareMethod) listener.enterDeclareMethod(this);
	}
	@Override
	public exitRule(listener: AvdlListener): void {
		if (listener.exitDeclareMethod) listener.exitDeclareMethod(this);
	}
	@Override
	public accept<Result>(visitor: AvdlVisitor<Result>): Result {
		if (visitor.visitDeclareMethod) return visitor.visitDeclareMethod(this);
		else return visitor.visitChildren(this);
	}
}


export class MethodParamContext extends ParserRuleContext {
	public typeAny(): TypeAnyContext {
		return this.getRuleContext(0, TypeAnyContext);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public json(): JsonContext | undefined {
		return this.tryGetRuleContext(0, JsonContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AvdlParser.RULE_methodParam; }
	@Override
	public enterRule(listener: AvdlListener): void {
		if (listener.enterMethodParam) listener.enterMethodParam(this);
	}
	@Override
	public exitRule(listener: AvdlListener): void {
		if (listener.exitMethodParam) listener.exitMethodParam(this);
	}
	@Override
	public accept<Result>(visitor: AvdlVisitor<Result>): Result {
		if (visitor.visitMethodParam) return visitor.visitMethodParam(this);
		else return visitor.visitChildren(this);
	}
}


export class DeclareFieldContext extends ParserRuleContext {
	public typeAny(): TypeAnyContext {
		return this.getRuleContext(0, TypeAnyContext);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	public json(): JsonContext | undefined {
		return this.tryGetRuleContext(0, JsonContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AvdlParser.RULE_declareField; }
	@Override
	public enterRule(listener: AvdlListener): void {
		if (listener.enterDeclareField) listener.enterDeclareField(this);
	}
	@Override
	public exitRule(listener: AvdlListener): void {
		if (listener.exitDeclareField) listener.exitDeclareField(this);
	}
	@Override
	public accept<Result>(visitor: AvdlVisitor<Result>): Result {
		if (visitor.visitDeclareField) return visitor.visitDeclareField(this);
		else return visitor.visitChildren(this);
	}
}


export class TypeAnyContext extends ParserRuleContext {
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public typeUnion(): TypeUnionContext | undefined {
		return this.tryGetRuleContext(0, TypeUnionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AvdlParser.RULE_typeAny; }
	@Override
	public enterRule(listener: AvdlListener): void {
		if (listener.enterTypeAny) listener.enterTypeAny(this);
	}
	@Override
	public exitRule(listener: AvdlListener): void {
		if (listener.exitTypeAny) listener.exitTypeAny(this);
	}
	@Override
	public accept<Result>(visitor: AvdlVisitor<Result>): Result {
		if (visitor.visitTypeAny) return visitor.visitTypeAny(this);
		else return visitor.visitChildren(this);
	}
}


export class TypeContext extends ParserRuleContext {
	public typePrimitive(): TypePrimitiveContext | undefined {
		return this.tryGetRuleContext(0, TypePrimitiveContext);
	}
	public typeContainer(): TypeContainerContext | undefined {
		return this.tryGetRuleContext(0, TypeContainerContext);
	}
	public typeComplex(): TypeComplexContext | undefined {
		return this.tryGetRuleContext(0, TypeComplexContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AvdlParser.RULE_type; }
	@Override
	public enterRule(listener: AvdlListener): void {
		if (listener.enterType) listener.enterType(this);
	}
	@Override
	public exitRule(listener: AvdlListener): void {
		if (listener.exitType) listener.exitType(this);
	}
	@Override
	public accept<Result>(visitor: AvdlVisitor<Result>): Result {
		if (visitor.visitType) return visitor.visitType(this);
		else return visitor.visitChildren(this);
	}
}


export class TypeUnionContext extends ParserRuleContext {
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AvdlParser.RULE_typeUnion; }
	@Override
	public enterRule(listener: AvdlListener): void {
		if (listener.enterTypeUnion) listener.enterTypeUnion(this);
	}
	@Override
	public exitRule(listener: AvdlListener): void {
		if (listener.exitTypeUnion) listener.exitTypeUnion(this);
	}
	@Override
	public accept<Result>(visitor: AvdlVisitor<Result>): Result {
		if (visitor.visitTypeUnion) return visitor.visitTypeUnion(this);
		else return visitor.visitChildren(this);
	}
}


export class TypeContainerContext extends ParserRuleContext {
	public typeMap(): TypeMapContext | undefined {
		return this.tryGetRuleContext(0, TypeMapContext);
	}
	public typeArray(): TypeArrayContext | undefined {
		return this.tryGetRuleContext(0, TypeArrayContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AvdlParser.RULE_typeContainer; }
	@Override
	public enterRule(listener: AvdlListener): void {
		if (listener.enterTypeContainer) listener.enterTypeContainer(this);
	}
	@Override
	public exitRule(listener: AvdlListener): void {
		if (listener.exitTypeContainer) listener.exitTypeContainer(this);
	}
	@Override
	public accept<Result>(visitor: AvdlVisitor<Result>): Result {
		if (visitor.visitTypeContainer) return visitor.visitTypeContainer(this);
		else return visitor.visitChildren(this);
	}
}


export class TypeComplexContext extends ParserRuleContext {
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AvdlParser.RULE_typeComplex; }
	@Override
	public enterRule(listener: AvdlListener): void {
		if (listener.enterTypeComplex) listener.enterTypeComplex(this);
	}
	@Override
	public exitRule(listener: AvdlListener): void {
		if (listener.exitTypeComplex) listener.exitTypeComplex(this);
	}
	@Override
	public accept<Result>(visitor: AvdlVisitor<Result>): Result {
		if (visitor.visitTypeComplex) return visitor.visitTypeComplex(this);
		else return visitor.visitChildren(this);
	}
}


export class TypeMapContext extends ParserRuleContext {
	public typeAny(): TypeAnyContext {
		return this.getRuleContext(0, TypeAnyContext);
	}
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AvdlParser.RULE_typeMap; }
	@Override
	public enterRule(listener: AvdlListener): void {
		if (listener.enterTypeMap) listener.enterTypeMap(this);
	}
	@Override
	public exitRule(listener: AvdlListener): void {
		if (listener.exitTypeMap) listener.exitTypeMap(this);
	}
	@Override
	public accept<Result>(visitor: AvdlVisitor<Result>): Result {
		if (visitor.visitTypeMap) return visitor.visitTypeMap(this);
		else return visitor.visitChildren(this);
	}
}


export class TypeArrayContext extends ParserRuleContext {
	public typeAny(): TypeAnyContext {
		return this.getRuleContext(0, TypeAnyContext);
	}
	public annotation(): AnnotationContext[];
	public annotation(i: number): AnnotationContext;
	public annotation(i?: number): AnnotationContext | AnnotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationContext);
		} else {
			return this.getRuleContext(i, AnnotationContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AvdlParser.RULE_typeArray; }
	@Override
	public enterRule(listener: AvdlListener): void {
		if (listener.enterTypeArray) listener.enterTypeArray(this);
	}
	@Override
	public exitRule(listener: AvdlListener): void {
		if (listener.exitTypeArray) listener.exitTypeArray(this);
	}
	@Override
	public accept<Result>(visitor: AvdlVisitor<Result>): Result {
		if (visitor.visitTypeArray) return visitor.visitTypeArray(this);
		else return visitor.visitChildren(this);
	}
}


export class TypePrimitiveContext extends ParserRuleContext {
	public NULL(): TerminalNode { return this.getToken(AvdlParser.NULL, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AvdlParser.RULE_typePrimitive; }
	@Override
	public enterRule(listener: AvdlListener): void {
		if (listener.enterTypePrimitive) listener.enterTypePrimitive(this);
	}
	@Override
	public exitRule(listener: AvdlListener): void {
		if (listener.exitTypePrimitive) listener.exitTypePrimitive(this);
	}
	@Override
	public accept<Result>(visitor: AvdlVisitor<Result>): Result {
		if (visitor.visitTypePrimitive) return visitor.visitTypePrimitive(this);
		else return visitor.visitChildren(this);
	}
}


export class AnnotationContext extends ParserRuleContext {
	public ANNOTATION(): TerminalNode { return this.getToken(AvdlParser.ANNOTATION, 0); }
	public json(): JsonContext | undefined {
		return this.tryGetRuleContext(0, JsonContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AvdlParser.RULE_annotation; }
	@Override
	public enterRule(listener: AvdlListener): void {
		if (listener.enterAnnotation) listener.enterAnnotation(this);
	}
	@Override
	public exitRule(listener: AvdlListener): void {
		if (listener.exitAnnotation) listener.exitAnnotation(this);
	}
	@Override
	public accept<Result>(visitor: AvdlVisitor<Result>): Result {
		if (visitor.visitAnnotation) return visitor.visitAnnotation(this);
		else return visitor.visitChildren(this);
	}
}


export class ObjectContext extends ParserRuleContext {
	public pair(): PairContext[];
	public pair(i: number): PairContext;
	public pair(i?: number): PairContext | PairContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PairContext);
		} else {
			return this.getRuleContext(i, PairContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AvdlParser.RULE_object; }
	@Override
	public enterRule(listener: AvdlListener): void {
		if (listener.enterObject) listener.enterObject(this);
	}
	@Override
	public exitRule(listener: AvdlListener): void {
		if (listener.exitObject) listener.exitObject(this);
	}
	@Override
	public accept<Result>(visitor: AvdlVisitor<Result>): Result {
		if (visitor.visitObject) return visitor.visitObject(this);
		else return visitor.visitChildren(this);
	}
}


export class PairContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(AvdlParser.STRING, 0); }
	public json(): JsonContext {
		return this.getRuleContext(0, JsonContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AvdlParser.RULE_pair; }
	@Override
	public enterRule(listener: AvdlListener): void {
		if (listener.enterPair) listener.enterPair(this);
	}
	@Override
	public exitRule(listener: AvdlListener): void {
		if (listener.exitPair) listener.exitPair(this);
	}
	@Override
	public accept<Result>(visitor: AvdlVisitor<Result>): Result {
		if (visitor.visitPair) return visitor.visitPair(this);
		else return visitor.visitChildren(this);
	}
}


export class ArrayContext extends ParserRuleContext {
	public json(): JsonContext[];
	public json(i: number): JsonContext;
	public json(i?: number): JsonContext | JsonContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JsonContext);
		} else {
			return this.getRuleContext(i, JsonContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AvdlParser.RULE_array; }
	@Override
	public enterRule(listener: AvdlListener): void {
		if (listener.enterArray) listener.enterArray(this);
	}
	@Override
	public exitRule(listener: AvdlListener): void {
		if (listener.exitArray) listener.exitArray(this);
	}
	@Override
	public accept<Result>(visitor: AvdlVisitor<Result>): Result {
		if (visitor.visitArray) return visitor.visitArray(this);
		else return visitor.visitChildren(this);
	}
}


export class NumberContext extends ParserRuleContext {
	public NUMBER(): TerminalNode { return this.getToken(AvdlParser.NUMBER, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AvdlParser.RULE_number; }
	@Override
	public enterRule(listener: AvdlListener): void {
		if (listener.enterNumber) listener.enterNumber(this);
	}
	@Override
	public exitRule(listener: AvdlListener): void {
		if (listener.exitNumber) listener.exitNumber(this);
	}
	@Override
	public accept<Result>(visitor: AvdlVisitor<Result>): Result {
		if (visitor.visitNumber) return visitor.visitNumber(this);
		else return visitor.visitChildren(this);
	}
}


export class StringContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(AvdlParser.STRING, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AvdlParser.RULE_string; }
	@Override
	public enterRule(listener: AvdlListener): void {
		if (listener.enterString) listener.enterString(this);
	}
	@Override
	public exitRule(listener: AvdlListener): void {
		if (listener.exitString) listener.exitString(this);
	}
	@Override
	public accept<Result>(visitor: AvdlVisitor<Result>): Result {
		if (visitor.visitString) return visitor.visitString(this);
		else return visitor.visitChildren(this);
	}
}


export class JsonContext extends ParserRuleContext {
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	public object(): ObjectContext | undefined {
		return this.tryGetRuleContext(0, ObjectContext);
	}
	public array(): ArrayContext | undefined {
		return this.tryGetRuleContext(0, ArrayContext);
	}
	public BOOLEAN(): TerminalNode | undefined { return this.tryGetToken(AvdlParser.BOOLEAN, 0); }
	public NULL(): TerminalNode | undefined { return this.tryGetToken(AvdlParser.NULL, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AvdlParser.RULE_json; }
	@Override
	public enterRule(listener: AvdlListener): void {
		if (listener.enterJson) listener.enterJson(this);
	}
	@Override
	public exitRule(listener: AvdlListener): void {
		if (listener.exitJson) listener.exitJson(this);
	}
	@Override
	public accept<Result>(visitor: AvdlVisitor<Result>): Result {
		if (visitor.visitJson) return visitor.visitJson(this);
		else return visitor.visitChildren(this);
	}
}


export class QualifiedNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public namespacedIdentifier(): NamespacedIdentifierContext | undefined {
		return this.tryGetRuleContext(0, NamespacedIdentifierContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AvdlParser.RULE_qualifiedName; }
	@Override
	public enterRule(listener: AvdlListener): void {
		if (listener.enterQualifiedName) listener.enterQualifiedName(this);
	}
	@Override
	public exitRule(listener: AvdlListener): void {
		if (listener.exitQualifiedName) listener.exitQualifiedName(this);
	}
	@Override
	public accept<Result>(visitor: AvdlVisitor<Result>): Result {
		if (visitor.visitQualifiedName) return visitor.visitQualifiedName(this);
		else return visitor.visitChildren(this);
	}
}


export class IdentifierContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(AvdlParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AvdlParser.RULE_identifier; }
	@Override
	public enterRule(listener: AvdlListener): void {
		if (listener.enterIdentifier) listener.enterIdentifier(this);
	}
	@Override
	public exitRule(listener: AvdlListener): void {
		if (listener.exitIdentifier) listener.exitIdentifier(this);
	}
	@Override
	public accept<Result>(visitor: AvdlVisitor<Result>): Result {
		if (visitor.visitIdentifier) return visitor.visitIdentifier(this);
		else return visitor.visitChildren(this);
	}
}


export class NamespacedIdentifierContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AvdlParser.IDENTIFIER);
		} else {
			return this.getToken(AvdlParser.IDENTIFIER, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return AvdlParser.RULE_namespacedIdentifier; }
	@Override
	public enterRule(listener: AvdlListener): void {
		if (listener.enterNamespacedIdentifier) listener.enterNamespacedIdentifier(this);
	}
	@Override
	public exitRule(listener: AvdlListener): void {
		if (listener.exitNamespacedIdentifier) listener.exitNamespacedIdentifier(this);
	}
	@Override
	public accept<Result>(visitor: AvdlVisitor<Result>): Result {
		if (visitor.visitNamespacedIdentifier) return visitor.visitNamespacedIdentifier(this);
		else return visitor.visitChildren(this);
	}
}


