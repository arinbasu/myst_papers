import{c as p,i as t,j as s,k as a,m as c,p as r}from"/build/_shared/chunk-RMYRWJKG.js";var f=p((m,l)=>{t();s();a();r();c();function b(e){let n={variants:[e.COMMENT("--","$"),e.COMMENT(/\{-/,/-\}/,{contains:["self"]})]},o={className:"type",begin:"\\b[A-Z][\\w']*",relevance:0},i={begin:"\\(",end:"\\)",illegal:'"',contains:[{className:"type",begin:"\\b[A-Z][\\w]*(\\((\\.\\.|,|\\w+)\\))?"},n]},g={begin:/\{/,end:/\}/,contains:i.contains},d={className:"string",begin:"'\\\\?.",end:"'",illegal:"."};return{name:"Elm",keywords:"let in if then else case of where module import exposing type alias as infix infixl infixr port effect command subscription",contains:[{beginKeywords:"port effect module",end:"exposing",keywords:"port effect module where command subscription exposing",contains:[i,n],illegal:"\\W\\.|;"},{begin:"import",end:"$",keywords:"import as exposing",contains:[i,n],illegal:"\\W\\.|;"},{begin:"type",end:"$",keywords:"type alias",contains:[o,i,g,n]},{beginKeywords:"infix infixl infixr",end:"$",contains:[e.C_NUMBER_MODE,n]},{begin:"port",end:"$",keywords:"port",contains:[n]},d,e.QUOTE_STRING_MODE,e.C_NUMBER_MODE,o,e.inherit(e.TITLE_MODE,{begin:"^[_a-z][\\w']*"}),n,{begin:"->|<-"}],illegal:/;/}}l.exports=b});export default f();
