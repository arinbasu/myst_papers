import{c as d,i as a,j as i,k as c,m as s,p as r}from"/build/_shared/chunk-RMYRWJKG.js";var O=d((M,o)=>{a();i();c();r();s();function E(e){return e?typeof e=="string"?e:e.source:null}function u(...e){return e.map(n=>E(n)).join("")}function l(e){let t=/[a-zA-Z_$][a-zA-Z0-9_$]*/,n=/([*]|[a-zA-Z_$][a-zA-Z0-9_$]*)/,_={className:"rest_arg",begin:/[.]{3}/,end:t,relevance:10};return{name:"ActionScript",aliases:["as"],keywords:{keyword:"as break case catch class const continue default delete do dynamic each else extends final finally for function get if implements import in include instanceof interface internal is namespace native new override package private protected public return set static super switch this throw try typeof use var void while with",literal:"true false null undefined"},contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.C_NUMBER_MODE,{className:"class",beginKeywords:"package",end:/\{/,contains:[e.TITLE_MODE]},{className:"class",beginKeywords:"class interface",end:/\{/,excludeEnd:!0,contains:[{beginKeywords:"extends implements"},e.TITLE_MODE]},{className:"meta",beginKeywords:"import include",end:/;/,keywords:{"meta-keyword":"import include"}},{className:"function",beginKeywords:"function",end:/[{;]/,excludeEnd:!0,illegal:/\S/,contains:[e.TITLE_MODE,{className:"params",begin:/\(/,end:/\)/,contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,_]},{begin:u(/:\s*/,n)}]},e.METHOD_GUARD],illegal:/#/}}o.exports=l});export default O();