import{c,i as e,j as a,k as n,m as o,p as u}from"/build/_shared/chunk-RMYRWJKG.js";var d=c((b,i)=>{e();a();n();u();o();i.exports=t;t.displayName="bbcode";t.aliases=["shortcode"];function t(s){s.languages.bbcode={tag:{pattern:/\[\/?[^\s=\]]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'"\]=]+))?(?:\s+[^\s=\]]+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'"\]=]+))*\s*\]/,inside:{tag:{pattern:/^\[\/?[^\s=\]]+/,inside:{punctuation:/^\[\/?/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'"\]=]+)/,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\]/,"attr-name":/[^\s=\]]+/}}},s.languages.shortcode=s.languages.bbcode}});export{d as a};