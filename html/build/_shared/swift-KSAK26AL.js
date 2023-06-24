import{c as fe,i as U,j as k,k as K,m as x,p as G}from"/build/_shared/chunk-RMYRWJKG.js";var Re=fe((Ce,V)=>{U();k();K();G();x();function H(t){return t?typeof t=="string"?t:t.source:null}function l(t){return e("(?=",t,")")}function e(...t){return t.map(d=>H(d)).join("")}function a(...t){return"("+t.map(d=>H(d)).join("|")+")"}var R=t=>e(/\b/,t,/\w$/.test(t)?/\b/:/\B/),$=["Protocol","Type"].map(R),y=["init","self"].map(R),Te=["Any","Self"],I=["associatedtype","async","await",/as\?/,/as!/,"as","break","case","catch","class","continue","convenience","default","defer","deinit","didSet","do","dynamic","else","enum","extension","fallthrough",/fileprivate\(set\)/,"fileprivate","final","for","func","get","guard","if","import","indirect","infix",/init\?/,/init!/,"inout",/internal\(set\)/,"internal","in","is","lazy","let","mutating","nonmutating",/open\(set\)/,"open","operator","optional","override","postfix","precedencegroup","prefix",/private\(set\)/,"private","protocol",/public\(set\)/,"public","repeat","required","rethrows","return","set","some","static","struct","subscript","super","switch","throws","throw",/try\?/,/try!/,"try","typealias",/unowned\(safe\)/,/unowned\(unsafe\)/,"unowned","var","weak","where","while","willSet"],W=["false","nil","true"],he=["assignment","associativity","higherThan","left","lowerThan","none","right"],ye=["#colorLiteral","#column","#dsohandle","#else","#elseif","#endif","#error","#file","#fileID","#fileLiteral","#filePath","#function","#if","#imageLiteral","#keyPath","#line","#selector","#sourceLocation","#warn_unqualified_access","#warning"],Y=["abs","all","any","assert","assertionFailure","debugPrint","dump","fatalError","getVaList","isKnownUniquelyReferenced","max","min","numericCast","pointwiseMax","pointwiseMin","precondition","preconditionFailure","print","readLine","repeatElement","sequence","stride","swap","swift_unboxFromSwiftValueWithType","transcode","type","unsafeBitCast","unsafeDowncast","withExtendedLifetime","withUnsafeMutablePointer","withUnsafePointer","withVaList","withoutActuallyEscaping","zip"],z=a(/[/=\-+!*%<>&|^~?]/,/[\u00A1-\u00A7]/,/[\u00A9\u00AB]/,/[\u00AC\u00AE]/,/[\u00B0\u00B1]/,/[\u00B6\u00BB\u00BF\u00D7\u00F7]/,/[\u2016-\u2017]/,/[\u2020-\u2027]/,/[\u2030-\u203E]/,/[\u2041-\u2053]/,/[\u2055-\u205E]/,/[\u2190-\u23FF]/,/[\u2500-\u2775]/,/[\u2794-\u2BFF]/,/[\u2E00-\u2E7F]/,/[\u3001-\u3003]/,/[\u3008-\u3020]/,/[\u3030]/),j=a(z,/[\u0300-\u036F]/,/[\u1DC0-\u1DFF]/,/[\u20D0-\u20FF]/,/[\uFE00-\uFE0F]/,/[\uFE20-\uFE2F]/),w=e(z,j,"*"),q=a(/[a-zA-Z_]/,/[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/,/[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/,/[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/,/[\u1E00-\u1FFF]/,/[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/,/[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/,/[\u2C00-\u2DFF\u2E80-\u2FFF]/,/[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/,/[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/,/[\uFE47-\uFEFE\uFF00-\uFFFD]/),f=a(q,/\d/,/[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/),s=e(q,f,"*"),_=e(/[A-Z]/,f,"*"),Ie=["autoclosure",e(/convention\(/,a("swift","block","c"),/\)/),"discardableResult","dynamicCallable","dynamicMemberLookup","escaping","frozen","GKInspectable","IBAction","IBDesignable","IBInspectable","IBOutlet","IBSegueAction","inlinable","main","nonobjc","NSApplicationMain","NSCopying","NSManaged",e(/objc\(/,s,/\)/),"objc","objcMembers","propertyWrapper","requires_stored_property_inits","testable","UIApplicationMain","unknown","usableFromInline"],we=["iOS","iOSApplicationExtension","macOS","macOSApplicationExtension","macCatalyst","macCatalystApplicationExtension","watchOS","watchOSApplicationExtension","tvOS","tvOSApplicationExtension","swift"];function _e(t){let E={match:/\s+/,relevance:0},d=t.COMMENT("/\\*","\\*/",{contains:["self"]}),o=[t.C_LINE_COMMENT_MODE,d],Z={className:"keyword",begin:e(/\./,l(a(...$,...y))),end:a(...$,...y),excludeBegin:!0},X={match:e(/\./,a(...I)),relevance:0},J=I.filter(n=>typeof n=="string").concat(["_|0"]),Q=I.filter(n=>typeof n!="string").concat(Te).map(R),ee={variants:[{className:"keyword",match:a(...Q,...y)}]},i={$pattern:a(/\b\w+/,/#\w+/),keyword:J.concat(ye),literal:W},u=[Z,X,ee],ne={match:e(/\./,a(...Y)),relevance:0},te={className:"built_in",match:e(/\b/,a(...Y),/(?=\()/)},T=[ne,te],C={match:/->/,relevance:0},ae={className:"operator",relevance:0,variants:[{match:w},{match:`\\.(\\.|${j})+`}]},p=[C,ae],F="([0-9]_*)+",g="([0-9a-fA-F]_*)+",m={className:"number",relevance:0,variants:[{match:`\\b(${F})(\\.(${F}))?([eE][+-]?(${F}))?\\b`},{match:`\\b0x(${g})(\\.(${g}))?([pP][+-]?(${F}))?\\b`},{match:/\b0o([0-7]_*)+\b/},{match:/\b0b([01]_*)+\b/}]},O=(n="")=>({className:"subst",variants:[{match:e(/\\/,n,/[0\\tnr"']/)},{match:e(/\\/,n,/u\{[0-9a-fA-F]{1,8}\}/)}]}),se=(n="")=>({className:"subst",match:e(/\\/,n,/[\t ]*(?:[\r\n]|\r\n)/)}),S=(n="")=>({className:"subst",label:"interpol",begin:e(/\\/,n,/\(/),end:/\)/}),b=(n="")=>({begin:e(n,/"""/),end:e(/"""/,n),contains:[O(n),se(n),S(n)]}),N=(n="")=>({begin:e(n,/"/),end:e(/"/,n),contains:[O(n),S(n)]}),r={className:"string",variants:[b(),b("#"),b("##"),b("###"),N(),N("#"),N("##"),N("###")]},D={match:e(/`/,s,/`/)},ce={className:"variable",match:/\$\d+/},oe={className:"variable",match:`\\$${f}+`},h=[D,ce,oe],ie={match:/(@|#)available/,className:"keyword",starts:{contains:[{begin:/\(/,end:/\)/,keywords:we,contains:[...p,m,r]}]}},ue={className:"keyword",match:e(/@/,a(...Ie))},re={className:"meta",match:e(/@/,s)},A=[ie,ue,re],c={match:l(/\b[A-Z]/),relevance:0,contains:[{className:"type",match:e(/(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/,f,"+")},{className:"type",match:_,relevance:0},{match:/[?!]+/,relevance:0},{match:/\.\.\./,relevance:0},{match:e(/\s+&\s+/,l(_)),relevance:0}]},le={begin:/</,end:/>/,keywords:i,contains:[...o,...u,...A,C,c]};c.contains.push(le);let Ee={match:e(s,/\s*:/),keywords:"_|0",relevance:0},v={begin:/\(/,end:/\)/,relevance:0,keywords:i,contains:["self",Ee,...o,...u,...T,...p,m,r,...h,...A,c]},de={beginKeywords:"func",contains:[{className:"title",match:a(D.match,s,w),endsParent:!0,relevance:0},E]},P={begin:/</,end:/>/,contains:[...o,c]},pe={begin:a(l(e(s,/\s*:/)),l(e(s,/\s+/,s,/\s*:/))),end:/:/,relevance:0,contains:[{className:"keyword",match:/\b_\b/},{className:"params",match:s}]},M={begin:/\(/,end:/\)/,keywords:i,contains:[pe,...o,...u,...p,m,r,...A,c,v],endsParent:!0,illegal:/["']/},me={className:"function",match:l(/\bfunc\b/),contains:[de,P,M,E],illegal:[/\[/,/%/]},Fe={className:"function",match:/\b(subscript|init[?!]?)\s*(?=[<(])/,keywords:{keyword:"subscript init init? init!",$pattern:/\w+[?!]?/},contains:[P,M,E],illegal:/\[|%/},be={beginKeywords:"operator",end:t.MATCH_NOTHING_RE,contains:[{className:"title",match:w,endsParent:!0,relevance:0}]},Ne={beginKeywords:"precedencegroup",end:t.MATCH_NOTHING_RE,contains:[{className:"title",match:_,relevance:0},{begin:/{/,end:/}/,relevance:0,endsParent:!0,keywords:[...he,...W],contains:[c]}]};for(let n of r.variants){let B=n.contains.find(Ae=>Ae.label==="interpol");B.keywords=i;let L=[...u,...T,...p,m,r,...h];B.contains=[...L,{begin:/\(/,end:/\)/,contains:["self",...L]}]}return{name:"Swift",keywords:i,contains:[...o,me,Fe,{className:"class",beginKeywords:"struct protocol class extension enum",end:"\\{",excludeEnd:!0,keywords:i,contains:[t.inherit(t.TITLE_MODE,{begin:/[A-Za-z$_][\u00C0-\u02B80-9A-Za-z$_]*/}),...u]},be,Ne,{beginKeywords:"import",end:/$/,contains:[...o],relevance:0},...u,...T,...p,m,r,...h,...A,c,v]}}V.exports=_e});export default Re();
