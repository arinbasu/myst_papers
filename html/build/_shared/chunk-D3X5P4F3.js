import{a as g}from"/build/_shared/chunk-BQXD5VCA.js";import{c as i,i as s,j as r,k as l,m as o,p as d}from"/build/_shared/chunk-RMYRWJKG.js";var h=i((p,u)=>{s();r();l();d();o();var c=g();u.exports=n;n.displayName="handlebars";n.aliases=["hbs"];function n(t){t.register(c),function(a){a.languages.handlebars={comment:/\{\{![\s\S]*?\}\}/,delimiter:{pattern:/^\{\{\{?|\}\}\}?$/,alias:"punctuation"},string:/(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][+-]?\d+)?/,boolean:/\b(?:false|true)\b/,block:{pattern:/^(\s*(?:~\s*)?)[#\/]\S+?(?=\s*(?:~\s*)?$|\s)/,lookbehind:!0,alias:"keyword"},brackets:{pattern:/\[[^\]]+\]/,inside:{punctuation:/\[|\]/,variable:/[\s\S]+/}},punctuation:/[!"#%&':()*+,.\/;<=>@\[\\\]^`{|}~]/,variable:/[^!"#%&'()*+,\/;<=>@\[\\\]^`{|}~\s]+/},a.hooks.add("before-tokenize",function(e){var b=/\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g;a.languages["markup-templating"].buildPlaceholders(e,"handlebars",b)}),a.hooks.add("after-tokenize",function(e){a.languages["markup-templating"].tokenizePlaceholders(e,"handlebars")}),a.languages.hbs=a.languages.handlebars}(t)}});export{h as a};