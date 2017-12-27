grammar Avdl;

/* AVDL */

protocol
   : annotation* 'protocol' identifier
     '{' imports* annotatedDeclaration* '}'
   ;

imports
   : importAvdl
   | importAvsc
   | importAvpr
   ;

importAvdl
   : 'import' 'idl' string ';'
   ;

importAvsc
   : 'import' 'schema' string ';'
   ;

importAvpr
   : 'import' 'protocol' string ';'
   ;

annotatedDeclaration
   : annotation* declaration
   ;

declaration
   : declareEnum | declareRecord | declareError | declareFixed | declareMethod
   ;

declareEnum
   : 'enum' identifier '{' identifier (',' identifier)* '}' ';'?
   ;

declareRecord
   : 'record' identifier '{' declareField* '}'
   ;

declareError
   : 'error' identifier '{' declareField* '}'
   ;

declareFixed
   : 'fixed' identifier '(' identifier ')' ';'
   ;

declareMethod
   : ( typeAny | 'void' ) IDENTIFIER
     '(' ( methodParam ( ',' methodParam )* )? ')'
     ( 'throws' identifier )? 'oneway'? ';'
   ;

methodParam
   : typeAny identifier ( '=' json )?
   ;

declareField
   : annotation* typeAny annotation* identifier ( '=' json )? ';'
   ;

typeAny
   : type
   | typeUnion
   ;

type
   : typePrimitive
   | typeContainer
   | typeComplex
   ;

typeUnion
   : 'union' '{' type ( ',' type )* '}'
   ;

typeContainer
   : typeMap
   | typeArray
   ;

typeComplex
   : qualifiedName
   ;
   
typeMap
   : 'map' '<' annotation* typeAny '>'
   ;

typeArray
   : 'array' '<' annotation* typeAny '>'
   ;

typePrimitive
   : 'int'
   | 'long'
   | 'float'
   | 'double'
   | 'string'
   | NULL
   | 'bytes'
   | 'boolean'
   ;

annotation
   : ANNOTATION ( '(' json ')' )?
   ;


/* JSON */

object
   : '{' ( pair ( ',' pair )* )? '}'
   ;

pair
   : STRING ':' json
   ;

array
   : '[' ( json ( ',' json )* )? ']'
   ;

number
   : NUMBER
   ;

string
   : STRING
   ;

json
   : string
   | number
   | object
   | array
   | BOOLEAN
   | NULL
   ;

qualifiedName
   : identifier
   | namespacedIdentifier
   ;

identifier
   : IDENTIFIER
   ;

namespacedIdentifier
   : IDENTIFIER '.' IDENTIFIER ('.' IDENTIFIER)*
   ;

BOOLEAN
   : 'true'
   | 'false'
   ;

NULL
   : 'null'
   ;

NUMBER
   : '-'? (INT '.' [0-9] + EXP? | INT EXP)
   ;

ANNOTATION
   : '@' JAVA_LETTER ( ( JAVA_LETTER_OR_DIGIT | '-' )* JAVA_LETTER_OR_DIGIT )?
   ;

IDENTIFIER
   : JAVA_LETTER JAVA_LETTER_OR_DIGIT*
   ;

STRING
   : '"' ( ESC | ~ ["\\] )* '"'
   ;

fragment JAVA_LETTER
   : [a-zA-Z$_] // these are the "java letters" below 0x7F
   | // covers all characters above 0x7F which are not a surrogate
     ~[\u0000-\u007F\uD800-\uDBFF]
     // {Character.isJavaIdentifierStart(_input.LA(-1))}?
   | // covers UTF-16 surrogate pairs encodings for U+10000 to U+10FFFF
     [\uD800-\uDBFF] [\uDC00-\uDFFF]
     // {Character.isJavaIdentifierStart(Character.toCodePoint((char)_input.LA(-2), (char)_input.LA(-1)))}?
   ;

fragment JAVA_LETTER_OR_DIGIT
   : [a-zA-Z0-9$_] // these are the "java letters or digits" below 0x7F
   | // covers all characters above 0x7F which are not a surrogate
     ~[\u0000-\u007F\uD800-\uDBFF]
     // {Character.isJavaIdentifierPart(_input.LA(-1))}?
   | // covers UTF-16 surrogate pairs encodings for U+10000 to U+10FFFF
     [\uD800-\uDBFF] [\uDC00-\uDFFF]
     // {Character.isJavaIdentifierPart(Character.toCodePoint((char)_input.LA(-2), (char)_input.LA(-1)))}?
   ;

fragment ESC
   : '\\' (["\\/bfnrt] | UNICODE)
   ;

fragment UNICODE
   : 'u' HEX HEX HEX HEX
   ;

fragment HEX
   : [0-9a-fA-F]
   ;

fragment EXP
   : [Ee] [+\-]? INT
   ;

fragment INT
   : '0' | [1-9] [0-9]*
   ;

DOCUMENTATION
   : '/**' .*? '*/' -> skip
   ;

WS
   : [ \t\r\n\u000C\u000B]+ -> skip
   ;

COMMENT
   : '/*' .*? '*/' -> skip
   ;

LINE_COMMENT
   : '//' ~[\r\n]* -> skip
   ;
