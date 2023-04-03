/*
Coercion stands for type inter conversion.Coercion.
Implicit & Explicit.

C++, Java type exist for varibles.
Javascript types exist for values.

ECMAScript 
Abstract Operation.
 Type Conversion:

False statement: Everything in Javascript is an object.
Apart from primitive type everything is an object.
Primitive means atomic means it is not made up not more than one thing.

Abstract operation is not a part of language, it is to aid or help to language.

Abstract operation is polymorphic.

Abstract Operation:
  1. ToPrimitive:
     *The ToPrimitive abstract operation, takes an input argument and an optional preferred
     Type argument.
     *This operations converts the input into a non object type value.
     *If an object/argument is capable of getting converted into more than one primitive type the 
     the function usage preffered type argument to resolve.
 `   *This is also an abstract operation, we cannot invoke it
    The preffered type is string and number
    1-"1" -> 0
    Link-> "https://262.ecma-international.org/10.0/#sec-type-conversion"

  2.OrdinaryToPrimitive ( O, hint )
    When the abstract operation OrdinaryToPrimitive is called with arguments O and hint, the following steps are taken:
    *Assert: Type(O) is Object.
    *Assert: Type(hint) is String and its value is either "string" or "number".
    *If hint is "string", then
    Let methodNames be « "toString", "valueOf" ».
    *Else,
    Let methodNames be « "valueOf", "toString" ».
    *For each name in methodNames in List order, do
    Let method be ? Get(O, name).
    *If IsCallable(method) is true, then
    Let result be ? Call(method, O).
    *If Type(result) is not Object, return result.
    Throw a TypeError exception.


undefined + 10 => NaN
undefined + "10" => "undefined10"
undefined-12 => NaN
"12"-5 => 7
12-"5" => 7
"12"+5 => '125'
12+"5" => '125' 
Nan-Nan => NaN
null - 9 => -9   //null converts to zero
true-9 => -8
ToNumber:
"" -> 0
"0" -> 0
"-0" -> -0
"." => NaN
"12 + 3" - 4 -> NaN
true - "false" -> NaN  //"false" cannot be converted to 0
[null] -> 0
[undefined] -> 0
["0"] -> 0
*/