/*
 * Implement String.whitespace? which should return true if given object consists of exclusively zero or more whitespace characters, false otherwise
 */
"use strict";
String.prototype.whitespace=function(){
    return this.replace(/\n|\r|\t|\s/g, "").length == 0;
}
