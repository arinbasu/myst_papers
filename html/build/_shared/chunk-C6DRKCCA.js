import{c as s,i as e,j as a,k as n,m as r,p as i}from"/build/_shared/chunk-RMYRWJKG.js";var c=s((d,o)=>{e();a();n();i();r();o.exports=t;t.displayName="agda";t.aliases=[];function t(u){(function(l){l.languages.agda={comment:/\{-[\s\S]*?(?:-\}|$)|--.*/,string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,greedy:!0},punctuation:/[(){}⦃⦄.;@]/,"class-name":{pattern:/((?:data|record) +)\S+/,lookbehind:!0},function:{pattern:/(^[ \t]*)(?!\s)[^:\r\n]+(?=:)/m,lookbehind:!0},operator:{pattern:/(^\s*|\s)(?:[=|:∀→λ\\?_]|->)(?=\s)/,lookbehind:!0},keyword:/\b(?:Set|abstract|constructor|data|eta-equality|field|forall|hiding|import|in|inductive|infix|infixl|infixr|instance|let|macro|module|mutual|no-eta-equality|open|overlap|pattern|postulate|primitive|private|public|quote|quoteContext|quoteGoal|quoteTerm|record|renaming|rewrite|syntax|tactic|unquote|unquoteDecl|unquoteDef|using|variable|where|with)\b/}})(u)}});export{c as a};