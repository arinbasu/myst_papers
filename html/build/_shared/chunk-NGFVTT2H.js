import{a as bn}from"/build/_shared/chunk-I2DA444B.js";import{a as wn}from"/build/_shared/chunk-BK5P77IK.js";import{a as xn}from"/build/_shared/chunk-22HF5RJC.js";import{a as yn}from"/build/_shared/chunk-BGC2BIFP.js";import{c as C,h as global,i as c,j as f,k as d,m as p,p as g}from"/build/_shared/chunk-RMYRWJKG.js";var Be=C((xl,He)=>{c();f();d();g();p();He.exports=Sn;var Cn=Object.prototype.hasOwnProperty;function Sn(){for(var e={},r=0;r<arguments.length;r++){var n=arguments[r];for(var i in n)Cn.call(n,i)&&(e[i]=n[i])}return e}});var qe=C((Al,Fe)=>{"use strict";c();f();d();g();p();Fe.exports=We;var Se=We.prototype;Se.space=null;Se.normal={};Se.property={};function We(e,r,n){this.property=e,this.normal=r,n&&(this.space=n)}});var Ke=C((Ml,Ge)=>{"use strict";c();f();d();g();p();var Ve=Be(),qn=qe();Ge.exports=An;function An(e){for(var r=e.length,n=[],i=[],a=-1,h,S;++a<r;)h=e[a],n.push(h.property),i.push(h.normal),S=h.space;return new qn(Ve.apply(null,n),Ve.apply(null,i),S)}});var he=C((Ul,$e)=>{"use strict";c();f();d();g();p();$e.exports=Pn;function Pn(e){return e.toLowerCase()}});var Ae=C((Fl,Je)=>{"use strict";c();f();d();g();p();Je.exports=Xe;var B=Xe.prototype;B.space=null;B.attribute=null;B.property=null;B.boolean=!1;B.booleanish=!1;B.overloadedBoolean=!1;B.number=!1;B.commaSeparated=!1;B.spaceSeparated=!1;B.commaOrSpaceSeparated=!1;B.mustUseProperty=!1;B.defined=!1;function Xe(e,r){this.property=e,this.attribute=r}});var me=C(J=>{"use strict";c();f();d();g();p();var En=0;J.boolean=ee();J.booleanish=ee();J.overloadedBoolean=ee();J.number=ee();J.spaceSeparated=ee();J.commaSeparated=ee();J.commaOrSpaceSeparated=ee();function ee(){return Math.pow(2,++En)}});var Ee=C((rt,er)=>{"use strict";c();f();d();g();p();var Ze=Ae(),Ye=me();er.exports=Pe;Pe.prototype=new Ze;Pe.prototype.defined=!0;var _e=["boolean","booleanish","overloadedBoolean","number","commaSeparated","spaceSeparated","commaOrSpaceSeparated"],Ln=_e.length;function Pe(e,r,n,i){var a=-1,h;for(Qe(this,"space",i),Ze.call(this,e,r);++a<Ln;)h=_e[a],Qe(this,h,(n&Ye[h])===Ye[h])}function Qe(e,r,n){n&&(e[r]=n)}});var le=C((ot,nr)=>{"use strict";c();f();d();g();p();var rr=he(),kn=qe(),Tn=Ee();nr.exports=Mn;function Mn(e){var r=e.space,n=e.mustUseProperty||[],i=e.attributes||{},a=e.properties,h=e.transform,S={},P={},x,T;for(x in a)T=new Tn(x,h(i,x),a[x],r),n.indexOf(x)!==-1&&(T.mustUseProperty=!0),S[x]=T,P[rr(x)]=x,P[rr(T.attribute)]=x;return new kn(S,P,r)}});var lr=C((pt,ar)=>{"use strict";c();f();d();g();p();var On=le();ar.exports=On({space:"xlink",transform:In,properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}});function In(e,r){return"xlink:"+r.slice(5).toLowerCase()}});var ir=C((xt,tr)=>{"use strict";c();f();d();g();p();var Dn=le();tr.exports=Dn({space:"xml",transform:Nn,properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function Nn(e,r){return"xml:"+r.slice(3).toLowerCase()}});var ur=C((At,or)=>{"use strict";c();f();d();g();p();or.exports=Rn;function Rn(e,r){return r in e?e[r]:r}});var Le=C((Mt,sr)=>{"use strict";c();f();d();g();p();var Un=ur();sr.exports=jn;function jn(e,r){return Un(e,r.toLowerCase())}});var fr=C((Ut,cr)=>{"use strict";c();f();d();g();p();var zn=le(),Hn=Le();cr.exports=zn({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:Hn,properties:{xmlns:null,xmlnsXLink:null}})});var pr=C((Ft,dr)=>{"use strict";c();f();d();g();p();var ke=me(),Bn=le(),U=ke.booleanish,W=ke.number,re=ke.spaceSeparated;dr.exports=Bn({transform:Wn,properties:{ariaActiveDescendant:null,ariaAtomic:U,ariaAutoComplete:null,ariaBusy:U,ariaChecked:U,ariaColCount:W,ariaColIndex:W,ariaColSpan:W,ariaControls:re,ariaCurrent:null,ariaDescribedBy:re,ariaDetails:null,ariaDisabled:U,ariaDropEffect:re,ariaErrorMessage:null,ariaExpanded:U,ariaFlowTo:re,ariaGrabbed:U,ariaHasPopup:null,ariaHidden:U,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:re,ariaLevel:W,ariaLive:null,ariaModal:U,ariaMultiLine:U,ariaMultiSelectable:U,ariaOrientation:null,ariaOwns:re,ariaPlaceholder:null,ariaPosInSet:W,ariaPressed:U,ariaReadOnly:U,ariaRelevant:null,ariaRequired:U,ariaRoleDescription:re,ariaRowCount:W,ariaRowIndex:W,ariaRowSpan:W,ariaSelected:U,ariaSetSize:W,ariaSort:null,ariaValueMax:W,ariaValueMin:W,ariaValueNow:W,ariaValueText:null,role:null}});function Wn(e,r){return r==="role"?r:"aria-"+r.slice(4).toLowerCase()}});var vr=C((Jt,gr)=>{"use strict";c();f();d();g();p();var te=me(),Fn=le(),Vn=Le(),y=te.boolean,Gn=te.overloadedBoolean,fe=te.booleanish,L=te.number,R=te.spaceSeparated,ye=te.commaSeparated;gr.exports=Fn({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:Vn,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:ye,acceptCharset:R,accessKey:R,action:null,allow:null,allowFullScreen:y,allowPaymentRequest:y,allowUserMedia:y,alt:null,as:null,async:y,autoCapitalize:null,autoComplete:R,autoFocus:y,autoPlay:y,capture:y,charSet:null,checked:y,cite:null,className:R,cols:L,colSpan:null,content:null,contentEditable:fe,controls:y,controlsList:R,coords:L|ye,crossOrigin:null,data:null,dateTime:null,decoding:null,default:y,defer:y,dir:null,dirName:null,disabled:y,download:Gn,draggable:fe,encType:null,enterKeyHint:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:y,formTarget:null,headers:R,height:L,hidden:y,high:L,href:null,hrefLang:null,htmlFor:R,httpEquiv:R,id:null,imageSizes:null,imageSrcSet:ye,inputMode:null,integrity:null,is:null,isMap:y,itemId:null,itemProp:R,itemRef:R,itemScope:y,itemType:R,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:y,low:L,manifest:null,max:null,maxLength:L,media:null,method:null,min:null,minLength:L,multiple:y,muted:y,name:null,nonce:null,noModule:y,noValidate:y,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforePrint:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextMenu:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:y,optimum:L,pattern:null,ping:R,placeholder:null,playsInline:y,poster:null,preload:null,readOnly:y,referrerPolicy:null,rel:R,required:y,reversed:y,rows:L,rowSpan:L,sandbox:R,scope:null,scoped:y,seamless:y,selected:y,shape:null,size:L,sizes:null,slot:null,span:L,spellCheck:fe,src:null,srcDoc:null,srcLang:null,srcSet:ye,start:L,step:null,style:null,tabIndex:L,target:null,title:null,translate:null,type:null,typeMustMatch:y,useMap:null,value:fe,width:L,wrap:null,align:null,aLink:null,archive:R,axis:null,background:null,bgColor:null,border:L,borderColor:null,bottomMargin:L,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:y,declare:y,event:null,face:null,frame:null,frameBorder:null,hSpace:L,leftMargin:L,link:null,longDesc:null,lowSrc:null,marginHeight:L,marginWidth:L,noResize:y,noHref:y,noShade:y,noWrap:y,object:null,profile:null,prompt:null,rev:null,rightMargin:L,rules:null,scheme:null,scrolling:fe,standby:null,summary:null,text:null,topMargin:L,valueType:null,version:null,vAlign:null,vLink:null,vSpace:L,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:y,disableRemotePlayback:y,prefix:null,property:null,results:L,security:null,unselectable:null}})});var mr=C((ri,hr)=>{"use strict";c();f();d();g();p();var Kn=Ke(),$n=lr(),Xn=ir(),Jn=fr(),Yn=pr(),Qn=vr();hr.exports=Kn([Xn,$n,Jn,Yn,Qn])});var wr=C((oi,xr)=>{"use strict";c();f();d();g();p();var Zn=he(),_n=Ee(),ea=Ae(),Te="data";xr.exports=aa;var ra=/^data[-\w.:]+$/i,yr=/-[a-z]/g,na=/[A-Z]/g;function aa(e,r){var n=Zn(r),i=r,a=ea;return n in e.normal?e.property[e.normal[n]]:(n.length>4&&n.slice(0,4)===Te&&ra.test(r)&&(r.charAt(4)==="-"?i=la(r):r=ta(r),a=_n),new a(i,r))}function la(e){var r=e.slice(5).replace(yr,oa);return Te+r.charAt(0).toUpperCase()+r.slice(1)}function ta(e){var r=e.slice(4);return yr.test(r)?e:(r=r.replace(na,ia),r.charAt(0)!=="-"&&(r="-"+r),Te+r)}function ia(e){return"-"+e.toLowerCase()}function oa(e){return e.charAt(1).toUpperCase()}});var Sr=C((pi,Cr)=>{"use strict";c();f();d();g();p();Cr.exports=ua;var br=/[#.]/g;function ua(e,r){for(var n=e||"",i=r||"div",a={},h=0,S,P,x;h<n.length;)br.lastIndex=h,x=br.exec(n),S=n.slice(h,x?x.index:n.length),S&&(P?P==="#"?a.id=S:a.className?a.className.push(S):a.className=[S]:i=S,h+=S.length),x&&(P=x[0],h++);return{type:"element",tagName:i,properties:a,children:[]}}});var Ar=C(Me=>{"use strict";c();f();d();g();p();Me.parse=fa;Me.stringify=da;var qr="",sa=" ",ca=/[ \t\n\r\f]+/g;function fa(e){var r=String(e||qr).trim();return r===qr?[]:r.split(ca)}function da(e){return e.join(sa).trim()}});var Er=C(Ie=>{"use strict";c();f();d();g();p();Ie.parse=pa;Ie.stringify=ga;var Oe=",",Pr=" ",de="";function pa(e){for(var r=[],n=String(e||de),i=n.indexOf(Oe),a=0,h=!1,S;!h;)i===-1&&(i=n.length,h=!0),S=n.slice(a,i).trim(),(S||!h)&&r.push(S),a=i+1,i=n.indexOf(Oe,a);return r}function ga(e,r){var n=r||{},i=n.padLeft===!1?de:Pr,a=n.padRight?Pr:de;return e[e.length-1]===de&&(e=e.concat(de)),e.join(a+Oe+i).trim()}});var Dr=C((Mi,Ir)=>{"use strict";c();f();d();g();p();var va=wr(),Lr=he(),ha=Sr(),kr=Ar().parse,Tr=Er().parse;Ir.exports=ya;var ma={}.hasOwnProperty;function ya(e,r,n){var i=n?Sa(n):null;return a;function a(S,P){var x=ha(S,r),T=Array.prototype.slice.call(arguments,2),N=x.tagName.toLowerCase(),M;if(x.tagName=i&&ma.call(i,N)?i[N]:N,P&&xa(P,x)&&(T.unshift(P),P=null),P)for(M in P)h(x.properties,M,P[M]);return Or(x.children,T),x.tagName==="template"&&(x.content={type:"root",children:x.children},x.children=[]),x}function h(S,P,x){var T,N,M;x==null||x!==x||(T=va(e,P),N=T.property,M=x,typeof M=="string"&&(T.spaceSeparated?M=kr(M):T.commaSeparated?M=Tr(M):T.commaOrSpaceSeparated&&(M=kr(Tr(M).join(" ")))),N==="style"&&typeof x!="string"&&(M=Ca(M)),N==="className"&&S.className&&(M=S.className.concat(M)),S[N]=ba(T,N,M))}}function xa(e,r){return typeof e=="string"||"length"in e||wa(r.tagName,e)}function wa(e,r){var n=r.type;return e==="input"||!n||typeof n!="string"?!1:typeof r.children=="object"&&"length"in r.children?!0:(n=n.toLowerCase(),e==="button"?n!=="menu"&&n!=="submit"&&n!=="reset"&&n!=="button":"value"in r)}function Or(e,r){var n,i;if(typeof r=="string"||typeof r=="number"){e.push({type:"text",value:String(r)});return}if(typeof r=="object"&&"length"in r){for(n=-1,i=r.length;++n<i;)Or(e,r[n]);return}if(typeof r!="object"||!("type"in r))throw new Error("Expected node, nodes, or string, got `"+r+"`");e.push(r)}function ba(e,r,n){var i,a,h;if(typeof n!="object"||!("length"in n))return Mr(e,r,n);for(a=n.length,i=-1,h=[];++i<a;)h[i]=Mr(e,r,n[i]);return h}function Mr(e,r,n){var i=n;return e.number||e.positiveNumber?!isNaN(i)&&i!==""&&(i=Number(i)):(e.boolean||e.overloadedBoolean)&&typeof i=="string"&&(i===""||Lr(n)===Lr(r))&&(i=!0),i}function Ca(e){var r=[],n;for(n in e)r.push([n,e[n]].join(": "));return r.join("; ")}function Sa(e){for(var r=e.length,n=-1,i={},a;++n<r;)a=e[n],i[a.toLowerCase()]=a;return i}});var Ur=C((Ui,Rr)=>{"use strict";c();f();d();g();p();var qa=mr(),Aa=Dr(),Nr=Aa(qa,"div");Nr.displayName="html";Rr.exports=Nr});var zr=C((Fi,jr)=>{"use strict";c();f();d();g();p();jr.exports=Ur()});var Hr=C((Ji,Pa)=>{Pa.exports={AElig:"\xC6",AMP:"&",Aacute:"\xC1",Acirc:"\xC2",Agrave:"\xC0",Aring:"\xC5",Atilde:"\xC3",Auml:"\xC4",COPY:"\xA9",Ccedil:"\xC7",ETH:"\xD0",Eacute:"\xC9",Ecirc:"\xCA",Egrave:"\xC8",Euml:"\xCB",GT:">",Iacute:"\xCD",Icirc:"\xCE",Igrave:"\xCC",Iuml:"\xCF",LT:"<",Ntilde:"\xD1",Oacute:"\xD3",Ocirc:"\xD4",Ograve:"\xD2",Oslash:"\xD8",Otilde:"\xD5",Ouml:"\xD6",QUOT:'"',REG:"\xAE",THORN:"\xDE",Uacute:"\xDA",Ucirc:"\xDB",Ugrave:"\xD9",Uuml:"\xDC",Yacute:"\xDD",aacute:"\xE1",acirc:"\xE2",acute:"\xB4",aelig:"\xE6",agrave:"\xE0",amp:"&",aring:"\xE5",atilde:"\xE3",auml:"\xE4",brvbar:"\xA6",ccedil:"\xE7",cedil:"\xB8",cent:"\xA2",copy:"\xA9",curren:"\xA4",deg:"\xB0",divide:"\xF7",eacute:"\xE9",ecirc:"\xEA",egrave:"\xE8",eth:"\xF0",euml:"\xEB",frac12:"\xBD",frac14:"\xBC",frac34:"\xBE",gt:">",iacute:"\xED",icirc:"\xEE",iexcl:"\xA1",igrave:"\xEC",iquest:"\xBF",iuml:"\xEF",laquo:"\xAB",lt:"<",macr:"\xAF",micro:"\xB5",middot:"\xB7",nbsp:"\xA0",not:"\xAC",ntilde:"\xF1",oacute:"\xF3",ocirc:"\xF4",ograve:"\xF2",ordf:"\xAA",ordm:"\xBA",oslash:"\xF8",otilde:"\xF5",ouml:"\xF6",para:"\xB6",plusmn:"\xB1",pound:"\xA3",quot:'"',raquo:"\xBB",reg:"\xAE",sect:"\xA7",shy:"\xAD",sup1:"\xB9",sup2:"\xB2",sup3:"\xB3",szlig:"\xDF",thorn:"\xFE",times:"\xD7",uacute:"\xFA",ucirc:"\xFB",ugrave:"\xF9",uml:"\xA8",uuml:"\xFC",yacute:"\xFD",yen:"\xA5",yuml:"\xFF"}});var Br=C((Yi,Ea)=>{Ea.exports={"0":"\uFFFD","128":"\u20AC","130":"\u201A","131":"\u0192","132":"\u201E","133":"\u2026","134":"\u2020","135":"\u2021","136":"\u02C6","137":"\u2030","138":"\u0160","139":"\u2039","140":"\u0152","142":"\u017D","145":"\u2018","146":"\u2019","147":"\u201C","148":"\u201D","149":"\u2022","150":"\u2013","151":"\u2014","152":"\u02DC","153":"\u2122","154":"\u0161","155":"\u203A","156":"\u0153","158":"\u017E","159":"\u0178"}});var De=C((Qi,Wr)=>{"use strict";c();f();d();g();p();Wr.exports=La;function La(e){var r=typeof e=="string"?e.charCodeAt(0):e;return r>=48&&r<=57}});var Vr=C((ao,Fr)=>{"use strict";c();f();d();g();p();Fr.exports=ka;function ka(e){var r=typeof e=="string"?e.charCodeAt(0):e;return r>=97&&r<=102||r>=65&&r<=70||r>=48&&r<=57}});var Kr=C((so,Gr)=>{"use strict";c();f();d();g();p();Gr.exports=Ta;function Ta(e){var r=typeof e=="string"?e.charCodeAt(0):e;return r>=97&&r<=122||r>=65&&r<=90}});var Xr=C((ho,$r)=>{"use strict";c();f();d();g();p();var Ma=Kr(),Oa=De();$r.exports=Ia;function Ia(e){return Ma(e)||Oa(e)}});var Yr=C((Co,Jr)=>{"use strict";c();f();d();g();p();var xe,Da=59;Jr.exports=Na;function Na(e){var r="&"+e+";",n;return xe=xe||document.createElement("i"),xe.innerHTML=r,n=xe.textContent,n.charCodeAt(n.length-1)===Da&&e!=="semi"||n===r?!1:n}});var fn=C((Lo,cn)=>{"use strict";c();f();d();g();p();var Qr=Hr(),Zr=Br(),Ra=De(),Ua=Vr(),nn=Xr(),ja=Yr();cn.exports=Qa;var za={}.hasOwnProperty,ie=String.fromCharCode,Ha=Function.prototype,_r={warning:null,reference:null,text:null,warningContext:null,referenceContext:null,textContext:null,position:{},additional:null,attribute:!1,nonTerminated:!0},Ba=9,en=10,Wa=12,Fa=32,rn=38,Va=59,Ga=60,Ka=61,$a=35,Xa=88,Ja=120,Ya=65533,oe="named",Re="hexadecimal",Ue="decimal",je={};je[Re]=16;je[Ue]=10;var we={};we[oe]=nn;we[Ue]=Ra;we[Re]=Ua;var an=1,ln=2,tn=3,on=4,un=5,Ne=6,sn=7,Y={};Y[an]="Named character references must be terminated by a semicolon";Y[ln]="Numeric character references must be terminated by a semicolon";Y[tn]="Named character references cannot be empty";Y[on]="Numeric character references cannot be empty";Y[un]="Named character references must be known";Y[Ne]="Numeric character references cannot be disallowed";Y[sn]="Numeric character references cannot be outside the permissible Unicode range";function Qa(e,r){var n={},i,a;r||(r={});for(a in _r)i=r[a],n[a]=i??_r[a];return(n.position.indent||n.position.start)&&(n.indent=n.position.indent||[],n.position=n.position.start),Za(e,n)}function Za(e,r){var n=r.additional,i=r.nonTerminated,a=r.text,h=r.reference,S=r.warning,P=r.textContext,x=r.referenceContext,T=r.warningContext,N=r.position,M=r.indent||[],G=e.length,z=0,ue=-1,t=N.column||1,l=N.line||1,o="",u=[],s,m,b,v,E,w,q,j,Q,se,K,X,k,O,$,V,D,H,A;for(typeof n=="string"&&(n=n.charCodeAt(0)),V=F(),j=S?ne:Ha,z--,G++;++z<G;)if(E===en&&(t=M[ue]||1),E=e.charCodeAt(z),E===rn){if(q=e.charCodeAt(z+1),q===Ba||q===en||q===Wa||q===Fa||q===rn||q===Ga||q!==q||n&&q===n){o+=ie(E),t++;continue}for(k=z+1,X=k,A=k,q===$a?(A=++X,q=e.charCodeAt(A),q===Xa||q===Ja?(O=Re,A=++X):O=Ue):O=oe,s="",K="",v="",$=we[O],A--;++A<G&&(q=e.charCodeAt(A),!!$(q));)v+=ie(q),O===oe&&za.call(Qr,v)&&(s=v,K=Qr[v]);b=e.charCodeAt(A)===Va,b&&(A++,m=O===oe?ja(v):!1,m&&(s=v,K=m)),H=1+A-k,!b&&!i||(v?O===oe?(b&&!K?j(un,1):(s!==v&&(A=X+s.length,H=1+A-X,b=!1),b||(Q=s?an:tn,r.attribute?(q=e.charCodeAt(A),q===Ka?(j(Q,H),K=null):nn(q)?K=null:j(Q,H)):j(Q,H))),w=K):(b||j(ln,H),w=parseInt(v,je[O]),_a(w)?(j(sn,H),w=ie(Ya)):w in Zr?(j(Ne,H),w=Zr[w]):(se="",el(w)&&j(Ne,H),w>65535&&(w-=65536,se+=ie(w>>>10|55296),w=56320|w&1023),w=se+ie(w))):O!==oe&&j(on,H)),w?(Z(),V=F(),z=A-1,t+=A-k+1,u.push(w),D=F(),D.offset++,h&&h.call(x,w,{start:V,end:D},e.slice(k-1,A)),V=D):(v=e.slice(k-1,A),o+=v,t+=v.length,z=A-1)}else E===10&&(l++,ue++,t=0),E===E?(o+=ie(E),t++):Z();return u.join("");function F(){return{line:l,column:t,offset:z+(N.offset||0)}}function ne(ae,ce){var _=F();_.column+=ce,_.offset+=ce,S.call(T,Y[ae],_,ae)}function Z(){o&&(u.push(o),a&&a.call(P,o,{start:V,end:F()}),o="")}}function _a(e){return e>=55296&&e<=57343||e>1114111}function el(e){return e>=1&&e<=8||e===11||e>=13&&e<=31||e>=127&&e<=159||e>=64976&&e<=65007||(e&65535)===65535||(e&65535)===65534}});var pn=C((Do,be)=>{c();f();d();g();p();var rl=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};var dn=function(e){var r=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,n=0,i={},a={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function t(l){return l instanceof h?new h(l.type,t(l.content),l.alias):Array.isArray(l)?l.map(t):l.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(t){return Object.prototype.toString.call(t).slice(8,-1)},objId:function(t){return t.__id||Object.defineProperty(t,"__id",{value:++n}),t.__id},clone:function t(l,o){o=o||{};var u,s;switch(a.util.type(l)){case"Object":if(s=a.util.objId(l),o[s])return o[s];u={},o[s]=u;for(var m in l)l.hasOwnProperty(m)&&(u[m]=t(l[m],o));return u;case"Array":return s=a.util.objId(l),o[s]?o[s]:(u=[],o[s]=u,l.forEach(function(b,v){u[v]=t(b,o)}),u);default:return l}},getLanguage:function(t){for(;t;){var l=r.exec(t.className);if(l)return l[1].toLowerCase();t=t.parentElement}return"none"},setLanguage:function(t,l){t.className=t.className.replace(RegExp(r,"gi"),""),t.classList.add("language-"+l)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(u){var t=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(u.stack)||[])[1];if(t){var l=document.getElementsByTagName("script");for(var o in l)if(l[o].src==t)return l[o]}return null}},isActive:function(t,l,o){for(var u="no-"+l;t;){var s=t.classList;if(s.contains(l))return!0;if(s.contains(u))return!1;t=t.parentElement}return!!o}},languages:{plain:i,plaintext:i,text:i,txt:i,extend:function(t,l){var o=a.util.clone(a.languages[t]);for(var u in l)o[u]=l[u];return o},insertBefore:function(t,l,o,u){u=u||a.languages;var s=u[t],m={};for(var b in s)if(s.hasOwnProperty(b)){if(b==l)for(var v in o)o.hasOwnProperty(v)&&(m[v]=o[v]);o.hasOwnProperty(b)||(m[b]=s[b])}var E=u[t];return u[t]=m,a.languages.DFS(a.languages,function(w,q){q===E&&w!=t&&(this[w]=m)}),m},DFS:function t(l,o,u,s){s=s||{};var m=a.util.objId;for(var b in l)if(l.hasOwnProperty(b)){o.call(l,b,l[b],u||b);var v=l[b],E=a.util.type(v);E==="Object"&&!s[m(v)]?(s[m(v)]=!0,t(v,o,null,s)):E==="Array"&&!s[m(v)]&&(s[m(v)]=!0,t(v,o,b,s))}}},plugins:{},highlightAll:function(t,l){a.highlightAllUnder(document,t,l)},highlightAllUnder:function(t,l,o){var u={callback:o,container:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",u),u.elements=Array.prototype.slice.apply(u.container.querySelectorAll(u.selector)),a.hooks.run("before-all-elements-highlight",u);for(var s=0,m;m=u.elements[s++];)a.highlightElement(m,l===!0,u.callback)},highlightElement:function(t,l,o){var u=a.util.getLanguage(t),s=a.languages[u];a.util.setLanguage(t,u);var m=t.parentElement;m&&m.nodeName.toLowerCase()==="pre"&&a.util.setLanguage(m,u);var b=t.textContent,v={element:t,language:u,grammar:s,code:b};function E(q){v.highlightedCode=q,a.hooks.run("before-insert",v),v.element.innerHTML=v.highlightedCode,a.hooks.run("after-highlight",v),a.hooks.run("complete",v),o&&o.call(v.element)}if(a.hooks.run("before-sanity-check",v),m=v.element.parentElement,m&&m.nodeName.toLowerCase()==="pre"&&!m.hasAttribute("tabindex")&&m.setAttribute("tabindex","0"),!v.code){a.hooks.run("complete",v),o&&o.call(v.element);return}if(a.hooks.run("before-highlight",v),!v.grammar){E(a.util.encode(v.code));return}if(l&&e.Worker){var w=new Worker(a.filename);w.onmessage=function(q){E(q.data)},w.postMessage(JSON.stringify({language:v.language,code:v.code,immediateClose:!0}))}else E(a.highlight(v.code,v.grammar,v.language))},highlight:function(t,l,o){var u={code:t,grammar:l,language:o};if(a.hooks.run("before-tokenize",u),!u.grammar)throw new Error('The language "'+u.language+'" has no grammar.');return u.tokens=a.tokenize(u.code,u.grammar),a.hooks.run("after-tokenize",u),h.stringify(a.util.encode(u.tokens),u.language)},tokenize:function(t,l){var o=l.rest;if(o){for(var u in o)l[u]=o[u];delete l.rest}var s=new x;return T(s,s.head,t),P(t,s,l,s.head,0),M(s)},hooks:{all:{},add:function(t,l){var o=a.hooks.all;o[t]=o[t]||[],o[t].push(l)},run:function(t,l){var o=a.hooks.all[t];if(!(!o||!o.length))for(var u=0,s;s=o[u++];)s(l)}},Token:h};e.Prism=a;function h(t,l,o,u){this.type=t,this.content=l,this.alias=o,this.length=(u||"").length|0}h.stringify=function t(l,o){if(typeof l=="string")return l;if(Array.isArray(l)){var u="";return l.forEach(function(E){u+=t(E,o)}),u}var s={type:l.type,content:t(l.content,o),tag:"span",classes:["token",l.type],attributes:{},language:o},m=l.alias;m&&(Array.isArray(m)?Array.prototype.push.apply(s.classes,m):s.classes.push(m)),a.hooks.run("wrap",s);var b="";for(var v in s.attributes)b+=" "+v+'="'+(s.attributes[v]||"").replace(/"/g,"&quot;")+'"';return"<"+s.tag+' class="'+s.classes.join(" ")+'"'+b+">"+s.content+"</"+s.tag+">"};function S(t,l,o,u){t.lastIndex=l;var s=t.exec(o);if(s&&u&&s[1]){var m=s[1].length;s.index+=m,s[0]=s[0].slice(m)}return s}function P(t,l,o,u,s,m){for(var b in o)if(!(!o.hasOwnProperty(b)||!o[b])){var v=o[b];v=Array.isArray(v)?v:[v];for(var E=0;E<v.length;++E){if(m&&m.cause==b+","+E)return;var w=v[E],q=w.inside,j=!!w.lookbehind,Q=!!w.greedy,se=w.alias;if(Q&&!w.pattern.global){var K=w.pattern.toString().match(/[imsuy]*$/)[0];w.pattern=RegExp(w.pattern.source,K+"g")}for(var X=w.pattern||w,k=u.next,O=s;k!==l.tail&&!(m&&O>=m.reach);O+=k.value.length,k=k.next){var $=k.value;if(l.length>t.length)return;if(!($ instanceof h)){var V=1,D;if(Q){if(D=S(X,O,t,j),!D||D.index>=t.length)break;var ne=D.index,H=D.index+D[0].length,A=O;for(A+=k.value.length;ne>=A;)k=k.next,A+=k.value.length;if(A-=k.value.length,O=A,k.value instanceof h)continue;for(var F=k;F!==l.tail&&(A<H||typeof F.value=="string");F=F.next)V++,A+=F.value.length;V--,$=t.slice(O,A),D.index-=O}else if(D=S(X,0,$,j),!D)continue;var ne=D.index,Z=D[0],ae=$.slice(0,ne),ce=$.slice(ne+Z.length),_=O+$.length;m&&_>m.reach&&(m.reach=_);var ve=k.prev;ae&&(ve=T(l,ve,ae),O+=ae.length),N(l,ve,V);var mn=new h(b,q?a.tokenize(Z,q):Z,se,Z);if(k=T(l,ve,mn),ce&&T(l,k,ce),V>1){var Ce={cause:b+","+E,reach:_};P(t,l,o,k.prev,O,Ce),m&&Ce.reach>m.reach&&(m.reach=Ce.reach)}}}}}}function x(){var t={value:null,prev:null,next:null},l={value:null,prev:t,next:null};t.next=l,this.head=t,this.tail=l,this.length=0}function T(t,l,o){var u=l.next,s={value:o,prev:l,next:u};return l.next=s,u.prev=s,t.length++,s}function N(t,l,o){for(var u=l.next,s=0;s<o&&u!==t.tail;s++)u=u.next;l.next=u,u.prev=l,t.length-=s}function M(t){for(var l=[],o=t.head.next;o!==t.tail;)l.push(o.value),o=o.next;return l}if(!e.document)return e.addEventListener&&(a.disableWorkerMessageHandler||e.addEventListener("message",function(t){var l=JSON.parse(t.data),o=l.language,u=l.code,s=l.immediateClose;e.postMessage(a.highlight(u,a.languages[o],o)),s&&e.close()},!1)),a;var G=a.util.currentScript();G&&(a.filename=G.src,G.hasAttribute("data-manual")&&(a.manual=!0));function z(){a.manual||a.highlightAll()}if(!a.manual){var ue=document.readyState;ue==="loading"||ue==="interactive"&&G&&G.defer?document.addEventListener("DOMContentLoaded",z):window.requestAnimationFrame?window.requestAnimationFrame(z):window.setTimeout(z,16)}return a}(rl);typeof be<"u"&&be.exports&&(be.exports=dn);typeof global<"u"&&(global.Prism=dn)});var yl=C((Ho,hn)=>{c();f();d();g();p();var pe=typeof globalThis=="object"?globalThis:typeof self=="object"?self:typeof window=="object"?window:typeof global=="object"?global:{},nl=ml();pe.Prism={manual:!0,disableWorkerMessageHandler:!0};var al=zr(),ll=fn(),gn=pn(),tl=bn(),il=xn(),ol=yn(),ul=wn();nl();var ze={}.hasOwnProperty;function vn(){}vn.prototype=gn;var I=new vn;hn.exports=I;I.highlight=cl;I.register=ge;I.alias=sl;I.registered=fl;I.listLanguages=dl;ge(tl);ge(il);ge(ol);ge(ul);I.util.encode=vl;I.Token.stringify=pl;function ge(e){if(typeof e!="function"||!e.displayName)throw new Error("Expected `function` for `grammar`, got `"+e+"`");I.languages[e.displayName]===void 0&&e(I)}function sl(e,r){var n=I.languages,i=e,a,h,S,P;r&&(i={},i[e]=r);for(a in i)for(h=i[a],h=typeof h=="string"?[h]:h,S=h.length,P=-1;++P<S;)n[h[P]]=n[a]}function cl(e,r){var n=gn.highlight,i;if(typeof e!="string")throw new Error("Expected `string` for `value`, got `"+e+"`");if(I.util.type(r)==="Object")i=r,r=null;else{if(typeof r!="string")throw new Error("Expected `string` for `name`, got `"+r+"`");if(ze.call(I.languages,r))i=I.languages[r];else throw new Error("Unknown language: `"+r+"` is not registered")}return n.call(this,e,i,r)}function fl(e){if(typeof e!="string")throw new Error("Expected `string` for `language`, got `"+e+"`");return ze.call(I.languages,e)}function dl(){var e=I.languages,r=[],n;for(n in e)ze.call(e,n)&&typeof e[n]=="object"&&r.push(n);return r}function pl(e,r,n){var i;return typeof e=="string"?{type:"text",value:e}:I.util.type(e)==="Array"?gl(e,r):(i={type:e.type,content:I.Token.stringify(e.content,r,n),tag:"span",classes:["token",e.type],attributes:{},language:r,parent:n},e.alias&&(i.classes=i.classes.concat(e.alias)),I.hooks.run("wrap",i),al(i.tag+"."+i.classes.join("."),hl(i.attributes),i.content))}function gl(e,r){for(var n=[],i=e.length,a=-1,h;++a<i;)h=e[a],h!==""&&h!==null&&h!==void 0&&n.push(h);for(a=-1,i=n.length;++a<i;)h=n[a],n[a]=I.Token.stringify(h,r,n);return n}function vl(e){return e}function hl(e){var r;for(r in e)e[r]=ll(e[r]);return e}function ml(){var e="Prism"in pe,r=e?pe.Prism:void 0;return n;function n(){e?pe.Prism=r:delete pe.Prism,e=void 0,r=void 0}}});export{yl as a};
/*! Bundled license information:

prismjs/components/prism-core.js:
  (**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   *)
*/