import{c as S,i as N,j as o,k as _,m as I,p as M}from"/build/_shared/chunk-RMYRWJKG.js";var A=S((D,O)=>{N();o();_();M();I();function m(n){var e="[a-zA-Z_\\-+\\*\\/<=>&#][a-zA-Z0-9_\\-+*\\/<=>&#!]*",v="\\|[^]*?\\|",b="(-|\\+)?\\d+(\\.\\d+|\\/\\d+)?((d|e|f|l|s|D|E|F|L|S)(\\+|-)?\\d+)?",s={className:"literal",begin:"\\b(t{1}|nil)\\b"},a={className:"number",variants:[{begin:b,relevance:0},{begin:"#(b|B)[0-1]+(/[0-1]+)?"},{begin:"#(o|O)[0-7]+(/[0-7]+)?"},{begin:"#(x|X)[0-9a-fA-F]+(/[0-9a-fA-F]+)?"},{begin:"#(c|C)\\("+b+" +"+b,end:"\\)"}]},i=n.inherit(n.QUOTE_STRING_MODE,{illegal:null}),g=n.COMMENT(";","$",{relevance:0}),l={begin:"\\*",end:"\\*"},t={className:"symbol",begin:"[:&]"+e},r={begin:e,relevance:0},L={begin:v},R={begin:"\\(",end:"\\)",contains:["self",s,i,a,r]},c={contains:[a,i,l,t,R,r],variants:[{begin:"['`]\\(",end:"\\)"},{begin:"\\(quote ",end:"\\)",keywords:{name:"quote"}},{begin:"'"+v}]},T={variants:[{begin:"'"+e},{begin:"#'"+e+"(::"+e+")*"}]},E={begin:"\\(\\s*",end:"\\)"},d={endsWithParent:!0,relevance:0};return E.contains=[{className:"name",variants:[{begin:e,relevance:0},{begin:v}]},d],d.contains=[c,T,E,s,a,i,g,l,t,L,r],{name:"Lisp",illegal:/\S/,contains:[a,n.SHEBANG(),s,i,g,c,T,E,r]}}O.exports=m});export default A();
