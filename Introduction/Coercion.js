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

ToString:
 [1,2,3] -> "1,2,3"
 [null,undefined] -> ","
 [,,.] -> ",,,"

By default in Object toString return OBject object.
valueOf return same object.
And on Array  toString retun same array without colon
and valueOf return same array.


ToBoolean:
The abstract oper converts the given type to a boolean value. ToBoolean works a bit
differently when compared to ToString or ToNumber.

It maintains a list of value which when recived as an argument returns False and everything apart from
the list of values returns True. 

Undefined	Return false.
Null	Return false.
Boolean	Return argument.
Number	If argument is +0, -0, or NaN, return false; otherwise return true.
String	If argument is the empty String (its length is zero), return false; otherwise return true.
Symbol	Return true.
Object	Return true.


7.2.14 Abstract Equality Comparison:-

The comparison x == y, where x and y are values, produces true or false. Such a comparison is performed as follows:

If Type(x) is the same as Type(y), then
Return the result of performing Strict Equality Comparison x === y.
If x is null and y is undefined, return true.
If x is undefined and y is null, return true.
If Type(x) is Number and Type(y) is String, return the result of the comparison x == ! ToNumber(y).
If Type(x) is String and Type(y) is Number, return the result of the comparison ! ToNumber(x) == y.
If Type(x) is Boolean, return the result of the comparison ! ToNumber(x) == y.
If Type(y) is Boolean, return the result of the comparison x == ! ToNumber(y).
If Type(x) is either String, Number, or Symbol and Type(y) is Object, return the result of the comparison x == ToPrimitive(y).
If Type(x) is Object and Type(y) is either String, Number, or Symbol, return the result of the comparison ToPrimitive(x) == y.
Return false.

7.2.15 Strict Equality Comparison:-

The comparison x === y, where x and y are values, produces true or false. Such a comparison is performed as follows:

If Type(x) is different from Type(y), return false.
If Type(x) is Number, then
If x is NaN, return false.
If y is NaN, return false.
If x is the same Number value as y, return true.
If x is +0 and y is -0, return true.
If x is -0 and y is +0, return true.
Return false.
Return SameValueNonNumber(x, y).
NOTE
This algorithm differs from the SameValue Algorithm in its treatment of signed zeroes and NaNs.

7.2.12S ameValueNonNumber ( x, y ):-

The internal comparison abstract operation SameValueNonNumber(x, y), where neither x nor y are Number values, produces true or false. Such a comparison is performed as follows:

Assert: Type(x) is not Number.
Assert: Type(x) is the same as Type(y).
If Type(x) is Undefined, return true.
If Type(x) is Null, return true.
If Type(x) is String, then
If x and y are exactly the same sequence of code units (same length and same code units at corresponding indices), return true; otherwise, return false.
If Type(x) is Boolean, then
If x and y are both true or both false, return true; otherwise, return false.
If Type(x) is Symbol, then
If x and y are both the same Symbol value, return true; otherwise, return false.
If x and y are the same Object value, return true. Otherwise, return false.

*/