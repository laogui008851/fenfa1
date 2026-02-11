/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.5.1",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(D).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function D(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(D(this,e||[],!1))},not:function(e){return this.pushStack(D(this,e||[],!0))},is:function(e){return!!D(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var j,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||j,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,j=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^key/,we=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Te=/^([^.]*)(?:\.(.+)|)/;function Ce(){return!0}function Ee(){return!1}function Se(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function ke(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)ke(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Ee;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Ae(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,Ce)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=Te.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=Te.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click",Ce),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ce:Ee,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Ee,isPropagationStopped:Ee,isImmediatePropagationStopped:Ee,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ce,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ce,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ce,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&be.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&we.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Ae(this,e,Se),!1},trigger:function(){return Ae(this,e),!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return ke(this,e,t,n,r)},one:function(e,t,n,r){return ke(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Ee),this.each(function(){S.event.remove(this,e,n,t)})}});var Ne=/<script|<style|<link/i,De=/checked\s*(?:[^=]|=\s*.checked.)/i,je=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function qe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function Le(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function He(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Oe(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function Pe(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&De.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Pe(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),Le)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,He),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(je,""),u,l))}return n}function Re(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Oe(o[r],a[r]);else Oe(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Re(this,e,!0)},remove:function(e){return Re(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Pe(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||qe(this,e).appendChild(e)})},prepend:function(){return Pe(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=qe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ne.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Pe(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Me=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Ie=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},We=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Fe=new RegExp(ne.join("|"),"i");function Be(e,t,n){var r,i,o,a,s=e.style;return(n=n||Ie(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Me.test(a)&&Fe.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function $e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px",t.style.height="1px",n.style.height="9px",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=3<parseInt(r.height),re.removeChild(e)),a}}))}();var _e=["Webkit","Moz","ms"],ze=E.createElement("div").style,Ue={};function Xe(e){var t=S.cssProps[e]||Ue[e];return t||(e in ze?e:Ue[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=_e.length;while(n--)if((e=_e[n]+t)in ze)return e}(e)||e)}var Ve=/^(none|table(?!-c[ea]).+)/,Ge=/^--/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Ie(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Me.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Ge.test(t),l=e.style;if(u||(t=Xe(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Ge.test(t)||(t=Xe(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ve.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):We(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Ie(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Je(0,t,s)}}}),S.cssHooks.marginLeft=$e(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-We(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Je)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Ie(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[Xe(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=et.prototype.init,S.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,S.fx.interval),S.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ct(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=ft(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),S.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),tt=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){nt||(nt=!0,st())},S.fx.stop=function(){nt=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=E.createElement("input"),it=E.createElement("select").appendChild(E.createElement("option")),rt.type="checkbox",y.checkOn=""!==rt.value,y.optSelected=it.selected,(rt=E.createElement("input")).value="t",rt.type="radio",y.radioValue="t"===rt.value;var pt,dt=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||S.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function vt(e){return(e.match(P)||[]).join(" ")}function yt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,yt(this)))});if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,yt(this)))});if(!arguments.length)return this.attr("class","");if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,yt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=mt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=yt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+vt(yt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:vt(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},Et=/\?/;S.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||S.error("Invalid XML: "+e),t};var St=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function Dt(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||St.test(n)?i(n,t):Dt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)Dt(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)Dt(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var jt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=E.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Bt(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function $t(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Wt.href=Tt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?$t($t(e,S.ajaxSettings),t):$t(S.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Bt(Rt,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Ot.test(v.type),f=v.url.replace(qt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(jt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Et.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Lt,"$1"),o=(Et.test(f)?"&":"?")+"_="+Ct.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+It+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Bt(Mt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=S.ajaxSettings.xhr();y.cors=!!zt&&"withCredentials"in zt,y.ajax=zt=!!zt,S.ajaxTransport(function(i){var o,a;if(y.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||S.expando+"_"+Ct.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(Et.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Ut=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=vt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):("number"==typeof f.top&&(f.top+="px"),"number"==typeof f.left&&(f.left+="px"),c.css(f))}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=$e(y.pixelPosition,function(e,t){if(t)return t=Be(e,n),Me.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Gt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Yt=C.jQuery,Qt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Qt),e&&C.jQuery===S&&(C.jQuery=Yt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});
;
/*!
 * jQuery Once v2.2.3 - http://github.com/robloach/jquery-once
 * @license MIT, GPL-2.0
 *   http://opensource.org/licenses/MIT
 *   http://opensource.org/licenses/GPL-2.0
 */
(function(e){"use strict";if(typeof exports==="object"&&typeof exports.nodeName!=="string"){e(require("jquery"))}else if(typeof define==="function"&&define.amd){define(["jquery"],e)}else{e(jQuery)}})(function(t){"use strict";var r=function(e){e=e||"once";if(typeof e!=="string"){throw new TypeError("The jQuery Once id parameter must be a string")}return e};t.fn.once=function(e){var n="jquery-once-"+r(e);return this.filter(function(){return t(this).data(n)!==true}).data(n,true)};t.fn.removeOnce=function(e){return this.findOnce(e).removeData("jquery-once-"+r(e))};t.fn.findOnce=function(e){var n="jquery-once-"+r(e);return this.filter(function(){return t(this).data(n)===true})}});

/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function () {
  var settingsElement = document.querySelector('head > script[type="application/json"][data-drupal-selector="drupal-settings-json"], body > script[type="application/json"][data-drupal-selector="drupal-settings-json"]');

  window.drupalSettings = {};

  if (settingsElement !== null) {
    window.drupalSettings = JSON.parse(settingsElement.textContent);
  }
})();;
window.drupalTranslations = {"strings":{"":{"Save":"保存","An AJAX HTTP error occurred.":"发生一个AJAX HTTP错误\u3002","HTTP Result Code: !status":"HTTP返\u56de代码\uff1a!status","An AJAX HTTP request terminated abnormally.":"一个AJAX HTTP请求异常终止\u3002","Debugging information follows.":"调试信息如下\u3002","Path: !uri":"路径\uff1a!uri","StatusText: !statusText":"状态文本: !statusText","ResponseText: !responseText":"响应文本\uff1a !responseText","ReadyState: !readyState":"准备状态\uff1a !readyState","CustomMessage: !customMessage":"定制信息\uff1a !customMessage","Please wait...":"请稍等...","The response failed verification so will not be processed.":"未通过验证的响应不会被处理\u3002","The callback URL is not local and not trusted: !url":"非本地的\u56de调地址不会被信任\uff1a !url","Changed":"Changed","Home":"首页","Next":"下一个","closed":"关闭","Cancel":"取消","Disabled":"禁用","Enabled":"启用","Edit":"Edit","Link":"链接","Image":"\u5716片","Open":"开放","Sunday":"星期日","Monday":"星期一","Tuesday":"星期二","Wednesday":"星期三","Thursday":"星期\u56db","Friday":"星期五","Saturday":"星期六","Add":"添加","Continue":"继续","Done":"完成","OK":"OK","Prev":"前","Mon":"周一","Tue":"周二","Wed":"周三","Thu":"周\u56db","Fri":"周五","Sat":"周六","Sun":"周日","May":"5月","Close":"关闭","Add group":"添加组","Show":"显示","Select all rows in this table":"选择此表中的所有行","Deselect all rows in this table":"取消全选此表中的所有行","Today":"今天","Jan":"1月","Feb":"2月","Mar":"3月","Apr":"4月","Jun":"6月","Jul":"7月","Aug":"8月","Sep":"9月","Oct":"10月","Nov":"11月","Dec":"12月","Caption":"标题","Extend":"扩展","Su":"周日","Mo":"周一","Tu":"周二","We":"周三","Th":"周\u56db","Fr":"周五","Sa":"周六","Not published":"未发表","Loading...":"正在加载...","Apply":"Apply","Hide":"隐藏","Unlink":"取消链接","Not promoted":"未推荐","mm\/dd\/yy":"mm\/dd\/yy","Quick edit":"快速编辑","button":"按钮","Edit Link":"编辑链接","Remove group":"删除组","By @name on @date":"由 @name 在 @date 发布","By @name":"由 @name 发布","Not in menu":"不在菜单中","Alias: @alias":"别名\uff1a@alias","No alias":"无别名","@label":"@label","New revision":"新的修订版本","Drag to re-order":"拖放重新排序","Changes made in this table will not be saved until the form is submitted.":"在此表格中的修改只有在整个表单提交后才会被保存\u3002","Discard changes":"丢弃更改","Show description":"显示描述","New group":"新组","Saving":"正在保存","This permission is inherited from the authenticated user role.":"此权限继承自注册用户角色\u3002","No revision":"没有修订版本","Requires a title":"需要一个标题","Not restricted":"未受限制","(active tab)":"\uff08活动标签\uff09","Restricted to certain pages":"限制到特定的区块","The block cannot be placed in this region.":"此区块不能放置在此区域中","Hide summary":"隐藏摘要","Edit summary":"编辑摘要","Don\u0027t display post information":"不要显示发布信息\u3002","Collapse":"折叠","Edit media":"编辑媒体","The selected file %filename cannot be uploaded. Only files with the following extensions are allowed: %extensions.":"选择的文件%filename无法上传\u3002只有以下类型的文件被允许\uff1a%extensions\u3002","Show row weights":"显示行的权重","Hide row weights":"隐藏行的权重","Apply (all displays)":"应用\uff08所有显示\uff09","Apply (this display)":"应用\uff08当前显示\uff09","Revert to default":"恢复至默认","Hide description":"隐藏描述","You have unsaved changes":"您有未保存的更改","Needs to be updated":"需要被更新","Does not need to be updated":"不需要被更新","Show all columns":"显示所有列","Show table cells that were hidden to make the table fit within a small screen.":"显示为了适应小屏幕而隐藏的表格单元","List additional actions":"列出额外的动作","Flag other translations as outdated":"把其他翻译标示为已过期","Do not flag other translations as outdated":"不把其他翻译标示为已过期","opened":"已打开","Horizontal orientation":"横向","Vertical orientation":"纵向","Tray orientation changed to @orientation.":"托盘方向已更改为 @orientation\u3002","You have unsaved changes.":"你有未保存的更改\u3002","No styles configured":"未配置样式","@count styles configured":"已配置@count种样式","@action @title configuration options":"@action @title 配置选项","Tabbing is no longer constrained by the Contextual module.":"Tab 键切换不再受\u201c上下文\u201d模块的约束\u3002","Tabbing is constrained to a set of @contextualsCount and the edit mode toggle.":"Tab 键切换仅限于一组 @contextualsCount 和编辑方式切换\u3002","Press the esc key to exit.":"按ESC键退出\u3002","@count contextual link\u0003@count contextual links":"@count 上下文链接\u0003@count 上下文链接","Based on the text editor configuration, these tags have automatically been added: \u003Cstrong\u003E@tag-list\u003C\/strong\u003E.":"根据文本编辑器配置\uff0c已自动添加以下标记\uff1a\u003Cstrong\u003E@tag-list\u003C\/strong\u003E\u3002","End tour":"结束导览","Uploads disabled":"已取消上传","Uploads enabled, max size: @size @dimensions":"上传已启用\uff0c最大尺寸\uff1a @size @dimensions","Discard changes?":"要放弃更改吗\uff1f","The toolbar cannot be set to a horizontal orientation when it is locked.":"工具栏锁定时无法设置为横向显示\u3002","Enter caption here":"在这里输入标题","Could not load the form for \u003Cq\u003E@field-label\u003C\/q\u003E, either due to a website problem or a network connection problem.\u003Cbr\u003EPlease try again.":"由于 Web 站点问题或网络连接问题\uff0c所以无法装入\u201c@field-label\u201d的表单\u3002\u003Cbr\u003E请重试\u3002","Your changes to \u003Cq\u003E@entity-title\u003C\/q\u003E could not be saved, either due to a website problem or a network connection problem.\u003Cbr\u003EPlease try again.":"由于 Web 站点问题或网络连接问题\uff0c所以无法保存您对\u201c@entity-title\u201d所做的更改\u3002\u003Cbr\u003E请重试\u3002","Hide group names":"隐藏组名","Show group names":"显示组名","@groupName button group in position @position of @positionCount in row @row of @rowCount.":"@groupName 按钮组在 @positionCount 中的位置 @position 在 @rowCount 中 @row 行\u3002","Press the down arrow key to create a new row.":"按向下箭头键来创建一个新行\u3002","@name @type.":"@name @type\u3002","Press the down arrow key to activate.":"按向下箭头键来激活\u3002","@name @type in position @position of @positionCount in @groupName button group in row @row of @rowCount.":"@name @type\uff0c位于 @groupName 按钮组第 @row 行\uff08共 @rowCount 行\uff09第 @position 个\uff08共 @positionCount 个\uff09位置\u3002","Press the down arrow key to create a new button group in a new row.":"按向下箭头键来创建一个新按钮组在新的一行\u3002","This is the last group. Move the button forward to create a new group.":"这是最后一个组\u3002移动按钮创建一个新组\u3002","The \u0022@name\u0022 button is currently enabled.":"\u0022@name\u0022 按钮当前已启用\u3002","Use the keyboard arrow keys to change the position of this button.":"使用键盘方向键来更改这个按钮的位置\u3002","Press the up arrow key on the top row to disable the button.":"按向上箭头键在最上面一行禁用按钮\u3002","The \u0022@name\u0022 button is currently disabled.":"\u0022@name\u0022 按钮当前已被禁用\u3002","Use the down arrow key to move this button into the active toolbar.":"使用向下箭头键移动这个按钮到活跃的工具栏\u3002","This @name is currently enabled.":"这个 @name 当前已启用\u3002","Use the keyboard arrow keys to change the position of this separator.":"使用键盘方向键来更改这个分隔符的位置\u3002","Separators are used to visually split individual buttons.":"分割线可以将不同按钮隔开\u3002","This @name is currently disabled.":"@name 已被禁用\u3002","Use the down arrow key to move this separator into the active toolbar.":"使用向下箭头键移动这个分离器到活跃的工具栏\u3002","You may add multiple separators to each button group.":"你可以添加多个分离器按钮组\u3002","Please provide a name for the button group.":"请给按钮组提供一个名称\u3002","Button group name":"按钮组的名称","Editing the name of the new button group in a dialog.":"编辑新按钮组的名字显示在一个对话框里\u3002","Editing the name of the \u0022@groupName\u0022 button group in a dialog.":"编辑 \u0022@groupName\u0022 按钮组的名字显示在一个对话框里\u3002","Place a button to create a new button group.":"放入一个按钮来创建一个新的按钮组\u3002","Add a CKEditor button group to the end of this row.":"在这一行的末尾添加一个 CKEditor 按钮组\u3002","Changing the text format to %text_format will permanently remove content that is not allowed in that text format.\u003Cbr\u003E\u003Cbr\u003ESave your changes before switching the text format to avoid losing data.":"更改文本格式至 %text_format 将永久删除该文本格式不允许的内容\u3002\u003Cbr\u003E\u003Cbr\u003E请在切换文本格式前保存您的更改\uff0c以避免丢失数据\u3002","Change text format?":"修改文字格式\uff1f","Rich Text Editor, !label field":"富文本编辑器\uff0c!label 字段","Leave preview?":"退出预览\uff1f","Leave preview":"退出预览","Leaving the preview will cause unsaved changes to be lost. Are you sure you want to leave the preview?":"退出预览将导致未保存的更改丢失\uff0c您确定要退出\uff1f","CTRL+Left click will prevent this dialog from showing and proceed to the clicked link.":"按CTRL键的同时单击左键\uff0c将阻止此对话框的显示\uff0c并将继续跳转至已点击的链接\u3002","Tray \u0022@tray\u0022 @action.":"托盘\u201c@tray\u201d@action\u3002","Tray @action.":"托盘 @action\u3002","Hide lower priority columns":"隐藏较低优先级的列","!modules modules are available in the modified list.":"!modules 模块在已修改列表中可用\u3002","Network problem!":"网络问题\uff01","Authored on @date":"认证日期\uff1a@date","1 block is available in the modified list.\u0003@count blocks are available in the modified list.":"1个区块在修改后的列表中可用\u3002\u0003@count 个区块在修改后的列表中可用\u3002","Select all media":"选择所有媒体","Select None":"选择无","Select All":"选择所有","Insert this token into your form":"把这个Token\uff08令牌\uff09插入到表单","First click a text field to insert your tokens into.":"先点击您需要插入替换符的文字字段\u3002","Automatic alias":"自动别名"},"Long month name":{"January":"一月","February":"二月","March":"三月","April":"\u56db月","May":"五月","June":"六月","July":"七月","August":"八月","September":"九月","October":"十月","November":"十一月","December":"十二月"}},"pluralFormula":{"1":0,"default":1}};;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

window.Drupal = { behaviors: {}, locale: {} };

(function (Drupal, drupalSettings, drupalTranslations, console, Proxy, Reflect) {
  Drupal.throwError = function (error) {
    setTimeout(function () {
      throw error;
    }, 0);
  };

  Drupal.attachBehaviors = function (context, settings) {
    context = context || document;
    settings = settings || drupalSettings;
    var behaviors = Drupal.behaviors;

    Object.keys(behaviors || {}).forEach(function (i) {
      if (typeof behaviors[i].attach === 'function') {
        try {
          behaviors[i].attach(context, settings);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };

  Drupal.detachBehaviors = function (context, settings, trigger) {
    context = context || document;
    settings = settings || drupalSettings;
    trigger = trigger || 'unload';
    var behaviors = Drupal.behaviors;

    Object.keys(behaviors || {}).forEach(function (i) {
      if (typeof behaviors[i].detach === 'function') {
        try {
          behaviors[i].detach(context, settings, trigger);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };

  Drupal.checkPlain = function (str) {
    str = str.toString().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    return str;
  };

  Drupal.formatString = function (str, args) {
    var processedArgs = {};

    Object.keys(args || {}).forEach(function (key) {
      switch (key.charAt(0)) {
        case '@':
          processedArgs[key] = Drupal.checkPlain(args[key]);
          break;

        case '!':
          processedArgs[key] = args[key];
          break;

        default:
          processedArgs[key] = Drupal.theme('placeholder', args[key]);
          break;
      }
    });

    return Drupal.stringReplace(str, processedArgs, null);
  };

  Drupal.stringReplace = function (str, args, keys) {
    if (str.length === 0) {
      return str;
    }

    if (!Array.isArray(keys)) {
      keys = Object.keys(args || {});

      keys.sort(function (a, b) {
        return a.length - b.length;
      });
    }

    if (keys.length === 0) {
      return str;
    }

    var key = keys.pop();
    var fragments = str.split(key);

    if (keys.length) {
      for (var i = 0; i < fragments.length; i++) {
        fragments[i] = Drupal.stringReplace(fragments[i], args, keys.slice(0));
      }
    }

    return fragments.join(args[key]);
  };

  Drupal.t = function (str, args, options) {
    options = options || {};
    options.context = options.context || '';

    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.strings && drupalTranslations.strings[options.context] && drupalTranslations.strings[options.context][str]) {
      str = drupalTranslations.strings[options.context][str];
    }

    if (args) {
      str = Drupal.formatString(str, args);
    }
    return str;
  };

  Drupal.url = function (path) {
    return drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + path;
  };

  Drupal.url.toAbsolute = function (url) {
    var urlParsingNode = document.createElement('a');

    try {
      url = decodeURIComponent(url);
    } catch (e) {}

    urlParsingNode.setAttribute('href', url);

    return urlParsingNode.cloneNode(false).href;
  };

  Drupal.url.isLocal = function (url) {
    var absoluteUrl = Drupal.url.toAbsolute(url);
    var protocol = window.location.protocol;

    if (protocol === 'http:' && absoluteUrl.indexOf('https:') === 0) {
      protocol = 'https:';
    }
    var baseUrl = protocol + '//' + window.location.host + drupalSettings.path.baseUrl.slice(0, -1);

    try {
      absoluteUrl = decodeURIComponent(absoluteUrl);
    } catch (e) {}
    try {
      baseUrl = decodeURIComponent(baseUrl);
    } catch (e) {}

    return absoluteUrl === baseUrl || absoluteUrl.indexOf(baseUrl + '/') === 0;
  };

  Drupal.formatPlural = function (count, singular, plural, args, options) {
    args = args || {};
    args['@count'] = count;

    var pluralDelimiter = drupalSettings.pluralDelimiter;
    var translations = Drupal.t(singular + pluralDelimiter + plural, args, options).split(pluralDelimiter);
    var index = 0;

    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.pluralFormula) {
      index = count in drupalTranslations.pluralFormula ? drupalTranslations.pluralFormula[count] : drupalTranslations.pluralFormula.default;
    } else if (args['@count'] !== 1) {
      index = 1;
    }

    return translations[index];
  };

  Drupal.encodePath = function (item) {
    return window.encodeURIComponent(item).replace(/%2F/g, '/');
  };

  Drupal.deprecationError = function (_ref) {
    var message = _ref.message;

    if (drupalSettings.suppressDeprecationErrors === false && typeof console !== 'undefined' && console.warn) {
      console.warn('[Deprecation] ' + message);
    }
  };

  Drupal.deprecatedProperty = function (_ref2) {
    var target = _ref2.target,
        deprecatedProperty = _ref2.deprecatedProperty,
        message = _ref2.message;

    if (!Proxy || !Reflect) {
      return target;
    }

    return new Proxy(target, {
      get: function get(target, key) {
        for (var _len = arguments.length, rest = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          rest[_key - 2] = arguments[_key];
        }

        if (key === deprecatedProperty) {
          Drupal.deprecationError({ message: message });
        }
        return Reflect.get.apply(Reflect, [target, key].concat(rest));
      }
    });
  };

  Drupal.theme = function (func) {
    if (func in Drupal.theme) {
      var _Drupal$theme;

      for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      return (_Drupal$theme = Drupal.theme)[func].apply(_Drupal$theme, args);
    }
  };

  Drupal.theme.placeholder = function (str) {
    return '<em class="placeholder">' + Drupal.checkPlain(str) + '</em>';
  };
})(Drupal, window.drupalSettings, window.drupalTranslations, window.console, window.Proxy, window.Reflect);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

if (window.jQuery) {
  jQuery.noConflict();
}

document.documentElement.className += ' js';

(function (Drupal, drupalSettings) {
  var domReady = function domReady(callback) {
    if (document.readyState !== 'loading') {
      callback();
    } else {
      var listener = function listener() {
        callback();
        document.removeEventListener('DOMContentLoaded', listener);
      };
      document.addEventListener('DOMContentLoaded', listener);
    }
  };

  domReady(function () {
    Drupal.attachBehaviors(document, drupalSettings);
  });
})(Drupal, window.drupalSettings);;
var bridge = {
  default: this,
  call: function (b, a, c) {
    var e = "";
    "function" == typeof a && ((c = a), (a = {}));
    a = { data: void 0 === a ? null : a };
    if ("function" == typeof c) {
      var g = "dscb" + window.dscb++;
      window[g] = c;
      a._dscbstub = g;
    }
    a = JSON.stringify(a);
    if (window._dsbridge) e = _dsbridge.call(b, a);
    else if (window._dswk || -1 != navigator.userAgent.indexOf("_dsbridge"))
      e = prompt("_dsbridge=" + b, a);
    return JSON.parse(e || "{}").data;
  },
  register: function (b, a, c) {
    c = c ? window._dsaf : window._dsf;
    window._dsInit ||
      ((window._dsInit = !0),
      setTimeout(function () {
        bridge.call("_dsb.dsinit");
      }, 0));
    "object" == typeof a ? (c._obs[b] = a) : (c[b] = a);
  },
  registerAsyn: function (b, a) {
    this.register(b, a, !0);
  },
  hasNativeMethod: function (b, a) {
    return this.call("_dsb.hasNativeMethod", { name: b, type: a || "all" });
  },
  disableJavascriptDialogBlock: function (b) {
    this.call("_dsb.disableJavascriptDialogBlock", { disable: !1 !== b });
  },
};
!(function () {
  if (!window._dsf) {
    var b = {
        _dsf: { _obs: {} },
        _dsaf: { _obs: {} },
        dscb: 0,
        dsBridge: bridge,
        close: function () {
          bridge.call("_dsb.closePage");
        },
        _handleMessageFromNative: function (a) {
          var e = JSON.parse(a.data),
            b = { id: a.callbackId, complete: !0 },
            c = this._dsf[a.method],
            d = this._dsaf[a.method],
            h = function (a, c) {
              b.data = a.apply(c, e);
              bridge.call("_dsb.returnValue", b);
            },
            k = function (a, c) {
              e.push(function (a, c) {
                b.data = a;
                b.complete = !1 !== c;
                bridge.call("_dsb.returnValue", b);
              });
              a.apply(c, e);
            };
          if (c) h(c, this._dsf);
          else if (d) k(d, this._dsaf);
          else if (((c = a.method.split(".")), !(2 > c.length))) {
            a = c.pop();
            var c = c.join("."),
              d = this._dsf._obs,
              d = d[c] || {},
              f = d[a];
            f && "function" == typeof f
              ? h(f, d)
              : ((d = this._dsaf._obs),
                (d = d[c] || {}),
                (f = d[a]) && "function" == typeof f && k(f, d));
          }
        },
      },
      a;
    for (a in b) window[a] = b[a];
    bridge.register("_hasJavascriptMethod", function (a, b) {
      b = a.split(".");
      if (2 > b.length) return !(!_dsf[b] && !_dsaf[b]);
      a = b.pop();
      b = b.join(".");
      return (b = _dsf._obs[b] || _dsaf._obs[b]) && !!b[a];
    });
  }
})();
;
"use strict";

// http://wiki.gnetis.com/pages/viewpage.action?pageId=41387996
var E_Window_Event;
(function (E_Window_Event) {
  E_Window_Event["OpenUrl"] = "openUrl";
})((E_Window_Event = window.E_Window_Event || (window.E_Window_Event = {})));

const WindowUtil = {
  getValue: function (eventName, params) {
    if (params === void 0) {
      params = {};
    }
    // if (eventName === 'get') {
    //     return this.saveValueTest
    // }
    return dsBridge.call(eventName, params);
  },
  getValueAsync: function (eventName, params, callback) {
    return dsBridge.call(eventName, params, callback);
  },
  bindEvent: function (eventName, callback) {
    dsBridge.register(eventName, callback);
  },
  triggerEvent: function (eventName, params, callback) {
    if (params === void 0) {
      params = {};
    }
    if (callback === void 0) {
      callback = function (response) {};
    }
    // if (eventName === 'save') {
    //     this.saveValueTest = params.value
    // }
    return dsBridge.call(eventName, params, callback);
  },
};

window.windowUtil = WindowUtil;
;
const baseUrl = "/eamsmember";
const baseApiUrl = "/api";

(function ($) {
  $(function () {
    new Swiper(".promotion .swiper-container", {
      // watchOverflow: true,
      // parallax: true,
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 5000,
      },
      // autoHeight: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
    var os = detectOS();
    const _href = location.href;
    const etdata = getQueryStringRegExp("etdata"); //获取etdata参数
    const channel = getQueryStringRegExp("channel"); //获取etdata参数
    const params = etdata ? JSON.parse(window.atob(etdata)) : {};
    const token = params?.token || getQueryStringRegExp("token");
    const search = window.location.search;

    if (document.getElementById("registerUserFrame")) {
      var frameHref = document
        .getElementById("registerUserFrame")
        .getAttribute("src");
      const _url = new URL(frameHref, location.origin);
      $("#registerUserFrame").attr(
        "src",
        _url.origin + _url.pathname + search + _url.hash
      );
    }

    if (!_isMobile) {
      $(".is-pc").show();
      $(".is-mobile").hide();
      $(".promotion").removeClass("mobile");
      $(".promotion-btns").removeClass("mobile");
    } else {
      $(".is-pc").hide();
      $(".is-mobile").show();
      $(".promotion").addClass("mobile");
      $(".promotion-btns").addClass("mobile");
      if (os === "ios") {
        $(".promotion-btns.ios").show().siblings(".promotion-btns").hide();
      } else {
        $(".promotion-btns.ios").hide().siblings(".promotion-btns").show();
      }
    }

    function purchaseGift(token, etdata) {
      requestData(
        baseUrl + "/purchase/v2/gift",
        {
          productId: 60000, //产品 id，默认 60000
          type: 22, //类型，22-赠送 1 个月
          umsAuthToken: token, //用户 umsid
          etdata: decodeURIComponent(etdata), //base64 字符串
        },
        function (res) {
          // 40053-跳转#5【已是企业 VIP】；
          // 40054-跳转#6【推荐购买会员（年卡和 300 方月卡）】；
          // 40055-跳转#7【推荐购买 9.9 页】；
          // 40056-跳到#4【企业参会账号赠送成功】；
          // 40057-跳到#12【企业免费账号赠送成功】；
          // 40035-跳转到登陆页（token 失效）
          console.log("res :>> ", res);
          if (_href.indexOf("/promotion/redpacket/success1") != -1) {
            return false;
          }
          const resultPages = {
            0: "/promotion/redpacket/success1",
            40053: "/promotion/redpacket/success2",
            40054: "/promotion/redpacket/success4",
            40055: "/promotion/redpacket/success3",
            40056: "/promotion/redpacket/success1",
            40057: "/promotion/12huihou",
          };
          if (res.code === "40035") {
            if (_isMobile) {
              window.location.href = `/register2023/ecommerceBuy/${search}#/login/official`;
            } else {
              if (document.getElementById("registerUserDialog")) {
                showDialog("registerUserDialog");
              } else {
                window.location.href = `/pricing-product` + search;
              }
            }
          } else {
            window.location.href = resultPages[res.code] + search;
          }
        }
      );
    }

    //平滑显示弹出框
    function showDialog(id) {
      $("#layer").fadeIn(300);
      $("#" + id)
        .show()
        .addClass("slideDown");
    }
    //平滑隐藏弹出框
    function hideDialog(id) {
      $("#layer").fadeOut(300);
      $("#" + id)
        .removeClass("slideDown")
        .addClass("slideUp");
      setTimeout(function () {
        $("#" + id)
          .hide()
          .stop(true, true)
          .removeClass("slideUp");
      }, 501);
    }

    function addUrlSearch(search) {
      if (search) {
        return `${search}&`;
      }
      return `?`;
    }

    $("#redpacket").on("click", function () {
      onOpenPage(
        location.origin + "/promotion/redpacket/success1" + search,
        "giftOneMonthCard",
        "2"
      );
    });
    $("#successResult1").click(function () {
      showDialog("dialogInstruction");
    });
    $(".dialog a.close").click(function () {
      hideDialog($(this).parents(".dialog").attr("id"));
    });

    $("#goBuy .p-left").click(function (event) {
      if (channel) {
        saveDataCollection("", "redpacket-success4", 2);
      }
      window.location.href = search
        ? `/pricing-product${search}parties=100`
        : `/pricing-product`;
      event.stopPropagation();
    });
    $("#goBuy .p-right").click(function (event) {
      if (channel) {
        saveDataCollection("", "redpacket-success4", 3);
      }
      window.location.href = search
        ? `/pricing-product${addUrlSearch(search)}parties=300`
        : `/pricing-product`;
      event.stopPropagation();
    });
    $("#goBuy .p-top").click(function (event) {
      if (channel) {
        saveDataCollection("", "redpacket-success4", 2);
      }
      window.location.href = search
        ? `/register2023/ecommerceBuy/${addUrlSearch(
            search
          )}parties=100&month=12#/`
        : `/register2023/ecommerceBuy#/`;
      event.stopPropagation();
    });
    $("#goBuy .p-bottom").click(function (event) {
      if (channel) {
        saveDataCollection("", "redpacket-success4", 3);
      }
      window.location.href = search
        ? `/register2023/ecommerceBuy/${addUrlSearch(
            search
          )}parties=300&month=1#/`
        : `/register2023/ecommerceBuy#/`;
      event.stopPropagation();
    });
    $("#goBuy").click(function () {
      if (_isMobile) {
        window.location.href = search
          ? `/register2023/ecommerceBuy/${search}#/`
          : `/register2023/ecommerceBuy#/`;
      } else {
        window.location.href = search
          ? `/pricing-product${search}`
          : `/pricing-product`;
      }
    });
    $("#goBuyMobile").click(function () {
      window.location.href = search
        ? `/register2023/ecommerceBuy/${search}#/`
        : `/register2023/ecommerceBuy#/`;
    });

    $("#goBuy_100nk").click(function () {
      if (_isMobile) {
        var murl =
          location.origin +
          "/register2023/ecommerceBuy/" +
          addUrlSearch(search) +
          "parties=100&month=12#/";
        onOpenPage(murl, "specialMonthCard", 2);
      } else {
        var url =
          location.origin +
          "/pricing-product" +
          addUrlSearch(search) +
          "parties=100&month=12#/";
        onOpenPage(url, "specialMonthCard", 2);
      }
    });
    $("#goBuy_100nk_m").click(function () {
      if (_isMobile) {
        var murl =
          location.origin +
          "/register2023/ecommerceBuy/" +
          addUrlSearch(search) +
          "parties=100&month=12#/";
        onOpenPage(murl, "specialMonthCard", 2);
        // windowUtil.getValue("openUrl", {
        //   url: murl,
        //   container: "browser",
        // });
      }
    });

    if (_href.indexOf("promotion/meeting") != -1) {
      // 9.9特惠卡
      saveDataCollection(etdata, "specialMonthCard", 1);
    }
    if (_href.indexOf("promotion/redpacket/meeting") != -1) {
      // 赠送一个月卡
      saveDataCollection(etdata, "giftOneMonthCard", 1);
    }
    if (_href.indexOf("promotion/market-wx") != -1) {
      // 微信活动
      saveDataCollection("", "market-wx", 1);
    }
    const type = getQueryStringRegExp("type");
    if (_href.indexOf("promotion/redpacket/after-meeting") != -1) {
      location.href = location.origin + "/promotion/redpacket/landing" + search;
    }
    if (
      _href.indexOf("promotion/redpacket/landing") != -1 &&
      type === "official"
    ) {
      purchaseGift(token, etdata);
    }
    if (_href.indexOf("/promotion/redpacket/success4") != -1) {
      saveDataCollection(etdata, "redpacket-success4", 1);
    }
    if (_href.indexOf("/promotion/redpacket/success1") != -1) {
      saveDataCollection(etdata, "giftOneMonthCard", 1);
      purchaseGift(token, etdata);
    }

    $("#afterMeetingRedPacket").click(function () {
      purchaseGift(token, etdata);
    });

    $("#kaituan").click(function (event) {
      // https://event.mifen365.com/entry?scene=4bab37736d2
      event.preventDefault();
      var _href = $(this).attr("href");

      onOpenPage(_href);
    });
    function appendDataToUrl(url, data) {
      const query = Object.keys(data)
        .map((key) => `${key}=${data[key]}`)
        .join("&");
      return url + "?" + query;
    }
    $("#goBuy9_9").on("click", function () {
      var etData = window.tangClient
        ? window.tangClient.Meeting.getSessionData("qs_market_track_data")
        : "";
      onOpenPage(
        location.origin + "/pricing-product" + location.search,
        "specialMonthCard",
        2,
        etData
      );
    });

    $("#goBuy9_9_m").on("click", function () {
      console.log("_isMobile  :>> ", _isMobile);
      if (_isMobile) {
        onOpenPage(
          location.origin +
            "/register2023/ecommerceBuy" +
            location.search +
            "#/",
          "specialMonthCard",
          2
        );
      }
    });

    $(".wx-footer .button").click(function (event) {
      event.preventDefault();

      const search = window.location.search;
      const _href = $(this).attr("href");

      if (_href.indexOf("#") !== -1) {
        saveDataCollection("", "market-wx", 3);
        const _url = new URL(_href, location.origin);
        location.href = _url.origin + _url.pathname + search + _url.hash;
      } else {
        saveDataCollection("", "market-wx", 2);
        location.href = _href + search;
      }
      // if($(this).hasClass("button-normal")) {
      //   saveDataCollection('', "market-wx", 2);
      // }
    });
  });
})(jQuery);

function requestData(url, params, callback) {
  const AppKey = "u797f34lw4xz"; //获取AppKey
  const AppSecret = "0d31a7614fa72c9aa103e4a492493b2d"; //获取AppSecret
  var CurTime = new Date().getTime(); //获取当前时间戳
  var Nonce = generateRandomString(16); //获取随机字符串

  var CheckSum = CryptoJS.MD5(
    AppSecret + JSON.stringify(params) + CurTime + Nonce
  ).toString(); //获取CheckSum
  console.log("CheckSum  :>> ", CheckSum);
  jQuery.ajax({
    type: "POST",
    url: url,
    data: JSON.stringify(params),
    ContentType: "application/json",
    beforeSend: function (XMLHttpRequest) {
      //HttpUtility.UrlEncode
      XMLHttpRequest.setRequestHeader("AppKey", AppKey);
      XMLHttpRequest.setRequestHeader("CurTime", CurTime);
      XMLHttpRequest.setRequestHeader("CheckSum", CheckSum);
      XMLHttpRequest.setRequestHeader("Nonce", Nonce);
      XMLHttpRequest.setRequestHeader(
        "Content-Type",
        "application/json; charset=UTF-8"
      );
    },
    success: function (res) {
      callback(res);
    },
  });
}

function saveDataCollection(etdata, dataType, operationType) {
  requestData(
    baseUrl + "/dataCollection/v2/save",
    {
      etdata: decodeURIComponent(etdata),
      dataType: dataType, //'specialMonthCard',  //specialMonthCard: '9.9 特惠卡', giftOneMonthCard: '赠送一个月卡',
      operationType: operationType, //1：加载；2：点击
    },
    function (res) {
      console.log("res :>> ", res);
    }
  );
}

function onOpenPage(url, dataType, operationType, urlData) {
  // const isMB = isMobile();
  const etdata = urlData || getQueryStringRegExp("etdata"); //获取etdata参数
  let params = null;
  const _url = new URL(url, location.origin);
  let new_url = "";
  if (arguments.length > 1 && etdata) {
    params = JSON.parse(window.atob(etdata));

    let searchParams = new URLSearchParams(params).toString();
    console.log("queryString :>> ", searchParams);
    if (_url.search !== "") {
      searchParams = _url.search + "&" + searchParams;
    } else {
      searchParams = "?" + searchParams;
    }
    new_url = _url.origin + _url.pathname + searchParams + _url.hash;
  } else {
    new_url = url.indexOf("http") != -1 ? url : location.origin + url;
  }
  console.log("window.navigator.userAgent :>> ", window.navigator.userAgent);
  console.log("_isMobile :>> ", _isMobile);

  const userAgent = window.navigator.userAgent.toLowerCase();
  console.log("userAgent :>> ", userAgent);

  // if (userAgent.indexOf('quanshi')!==-1) {
  if (_isMobile) {
    console.log("E_Window_Event.OpenUrl :>> ", E_Window_Event.OpenUrl);
    windowUtil.getValue("openUrl", {
      url: new_url,
      container: "browser",
    });
  } else {
    window.open(urlData ? new_url + "&etdata=" + urlData : new_url, "_blank");
  }
  if (dataType) {
    saveDataCollection(etdata, dataType, operationType);
  }
}
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal) {
  Drupal.theme.progressBar = function (id) {
    return '<div id="' + id + '" class="progress" aria-live="polite">' + '<div class="progress__label">&nbsp;</div>' + '<div class="progress__track"><div class="progress__bar"></div></div>' + '<div class="progress__percentage"></div>' + '<div class="progress__description">&nbsp;</div>' + '</div>';
  };

  Drupal.ProgressBar = function (id, updateCallback, method, errorCallback) {
    this.id = id;
    this.method = method || 'GET';
    this.updateCallback = updateCallback;
    this.errorCallback = errorCallback;

    this.element = $(Drupal.theme('progressBar', id));
  };

  $.extend(Drupal.ProgressBar.prototype, {
    setProgress: function setProgress(percentage, message, label) {
      if (percentage >= 0 && percentage <= 100) {
        $(this.element).find('div.progress__bar').css('width', percentage + '%');
        $(this.element).find('div.progress__percentage').html(percentage + '%');
      }
      $('div.progress__description', this.element).html(message);
      $('div.progress__label', this.element).html(label);
      if (this.updateCallback) {
        this.updateCallback(percentage, message, this);
      }
    },
    startMonitoring: function startMonitoring(uri, delay) {
      this.delay = delay;
      this.uri = uri;
      this.sendPing();
    },
    stopMonitoring: function stopMonitoring() {
      clearTimeout(this.timer);

      this.uri = null;
    },
    sendPing: function sendPing() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (this.uri) {
        var pb = this;

        var uri = this.uri;
        if (uri.indexOf('?') === -1) {
          uri += '?';
        } else {
          uri += '&';
        }
        uri += '_format=json';
        $.ajax({
          type: this.method,
          url: uri,
          data: '',
          dataType: 'json',
          success: function success(progress) {
            if (progress.status === 0) {
              pb.displayError(progress.data);
              return;
            }

            pb.setProgress(progress.percentage, progress.message, progress.label);

            pb.timer = setTimeout(function () {
              pb.sendPing();
            }, pb.delay);
          },
          error: function error(xmlhttp) {
            var e = new Drupal.AjaxError(xmlhttp, pb.uri);
            pb.displayError('<pre>' + e.message + '</pre>');
          }
        });
      }
    },
    displayError: function displayError(string) {
      var error = $('<div class="messages messages--error"></div>').html(string);
      $(this.element).before(error).hide();

      if (this.errorCallback) {
        this.errorCallback(this);
      }
    }
  });
})(jQuery, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal) {
  Drupal.behaviors.responsiveImageAJAX = {
    attach: function attach() {
      if (window.picturefill) {
        window.picturefill();
      }
    }
  };
})(Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

(function ($, window, Drupal, drupalSettings) {
  Drupal.behaviors.AJAX = {
    attach: function attach(context, settings) {
      function loadAjaxBehavior(base) {
        var elementSettings = settings.ajax[base];
        if (typeof elementSettings.selector === 'undefined') {
          elementSettings.selector = '#' + base;
        }
        $(elementSettings.selector).once('drupal-ajax').each(function () {
          elementSettings.element = this;
          elementSettings.base = base;
          Drupal.ajax(elementSettings);
        });
      }

      Object.keys(settings.ajax || {}).forEach(function (base) {
        return loadAjaxBehavior(base);
      });

      Drupal.ajax.bindAjaxLinks(document.body);

      $('.use-ajax-submit').once('ajax').each(function () {
        var elementSettings = {};

        elementSettings.url = $(this.form).attr('action');

        elementSettings.setClick = true;

        elementSettings.event = 'click';

        elementSettings.progress = { type: 'throbber' };
        elementSettings.base = $(this).attr('id');
        elementSettings.element = this;

        Drupal.ajax(elementSettings);
      });
    },
    detach: function detach(context, settings, trigger) {
      if (trigger === 'unload') {
        Drupal.ajax.expired().forEach(function (instance) {
          Drupal.ajax.instances[instance.instanceIndex] = null;
        });
      }
    }
  };

  Drupal.AjaxError = function (xmlhttp, uri, customMessage) {
    var statusCode = void 0;
    var statusText = void 0;
    var responseText = void 0;
    if (xmlhttp.status) {
      statusCode = '\n' + Drupal.t('An AJAX HTTP error occurred.') + '\n' + Drupal.t('HTTP Result Code: !status', {
        '!status': xmlhttp.status
      });
    } else {
      statusCode = '\n' + Drupal.t('An AJAX HTTP request terminated abnormally.');
    }
    statusCode += '\n' + Drupal.t('Debugging information follows.');
    var pathText = '\n' + Drupal.t('Path: !uri', { '!uri': uri });
    statusText = '';

    try {
      statusText = '\n' + Drupal.t('StatusText: !statusText', {
        '!statusText': $.trim(xmlhttp.statusText)
      });
    } catch (e) {}

    responseText = '';

    try {
      responseText = '\n' + Drupal.t('ResponseText: !responseText', {
        '!responseText': $.trim(xmlhttp.responseText)
      });
    } catch (e) {}

    responseText = responseText.replace(/<("[^"]*"|'[^']*'|[^'">])*>/gi, '');
    responseText = responseText.replace(/[\n]+\s+/g, '\n');

    var readyStateText = xmlhttp.status === 0 ? '\n' + Drupal.t('ReadyState: !readyState', {
      '!readyState': xmlhttp.readyState
    }) : '';

    customMessage = customMessage ? '\n' + Drupal.t('CustomMessage: !customMessage', {
      '!customMessage': customMessage
    }) : '';

    this.message = statusCode + pathText + statusText + customMessage + responseText + readyStateText;

    this.name = 'AjaxError';
  };

  Drupal.AjaxError.prototype = new Error();
  Drupal.AjaxError.prototype.constructor = Drupal.AjaxError;

  Drupal.ajax = function (settings) {
    if (arguments.length !== 1) {
      throw new Error('Drupal.ajax() function must be called with one configuration object only');
    }

    var base = settings.base || false;
    var element = settings.element || false;
    delete settings.base;
    delete settings.element;

    if (!settings.progress && !element) {
      settings.progress = false;
    }

    var ajax = new Drupal.Ajax(base, element, settings);
    ajax.instanceIndex = Drupal.ajax.instances.length;
    Drupal.ajax.instances.push(ajax);

    return ajax;
  };

  Drupal.ajax.instances = [];

  Drupal.ajax.expired = function () {
    return Drupal.ajax.instances.filter(function (instance) {
      return instance && instance.element !== false && !document.body.contains(instance.element);
    });
  };

  Drupal.ajax.bindAjaxLinks = function (element) {
    $(element).find('.use-ajax').once('ajax').each(function (i, ajaxLink) {
      var $linkElement = $(ajaxLink);

      var elementSettings = {
        progress: { type: 'throbber' },
        dialogType: $linkElement.data('dialog-type'),
        dialog: $linkElement.data('dialog-options'),
        dialogRenderer: $linkElement.data('dialog-renderer'),
        base: $linkElement.attr('id'),
        element: ajaxLink
      };
      var href = $linkElement.attr('href');

      if (href) {
        elementSettings.url = href;
        elementSettings.event = 'click';
      }
      Drupal.ajax(elementSettings);
    });
  };

  Drupal.Ajax = function (base, element, elementSettings) {
    var defaults = {
      event: element ? 'mousedown' : null,
      keypress: true,
      selector: base ? '#' + base : null,
      effect: 'none',
      speed: 'none',
      method: 'replaceWith',
      progress: {
        type: 'throbber',
        message: Drupal.t('Please wait...')
      },
      submit: {
        js: true
      }
    };

    $.extend(this, defaults, elementSettings);

    this.commands = new Drupal.AjaxCommands();

    this.instanceIndex = false;

    if (this.wrapper) {
      this.wrapper = '#' + this.wrapper;
    }

    this.element = element;

    this.element_settings = elementSettings;

    this.elementSettings = elementSettings;

    if (this.element && this.element.form) {
      this.$form = $(this.element.form);
    }

    if (!this.url) {
      var $element = $(this.element);
      if ($element.is('a')) {
        this.url = $element.attr('href');
      } else if (this.element && element.form) {
        this.url = this.$form.attr('action');
      }
    }

    var originalUrl = this.url;

    this.url = this.url.replace(/\/nojs(\/|$|\?|#)/, '/ajax$1');

    if (drupalSettings.ajaxTrustedUrl[originalUrl]) {
      drupalSettings.ajaxTrustedUrl[this.url] = true;
    }

    var ajax = this;

    ajax.options = {
      url: ajax.url,
      data: ajax.submit,
      beforeSerialize: function beforeSerialize(elementSettings, options) {
        return ajax.beforeSerialize(elementSettings, options);
      },
      beforeSubmit: function beforeSubmit(formValues, elementSettings, options) {
        ajax.ajaxing = true;
        return ajax.beforeSubmit(formValues, elementSettings, options);
      },
      beforeSend: function beforeSend(xmlhttprequest, options) {
        ajax.ajaxing = true;
        return ajax.beforeSend(xmlhttprequest, options);
      },
      success: function success(response, status, xmlhttprequest) {
        if (typeof response === 'string') {
          response = $.parseJSON(response);
        }

        if (response !== null && !drupalSettings.ajaxTrustedUrl[ajax.url]) {
          if (xmlhttprequest.getResponseHeader('X-Drupal-Ajax-Token') !== '1') {
            var customMessage = Drupal.t('The response failed verification so will not be processed.');
            return ajax.error(xmlhttprequest, ajax.url, customMessage);
          }
        }

        return ajax.success(response, status);
      },
      complete: function complete(xmlhttprequest, status) {
        ajax.ajaxing = false;
        if (status === 'error' || status === 'parsererror') {
          return ajax.error(xmlhttprequest, ajax.url);
        }
      },

      dataType: 'json',
      jsonp: false,
      type: 'POST'
    };

    if (elementSettings.dialog) {
      ajax.options.data.dialogOptions = elementSettings.dialog;
    }

    if (ajax.options.url.indexOf('?') === -1) {
      ajax.options.url += '?';
    } else {
      ajax.options.url += '&';
    }

    var wrapper = 'drupal_' + (elementSettings.dialogType || 'ajax');
    if (elementSettings.dialogRenderer) {
      wrapper += '.' + elementSettings.dialogRenderer;
    }
    ajax.options.url += Drupal.ajax.WRAPPER_FORMAT + '=' + wrapper;

    $(ajax.element).on(elementSettings.event, function (event) {
      if (!drupalSettings.ajaxTrustedUrl[ajax.url] && !Drupal.url.isLocal(ajax.url)) {
        throw new Error(Drupal.t('The callback URL is not local and not trusted: !url', {
          '!url': ajax.url
        }));
      }
      return ajax.eventResponse(this, event);
    });

    if (elementSettings.keypress) {
      $(ajax.element).on('keypress', function (event) {
        return ajax.keypressResponse(this, event);
      });
    }

    if (elementSettings.prevent) {
      $(ajax.element).on(elementSettings.prevent, false);
    }
  };

  Drupal.ajax.WRAPPER_FORMAT = '_wrapper_format';

  Drupal.Ajax.AJAX_REQUEST_PARAMETER = '_drupal_ajax';

  Drupal.Ajax.prototype.execute = function () {
    if (this.ajaxing) {
      return;
    }

    try {
      this.beforeSerialize(this.element, this.options);

      return $.ajax(this.options);
    } catch (e) {
      this.ajaxing = false;
      window.alert('An error occurred while attempting to process ' + this.options.url + ': ' + e.message);

      return $.Deferred().reject();
    }
  };

  Drupal.Ajax.prototype.keypressResponse = function (element, event) {
    var ajax = this;

    if (event.which === 13 || event.which === 32 && element.type !== 'text' && element.type !== 'textarea' && element.type !== 'tel' && element.type !== 'number') {
      event.preventDefault();
      event.stopPropagation();
      $(element).trigger(ajax.elementSettings.event);
    }
  };

  Drupal.Ajax.prototype.eventResponse = function (element, event) {
    event.preventDefault();
    event.stopPropagation();

    var ajax = this;

    if (ajax.ajaxing) {
      return;
    }

    try {
      if (ajax.$form) {
        if (ajax.setClick) {
          element.form.clk = element;
        }

        ajax.$form.ajaxSubmit(ajax.options);
      } else {
        ajax.beforeSerialize(ajax.element, ajax.options);
        $.ajax(ajax.options);
      }
    } catch (e) {
      ajax.ajaxing = false;
      window.alert('An error occurred while attempting to process ' + ajax.options.url + ': ' + e.message);
    }
  };

  Drupal.Ajax.prototype.beforeSerialize = function (element, options) {
    if (this.$form && document.body.contains(this.$form.get(0))) {
      var settings = this.settings || drupalSettings;
      Drupal.detachBehaviors(this.$form.get(0), settings, 'serialize');
    }

    options.data[Drupal.Ajax.AJAX_REQUEST_PARAMETER] = 1;

    var pageState = drupalSettings.ajaxPageState;
    options.data['ajax_page_state[theme]'] = pageState.theme;
    options.data['ajax_page_state[theme_token]'] = pageState.theme_token;
    options.data['ajax_page_state[libraries]'] = pageState.libraries;
  };

  Drupal.Ajax.prototype.beforeSubmit = function (formValues, element, options) {};

  Drupal.Ajax.prototype.beforeSend = function (xmlhttprequest, options) {
    if (this.$form) {
      options.extraData = options.extraData || {};

      options.extraData.ajax_iframe_upload = '1';

      var v = $.fieldValue(this.element);
      if (v !== null) {
        options.extraData[this.element.name] = v;
      }
    }

    $(this.element).prop('disabled', true);

    if (!this.progress || !this.progress.type) {
      return;
    }

    var progressIndicatorMethod = 'setProgressIndicator' + this.progress.type.slice(0, 1).toUpperCase() + this.progress.type.slice(1).toLowerCase();
    if (progressIndicatorMethod in this && typeof this[progressIndicatorMethod] === 'function') {
      this[progressIndicatorMethod].call(this);
    }
  };

  Drupal.theme.ajaxProgressThrobber = function (message) {
    var messageMarkup = typeof message === 'string' ? Drupal.theme('ajaxProgressMessage', message) : '';
    var throbber = '<div class="throbber">&nbsp;</div>';

    return '<div class="ajax-progress ajax-progress-throbber">' + throbber + messageMarkup + '</div>';
  };

  Drupal.theme.ajaxProgressIndicatorFullscreen = function () {
    return '<div class="ajax-progress ajax-progress-fullscreen">&nbsp;</div>';
  };

  Drupal.theme.ajaxProgressMessage = function (message) {
    return '<div class="message">' + message + '</div>';
  };

  Drupal.theme.ajaxProgressBar = function ($element) {
    return $('<div class="ajax-progress ajax-progress-bar"></div>').append($element);
  };

  Drupal.Ajax.prototype.setProgressIndicatorBar = function () {
    var progressBar = new Drupal.ProgressBar('ajax-progress-' + this.element.id, $.noop, this.progress.method, $.noop);
    if (this.progress.message) {
      progressBar.setProgress(-1, this.progress.message);
    }
    if (this.progress.url) {
      progressBar.startMonitoring(this.progress.url, this.progress.interval || 1500);
    }
    this.progress.element = $(Drupal.theme('ajaxProgressBar', progressBar.element));
    this.progress.object = progressBar;
    $(this.element).after(this.progress.element);
  };

  Drupal.Ajax.prototype.setProgressIndicatorThrobber = function () {
    this.progress.element = $(Drupal.theme('ajaxProgressThrobber', this.progress.message));
    $(this.element).after(this.progress.element);
  };

  Drupal.Ajax.prototype.setProgressIndicatorFullscreen = function () {
    this.progress.element = $(Drupal.theme('ajaxProgressIndicatorFullscreen'));
    $('body').append(this.progress.element);
  };

  Drupal.Ajax.prototype.success = function (response, status) {
    var _this = this;

    if (this.progress.element) {
      $(this.progress.element).remove();
    }
    if (this.progress.object) {
      this.progress.object.stopMonitoring();
    }
    $(this.element).prop('disabled', false);

    var elementParents = $(this.element).parents('[data-drupal-selector]').addBack().toArray();

    var focusChanged = false;
    Object.keys(response || {}).forEach(function (i) {
      if (response[i].command && _this.commands[response[i].command]) {
        _this.commands[response[i].command](_this, response[i], status);
        if (response[i].command === 'invoke' && response[i].method === 'focus') {
          focusChanged = true;
        }
      }
    });

    if (!focusChanged && this.element && !$(this.element).data('disable-refocus')) {
      var target = false;

      for (var n = elementParents.length - 1; !target && n >= 0; n--) {
        target = document.querySelector('[data-drupal-selector="' + elementParents[n].getAttribute('data-drupal-selector') + '"]');
      }

      if (target) {
        $(target).trigger('focus');
      }
    }

    if (this.$form && document.body.contains(this.$form.get(0))) {
      var settings = this.settings || drupalSettings;
      Drupal.attachBehaviors(this.$form.get(0), settings);
    }

    this.settings = null;
  };

  Drupal.Ajax.prototype.getEffect = function (response) {
    var type = response.effect || this.effect;
    var speed = response.speed || this.speed;

    var effect = {};
    if (type === 'none') {
      effect.showEffect = 'show';
      effect.hideEffect = 'hide';
      effect.showSpeed = '';
    } else if (type === 'fade') {
      effect.showEffect = 'fadeIn';
      effect.hideEffect = 'fadeOut';
      effect.showSpeed = speed;
    } else {
      effect.showEffect = type + 'Toggle';
      effect.hideEffect = type + 'Toggle';
      effect.showSpeed = speed;
    }

    return effect;
  };

  Drupal.Ajax.prototype.error = function (xmlhttprequest, uri, customMessage) {
    if (this.progress.element) {
      $(this.progress.element).remove();
    }
    if (this.progress.object) {
      this.progress.object.stopMonitoring();
    }

    $(this.wrapper).show();

    $(this.element).prop('disabled', false);

    if (this.$form && document.body.contains(this.$form.get(0))) {
      var settings = this.settings || drupalSettings;
      Drupal.attachBehaviors(this.$form.get(0), settings);
    }
    throw new Drupal.AjaxError(xmlhttprequest, uri, customMessage);
  };

  Drupal.theme.ajaxWrapperNewContent = function ($newContent, ajax, response) {
    return (response.effect || ajax.effect) !== 'none' && $newContent.filter(function (i) {
      return !($newContent[i].nodeName === '#comment' || $newContent[i].nodeName === '#text' && /^(\s|\n|\r)*$/.test($newContent[i].textContent));
    }).length > 1 ? Drupal.theme('ajaxWrapperMultipleRootElements', $newContent) : $newContent;
  };

  Drupal.theme.ajaxWrapperMultipleRootElements = function ($elements) {
    return $('<div></div>').append($elements);
  };

  Drupal.AjaxCommands = function () {};
  Drupal.AjaxCommands.prototype = {
    insert: function insert(ajax, response) {
      var $wrapper = response.selector ? $(response.selector) : $(ajax.wrapper);
      var method = response.method || ajax.method;
      var effect = ajax.getEffect(response);

      var settings = response.settings || ajax.settings || drupalSettings;

      var $newContent = $($.parseHTML(response.data, document, true));

      $newContent = Drupal.theme('ajaxWrapperNewContent', $newContent, ajax, response);

      switch (method) {
        case 'html':
        case 'replaceWith':
        case 'replaceAll':
        case 'empty':
        case 'remove':
          Drupal.detachBehaviors($wrapper.get(0), settings);
          break;
        default:
          break;
      }

      $wrapper[method]($newContent);

      if (effect.showEffect !== 'show') {
        $newContent.hide();
      }

      var $ajaxNewContent = $newContent.find('.ajax-new-content');
      if ($ajaxNewContent.length) {
        $ajaxNewContent.hide();
        $newContent.show();
        $ajaxNewContent[effect.showEffect](effect.showSpeed);
      } else if (effect.showEffect !== 'show') {
        $newContent[effect.showEffect](effect.showSpeed);
      }

      if ($newContent.parents('html').length) {
        $newContent.each(function (index, element) {
          if (element.nodeType === Node.ELEMENT_NODE) {
            Drupal.attachBehaviors(element, settings);
          }
        });
      }
    },
    remove: function remove(ajax, response, status) {
      var settings = response.settings || ajax.settings || drupalSettings;
      $(response.selector).each(function () {
        Drupal.detachBehaviors(this, settings);
      }).remove();
    },
    changed: function changed(ajax, response, status) {
      var $element = $(response.selector);
      if (!$element.hasClass('ajax-changed')) {
        $element.addClass('ajax-changed');
        if (response.asterisk) {
          $element.find(response.asterisk).append(' <abbr class="ajax-changed" title="' + Drupal.t('Changed') + '">*</abbr> ');
        }
      }
    },
    alert: function alert(ajax, response, status) {
      window.alert(response.text, response.title);
    },
    announce: function announce(ajax, response) {
      if (response.priority) {
        Drupal.announce(response.text, response.priority);
      } else {
        Drupal.announce(response.text);
      }
    },
    redirect: function redirect(ajax, response, status) {
      window.location = response.url;
    },
    css: function css(ajax, response, status) {
      $(response.selector).css(response.argument);
    },
    settings: function settings(ajax, response, status) {
      var ajaxSettings = drupalSettings.ajax;

      if (ajaxSettings) {
        Drupal.ajax.expired().forEach(function (instance) {

          if (instance.selector) {
            var selector = instance.selector.replace('#', '');
            if (selector in ajaxSettings) {
              delete ajaxSettings[selector];
            }
          }
        });
      }

      if (response.merge) {
        $.extend(true, drupalSettings, response.settings);
      } else {
        ajax.settings = response.settings;
      }
    },
    data: function data(ajax, response, status) {
      $(response.selector).data(response.name, response.value);
    },
    invoke: function invoke(ajax, response, status) {
      var $element = $(response.selector);
      $element[response.method].apply($element, _toConsumableArray(response.args));
    },
    restripe: function restripe(ajax, response, status) {
      $(response.selector).find('> tbody > tr:visible, > tr:visible').removeClass('odd even').filter(':even').addClass('odd').end().filter(':odd').addClass('even');
    },
    update_build_id: function update_build_id(ajax, response, status) {
      $('input[name="form_build_id"][value="' + response.old + '"]').val(response.new);
    },
    add_css: function add_css(ajax, response, status) {
      $('head').prepend(response.data);
    },
    message: function message(ajax, response) {
      var messages = new Drupal.Message(document.querySelector(response.messageWrapperQuerySelector));
      if (response.clearPrevious) {
        messages.clear();
      }
      messages.add(response.message, response.messageOptions);
    }
  };
})(jQuery, window, Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal) {
  Drupal.theme.ajaxProgressBar = function ($element) {
    return $element.addClass('ajax-progress ajax-progress-bar');
  };
})(Drupal);;
// JavaScript Document
/**
 * by 王志伟
 * 文本框输入文本或聚焦后  placeholder 标签 消失
 */

function setCookie(name, value) {
  var Days = 1;
  var exp = new Date();
  exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
  document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}
// 设置cookie 到当天23:59:59
function setCookie2(name, value) {
  var curDate = new Date();
  //当前时间戳
  var curTamp = curDate.getTime();
  //当日凌晨的时间戳,减去一毫秒是为了防止后续得到的时间不会达到00:00:00的状态
  var curWeeHours = new Date(curDate.toLocaleDateString()).getTime() - 1;
  //当日已经过去的时间（毫秒）
  var passedTamp = curTamp - curWeeHours;
  //当日剩余时间
  var leftTamp = 24 * 60 * 60 * 1000 - passedTamp;
  var leftTime = new Date();
  leftTime.setTime(leftTamp + curTamp);
  //创建cookie
  document.cookie = name + "=" + escape(value) + ";expires=" + leftTime.toGMTString();
}
function getCookie(name) {
  var arr,
    reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if ((arr = document.cookie.match(reg))) return unescape(arr[2]);
  else return null;
}
function delCookie(name) {
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var cval = getCookie(name);
  if (cval != null) document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}

function getQueryStringRegExp(t) {
  //var i=new RegExp("(^|\\?|&)"+t+"=([^&^#]*)(\\s|&|$)","i");
  var i = new RegExp("(^|\\?|&)" + t + "=([^&^#]*)(\\s|&|#|$)", "i");
  return i.test(location.href) ? decodeURI(RegExp.$2.replace(/\+/g, " ")) : "";
}

//判断浏览器是否支持Video标签
function understands_video() {
  return !!document.createElement("video").canPlayType; // boolean
}

/*
 * normal()   与  flashError()
 * 抖动错误提示
 * */
function normal(dom, times) {
  var obj = dom;
  obj.css({ "background-color": "#fff" });
  if (times < 0) {
    return;
  }
  times = times - 1;
  setTimeout(function () {
    flashError(dom, times);
  }, 150);
}

function flashError(dom, times) {
  var obj = dom;
  obj.css({ "background-color": "#f4736d" });
  times = times - 1;
  setTimeout(function () {
    normal(dom, times);
  }, 150);
}

// 在光标处插入内容
function insertAtCursor(myField, myValue) {
  //IE support
  if (document.selection) {
    myField.focus();
    sel = document.selection.createRange();
    sel.text = myValue;
    sel.select();
  }
  //MOZILLA/NETSCAPE support
  else if (myField.selectionStart || myField.selectionStart == "0") {
    var startPos = myField.selectionStart;
    var endPos = myField.selectionEnd;
    // save scrollTop before insert
    var restoreTop = myField.scrollTop;
    myField.value = myField.value.substring(0, startPos) + myValue + myField.value.substring(endPos, myField.value.length);
    if (restoreTop > 0) {
      // restore previous scrollTop
      myField.scrollTop = restoreTop;
    }
    myField.focus();
    myField.selectionStart = startPos + myValue.length;
    myField.selectionEnd = startPos + myValue.length;
  } else {
    myField.value += myValue;
    myField.focus();
  }
}

//同时兼容ie和ff的写法
function getEvent() {
  if (document.all) return window.event;
  func = getEvent.caller;
  while (func != null) {
    var arg0 = func.arguments[0];
    if (arg0) {
      if (arg0.constructor == Event || arg0.constructor == MouseEvent || (typeof arg0 == "object" && arg0.preventDefault && arg0.stopPropagation)) {
        return arg0;
      }
    }
    func = func.caller;
  }
  return null;
}

function setIframeHeight(id) {
  try {
    var iframe = document.getElementById(id);
    if (iframe.attachEvent) {
      iframe.attachEvent("onload", function () {
        iframe.height = iframe.contentWindow.document.documentElement.scrollHeight;
      });
      return;
    } else {
      iframe.onload = function () {
        iframe.height = iframe.contentDocument.body.scrollHeight;
      };
      return;
    }
  } catch (e) {
    throw new Error("setIframeHeight Error");
  }
}
/**
 * 判断浏览器是否支持某一个CSS3属性
 * @param {String} 属性名称
 * @return {Boolean} true/false
 * @version 1.0
 * @author ydr.me
 * 2014年4月4日14:47:19
 */

function supportCss3(style) {
  var prefix = ["webkit", "Moz", "ms", "o"],
    i,
    humpString = [],
    htmlStyle = document.documentElement.style,
    _toHumb = function (string) {
      return string.replace(/-(\w)/g, function ($0, $1) {
        return $1.toUpperCase();
      });
    };

  for (i in prefix) humpString.push(_toHumb(prefix[i] + "-" + style));

  humpString.push(_toHumb(style));

  for (i in humpString) if (humpString[i] in htmlStyle) return true;

  return false;
}
function isMobile() {
    var ua = navigator.userAgent
    var isUAIndicatesMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|HarmonyOS/i.test(ua)
    var isSmallScreen = window.innerWidth <= 768
    var isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    return isUAIndicatesMobile || (isSmallScreen && isTouchDevice)
}

(function ($) {
  $.fn.extend({
    removePrevLabel: function () {
      $(this).keyup(function () {
        if ($(this).val() == "") {
          $(this).prev().show();
          if ($(this).next().is(".reset-input")) {
            $(this).next().hide();
          }
        } else {
          $(this).prev().hide();
          if ($(this).next().is(".reset-input")) {
            $(this).next().show();
          }
        }
      });
      $(this)
        .focus(function () {
          if ($(this).val() == "") {
            if ($.support.opacity) {
              $(this).prev("label").css({
                opacity: "0.5",
              });
            } else {
              $(this).prev("label").hide();
            }
          }
        })
        .blur(function () {
          if ($(this).val() == "") {
            if ($.support.opacity) {
              $(this).prev("label").css({
                opacity: "1.0",
              });
            } else {
              $(this).prev("label").show();
            }
          }
        });
    },
  });

  /*
   * 网站 ？滑过显示提示信息
   */
  function showTips(t, id) {
    var $this = $(t);
    var offsetT = $this.offset().top,
      offsetL = $this.offset().left + $this.width();

    $("#" + id)
      .css({
        left: offsetL + 5,
        top: offsetT - 10,
      })
      .siblings(".help-tip")
      .fadeOut(100);
    $("#" + id)
      .show()
      .animate(
        {
          left: offsetL + 10,
          top: offsetT - 10,
        },
        100
      );
  }

  //点击弹出框靠左靠下对齐
  function toggleBoxByLeft(e, id, t, x, y) {
    e = e || window.event;
    e.preventDefault();
    $("div[data-type='pop']").hide().removeClass("fadeInDown animated");
    var offsetT = $(t).offset().top + $(t).outerHeight(),
      offsetL = $(t).offset().left; //+$(t).outerWidth();
    var idWidth = $("#" + id).outerWidth();
    var x = x || 0,
      y = y || 0;

    $("#" + id)
      .toggle()
      .css({
        left: offsetL - x,
        top: offsetT + y,
      })
      .toggleClass("fadeInDown animated");

    e.stopPropagation();
  }

  //点击弹出框靠右靠下对齐
  function toggleBoxByRight(e, id, t, x, y) {
    e = e || window.event;
    e.preventDefault();
    //$("div[data-type='pop']").hide().removeClass('fadeInDown animated');
    var offsetT = $(t).offset().top + $(t).outerHeight(),
      offsetL = $(t).offset().left + $(t).outerWidth();
    var idWidth = $("#" + id).outerWidth();
    var x = x || 0,
      y = y || 0;

    $("#" + id)
      .toggle()
      .css({
        left: offsetL - idWidth + x,
        top: offsetT + y,
      })
      .toggleClass("fadeInDown animated");

    e.stopPropagation();
  }

  //切换弹出框
  function toggleLR(e, id) {
    e = e || window.event;
    e.preventDefault();

    //$("div[data-type='left-pop']").hide().removeClass('fadeInLeft animated');

    $("#" + id)
      .toggle()
      .toggleClass("fadeInLeft animated")
      .siblings("div[data-type='left-pop']")
      .hide()
      .removeClass("fadeInLeft animated");

    e.stopPropagation();
  }

  //平滑显示弹出框
  function showDialog(id) {
    $("#layer").fadeIn(300);
    $("#" + id).addClass("pop-down");
  }
  //平滑隐藏弹出框
  function hideDialog(id) {
    $("#layer").fadeOut(300);
    $("#" + id)
      .removeClass("pop-down")
      .addClass("pop-up");
    setTimeout(function () {
      $("#" + id)
        .stop(true, true)
        .removeClass("pop-up");
    }, 501);
  }

  //立即显示弹出框
  function showDialogSoon(id) {
    $("#layer").show();
    $("#" + id).show();
    if (
      $("#" + id)
        .children(".pop-content")
        .index() != -1
    ) {
      $("#" + id + " .pop-content").jScrollPane();
    }
  }

  //立即隐藏弹出框
  function hideDialogSoon(id) {
    $("#layer").hide();
    $("#" + id)
      .hide()
      .removeClass("scaleOut");
  }

  //复选框、单选框 美化
  function setupLabel() {
    if ($('label.checkbox input[type="checkbox"]').length) {
      $("label.checkbox").each(function () {
        $(this).removeClass("checked");
      });
      $('label.checkbox input[type="checkbox"]:checked').each(function () {
        $(this).parents("label").addClass("checked");
      });
    }
    if ($('label.radio input[type="radio"]').length) {
      $("label.radio").each(function () {
        $(this).removeClass("checked");
      });
      $('label.radio input[type="radio"]:checked').each(function () {
        $(this).parents("label").addClass("checked");
      });
    }
  }

  // function debounce(fn,delay) {
  // 	let clearTime = null;
  // 	return function(){
  // 		if(clearTime !== null )
  // 	}
  // }

  function generateRandomString(length) {
    let result = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return result;
  }
})(jQuery);
;
/**
 * Swiper 4.3.3
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://www.idangero.us/swiper/
 *
 * Copyright 2014-2018 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: June 5, 2018
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Swiper=t()}(this,function(){"use strict";var e="undefined"==typeof document?{body:{},addEventListener:function(){},removeEventListener:function(){},activeElement:{blur:function(){},nodeName:""},querySelector:function(){return null},querySelectorAll:function(){return[]},getElementById:function(){return null},createEvent:function(){return{initEvent:function(){}}},createElement:function(){return{children:[],childNodes:[],style:{},setAttribute:function(){},getElementsByTagName:function(){return[]}}},location:{hash:""}}:document,t="undefined"==typeof window?{document:e,navigator:{userAgent:""},location:{},history:{},CustomEvent:function(){return this},addEventListener:function(){},removeEventListener:function(){},getComputedStyle:function(){return{getPropertyValue:function(){return""}}},Image:function(){},Date:function(){},screen:{},setTimeout:function(){},clearTimeout:function(){}}:window,i=function(e){for(var t=0;t<e.length;t+=1)this[t]=e[t];return this.length=e.length,this};function s(s,a){var r=[],n=0;if(s&&!a&&s instanceof i)return s;if(s)if("string"==typeof s){var o,l,d=s.trim();if(d.indexOf("<")>=0&&d.indexOf(">")>=0){var h="div";for(0===d.indexOf("<li")&&(h="ul"),0===d.indexOf("<tr")&&(h="tbody"),0!==d.indexOf("<td")&&0!==d.indexOf("<th")||(h="tr"),0===d.indexOf("<tbody")&&(h="table"),0===d.indexOf("<option")&&(h="select"),(l=e.createElement(h)).innerHTML=d,n=0;n<l.childNodes.length;n+=1)r.push(l.childNodes[n])}else for(o=a||"#"!==s[0]||s.match(/[ .<>:~]/)?(a||e).querySelectorAll(s.trim()):[e.getElementById(s.trim().split("#")[1])],n=0;n<o.length;n+=1)o[n]&&r.push(o[n])}else if(s.nodeType||s===t||s===e)r.push(s);else if(s.length>0&&s[0].nodeType)for(n=0;n<s.length;n+=1)r.push(s[n]);return new i(r)}function a(e){for(var t=[],i=0;i<e.length;i+=1)-1===t.indexOf(e[i])&&t.push(e[i]);return t}s.fn=i.prototype,s.Class=i,s.Dom7=i;var r={addClass:function(e){if(void 0===e)return this;for(var t=e.split(" "),i=0;i<t.length;i+=1)for(var s=0;s<this.length;s+=1)void 0!==this[s].classList&&this[s].classList.add(t[i]);return this},removeClass:function(e){for(var t=e.split(" "),i=0;i<t.length;i+=1)for(var s=0;s<this.length;s+=1)void 0!==this[s].classList&&this[s].classList.remove(t[i]);return this},hasClass:function(e){return!!this[0]&&this[0].classList.contains(e)},toggleClass:function(e){for(var t=e.split(" "),i=0;i<t.length;i+=1)for(var s=0;s<this.length;s+=1)void 0!==this[s].classList&&this[s].classList.toggle(t[i]);return this},attr:function(e,t){var i=arguments;if(1===arguments.length&&"string"==typeof e)return this[0]?this[0].getAttribute(e):void 0;for(var s=0;s<this.length;s+=1)if(2===i.length)this[s].setAttribute(e,t);else for(var a in e)this[s][a]=e[a],this[s].setAttribute(a,e[a]);return this},removeAttr:function(e){for(var t=0;t<this.length;t+=1)this[t].removeAttribute(e);return this},data:function(e,t){var i;if(void 0!==t){for(var s=0;s<this.length;s+=1)(i=this[s]).dom7ElementDataStorage||(i.dom7ElementDataStorage={}),i.dom7ElementDataStorage[e]=t;return this}if(i=this[0]){if(i.dom7ElementDataStorage&&e in i.dom7ElementDataStorage)return i.dom7ElementDataStorage[e];var a=i.getAttribute("data-"+e);return a||void 0}},transform:function(e){for(var t=0;t<this.length;t+=1){var i=this[t].style;i.webkitTransform=e,i.transform=e}return this},transition:function(e){"string"!=typeof e&&(e+="ms");for(var t=0;t<this.length;t+=1){var i=this[t].style;i.webkitTransitionDuration=e,i.transitionDuration=e}return this},on:function(){for(var e,t=[],i=arguments.length;i--;)t[i]=arguments[i];var a=t[0],r=t[1],n=t[2],o=t[3];function l(e){var t=e.target;if(t){var i=e.target.dom7EventData||[];if(i.indexOf(e)<0&&i.unshift(e),s(t).is(r))n.apply(t,i);else for(var a=s(t).parents(),o=0;o<a.length;o+=1)s(a[o]).is(r)&&n.apply(a[o],i)}}function d(e){var t=e&&e.target?e.target.dom7EventData||[]:[];t.indexOf(e)<0&&t.unshift(e),n.apply(this,t)}"function"==typeof t[1]&&(a=(e=t)[0],n=e[1],o=e[2],r=void 0),o||(o=!1);for(var h,p=a.split(" "),c=0;c<this.length;c+=1){var u=this[c];if(r)for(h=0;h<p.length;h+=1){var v=p[h];u.dom7LiveListeners||(u.dom7LiveListeners={}),u.dom7LiveListeners[v]||(u.dom7LiveListeners[v]=[]),u.dom7LiveListeners[v].push({listener:n,proxyListener:l}),u.addEventListener(v,l,o)}else for(h=0;h<p.length;h+=1){var f=p[h];u.dom7Listeners||(u.dom7Listeners={}),u.dom7Listeners[f]||(u.dom7Listeners[f]=[]),u.dom7Listeners[f].push({listener:n,proxyListener:d}),u.addEventListener(f,d,o)}}return this},off:function(){for(var e,t=[],i=arguments.length;i--;)t[i]=arguments[i];var s=t[0],a=t[1],r=t[2],n=t[3];"function"==typeof t[1]&&(s=(e=t)[0],r=e[1],n=e[2],a=void 0),n||(n=!1);for(var o=s.split(" "),l=0;l<o.length;l+=1)for(var d=o[l],h=0;h<this.length;h+=1){var p=this[h],c=void 0;if(!a&&p.dom7Listeners?c=p.dom7Listeners[d]:a&&p.dom7LiveListeners&&(c=p.dom7LiveListeners[d]),c&&c.length)for(var u=c.length-1;u>=0;u-=1){var v=c[u];r&&v.listener===r?(p.removeEventListener(d,v.proxyListener,n),c.splice(u,1)):r||(p.removeEventListener(d,v.proxyListener,n),c.splice(u,1))}}return this},trigger:function(){for(var i=[],s=arguments.length;s--;)i[s]=arguments[s];for(var a=i[0].split(" "),r=i[1],n=0;n<a.length;n+=1)for(var o=a[n],l=0;l<this.length;l+=1){var d=this[l],h=void 0;try{h=new t.CustomEvent(o,{detail:r,bubbles:!0,cancelable:!0})}catch(t){(h=e.createEvent("Event")).initEvent(o,!0,!0),h.detail=r}d.dom7EventData=i.filter(function(e,t){return t>0}),d.dispatchEvent(h),d.dom7EventData=[],delete d.dom7EventData}return this},transitionEnd:function(e){var t,i=["webkitTransitionEnd","transitionend"],s=this;function a(r){if(r.target===this)for(e.call(this,r),t=0;t<i.length;t+=1)s.off(i[t],a)}if(e)for(t=0;t<i.length;t+=1)s.on(i[t],a);return this},outerWidth:function(e){if(this.length>0){if(e){var t=this.styles();return this[0].offsetWidth+parseFloat(t.getPropertyValue("margin-right"))+parseFloat(t.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null},outerHeight:function(e){if(this.length>0){if(e){var t=this.styles();return this[0].offsetHeight+parseFloat(t.getPropertyValue("margin-top"))+parseFloat(t.getPropertyValue("margin-bottom"))}return this[0].offsetHeight}return null},offset:function(){if(this.length>0){var i=this[0],s=i.getBoundingClientRect(),a=e.body,r=i.clientTop||a.clientTop||0,n=i.clientLeft||a.clientLeft||0,o=i===t?t.scrollY:i.scrollTop,l=i===t?t.scrollX:i.scrollLeft;return{top:s.top+o-r,left:s.left+l-n}}return null},css:function(e,i){var s;if(1===arguments.length){if("string"!=typeof e){for(s=0;s<this.length;s+=1)for(var a in e)this[s].style[a]=e[a];return this}if(this[0])return t.getComputedStyle(this[0],null).getPropertyValue(e)}if(2===arguments.length&&"string"==typeof e){for(s=0;s<this.length;s+=1)this[s].style[e]=i;return this}return this},each:function(e){if(!e)return this;for(var t=0;t<this.length;t+=1)if(!1===e.call(this[t],t,this[t]))return this;return this},html:function(e){if(void 0===e)return this[0]?this[0].innerHTML:void 0;for(var t=0;t<this.length;t+=1)this[t].innerHTML=e;return this},text:function(e){if(void 0===e)return this[0]?this[0].textContent.trim():null;for(var t=0;t<this.length;t+=1)this[t].textContent=e;return this},is:function(a){var r,n,o=this[0];if(!o||void 0===a)return!1;if("string"==typeof a){if(o.matches)return o.matches(a);if(o.webkitMatchesSelector)return o.webkitMatchesSelector(a);if(o.msMatchesSelector)return o.msMatchesSelector(a);for(r=s(a),n=0;n<r.length;n+=1)if(r[n]===o)return!0;return!1}if(a===e)return o===e;if(a===t)return o===t;if(a.nodeType||a instanceof i){for(r=a.nodeType?[a]:a,n=0;n<r.length;n+=1)if(r[n]===o)return!0;return!1}return!1},index:function(){var e,t=this[0];if(t){for(e=0;null!==(t=t.previousSibling);)1===t.nodeType&&(e+=1);return e}},eq:function(e){if(void 0===e)return this;var t,s=this.length;return new i(e>s-1?[]:e<0?(t=s+e)<0?[]:[this[t]]:[this[e]])},append:function(){for(var t,s=[],a=arguments.length;a--;)s[a]=arguments[a];for(var r=0;r<s.length;r+=1){t=s[r];for(var n=0;n<this.length;n+=1)if("string"==typeof t){var o=e.createElement("div");for(o.innerHTML=t;o.firstChild;)this[n].appendChild(o.firstChild)}else if(t instanceof i)for(var l=0;l<t.length;l+=1)this[n].appendChild(t[l]);else this[n].appendChild(t)}return this},prepend:function(t){var s,a;for(s=0;s<this.length;s+=1)if("string"==typeof t){var r=e.createElement("div");for(r.innerHTML=t,a=r.childNodes.length-1;a>=0;a-=1)this[s].insertBefore(r.childNodes[a],this[s].childNodes[0])}else if(t instanceof i)for(a=0;a<t.length;a+=1)this[s].insertBefore(t[a],this[s].childNodes[0]);else this[s].insertBefore(t,this[s].childNodes[0]);return this},next:function(e){return this.length>0?e?this[0].nextElementSibling&&s(this[0].nextElementSibling).is(e)?new i([this[0].nextElementSibling]):new i([]):this[0].nextElementSibling?new i([this[0].nextElementSibling]):new i([]):new i([])},nextAll:function(e){var t=[],a=this[0];if(!a)return new i([]);for(;a.nextElementSibling;){var r=a.nextElementSibling;e?s(r).is(e)&&t.push(r):t.push(r),a=r}return new i(t)},prev:function(e){if(this.length>0){var t=this[0];return e?t.previousElementSibling&&s(t.previousElementSibling).is(e)?new i([t.previousElementSibling]):new i([]):t.previousElementSibling?new i([t.previousElementSibling]):new i([])}return new i([])},prevAll:function(e){var t=[],a=this[0];if(!a)return new i([]);for(;a.previousElementSibling;){var r=a.previousElementSibling;e?s(r).is(e)&&t.push(r):t.push(r),a=r}return new i(t)},parent:function(e){for(var t=[],i=0;i<this.length;i+=1)null!==this[i].parentNode&&(e?s(this[i].parentNode).is(e)&&t.push(this[i].parentNode):t.push(this[i].parentNode));return s(a(t))},parents:function(e){for(var t=[],i=0;i<this.length;i+=1)for(var r=this[i].parentNode;r;)e?s(r).is(e)&&t.push(r):t.push(r),r=r.parentNode;return s(a(t))},closest:function(e){var t=this;return void 0===e?new i([]):(t.is(e)||(t=t.parents(e).eq(0)),t)},find:function(e){for(var t=[],s=0;s<this.length;s+=1)for(var a=this[s].querySelectorAll(e),r=0;r<a.length;r+=1)t.push(a[r]);return new i(t)},children:function(e){for(var t=[],r=0;r<this.length;r+=1)for(var n=this[r].childNodes,o=0;o<n.length;o+=1)e?1===n[o].nodeType&&s(n[o]).is(e)&&t.push(n[o]):1===n[o].nodeType&&t.push(n[o]);return new i(a(t))},remove:function(){for(var e=0;e<this.length;e+=1)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this},add:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var i,a;for(i=0;i<e.length;i+=1){var r=s(e[i]);for(a=0;a<r.length;a+=1)this[this.length]=r[a],this.length+=1}return this},styles:function(){return this[0]?t.getComputedStyle(this[0],null):{}}};Object.keys(r).forEach(function(e){s.fn[e]=r[e]});var n,o,l,d={deleteProps:function(e){var t=e;Object.keys(t).forEach(function(e){try{t[e]=null}catch(e){}try{delete t[e]}catch(e){}})},nextTick:function(e,t){return void 0===t&&(t=0),setTimeout(e,t)},now:function(){return Date.now()},getTranslate:function(e,i){var s,a,r;void 0===i&&(i="x");var n=t.getComputedStyle(e,null);return t.WebKitCSSMatrix?((a=n.transform||n.webkitTransform).split(",").length>6&&(a=a.split(", ").map(function(e){return e.replace(",",".")}).join(", ")),r=new t.WebKitCSSMatrix("none"===a?"":a)):s=(r=n.MozTransform||n.OTransform||n.MsTransform||n.msTransform||n.transform||n.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,")).toString().split(","),"x"===i&&(a=t.WebKitCSSMatrix?r.m41:16===s.length?parseFloat(s[12]):parseFloat(s[4])),"y"===i&&(a=t.WebKitCSSMatrix?r.m42:16===s.length?parseFloat(s[13]):parseFloat(s[5])),a||0},parseUrlQuery:function(e){var i,s,a,r,n={},o=e||t.location.href;if("string"==typeof o&&o.length)for(r=(s=(o=o.indexOf("?")>-1?o.replace(/\S*\?/,""):"").split("&").filter(function(e){return""!==e})).length,i=0;i<r;i+=1)a=s[i].replace(/#\S+/g,"").split("="),n[decodeURIComponent(a[0])]=void 0===a[1]?void 0:decodeURIComponent(a[1])||"";return n},isObject:function(e){return"object"==typeof e&&null!==e&&e.constructor&&e.constructor===Object},extend:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];for(var i=Object(e[0]),s=1;s<e.length;s+=1){var a=e[s];if(void 0!==a&&null!==a)for(var r=Object.keys(Object(a)),n=0,o=r.length;n<o;n+=1){var l=r[n],h=Object.getOwnPropertyDescriptor(a,l);void 0!==h&&h.enumerable&&(d.isObject(i[l])&&d.isObject(a[l])?d.extend(i[l],a[l]):!d.isObject(i[l])&&d.isObject(a[l])?(i[l]={},d.extend(i[l],a[l])):i[l]=a[l])}}return i}},h=(l=e.createElement("div"),{touch:t.Modernizr&&!0===t.Modernizr.touch||!!("ontouchstart"in t||t.DocumentTouch&&e instanceof t.DocumentTouch),pointerEvents:!(!t.navigator.pointerEnabled&&!t.PointerEvent),prefixedPointerEvents:!!t.navigator.msPointerEnabled,transition:(o=l.style,"transition"in o||"webkitTransition"in o||"MozTransition"in o),transforms3d:t.Modernizr&&!0===t.Modernizr.csstransforms3d||(n=l.style,"webkitPerspective"in n||"MozPerspective"in n||"OPerspective"in n||"MsPerspective"in n||"perspective"in n),flexbox:function(){for(var e=l.style,t="alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "),i=0;i<t.length;i+=1)if(t[i]in e)return!0;return!1}(),observer:"MutationObserver"in t||"WebkitMutationObserver"in t,passiveListener:function(){var e=!1;try{var i=Object.defineProperty({},"passive",{get:function(){e=!0}});t.addEventListener("testPassiveListener",null,i)}catch(e){}return e}(),gestures:"ongesturestart"in t}),p=function(e){void 0===e&&(e={});var t=this;t.params=e,t.eventsListeners={},t.params&&t.params.on&&Object.keys(t.params.on).forEach(function(e){t.on(e,t.params.on[e])})},c={components:{configurable:!0}};p.prototype.on=function(e,t,i){var s=this;if("function"!=typeof t)return s;var a=i?"unshift":"push";return e.split(" ").forEach(function(e){s.eventsListeners[e]||(s.eventsListeners[e]=[]),s.eventsListeners[e][a](t)}),s},p.prototype.once=function(e,t,i){var s=this;if("function"!=typeof t)return s;return s.on(e,function i(){for(var a=[],r=arguments.length;r--;)a[r]=arguments[r];t.apply(s,a),s.off(e,i)},i)},p.prototype.off=function(e,t){var i=this;return i.eventsListeners?(e.split(" ").forEach(function(e){void 0===t?i.eventsListeners[e]=[]:i.eventsListeners[e].forEach(function(s,a){s===t&&i.eventsListeners[e].splice(a,1)})}),i):i},p.prototype.emit=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var i,s,a,r=this;return r.eventsListeners?("string"==typeof e[0]||Array.isArray(e[0])?(i=e[0],s=e.slice(1,e.length),a=r):(i=e[0].events,s=e[0].data,a=e[0].context||r),(Array.isArray(i)?i:i.split(" ")).forEach(function(e){if(r.eventsListeners&&r.eventsListeners[e]){var t=[];r.eventsListeners[e].forEach(function(e){t.push(e)}),t.forEach(function(e){e.apply(a,s)})}}),r):r},p.prototype.useModulesParams=function(e){var t=this;t.modules&&Object.keys(t.modules).forEach(function(i){var s=t.modules[i];s.params&&d.extend(e,s.params)})},p.prototype.useModules=function(e){void 0===e&&(e={});var t=this;t.modules&&Object.keys(t.modules).forEach(function(i){var s=t.modules[i],a=e[i]||{};s.instance&&Object.keys(s.instance).forEach(function(e){var i=s.instance[e];t[e]="function"==typeof i?i.bind(t):i}),s.on&&t.on&&Object.keys(s.on).forEach(function(e){t.on(e,s.on[e])}),s.create&&s.create.bind(t)(a)})},c.components.set=function(e){this.use&&this.use(e)},p.installModule=function(e){for(var t=[],i=arguments.length-1;i-- >0;)t[i]=arguments[i+1];var s=this;s.prototype.modules||(s.prototype.modules={});var a=e.name||Object.keys(s.prototype.modules).length+"_"+d.now();return s.prototype.modules[a]=e,e.proto&&Object.keys(e.proto).forEach(function(t){s.prototype[t]=e.proto[t]}),e.static&&Object.keys(e.static).forEach(function(t){s[t]=e.static[t]}),e.install&&e.install.apply(s,t),s},p.use=function(e){for(var t=[],i=arguments.length-1;i-- >0;)t[i]=arguments[i+1];var s=this;return Array.isArray(e)?(e.forEach(function(e){return s.installModule(e)}),s):s.installModule.apply(s,[e].concat(t))},Object.defineProperties(p,c);var u={updateSize:function(){var e,t,i=this.$el;e=void 0!==this.params.width?this.params.width:i[0].clientWidth,t=void 0!==this.params.height?this.params.height:i[0].clientHeight,0===e&&this.isHorizontal()||0===t&&this.isVertical()||(e=e-parseInt(i.css("padding-left"),10)-parseInt(i.css("padding-right"),10),t=t-parseInt(i.css("padding-top"),10)-parseInt(i.css("padding-bottom"),10),d.extend(this,{width:e,height:t,size:this.isHorizontal()?e:t}))},updateSlides:function(){var e=this.params,i=this.$wrapperEl,s=this.size,a=this.rtlTranslate,r=this.wrongRTL,n=this.virtual&&e.virtual.enabled,o=n?this.virtual.slides.length:this.slides.length,l=i.children("."+this.params.slideClass),p=n?this.virtual.slides.length:l.length,c=[],u=[],v=[],f=e.slidesOffsetBefore;"function"==typeof f&&(f=e.slidesOffsetBefore.call(this));var m=e.slidesOffsetAfter;"function"==typeof m&&(m=e.slidesOffsetAfter.call(this));var g=this.snapGrid.length,b=this.snapGrid.length,w=e.spaceBetween,y=-f,x=0,E=0;if(void 0!==s){var T,S;"string"==typeof w&&w.indexOf("%")>=0&&(w=parseFloat(w.replace("%",""))/100*s),this.virtualSize=-w,a?l.css({marginLeft:"",marginTop:""}):l.css({marginRight:"",marginBottom:""}),e.slidesPerColumn>1&&(T=Math.floor(p/e.slidesPerColumn)===p/this.params.slidesPerColumn?p:Math.ceil(p/e.slidesPerColumn)*e.slidesPerColumn,"auto"!==e.slidesPerView&&"row"===e.slidesPerColumnFill&&(T=Math.max(T,e.slidesPerView*e.slidesPerColumn)));for(var C,M=e.slidesPerColumn,z=T/M,k=z-(e.slidesPerColumn*z-p),P=0;P<p;P+=1){S=0;var $=l.eq(P);if(e.slidesPerColumn>1){var L=void 0,I=void 0,D=void 0;"column"===e.slidesPerColumnFill?(D=P-(I=Math.floor(P/M))*M,(I>k||I===k&&D===M-1)&&(D+=1)>=M&&(D=0,I+=1),L=I+D*T/M,$.css({"-webkit-box-ordinal-group":L,"-moz-box-ordinal-group":L,"-ms-flex-order":L,"-webkit-order":L,order:L})):I=P-(D=Math.floor(P/z))*z,$.css("margin-"+(this.isHorizontal()?"top":"left"),0!==D&&e.spaceBetween&&e.spaceBetween+"px").attr("data-swiper-column",I).attr("data-swiper-row",D)}if("none"!==$.css("display")){if("auto"===e.slidesPerView){var O=t.getComputedStyle($[0],null),A=$[0].style.transform,G=$[0].style.webkitTransform;A&&($[0].style.transform="none"),G&&($[0].style.webkitTransform="none"),S=this.isHorizontal()?$[0].getBoundingClientRect().width+parseFloat(O.getPropertyValue("margin-left"))+parseFloat(O.getPropertyValue("margin-right")):$[0].getBoundingClientRect().height+parseFloat(O.getPropertyValue("margin-top"))+parseFloat(O.getPropertyValue("margin-bottom")),A&&($[0].style.transform=A),G&&($[0].style.webkitTransform=G),e.roundLengths&&(S=Math.floor(S))}else S=(s-(e.slidesPerView-1)*w)/e.slidesPerView,e.roundLengths&&(S=Math.floor(S)),l[P]&&(this.isHorizontal()?l[P].style.width=S+"px":l[P].style.height=S+"px");l[P]&&(l[P].swiperSlideSize=S),v.push(S),e.centeredSlides?(y=y+S/2+x/2+w,0===x&&0!==P&&(y=y-s/2-w),0===P&&(y=y-s/2-w),Math.abs(y)<.001&&(y=0),e.roundLengths&&(y=Math.floor(y)),E%e.slidesPerGroup==0&&c.push(y),u.push(y)):(e.roundLengths&&(y=Math.floor(y)),E%e.slidesPerGroup==0&&c.push(y),u.push(y),y=y+S+w),this.virtualSize+=S+w,x=S,E+=1}}if(this.virtualSize=Math.max(this.virtualSize,s)+m,a&&r&&("slide"===e.effect||"coverflow"===e.effect)&&i.css({width:this.virtualSize+e.spaceBetween+"px"}),h.flexbox&&!e.setWrapperSize||(this.isHorizontal()?i.css({width:this.virtualSize+e.spaceBetween+"px"}):i.css({height:this.virtualSize+e.spaceBetween+"px"})),e.slidesPerColumn>1&&(this.virtualSize=(S+e.spaceBetween)*T,this.virtualSize=Math.ceil(this.virtualSize/e.slidesPerColumn)-e.spaceBetween,this.isHorizontal()?i.css({width:this.virtualSize+e.spaceBetween+"px"}):i.css({height:this.virtualSize+e.spaceBetween+"px"}),e.centeredSlides)){C=[];for(var H=0;H<c.length;H+=1){var N=c[H];e.roundLengths&&(N=Math.floor(N)),c[H]<this.virtualSize+c[0]&&C.push(N)}c=C}if(!e.centeredSlides){C=[];for(var B=0;B<c.length;B+=1){var X=c[B];e.roundLengths&&(X=Math.floor(X)),c[B]<=this.virtualSize-s&&C.push(X)}c=C,Math.floor(this.virtualSize-s)-Math.floor(c[c.length-1])>1&&c.push(this.virtualSize-s)}0===c.length&&(c=[0]),0!==e.spaceBetween&&(this.isHorizontal()?a?l.css({marginLeft:w+"px"}):l.css({marginRight:w+"px"}):l.css({marginBottom:w+"px"})),d.extend(this,{slides:l,snapGrid:c,slidesGrid:u,slidesSizesGrid:v}),p!==o&&this.emit("slidesLengthChange"),c.length!==g&&(this.params.watchOverflow&&this.checkOverflow(),this.emit("snapGridLengthChange")),u.length!==b&&this.emit("slidesGridLengthChange"),(e.watchSlidesProgress||e.watchSlidesVisibility)&&this.updateSlidesOffset()}},updateAutoHeight:function(e){var t,i=[],s=0;if("number"==typeof e?this.setTransition(e):!0===e&&this.setTransition(this.params.speed),"auto"!==this.params.slidesPerView&&this.params.slidesPerView>1)for(t=0;t<Math.ceil(this.params.slidesPerView);t+=1){var a=this.activeIndex+t;if(a>this.slides.length)break;i.push(this.slides.eq(a)[0])}else i.push(this.slides.eq(this.activeIndex)[0]);for(t=0;t<i.length;t+=1)if(void 0!==i[t]){var r=i[t].offsetHeight;s=r>s?r:s}s&&this.$wrapperEl.css("height",s+"px")},updateSlidesOffset:function(){for(var e=this.slides,t=0;t<e.length;t+=1)e[t].swiperSlideOffset=this.isHorizontal()?e[t].offsetLeft:e[t].offsetTop},updateSlidesProgress:function(e){void 0===e&&(e=this&&this.translate||0);var t=this.params,i=this.slides,s=this.rtlTranslate;if(0!==i.length){void 0===i[0].swiperSlideOffset&&this.updateSlidesOffset();var a=-e;s&&(a=e),i.removeClass(t.slideVisibleClass);for(var r=0;r<i.length;r+=1){var n=i[r],o=(a+(t.centeredSlides?this.minTranslate():0)-n.swiperSlideOffset)/(n.swiperSlideSize+t.spaceBetween);if(t.watchSlidesVisibility){var l=-(a-n.swiperSlideOffset),d=l+this.slidesSizesGrid[r];(l>=0&&l<this.size||d>0&&d<=this.size||l<=0&&d>=this.size)&&i.eq(r).addClass(t.slideVisibleClass)}n.progress=s?-o:o}}},updateProgress:function(e){void 0===e&&(e=this&&this.translate||0);var t=this.params,i=this.maxTranslate()-this.minTranslate(),s=this.progress,a=this.isBeginning,r=this.isEnd,n=a,o=r;0===i?(s=0,a=!0,r=!0):(a=(s=(e-this.minTranslate())/i)<=0,r=s>=1),d.extend(this,{progress:s,isBeginning:a,isEnd:r}),(t.watchSlidesProgress||t.watchSlidesVisibility)&&this.updateSlidesProgress(e),a&&!n&&this.emit("reachBeginning toEdge"),r&&!o&&this.emit("reachEnd toEdge"),(n&&!a||o&&!r)&&this.emit("fromEdge"),this.emit("progress",s)},updateSlidesClasses:function(){var e,t=this.slides,i=this.params,s=this.$wrapperEl,a=this.activeIndex,r=this.realIndex,n=this.virtual&&i.virtual.enabled;t.removeClass(i.slideActiveClass+" "+i.slideNextClass+" "+i.slidePrevClass+" "+i.slideDuplicateActiveClass+" "+i.slideDuplicateNextClass+" "+i.slideDuplicatePrevClass),(e=n?this.$wrapperEl.find("."+i.slideClass+'[data-swiper-slide-index="'+a+'"]'):t.eq(a)).addClass(i.slideActiveClass),i.loop&&(e.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+r+'"]').addClass(i.slideDuplicateActiveClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+r+'"]').addClass(i.slideDuplicateActiveClass));var o=e.nextAll("."+i.slideClass).eq(0).addClass(i.slideNextClass);i.loop&&0===o.length&&(o=t.eq(0)).addClass(i.slideNextClass);var l=e.prevAll("."+i.slideClass).eq(0).addClass(i.slidePrevClass);i.loop&&0===l.length&&(l=t.eq(-1)).addClass(i.slidePrevClass),i.loop&&(o.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+o.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicateNextClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+o.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicateNextClass),l.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+l.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicatePrevClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+l.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicatePrevClass))},updateActiveIndex:function(e){var t,i=this.rtlTranslate?this.translate:-this.translate,s=this.slidesGrid,a=this.snapGrid,r=this.params,n=this.activeIndex,o=this.realIndex,l=this.snapIndex,h=e;if(void 0===h){for(var p=0;p<s.length;p+=1)void 0!==s[p+1]?i>=s[p]&&i<s[p+1]-(s[p+1]-s[p])/2?h=p:i>=s[p]&&i<s[p+1]&&(h=p+1):i>=s[p]&&(h=p);r.normalizeSlideIndex&&(h<0||void 0===h)&&(h=0)}if((t=a.indexOf(i)>=0?a.indexOf(i):Math.floor(h/r.slidesPerGroup))>=a.length&&(t=a.length-1),h!==n){var c=parseInt(this.slides.eq(h).attr("data-swiper-slide-index")||h,10);d.extend(this,{snapIndex:t,realIndex:c,previousIndex:n,activeIndex:h}),this.emit("activeIndexChange"),this.emit("snapIndexChange"),o!==c&&this.emit("realIndexChange"),this.emit("slideChange")}else t!==l&&(this.snapIndex=t,this.emit("snapIndexChange"))},updateClickedSlide:function(e){var t=this.params,i=s(e.target).closest("."+t.slideClass)[0],a=!1;if(i)for(var r=0;r<this.slides.length;r+=1)this.slides[r]===i&&(a=!0);if(!i||!a)return this.clickedSlide=void 0,void(this.clickedIndex=void 0);this.clickedSlide=i,this.virtual&&this.params.virtual.enabled?this.clickedIndex=parseInt(s(i).attr("data-swiper-slide-index"),10):this.clickedIndex=s(i).index(),t.slideToClickedSlide&&void 0!==this.clickedIndex&&this.clickedIndex!==this.activeIndex&&this.slideToClickedSlide()}};var v={getTranslate:function(e){void 0===e&&(e=this.isHorizontal()?"x":"y");var t=this.params,i=this.rtlTranslate,s=this.translate,a=this.$wrapperEl;if(t.virtualTranslate)return i?-s:s;var r=d.getTranslate(a[0],e);return i&&(r=-r),r||0},setTranslate:function(e,t){var i=this.rtlTranslate,s=this.params,a=this.$wrapperEl,r=this.progress,n=0,o=0;this.isHorizontal()?n=i?-e:e:o=e,s.roundLengths&&(n=Math.floor(n),o=Math.floor(o)),s.virtualTranslate||(h.transforms3d?a.transform("translate3d("+n+"px, "+o+"px, 0px)"):a.transform("translate("+n+"px, "+o+"px)")),this.previousTranslate=this.translate,this.translate=this.isHorizontal()?n:o;var l=this.maxTranslate()-this.minTranslate();(0===l?0:(e-this.minTranslate())/l)!==r&&this.updateProgress(e),this.emit("setTranslate",this.translate,t)},minTranslate:function(){return-this.snapGrid[0]},maxTranslate:function(){return-this.snapGrid[this.snapGrid.length-1]}};var f={setTransition:function(e,t){this.$wrapperEl.transition(e),this.emit("setTransition",e,t)},transitionStart:function(e,t){void 0===e&&(e=!0);var i=this.activeIndex,s=this.params,a=this.previousIndex;s.autoHeight&&this.updateAutoHeight();var r=t;if(r||(r=i>a?"next":i<a?"prev":"reset"),this.emit("transitionStart"),e&&i!==a){if("reset"===r)return void this.emit("slideResetTransitionStart");this.emit("slideChangeTransitionStart"),"next"===r?this.emit("slideNextTransitionStart"):this.emit("slidePrevTransitionStart")}},transitionEnd:function(e,t){void 0===e&&(e=!0);var i=this.activeIndex,s=this.previousIndex;this.animating=!1,this.setTransition(0);var a=t;if(a||(a=i>s?"next":i<s?"prev":"reset"),this.emit("transitionEnd"),e&&i!==s){if("reset"===a)return void this.emit("slideResetTransitionEnd");this.emit("slideChangeTransitionEnd"),"next"===a?this.emit("slideNextTransitionEnd"):this.emit("slidePrevTransitionEnd")}}};var m={slideTo:function(e,t,i,s){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===i&&(i=!0);var a=this,r=e;r<0&&(r=0);var n=a.params,o=a.snapGrid,l=a.slidesGrid,d=a.previousIndex,p=a.activeIndex,c=a.rtlTranslate;if(a.animating&&n.preventIntercationOnTransition)return!1;var u=Math.floor(r/n.slidesPerGroup);u>=o.length&&(u=o.length-1),(p||n.initialSlide||0)===(d||0)&&i&&a.emit("beforeSlideChangeStart");var v,f=-o[u];if(a.updateProgress(f),n.normalizeSlideIndex)for(var m=0;m<l.length;m+=1)-Math.floor(100*f)>=Math.floor(100*l[m])&&(r=m);if(a.initialized&&r!==p){if(!a.allowSlideNext&&f<a.translate&&f<a.minTranslate())return!1;if(!a.allowSlidePrev&&f>a.translate&&f>a.maxTranslate()&&(p||0)!==r)return!1}return v=r>p?"next":r<p?"prev":"reset",c&&-f===a.translate||!c&&f===a.translate?(a.updateActiveIndex(r),n.autoHeight&&a.updateAutoHeight(),a.updateSlidesClasses(),"slide"!==n.effect&&a.setTranslate(f),"reset"!==v&&(a.transitionStart(i,v),a.transitionEnd(i,v)),!1):(0!==t&&h.transition?(a.setTransition(t),a.setTranslate(f),a.updateActiveIndex(r),a.updateSlidesClasses(),a.emit("beforeTransitionStart",t,s),a.transitionStart(i,v),a.animating||(a.animating=!0,a.onSlideToWrapperTransitionEnd||(a.onSlideToWrapperTransitionEnd=function(e){a&&!a.destroyed&&e.target===this&&(a.$wrapperEl[0].removeEventListener("transitionend",a.onSlideToWrapperTransitionEnd),a.$wrapperEl[0].removeEventListener("webkitTransitionEnd",a.onSlideToWrapperTransitionEnd),a.transitionEnd(i,v))}),a.$wrapperEl[0].addEventListener("transitionend",a.onSlideToWrapperTransitionEnd),a.$wrapperEl[0].addEventListener("webkitTransitionEnd",a.onSlideToWrapperTransitionEnd))):(a.setTransition(0),a.setTranslate(f),a.updateActiveIndex(r),a.updateSlidesClasses(),a.emit("beforeTransitionStart",t,s),a.transitionStart(i,v),a.transitionEnd(i,v)),!0)},slideToLoop:function(e,t,i,s){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===i&&(i=!0);var a=e;return this.params.loop&&(a+=this.loopedSlides),this.slideTo(a,t,i,s)},slideNext:function(e,t,i){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var s=this.params,a=this.animating;return s.loop?!a&&(this.loopFix(),this._clientLeft=this.$wrapperEl[0].clientLeft,this.slideTo(this.activeIndex+s.slidesPerGroup,e,t,i)):this.slideTo(this.activeIndex+s.slidesPerGroup,e,t,i)},slidePrev:function(e,t,i){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var s=this.params,a=this.animating,r=this.snapGrid,n=this.slidesGrid,o=this.rtlTranslate;if(s.loop){if(a)return!1;this.loopFix(),this._clientLeft=this.$wrapperEl[0].clientLeft}function l(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}var d,h=l(o?this.translate:-this.translate),p=r.map(function(e){return l(e)}),c=(n.map(function(e){return l(e)}),r[p.indexOf(h)],r[p.indexOf(h)-1]);return void 0!==c&&(d=n.indexOf(c))<0&&(d=this.activeIndex-1),this.slideTo(d,e,t,i)},slideReset:function(e,t,i){return void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),this.slideTo(this.activeIndex,e,t,i)},slideToClosest:function(e,t,i){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var s=this.activeIndex,a=Math.floor(s/this.params.slidesPerGroup);if(a<this.snapGrid.length-1){var r=this.rtlTranslate?this.translate:-this.translate,n=this.snapGrid[a];r-n>(this.snapGrid[a+1]-n)/2&&(s=this.params.slidesPerGroup)}return this.slideTo(s,e,t,i)},slideToClickedSlide:function(){var e,t=this,i=t.params,a=t.$wrapperEl,r="auto"===i.slidesPerView?t.slidesPerViewDynamic():i.slidesPerView,n=t.clickedIndex;if(i.loop){if(t.animating)return;e=parseInt(s(t.clickedSlide).attr("data-swiper-slide-index"),10),i.centeredSlides?n<t.loopedSlides-r/2||n>t.slides.length-t.loopedSlides+r/2?(t.loopFix(),n=a.children("."+i.slideClass+'[data-swiper-slide-index="'+e+'"]:not(.'+i.slideDuplicateClass+")").eq(0).index(),d.nextTick(function(){t.slideTo(n)})):t.slideTo(n):n>t.slides.length-r?(t.loopFix(),n=a.children("."+i.slideClass+'[data-swiper-slide-index="'+e+'"]:not(.'+i.slideDuplicateClass+")").eq(0).index(),d.nextTick(function(){t.slideTo(n)})):t.slideTo(n)}else t.slideTo(n)}};var g={loopCreate:function(){var t=this,i=t.params,a=t.$wrapperEl;a.children("."+i.slideClass+"."+i.slideDuplicateClass).remove();var r=a.children("."+i.slideClass);if(i.loopFillGroupWithBlank){var n=i.slidesPerGroup-r.length%i.slidesPerGroup;if(n!==i.slidesPerGroup){for(var o=0;o<n;o+=1){var l=s(e.createElement("div")).addClass(i.slideClass+" "+i.slideBlankClass);a.append(l)}r=a.children("."+i.slideClass)}}"auto"!==i.slidesPerView||i.loopedSlides||(i.loopedSlides=r.length),t.loopedSlides=parseInt(i.loopedSlides||i.slidesPerView,10),t.loopedSlides+=i.loopAdditionalSlides,t.loopedSlides>r.length&&(t.loopedSlides=r.length);var d=[],h=[];r.each(function(e,i){var a=s(i);e<t.loopedSlides&&h.push(i),e<r.length&&e>=r.length-t.loopedSlides&&d.push(i),a.attr("data-swiper-slide-index",e)});for(var p=0;p<h.length;p+=1)a.append(s(h[p].cloneNode(!0)).addClass(i.slideDuplicateClass));for(var c=d.length-1;c>=0;c-=1)a.prepend(s(d[c].cloneNode(!0)).addClass(i.slideDuplicateClass))},loopFix:function(){var e,t=this.params,i=this.activeIndex,s=this.slides,a=this.loopedSlides,r=this.allowSlidePrev,n=this.allowSlideNext,o=this.snapGrid,l=this.rtlTranslate;this.allowSlidePrev=!0,this.allowSlideNext=!0;var d=-o[i]-this.getTranslate();i<a?(e=s.length-3*a+i,e+=a,this.slideTo(e,0,!1,!0)&&0!==d&&this.setTranslate((l?-this.translate:this.translate)-d)):("auto"===t.slidesPerView&&i>=2*a||i>=s.length-a)&&(e=-s.length+i+a,e+=a,this.slideTo(e,0,!1,!0)&&0!==d&&this.setTranslate((l?-this.translate:this.translate)-d));this.allowSlidePrev=r,this.allowSlideNext=n},loopDestroy:function(){var e=this.$wrapperEl,t=this.params,i=this.slides;e.children("."+t.slideClass+"."+t.slideDuplicateClass).remove(),i.removeAttr("data-swiper-slide-index")}};var b={setGrabCursor:function(e){if(!(h.touch||!this.params.simulateTouch||this.params.watchOverflow&&this.isLocked)){var t=this.el;t.style.cursor="move",t.style.cursor=e?"-webkit-grabbing":"-webkit-grab",t.style.cursor=e?"-moz-grabbin":"-moz-grab",t.style.cursor=e?"grabbing":"grab"}},unsetGrabCursor:function(){h.touch||this.params.watchOverflow&&this.isLocked||(this.el.style.cursor="")}};var w={appendSlide:function(e){var t=this.$wrapperEl,i=this.params;if(i.loop&&this.loopDestroy(),"object"==typeof e&&"length"in e)for(var s=0;s<e.length;s+=1)e[s]&&t.append(e[s]);else t.append(e);i.loop&&this.loopCreate(),i.observer&&h.observer||this.update()},prependSlide:function(e){var t=this.params,i=this.$wrapperEl,s=this.activeIndex;t.loop&&this.loopDestroy();var a=s+1;if("object"==typeof e&&"length"in e){for(var r=0;r<e.length;r+=1)e[r]&&i.prepend(e[r]);a=s+e.length}else i.prepend(e);t.loop&&this.loopCreate(),t.observer&&h.observer||this.update(),this.slideTo(a,0,!1)},addSlide:function(e,t){var i=this.$wrapperEl,s=this.params,a=this.activeIndex;s.loop&&(a-=this.loopedSlides,this.loopDestroy(),this.slides=i.children("."+s.slideClass));var r=this.slides.length;if(e<=0)this.prependSlide(t);else if(e>=r)this.appendSlide(t);else{for(var n=a>e?a+1:a,o=[],l=r-1;l>=e;l-=1){var d=this.slides.eq(l);d.remove(),o.unshift(d)}if("object"==typeof t&&"length"in t){for(var p=0;p<t.length;p+=1)t[p]&&i.append(t[p]);n=a>e?a+t.length:a}else i.append(t);for(var c=0;c<o.length;c+=1)i.append(o[c]);s.loop&&this.loopCreate(),s.observer&&h.observer||this.update(),s.loop?this.slideTo(n+this.loopedSlides,0,!1):this.slideTo(n,0,!1)}},removeSlide:function(e){var t=this.params,i=this.$wrapperEl,s=this.activeIndex;t.loop&&(s-=this.loopedSlides,this.loopDestroy(),this.slides=i.children("."+t.slideClass));var a,r=s;if("object"==typeof e&&"length"in e){for(var n=0;n<e.length;n+=1)a=e[n],this.slides[a]&&this.slides.eq(a).remove(),a<r&&(r-=1);r=Math.max(r,0)}else a=e,this.slides[a]&&this.slides.eq(a).remove(),a<r&&(r-=1),r=Math.max(r,0);t.loop&&this.loopCreate(),t.observer&&h.observer||this.update(),t.loop?this.slideTo(r+this.loopedSlides,0,!1):this.slideTo(r,0,!1)},removeAllSlides:function(){for(var e=[],t=0;t<this.slides.length;t+=1)e.push(t);this.removeSlide(e)}},y=function(){var i=t.navigator.userAgent,s={ios:!1,android:!1,androidChrome:!1,desktop:!1,windows:!1,iphone:!1,ipod:!1,ipad:!1,cordova:t.cordova||t.phonegap,phonegap:t.cordova||t.phonegap},a=i.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),r=i.match(/(Android);?[\s\/]+([\d.]+)?/),n=i.match(/(iPad).*OS\s([\d_]+)/),o=i.match(/(iPod)(.*OS\s([\d_]+))?/),l=!n&&i.match(/(iPhone\sOS|iOS)\s([\d_]+)/);if(a&&(s.os="windows",s.osVersion=a[2],s.windows=!0),r&&!a&&(s.os="android",s.osVersion=r[2],s.android=!0,s.androidChrome=i.toLowerCase().indexOf("chrome")>=0),(n||l||o)&&(s.os="ios",s.ios=!0),l&&!o&&(s.osVersion=l[2].replace(/_/g,"."),s.iphone=!0),n&&(s.osVersion=n[2].replace(/_/g,"."),s.ipad=!0),o&&(s.osVersion=o[3]?o[3].replace(/_/g,"."):null,s.iphone=!0),s.ios&&s.osVersion&&i.indexOf("Version/")>=0&&"10"===s.osVersion.split(".")[0]&&(s.osVersion=i.toLowerCase().split("version/")[1].split(" ")[0]),s.desktop=!(s.os||s.android||s.webView),s.webView=(l||n||o)&&i.match(/.*AppleWebKit(?!.*Safari)/i),s.os&&"ios"===s.os){var d=s.osVersion.split("."),h=e.querySelector('meta[name="viewport"]');s.minimalUi=!s.webView&&(o||l)&&(1*d[0]==7?1*d[1]>=1:1*d[0]>7)&&h&&h.getAttribute("content").indexOf("minimal-ui")>=0}return s.pixelRatio=t.devicePixelRatio||1,s}();function x(){var e=this.params,t=this.el;if(!t||0!==t.offsetWidth){e.breakpoints&&this.setBreakpoint();var i=this.allowSlideNext,s=this.allowSlidePrev,a=this.snapGrid;if(this.allowSlideNext=!0,this.allowSlidePrev=!0,this.updateSize(),this.updateSlides(),e.freeMode){var r=Math.min(Math.max(this.translate,this.maxTranslate()),this.minTranslate());this.setTranslate(r),this.updateActiveIndex(),this.updateSlidesClasses(),e.autoHeight&&this.updateAutoHeight()}else this.updateSlidesClasses(),("auto"===e.slidesPerView||e.slidesPerView>1)&&this.isEnd&&!this.params.centeredSlides?this.slideTo(this.slides.length-1,0,!1,!0):this.slideTo(this.activeIndex,0,!1,!0);this.allowSlidePrev=s,this.allowSlideNext=i,this.params.watchOverflow&&a!==this.snapGrid&&this.checkOverflow()}}var E={attachEvents:function(){var i=this.params,a=this.touchEvents,r=this.el,n=this.wrapperEl;this.onTouchStart=function(i){var a=this.touchEventsData,r=this.params,n=this.touches;if(!this.animating||!r.preventIntercationOnTransition){var o=i;if(o.originalEvent&&(o=o.originalEvent),a.isTouchEvent="touchstart"===o.type,(a.isTouchEvent||!("which"in o)||3!==o.which)&&(!a.isTouched||!a.isMoved))if(r.noSwiping&&s(o.target).closest(r.noSwipingSelector?r.noSwipingSelector:"."+r.noSwipingClass)[0])this.allowClick=!0;else if(!r.swipeHandler||s(o).closest(r.swipeHandler)[0]){n.currentX="touchstart"===o.type?o.targetTouches[0].pageX:o.pageX,n.currentY="touchstart"===o.type?o.targetTouches[0].pageY:o.pageY;var l=n.currentX,h=n.currentY;if(!y.ios||y.cordova||!r.iOSEdgeSwipeDetection||!(l<=r.iOSEdgeSwipeThreshold||l>=t.screen.width-r.iOSEdgeSwipeThreshold)){if(d.extend(a,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),n.startX=l,n.startY=h,a.touchStartTime=d.now(),this.allowClick=!0,this.updateSize(),this.swipeDirection=void 0,r.threshold>0&&(a.allowThresholdMove=!1),"touchstart"!==o.type){var p=!0;s(o.target).is(a.formElements)&&(p=!1),e.activeElement&&s(e.activeElement).is(a.formElements)&&e.activeElement!==o.target&&e.activeElement.blur(),p&&this.allowTouchMove&&o.preventDefault()}this.emit("touchStart",o)}}}}.bind(this),this.onTouchMove=function(t){var i=this.touchEventsData,a=this.params,r=this.touches,n=this.rtlTranslate,o=t;if(o.originalEvent&&(o=o.originalEvent),i.isTouched){if(!i.isTouchEvent||"mousemove"!==o.type){var l="touchmove"===o.type?o.targetTouches[0].pageX:o.pageX,h="touchmove"===o.type?o.targetTouches[0].pageY:o.pageY;if(o.preventedByNestedSwiper)return r.startX=l,void(r.startY=h);if(!this.allowTouchMove)return this.allowClick=!1,void(i.isTouched&&(d.extend(r,{startX:l,startY:h,currentX:l,currentY:h}),i.touchStartTime=d.now()));if(i.isTouchEvent&&a.touchReleaseOnEdges&&!a.loop)if(this.isVertical()){if(h<r.startY&&this.translate<=this.maxTranslate()||h>r.startY&&this.translate>=this.minTranslate())return i.isTouched=!1,void(i.isMoved=!1)}else if(l<r.startX&&this.translate<=this.maxTranslate()||l>r.startX&&this.translate>=this.minTranslate())return;if(i.isTouchEvent&&e.activeElement&&o.target===e.activeElement&&s(o.target).is(i.formElements))return i.isMoved=!0,void(this.allowClick=!1);if(i.allowTouchCallbacks&&this.emit("touchMove",o),!(o.targetTouches&&o.targetTouches.length>1)){r.currentX=l,r.currentY=h;var p,c=r.currentX-r.startX,u=r.currentY-r.startY;if(void 0===i.isScrolling&&(this.isHorizontal()&&r.currentY===r.startY||this.isVertical()&&r.currentX===r.startX?i.isScrolling=!1:c*c+u*u>=25&&(p=180*Math.atan2(Math.abs(u),Math.abs(c))/Math.PI,i.isScrolling=this.isHorizontal()?p>a.touchAngle:90-p>a.touchAngle)),i.isScrolling&&this.emit("touchMoveOpposite",o),"undefined"==typeof startMoving&&(r.currentX===r.startX&&r.currentY===r.startY||(i.startMoving=!0)),i.isScrolling)i.isTouched=!1;else if(i.startMoving){this.allowClick=!1,o.preventDefault(),a.touchMoveStopPropagation&&!a.nested&&o.stopPropagation(),i.isMoved||(a.loop&&this.loopFix(),i.startTranslate=this.getTranslate(),this.setTransition(0),this.animating&&this.$wrapperEl.trigger("webkitTransitionEnd transitionend"),i.allowMomentumBounce=!1,!a.grabCursor||!0!==this.allowSlideNext&&!0!==this.allowSlidePrev||this.setGrabCursor(!0),this.emit("sliderFirstMove",o)),this.emit("sliderMove",o),i.isMoved=!0;var v=this.isHorizontal()?c:u;r.diff=v,v*=a.touchRatio,n&&(v=-v),this.swipeDirection=v>0?"prev":"next",i.currentTranslate=v+i.startTranslate;var f=!0,m=a.resistanceRatio;if(a.touchReleaseOnEdges&&(m=0),v>0&&i.currentTranslate>this.minTranslate()?(f=!1,a.resistance&&(i.currentTranslate=this.minTranslate()-1+Math.pow(-this.minTranslate()+i.startTranslate+v,m))):v<0&&i.currentTranslate<this.maxTranslate()&&(f=!1,a.resistance&&(i.currentTranslate=this.maxTranslate()+1-Math.pow(this.maxTranslate()-i.startTranslate-v,m))),f&&(o.preventedByNestedSwiper=!0),!this.allowSlideNext&&"next"===this.swipeDirection&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!this.allowSlidePrev&&"prev"===this.swipeDirection&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),a.threshold>0){if(!(Math.abs(v)>a.threshold||i.allowThresholdMove))return void(i.currentTranslate=i.startTranslate);if(!i.allowThresholdMove)return i.allowThresholdMove=!0,r.startX=r.currentX,r.startY=r.currentY,i.currentTranslate=i.startTranslate,void(r.diff=this.isHorizontal()?r.currentX-r.startX:r.currentY-r.startY)}a.followFinger&&((a.freeMode||a.watchSlidesProgress||a.watchSlidesVisibility)&&(this.updateActiveIndex(),this.updateSlidesClasses()),a.freeMode&&(0===i.velocities.length&&i.velocities.push({position:r[this.isHorizontal()?"startX":"startY"],time:i.touchStartTime}),i.velocities.push({position:r[this.isHorizontal()?"currentX":"currentY"],time:d.now()})),this.updateProgress(i.currentTranslate),this.setTranslate(i.currentTranslate))}}}}else i.startMoving&&i.isScrolling&&this.emit("touchMoveOpposite",o)}.bind(this),this.onTouchEnd=function(e){var t=this,i=t.touchEventsData,s=t.params,a=t.touches,r=t.rtlTranslate,n=t.$wrapperEl,o=t.slidesGrid,l=t.snapGrid,h=e;if(h.originalEvent&&(h=h.originalEvent),i.allowTouchCallbacks&&t.emit("touchEnd",h),i.allowTouchCallbacks=!1,!i.isTouched)return i.isMoved&&s.grabCursor&&t.setGrabCursor(!1),i.isMoved=!1,void(i.startMoving=!1);s.grabCursor&&i.isMoved&&i.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);var p,c=d.now(),u=c-i.touchStartTime;if(t.allowClick&&(t.updateClickedSlide(h),t.emit("tap",h),u<300&&c-i.lastClickTime>300&&(i.clickTimeout&&clearTimeout(i.clickTimeout),i.clickTimeout=d.nextTick(function(){t&&!t.destroyed&&t.emit("click",h)},300)),u<300&&c-i.lastClickTime<300&&(i.clickTimeout&&clearTimeout(i.clickTimeout),t.emit("doubleTap",h))),i.lastClickTime=d.now(),d.nextTick(function(){t.destroyed||(t.allowClick=!0)}),!i.isTouched||!i.isMoved||!t.swipeDirection||0===a.diff||i.currentTranslate===i.startTranslate)return i.isTouched=!1,i.isMoved=!1,void(i.startMoving=!1);if(i.isTouched=!1,i.isMoved=!1,i.startMoving=!1,p=s.followFinger?r?t.translate:-t.translate:-i.currentTranslate,s.freeMode){if(p<-t.minTranslate())return void t.slideTo(t.activeIndex);if(p>-t.maxTranslate())return void(t.slides.length<l.length?t.slideTo(l.length-1):t.slideTo(t.slides.length-1));if(s.freeModeMomentum){if(i.velocities.length>1){var v=i.velocities.pop(),f=i.velocities.pop(),m=v.position-f.position,g=v.time-f.time;t.velocity=m/g,t.velocity/=2,Math.abs(t.velocity)<s.freeModeMinimumVelocity&&(t.velocity=0),(g>150||d.now()-v.time>300)&&(t.velocity=0)}else t.velocity=0;t.velocity*=s.freeModeMomentumVelocityRatio,i.velocities.length=0;var b=1e3*s.freeModeMomentumRatio,w=t.velocity*b,y=t.translate+w;r&&(y=-y);var x,E,T=!1,S=20*Math.abs(t.velocity)*s.freeModeMomentumBounceRatio;if(y<t.maxTranslate())s.freeModeMomentumBounce?(y+t.maxTranslate()<-S&&(y=t.maxTranslate()-S),x=t.maxTranslate(),T=!0,i.allowMomentumBounce=!0):y=t.maxTranslate(),s.loop&&s.centeredSlides&&(E=!0);else if(y>t.minTranslate())s.freeModeMomentumBounce?(y-t.minTranslate()>S&&(y=t.minTranslate()+S),x=t.minTranslate(),T=!0,i.allowMomentumBounce=!0):y=t.minTranslate(),s.loop&&s.centeredSlides&&(E=!0);else if(s.freeModeSticky){for(var C,M=0;M<l.length;M+=1)if(l[M]>-y){C=M;break}y=-(y=Math.abs(l[C]-y)<Math.abs(l[C-1]-y)||"next"===t.swipeDirection?l[C]:l[C-1])}if(E&&t.once("transitionEnd",function(){t.loopFix()}),0!==t.velocity)b=r?Math.abs((-y-t.translate)/t.velocity):Math.abs((y-t.translate)/t.velocity);else if(s.freeModeSticky)return void t.slideToClosest();s.freeModeMomentumBounce&&T?(t.updateProgress(x),t.setTransition(b),t.setTranslate(y),t.transitionStart(!0,t.swipeDirection),t.animating=!0,n.transitionEnd(function(){t&&!t.destroyed&&i.allowMomentumBounce&&(t.emit("momentumBounce"),t.setTransition(s.speed),t.setTranslate(x),n.transitionEnd(function(){t&&!t.destroyed&&t.transitionEnd()}))})):t.velocity?(t.updateProgress(y),t.setTransition(b),t.setTranslate(y),t.transitionStart(!0,t.swipeDirection),t.animating||(t.animating=!0,n.transitionEnd(function(){t&&!t.destroyed&&t.transitionEnd()}))):t.updateProgress(y),t.updateActiveIndex(),t.updateSlidesClasses()}else if(s.freeModeSticky)return void t.slideToClosest();(!s.freeModeMomentum||u>=s.longSwipesMs)&&(t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses())}else{for(var z=0,k=t.slidesSizesGrid[0],P=0;P<o.length;P+=s.slidesPerGroup)void 0!==o[P+s.slidesPerGroup]?p>=o[P]&&p<o[P+s.slidesPerGroup]&&(z=P,k=o[P+s.slidesPerGroup]-o[P]):p>=o[P]&&(z=P,k=o[o.length-1]-o[o.length-2]);var $=(p-o[z])/k;if(u>s.longSwipesMs){if(!s.longSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&($>=s.longSwipesRatio?t.slideTo(z+s.slidesPerGroup):t.slideTo(z)),"prev"===t.swipeDirection&&($>1-s.longSwipesRatio?t.slideTo(z+s.slidesPerGroup):t.slideTo(z))}else{if(!s.shortSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&t.slideTo(z+s.slidesPerGroup),"prev"===t.swipeDirection&&t.slideTo(z)}}}.bind(this),this.onClick=function(e){this.allowClick||(this.params.preventClicks&&e.preventDefault(),this.params.preventClicksPropagation&&this.animating&&(e.stopPropagation(),e.stopImmediatePropagation()))}.bind(this);var o="container"===i.touchEventsTarget?r:n,l=!!i.nested;if(h.touch||!h.pointerEvents&&!h.prefixedPointerEvents){if(h.touch){var p=!("touchstart"!==a.start||!h.passiveListener||!i.passiveListeners)&&{passive:!0,capture:!1};o.addEventListener(a.start,this.onTouchStart,p),o.addEventListener(a.move,this.onTouchMove,h.passiveListener?{passive:!1,capture:l}:l),o.addEventListener(a.end,this.onTouchEnd,p)}(i.simulateTouch&&!y.ios&&!y.android||i.simulateTouch&&!h.touch&&y.ios)&&(o.addEventListener("mousedown",this.onTouchStart,!1),e.addEventListener("mousemove",this.onTouchMove,l),e.addEventListener("mouseup",this.onTouchEnd,!1))}else o.addEventListener(a.start,this.onTouchStart,!1),e.addEventListener(a.move,this.onTouchMove,l),e.addEventListener(a.end,this.onTouchEnd,!1);(i.preventClicks||i.preventClicksPropagation)&&o.addEventListener("click",this.onClick,!0),this.on(y.ios||y.android?"resize orientationchange observerUpdate":"resize observerUpdate",x,!0)},detachEvents:function(){var t=this.params,i=this.touchEvents,s=this.el,a=this.wrapperEl,r="container"===t.touchEventsTarget?s:a,n=!!t.nested;if(h.touch||!h.pointerEvents&&!h.prefixedPointerEvents){if(h.touch){var o=!("onTouchStart"!==i.start||!h.passiveListener||!t.passiveListeners)&&{passive:!0,capture:!1};r.removeEventListener(i.start,this.onTouchStart,o),r.removeEventListener(i.move,this.onTouchMove,n),r.removeEventListener(i.end,this.onTouchEnd,o)}(t.simulateTouch&&!y.ios&&!y.android||t.simulateTouch&&!h.touch&&y.ios)&&(r.removeEventListener("mousedown",this.onTouchStart,!1),e.removeEventListener("mousemove",this.onTouchMove,n),e.removeEventListener("mouseup",this.onTouchEnd,!1))}else r.removeEventListener(i.start,this.onTouchStart,!1),e.removeEventListener(i.move,this.onTouchMove,n),e.removeEventListener(i.end,this.onTouchEnd,!1);(t.preventClicks||t.preventClicksPropagation)&&r.removeEventListener("click",this.onClick,!0),this.off(y.ios||y.android?"resize orientationchange observerUpdate":"resize observerUpdate",x)}};var T={setBreakpoint:function(){var e=this.activeIndex,t=this.initialized,i=this.loopedSlides;void 0===i&&(i=0);var s=this.params,a=s.breakpoints;if(a&&(!a||0!==Object.keys(a).length)){var r=this.getBreakpoint(a);if(r&&this.currentBreakpoint!==r){var n=r in a?a[r]:this.originalParams,o=s.loop&&n.slidesPerView!==s.slidesPerView;d.extend(this.params,n),d.extend(this,{allowTouchMove:this.params.allowTouchMove,allowSlideNext:this.params.allowSlideNext,allowSlidePrev:this.params.allowSlidePrev}),this.currentBreakpoint=r,o&&t&&(this.loopDestroy(),this.loopCreate(),this.updateSlides(),this.slideTo(e-i+this.loopedSlides,0,!1)),this.emit("breakpoint",n)}}},getBreakpoint:function(e){if(e){var i=!1,s=[];Object.keys(e).forEach(function(e){s.push(e)}),s.sort(function(e,t){return parseInt(e,10)-parseInt(t,10)});for(var a=0;a<s.length;a+=1){var r=s[a];r>=t.innerWidth&&!i&&(i=r)}return i||"max"}}},S=function(){return{isIE:!!t.navigator.userAgent.match(/Trident/g)||!!t.navigator.userAgent.match(/MSIE/g),isSafari:(e=t.navigator.userAgent.toLowerCase(),e.indexOf("safari")>=0&&e.indexOf("chrome")<0&&e.indexOf("android")<0),isUiWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)};var e}();var C={init:!0,direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,preventIntercationOnTransition:!1,iOSEdgeSwipeDetection:!1,iOSEdgeSwipeThreshold:20,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,freeModeMomentumVelocityRatio:1,freeModeSticky:!1,freeModeMinimumVelocity:.02,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,centeredSlides:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,watchOverflow:!1,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:0,touchMoveStopPropagation:!0,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,loopFillGroupWithBlank:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,containerModifierClass:"swiper-container-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-invisible-blank",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",runCallbacksOnInit:!0},M={update:u,translate:v,transition:f,slide:m,loop:g,grabCursor:b,manipulation:w,events:E,breakpoints:T,checkOverflow:{checkOverflow:function(){var e=this.isLocked;this.isLocked=1===this.snapGrid.length,this.allowSlideNext=!this.isLocked,this.allowSlidePrev=!this.isLocked,e!==this.isLocked&&this.emit(this.isLocked?"lock":"unlock"),e&&e!==this.isLocked&&(this.isEnd=!1,this.navigation.update())}},classes:{addClasses:function(){var e=this.classNames,t=this.params,i=this.rtl,s=this.$el,a=[];a.push(t.direction),t.freeMode&&a.push("free-mode"),h.flexbox||a.push("no-flexbox"),t.autoHeight&&a.push("autoheight"),i&&a.push("rtl"),t.slidesPerColumn>1&&a.push("multirow"),y.android&&a.push("android"),y.ios&&a.push("ios"),S.isIE&&(h.pointerEvents||h.prefixedPointerEvents)&&a.push("wp8-"+t.direction),a.forEach(function(i){e.push(t.containerModifierClass+i)}),s.addClass(e.join(" "))},removeClasses:function(){var e=this.$el,t=this.classNames;e.removeClass(t.join(" "))}},images:{loadImage:function(e,i,s,a,r,n){var o;function l(){n&&n()}e.complete&&r?l():i?((o=new t.Image).onload=l,o.onerror=l,a&&(o.sizes=a),s&&(o.srcset=s),i&&(o.src=i)):l()},preloadImages:function(){var e=this;function t(){void 0!==e&&null!==e&&e&&!e.destroyed&&(void 0!==e.imagesLoaded&&(e.imagesLoaded+=1),e.imagesLoaded===e.imagesToLoad.length&&(e.params.updateOnImagesReady&&e.update(),e.emit("imagesReady")))}e.imagesToLoad=e.$el.find("img");for(var i=0;i<e.imagesToLoad.length;i+=1){var s=e.imagesToLoad[i];e.loadImage(s,s.currentSrc||s.getAttribute("src"),s.srcset||s.getAttribute("srcset"),s.sizes||s.getAttribute("sizes"),!0,t)}}}},z={},k=function(e){function t(){for(var i,a,r,n=[],o=arguments.length;o--;)n[o]=arguments[o];1===n.length&&n[0].constructor&&n[0].constructor===Object?r=n[0]:(a=(i=n)[0],r=i[1]),r||(r={}),r=d.extend({},r),a&&!r.el&&(r.el=a),e.call(this,r),Object.keys(M).forEach(function(e){Object.keys(M[e]).forEach(function(i){t.prototype[i]||(t.prototype[i]=M[e][i])})});var l=this;void 0===l.modules&&(l.modules={}),Object.keys(l.modules).forEach(function(e){var t=l.modules[e];if(t.params){var i=Object.keys(t.params)[0],s=t.params[i];if("object"!=typeof s)return;if(!(i in r&&"enabled"in s))return;!0===r[i]&&(r[i]={enabled:!0}),"object"!=typeof r[i]||"enabled"in r[i]||(r[i].enabled=!0),r[i]||(r[i]={enabled:!1})}});var p=d.extend({},C);l.useModulesParams(p),l.params=d.extend({},p,z,r),l.originalParams=d.extend({},l.params),l.passedParams=d.extend({},r),l.$=s;var c=s(l.params.el);if(a=c[0]){if(c.length>1){var u=[];return c.each(function(e,i){var s=d.extend({},r,{el:i});u.push(new t(s))}),u}a.swiper=l,c.data("swiper",l);var v,f,m=c.children("."+l.params.wrapperClass);return d.extend(l,{$el:c,el:a,$wrapperEl:m,wrapperEl:m[0],classNames:[],slides:s(),slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:function(){return"horizontal"===l.params.direction},isVertical:function(){return"vertical"===l.params.direction},rtl:"rtl"===a.dir.toLowerCase()||"rtl"===c.css("direction"),rtlTranslate:"horizontal"===l.params.direction&&("rtl"===a.dir.toLowerCase()||"rtl"===c.css("direction")),wrongRTL:"-webkit-box"===m.css("display"),activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,allowSlideNext:l.params.allowSlideNext,allowSlidePrev:l.params.allowSlidePrev,touchEvents:(v=["touchstart","touchmove","touchend"],f=["mousedown","mousemove","mouseup"],h.pointerEvents?f=["pointerdown","pointermove","pointerup"]:h.prefixedPointerEvents&&(f=["MSPointerDown","MSPointerMove","MSPointerUp"]),l.touchEventsTouch={start:v[0],move:v[1],end:v[2]},l.touchEventsDesktop={start:f[0],move:f[1],end:f[2]},h.touch||!l.params.simulateTouch?l.touchEventsTouch:l.touchEventsDesktop),touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,formElements:"input, select, option, textarea, button, video",lastClickTime:d.now(),clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,isTouchEvent:void 0,startMoving:void 0},allowClick:!0,allowTouchMove:l.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),l.useModules(),l.params.init&&l.init(),l}}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var i={extendedDefaults:{configurable:!0},defaults:{configurable:!0},Class:{configurable:!0},$:{configurable:!0}};return t.prototype.slidesPerViewDynamic=function(){var e=this.params,t=this.slides,i=this.slidesGrid,s=this.size,a=this.activeIndex,r=1;if(e.centeredSlides){for(var n,o=t[a].swiperSlideSize,l=a+1;l<t.length;l+=1)t[l]&&!n&&(r+=1,(o+=t[l].swiperSlideSize)>s&&(n=!0));for(var d=a-1;d>=0;d-=1)t[d]&&!n&&(r+=1,(o+=t[d].swiperSlideSize)>s&&(n=!0))}else for(var h=a+1;h<t.length;h+=1)i[h]-i[a]<s&&(r+=1);return r},t.prototype.update=function(){var e=this;if(e&&!e.destroyed){var t=e.snapGrid,i=e.params;i.breakpoints&&e.setBreakpoint(),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.params.freeMode?(s(),e.params.autoHeight&&e.updateAutoHeight()):(("auto"===e.params.slidesPerView||e.params.slidesPerView>1)&&e.isEnd&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0))||s(),i.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}function s(){var t=e.rtlTranslate?-1*e.translate:e.translate,i=Math.min(Math.max(t,e.maxTranslate()),e.minTranslate());e.setTranslate(i),e.updateActiveIndex(),e.updateSlidesClasses()}},t.prototype.init=function(){this.initialized||(this.emit("beforeInit"),this.params.breakpoints&&this.setBreakpoint(),this.addClasses(),this.params.loop&&this.loopCreate(),this.updateSize(),this.updateSlides(),this.params.watchOverflow&&this.checkOverflow(),this.params.grabCursor&&this.setGrabCursor(),this.params.preloadImages&&this.preloadImages(),this.params.loop?this.slideTo(this.params.initialSlide+this.loopedSlides,0,this.params.runCallbacksOnInit):this.slideTo(this.params.initialSlide,0,this.params.runCallbacksOnInit),this.attachEvents(),this.initialized=!0,this.emit("init"))},t.prototype.destroy=function(e,t){void 0===e&&(e=!0),void 0===t&&(t=!0);var i=this,s=i.params,a=i.$el,r=i.$wrapperEl,n=i.slides;return void 0===i.params||i.destroyed?null:(i.emit("beforeDestroy"),i.initialized=!1,i.detachEvents(),s.loop&&i.loopDestroy(),t&&(i.removeClasses(),a.removeAttr("style"),r.removeAttr("style"),n&&n.length&&n.removeClass([s.slideVisibleClass,s.slideActiveClass,s.slideNextClass,s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")),i.emit("destroy"),Object.keys(i.eventsListeners).forEach(function(e){i.off(e)}),!1!==e&&(i.$el[0].swiper=null,i.$el.data("swiper",null),d.deleteProps(i)),i.destroyed=!0,null)},t.extendDefaults=function(e){d.extend(z,e)},i.extendedDefaults.get=function(){return z},i.defaults.get=function(){return C},i.Class.get=function(){return e},i.$.get=function(){return s},Object.defineProperties(t,i),t}(p),P={name:"device",proto:{device:y},static:{device:y}},$={name:"support",proto:{support:h},static:{support:h}},L={name:"browser",proto:{browser:S},static:{browser:S}},I={name:"resize",create:function(){var e=this;d.extend(e,{resize:{resizeHandler:function(){e&&!e.destroyed&&e.initialized&&(e.emit("beforeResize"),e.emit("resize"))},orientationChangeHandler:function(){e&&!e.destroyed&&e.initialized&&e.emit("orientationchange")}}})},on:{init:function(){t.addEventListener("resize",this.resize.resizeHandler),t.addEventListener("orientationchange",this.resize.orientationChangeHandler)},destroy:function(){t.removeEventListener("resize",this.resize.resizeHandler),t.removeEventListener("orientationchange",this.resize.orientationChangeHandler)}}},D={func:t.MutationObserver||t.WebkitMutationObserver,attach:function(e,t){void 0===t&&(t={});var i=this,s=new(0,D.func)(function(e){e.forEach(function(e){i.emit("observerUpdate",e)})});s.observe(e,{attributes:void 0===t.attributes||t.attributes,childList:void 0===t.childList||t.childList,characterData:void 0===t.characterData||t.characterData}),i.observer.observers.push(s)},init:function(){if(h.observer&&this.params.observer){if(this.params.observeParents)for(var e=this.$el.parents(),t=0;t<e.length;t+=1)this.observer.attach(e[t]);this.observer.attach(this.$el[0],{childList:!1}),this.observer.attach(this.$wrapperEl[0],{attributes:!1})}},destroy:function(){this.observer.observers.forEach(function(e){e.disconnect()}),this.observer.observers=[]}},O={name:"observer",params:{observer:!1,observeParents:!1},create:function(){d.extend(this,{observer:{init:D.init.bind(this),attach:D.attach.bind(this),destroy:D.destroy.bind(this),observers:[]}})},on:{init:function(){this.observer.init()},destroy:function(){this.observer.destroy()}}},A={update:function(e){var t=this,i=t.params,s=i.slidesPerView,a=i.slidesPerGroup,r=i.centeredSlides,n=t.virtual,o=n.from,l=n.to,h=n.slides,p=n.slidesGrid,c=n.renderSlide,u=n.offset;t.updateActiveIndex();var v,f,m,g=t.activeIndex||0;v=t.rtlTranslate?"right":t.isHorizontal()?"left":"top",r?(f=Math.floor(s/2)+a,m=Math.floor(s/2)+a):(f=s+(a-1),m=a);var b=Math.max((g||0)-m,0),w=Math.min((g||0)+f,h.length-1),y=(t.slidesGrid[b]||0)-(t.slidesGrid[0]||0);function x(){t.updateSlides(),t.updateProgress(),t.updateSlidesClasses(),t.lazy&&t.params.lazy.enabled&&t.lazy.load()}if(d.extend(t.virtual,{from:b,to:w,offset:y,slidesGrid:t.slidesGrid}),o===b&&l===w&&!e)return t.slidesGrid!==p&&y!==u&&t.slides.css(v,y+"px"),void t.updateProgress();if(t.params.virtual.renderExternal)return t.params.virtual.renderExternal.call(t,{offset:y,from:b,to:w,slides:function(){for(var e=[],t=b;t<=w;t+=1)e.push(h[t]);return e}()}),void x();var E=[],T=[];if(e)t.$wrapperEl.find("."+t.params.slideClass).remove();else for(var S=o;S<=l;S+=1)(S<b||S>w)&&t.$wrapperEl.find("."+t.params.slideClass+'[data-swiper-slide-index="'+S+'"]').remove();for(var C=0;C<h.length;C+=1)C>=b&&C<=w&&(void 0===l||e?T.push(C):(C>l&&T.push(C),C<o&&E.push(C)));T.forEach(function(e){t.$wrapperEl.append(c(h[e],e))}),E.sort(function(e,t){return e<t}).forEach(function(e){t.$wrapperEl.prepend(c(h[e],e))}),t.$wrapperEl.children(".swiper-slide").css(v,y+"px"),x()},renderSlide:function(e,t){var i=this.params.virtual;if(i.cache&&this.virtual.cache[t])return this.virtual.cache[t];var a=i.renderSlide?s(i.renderSlide.call(this,e,t)):s('<div class="'+this.params.slideClass+'" data-swiper-slide-index="'+t+'">'+e+"</div>");return a.attr("data-swiper-slide-index")||a.attr("data-swiper-slide-index",t),i.cache&&(this.virtual.cache[t]=a),a},appendSlide:function(e){this.virtual.slides.push(e),this.virtual.update(!0)},prependSlide:function(e){if(this.virtual.slides.unshift(e),this.params.virtual.cache){var t=this.virtual.cache,i={};Object.keys(t).forEach(function(e){i[e+1]=t[e]}),this.virtual.cache=i}this.virtual.update(!0),this.slideNext(0)}},G={name:"virtual",params:{virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null}},create:function(){d.extend(this,{virtual:{update:A.update.bind(this),appendSlide:A.appendSlide.bind(this),prependSlide:A.prependSlide.bind(this),renderSlide:A.renderSlide.bind(this),slides:this.params.virtual.slides,cache:{}}})},on:{beforeInit:function(){if(this.params.virtual.enabled){this.classNames.push(this.params.containerModifierClass+"virtual");var e={watchSlidesProgress:!0};d.extend(this.params,e),d.extend(this.originalParams,e),this.virtual.update()}},setTranslate:function(){this.params.virtual.enabled&&this.virtual.update()}}},H={handle:function(i){var s=this.rtlTranslate,a=i;a.originalEvent&&(a=a.originalEvent);var r=a.keyCode||a.charCode;if(!this.allowSlideNext&&(this.isHorizontal()&&39===r||this.isVertical()&&40===r))return!1;if(!this.allowSlidePrev&&(this.isHorizontal()&&37===r||this.isVertical()&&38===r))return!1;if(!(a.shiftKey||a.altKey||a.ctrlKey||a.metaKey||e.activeElement&&e.activeElement.nodeName&&("input"===e.activeElement.nodeName.toLowerCase()||"textarea"===e.activeElement.nodeName.toLowerCase()))){if(this.params.keyboard.onlyInViewport&&(37===r||39===r||38===r||40===r)){var n=!1;if(this.$el.parents("."+this.params.slideClass).length>0&&0===this.$el.parents("."+this.params.slideActiveClass).length)return;var o=t.innerWidth,l=t.innerHeight,d=this.$el.offset();s&&(d.left-=this.$el[0].scrollLeft);for(var h=[[d.left,d.top],[d.left+this.width,d.top],[d.left,d.top+this.height],[d.left+this.width,d.top+this.height]],p=0;p<h.length;p+=1){var c=h[p];c[0]>=0&&c[0]<=o&&c[1]>=0&&c[1]<=l&&(n=!0)}if(!n)return}this.isHorizontal()?(37!==r&&39!==r||(a.preventDefault?a.preventDefault():a.returnValue=!1),(39===r&&!s||37===r&&s)&&this.slideNext(),(37===r&&!s||39===r&&s)&&this.slidePrev()):(38!==r&&40!==r||(a.preventDefault?a.preventDefault():a.returnValue=!1),40===r&&this.slideNext(),38===r&&this.slidePrev()),this.emit("keyPress",r)}},enable:function(){this.keyboard.enabled||(s(e).on("keydown",this.keyboard.handle),this.keyboard.enabled=!0)},disable:function(){this.keyboard.enabled&&(s(e).off("keydown",this.keyboard.handle),this.keyboard.enabled=!1)}},N={name:"keyboard",params:{keyboard:{enabled:!1,onlyInViewport:!0}},create:function(){d.extend(this,{keyboard:{enabled:!1,enable:H.enable.bind(this),disable:H.disable.bind(this),handle:H.handle.bind(this)}})},on:{init:function(){this.params.keyboard.enabled&&this.keyboard.enable()},destroy:function(){this.keyboard.enabled&&this.keyboard.disable()}}};var B={lastScrollTime:d.now(),event:t.navigator.userAgent.indexOf("firefox")>-1?"DOMMouseScroll":function(){var t="onwheel"in e;if(!t){var i=e.createElement("div");i.setAttribute("onwheel","return;"),t="function"==typeof i.onwheel}return!t&&e.implementation&&e.implementation.hasFeature&&!0!==e.implementation.hasFeature("","")&&(t=e.implementation.hasFeature("Events.wheel","3.0")),t}()?"wheel":"mousewheel",normalize:function(e){var t=0,i=0,s=0,a=0;return"detail"in e&&(i=e.detail),"wheelDelta"in e&&(i=-e.wheelDelta/120),"wheelDeltaY"in e&&(i=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=i,i=0),s=10*t,a=10*i,"deltaY"in e&&(a=e.deltaY),"deltaX"in e&&(s=e.deltaX),(s||a)&&e.deltaMode&&(1===e.deltaMode?(s*=40,a*=40):(s*=800,a*=800)),s&&!t&&(t=s<1?-1:1),a&&!i&&(i=a<1?-1:1),{spinX:t,spinY:i,pixelX:s,pixelY:a}},handleMouseEnter:function(){this.mouseEntered=!0},handleMouseLeave:function(){this.mouseEntered=!1},handle:function(e){var i=e,s=this,a=s.params.mousewheel;if(!s.mouseEntered&&!a.releaseOnEdges)return!0;i.originalEvent&&(i=i.originalEvent);var r=0,n=s.rtlTranslate?-1:1,o=B.normalize(i);if(a.forceToAxis)if(s.isHorizontal()){if(!(Math.abs(o.pixelX)>Math.abs(o.pixelY)))return!0;r=o.pixelX*n}else{if(!(Math.abs(o.pixelY)>Math.abs(o.pixelX)))return!0;r=o.pixelY}else r=Math.abs(o.pixelX)>Math.abs(o.pixelY)?-o.pixelX*n:-o.pixelY;if(0===r)return!0;if(a.invert&&(r=-r),s.params.freeMode){s.params.loop&&s.loopFix();var l=s.getTranslate()+r*a.sensitivity,h=s.isBeginning,p=s.isEnd;if(l>=s.minTranslate()&&(l=s.minTranslate()),l<=s.maxTranslate()&&(l=s.maxTranslate()),s.setTransition(0),s.setTranslate(l),s.updateProgress(),s.updateActiveIndex(),s.updateSlidesClasses(),(!h&&s.isBeginning||!p&&s.isEnd)&&s.updateSlidesClasses(),s.params.freeModeSticky&&(clearTimeout(s.mousewheel.timeout),s.mousewheel.timeout=d.nextTick(function(){s.slideToClosest()},300)),s.emit("scroll",i),s.params.autoplay&&s.params.autoplayDisableOnInteraction&&s.autoplay.stop(),l===s.minTranslate()||l===s.maxTranslate())return!0}else{if(d.now()-s.mousewheel.lastScrollTime>60)if(r<0)if(s.isEnd&&!s.params.loop||s.animating){if(a.releaseOnEdges)return!0}else s.slideNext(),s.emit("scroll",i);else if(s.isBeginning&&!s.params.loop||s.animating){if(a.releaseOnEdges)return!0}else s.slidePrev(),s.emit("scroll",i);s.mousewheel.lastScrollTime=(new t.Date).getTime()}return i.preventDefault?i.preventDefault():i.returnValue=!1,!1},enable:function(){if(!B.event)return!1;if(this.mousewheel.enabled)return!1;var e=this.$el;return"container"!==this.params.mousewheel.eventsTarged&&(e=s(this.params.mousewheel.eventsTarged)),e.on("mouseenter",this.mousewheel.handleMouseEnter),e.on("mouseleave",this.mousewheel.handleMouseLeave),e.on(B.event,this.mousewheel.handle),this.mousewheel.enabled=!0,!0},disable:function(){if(!B.event)return!1;if(!this.mousewheel.enabled)return!1;var e=this.$el;return"container"!==this.params.mousewheel.eventsTarged&&(e=s(this.params.mousewheel.eventsTarged)),e.off(B.event,this.mousewheel.handle),this.mousewheel.enabled=!1,!0}},X={update:function(){var e=this.params.navigation;if(!this.params.loop){var t=this.navigation,i=t.$nextEl,s=t.$prevEl;s&&s.length>0&&(this.isBeginning?s.addClass(e.disabledClass):s.removeClass(e.disabledClass),s[this.params.watchOverflow&&this.isLocked?"addClass":"removeClass"](e.lockClass)),i&&i.length>0&&(this.isEnd?i.addClass(e.disabledClass):i.removeClass(e.disabledClass),i[this.params.watchOverflow&&this.isLocked?"addClass":"removeClass"](e.lockClass))}},init:function(){var e,t,i=this,a=i.params.navigation;(a.nextEl||a.prevEl)&&(a.nextEl&&(e=s(a.nextEl),i.params.uniqueNavElements&&"string"==typeof a.nextEl&&e.length>1&&1===i.$el.find(a.nextEl).length&&(e=i.$el.find(a.nextEl))),a.prevEl&&(t=s(a.prevEl),i.params.uniqueNavElements&&"string"==typeof a.prevEl&&t.length>1&&1===i.$el.find(a.prevEl).length&&(t=i.$el.find(a.prevEl))),e&&e.length>0&&e.on("click",function(e){e.preventDefault(),i.isEnd&&!i.params.loop||i.slideNext()}),t&&t.length>0&&t.on("click",function(e){e.preventDefault(),i.isBeginning&&!i.params.loop||i.slidePrev()}),d.extend(i.navigation,{$nextEl:e,nextEl:e&&e[0],$prevEl:t,prevEl:t&&t[0]}))},destroy:function(){var e=this.navigation,t=e.$nextEl,i=e.$prevEl;t&&t.length&&(t.off("click"),t.removeClass(this.params.navigation.disabledClass)),i&&i.length&&(i.off("click"),i.removeClass(this.params.navigation.disabledClass))}},Y={update:function(){var e=this.rtl,t=this.params.pagination;if(t.el&&this.pagination.el&&this.pagination.$el&&0!==this.pagination.$el.length){var i,a=this.virtual&&this.params.virtual.enabled?this.virtual.slides.length:this.slides.length,r=this.pagination.$el,n=this.params.loop?Math.ceil((a-2*this.loopedSlides)/this.params.slidesPerGroup):this.snapGrid.length;if(this.params.loop?((i=Math.ceil((this.activeIndex-this.loopedSlides)/this.params.slidesPerGroup))>a-1-2*this.loopedSlides&&(i-=a-2*this.loopedSlides),i>n-1&&(i-=n),i<0&&"bullets"!==this.params.paginationType&&(i=n+i)):i=void 0!==this.snapIndex?this.snapIndex:this.activeIndex||0,"bullets"===t.type&&this.pagination.bullets&&this.pagination.bullets.length>0){var o,l,d,h=this.pagination.bullets;if(t.dynamicBullets&&(this.pagination.bulletSize=h.eq(0)[this.isHorizontal()?"outerWidth":"outerHeight"](!0),r.css(this.isHorizontal()?"width":"height",this.pagination.bulletSize*(t.dynamicMainBullets+4)+"px"),t.dynamicMainBullets>1&&void 0!==this.previousIndex&&(this.pagination.dynamicBulletIndex+=i-this.previousIndex,this.pagination.dynamicBulletIndex>t.dynamicMainBullets-1?this.pagination.dynamicBulletIndex=t.dynamicMainBullets-1:this.pagination.dynamicBulletIndex<0&&(this.pagination.dynamicBulletIndex=0)),o=i-this.pagination.dynamicBulletIndex,d=((l=o+(Math.min(h.length,t.dynamicMainBullets)-1))+o)/2),h.removeClass(t.bulletActiveClass+" "+t.bulletActiveClass+"-next "+t.bulletActiveClass+"-next-next "+t.bulletActiveClass+"-prev "+t.bulletActiveClass+"-prev-prev "+t.bulletActiveClass+"-main"),r.length>1)h.each(function(e,a){var r=s(a),n=r.index();n===i&&r.addClass(t.bulletActiveClass),t.dynamicBullets&&(n>=o&&n<=l&&r.addClass(t.bulletActiveClass+"-main"),n===o&&r.prev().addClass(t.bulletActiveClass+"-prev").prev().addClass(t.bulletActiveClass+"-prev-prev"),n===l&&r.next().addClass(t.bulletActiveClass+"-next").next().addClass(t.bulletActiveClass+"-next-next"))});else if(h.eq(i).addClass(t.bulletActiveClass),t.dynamicBullets){for(var p=h.eq(o),c=h.eq(l),u=o;u<=l;u+=1)h.eq(u).addClass(t.bulletActiveClass+"-main");p.prev().addClass(t.bulletActiveClass+"-prev").prev().addClass(t.bulletActiveClass+"-prev-prev"),c.next().addClass(t.bulletActiveClass+"-next").next().addClass(t.bulletActiveClass+"-next-next")}if(t.dynamicBullets){var v=Math.min(h.length,t.dynamicMainBullets+4),f=(this.pagination.bulletSize*v-this.pagination.bulletSize)/2-d*this.pagination.bulletSize,m=e?"right":"left";h.css(this.isHorizontal()?m:"top",f+"px")}}if("fraction"===t.type&&(r.find("."+t.currentClass).text(t.formatFractionCurrent(i+1)),r.find("."+t.totalClass).text(t.formatFractionTotal(n))),"progressbar"===t.type){var g;g=t.progressbarOpposite?this.isHorizontal()?"vertical":"horizontal":this.isHorizontal()?"horizontal":"vertical";var b=(i+1)/n,w=1,y=1;"horizontal"===g?w=b:y=b,r.find("."+t.progressbarFillClass).transform("translate3d(0,0,0) scaleX("+w+") scaleY("+y+")").transition(this.params.speed)}"custom"===t.type&&t.renderCustom?(r.html(t.renderCustom(this,i+1,n)),this.emit("paginationRender",this,r[0])):this.emit("paginationUpdate",this,r[0]),r[this.params.watchOverflow&&this.isLocked?"addClass":"removeClass"](t.lockClass)}},render:function(){var e=this.params.pagination;if(e.el&&this.pagination.el&&this.pagination.$el&&0!==this.pagination.$el.length){var t=this.virtual&&this.params.virtual.enabled?this.virtual.slides.length:this.slides.length,i=this.pagination.$el,s="";if("bullets"===e.type){for(var a=this.params.loop?Math.ceil((t-2*this.loopedSlides)/this.params.slidesPerGroup):this.snapGrid.length,r=0;r<a;r+=1)e.renderBullet?s+=e.renderBullet.call(this,r,e.bulletClass):s+="<"+e.bulletElement+' class="'+e.bulletClass+'"></'+e.bulletElement+">";i.html(s),this.pagination.bullets=i.find("."+e.bulletClass)}"fraction"===e.type&&(s=e.renderFraction?e.renderFraction.call(this,e.currentClass,e.totalClass):'<span class="'+e.currentClass+'"></span> / <span class="'+e.totalClass+'"></span>',i.html(s)),"progressbar"===e.type&&(s=e.renderProgressbar?e.renderProgressbar.call(this,e.progressbarFillClass):'<span class="'+e.progressbarFillClass+'"></span>',i.html(s)),"custom"!==e.type&&this.emit("paginationRender",this.pagination.$el[0])}},init:function(){var e=this,t=e.params.pagination;if(t.el){var i=s(t.el);0!==i.length&&(e.params.uniqueNavElements&&"string"==typeof t.el&&i.length>1&&1===e.$el.find(t.el).length&&(i=e.$el.find(t.el)),"bullets"===t.type&&t.clickable&&i.addClass(t.clickableClass),i.addClass(t.modifierClass+t.type),"bullets"===t.type&&t.dynamicBullets&&(i.addClass(""+t.modifierClass+t.type+"-dynamic"),e.pagination.dynamicBulletIndex=0,t.dynamicMainBullets<1&&(t.dynamicMainBullets=1)),"progressbar"===t.type&&t.progressbarOpposite&&i.addClass(t.progressbarOppositeClass),t.clickable&&i.on("click","."+t.bulletClass,function(t){t.preventDefault();var i=s(this).index()*e.params.slidesPerGroup;e.params.loop&&(i+=e.loopedSlides),e.slideTo(i)}),d.extend(e.pagination,{$el:i,el:i[0]}))}},destroy:function(){var e=this.params.pagination;if(e.el&&this.pagination.el&&this.pagination.$el&&0!==this.pagination.$el.length){var t=this.pagination.$el;t.removeClass(e.hiddenClass),t.removeClass(e.modifierClass+e.type),this.pagination.bullets&&this.pagination.bullets.removeClass(e.bulletActiveClass),e.clickable&&t.off("click","."+e.bulletClass)}}},V={setTranslate:function(){if(this.params.scrollbar.el&&this.scrollbar.el){var e=this.scrollbar,t=this.rtlTranslate,i=this.progress,s=e.dragSize,a=e.trackSize,r=e.$dragEl,n=e.$el,o=this.params.scrollbar,l=s,d=(a-s)*i;t?(d=-d)>0?(l=s-d,d=0):-d+s>a&&(l=a+d):d<0?(l=s+d,d=0):d+s>a&&(l=a-d),this.isHorizontal()?(h.transforms3d?r.transform("translate3d("+d+"px, 0, 0)"):r.transform("translateX("+d+"px)"),r[0].style.width=l+"px"):(h.transforms3d?r.transform("translate3d(0px, "+d+"px, 0)"):r.transform("translateY("+d+"px)"),r[0].style.height=l+"px"),o.hide&&(clearTimeout(this.scrollbar.timeout),n[0].style.opacity=1,this.scrollbar.timeout=setTimeout(function(){n[0].style.opacity=0,n.transition(400)},1e3))}},setTransition:function(e){this.params.scrollbar.el&&this.scrollbar.el&&this.scrollbar.$dragEl.transition(e)},updateSize:function(){if(this.params.scrollbar.el&&this.scrollbar.el){var e=this.scrollbar,t=e.$dragEl,i=e.$el;t[0].style.width="",t[0].style.height="";var s,a=this.isHorizontal()?i[0].offsetWidth:i[0].offsetHeight,r=this.size/this.virtualSize,n=r*(a/this.size);s="auto"===this.params.scrollbar.dragSize?a*r:parseInt(this.params.scrollbar.dragSize,10),this.isHorizontal()?t[0].style.width=s+"px":t[0].style.height=s+"px",i[0].style.display=r>=1?"none":"",this.params.scrollbarHide&&(i[0].style.opacity=0),d.extend(e,{trackSize:a,divider:r,moveDivider:n,dragSize:s}),e.$el[this.params.watchOverflow&&this.isLocked?"addClass":"removeClass"](this.params.scrollbar.lockClass)}},setDragPosition:function(e){var t,i=this.scrollbar,s=this.rtlTranslate,a=i.$el,r=i.dragSize,n=i.trackSize;t=((this.isHorizontal()?"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageX:e.pageX||e.clientX:"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageY:e.pageY||e.clientY)-a.offset()[this.isHorizontal()?"left":"top"]-r/2)/(n-r),t=Math.max(Math.min(t,1),0),s&&(t=1-t);var o=this.minTranslate()+(this.maxTranslate()-this.minTranslate())*t;this.updateProgress(o),this.setTranslate(o),this.updateActiveIndex(),this.updateSlidesClasses()},onDragStart:function(e){var t=this.params.scrollbar,i=this.scrollbar,s=this.$wrapperEl,a=i.$el,r=i.$dragEl;this.scrollbar.isTouched=!0,e.preventDefault(),e.stopPropagation(),s.transition(100),r.transition(100),i.setDragPosition(e),clearTimeout(this.scrollbar.dragTimeout),a.transition(0),t.hide&&a.css("opacity",1),this.emit("scrollbarDragStart",e)},onDragMove:function(e){var t=this.scrollbar,i=this.$wrapperEl,s=t.$el,a=t.$dragEl;this.scrollbar.isTouched&&(e.preventDefault?e.preventDefault():e.returnValue=!1,t.setDragPosition(e),i.transition(0),s.transition(0),a.transition(0),this.emit("scrollbarDragMove",e))},onDragEnd:function(e){var t=this.params.scrollbar,i=this.scrollbar.$el;this.scrollbar.isTouched&&(this.scrollbar.isTouched=!1,t.hide&&(clearTimeout(this.scrollbar.dragTimeout),this.scrollbar.dragTimeout=d.nextTick(function(){i.css("opacity",0),i.transition(400)},1e3)),this.emit("scrollbarDragEnd",e),t.snapOnRelease&&this.slideToClosest())},enableDraggable:function(){if(this.params.scrollbar.el){var t=this.scrollbar,i=this.touchEvents,s=this.touchEventsDesktop,a=this.params,r=t.$el[0],n=!(!h.passiveListener||!a.passiveListener)&&{passive:!1,capture:!1},o=!(!h.passiveListener||!a.passiveListener)&&{passive:!0,capture:!1};h.touch||!h.pointerEvents&&!h.prefixedPointerEvents?(h.touch&&(r.addEventListener(i.start,this.scrollbar.onDragStart,n),r.addEventListener(i.move,this.scrollbar.onDragMove,n),r.addEventListener(i.end,this.scrollbar.onDragEnd,o)),(a.simulateTouch&&!y.ios&&!y.android||a.simulateTouch&&!h.touch&&y.ios)&&(r.addEventListener("mousedown",this.scrollbar.onDragStart,n),e.addEventListener("mousemove",this.scrollbar.onDragMove,n),e.addEventListener("mouseup",this.scrollbar.onDragEnd,o))):(r.addEventListener(s.start,this.scrollbar.onDragStart,n),e.addEventListener(s.move,this.scrollbar.onDragMove,n),e.addEventListener(s.end,this.scrollbar.onDragEnd,o))}},disableDraggable:function(){if(this.params.scrollbar.el){var t=this.scrollbar,i=this.touchEvents,s=this.touchEventsDesktop,a=this.params,r=t.$el[0],n=!(!h.passiveListener||!a.passiveListener)&&{passive:!1,capture:!1},o=!(!h.passiveListener||!a.passiveListener)&&{passive:!0,capture:!1};h.touch||!h.pointerEvents&&!h.prefixedPointerEvents?(h.touch&&(r.removeEventListener(i.start,this.scrollbar.onDragStart,n),r.removeEventListener(i.move,this.scrollbar.onDragMove,n),r.removeEventListener(i.end,this.scrollbar.onDragEnd,o)),(a.simulateTouch&&!y.ios&&!y.android||a.simulateTouch&&!h.touch&&y.ios)&&(r.removeEventListener("mousedown",this.scrollbar.onDragStart,n),e.removeEventListener("mousemove",this.scrollbar.onDragMove,n),e.removeEventListener("mouseup",this.scrollbar.onDragEnd,o))):(r.removeEventListener(s.start,this.scrollbar.onDragStart,n),e.removeEventListener(s.move,this.scrollbar.onDragMove,n),e.removeEventListener(s.end,this.scrollbar.onDragEnd,o))}},init:function(){if(this.params.scrollbar.el){var e=this.scrollbar,t=this.$el,i=this.params.scrollbar,a=s(i.el);this.params.uniqueNavElements&&"string"==typeof i.el&&a.length>1&&1===t.find(i.el).length&&(a=t.find(i.el));var r=a.find("."+this.params.scrollbar.dragClass);0===r.length&&(r=s('<div class="'+this.params.scrollbar.dragClass+'"></div>'),a.append(r)),d.extend(e,{$el:a,el:a[0],$dragEl:r,dragEl:r[0]}),i.draggable&&e.enableDraggable()}},destroy:function(){this.scrollbar.disableDraggable()}},R={setTransform:function(e,t){var i=this.rtl,a=s(e),r=i?-1:1,n=a.attr("data-swiper-parallax")||"0",o=a.attr("data-swiper-parallax-x"),l=a.attr("data-swiper-parallax-y"),d=a.attr("data-swiper-parallax-scale"),h=a.attr("data-swiper-parallax-opacity");if(o||l?(o=o||"0",l=l||"0"):this.isHorizontal()?(o=n,l="0"):(l=n,o="0"),o=o.indexOf("%")>=0?parseInt(o,10)*t*r+"%":o*t*r+"px",l=l.indexOf("%")>=0?parseInt(l,10)*t+"%":l*t+"px",void 0!==h&&null!==h){var p=h-(h-1)*(1-Math.abs(t));a[0].style.opacity=p}if(void 0===d||null===d)a.transform("translate3d("+o+", "+l+", 0px)");else{var c=d-(d-1)*(1-Math.abs(t));a.transform("translate3d("+o+", "+l+", 0px) scale("+c+")")}},setTranslate:function(){var e=this,t=e.$el,i=e.slides,a=e.progress,r=e.snapGrid;t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(t,i){e.parallax.setTransform(i,a)}),i.each(function(t,i){var n=i.progress;e.params.slidesPerGroup>1&&"auto"!==e.params.slidesPerView&&(n+=Math.ceil(t/2)-a*(r.length-1)),n=Math.min(Math.max(n,-1),1),s(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(t,i){e.parallax.setTransform(i,n)})})},setTransition:function(e){void 0===e&&(e=this.params.speed);this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(t,i){var a=s(i),r=parseInt(a.attr("data-swiper-parallax-duration"),10)||e;0===e&&(r=0),a.transition(r)})}},F={getDistanceBetweenTouches:function(e){if(e.targetTouches.length<2)return 1;var t=e.targetTouches[0].pageX,i=e.targetTouches[0].pageY,s=e.targetTouches[1].pageX,a=e.targetTouches[1].pageY;return Math.sqrt(Math.pow(s-t,2)+Math.pow(a-i,2))},onGestureStart:function(e){var t=this.params.zoom,i=this.zoom,a=i.gesture;if(i.fakeGestureTouched=!1,i.fakeGestureMoved=!1,!h.gestures){if("touchstart"!==e.type||"touchstart"===e.type&&e.targetTouches.length<2)return;i.fakeGestureTouched=!0,a.scaleStart=F.getDistanceBetweenTouches(e)}a.$slideEl&&a.$slideEl.length||(a.$slideEl=s(e.target).closest(".swiper-slide"),0===a.$slideEl.length&&(a.$slideEl=this.slides.eq(this.activeIndex)),a.$imageEl=a.$slideEl.find("img, svg, canvas"),a.$imageWrapEl=a.$imageEl.parent("."+t.containerClass),a.maxRatio=a.$imageWrapEl.attr("data-swiper-zoom")||t.maxRatio,0!==a.$imageWrapEl.length)?(a.$imageEl.transition(0),this.zoom.isScaling=!0):a.$imageEl=void 0},onGestureChange:function(e){var t=this.params.zoom,i=this.zoom,s=i.gesture;if(!h.gestures){if("touchmove"!==e.type||"touchmove"===e.type&&e.targetTouches.length<2)return;i.fakeGestureMoved=!0,s.scaleMove=F.getDistanceBetweenTouches(e)}s.$imageEl&&0!==s.$imageEl.length&&(h.gestures?this.zoom.scale=e.scale*i.currentScale:i.scale=s.scaleMove/s.scaleStart*i.currentScale,i.scale>s.maxRatio&&(i.scale=s.maxRatio-1+Math.pow(i.scale-s.maxRatio+1,.5)),i.scale<t.minRatio&&(i.scale=t.minRatio+1-Math.pow(t.minRatio-i.scale+1,.5)),s.$imageEl.transform("translate3d(0,0,0) scale("+i.scale+")"))},onGestureEnd:function(e){var t=this.params.zoom,i=this.zoom,s=i.gesture;if(!h.gestures){if(!i.fakeGestureTouched||!i.fakeGestureMoved)return;if("touchend"!==e.type||"touchend"===e.type&&e.changedTouches.length<2&&!y.android)return;i.fakeGestureTouched=!1,i.fakeGestureMoved=!1}s.$imageEl&&0!==s.$imageEl.length&&(i.scale=Math.max(Math.min(i.scale,s.maxRatio),t.minRatio),s.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale("+i.scale+")"),i.currentScale=i.scale,i.isScaling=!1,1===i.scale&&(s.$slideEl=void 0))},onTouchStart:function(e){var t=this.zoom,i=t.gesture,s=t.image;i.$imageEl&&0!==i.$imageEl.length&&(s.isTouched||(y.android&&e.preventDefault(),s.isTouched=!0,s.touchesStart.x="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,s.touchesStart.y="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY))},onTouchMove:function(e){var t=this.zoom,i=t.gesture,s=t.image,a=t.velocity;if(i.$imageEl&&0!==i.$imageEl.length&&(this.allowClick=!1,s.isTouched&&i.$slideEl)){s.isMoved||(s.width=i.$imageEl[0].offsetWidth,s.height=i.$imageEl[0].offsetHeight,s.startX=d.getTranslate(i.$imageWrapEl[0],"x")||0,s.startY=d.getTranslate(i.$imageWrapEl[0],"y")||0,i.slideWidth=i.$slideEl[0].offsetWidth,i.slideHeight=i.$slideEl[0].offsetHeight,i.$imageWrapEl.transition(0),this.rtl&&(s.startX=-s.startX,s.startY=-s.startY));var r=s.width*t.scale,n=s.height*t.scale;if(!(r<i.slideWidth&&n<i.slideHeight)){if(s.minX=Math.min(i.slideWidth/2-r/2,0),s.maxX=-s.minX,s.minY=Math.min(i.slideHeight/2-n/2,0),s.maxY=-s.minY,s.touchesCurrent.x="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,s.touchesCurrent.y="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,!s.isMoved&&!t.isScaling){if(this.isHorizontal()&&(Math.floor(s.minX)===Math.floor(s.startX)&&s.touchesCurrent.x<s.touchesStart.x||Math.floor(s.maxX)===Math.floor(s.startX)&&s.touchesCurrent.x>s.touchesStart.x))return void(s.isTouched=!1);if(!this.isHorizontal()&&(Math.floor(s.minY)===Math.floor(s.startY)&&s.touchesCurrent.y<s.touchesStart.y||Math.floor(s.maxY)===Math.floor(s.startY)&&s.touchesCurrent.y>s.touchesStart.y))return void(s.isTouched=!1)}e.preventDefault(),e.stopPropagation(),s.isMoved=!0,s.currentX=s.touchesCurrent.x-s.touchesStart.x+s.startX,s.currentY=s.touchesCurrent.y-s.touchesStart.y+s.startY,s.currentX<s.minX&&(s.currentX=s.minX+1-Math.pow(s.minX-s.currentX+1,.8)),s.currentX>s.maxX&&(s.currentX=s.maxX-1+Math.pow(s.currentX-s.maxX+1,.8)),s.currentY<s.minY&&(s.currentY=s.minY+1-Math.pow(s.minY-s.currentY+1,.8)),s.currentY>s.maxY&&(s.currentY=s.maxY-1+Math.pow(s.currentY-s.maxY+1,.8)),a.prevPositionX||(a.prevPositionX=s.touchesCurrent.x),a.prevPositionY||(a.prevPositionY=s.touchesCurrent.y),a.prevTime||(a.prevTime=Date.now()),a.x=(s.touchesCurrent.x-a.prevPositionX)/(Date.now()-a.prevTime)/2,a.y=(s.touchesCurrent.y-a.prevPositionY)/(Date.now()-a.prevTime)/2,Math.abs(s.touchesCurrent.x-a.prevPositionX)<2&&(a.x=0),Math.abs(s.touchesCurrent.y-a.prevPositionY)<2&&(a.y=0),a.prevPositionX=s.touchesCurrent.x,a.prevPositionY=s.touchesCurrent.y,a.prevTime=Date.now(),i.$imageWrapEl.transform("translate3d("+s.currentX+"px, "+s.currentY+"px,0)")}}},onTouchEnd:function(){var e=this.zoom,t=e.gesture,i=e.image,s=e.velocity;if(t.$imageEl&&0!==t.$imageEl.length){if(!i.isTouched||!i.isMoved)return i.isTouched=!1,void(i.isMoved=!1);i.isTouched=!1,i.isMoved=!1;var a=300,r=300,n=s.x*a,o=i.currentX+n,l=s.y*r,d=i.currentY+l;0!==s.x&&(a=Math.abs((o-i.currentX)/s.x)),0!==s.y&&(r=Math.abs((d-i.currentY)/s.y));var h=Math.max(a,r);i.currentX=o,i.currentY=d;var p=i.width*e.scale,c=i.height*e.scale;i.minX=Math.min(t.slideWidth/2-p/2,0),i.maxX=-i.minX,i.minY=Math.min(t.slideHeight/2-c/2,0),i.maxY=-i.minY,i.currentX=Math.max(Math.min(i.currentX,i.maxX),i.minX),i.currentY=Math.max(Math.min(i.currentY,i.maxY),i.minY),t.$imageWrapEl.transition(h).transform("translate3d("+i.currentX+"px, "+i.currentY+"px,0)")}},onTransitionEnd:function(){var e=this.zoom,t=e.gesture;t.$slideEl&&this.previousIndex!==this.activeIndex&&(t.$imageEl.transform("translate3d(0,0,0) scale(1)"),t.$imageWrapEl.transform("translate3d(0,0,0)"),t.$slideEl=void 0,t.$imageEl=void 0,t.$imageWrapEl=void 0,e.scale=1,e.currentScale=1)},toggle:function(e){var t=this.zoom;t.scale&&1!==t.scale?t.out():t.in(e)},in:function(e){var t,i,a,r,n,o,l,d,h,p,c,u,v,f,m,g,b=this.zoom,w=this.params.zoom,y=b.gesture,x=b.image;(y.$slideEl||(y.$slideEl=this.clickedSlide?s(this.clickedSlide):this.slides.eq(this.activeIndex),y.$imageEl=y.$slideEl.find("img, svg, canvas"),y.$imageWrapEl=y.$imageEl.parent("."+w.containerClass)),y.$imageEl&&0!==y.$imageEl.length)&&(y.$slideEl.addClass(""+w.zoomedSlideClass),void 0===x.touchesStart.x&&e?(t="touchend"===e.type?e.changedTouches[0].pageX:e.pageX,i="touchend"===e.type?e.changedTouches[0].pageY:e.pageY):(t=x.touchesStart.x,i=x.touchesStart.y),b.scale=y.$imageWrapEl.attr("data-swiper-zoom")||w.maxRatio,b.currentScale=y.$imageWrapEl.attr("data-swiper-zoom")||w.maxRatio,e?(m=y.$slideEl[0].offsetWidth,g=y.$slideEl[0].offsetHeight,a=y.$slideEl.offset().left+m/2-t,r=y.$slideEl.offset().top+g/2-i,l=y.$imageEl[0].offsetWidth,d=y.$imageEl[0].offsetHeight,h=l*b.scale,p=d*b.scale,v=-(c=Math.min(m/2-h/2,0)),f=-(u=Math.min(g/2-p/2,0)),n=a*b.scale,o=r*b.scale,n<c&&(n=c),n>v&&(n=v),o<u&&(o=u),o>f&&(o=f)):(n=0,o=0),y.$imageWrapEl.transition(300).transform("translate3d("+n+"px, "+o+"px,0)"),y.$imageEl.transition(300).transform("translate3d(0,0,0) scale("+b.scale+")"))},out:function(){var e=this.zoom,t=this.params.zoom,i=e.gesture;i.$slideEl||(i.$slideEl=this.clickedSlide?s(this.clickedSlide):this.slides.eq(this.activeIndex),i.$imageEl=i.$slideEl.find("img, svg, canvas"),i.$imageWrapEl=i.$imageEl.parent("."+t.containerClass)),i.$imageEl&&0!==i.$imageEl.length&&(e.scale=1,e.currentScale=1,i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),i.$slideEl.removeClass(""+t.zoomedSlideClass),i.$slideEl=void 0)},enable:function(){var e=this.zoom;if(!e.enabled){e.enabled=!0;var t=!("touchstart"!==this.touchEvents.start||!h.passiveListener||!this.params.passiveListeners)&&{passive:!0,capture:!1};h.gestures?(this.$wrapperEl.on("gesturestart",".swiper-slide",e.onGestureStart,t),this.$wrapperEl.on("gesturechange",".swiper-slide",e.onGestureChange,t),this.$wrapperEl.on("gestureend",".swiper-slide",e.onGestureEnd,t)):"touchstart"===this.touchEvents.start&&(this.$wrapperEl.on(this.touchEvents.start,".swiper-slide",e.onGestureStart,t),this.$wrapperEl.on(this.touchEvents.move,".swiper-slide",e.onGestureChange,t),this.$wrapperEl.on(this.touchEvents.end,".swiper-slide",e.onGestureEnd,t)),this.$wrapperEl.on(this.touchEvents.move,"."+this.params.zoom.containerClass,e.onTouchMove)}},disable:function(){var e=this.zoom;if(e.enabled){this.zoom.enabled=!1;var t=!("touchstart"!==this.touchEvents.start||!h.passiveListener||!this.params.passiveListeners)&&{passive:!0,capture:!1};h.gestures?(this.$wrapperEl.off("gesturestart",".swiper-slide",e.onGestureStart,t),this.$wrapperEl.off("gesturechange",".swiper-slide",e.onGestureChange,t),this.$wrapperEl.off("gestureend",".swiper-slide",e.onGestureEnd,t)):"touchstart"===this.touchEvents.start&&(this.$wrapperEl.off(this.touchEvents.start,".swiper-slide",e.onGestureStart,t),this.$wrapperEl.off(this.touchEvents.move,".swiper-slide",e.onGestureChange,t),this.$wrapperEl.off(this.touchEvents.end,".swiper-slide",e.onGestureEnd,t)),this.$wrapperEl.off(this.touchEvents.move,"."+this.params.zoom.containerClass,e.onTouchMove)}}},W={loadInSlide:function(e,t){void 0===t&&(t=!0);var i=this,a=i.params.lazy;if(void 0!==e&&0!==i.slides.length){var r=i.virtual&&i.params.virtual.enabled?i.$wrapperEl.children("."+i.params.slideClass+'[data-swiper-slide-index="'+e+'"]'):i.slides.eq(e),n=r.find("."+a.elementClass+":not(."+a.loadedClass+"):not(."+a.loadingClass+")");!r.hasClass(a.elementClass)||r.hasClass(a.loadedClass)||r.hasClass(a.loadingClass)||(n=n.add(r[0])),0!==n.length&&n.each(function(e,n){var o=s(n);o.addClass(a.loadingClass);var l=o.attr("data-background"),d=o.attr("data-src"),h=o.attr("data-srcset"),p=o.attr("data-sizes");i.loadImage(o[0],d||l,h,p,!1,function(){if(void 0!==i&&null!==i&&i&&(!i||i.params)&&!i.destroyed){if(l?(o.css("background-image",'url("'+l+'")'),o.removeAttr("data-background")):(h&&(o.attr("srcset",h),o.removeAttr("data-srcset")),p&&(o.attr("sizes",p),o.removeAttr("data-sizes")),d&&(o.attr("src",d),o.removeAttr("data-src"))),o.addClass(a.loadedClass).removeClass(a.loadingClass),r.find("."+a.preloaderClass).remove(),i.params.loop&&t){var e=r.attr("data-swiper-slide-index");if(r.hasClass(i.params.slideDuplicateClass)){var s=i.$wrapperEl.children('[data-swiper-slide-index="'+e+'"]:not(.'+i.params.slideDuplicateClass+")");i.lazy.loadInSlide(s.index(),!1)}else{var n=i.$wrapperEl.children("."+i.params.slideDuplicateClass+'[data-swiper-slide-index="'+e+'"]');i.lazy.loadInSlide(n.index(),!1)}}i.emit("lazyImageReady",r[0],o[0])}}),i.emit("lazyImageLoad",r[0],o[0])})}},load:function(){var e=this,t=e.$wrapperEl,i=e.params,a=e.slides,r=e.activeIndex,n=e.virtual&&i.virtual.enabled,o=i.lazy,l=i.slidesPerView;function d(e){if(n){if(t.children("."+i.slideClass+'[data-swiper-slide-index="'+e+'"]').length)return!0}else if(a[e])return!0;return!1}function h(e){return n?s(e).attr("data-swiper-slide-index"):s(e).index()}if("auto"===l&&(l=0),e.lazy.initialImageLoaded||(e.lazy.initialImageLoaded=!0),e.params.watchSlidesVisibility)t.children("."+i.slideVisibleClass).each(function(t,i){var a=n?s(i).attr("data-swiper-slide-index"):s(i).index();e.lazy.loadInSlide(a)});else if(l>1)for(var p=r;p<r+l;p+=1)d(p)&&e.lazy.loadInSlide(p);else e.lazy.loadInSlide(r);if(o.loadPrevNext)if(l>1||o.loadPrevNextAmount&&o.loadPrevNextAmount>1){for(var c=o.loadPrevNextAmount,u=l,v=Math.min(r+u+Math.max(c,u),a.length),f=Math.max(r-Math.max(u,c),0),m=r+l;m<v;m+=1)d(m)&&e.lazy.loadInSlide(m);for(var g=f;g<r;g+=1)d(g)&&e.lazy.loadInSlide(g)}else{var b=t.children("."+i.slideNextClass);b.length>0&&e.lazy.loadInSlide(h(b));var w=t.children("."+i.slidePrevClass);w.length>0&&e.lazy.loadInSlide(h(w))}}},q={LinearSpline:function(e,t){var i,s,a,r,n,o=function(e,t){for(s=-1,i=e.length;i-s>1;)e[a=i+s>>1]<=t?s=a:i=a;return i};return this.x=e,this.y=t,this.lastIndex=e.length-1,this.interpolate=function(e){return e?(n=o(this.x,e),r=n-1,(e-this.x[r])*(this.y[n]-this.y[r])/(this.x[n]-this.x[r])+this.y[r]):0},this},getInterpolateFunction:function(e){this.controller.spline||(this.controller.spline=this.params.loop?new q.LinearSpline(this.slidesGrid,e.slidesGrid):new q.LinearSpline(this.snapGrid,e.snapGrid))},setTranslate:function(e,t){var i,s,a=this,r=a.controller.control;function n(e){var t=a.rtlTranslate?-a.translate:a.translate;"slide"===a.params.controller.by&&(a.controller.getInterpolateFunction(e),s=-a.controller.spline.interpolate(-t)),s&&"container"!==a.params.controller.by||(i=(e.maxTranslate()-e.minTranslate())/(a.maxTranslate()-a.minTranslate()),s=(t-a.minTranslate())*i+e.minTranslate()),a.params.controller.inverse&&(s=e.maxTranslate()-s),e.updateProgress(s),e.setTranslate(s,a),e.updateActiveIndex(),e.updateSlidesClasses()}if(Array.isArray(r))for(var o=0;o<r.length;o+=1)r[o]!==t&&r[o]instanceof k&&n(r[o]);else r instanceof k&&t!==r&&n(r)},setTransition:function(e,t){var i,s=this,a=s.controller.control;function r(t){t.setTransition(e,s),0!==e&&(t.transitionStart(),t.$wrapperEl.transitionEnd(function(){a&&(t.params.loop&&"slide"===s.params.controller.by&&t.loopFix(),t.transitionEnd())}))}if(Array.isArray(a))for(i=0;i<a.length;i+=1)a[i]!==t&&a[i]instanceof k&&r(a[i]);else a instanceof k&&t!==a&&r(a)}},j={makeElFocusable:function(e){return e.attr("tabIndex","0"),e},addElRole:function(e,t){return e.attr("role",t),e},addElLabel:function(e,t){return e.attr("aria-label",t),e},disableEl:function(e){return e.attr("aria-disabled",!0),e},enableEl:function(e){return e.attr("aria-disabled",!1),e},onEnterKey:function(e){var t=this.params.a11y;if(13===e.keyCode){var i=s(e.target);this.navigation&&this.navigation.$nextEl&&i.is(this.navigation.$nextEl)&&(this.isEnd&&!this.params.loop||this.slideNext(),this.isEnd?this.a11y.notify(t.lastSlideMessage):this.a11y.notify(t.nextSlideMessage)),this.navigation&&this.navigation.$prevEl&&i.is(this.navigation.$prevEl)&&(this.isBeginning&&!this.params.loop||this.slidePrev(),this.isBeginning?this.a11y.notify(t.firstSlideMessage):this.a11y.notify(t.prevSlideMessage)),this.pagination&&i.is("."+this.params.pagination.bulletClass)&&i[0].click()}},notify:function(e){var t=this.a11y.liveRegion;0!==t.length&&(t.html(""),t.html(e))},updateNavigation:function(){if(!this.params.loop){var e=this.navigation,t=e.$nextEl,i=e.$prevEl;i&&i.length>0&&(this.isBeginning?this.a11y.disableEl(i):this.a11y.enableEl(i)),t&&t.length>0&&(this.isEnd?this.a11y.disableEl(t):this.a11y.enableEl(t))}},updatePagination:function(){var e=this,t=e.params.a11y;e.pagination&&e.params.pagination.clickable&&e.pagination.bullets&&e.pagination.bullets.length&&e.pagination.bullets.each(function(i,a){var r=s(a);e.a11y.makeElFocusable(r),e.a11y.addElRole(r,"button"),e.a11y.addElLabel(r,t.paginationBulletMessage.replace(/{{index}}/,r.index()+1))})},init:function(){this.$el.append(this.a11y.liveRegion);var e,t,i=this.params.a11y;this.navigation&&this.navigation.$nextEl&&(e=this.navigation.$nextEl),this.navigation&&this.navigation.$prevEl&&(t=this.navigation.$prevEl),e&&(this.a11y.makeElFocusable(e),this.a11y.addElRole(e,"button"),this.a11y.addElLabel(e,i.nextSlideMessage),e.on("keydown",this.a11y.onEnterKey)),t&&(this.a11y.makeElFocusable(t),this.a11y.addElRole(t,"button"),this.a11y.addElLabel(t,i.prevSlideMessage),t.on("keydown",this.a11y.onEnterKey)),this.pagination&&this.params.pagination.clickable&&this.pagination.bullets&&this.pagination.bullets.length&&this.pagination.$el.on("keydown","."+this.params.pagination.bulletClass,this.a11y.onEnterKey)},destroy:function(){var e,t;this.a11y.liveRegion&&this.a11y.liveRegion.length>0&&this.a11y.liveRegion.remove(),this.navigation&&this.navigation.$nextEl&&(e=this.navigation.$nextEl),this.navigation&&this.navigation.$prevEl&&(t=this.navigation.$prevEl),e&&e.off("keydown",this.a11y.onEnterKey),t&&t.off("keydown",this.a11y.onEnterKey),this.pagination&&this.params.pagination.clickable&&this.pagination.bullets&&this.pagination.bullets.length&&this.pagination.$el.off("keydown","."+this.params.pagination.bulletClass,this.a11y.onEnterKey)}},K={init:function(){if(this.params.history){if(!t.history||!t.history.pushState)return this.params.history.enabled=!1,void(this.params.hashNavigation.enabled=!0);var e=this.history;e.initialized=!0,e.paths=K.getPathValues(),(e.paths.key||e.paths.value)&&(e.scrollToSlide(0,e.paths.value,this.params.runCallbacksOnInit),this.params.history.replaceState||t.addEventListener("popstate",this.history.setHistoryPopState))}},destroy:function(){this.params.history.replaceState||t.removeEventListener("popstate",this.history.setHistoryPopState)},setHistoryPopState:function(){this.history.paths=K.getPathValues(),this.history.scrollToSlide(this.params.speed,this.history.paths.value,!1)},getPathValues:function(){var e=t.location.pathname.slice(1).split("/").filter(function(e){return""!==e}),i=e.length;return{key:e[i-2],value:e[i-1]}},setHistory:function(e,i){if(this.history.initialized&&this.params.history.enabled){var s=this.slides.eq(i),a=K.slugify(s.attr("data-history"));t.location.pathname.includes(e)||(a=e+"/"+a);var r=t.history.state;r&&r.value===a||(this.params.history.replaceState?t.history.replaceState({value:a},null,a):t.history.pushState({value:a},null,a))}},slugify:function(e){return e.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")},scrollToSlide:function(e,t,i){if(t)for(var s=0,a=this.slides.length;s<a;s+=1){var r=this.slides.eq(s);if(K.slugify(r.attr("data-history"))===t&&!r.hasClass(this.params.slideDuplicateClass)){var n=r.index();this.slideTo(n,e,i)}}else this.slideTo(0,e,i)}},U={onHashCange:function(){var t=e.location.hash.replace("#","");t!==this.slides.eq(this.activeIndex).attr("data-hash")&&this.slideTo(this.$wrapperEl.children("."+this.params.slideClass+'[data-hash="'+t+'"]').index())},setHash:function(){if(this.hashNavigation.initialized&&this.params.hashNavigation.enabled)if(this.params.hashNavigation.replaceState&&t.history&&t.history.replaceState)t.history.replaceState(null,null,"#"+this.slides.eq(this.activeIndex).attr("data-hash")||"");else{var i=this.slides.eq(this.activeIndex),s=i.attr("data-hash")||i.attr("data-history");e.location.hash=s||""}},init:function(){if(!(!this.params.hashNavigation.enabled||this.params.history&&this.params.history.enabled)){this.hashNavigation.initialized=!0;var i=e.location.hash.replace("#","");if(i)for(var a=0,r=this.slides.length;a<r;a+=1){var n=this.slides.eq(a);if((n.attr("data-hash")||n.attr("data-history"))===i&&!n.hasClass(this.params.slideDuplicateClass)){var o=n.index();this.slideTo(o,0,this.params.runCallbacksOnInit,!0)}}this.params.hashNavigation.watchState&&s(t).on("hashchange",this.hashNavigation.onHashCange)}},destroy:function(){this.params.hashNavigation.watchState&&s(t).off("hashchange",this.hashNavigation.onHashCange)}},_={run:function(){var e=this,t=e.slides.eq(e.activeIndex),i=e.params.autoplay.delay;t.attr("data-swiper-autoplay")&&(i=t.attr("data-swiper-autoplay")||e.params.autoplay.delay),e.autoplay.timeout=d.nextTick(function(){e.params.autoplay.reverseDirection?e.params.loop?(e.loopFix(),e.slidePrev(e.params.speed,!0,!0),e.emit("autoplay")):e.isBeginning?e.params.autoplay.stopOnLastSlide?e.autoplay.stop():(e.slideTo(e.slides.length-1,e.params.speed,!0,!0),e.emit("autoplay")):(e.slidePrev(e.params.speed,!0,!0),e.emit("autoplay")):e.params.loop?(e.loopFix(),e.slideNext(e.params.speed,!0,!0),e.emit("autoplay")):e.isEnd?e.params.autoplay.stopOnLastSlide?e.autoplay.stop():(e.slideTo(0,e.params.speed,!0,!0),e.emit("autoplay")):(e.slideNext(e.params.speed,!0,!0),e.emit("autoplay"))},i)},start:function(){return void 0===this.autoplay.timeout&&(!this.autoplay.running&&(this.autoplay.running=!0,this.emit("autoplayStart"),this.autoplay.run(),!0))},stop:function(){return!!this.autoplay.running&&(void 0!==this.autoplay.timeout&&(this.autoplay.timeout&&(clearTimeout(this.autoplay.timeout),this.autoplay.timeout=void 0),this.autoplay.running=!1,this.emit("autoplayStop"),!0))},pause:function(e){this.autoplay.running&&(this.autoplay.paused||(this.autoplay.timeout&&clearTimeout(this.autoplay.timeout),this.autoplay.paused=!0,0!==e&&this.params.autoplay.waitForTransition?(this.$wrapperEl[0].addEventListener("transitionend",this.autoplay.onTransitionEnd),this.$wrapperEl[0].addEventListener("webkitTransitionEnd",this.autoplay.onTransitionEnd)):(this.autoplay.paused=!1,this.autoplay.run())))}},Z={setTranslate:function(){for(var e=this.slides,t=0;t<e.length;t+=1){var i=this.slides.eq(t),s=-i[0].swiperSlideOffset;this.params.virtualTranslate||(s-=this.translate);var a=0;this.isHorizontal()||(a=s,s=0);var r=this.params.fadeEffect.crossFade?Math.max(1-Math.abs(i[0].progress),0):1+Math.min(Math.max(i[0].progress,-1),0);i.css({opacity:r}).transform("translate3d("+s+"px, "+a+"px, 0px)")}},setTransition:function(e){var t=this,i=t.slides,s=t.$wrapperEl;if(i.transition(e),t.params.virtualTranslate&&0!==e){var a=!1;i.transitionEnd(function(){if(!a&&t&&!t.destroyed){a=!0,t.animating=!1;for(var e=["webkitTransitionEnd","transitionend"],i=0;i<e.length;i+=1)s.trigger(e[i])}})}}},Q={setTranslate:function(){var e,t=this.$el,i=this.$wrapperEl,a=this.slides,r=this.width,n=this.height,o=this.rtlTranslate,l=this.size,d=this.params.cubeEffect,h=this.isHorizontal(),p=this.virtual&&this.params.virtual.enabled,c=0;d.shadow&&(h?(0===(e=i.find(".swiper-cube-shadow")).length&&(e=s('<div class="swiper-cube-shadow"></div>'),i.append(e)),e.css({height:r+"px"})):0===(e=t.find(".swiper-cube-shadow")).length&&(e=s('<div class="swiper-cube-shadow"></div>'),t.append(e)));for(var u=0;u<a.length;u+=1){var v=a.eq(u),f=u;p&&(f=parseInt(v.attr("data-swiper-slide-index"),10));var m=90*f,g=Math.floor(m/360);o&&(m=-m,g=Math.floor(-m/360));var b=Math.max(Math.min(v[0].progress,1),-1),w=0,y=0,x=0;f%4==0?(w=4*-g*l,x=0):(f-1)%4==0?(w=0,x=4*-g*l):(f-2)%4==0?(w=l+4*g*l,x=l):(f-3)%4==0&&(w=-l,x=3*l+4*l*g),o&&(w=-w),h||(y=w,w=0);var E="rotateX("+(h?0:-m)+"deg) rotateY("+(h?m:0)+"deg) translate3d("+w+"px, "+y+"px, "+x+"px)";if(b<=1&&b>-1&&(c=90*f+90*b,o&&(c=90*-f-90*b)),v.transform(E),d.slideShadows){var T=h?v.find(".swiper-slide-shadow-left"):v.find(".swiper-slide-shadow-top"),C=h?v.find(".swiper-slide-shadow-right"):v.find(".swiper-slide-shadow-bottom");0===T.length&&(T=s('<div class="swiper-slide-shadow-'+(h?"left":"top")+'"></div>'),v.append(T)),0===C.length&&(C=s('<div class="swiper-slide-shadow-'+(h?"right":"bottom")+'"></div>'),v.append(C)),T.length&&(T[0].style.opacity=Math.max(-b,0)),C.length&&(C[0].style.opacity=Math.max(b,0))}}if(i.css({"-webkit-transform-origin":"50% 50% -"+l/2+"px","-moz-transform-origin":"50% 50% -"+l/2+"px","-ms-transform-origin":"50% 50% -"+l/2+"px","transform-origin":"50% 50% -"+l/2+"px"}),d.shadow)if(h)e.transform("translate3d(0px, "+(r/2+d.shadowOffset)+"px, "+-r/2+"px) rotateX(90deg) rotateZ(0deg) scale("+d.shadowScale+")");else{var M=Math.abs(c)-90*Math.floor(Math.abs(c)/90),z=1.5-(Math.sin(2*M*Math.PI/360)/2+Math.cos(2*M*Math.PI/360)/2),k=d.shadowScale,P=d.shadowScale/z,$=d.shadowOffset;e.transform("scale3d("+k+", 1, "+P+") translate3d(0px, "+(n/2+$)+"px, "+-n/2/P+"px) rotateX(-90deg)")}var L=S.isSafari||S.isUiWebView?-l/2:0;i.transform("translate3d(0px,0,"+L+"px) rotateX("+(this.isHorizontal()?0:c)+"deg) rotateY("+(this.isHorizontal()?-c:0)+"deg)")},setTransition:function(e){var t=this.$el;this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),this.params.cubeEffect.shadow&&!this.isHorizontal()&&t.find(".swiper-cube-shadow").transition(e)}},J={setTranslate:function(){for(var e=this.slides,t=this.rtlTranslate,i=0;i<e.length;i+=1){var a=e.eq(i),r=a[0].progress;this.params.flipEffect.limitRotation&&(r=Math.max(Math.min(a[0].progress,1),-1));var n=-180*r,o=0,l=-a[0].swiperSlideOffset,d=0;if(this.isHorizontal()?t&&(n=-n):(d=l,l=0,o=-n,n=0),a[0].style.zIndex=-Math.abs(Math.round(r))+e.length,this.params.flipEffect.slideShadows){var h=this.isHorizontal()?a.find(".swiper-slide-shadow-left"):a.find(".swiper-slide-shadow-top"),p=this.isHorizontal()?a.find(".swiper-slide-shadow-right"):a.find(".swiper-slide-shadow-bottom");0===h.length&&(h=s('<div class="swiper-slide-shadow-'+(this.isHorizontal()?"left":"top")+'"></div>'),a.append(h)),0===p.length&&(p=s('<div class="swiper-slide-shadow-'+(this.isHorizontal()?"right":"bottom")+'"></div>'),a.append(p)),h.length&&(h[0].style.opacity=Math.max(-r,0)),p.length&&(p[0].style.opacity=Math.max(r,0))}a.transform("translate3d("+l+"px, "+d+"px, 0px) rotateX("+o+"deg) rotateY("+n+"deg)")}},setTransition:function(e){var t=this,i=t.slides,s=t.activeIndex,a=t.$wrapperEl;if(i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),t.params.virtualTranslate&&0!==e){var r=!1;i.eq(s).transitionEnd(function(){if(!r&&t&&!t.destroyed){r=!0,t.animating=!1;for(var e=["webkitTransitionEnd","transitionend"],i=0;i<e.length;i+=1)a.trigger(e[i])}})}}},ee={setTranslate:function(){for(var e=this.width,t=this.height,i=this.slides,a=this.$wrapperEl,r=this.slidesSizesGrid,n=this.params.coverflowEffect,o=this.isHorizontal(),l=this.translate,d=o?e/2-l:t/2-l,p=o?n.rotate:-n.rotate,c=n.depth,u=0,v=i.length;u<v;u+=1){var f=i.eq(u),m=r[u],g=(d-f[0].swiperSlideOffset-m/2)/m*n.modifier,b=o?p*g:0,w=o?0:p*g,y=-c*Math.abs(g),x=o?0:n.stretch*g,E=o?n.stretch*g:0;Math.abs(E)<.001&&(E=0),Math.abs(x)<.001&&(x=0),Math.abs(y)<.001&&(y=0),Math.abs(b)<.001&&(b=0),Math.abs(w)<.001&&(w=0);var T="translate3d("+E+"px,"+x+"px,"+y+"px)  rotateX("+w+"deg) rotateY("+b+"deg)";if(f.transform(T),f[0].style.zIndex=1-Math.abs(Math.round(g)),n.slideShadows){var S=o?f.find(".swiper-slide-shadow-left"):f.find(".swiper-slide-shadow-top"),C=o?f.find(".swiper-slide-shadow-right"):f.find(".swiper-slide-shadow-bottom");0===S.length&&(S=s('<div class="swiper-slide-shadow-'+(o?"left":"top")+'"></div>'),f.append(S)),0===C.length&&(C=s('<div class="swiper-slide-shadow-'+(o?"right":"bottom")+'"></div>'),f.append(C)),S.length&&(S[0].style.opacity=g>0?g:0),C.length&&(C[0].style.opacity=-g>0?-g:0)}}(h.pointerEvents||h.prefixedPointerEvents)&&(a[0].style.perspectiveOrigin=d+"px 50%")},setTransition:function(e){this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)}},te=[P,$,L,I,O,G,N,{name:"mousewheel",params:{mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarged:"container"}},create:function(){d.extend(this,{mousewheel:{enabled:!1,enable:B.enable.bind(this),disable:B.disable.bind(this),handle:B.handle.bind(this),handleMouseEnter:B.handleMouseEnter.bind(this),handleMouseLeave:B.handleMouseLeave.bind(this),lastScrollTime:d.now()}})},on:{init:function(){this.params.mousewheel.enabled&&this.mousewheel.enable()},destroy:function(){this.mousewheel.enabled&&this.mousewheel.disable()}}},{name:"navigation",params:{navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock"}},create:function(){d.extend(this,{navigation:{init:X.init.bind(this),update:X.update.bind(this),destroy:X.destroy.bind(this)}})},on:{init:function(){this.navigation.init(),this.navigation.update()},toEdge:function(){this.navigation.update()},fromEdge:function(){this.navigation.update()},destroy:function(){this.navigation.destroy()},click:function(e){var t=this.navigation,i=t.$nextEl,a=t.$prevEl;!this.params.navigation.hideOnClick||s(e.target).is(a)||s(e.target).is(i)||(i&&i.toggleClass(this.params.navigation.hiddenClass),a&&a.toggleClass(this.params.navigation.hiddenClass))}}},{name:"pagination",params:{pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:function(e){return e},formatFractionTotal:function(e){return e},bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",modifierClass:"swiper-pagination-",currentClass:"swiper-pagination-current",totalClass:"swiper-pagination-total",hiddenClass:"swiper-pagination-hidden",progressbarFillClass:"swiper-pagination-progressbar-fill",progressbarOppositeClass:"swiper-pagination-progressbar-opposite",clickableClass:"swiper-pagination-clickable",lockClass:"swiper-pagination-lock"}},create:function(){d.extend(this,{pagination:{init:Y.init.bind(this),render:Y.render.bind(this),update:Y.update.bind(this),destroy:Y.destroy.bind(this),dynamicBulletIndex:0}})},on:{init:function(){this.pagination.init(),this.pagination.render(),this.pagination.update()},activeIndexChange:function(){this.params.loop?this.pagination.update():void 0===this.snapIndex&&this.pagination.update()},snapIndexChange:function(){this.params.loop||this.pagination.update()},slidesLengthChange:function(){this.params.loop&&(this.pagination.render(),this.pagination.update())},snapGridLengthChange:function(){this.params.loop||(this.pagination.render(),this.pagination.update())},destroy:function(){this.pagination.destroy()},click:function(e){this.params.pagination.el&&this.params.pagination.hideOnClick&&this.pagination.$el.length>0&&!s(e.target).hasClass(this.params.pagination.bulletClass)&&this.pagination.$el.toggleClass(this.params.pagination.hiddenClass)}}},{name:"scrollbar",params:{scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag"}},create:function(){d.extend(this,{scrollbar:{init:V.init.bind(this),destroy:V.destroy.bind(this),updateSize:V.updateSize.bind(this),setTranslate:V.setTranslate.bind(this),setTransition:V.setTransition.bind(this),enableDraggable:V.enableDraggable.bind(this),disableDraggable:V.disableDraggable.bind(this),setDragPosition:V.setDragPosition.bind(this),onDragStart:V.onDragStart.bind(this),onDragMove:V.onDragMove.bind(this),onDragEnd:V.onDragEnd.bind(this),isTouched:!1,timeout:null,dragTimeout:null}})},on:{init:function(){this.scrollbar.init(),this.scrollbar.updateSize(),this.scrollbar.setTranslate()},update:function(){this.scrollbar.updateSize()},resize:function(){this.scrollbar.updateSize()},observerUpdate:function(){this.scrollbar.updateSize()},setTranslate:function(){this.scrollbar.setTranslate()},setTransition:function(e){this.scrollbar.setTransition(e)},destroy:function(){this.scrollbar.destroy()}}},{name:"parallax",params:{parallax:{enabled:!1}},create:function(){d.extend(this,{parallax:{setTransform:R.setTransform.bind(this),setTranslate:R.setTranslate.bind(this),setTransition:R.setTransition.bind(this)}})},on:{beforeInit:function(){this.params.parallax.enabled&&(this.params.watchSlidesProgress=!0)},init:function(){this.params.parallax&&this.parallax.setTranslate()},setTranslate:function(){this.params.parallax&&this.parallax.setTranslate()},setTransition:function(e){this.params.parallax&&this.parallax.setTransition(e)}}},{name:"zoom",params:{zoom:{enabled:!1,maxRatio:3,minRatio:1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}},create:function(){var e=this,t={enabled:!1,scale:1,currentScale:1,isScaling:!1,gesture:{$slideEl:void 0,slideWidth:void 0,slideHeight:void 0,$imageEl:void 0,$imageWrapEl:void 0,maxRatio:3},image:{isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},velocity:{x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0}};"onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function(i){t[i]=F[i].bind(e)}),d.extend(e,{zoom:t})},on:{init:function(){this.params.zoom.enabled&&this.zoom.enable()},destroy:function(){this.zoom.disable()},touchStart:function(e){this.zoom.enabled&&this.zoom.onTouchStart(e)},touchEnd:function(e){this.zoom.enabled&&this.zoom.onTouchEnd(e)},doubleTap:function(e){this.params.zoom.enabled&&this.zoom.enabled&&this.params.zoom.toggle&&this.zoom.toggle(e)},transitionEnd:function(){this.zoom.enabled&&this.params.zoom.enabled&&this.zoom.onTransitionEnd()}}},{name:"lazy",params:{lazy:{enabled:!1,loadPrevNext:!1,loadPrevNextAmount:1,loadOnTransitionStart:!1,elementClass:"swiper-lazy",loadingClass:"swiper-lazy-loading",loadedClass:"swiper-lazy-loaded",preloaderClass:"swiper-lazy-preloader"}},create:function(){d.extend(this,{lazy:{initialImageLoaded:!1,load:W.load.bind(this),loadInSlide:W.loadInSlide.bind(this)}})},on:{beforeInit:function(){this.params.lazy.enabled&&this.params.preloadImages&&(this.params.preloadImages=!1)},init:function(){this.params.lazy.enabled&&!this.params.loop&&0===this.params.initialSlide&&this.lazy.load()},scroll:function(){this.params.freeMode&&!this.params.freeModeSticky&&this.lazy.load()},resize:function(){this.params.lazy.enabled&&this.lazy.load()},scrollbarDragMove:function(){this.params.lazy.enabled&&this.lazy.load()},transitionStart:function(){this.params.lazy.enabled&&(this.params.lazy.loadOnTransitionStart||!this.params.lazy.loadOnTransitionStart&&!this.lazy.initialImageLoaded)&&this.lazy.load()},transitionEnd:function(){this.params.lazy.enabled&&!this.params.lazy.loadOnTransitionStart&&this.lazy.load()}}},{name:"controller",params:{controller:{control:void 0,inverse:!1,by:"slide"}},create:function(){d.extend(this,{controller:{control:this.params.controller.control,getInterpolateFunction:q.getInterpolateFunction.bind(this),setTranslate:q.setTranslate.bind(this),setTransition:q.setTransition.bind(this)}})},on:{update:function(){this.controller.control&&this.controller.spline&&(this.controller.spline=void 0,delete this.controller.spline)},resize:function(){this.controller.control&&this.controller.spline&&(this.controller.spline=void 0,delete this.controller.spline)},observerUpdate:function(){this.controller.control&&this.controller.spline&&(this.controller.spline=void 0,delete this.controller.spline)},setTranslate:function(e,t){this.controller.control&&this.controller.setTranslate(e,t)},setTransition:function(e,t){this.controller.control&&this.controller.setTransition(e,t)}}},{name:"a11y",params:{a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}"}},create:function(){var e=this;d.extend(e,{a11y:{liveRegion:s('<span class="'+e.params.a11y.notificationClass+'" aria-live="assertive" aria-atomic="true"></span>')}}),Object.keys(j).forEach(function(t){e.a11y[t]=j[t].bind(e)})},on:{init:function(){this.params.a11y.enabled&&(this.a11y.init(),this.a11y.updateNavigation())},toEdge:function(){this.params.a11y.enabled&&this.a11y.updateNavigation()},fromEdge:function(){this.params.a11y.enabled&&this.a11y.updateNavigation()},paginationUpdate:function(){this.params.a11y.enabled&&this.a11y.updatePagination()},destroy:function(){this.params.a11y.enabled&&this.a11y.destroy()}}},{name:"history",params:{history:{enabled:!1,replaceState:!1,key:"slides"}},create:function(){d.extend(this,{history:{init:K.init.bind(this),setHistory:K.setHistory.bind(this),setHistoryPopState:K.setHistoryPopState.bind(this),scrollToSlide:K.scrollToSlide.bind(this),destroy:K.destroy.bind(this)}})},on:{init:function(){this.params.history.enabled&&this.history.init()},destroy:function(){this.params.history.enabled&&this.history.destroy()},transitionEnd:function(){this.history.initialized&&this.history.setHistory(this.params.history.key,this.activeIndex)}}},{name:"hash-navigation",params:{hashNavigation:{enabled:!1,replaceState:!1,watchState:!1}},create:function(){d.extend(this,{hashNavigation:{initialized:!1,init:U.init.bind(this),destroy:U.destroy.bind(this),setHash:U.setHash.bind(this),onHashCange:U.onHashCange.bind(this)}})},on:{init:function(){this.params.hashNavigation.enabled&&this.hashNavigation.init()},destroy:function(){this.params.hashNavigation.enabled&&this.hashNavigation.destroy()},transitionEnd:function(){this.hashNavigation.initialized&&this.hashNavigation.setHash()}}},{name:"autoplay",params:{autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1}},create:function(){var e=this;d.extend(e,{autoplay:{running:!1,paused:!1,run:_.run.bind(e),start:_.start.bind(e),stop:_.stop.bind(e),pause:_.pause.bind(e),onTransitionEnd:function(t){e&&!e.destroyed&&e.$wrapperEl&&t.target===this&&(e.$wrapperEl[0].removeEventListener("transitionend",e.autoplay.onTransitionEnd),e.$wrapperEl[0].removeEventListener("webkitTransitionEnd",e.autoplay.onTransitionEnd),e.autoplay.paused=!1,e.autoplay.running?e.autoplay.run():e.autoplay.stop())}}})},on:{init:function(){this.params.autoplay.enabled&&this.autoplay.start()},beforeTransitionStart:function(e,t){this.autoplay.running&&(t||!this.params.autoplay.disableOnInteraction?this.autoplay.pause(e):this.autoplay.stop())},sliderFirstMove:function(){this.autoplay.running&&(this.params.autoplay.disableOnInteraction?this.autoplay.stop():this.autoplay.pause())},destroy:function(){this.autoplay.running&&this.autoplay.stop()}}},{name:"effect-fade",params:{fadeEffect:{crossFade:!1}},create:function(){d.extend(this,{fadeEffect:{setTranslate:Z.setTranslate.bind(this),setTransition:Z.setTransition.bind(this)}})},on:{beforeInit:function(){if("fade"===this.params.effect){this.classNames.push(this.params.containerModifierClass+"fade");var e={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0};d.extend(this.params,e),d.extend(this.originalParams,e)}},setTranslate:function(){"fade"===this.params.effect&&this.fadeEffect.setTranslate()},setTransition:function(e){"fade"===this.params.effect&&this.fadeEffect.setTransition(e)}}},{name:"effect-cube",params:{cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}},create:function(){d.extend(this,{cubeEffect:{setTranslate:Q.setTranslate.bind(this),setTransition:Q.setTransition.bind(this)}})},on:{beforeInit:function(){if("cube"===this.params.effect){this.classNames.push(this.params.containerModifierClass+"cube"),this.classNames.push(this.params.containerModifierClass+"3d");var e={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0};d.extend(this.params,e),d.extend(this.originalParams,e)}},setTranslate:function(){"cube"===this.params.effect&&this.cubeEffect.setTranslate()},setTransition:function(e){"cube"===this.params.effect&&this.cubeEffect.setTransition(e)}}},{name:"effect-flip",params:{flipEffect:{slideShadows:!0,limitRotation:!0}},create:function(){d.extend(this,{flipEffect:{setTranslate:J.setTranslate.bind(this),setTransition:J.setTransition.bind(this)}})},on:{beforeInit:function(){if("flip"===this.params.effect){this.classNames.push(this.params.containerModifierClass+"flip"),this.classNames.push(this.params.containerModifierClass+"3d");var e={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0};d.extend(this.params,e),d.extend(this.originalParams,e)}},setTranslate:function(){"flip"===this.params.effect&&this.flipEffect.setTranslate()},setTransition:function(e){"flip"===this.params.effect&&this.flipEffect.setTransition(e)}}},{name:"effect-coverflow",params:{coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0}},create:function(){d.extend(this,{coverflowEffect:{setTranslate:ee.setTranslate.bind(this),setTransition:ee.setTransition.bind(this)}})},on:{beforeInit:function(){"coverflow"===this.params.effect&&(this.classNames.push(this.params.containerModifierClass+"coverflow"),this.classNames.push(this.params.containerModifierClass+"3d"),this.params.watchSlidesProgress=!0,this.originalParams.watchSlidesProgress=!0)},setTranslate:function(){"coverflow"===this.params.effect&&this.coverflowEffect.setTranslate()},setTransition:function(e){"coverflow"===this.params.effect&&this.coverflowEffect.setTransition(e)}}}];return void 0===k.use&&(k.use=k.Class.use,k.installModule=k.Class.installModule),k.use(te),k});
;
/*
 * jQuery.Running.js - jQuery plugin for Running
 *
 * Copyright (c) 2007-2015 Qietu inc
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   http://www.qietu.com/p/jQuery.Running.js
 *
 * Version:  1.0.0
 *
 */
function formatNumber(num, precision, separator) {
	var parts;
	// 判断是否为数字
	if (!isNaN(parseFloat(num)) && isFinite(num)) {
		// 把类似 .5, 5. 之类的数据转化成0.5, 5, 为数据精度处理做准, 至于为什么
		// 不在判断中直接写 if (!isNaN(num = parseFloat(num)) && isFinite(num))
		// 是因为parseFloat有一个奇怪的精度问题, 比如 parseFloat(12312312.1234567119)
		// 的值变成了 12312312.123456713
		num = Number(num);
		// 处理小数点位数
		num = (typeof precision !== 'undefined' ? num.toFixed(precision) : num).toString();
		// 分离数字的小数部分和整数部分
		parts = num.split('.');
		// 整数部分加[separator]分隔, 借用一个著名的正则表达式
		parts[0] = parts[0].toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + (separator || ','));

		return parts.join('.');
	}
	return NaN;
}
 
 (function($){
	$.fn.running = function(){

		function n() {
			var t = $(".animateNum");
			var n = {
				top: $(window).scrollTop(),
				bottom: $(window).scrollTop() + $(window).height()
			};
			t.each(function() {
				var t = $(this).attr("data-animateTarget");
				// console.log("n.top:"+n.top)
				n.top <= $(this).offset().top + $(this).height() && n.bottom >= $(this).offset().top && !$(this).data("start") && ($(this).data("start", !0), new AnimateNum({
					obj: $(this),
					target: t,
					totalTime: 1e3
				}))
			})
		};
		
		function b(){
			var t = $(".animateBar");
			var n = {
						top: $(window).scrollTop(),
						bottom: $(window).scrollTop() + $(window).height()
					};
		
			t.each(function() {
				var t = $(this).attr("data-animateTarget");
				n.top <= $(this).offset().top + $(this).height() && n.bottom >= $(this).offset().top && !$(this).data("start") && ($(this).data("start", !0), new AnimateBar({
					obj: $(this),
					target: t,
					totalTime: 1e3
				}))
			})	
		};
		
		function p(){
			var t = $(".animatePie");
			var n = {
						top: $(window).scrollTop(),
						bottom: $(window).scrollTop() + $(window).height()
					};
		
			t.each(function() {
				
				var t = $(this).attr("data-animateTarget");
				n.top <= $(this).offset().top + $(this).height() && n.bottom >= $(this).offset().top && !$(this).data("start") && ($(this).data("start", !0), new AnimatePie({
					obj: $(this),
					target: t,
					totalTime: 1e3
				}))
			})		
		};



		// b(),
		$(window).bind("scroll",
		function() {
			n();
			b();
			p();
			
		});

		function AnimateNum(t) {
			this.obj = t.obj,
			this.target = t.target.toString(),
			this.totalTime = t.totalTime || 1e3,
			this.init()
		};
		
		function AnimateBar(t) {
			this.obj = t.obj,
			this.target = t.target.toString(),
			this.totalTime = t.totalTime || 1e3,
			this.init()
		};
		
		function AnimatePie(t) {
			this.obj = t.obj,
			this.target = t.target.toString(),
			this.totalTime = t.totalTime || 1e3,
			this.init()
		};
		
		AnimateNum.prototype = {
			init: function() {
				return this.target ? (this.animation(), void 0) : !1
			},
			animation: function() {
				var t = this,
				i = this.target.indexOf("."),
				e = 0;
				i >= 0 && (e = this.target.length - i - 1);
				var n = this.target.replace(".", ""),
				s = this.totalTime / 30 | 0,
				a = n / s | 0,
				r = 0,
				h = 0;
				t.timer = setInterval(function() {
					r++,
					h += a,
					t.obj.html(formatNumber(h / Math.pow(10, e))),
					r >= s && (clearInterval(t.timer), t.obj.html(formatNumber(t.target)))
				},
				30)
			}
		};
		
		AnimateBar.prototype = {
			init: function() {
				return this.target ? (this.animation(), void 0) : !1
			},
			animation: function() {
				var t = this,
				i = this.target.indexOf("."),
				e = 0;
				i >= 0 && (e = this.target.length - i - 1);
				var n = this.target.replace(".", ""),
				s = this.totalTime / 30 | 0,
				a = n / s | 0,
				r = 0,
				h = 0;
				t.timer = setInterval(function() {
					r++,
					h += a,
					t.obj.css('width',h / Math.pow(10, e) + '%'),
					r >= s && (clearInterval(t.timer), t.obj.animate({'width':t.target + '%'}))
				},
				30)
			}
		};
		
		AnimatePie.prototype = {
			init: function() {
				return this.target ? (this.animation(), void 0) : !1
			},
			animation: function() {
				var t = this;
				/*i = this.target.indexOf("."),
				e = 0;
				i >= 0 && (e = this.target.length - i - 1);
				var n = this.target.replace(".", ""),
				s = this.totalTime / 30 | 0,
				a = n / s | 0,
				r = 0,
				h = 0;
				t.timer = setInterval(function() {
					r++,
					h += a,
					t.obj.find('.pieInner span').html(h / Math.pow(10, e)),
					r >= s && (clearInterval(t.timer), t.obj.find('.pieInner span').html(t.target))
				
				},
				30)*/
				
				s = this.totalTime / 60 | 0;
				r = 0;
				
				t.i=0;
				t.count=0;
				t.j = 0;
				
				num = t.target;
				 
				function start1(){
				
				t.obj.find('.pieInner span').html(t.i +1);
					if(num==0) return false;
					t.i = t.i + 1;
					
				 
					
				
					if(t.i==num){
							clearInterval(t.t1);
						}
				
					if(t.i == 50){ 
						
						clearInterval(t.t1);
						num2 = num-50;
						t.t2 = setInterval(start2,1);
					};
					
					t.obj.find(".pieLeftInner").css("-o-transform","rotate(" + t.i*3.6 + "deg)");
					t.obj.find(".pieLeftInner").css("-moz-transform","rotate(" + t.i*3.6 + "deg)");
					t.obj.find(".pieLeftInner").css("-webkit-transform","rotate(" + t.i*3.6 + "deg)");
				};
				function start2(){
				
				t.obj.find('.pieInner span').html(50+t.j+1);
					if(num2==0) return false;
					t.j = t.j + 1;
					
					
					
					
					if(t.j== num2){
							clearInterval(t.t2);
						}
				
					if(t.j==50){
						
						clearInterval(t.t2); 
					};
					t.obj.find(".pieRightInner").css("-o-transform","rotate(" + t.j*3.6 + "deg)");
					t.obj.find(".pieRightInner").css("-moz-transform","rotate(" + t.j*3.6 + "deg)");
					t.obj.find(".pieRightInner").css("-webkit-transform","rotate(" + t.j*3.6 + "deg)");
				};
				
				t.t1 = setInterval(function() {
					r++;
					 
					//t.obj.css('width',h / Math.pow(10, e) + '%'),
					r >= s && (clearInterval(t.timer), start1())
				},
				30)
				//t1 = setInterval(start1,1);
	
	
			}
		};
		
	}
})(jQuery);


;
!(function (t, e) {
  "object" == typeof exports
    ? (module.exports = exports = e())
    : "function" == typeof define && define.amd
    ? define([], e)
    : (t.CryptoJS = e());
})(this, function () {
  var h,
    t,
    e,
    r,
    i,
    n,
    f,
    o,
    s,
    c,
    a,
    l,
    d,
    m,
    x,
    b,
    H,
    z,
    A,
    u,
    p,
    _,
    v,
    y,
    g,
    B,
    w,
    k,
    S,
    C,
    D,
    E,
    R,
    M,
    F,
    P,
    W,
    O,
    I,
    U,
    K,
    X,
    L,
    j,
    N,
    T,
    q,
    Z,
    V,
    G,
    J,
    $,
    Q,
    Y,
    tt,
    et,
    rt,
    it,
    nt,
    ot,
    st,
    ct,
    at,
    ht,
    lt,
    ft,
    dt,
    ut,
    pt,
    _t,
    vt,
    yt,
    gt,
    Bt,
    wt,
    kt,
    St,
    bt =
      bt ||
      (function (l) {
        var t;
        if (
          ("undefined" != typeof window && window.crypto && (t = window.crypto),
          !t &&
            "undefined" != typeof window &&
            window.msCrypto &&
            (t = window.msCrypto),
          !t &&
            "undefined" != typeof global &&
            global.crypto &&
            (t = global.crypto),
          !t && "function" == typeof require)
        )
          try {
            t = require("crypto");
          } catch (t) {}
        function i() {
          if (t) {
            if ("function" == typeof t.getRandomValues)
              try {
                return t.getRandomValues(new Uint32Array(1))[0];
              } catch (t) {}
            if ("function" == typeof t.randomBytes)
              try {
                return t.randomBytes(4).readInt32LE();
              } catch (t) {}
          }
          throw new Error(
            "Native crypto module could not be used to get secure random number."
          );
        }
        var r =
          Object.create ||
          function (t) {
            var e;
            return (n.prototype = t), (e = new n()), (n.prototype = null), e;
          };
        function n() {}
        var e = {},
          o = (e.lib = {}),
          s = (o.Base = {
            extend: function (t) {
              var e = r(this);
              return (
                t && e.mixIn(t),
                (e.hasOwnProperty("init") && this.init !== e.init) ||
                  (e.init = function () {
                    e.$super.init.apply(this, arguments);
                  }),
                ((e.init.prototype = e).$super = this),
                e
              );
            },
            create: function () {
              var t = this.extend();
              return t.init.apply(t, arguments), t;
            },
            init: function () {},
            mixIn: function (t) {
              for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
              t.hasOwnProperty("toString") && (this.toString = t.toString);
            },
            clone: function () {
              return this.init.prototype.extend(this);
            },
          }),
          f = (o.WordArray = s.extend({
            init: function (t, e) {
              (t = this.words = t || []),
                (this.sigBytes = null != e ? e : 4 * t.length);
            },
            toString: function (t) {
              return (t || a).stringify(this);
            },
            concat: function (t) {
              var e = this.words,
                r = t.words,
                i = this.sigBytes,
                n = t.sigBytes;
              if ((this.clamp(), i % 4))
                for (var o = 0; o < n; o++) {
                  var s = (r[o >>> 2] >>> (24 - (o % 4) * 8)) & 255;
                  e[(i + o) >>> 2] |= s << (24 - ((i + o) % 4) * 8);
                }
              else for (o = 0; o < n; o += 4) e[(i + o) >>> 2] = r[o >>> 2];
              return (this.sigBytes += n), this;
            },
            clamp: function () {
              var t = this.words,
                e = this.sigBytes;
              (t[e >>> 2] &= 4294967295 << (32 - (e % 4) * 8)),
                (t.length = l.ceil(e / 4));
            },
            clone: function () {
              var t = s.clone.call(this);
              return (t.words = this.words.slice(0)), t;
            },
            random: function (t) {
              for (var e = [], r = 0; r < t; r += 4) e.push(i());
              return new f.init(e, t);
            },
          })),
          c = (e.enc = {}),
          a = (c.Hex = {
            stringify: function (t) {
              for (var e = t.words, r = t.sigBytes, i = [], n = 0; n < r; n++) {
                var o = (e[n >>> 2] >>> (24 - (n % 4) * 8)) & 255;
                i.push((o >>> 4).toString(16)), i.push((15 & o).toString(16));
              }
              return i.join("");
            },
            parse: function (t) {
              for (var e = t.length, r = [], i = 0; i < e; i += 2)
                r[i >>> 3] |=
                  parseInt(t.substr(i, 2), 16) << (24 - (i % 8) * 4);
              return new f.init(r, e / 2);
            },
          }),
          h = (c.Latin1 = {
            stringify: function (t) {
              for (var e = t.words, r = t.sigBytes, i = [], n = 0; n < r; n++) {
                var o = (e[n >>> 2] >>> (24 - (n % 4) * 8)) & 255;
                i.push(String.fromCharCode(o));
              }
              return i.join("");
            },
            parse: function (t) {
              for (var e = t.length, r = [], i = 0; i < e; i++)
                r[i >>> 2] |= (255 & t.charCodeAt(i)) << (24 - (i % 4) * 8);
              return new f.init(r, e);
            },
          }),
          d = (c.Utf8 = {
            stringify: function (t) {
              try {
                return decodeURIComponent(escape(h.stringify(t)));
              } catch (t) {
                throw new Error("Malformed UTF-8 data");
              }
            },
            parse: function (t) {
              return h.parse(unescape(encodeURIComponent(t)));
            },
          }),
          u = (o.BufferedBlockAlgorithm = s.extend({
            reset: function () {
              (this._data = new f.init()), (this._nDataBytes = 0);
            },
            _append: function (t) {
              "string" == typeof t && (t = d.parse(t)),
                this._data.concat(t),
                (this._nDataBytes += t.sigBytes);
            },
            _process: function (t) {
              var e,
                r = this._data,
                i = r.words,
                n = r.sigBytes,
                o = this.blockSize,
                s = n / (4 * o),
                c =
                  (s = t
                    ? l.ceil(s)
                    : l.max((0 | s) - this._minBufferSize, 0)) * o,
                a = l.min(4 * c, n);
              if (c) {
                for (var h = 0; h < c; h += o) this._doProcessBlock(i, h);
                (e = i.splice(0, c)), (r.sigBytes -= a);
              }
              return new f.init(e, a);
            },
            clone: function () {
              var t = s.clone.call(this);
              return (t._data = this._data.clone()), t;
            },
            _minBufferSize: 0,
          })),
          p =
            ((o.Hasher = u.extend({
              cfg: s.extend(),
              init: function (t) {
                (this.cfg = this.cfg.extend(t)), this.reset();
              },
              reset: function () {
                u.reset.call(this), this._doReset();
              },
              update: function (t) {
                return this._append(t), this._process(), this;
              },
              finalize: function (t) {
                return t && this._append(t), this._doFinalize();
              },
              blockSize: 16,
              _createHelper: function (r) {
                return function (t, e) {
                  return new r.init(e).finalize(t);
                };
              },
              _createHmacHelper: function (r) {
                return function (t, e) {
                  return new p.HMAC.init(r, e).finalize(t);
                };
              },
            })),
            (e.algo = {}));
        return e;
      })(Math);
  function mt(t, e, r) {
    return t ^ e ^ r;
  }
  function xt(t, e, r) {
    return (t & e) | (~t & r);
  }
  function Ht(t, e, r) {
    return (t | ~e) ^ r;
  }
  function zt(t, e, r) {
    return (t & r) | (e & ~r);
  }
  function At(t, e, r) {
    return t ^ (e | ~r);
  }
  function Ct(t, e) {
    return (t << e) | (t >>> (32 - e));
  }
  function Dt(t, e, r, i) {
    var n,
      o = this._iv;
    o ? ((n = o.slice(0)), (this._iv = void 0)) : (n = this._prevBlock),
      i.encryptBlock(n, 0);
    for (var s = 0; s < r; s++) t[e + s] ^= n[s];
  }
  function Et(t) {
    if (255 == ((t >> 24) & 255)) {
      var e = (t >> 16) & 255,
        r = (t >> 8) & 255,
        i = 255 & t;
      255 === e
        ? ((e = 0), 255 === r ? ((r = 0), 255 === i ? (i = 0) : ++i) : ++r)
        : ++e,
        (t = 0),
        (t += e << 16),
        (t += r << 8),
        (t += i);
    } else t += 1 << 24;
    return t;
  }
  function Rt() {
    for (var t = this._X, e = this._C, r = 0; r < 8; r++) ft[r] = e[r];
    (e[0] = (e[0] + 1295307597 + this._b) | 0),
      (e[1] = (e[1] + 3545052371 + (e[0] >>> 0 < ft[0] >>> 0 ? 1 : 0)) | 0),
      (e[2] = (e[2] + 886263092 + (e[1] >>> 0 < ft[1] >>> 0 ? 1 : 0)) | 0),
      (e[3] = (e[3] + 1295307597 + (e[2] >>> 0 < ft[2] >>> 0 ? 1 : 0)) | 0),
      (e[4] = (e[4] + 3545052371 + (e[3] >>> 0 < ft[3] >>> 0 ? 1 : 0)) | 0),
      (e[5] = (e[5] + 886263092 + (e[4] >>> 0 < ft[4] >>> 0 ? 1 : 0)) | 0),
      (e[6] = (e[6] + 1295307597 + (e[5] >>> 0 < ft[5] >>> 0 ? 1 : 0)) | 0),
      (e[7] = (e[7] + 3545052371 + (e[6] >>> 0 < ft[6] >>> 0 ? 1 : 0)) | 0),
      (this._b = e[7] >>> 0 < ft[7] >>> 0 ? 1 : 0);
    for (r = 0; r < 8; r++) {
      var i = t[r] + e[r],
        n = 65535 & i,
        o = i >>> 16,
        s = ((((n * n) >>> 17) + n * o) >>> 15) + o * o,
        c = (((4294901760 & i) * i) | 0) + (((65535 & i) * i) | 0);
      dt[r] = s ^ c;
    }
    (t[0] =
      (dt[0] +
        ((dt[7] << 16) | (dt[7] >>> 16)) +
        ((dt[6] << 16) | (dt[6] >>> 16))) |
      0),
      (t[1] = (dt[1] + ((dt[0] << 8) | (dt[0] >>> 24)) + dt[7]) | 0),
      (t[2] =
        (dt[2] +
          ((dt[1] << 16) | (dt[1] >>> 16)) +
          ((dt[0] << 16) | (dt[0] >>> 16))) |
        0),
      (t[3] = (dt[3] + ((dt[2] << 8) | (dt[2] >>> 24)) + dt[1]) | 0),
      (t[4] =
        (dt[4] +
          ((dt[3] << 16) | (dt[3] >>> 16)) +
          ((dt[2] << 16) | (dt[2] >>> 16))) |
        0),
      (t[5] = (dt[5] + ((dt[4] << 8) | (dt[4] >>> 24)) + dt[3]) | 0),
      (t[6] =
        (dt[6] +
          ((dt[5] << 16) | (dt[5] >>> 16)) +
          ((dt[4] << 16) | (dt[4] >>> 16))) |
        0),
      (t[7] = (dt[7] + ((dt[6] << 8) | (dt[6] >>> 24)) + dt[5]) | 0);
  }
  function Mt() {
    for (var t = this._X, e = this._C, r = 0; r < 8; r++) wt[r] = e[r];
    (e[0] = (e[0] + 1295307597 + this._b) | 0),
      (e[1] = (e[1] + 3545052371 + (e[0] >>> 0 < wt[0] >>> 0 ? 1 : 0)) | 0),
      (e[2] = (e[2] + 886263092 + (e[1] >>> 0 < wt[1] >>> 0 ? 1 : 0)) | 0),
      (e[3] = (e[3] + 1295307597 + (e[2] >>> 0 < wt[2] >>> 0 ? 1 : 0)) | 0),
      (e[4] = (e[4] + 3545052371 + (e[3] >>> 0 < wt[3] >>> 0 ? 1 : 0)) | 0),
      (e[5] = (e[5] + 886263092 + (e[4] >>> 0 < wt[4] >>> 0 ? 1 : 0)) | 0),
      (e[6] = (e[6] + 1295307597 + (e[5] >>> 0 < wt[5] >>> 0 ? 1 : 0)) | 0),
      (e[7] = (e[7] + 3545052371 + (e[6] >>> 0 < wt[6] >>> 0 ? 1 : 0)) | 0),
      (this._b = e[7] >>> 0 < wt[7] >>> 0 ? 1 : 0);
    for (r = 0; r < 8; r++) {
      var i = t[r] + e[r],
        n = 65535 & i,
        o = i >>> 16,
        s = ((((n * n) >>> 17) + n * o) >>> 15) + o * o,
        c = (((4294901760 & i) * i) | 0) + (((65535 & i) * i) | 0);
      kt[r] = s ^ c;
    }
    (t[0] =
      (kt[0] +
        ((kt[7] << 16) | (kt[7] >>> 16)) +
        ((kt[6] << 16) | (kt[6] >>> 16))) |
      0),
      (t[1] = (kt[1] + ((kt[0] << 8) | (kt[0] >>> 24)) + kt[7]) | 0),
      (t[2] =
        (kt[2] +
          ((kt[1] << 16) | (kt[1] >>> 16)) +
          ((kt[0] << 16) | (kt[0] >>> 16))) |
        0),
      (t[3] = (kt[3] + ((kt[2] << 8) | (kt[2] >>> 24)) + kt[1]) | 0),
      (t[4] =
        (kt[4] +
          ((kt[3] << 16) | (kt[3] >>> 16)) +
          ((kt[2] << 16) | (kt[2] >>> 16))) |
        0),
      (t[5] = (kt[5] + ((kt[4] << 8) | (kt[4] >>> 24)) + kt[3]) | 0),
      (t[6] =
        (kt[6] +
          ((kt[5] << 16) | (kt[5] >>> 16)) +
          ((kt[4] << 16) | (kt[4] >>> 16))) |
        0),
      (t[7] = (kt[7] + ((kt[6] << 8) | (kt[6] >>> 24)) + kt[5]) | 0);
  }
  return (
    (h = bt.lib.WordArray),
    (bt.enc.Base64 = {
      stringify: function (t) {
        var e = t.words,
          r = t.sigBytes,
          i = this._map;
        t.clamp();
        for (var n = [], o = 0; o < r; o += 3)
          for (
            var s =
                (((e[o >>> 2] >>> (24 - (o % 4) * 8)) & 255) << 16) |
                (((e[(o + 1) >>> 2] >>> (24 - ((o + 1) % 4) * 8)) & 255) << 8) |
                ((e[(o + 2) >>> 2] >>> (24 - ((o + 2) % 4) * 8)) & 255),
              c = 0;
            c < 4 && o + 0.75 * c < r;
            c++
          )
            n.push(i.charAt((s >>> (6 * (3 - c))) & 63));
        var a = i.charAt(64);
        if (a) for (; n.length % 4; ) n.push(a);
        return n.join("");
      },
      parse: function (t) {
        var e = t.length,
          r = this._map,
          i = this._reverseMap;
        if (!i) {
          i = this._reverseMap = [];
          for (var n = 0; n < r.length; n++) i[r.charCodeAt(n)] = n;
        }
        var o = r.charAt(64);
        if (o) {
          var s = t.indexOf(o);
          -1 !== s && (e = s);
        }
        return (function (t, e, r) {
          for (var i = [], n = 0, o = 0; o < e; o++)
            if (o % 4) {
              var s = r[t.charCodeAt(o - 1)] << ((o % 4) * 2),
                c = r[t.charCodeAt(o)] >>> (6 - (o % 4) * 2),
                a = s | c;
              (i[n >>> 2] |= a << (24 - (n % 4) * 8)), n++;
            }
          return h.create(i, n);
        })(t, e, i);
      },
      _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    }),
    (function (l) {
      var t = bt,
        e = t.lib,
        r = e.WordArray,
        i = e.Hasher,
        n = t.algo,
        H = [];
      !(function () {
        for (var t = 0; t < 64; t++)
          H[t] = (4294967296 * l.abs(l.sin(t + 1))) | 0;
      })();
      var o = (n.MD5 = i.extend({
        _doReset: function () {
          this._hash = new r.init([
            1732584193, 4023233417, 2562383102, 271733878,
          ]);
        },
        _doProcessBlock: function (t, e) {
          for (var r = 0; r < 16; r++) {
            var i = e + r,
              n = t[i];
            t[i] =
              (16711935 & ((n << 8) | (n >>> 24))) |
              (4278255360 & ((n << 24) | (n >>> 8)));
          }
          var o = this._hash.words,
            s = t[e + 0],
            c = t[e + 1],
            a = t[e + 2],
            h = t[e + 3],
            l = t[e + 4],
            f = t[e + 5],
            d = t[e + 6],
            u = t[e + 7],
            p = t[e + 8],
            _ = t[e + 9],
            v = t[e + 10],
            y = t[e + 11],
            g = t[e + 12],
            B = t[e + 13],
            w = t[e + 14],
            k = t[e + 15],
            S = o[0],
            m = o[1],
            x = o[2],
            b = o[3];
          (S = z(S, m, x, b, s, 7, H[0])),
            (b = z(b, S, m, x, c, 12, H[1])),
            (x = z(x, b, S, m, a, 17, H[2])),
            (m = z(m, x, b, S, h, 22, H[3])),
            (S = z(S, m, x, b, l, 7, H[4])),
            (b = z(b, S, m, x, f, 12, H[5])),
            (x = z(x, b, S, m, d, 17, H[6])),
            (m = z(m, x, b, S, u, 22, H[7])),
            (S = z(S, m, x, b, p, 7, H[8])),
            (b = z(b, S, m, x, _, 12, H[9])),
            (x = z(x, b, S, m, v, 17, H[10])),
            (m = z(m, x, b, S, y, 22, H[11])),
            (S = z(S, m, x, b, g, 7, H[12])),
            (b = z(b, S, m, x, B, 12, H[13])),
            (x = z(x, b, S, m, w, 17, H[14])),
            (S = A(S, (m = z(m, x, b, S, k, 22, H[15])), x, b, c, 5, H[16])),
            (b = A(b, S, m, x, d, 9, H[17])),
            (x = A(x, b, S, m, y, 14, H[18])),
            (m = A(m, x, b, S, s, 20, H[19])),
            (S = A(S, m, x, b, f, 5, H[20])),
            (b = A(b, S, m, x, v, 9, H[21])),
            (x = A(x, b, S, m, k, 14, H[22])),
            (m = A(m, x, b, S, l, 20, H[23])),
            (S = A(S, m, x, b, _, 5, H[24])),
            (b = A(b, S, m, x, w, 9, H[25])),
            (x = A(x, b, S, m, h, 14, H[26])),
            (m = A(m, x, b, S, p, 20, H[27])),
            (S = A(S, m, x, b, B, 5, H[28])),
            (b = A(b, S, m, x, a, 9, H[29])),
            (x = A(x, b, S, m, u, 14, H[30])),
            (S = C(S, (m = A(m, x, b, S, g, 20, H[31])), x, b, f, 4, H[32])),
            (b = C(b, S, m, x, p, 11, H[33])),
            (x = C(x, b, S, m, y, 16, H[34])),
            (m = C(m, x, b, S, w, 23, H[35])),
            (S = C(S, m, x, b, c, 4, H[36])),
            (b = C(b, S, m, x, l, 11, H[37])),
            (x = C(x, b, S, m, u, 16, H[38])),
            (m = C(m, x, b, S, v, 23, H[39])),
            (S = C(S, m, x, b, B, 4, H[40])),
            (b = C(b, S, m, x, s, 11, H[41])),
            (x = C(x, b, S, m, h, 16, H[42])),
            (m = C(m, x, b, S, d, 23, H[43])),
            (S = C(S, m, x, b, _, 4, H[44])),
            (b = C(b, S, m, x, g, 11, H[45])),
            (x = C(x, b, S, m, k, 16, H[46])),
            (S = D(S, (m = C(m, x, b, S, a, 23, H[47])), x, b, s, 6, H[48])),
            (b = D(b, S, m, x, u, 10, H[49])),
            (x = D(x, b, S, m, w, 15, H[50])),
            (m = D(m, x, b, S, f, 21, H[51])),
            (S = D(S, m, x, b, g, 6, H[52])),
            (b = D(b, S, m, x, h, 10, H[53])),
            (x = D(x, b, S, m, v, 15, H[54])),
            (m = D(m, x, b, S, c, 21, H[55])),
            (S = D(S, m, x, b, p, 6, H[56])),
            (b = D(b, S, m, x, k, 10, H[57])),
            (x = D(x, b, S, m, d, 15, H[58])),
            (m = D(m, x, b, S, B, 21, H[59])),
            (S = D(S, m, x, b, l, 6, H[60])),
            (b = D(b, S, m, x, y, 10, H[61])),
            (x = D(x, b, S, m, a, 15, H[62])),
            (m = D(m, x, b, S, _, 21, H[63])),
            (o[0] = (o[0] + S) | 0),
            (o[1] = (o[1] + m) | 0),
            (o[2] = (o[2] + x) | 0),
            (o[3] = (o[3] + b) | 0);
        },
        _doFinalize: function () {
          var t = this._data,
            e = t.words,
            r = 8 * this._nDataBytes,
            i = 8 * t.sigBytes;
          e[i >>> 5] |= 128 << (24 - (i % 32));
          var n = l.floor(r / 4294967296),
            o = r;
          (e[15 + (((64 + i) >>> 9) << 4)] =
            (16711935 & ((n << 8) | (n >>> 24))) |
            (4278255360 & ((n << 24) | (n >>> 8)))),
            (e[14 + (((64 + i) >>> 9) << 4)] =
              (16711935 & ((o << 8) | (o >>> 24))) |
              (4278255360 & ((o << 24) | (o >>> 8)))),
            (t.sigBytes = 4 * (e.length + 1)),
            this._process();
          for (var s = this._hash, c = s.words, a = 0; a < 4; a++) {
            var h = c[a];
            c[a] =
              (16711935 & ((h << 8) | (h >>> 24))) |
              (4278255360 & ((h << 24) | (h >>> 8)));
          }
          return s;
        },
        clone: function () {
          var t = i.clone.call(this);
          return (t._hash = this._hash.clone()), t;
        },
      }));
      function z(t, e, r, i, n, o, s) {
        var c = t + ((e & r) | (~e & i)) + n + s;
        return ((c << o) | (c >>> (32 - o))) + e;
      }
      function A(t, e, r, i, n, o, s) {
        var c = t + ((e & i) | (r & ~i)) + n + s;
        return ((c << o) | (c >>> (32 - o))) + e;
      }
      function C(t, e, r, i, n, o, s) {
        var c = t + (e ^ r ^ i) + n + s;
        return ((c << o) | (c >>> (32 - o))) + e;
      }
      function D(t, e, r, i, n, o, s) {
        var c = t + (r ^ (e | ~i)) + n + s;
        return ((c << o) | (c >>> (32 - o))) + e;
      }
      (t.MD5 = i._createHelper(o)), (t.HmacMD5 = i._createHmacHelper(o));
    })(Math),
    (e = (t = bt).lib),
    (r = e.WordArray),
    (i = e.Hasher),
    (n = t.algo),
    (f = []),
    (o = n.SHA1 =
      i.extend({
        _doReset: function () {
          this._hash = new r.init([
            1732584193, 4023233417, 2562383102, 271733878, 3285377520,
          ]);
        },
        _doProcessBlock: function (t, e) {
          for (
            var r = this._hash.words,
              i = r[0],
              n = r[1],
              o = r[2],
              s = r[3],
              c = r[4],
              a = 0;
            a < 80;
            a++
          ) {
            if (a < 16) f[a] = 0 | t[e + a];
            else {
              var h = f[a - 3] ^ f[a - 8] ^ f[a - 14] ^ f[a - 16];
              f[a] = (h << 1) | (h >>> 31);
            }
            var l = ((i << 5) | (i >>> 27)) + c + f[a];
            (l +=
              a < 20
                ? 1518500249 + ((n & o) | (~n & s))
                : a < 40
                ? 1859775393 + (n ^ o ^ s)
                : a < 60
                ? ((n & o) | (n & s) | (o & s)) - 1894007588
                : (n ^ o ^ s) - 899497514),
              (c = s),
              (s = o),
              (o = (n << 30) | (n >>> 2)),
              (n = i),
              (i = l);
          }
          (r[0] = (r[0] + i) | 0),
            (r[1] = (r[1] + n) | 0),
            (r[2] = (r[2] + o) | 0),
            (r[3] = (r[3] + s) | 0),
            (r[4] = (r[4] + c) | 0);
        },
        _doFinalize: function () {
          var t = this._data,
            e = t.words,
            r = 8 * this._nDataBytes,
            i = 8 * t.sigBytes;
          return (
            (e[i >>> 5] |= 128 << (24 - (i % 32))),
            (e[14 + (((64 + i) >>> 9) << 4)] = Math.floor(r / 4294967296)),
            (e[15 + (((64 + i) >>> 9) << 4)] = r),
            (t.sigBytes = 4 * e.length),
            this._process(),
            this._hash
          );
        },
        clone: function () {
          var t = i.clone.call(this);
          return (t._hash = this._hash.clone()), t;
        },
      })),
    (t.SHA1 = i._createHelper(o)),
    (t.HmacSHA1 = i._createHmacHelper(o)),
    (function (n) {
      var t = bt,
        e = t.lib,
        r = e.WordArray,
        i = e.Hasher,
        o = t.algo,
        s = [],
        B = [];
      !(function () {
        function t(t) {
          for (var e = n.sqrt(t), r = 2; r <= e; r++) if (!(t % r)) return;
          return 1;
        }
        function e(t) {
          return (4294967296 * (t - (0 | t))) | 0;
        }
        for (var r = 2, i = 0; i < 64; )
          t(r) &&
            (i < 8 && (s[i] = e(n.pow(r, 0.5))),
            (B[i] = e(n.pow(r, 1 / 3))),
            i++),
            r++;
      })();
      var w = [],
        c = (o.SHA256 = i.extend({
          _doReset: function () {
            this._hash = new r.init(s.slice(0));
          },
          _doProcessBlock: function (t, e) {
            for (
              var r = this._hash.words,
                i = r[0],
                n = r[1],
                o = r[2],
                s = r[3],
                c = r[4],
                a = r[5],
                h = r[6],
                l = r[7],
                f = 0;
              f < 64;
              f++
            ) {
              if (f < 16) w[f] = 0 | t[e + f];
              else {
                var d = w[f - 15],
                  u =
                    ((d << 25) | (d >>> 7)) ^
                    ((d << 14) | (d >>> 18)) ^
                    (d >>> 3),
                  p = w[f - 2],
                  _ =
                    ((p << 15) | (p >>> 17)) ^
                    ((p << 13) | (p >>> 19)) ^
                    (p >>> 10);
                w[f] = u + w[f - 7] + _ + w[f - 16];
              }
              var v = (i & n) ^ (i & o) ^ (n & o),
                y =
                  ((i << 30) | (i >>> 2)) ^
                  ((i << 19) | (i >>> 13)) ^
                  ((i << 10) | (i >>> 22)),
                g =
                  l +
                  (((c << 26) | (c >>> 6)) ^
                    ((c << 21) | (c >>> 11)) ^
                    ((c << 7) | (c >>> 25))) +
                  ((c & a) ^ (~c & h)) +
                  B[f] +
                  w[f];
              (l = h),
                (h = a),
                (a = c),
                (c = (s + g) | 0),
                (s = o),
                (o = n),
                (n = i),
                (i = (g + (y + v)) | 0);
            }
            (r[0] = (r[0] + i) | 0),
              (r[1] = (r[1] + n) | 0),
              (r[2] = (r[2] + o) | 0),
              (r[3] = (r[3] + s) | 0),
              (r[4] = (r[4] + c) | 0),
              (r[5] = (r[5] + a) | 0),
              (r[6] = (r[6] + h) | 0),
              (r[7] = (r[7] + l) | 0);
          },
          _doFinalize: function () {
            var t = this._data,
              e = t.words,
              r = 8 * this._nDataBytes,
              i = 8 * t.sigBytes;
            return (
              (e[i >>> 5] |= 128 << (24 - (i % 32))),
              (e[14 + (((64 + i) >>> 9) << 4)] = n.floor(r / 4294967296)),
              (e[15 + (((64 + i) >>> 9) << 4)] = r),
              (t.sigBytes = 4 * e.length),
              this._process(),
              this._hash
            );
          },
          clone: function () {
            var t = i.clone.call(this);
            return (t._hash = this._hash.clone()), t;
          },
        }));
      (t.SHA256 = i._createHelper(c)), (t.HmacSHA256 = i._createHmacHelper(c));
    })(Math),
    (function () {
      var n = bt.lib.WordArray,
        t = bt.enc;
      t.Utf16 = t.Utf16BE = {
        stringify: function (t) {
          for (var e = t.words, r = t.sigBytes, i = [], n = 0; n < r; n += 2) {
            var o = (e[n >>> 2] >>> (16 - (n % 4) * 8)) & 65535;
            i.push(String.fromCharCode(o));
          }
          return i.join("");
        },
        parse: function (t) {
          for (var e = t.length, r = [], i = 0; i < e; i++)
            r[i >>> 1] |= t.charCodeAt(i) << (16 - (i % 2) * 16);
          return n.create(r, 2 * e);
        },
      };
      function s(t) {
        return ((t << 8) & 4278255360) | ((t >>> 8) & 16711935);
      }
      t.Utf16LE = {
        stringify: function (t) {
          for (var e = t.words, r = t.sigBytes, i = [], n = 0; n < r; n += 2) {
            var o = s((e[n >>> 2] >>> (16 - (n % 4) * 8)) & 65535);
            i.push(String.fromCharCode(o));
          }
          return i.join("");
        },
        parse: function (t) {
          for (var e = t.length, r = [], i = 0; i < e; i++)
            r[i >>> 1] |= s(t.charCodeAt(i) << (16 - (i % 2) * 16));
          return n.create(r, 2 * e);
        },
      };
    })(),
    (function () {
      if ("function" == typeof ArrayBuffer) {
        var t = bt.lib.WordArray,
          n = t.init;
        (t.init = function (t) {
          if (
            (t instanceof ArrayBuffer && (t = new Uint8Array(t)),
            (t instanceof Int8Array ||
              ("undefined" != typeof Uint8ClampedArray &&
                t instanceof Uint8ClampedArray) ||
              t instanceof Int16Array ||
              t instanceof Uint16Array ||
              t instanceof Int32Array ||
              t instanceof Uint32Array ||
              t instanceof Float32Array ||
              t instanceof Float64Array) &&
              (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength)),
            t instanceof Uint8Array)
          ) {
            for (var e = t.byteLength, r = [], i = 0; i < e; i++)
              r[i >>> 2] |= t[i] << (24 - (i % 4) * 8);
            n.call(this, r, e);
          } else n.apply(this, arguments);
        }).prototype = t;
      }
    })(),
    Math,
    (c = (s = bt).lib),
    (a = c.WordArray),
    (l = c.Hasher),
    (d = s.algo),
    (m = a.create([
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6,
      15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6,
      13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0,
      5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13,
    ])),
    (x = a.create([
      5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13,
      5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2,
      10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12,
      15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11,
    ])),
    (b = a.create([
      11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11,
      9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8,
      13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5,
      12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6,
    ])),
    (H = a.create([
      8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12,
      8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13,
      5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15,
      8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11,
    ])),
    (z = a.create([0, 1518500249, 1859775393, 2400959708, 2840853838])),
    (A = a.create([1352829926, 1548603684, 1836072691, 2053994217, 0])),
    (u = d.RIPEMD160 =
      l.extend({
        _doReset: function () {
          this._hash = a.create([
            1732584193, 4023233417, 2562383102, 271733878, 3285377520,
          ]);
        },
        _doProcessBlock: function (t, e) {
          for (var r = 0; r < 16; r++) {
            var i = e + r,
              n = t[i];
            t[i] =
              (16711935 & ((n << 8) | (n >>> 24))) |
              (4278255360 & ((n << 24) | (n >>> 8)));
          }
          var o,
            s,
            c,
            a,
            h,
            l,
            f,
            d,
            u,
            p,
            _,
            v = this._hash.words,
            y = z.words,
            g = A.words,
            B = m.words,
            w = x.words,
            k = b.words,
            S = H.words;
          (l = o = v[0]),
            (f = s = v[1]),
            (d = c = v[2]),
            (u = a = v[3]),
            (p = h = v[4]);
          for (r = 0; r < 80; r += 1)
            (_ = (o + t[e + B[r]]) | 0),
              (_ +=
                r < 16
                  ? mt(s, c, a) + y[0]
                  : r < 32
                  ? xt(s, c, a) + y[1]
                  : r < 48
                  ? Ht(s, c, a) + y[2]
                  : r < 64
                  ? zt(s, c, a) + y[3]
                  : At(s, c, a) + y[4]),
              (_ = ((_ = Ct((_ |= 0), k[r])) + h) | 0),
              (o = h),
              (h = a),
              (a = Ct(c, 10)),
              (c = s),
              (s = _),
              (_ = (l + t[e + w[r]]) | 0),
              (_ +=
                r < 16
                  ? At(f, d, u) + g[0]
                  : r < 32
                  ? zt(f, d, u) + g[1]
                  : r < 48
                  ? Ht(f, d, u) + g[2]
                  : r < 64
                  ? xt(f, d, u) + g[3]
                  : mt(f, d, u) + g[4]),
              (_ = ((_ = Ct((_ |= 0), S[r])) + p) | 0),
              (l = p),
              (p = u),
              (u = Ct(d, 10)),
              (d = f),
              (f = _);
          (_ = (v[1] + c + u) | 0),
            (v[1] = (v[2] + a + p) | 0),
            (v[2] = (v[3] + h + l) | 0),
            (v[3] = (v[4] + o + f) | 0),
            (v[4] = (v[0] + s + d) | 0),
            (v[0] = _);
        },
        _doFinalize: function () {
          var t = this._data,
            e = t.words,
            r = 8 * this._nDataBytes,
            i = 8 * t.sigBytes;
          (e[i >>> 5] |= 128 << (24 - (i % 32))),
            (e[14 + (((64 + i) >>> 9) << 4)] =
              (16711935 & ((r << 8) | (r >>> 24))) |
              (4278255360 & ((r << 24) | (r >>> 8)))),
            (t.sigBytes = 4 * (e.length + 1)),
            this._process();
          for (var n = this._hash, o = n.words, s = 0; s < 5; s++) {
            var c = o[s];
            o[s] =
              (16711935 & ((c << 8) | (c >>> 24))) |
              (4278255360 & ((c << 24) | (c >>> 8)));
          }
          return n;
        },
        clone: function () {
          var t = l.clone.call(this);
          return (t._hash = this._hash.clone()), t;
        },
      })),
    (s.RIPEMD160 = l._createHelper(u)),
    (s.HmacRIPEMD160 = l._createHmacHelper(u)),
    (p = bt.lib.Base),
    (_ = bt.enc.Utf8),
    (bt.algo.HMAC = p.extend({
      init: function (t, e) {
        (t = this._hasher = new t.init()),
          "string" == typeof e && (e = _.parse(e));
        var r = t.blockSize,
          i = 4 * r;
        e.sigBytes > i && (e = t.finalize(e)), e.clamp();
        for (
          var n = (this._oKey = e.clone()),
            o = (this._iKey = e.clone()),
            s = n.words,
            c = o.words,
            a = 0;
          a < r;
          a++
        )
          (s[a] ^= 1549556828), (c[a] ^= 909522486);
        (n.sigBytes = o.sigBytes = i), this.reset();
      },
      reset: function () {
        var t = this._hasher;
        t.reset(), t.update(this._iKey);
      },
      update: function (t) {
        return this._hasher.update(t), this;
      },
      finalize: function (t) {
        var e = this._hasher,
          r = e.finalize(t);
        return e.reset(), e.finalize(this._oKey.clone().concat(r));
      },
    })),
    (y = (v = bt).lib),
    (g = y.Base),
    (B = y.WordArray),
    (w = v.algo),
    (k = w.SHA1),
    (S = w.HMAC),
    (C = w.PBKDF2 =
      g.extend({
        cfg: g.extend({ keySize: 4, hasher: k, iterations: 1 }),
        init: function (t) {
          this.cfg = this.cfg.extend(t);
        },
        compute: function (t, e) {
          for (
            var r = this.cfg,
              i = S.create(r.hasher, t),
              n = B.create(),
              o = B.create([1]),
              s = n.words,
              c = o.words,
              a = r.keySize,
              h = r.iterations;
            s.length < a;

          ) {
            var l = i.update(e).finalize(o);
            i.reset();
            for (var f = l.words, d = f.length, u = l, p = 1; p < h; p++) {
              (u = i.finalize(u)), i.reset();
              for (var _ = u.words, v = 0; v < d; v++) f[v] ^= _[v];
            }
            n.concat(l), c[0]++;
          }
          return (n.sigBytes = 4 * a), n;
        },
      })),
    (v.PBKDF2 = function (t, e, r) {
      return C.create(r).compute(t, e);
    }),
    (E = (D = bt).lib),
    (R = E.Base),
    (M = E.WordArray),
    (F = D.algo),
    (P = F.MD5),
    (W = F.EvpKDF =
      R.extend({
        cfg: R.extend({ keySize: 4, hasher: P, iterations: 1 }),
        init: function (t) {
          this.cfg = this.cfg.extend(t);
        },
        compute: function (t, e) {
          for (
            var r,
              i = this.cfg,
              n = i.hasher.create(),
              o = M.create(),
              s = o.words,
              c = i.keySize,
              a = i.iterations;
            s.length < c;

          ) {
            r && n.update(r), (r = n.update(t).finalize(e)), n.reset();
            for (var h = 1; h < a; h++) (r = n.finalize(r)), n.reset();
            o.concat(r);
          }
          return (o.sigBytes = 4 * c), o;
        },
      })),
    (D.EvpKDF = function (t, e, r) {
      return W.create(r).compute(t, e);
    }),
    (I = (O = bt).lib.WordArray),
    (U = O.algo),
    (K = U.SHA256),
    (X = U.SHA224 =
      K.extend({
        _doReset: function () {
          this._hash = new I.init([
            3238371032, 914150663, 812702999, 4144912697, 4290775857,
            1750603025, 1694076839, 3204075428,
          ]);
        },
        _doFinalize: function () {
          var t = K._doFinalize.call(this);
          return (t.sigBytes -= 4), t;
        },
      })),
    (O.SHA224 = K._createHelper(X)),
    (O.HmacSHA224 = K._createHmacHelper(X)),
    (L = bt.lib),
    (j = L.Base),
    (N = L.WordArray),
    ((T = bt.x64 = {}).Word = j.extend({
      init: function (t, e) {
        (this.high = t), (this.low = e);
      },
    })),
    (T.WordArray = j.extend({
      init: function (t, e) {
        (t = this.words = t || []),
          (this.sigBytes = null != e ? e : 8 * t.length);
      },
      toX32: function () {
        for (var t = this.words, e = t.length, r = [], i = 0; i < e; i++) {
          var n = t[i];
          r.push(n.high), r.push(n.low);
        }
        return N.create(r, this.sigBytes);
      },
      clone: function () {
        for (
          var t = j.clone.call(this),
            e = (t.words = this.words.slice(0)),
            r = e.length,
            i = 0;
          i < r;
          i++
        )
          e[i] = e[i].clone();
        return t;
      },
    })),
    (function (d) {
      var t = bt,
        e = t.lib,
        u = e.WordArray,
        i = e.Hasher,
        l = t.x64.Word,
        r = t.algo,
        C = [],
        D = [],
        E = [];
      !(function () {
        for (var t = 1, e = 0, r = 0; r < 24; r++) {
          C[t + 5 * e] = (((r + 1) * (r + 2)) / 2) % 64;
          var i = (2 * t + 3 * e) % 5;
          (t = e % 5), (e = i);
        }
        for (t = 0; t < 5; t++)
          for (e = 0; e < 5; e++) D[t + 5 * e] = e + ((2 * t + 3 * e) % 5) * 5;
        for (var n = 1, o = 0; o < 24; o++) {
          for (var s = 0, c = 0, a = 0; a < 7; a++) {
            if (1 & n) {
              var h = (1 << a) - 1;
              h < 32 ? (c ^= 1 << h) : (s ^= 1 << (h - 32));
            }
            128 & n ? (n = (n << 1) ^ 113) : (n <<= 1);
          }
          E[o] = l.create(s, c);
        }
      })();
      var R = [];
      !(function () {
        for (var t = 0; t < 25; t++) R[t] = l.create();
      })();
      var n = (r.SHA3 = i.extend({
        cfg: i.cfg.extend({ outputLength: 512 }),
        _doReset: function () {
          for (var t = (this._state = []), e = 0; e < 25; e++)
            t[e] = new l.init();
          this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
        },
        _doProcessBlock: function (t, e) {
          for (var r = this._state, i = this.blockSize / 2, n = 0; n < i; n++) {
            var o = t[e + 2 * n],
              s = t[e + 2 * n + 1];
            (o =
              (16711935 & ((o << 8) | (o >>> 24))) |
              (4278255360 & ((o << 24) | (o >>> 8)))),
              (s =
                (16711935 & ((s << 8) | (s >>> 24))) |
                (4278255360 & ((s << 24) | (s >>> 8)))),
              ((x = r[n]).high ^= s),
              (x.low ^= o);
          }
          for (var c = 0; c < 24; c++) {
            for (var a = 0; a < 5; a++) {
              for (var h = 0, l = 0, f = 0; f < 5; f++) {
                (h ^= (x = r[a + 5 * f]).high), (l ^= x.low);
              }
              var d = R[a];
              (d.high = h), (d.low = l);
            }
            for (a = 0; a < 5; a++) {
              var u = R[(a + 4) % 5],
                p = R[(a + 1) % 5],
                _ = p.high,
                v = p.low;
              for (
                h = u.high ^ ((_ << 1) | (v >>> 31)),
                  l = u.low ^ ((v << 1) | (_ >>> 31)),
                  f = 0;
                f < 5;
                f++
              ) {
                ((x = r[a + 5 * f]).high ^= h), (x.low ^= l);
              }
            }
            for (var y = 1; y < 25; y++) {
              var g = (x = r[y]).high,
                B = x.low,
                w = C[y];
              l =
                w < 32
                  ? ((h = (g << w) | (B >>> (32 - w))),
                    (B << w) | (g >>> (32 - w)))
                  : ((h = (B << (w - 32)) | (g >>> (64 - w))),
                    (g << (w - 32)) | (B >>> (64 - w)));
              var k = R[D[y]];
              (k.high = h), (k.low = l);
            }
            var S = R[0],
              m = r[0];
            (S.high = m.high), (S.low = m.low);
            for (a = 0; a < 5; a++)
              for (f = 0; f < 5; f++) {
                var x = r[(y = a + 5 * f)],
                  b = R[y],
                  H = R[((a + 1) % 5) + 5 * f],
                  z = R[((a + 2) % 5) + 5 * f];
                (x.high = b.high ^ (~H.high & z.high)),
                  (x.low = b.low ^ (~H.low & z.low));
              }
            x = r[0];
            var A = E[c];
            (x.high ^= A.high), (x.low ^= A.low);
          }
        },
        _doFinalize: function () {
          var t = this._data,
            e = t.words,
            r = (this._nDataBytes, 8 * t.sigBytes),
            i = 32 * this.blockSize;
          (e[r >>> 5] |= 1 << (24 - (r % 32))),
            (e[((d.ceil((1 + r) / i) * i) >>> 5) - 1] |= 128),
            (t.sigBytes = 4 * e.length),
            this._process();
          for (
            var n = this._state,
              o = this.cfg.outputLength / 8,
              s = o / 8,
              c = [],
              a = 0;
            a < s;
            a++
          ) {
            var h = n[a],
              l = h.high,
              f = h.low;
            (l =
              (16711935 & ((l << 8) | (l >>> 24))) |
              (4278255360 & ((l << 24) | (l >>> 8)))),
              (f =
                (16711935 & ((f << 8) | (f >>> 24))) |
                (4278255360 & ((f << 24) | (f >>> 8)))),
              c.push(f),
              c.push(l);
          }
          return new u.init(c, o);
        },
        clone: function () {
          for (
            var t = i.clone.call(this),
              e = (t._state = this._state.slice(0)),
              r = 0;
            r < 25;
            r++
          )
            e[r] = e[r].clone();
          return t;
        },
      }));
      (t.SHA3 = i._createHelper(n)), (t.HmacSHA3 = i._createHmacHelper(n));
    })(Math),
    (function () {
      var t = bt,
        e = t.lib.Hasher,
        r = t.x64,
        i = r.Word,
        n = r.WordArray,
        o = t.algo;
      function s() {
        return i.create.apply(i, arguments);
      }
      var mt = [
          s(1116352408, 3609767458),
          s(1899447441, 602891725),
          s(3049323471, 3964484399),
          s(3921009573, 2173295548),
          s(961987163, 4081628472),
          s(1508970993, 3053834265),
          s(2453635748, 2937671579),
          s(2870763221, 3664609560),
          s(3624381080, 2734883394),
          s(310598401, 1164996542),
          s(607225278, 1323610764),
          s(1426881987, 3590304994),
          s(1925078388, 4068182383),
          s(2162078206, 991336113),
          s(2614888103, 633803317),
          s(3248222580, 3479774868),
          s(3835390401, 2666613458),
          s(4022224774, 944711139),
          s(264347078, 2341262773),
          s(604807628, 2007800933),
          s(770255983, 1495990901),
          s(1249150122, 1856431235),
          s(1555081692, 3175218132),
          s(1996064986, 2198950837),
          s(2554220882, 3999719339),
          s(2821834349, 766784016),
          s(2952996808, 2566594879),
          s(3210313671, 3203337956),
          s(3336571891, 1034457026),
          s(3584528711, 2466948901),
          s(113926993, 3758326383),
          s(338241895, 168717936),
          s(666307205, 1188179964),
          s(773529912, 1546045734),
          s(1294757372, 1522805485),
          s(1396182291, 2643833823),
          s(1695183700, 2343527390),
          s(1986661051, 1014477480),
          s(2177026350, 1206759142),
          s(2456956037, 344077627),
          s(2730485921, 1290863460),
          s(2820302411, 3158454273),
          s(3259730800, 3505952657),
          s(3345764771, 106217008),
          s(3516065817, 3606008344),
          s(3600352804, 1432725776),
          s(4094571909, 1467031594),
          s(275423344, 851169720),
          s(430227734, 3100823752),
          s(506948616, 1363258195),
          s(659060556, 3750685593),
          s(883997877, 3785050280),
          s(958139571, 3318307427),
          s(1322822218, 3812723403),
          s(1537002063, 2003034995),
          s(1747873779, 3602036899),
          s(1955562222, 1575990012),
          s(2024104815, 1125592928),
          s(2227730452, 2716904306),
          s(2361852424, 442776044),
          s(2428436474, 593698344),
          s(2756734187, 3733110249),
          s(3204031479, 2999351573),
          s(3329325298, 3815920427),
          s(3391569614, 3928383900),
          s(3515267271, 566280711),
          s(3940187606, 3454069534),
          s(4118630271, 4000239992),
          s(116418474, 1914138554),
          s(174292421, 2731055270),
          s(289380356, 3203993006),
          s(460393269, 320620315),
          s(685471733, 587496836),
          s(852142971, 1086792851),
          s(1017036298, 365543100),
          s(1126000580, 2618297676),
          s(1288033470, 3409855158),
          s(1501505948, 4234509866),
          s(1607167915, 987167468),
          s(1816402316, 1246189591),
        ],
        xt = [];
      !(function () {
        for (var t = 0; t < 80; t++) xt[t] = s();
      })();
      var c = (o.SHA512 = e.extend({
        _doReset: function () {
          this._hash = new n.init([
            new i.init(1779033703, 4089235720),
            new i.init(3144134277, 2227873595),
            new i.init(1013904242, 4271175723),
            new i.init(2773480762, 1595750129),
            new i.init(1359893119, 2917565137),
            new i.init(2600822924, 725511199),
            new i.init(528734635, 4215389547),
            new i.init(1541459225, 327033209),
          ]);
        },
        _doProcessBlock: function (t, e) {
          for (
            var r = this._hash.words,
              i = r[0],
              n = r[1],
              o = r[2],
              s = r[3],
              c = r[4],
              a = r[5],
              h = r[6],
              l = r[7],
              f = i.high,
              d = i.low,
              u = n.high,
              p = n.low,
              _ = o.high,
              v = o.low,
              y = s.high,
              g = s.low,
              B = c.high,
              w = c.low,
              k = a.high,
              S = a.low,
              m = h.high,
              x = h.low,
              b = l.high,
              H = l.low,
              z = f,
              A = d,
              C = u,
              D = p,
              E = _,
              R = v,
              M = y,
              F = g,
              P = B,
              W = w,
              O = k,
              I = S,
              U = m,
              K = x,
              X = b,
              L = H,
              j = 0;
            j < 80;
            j++
          ) {
            var N,
              T,
              q = xt[j];
            if (j < 16)
              (T = q.high = 0 | t[e + 2 * j]),
                (N = q.low = 0 | t[e + 2 * j + 1]);
            else {
              var Z = xt[j - 15],
                V = Z.high,
                G = Z.low,
                J =
                  ((V >>> 1) | (G << 31)) ^ ((V >>> 8) | (G << 24)) ^ (V >>> 7),
                $ =
                  ((G >>> 1) | (V << 31)) ^
                  ((G >>> 8) | (V << 24)) ^
                  ((G >>> 7) | (V << 25)),
                Q = xt[j - 2],
                Y = Q.high,
                tt = Q.low,
                et =
                  ((Y >>> 19) | (tt << 13)) ^
                  ((Y << 3) | (tt >>> 29)) ^
                  (Y >>> 6),
                rt =
                  ((tt >>> 19) | (Y << 13)) ^
                  ((tt << 3) | (Y >>> 29)) ^
                  ((tt >>> 6) | (Y << 26)),
                it = xt[j - 7],
                nt = it.high,
                ot = it.low,
                st = xt[j - 16],
                ct = st.high,
                at = st.low;
              (T =
                (T =
                  (T = J + nt + ((N = $ + ot) >>> 0 < $ >>> 0 ? 1 : 0)) +
                  et +
                  ((N += rt) >>> 0 < rt >>> 0 ? 1 : 0)) +
                ct +
                ((N += at) >>> 0 < at >>> 0 ? 1 : 0)),
                (q.high = T),
                (q.low = N);
            }
            var ht,
              lt = (P & O) ^ (~P & U),
              ft = (W & I) ^ (~W & K),
              dt = (z & C) ^ (z & E) ^ (C & E),
              ut = (A & D) ^ (A & R) ^ (D & R),
              pt =
                ((z >>> 28) | (A << 4)) ^
                ((z << 30) | (A >>> 2)) ^
                ((z << 25) | (A >>> 7)),
              _t =
                ((A >>> 28) | (z << 4)) ^
                ((A << 30) | (z >>> 2)) ^
                ((A << 25) | (z >>> 7)),
              vt =
                ((P >>> 14) | (W << 18)) ^
                ((P >>> 18) | (W << 14)) ^
                ((P << 23) | (W >>> 9)),
              yt =
                ((W >>> 14) | (P << 18)) ^
                ((W >>> 18) | (P << 14)) ^
                ((W << 23) | (P >>> 9)),
              gt = mt[j],
              Bt = gt.high,
              wt = gt.low,
              kt = X + vt + ((ht = L + yt) >>> 0 < L >>> 0 ? 1 : 0),
              St = _t + ut;
            (X = U),
              (L = K),
              (U = O),
              (K = I),
              (O = P),
              (I = W),
              (P =
                (M +
                  (kt =
                    (kt =
                      (kt =
                        kt + lt + ((ht = ht + ft) >>> 0 < ft >>> 0 ? 1 : 0)) +
                      Bt +
                      ((ht = ht + wt) >>> 0 < wt >>> 0 ? 1 : 0)) +
                    T +
                    ((ht = ht + N) >>> 0 < N >>> 0 ? 1 : 0)) +
                  ((W = (F + ht) | 0) >>> 0 < F >>> 0 ? 1 : 0)) |
                0),
              (M = E),
              (F = R),
              (E = C),
              (R = D),
              (C = z),
              (D = A),
              (z =
                (kt +
                  (pt + dt + (St >>> 0 < _t >>> 0 ? 1 : 0)) +
                  ((A = (ht + St) | 0) >>> 0 < ht >>> 0 ? 1 : 0)) |
                0);
          }
          (d = i.low = d + A),
            (i.high = f + z + (d >>> 0 < A >>> 0 ? 1 : 0)),
            (p = n.low = p + D),
            (n.high = u + C + (p >>> 0 < D >>> 0 ? 1 : 0)),
            (v = o.low = v + R),
            (o.high = _ + E + (v >>> 0 < R >>> 0 ? 1 : 0)),
            (g = s.low = g + F),
            (s.high = y + M + (g >>> 0 < F >>> 0 ? 1 : 0)),
            (w = c.low = w + W),
            (c.high = B + P + (w >>> 0 < W >>> 0 ? 1 : 0)),
            (S = a.low = S + I),
            (a.high = k + O + (S >>> 0 < I >>> 0 ? 1 : 0)),
            (x = h.low = x + K),
            (h.high = m + U + (x >>> 0 < K >>> 0 ? 1 : 0)),
            (H = l.low = H + L),
            (l.high = b + X + (H >>> 0 < L >>> 0 ? 1 : 0));
        },
        _doFinalize: function () {
          var t = this._data,
            e = t.words,
            r = 8 * this._nDataBytes,
            i = 8 * t.sigBytes;
          return (
            (e[i >>> 5] |= 128 << (24 - (i % 32))),
            (e[30 + (((128 + i) >>> 10) << 5)] = Math.floor(r / 4294967296)),
            (e[31 + (((128 + i) >>> 10) << 5)] = r),
            (t.sigBytes = 4 * e.length),
            this._process(),
            this._hash.toX32()
          );
        },
        clone: function () {
          var t = e.clone.call(this);
          return (t._hash = this._hash.clone()), t;
        },
        blockSize: 32,
      }));
      (t.SHA512 = e._createHelper(c)), (t.HmacSHA512 = e._createHmacHelper(c));
    })(),
    (Z = (q = bt).x64),
    (V = Z.Word),
    (G = Z.WordArray),
    (J = q.algo),
    ($ = J.SHA512),
    (Q = J.SHA384 =
      $.extend({
        _doReset: function () {
          this._hash = new G.init([
            new V.init(3418070365, 3238371032),
            new V.init(1654270250, 914150663),
            new V.init(2438529370, 812702999),
            new V.init(355462360, 4144912697),
            new V.init(1731405415, 4290775857),
            new V.init(2394180231, 1750603025),
            new V.init(3675008525, 1694076839),
            new V.init(1203062813, 3204075428),
          ]);
        },
        _doFinalize: function () {
          var t = $._doFinalize.call(this);
          return (t.sigBytes -= 16), t;
        },
      })),
    (q.SHA384 = $._createHelper(Q)),
    (q.HmacSHA384 = $._createHmacHelper(Q)),
    bt.lib.Cipher ||
      (function () {
        var t = bt,
          e = t.lib,
          r = e.Base,
          a = e.WordArray,
          i = e.BufferedBlockAlgorithm,
          n = t.enc,
          o = (n.Utf8, n.Base64),
          s = t.algo.EvpKDF,
          c = (e.Cipher = i.extend({
            cfg: r.extend(),
            createEncryptor: function (t, e) {
              return this.create(this._ENC_XFORM_MODE, t, e);
            },
            createDecryptor: function (t, e) {
              return this.create(this._DEC_XFORM_MODE, t, e);
            },
            init: function (t, e, r) {
              (this.cfg = this.cfg.extend(r)),
                (this._xformMode = t),
                (this._key = e),
                this.reset();
            },
            reset: function () {
              i.reset.call(this), this._doReset();
            },
            process: function (t) {
              return this._append(t), this._process();
            },
            finalize: function (t) {
              return t && this._append(t), this._doFinalize();
            },
            keySize: 4,
            ivSize: 4,
            _ENC_XFORM_MODE: 1,
            _DEC_XFORM_MODE: 2,
            _createHelper: function (i) {
              return {
                encrypt: function (t, e, r) {
                  return h(e).encrypt(i, t, e, r);
                },
                decrypt: function (t, e, r) {
                  return h(e).decrypt(i, t, e, r);
                },
              };
            },
          }));
        function h(t) {
          return "string" == typeof t ? w : g;
        }
        e.StreamCipher = c.extend({
          _doFinalize: function () {
            return this._process(!0);
          },
          blockSize: 1,
        });
        var l,
          f = (t.mode = {}),
          d = (e.BlockCipherMode = r.extend({
            createEncryptor: function (t, e) {
              return this.Encryptor.create(t, e);
            },
            createDecryptor: function (t, e) {
              return this.Decryptor.create(t, e);
            },
            init: function (t, e) {
              (this._cipher = t), (this._iv = e);
            },
          })),
          u = (f.CBC =
            (((l = d.extend()).Encryptor = l.extend({
              processBlock: function (t, e) {
                var r = this._cipher,
                  i = r.blockSize;
                p.call(this, t, e, i),
                  r.encryptBlock(t, e),
                  (this._prevBlock = t.slice(e, e + i));
              },
            })),
            (l.Decryptor = l.extend({
              processBlock: function (t, e) {
                var r = this._cipher,
                  i = r.blockSize,
                  n = t.slice(e, e + i);
                r.decryptBlock(t, e),
                  p.call(this, t, e, i),
                  (this._prevBlock = n);
              },
            })),
            l));
        function p(t, e, r) {
          var i,
            n = this._iv;
          n ? ((i = n), (this._iv = void 0)) : (i = this._prevBlock);
          for (var o = 0; o < r; o++) t[e + o] ^= i[o];
        }
        var _ = ((t.pad = {}).Pkcs7 = {
            pad: function (t, e) {
              for (
                var r = 4 * e,
                  i = r - (t.sigBytes % r),
                  n = (i << 24) | (i << 16) | (i << 8) | i,
                  o = [],
                  s = 0;
                s < i;
                s += 4
              )
                o.push(n);
              var c = a.create(o, i);
              t.concat(c);
            },
            unpad: function (t) {
              var e = 255 & t.words[(t.sigBytes - 1) >>> 2];
              t.sigBytes -= e;
            },
          }),
          v =
            ((e.BlockCipher = c.extend({
              cfg: c.cfg.extend({ mode: u, padding: _ }),
              reset: function () {
                var t;
                c.reset.call(this);
                var e = this.cfg,
                  r = e.iv,
                  i = e.mode;
                this._xformMode == this._ENC_XFORM_MODE
                  ? (t = i.createEncryptor)
                  : ((t = i.createDecryptor), (this._minBufferSize = 1)),
                  this._mode && this._mode.__creator == t
                    ? this._mode.init(this, r && r.words)
                    : ((this._mode = t.call(i, this, r && r.words)),
                      (this._mode.__creator = t));
              },
              _doProcessBlock: function (t, e) {
                this._mode.processBlock(t, e);
              },
              _doFinalize: function () {
                var t,
                  e = this.cfg.padding;
                return (
                  this._xformMode == this._ENC_XFORM_MODE
                    ? (e.pad(this._data, this.blockSize),
                      (t = this._process(!0)))
                    : ((t = this._process(!0)), e.unpad(t)),
                  t
                );
              },
              blockSize: 4,
            })),
            (e.CipherParams = r.extend({
              init: function (t) {
                this.mixIn(t);
              },
              toString: function (t) {
                return (t || this.formatter).stringify(this);
              },
            }))),
          y = ((t.format = {}).OpenSSL = {
            stringify: function (t) {
              var e = t.ciphertext,
                r = t.salt;
              return (
                r ? a.create([1398893684, 1701076831]).concat(r).concat(e) : e
              ).toString(o);
            },
            parse: function (t) {
              var e,
                r = o.parse(t),
                i = r.words;
              return (
                1398893684 == i[0] &&
                  1701076831 == i[1] &&
                  ((e = a.create(i.slice(2, 4))),
                  i.splice(0, 4),
                  (r.sigBytes -= 16)),
                v.create({ ciphertext: r, salt: e })
              );
            },
          }),
          g = (e.SerializableCipher = r.extend({
            cfg: r.extend({ format: y }),
            encrypt: function (t, e, r, i) {
              i = this.cfg.extend(i);
              var n = t.createEncryptor(r, i),
                o = n.finalize(e),
                s = n.cfg;
              return v.create({
                ciphertext: o,
                key: r,
                iv: s.iv,
                algorithm: t,
                mode: s.mode,
                padding: s.padding,
                blockSize: t.blockSize,
                formatter: i.format,
              });
            },
            decrypt: function (t, e, r, i) {
              return (
                (i = this.cfg.extend(i)),
                (e = this._parse(e, i.format)),
                t.createDecryptor(r, i).finalize(e.ciphertext)
              );
            },
            _parse: function (t, e) {
              return "string" == typeof t ? e.parse(t, this) : t;
            },
          })),
          B = ((t.kdf = {}).OpenSSL = {
            execute: function (t, e, r, i) {
              i = i || a.random(8);
              var n = s.create({ keySize: e + r }).compute(t, i),
                o = a.create(n.words.slice(e), 4 * r);
              return (n.sigBytes = 4 * e), v.create({ key: n, iv: o, salt: i });
            },
          }),
          w = (e.PasswordBasedCipher = g.extend({
            cfg: g.cfg.extend({ kdf: B }),
            encrypt: function (t, e, r, i) {
              var n = (i = this.cfg.extend(i)).kdf.execute(
                r,
                t.keySize,
                t.ivSize
              );
              i.iv = n.iv;
              var o = g.encrypt.call(this, t, e, n.key, i);
              return o.mixIn(n), o;
            },
            decrypt: function (t, e, r, i) {
              (i = this.cfg.extend(i)), (e = this._parse(e, i.format));
              var n = i.kdf.execute(r, t.keySize, t.ivSize, e.salt);
              return (i.iv = n.iv), g.decrypt.call(this, t, e, n.key, i);
            },
          }));
      })(),
    (bt.mode.CFB =
      (((Y = bt.lib.BlockCipherMode.extend()).Encryptor = Y.extend({
        processBlock: function (t, e) {
          var r = this._cipher,
            i = r.blockSize;
          Dt.call(this, t, e, i, r), (this._prevBlock = t.slice(e, e + i));
        },
      })),
      (Y.Decryptor = Y.extend({
        processBlock: function (t, e) {
          var r = this._cipher,
            i = r.blockSize,
            n = t.slice(e, e + i);
          Dt.call(this, t, e, i, r), (this._prevBlock = n);
        },
      })),
      Y)),
    (bt.mode.ECB =
      (((tt = bt.lib.BlockCipherMode.extend()).Encryptor = tt.extend({
        processBlock: function (t, e) {
          this._cipher.encryptBlock(t, e);
        },
      })),
      (tt.Decryptor = tt.extend({
        processBlock: function (t, e) {
          this._cipher.decryptBlock(t, e);
        },
      })),
      tt)),
    (bt.pad.AnsiX923 = {
      pad: function (t, e) {
        var r = t.sigBytes,
          i = 4 * e,
          n = i - (r % i),
          o = r + n - 1;
        t.clamp(),
          (t.words[o >>> 2] |= n << (24 - (o % 4) * 8)),
          (t.sigBytes += n);
      },
      unpad: function (t) {
        var e = 255 & t.words[(t.sigBytes - 1) >>> 2];
        t.sigBytes -= e;
      },
    }),
    (bt.pad.Iso10126 = {
      pad: function (t, e) {
        var r = 4 * e,
          i = r - (t.sigBytes % r);
        t.concat(bt.lib.WordArray.random(i - 1)).concat(
          bt.lib.WordArray.create([i << 24], 1)
        );
      },
      unpad: function (t) {
        var e = 255 & t.words[(t.sigBytes - 1) >>> 2];
        t.sigBytes -= e;
      },
    }),
    (bt.pad.Iso97971 = {
      pad: function (t, e) {
        t.concat(bt.lib.WordArray.create([2147483648], 1)),
          bt.pad.ZeroPadding.pad(t, e);
      },
      unpad: function (t) {
        bt.pad.ZeroPadding.unpad(t), t.sigBytes--;
      },
    }),
    (bt.mode.OFB =
      ((et = bt.lib.BlockCipherMode.extend()),
      (rt = et.Encryptor =
        et.extend({
          processBlock: function (t, e) {
            var r = this._cipher,
              i = r.blockSize,
              n = this._iv,
              o = this._keystream;
            n && ((o = this._keystream = n.slice(0)), (this._iv = void 0)),
              r.encryptBlock(o, 0);
            for (var s = 0; s < i; s++) t[e + s] ^= o[s];
          },
        })),
      (et.Decryptor = rt),
      et)),
    (bt.pad.NoPadding = { pad: function () {}, unpad: function () {} }),
    (it = bt.lib.CipherParams),
    (nt = bt.enc.Hex),
    (bt.format.Hex = {
      stringify: function (t) {
        return t.ciphertext.toString(nt);
      },
      parse: function (t) {
        var e = nt.parse(t);
        return it.create({ ciphertext: e });
      },
    }),
    (function () {
      var t = bt,
        e = t.lib.BlockCipher,
        r = t.algo,
        h = [],
        l = [],
        f = [],
        d = [],
        u = [],
        p = [],
        _ = [],
        v = [],
        y = [],
        g = [];
      !(function () {
        for (var t = [], e = 0; e < 256; e++)
          t[e] = e < 128 ? e << 1 : (e << 1) ^ 283;
        var r = 0,
          i = 0;
        for (e = 0; e < 256; e++) {
          var n = i ^ (i << 1) ^ (i << 2) ^ (i << 3) ^ (i << 4);
          (n = (n >>> 8) ^ (255 & n) ^ 99), (h[r] = n);
          var o = t[(l[n] = r)],
            s = t[o],
            c = t[s],
            a = (257 * t[n]) ^ (16843008 * n);
          (f[r] = (a << 24) | (a >>> 8)),
            (d[r] = (a << 16) | (a >>> 16)),
            (u[r] = (a << 8) | (a >>> 24)),
            (p[r] = a);
          a = (16843009 * c) ^ (65537 * s) ^ (257 * o) ^ (16843008 * r);
          (_[n] = (a << 24) | (a >>> 8)),
            (v[n] = (a << 16) | (a >>> 16)),
            (y[n] = (a << 8) | (a >>> 24)),
            (g[n] = a),
            r ? ((r = o ^ t[t[t[c ^ o]]]), (i ^= t[t[i]])) : (r = i = 1);
        }
      })();
      var B = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
        i = (r.AES = e.extend({
          _doReset: function () {
            if (!this._nRounds || this._keyPriorReset !== this._key) {
              for (
                var t = (this._keyPriorReset = this._key),
                  e = t.words,
                  r = t.sigBytes / 4,
                  i = 4 * (1 + (this._nRounds = 6 + r)),
                  n = (this._keySchedule = []),
                  o = 0;
                o < i;
                o++
              )
                o < r
                  ? (n[o] = e[o])
                  : ((a = n[o - 1]),
                    o % r
                      ? 6 < r &&
                        o % r == 4 &&
                        (a =
                          (h[a >>> 24] << 24) |
                          (h[(a >>> 16) & 255] << 16) |
                          (h[(a >>> 8) & 255] << 8) |
                          h[255 & a])
                      : ((a =
                          (h[(a = (a << 8) | (a >>> 24)) >>> 24] << 24) |
                          (h[(a >>> 16) & 255] << 16) |
                          (h[(a >>> 8) & 255] << 8) |
                          h[255 & a]),
                        (a ^= B[(o / r) | 0] << 24)),
                    (n[o] = n[o - r] ^ a));
              for (var s = (this._invKeySchedule = []), c = 0; c < i; c++) {
                o = i - c;
                if (c % 4) var a = n[o];
                else a = n[o - 4];
                s[c] =
                  c < 4 || o <= 4
                    ? a
                    : _[h[a >>> 24]] ^
                      v[h[(a >>> 16) & 255]] ^
                      y[h[(a >>> 8) & 255]] ^
                      g[h[255 & a]];
              }
            }
          },
          encryptBlock: function (t, e) {
            this._doCryptBlock(t, e, this._keySchedule, f, d, u, p, h);
          },
          decryptBlock: function (t, e) {
            var r = t[e + 1];
            (t[e + 1] = t[e + 3]),
              (t[e + 3] = r),
              this._doCryptBlock(t, e, this._invKeySchedule, _, v, y, g, l);
            r = t[e + 1];
            (t[e + 1] = t[e + 3]), (t[e + 3] = r);
          },
          _doCryptBlock: function (t, e, r, i, n, o, s, c) {
            for (
              var a = this._nRounds,
                h = t[e] ^ r[0],
                l = t[e + 1] ^ r[1],
                f = t[e + 2] ^ r[2],
                d = t[e + 3] ^ r[3],
                u = 4,
                p = 1;
              p < a;
              p++
            ) {
              var _ =
                  i[h >>> 24] ^
                  n[(l >>> 16) & 255] ^
                  o[(f >>> 8) & 255] ^
                  s[255 & d] ^
                  r[u++],
                v =
                  i[l >>> 24] ^
                  n[(f >>> 16) & 255] ^
                  o[(d >>> 8) & 255] ^
                  s[255 & h] ^
                  r[u++],
                y =
                  i[f >>> 24] ^
                  n[(d >>> 16) & 255] ^
                  o[(h >>> 8) & 255] ^
                  s[255 & l] ^
                  r[u++],
                g =
                  i[d >>> 24] ^
                  n[(h >>> 16) & 255] ^
                  o[(l >>> 8) & 255] ^
                  s[255 & f] ^
                  r[u++];
              (h = _), (l = v), (f = y), (d = g);
            }
            (_ =
              ((c[h >>> 24] << 24) |
                (c[(l >>> 16) & 255] << 16) |
                (c[(f >>> 8) & 255] << 8) |
                c[255 & d]) ^
              r[u++]),
              (v =
                ((c[l >>> 24] << 24) |
                  (c[(f >>> 16) & 255] << 16) |
                  (c[(d >>> 8) & 255] << 8) |
                  c[255 & h]) ^
                r[u++]),
              (y =
                ((c[f >>> 24] << 24) |
                  (c[(d >>> 16) & 255] << 16) |
                  (c[(h >>> 8) & 255] << 8) |
                  c[255 & l]) ^
                r[u++]),
              (g =
                ((c[d >>> 24] << 24) |
                  (c[(h >>> 16) & 255] << 16) |
                  (c[(l >>> 8) & 255] << 8) |
                  c[255 & f]) ^
                r[u++]);
            (t[e] = _), (t[e + 1] = v), (t[e + 2] = y), (t[e + 3] = g);
          },
          keySize: 8,
        }));
      t.AES = e._createHelper(i);
    })(),
    (function () {
      var t = bt,
        e = t.lib,
        n = e.WordArray,
        r = e.BlockCipher,
        i = t.algo,
        h = [
          57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51,
          43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7,
          62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20,
          12, 4,
        ],
        l = [
          14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16,
          7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44,
          49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32,
        ],
        f = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28],
        d = [
          {
            0: 8421888,
            268435456: 32768,
            536870912: 8421378,
            805306368: 2,
            1073741824: 512,
            1342177280: 8421890,
            1610612736: 8389122,
            1879048192: 8388608,
            2147483648: 514,
            2415919104: 8389120,
            2684354560: 33280,
            2952790016: 8421376,
            3221225472: 32770,
            3489660928: 8388610,
            3758096384: 0,
            4026531840: 33282,
            134217728: 0,
            402653184: 8421890,
            671088640: 33282,
            939524096: 32768,
            1207959552: 8421888,
            1476395008: 512,
            1744830464: 8421378,
            2013265920: 2,
            2281701376: 8389120,
            2550136832: 33280,
            2818572288: 8421376,
            3087007744: 8389122,
            3355443200: 8388610,
            3623878656: 32770,
            3892314112: 514,
            4160749568: 8388608,
            1: 32768,
            268435457: 2,
            536870913: 8421888,
            805306369: 8388608,
            1073741825: 8421378,
            1342177281: 33280,
            1610612737: 512,
            1879048193: 8389122,
            2147483649: 8421890,
            2415919105: 8421376,
            2684354561: 8388610,
            2952790017: 33282,
            3221225473: 514,
            3489660929: 8389120,
            3758096385: 32770,
            4026531841: 0,
            134217729: 8421890,
            402653185: 8421376,
            671088641: 8388608,
            939524097: 512,
            1207959553: 32768,
            1476395009: 8388610,
            1744830465: 2,
            2013265921: 33282,
            2281701377: 32770,
            2550136833: 8389122,
            2818572289: 514,
            3087007745: 8421888,
            3355443201: 8389120,
            3623878657: 0,
            3892314113: 33280,
            4160749569: 8421378,
          },
          {
            0: 1074282512,
            16777216: 16384,
            33554432: 524288,
            50331648: 1074266128,
            67108864: 1073741840,
            83886080: 1074282496,
            100663296: 1073758208,
            117440512: 16,
            134217728: 540672,
            150994944: 1073758224,
            167772160: 1073741824,
            184549376: 540688,
            201326592: 524304,
            218103808: 0,
            234881024: 16400,
            251658240: 1074266112,
            8388608: 1073758208,
            25165824: 540688,
            41943040: 16,
            58720256: 1073758224,
            75497472: 1074282512,
            92274688: 1073741824,
            109051904: 524288,
            125829120: 1074266128,
            142606336: 524304,
            159383552: 0,
            176160768: 16384,
            192937984: 1074266112,
            209715200: 1073741840,
            226492416: 540672,
            243269632: 1074282496,
            260046848: 16400,
            268435456: 0,
            285212672: 1074266128,
            301989888: 1073758224,
            318767104: 1074282496,
            335544320: 1074266112,
            352321536: 16,
            369098752: 540688,
            385875968: 16384,
            402653184: 16400,
            419430400: 524288,
            436207616: 524304,
            452984832: 1073741840,
            469762048: 540672,
            486539264: 1073758208,
            503316480: 1073741824,
            520093696: 1074282512,
            276824064: 540688,
            293601280: 524288,
            310378496: 1074266112,
            327155712: 16384,
            343932928: 1073758208,
            360710144: 1074282512,
            377487360: 16,
            394264576: 1073741824,
            411041792: 1074282496,
            427819008: 1073741840,
            444596224: 1073758224,
            461373440: 524304,
            478150656: 0,
            494927872: 16400,
            511705088: 1074266128,
            528482304: 540672,
          },
          {
            0: 260,
            1048576: 0,
            2097152: 67109120,
            3145728: 65796,
            4194304: 65540,
            5242880: 67108868,
            6291456: 67174660,
            7340032: 67174400,
            8388608: 67108864,
            9437184: 67174656,
            10485760: 65792,
            11534336: 67174404,
            12582912: 67109124,
            13631488: 65536,
            14680064: 4,
            15728640: 256,
            524288: 67174656,
            1572864: 67174404,
            2621440: 0,
            3670016: 67109120,
            4718592: 67108868,
            5767168: 65536,
            6815744: 65540,
            7864320: 260,
            8912896: 4,
            9961472: 256,
            11010048: 67174400,
            12058624: 65796,
            13107200: 65792,
            14155776: 67109124,
            15204352: 67174660,
            16252928: 67108864,
            16777216: 67174656,
            17825792: 65540,
            18874368: 65536,
            19922944: 67109120,
            20971520: 256,
            22020096: 67174660,
            23068672: 67108868,
            24117248: 0,
            25165824: 67109124,
            26214400: 67108864,
            27262976: 4,
            28311552: 65792,
            29360128: 67174400,
            30408704: 260,
            31457280: 65796,
            32505856: 67174404,
            17301504: 67108864,
            18350080: 260,
            19398656: 67174656,
            20447232: 0,
            21495808: 65540,
            22544384: 67109120,
            23592960: 256,
            24641536: 67174404,
            25690112: 65536,
            26738688: 67174660,
            27787264: 65796,
            28835840: 67108868,
            29884416: 67109124,
            30932992: 67174400,
            31981568: 4,
            33030144: 65792,
          },
          {
            0: 2151682048,
            65536: 2147487808,
            131072: 4198464,
            196608: 2151677952,
            262144: 0,
            327680: 4198400,
            393216: 2147483712,
            458752: 4194368,
            524288: 2147483648,
            589824: 4194304,
            655360: 64,
            720896: 2147487744,
            786432: 2151678016,
            851968: 4160,
            917504: 4096,
            983040: 2151682112,
            32768: 2147487808,
            98304: 64,
            163840: 2151678016,
            229376: 2147487744,
            294912: 4198400,
            360448: 2151682112,
            425984: 0,
            491520: 2151677952,
            557056: 4096,
            622592: 2151682048,
            688128: 4194304,
            753664: 4160,
            819200: 2147483648,
            884736: 4194368,
            950272: 4198464,
            1015808: 2147483712,
            1048576: 4194368,
            1114112: 4198400,
            1179648: 2147483712,
            1245184: 0,
            1310720: 4160,
            1376256: 2151678016,
            1441792: 2151682048,
            1507328: 2147487808,
            1572864: 2151682112,
            1638400: 2147483648,
            1703936: 2151677952,
            1769472: 4198464,
            1835008: 2147487744,
            1900544: 4194304,
            1966080: 64,
            2031616: 4096,
            1081344: 2151677952,
            1146880: 2151682112,
            1212416: 0,
            1277952: 4198400,
            1343488: 4194368,
            1409024: 2147483648,
            1474560: 2147487808,
            1540096: 64,
            1605632: 2147483712,
            1671168: 4096,
            1736704: 2147487744,
            1802240: 2151678016,
            1867776: 4160,
            1933312: 2151682048,
            1998848: 4194304,
            2064384: 4198464,
          },
          {
            0: 128,
            4096: 17039360,
            8192: 262144,
            12288: 536870912,
            16384: 537133184,
            20480: 16777344,
            24576: 553648256,
            28672: 262272,
            32768: 16777216,
            36864: 537133056,
            40960: 536871040,
            45056: 553910400,
            49152: 553910272,
            53248: 0,
            57344: 17039488,
            61440: 553648128,
            2048: 17039488,
            6144: 553648256,
            10240: 128,
            14336: 17039360,
            18432: 262144,
            22528: 537133184,
            26624: 553910272,
            30720: 536870912,
            34816: 537133056,
            38912: 0,
            43008: 553910400,
            47104: 16777344,
            51200: 536871040,
            55296: 553648128,
            59392: 16777216,
            63488: 262272,
            65536: 262144,
            69632: 128,
            73728: 536870912,
            77824: 553648256,
            81920: 16777344,
            86016: 553910272,
            90112: 537133184,
            94208: 16777216,
            98304: 553910400,
            102400: 553648128,
            106496: 17039360,
            110592: 537133056,
            114688: 262272,
            118784: 536871040,
            122880: 0,
            126976: 17039488,
            67584: 553648256,
            71680: 16777216,
            75776: 17039360,
            79872: 537133184,
            83968: 536870912,
            88064: 17039488,
            92160: 128,
            96256: 553910272,
            100352: 262272,
            104448: 553910400,
            108544: 0,
            112640: 553648128,
            116736: 16777344,
            120832: 262144,
            124928: 537133056,
            129024: 536871040,
          },
          {
            0: 268435464,
            256: 8192,
            512: 270532608,
            768: 270540808,
            1024: 268443648,
            1280: 2097152,
            1536: 2097160,
            1792: 268435456,
            2048: 0,
            2304: 268443656,
            2560: 2105344,
            2816: 8,
            3072: 270532616,
            3328: 2105352,
            3584: 8200,
            3840: 270540800,
            128: 270532608,
            384: 270540808,
            640: 8,
            896: 2097152,
            1152: 2105352,
            1408: 268435464,
            1664: 268443648,
            1920: 8200,
            2176: 2097160,
            2432: 8192,
            2688: 268443656,
            2944: 270532616,
            3200: 0,
            3456: 270540800,
            3712: 2105344,
            3968: 268435456,
            4096: 268443648,
            4352: 270532616,
            4608: 270540808,
            4864: 8200,
            5120: 2097152,
            5376: 268435456,
            5632: 268435464,
            5888: 2105344,
            6144: 2105352,
            6400: 0,
            6656: 8,
            6912: 270532608,
            7168: 8192,
            7424: 268443656,
            7680: 270540800,
            7936: 2097160,
            4224: 8,
            4480: 2105344,
            4736: 2097152,
            4992: 268435464,
            5248: 268443648,
            5504: 8200,
            5760: 270540808,
            6016: 270532608,
            6272: 270540800,
            6528: 270532616,
            6784: 8192,
            7040: 2105352,
            7296: 2097160,
            7552: 0,
            7808: 268435456,
            8064: 268443656,
          },
          {
            0: 1048576,
            16: 33555457,
            32: 1024,
            48: 1049601,
            64: 34604033,
            80: 0,
            96: 1,
            112: 34603009,
            128: 33555456,
            144: 1048577,
            160: 33554433,
            176: 34604032,
            192: 34603008,
            208: 1025,
            224: 1049600,
            240: 33554432,
            8: 34603009,
            24: 0,
            40: 33555457,
            56: 34604032,
            72: 1048576,
            88: 33554433,
            104: 33554432,
            120: 1025,
            136: 1049601,
            152: 33555456,
            168: 34603008,
            184: 1048577,
            200: 1024,
            216: 34604033,
            232: 1,
            248: 1049600,
            256: 33554432,
            272: 1048576,
            288: 33555457,
            304: 34603009,
            320: 1048577,
            336: 33555456,
            352: 34604032,
            368: 1049601,
            384: 1025,
            400: 34604033,
            416: 1049600,
            432: 1,
            448: 0,
            464: 34603008,
            480: 33554433,
            496: 1024,
            264: 1049600,
            280: 33555457,
            296: 34603009,
            312: 1,
            328: 33554432,
            344: 1048576,
            360: 1025,
            376: 34604032,
            392: 33554433,
            408: 34603008,
            424: 0,
            440: 34604033,
            456: 1049601,
            472: 1024,
            488: 33555456,
            504: 1048577,
          },
          {
            0: 134219808,
            1: 131072,
            2: 134217728,
            3: 32,
            4: 131104,
            5: 134350880,
            6: 134350848,
            7: 2048,
            8: 134348800,
            9: 134219776,
            10: 133120,
            11: 134348832,
            12: 2080,
            13: 0,
            14: 134217760,
            15: 133152,
            2147483648: 2048,
            2147483649: 134350880,
            2147483650: 134219808,
            2147483651: 134217728,
            2147483652: 134348800,
            2147483653: 133120,
            2147483654: 133152,
            2147483655: 32,
            2147483656: 134217760,
            2147483657: 2080,
            2147483658: 131104,
            2147483659: 134350848,
            2147483660: 0,
            2147483661: 134348832,
            2147483662: 134219776,
            2147483663: 131072,
            16: 133152,
            17: 134350848,
            18: 32,
            19: 2048,
            20: 134219776,
            21: 134217760,
            22: 134348832,
            23: 131072,
            24: 0,
            25: 131104,
            26: 134348800,
            27: 134219808,
            28: 134350880,
            29: 133120,
            30: 2080,
            31: 134217728,
            2147483664: 131072,
            2147483665: 2048,
            2147483666: 134348832,
            2147483667: 133152,
            2147483668: 32,
            2147483669: 134348800,
            2147483670: 134217728,
            2147483671: 134219808,
            2147483672: 134350880,
            2147483673: 134217760,
            2147483674: 134219776,
            2147483675: 0,
            2147483676: 133120,
            2147483677: 2080,
            2147483678: 131104,
            2147483679: 134350848,
          },
        ],
        u = [
          4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504,
          2147483679,
        ],
        o = (i.DES = r.extend({
          _doReset: function () {
            for (var t = this._key.words, e = [], r = 0; r < 56; r++) {
              var i = h[r] - 1;
              e[r] = (t[i >>> 5] >>> (31 - (i % 32))) & 1;
            }
            for (var n = (this._subKeys = []), o = 0; o < 16; o++) {
              var s = (n[o] = []),
                c = f[o];
              for (r = 0; r < 24; r++)
                (s[(r / 6) | 0] |= e[(l[r] - 1 + c) % 28] << (31 - (r % 6))),
                  (s[4 + ((r / 6) | 0)] |=
                    e[28 + ((l[r + 24] - 1 + c) % 28)] << (31 - (r % 6)));
              s[0] = (s[0] << 1) | (s[0] >>> 31);
              for (r = 1; r < 7; r++) s[r] = s[r] >>> (4 * (r - 1) + 3);
              s[7] = (s[7] << 5) | (s[7] >>> 27);
            }
            var a = (this._invSubKeys = []);
            for (r = 0; r < 16; r++) a[r] = n[15 - r];
          },
          encryptBlock: function (t, e) {
            this._doCryptBlock(t, e, this._subKeys);
          },
          decryptBlock: function (t, e) {
            this._doCryptBlock(t, e, this._invSubKeys);
          },
          _doCryptBlock: function (t, e, r) {
            (this._lBlock = t[e]),
              (this._rBlock = t[e + 1]),
              p.call(this, 4, 252645135),
              p.call(this, 16, 65535),
              _.call(this, 2, 858993459),
              _.call(this, 8, 16711935),
              p.call(this, 1, 1431655765);
            for (var i = 0; i < 16; i++) {
              for (
                var n = r[i], o = this._lBlock, s = this._rBlock, c = 0, a = 0;
                a < 8;
                a++
              )
                c |= d[a][((s ^ n[a]) & u[a]) >>> 0];
              (this._lBlock = s), (this._rBlock = o ^ c);
            }
            var h = this._lBlock;
            (this._lBlock = this._rBlock),
              (this._rBlock = h),
              p.call(this, 1, 1431655765),
              _.call(this, 8, 16711935),
              _.call(this, 2, 858993459),
              p.call(this, 16, 65535),
              p.call(this, 4, 252645135),
              (t[e] = this._lBlock),
              (t[e + 1] = this._rBlock);
          },
          keySize: 2,
          ivSize: 2,
          blockSize: 2,
        }));
      function p(t, e) {
        var r = ((this._lBlock >>> t) ^ this._rBlock) & e;
        (this._rBlock ^= r), (this._lBlock ^= r << t);
      }
      function _(t, e) {
        var r = ((this._rBlock >>> t) ^ this._lBlock) & e;
        (this._lBlock ^= r), (this._rBlock ^= r << t);
      }
      t.DES = r._createHelper(o);
      var s = (i.TripleDES = r.extend({
        _doReset: function () {
          var t = this._key.words;
          if (2 !== t.length && 4 !== t.length && t.length < 6)
            throw new Error(
              "Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192."
            );
          var e = t.slice(0, 2),
            r = t.length < 4 ? t.slice(0, 2) : t.slice(2, 4),
            i = t.length < 6 ? t.slice(0, 2) : t.slice(4, 6);
          (this._des1 = o.createEncryptor(n.create(e))),
            (this._des2 = o.createEncryptor(n.create(r))),
            (this._des3 = o.createEncryptor(n.create(i)));
        },
        encryptBlock: function (t, e) {
          this._des1.encryptBlock(t, e),
            this._des2.decryptBlock(t, e),
            this._des3.encryptBlock(t, e);
        },
        decryptBlock: function (t, e) {
          this._des3.decryptBlock(t, e),
            this._des2.encryptBlock(t, e),
            this._des1.decryptBlock(t, e);
        },
        keySize: 6,
        ivSize: 2,
        blockSize: 2,
      }));
      t.TripleDES = r._createHelper(s);
    })(),
    (function () {
      var t = bt,
        e = t.lib.StreamCipher,
        r = t.algo,
        i = (r.RC4 = e.extend({
          _doReset: function () {
            for (
              var t = this._key,
                e = t.words,
                r = t.sigBytes,
                i = (this._S = []),
                n = 0;
              n < 256;
              n++
            )
              i[n] = n;
            n = 0;
            for (var o = 0; n < 256; n++) {
              var s = n % r,
                c = (e[s >>> 2] >>> (24 - (s % 4) * 8)) & 255;
              o = (o + i[n] + c) % 256;
              var a = i[n];
              (i[n] = i[o]), (i[o] = a);
            }
            this._i = this._j = 0;
          },
          _doProcessBlock: function (t, e) {
            t[e] ^= n.call(this);
          },
          keySize: 8,
          ivSize: 0,
        }));
      function n() {
        for (
          var t = this._S, e = this._i, r = this._j, i = 0, n = 0;
          n < 4;
          n++
        ) {
          r = (r + t[(e = (e + 1) % 256)]) % 256;
          var o = t[e];
          (t[e] = t[r]),
            (t[r] = o),
            (i |= t[(t[e] + t[r]) % 256] << (24 - 8 * n));
        }
        return (this._i = e), (this._j = r), i;
      }
      t.RC4 = e._createHelper(i);
      var o = (r.RC4Drop = i.extend({
        cfg: i.cfg.extend({ drop: 192 }),
        _doReset: function () {
          i._doReset.call(this);
          for (var t = this.cfg.drop; 0 < t; t--) n.call(this);
        },
      }));
      t.RC4Drop = e._createHelper(o);
    })(),
    (bt.mode.CTRGladman =
      ((ot = bt.lib.BlockCipherMode.extend()),
      (st = ot.Encryptor =
        ot.extend({
          processBlock: function (t, e) {
            var r,
              i = this._cipher,
              n = i.blockSize,
              o = this._iv,
              s = this._counter;
            o && ((s = this._counter = o.slice(0)), (this._iv = void 0)),
              0 === ((r = s)[0] = Et(r[0])) && (r[1] = Et(r[1]));
            var c = s.slice(0);
            i.encryptBlock(c, 0);
            for (var a = 0; a < n; a++) t[e + a] ^= c[a];
          },
        })),
      (ot.Decryptor = st),
      ot)),
    (at = (ct = bt).lib.StreamCipher),
    (ht = ct.algo),
    (lt = []),
    (ft = []),
    (dt = []),
    (ut = ht.Rabbit =
      at.extend({
        _doReset: function () {
          for (var t = this._key.words, e = this.cfg.iv, r = 0; r < 4; r++)
            t[r] =
              (16711935 & ((t[r] << 8) | (t[r] >>> 24))) |
              (4278255360 & ((t[r] << 24) | (t[r] >>> 8)));
          var i = (this._X = [
              t[0],
              (t[3] << 16) | (t[2] >>> 16),
              t[1],
              (t[0] << 16) | (t[3] >>> 16),
              t[2],
              (t[1] << 16) | (t[0] >>> 16),
              t[3],
              (t[2] << 16) | (t[1] >>> 16),
            ]),
            n = (this._C = [
              (t[2] << 16) | (t[2] >>> 16),
              (4294901760 & t[0]) | (65535 & t[1]),
              (t[3] << 16) | (t[3] >>> 16),
              (4294901760 & t[1]) | (65535 & t[2]),
              (t[0] << 16) | (t[0] >>> 16),
              (4294901760 & t[2]) | (65535 & t[3]),
              (t[1] << 16) | (t[1] >>> 16),
              (4294901760 & t[3]) | (65535 & t[0]),
            ]);
          for (r = this._b = 0; r < 4; r++) Rt.call(this);
          for (r = 0; r < 8; r++) n[r] ^= i[(r + 4) & 7];
          if (e) {
            var o = e.words,
              s = o[0],
              c = o[1],
              a =
                (16711935 & ((s << 8) | (s >>> 24))) |
                (4278255360 & ((s << 24) | (s >>> 8))),
              h =
                (16711935 & ((c << 8) | (c >>> 24))) |
                (4278255360 & ((c << 24) | (c >>> 8))),
              l = (a >>> 16) | (4294901760 & h),
              f = (h << 16) | (65535 & a);
            (n[0] ^= a),
              (n[1] ^= l),
              (n[2] ^= h),
              (n[3] ^= f),
              (n[4] ^= a),
              (n[5] ^= l),
              (n[6] ^= h),
              (n[7] ^= f);
            for (r = 0; r < 4; r++) Rt.call(this);
          }
        },
        _doProcessBlock: function (t, e) {
          var r = this._X;
          Rt.call(this),
            (lt[0] = r[0] ^ (r[5] >>> 16) ^ (r[3] << 16)),
            (lt[1] = r[2] ^ (r[7] >>> 16) ^ (r[5] << 16)),
            (lt[2] = r[4] ^ (r[1] >>> 16) ^ (r[7] << 16)),
            (lt[3] = r[6] ^ (r[3] >>> 16) ^ (r[1] << 16));
          for (var i = 0; i < 4; i++)
            (lt[i] =
              (16711935 & ((lt[i] << 8) | (lt[i] >>> 24))) |
              (4278255360 & ((lt[i] << 24) | (lt[i] >>> 8)))),
              (t[e + i] ^= lt[i]);
        },
        blockSize: 4,
        ivSize: 2,
      })),
    (ct.Rabbit = at._createHelper(ut)),
    (bt.mode.CTR =
      ((pt = bt.lib.BlockCipherMode.extend()),
      (_t = pt.Encryptor =
        pt.extend({
          processBlock: function (t, e) {
            var r = this._cipher,
              i = r.blockSize,
              n = this._iv,
              o = this._counter;
            n && ((o = this._counter = n.slice(0)), (this._iv = void 0));
            var s = o.slice(0);
            r.encryptBlock(s, 0), (o[i - 1] = (o[i - 1] + 1) | 0);
            for (var c = 0; c < i; c++) t[e + c] ^= s[c];
          },
        })),
      (pt.Decryptor = _t),
      pt)),
    (yt = (vt = bt).lib.StreamCipher),
    (gt = vt.algo),
    (Bt = []),
    (wt = []),
    (kt = []),
    (St = gt.RabbitLegacy =
      yt.extend({
        _doReset: function () {
          for (
            var t = this._key.words,
              e = this.cfg.iv,
              r = (this._X = [
                t[0],
                (t[3] << 16) | (t[2] >>> 16),
                t[1],
                (t[0] << 16) | (t[3] >>> 16),
                t[2],
                (t[1] << 16) | (t[0] >>> 16),
                t[3],
                (t[2] << 16) | (t[1] >>> 16),
              ]),
              i = (this._C = [
                (t[2] << 16) | (t[2] >>> 16),
                (4294901760 & t[0]) | (65535 & t[1]),
                (t[3] << 16) | (t[3] >>> 16),
                (4294901760 & t[1]) | (65535 & t[2]),
                (t[0] << 16) | (t[0] >>> 16),
                (4294901760 & t[2]) | (65535 & t[3]),
                (t[1] << 16) | (t[1] >>> 16),
                (4294901760 & t[3]) | (65535 & t[0]),
              ]),
              n = (this._b = 0);
            n < 4;
            n++
          )
            Mt.call(this);
          for (n = 0; n < 8; n++) i[n] ^= r[(n + 4) & 7];
          if (e) {
            var o = e.words,
              s = o[0],
              c = o[1],
              a =
                (16711935 & ((s << 8) | (s >>> 24))) |
                (4278255360 & ((s << 24) | (s >>> 8))),
              h =
                (16711935 & ((c << 8) | (c >>> 24))) |
                (4278255360 & ((c << 24) | (c >>> 8))),
              l = (a >>> 16) | (4294901760 & h),
              f = (h << 16) | (65535 & a);
            (i[0] ^= a),
              (i[1] ^= l),
              (i[2] ^= h),
              (i[3] ^= f),
              (i[4] ^= a),
              (i[5] ^= l),
              (i[6] ^= h),
              (i[7] ^= f);
            for (n = 0; n < 4; n++) Mt.call(this);
          }
        },
        _doProcessBlock: function (t, e) {
          var r = this._X;
          Mt.call(this),
            (Bt[0] = r[0] ^ (r[5] >>> 16) ^ (r[3] << 16)),
            (Bt[1] = r[2] ^ (r[7] >>> 16) ^ (r[5] << 16)),
            (Bt[2] = r[4] ^ (r[1] >>> 16) ^ (r[7] << 16)),
            (Bt[3] = r[6] ^ (r[3] >>> 16) ^ (r[1] << 16));
          for (var i = 0; i < 4; i++)
            (Bt[i] =
              (16711935 & ((Bt[i] << 8) | (Bt[i] >>> 24))) |
              (4278255360 & ((Bt[i] << 24) | (Bt[i] >>> 8)))),
              (t[e + i] ^= Bt[i]);
        },
        blockSize: 4,
        ivSize: 2,
      })),
    (vt.RabbitLegacy = yt._createHelper(St)),
    (bt.pad.ZeroPadding = {
      pad: function (t, e) {
        var r = 4 * e;
        t.clamp(), (t.sigBytes += r - (t.sigBytes % r || r));
      },
      unpad: function (t) {
        var e = t.words,
          r = t.sigBytes - 1;
        for (r = t.sigBytes - 1; 0 <= r; r--)
          if ((e[r >>> 2] >>> (24 - (r % 4) * 8)) & 255) {
            t.sigBytes = r + 1;
            break;
          }
      },
    }),
    bt
  );
});
;
var _isMobile = isMobile();
// 判断设备类型
function detectOS() {
  var os;
  var u = navigator.userAgent;

  var isWin = navigator.platform == "Win32" || navigator.platform == "Windows";
  console.log("navigator.platform :>> ", navigator.platform);
  var isMac =
    navigator.platform == "Mac68K" ||
    navigator.platform == "MacPPC" ||
    navigator.platform == "Macintosh" ||
    navigator.platform == "MacIntel";
  var isUnix = navigator.platform == "X11" && !isWin && !isMac;

  var bIsIphoneOs = u.indexOf("iPhone") > -1;
  console.log("bIsIphoneOs :>> ", bIsIphoneOs);
  var isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1; //android终端
  var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

  var isWechatBrowser = u.toLowerCase().includes("micromessenger"); //判断是否微信浏览器

  var isFireFox = /(?:Firefox)/.test(u);

  // 是否PAD android-pad
  var isTablet =
    /(?:iPad|PlayBook)/.test(u) ||
    (isAndroid && !/(?:Mobile)/.test(u)) ||
    (isFireFox && /(?:Tablet)/.test(u));

  // var isIpad = /(?:iPad|PlayBook)/.test(u);
  var isIpad = /iPad|Macintosh/.test(u) && "ontouchend" in document;
  var isAndroidPad = isAndroid && !/(?:Mobile)/.test(u);

  if (isMac) {
    os = "mac";
  } else if (isWin) os = "win";
  else if (isUnix) os = "unix";

  if (isAndroid) os = "android";
  if (isiOS) os = "ios";
  if (isAndroidPad) os = "android-pad";
  if (isIpad) os = "ipad";
  if (isWechatBrowser) os = "wechat";

  console.log("os :>> ", os);

  var fromWechat = getQueryStringRegExp("fromWechat");
  if (!!fromWechat) {
    if (location.href.indexOf("download/smartrooms") != -1) {
      return false;
    } else {
      var downloadUrl = $(".meeting-box-btn:visible")
        .find("a.download-btn")
        .attr("href");
      window.location.href = downloadUrl;
    }
  }
  return os;
}
function setCookie(name, value) {
  var Days = 30;
  var exp = new Date();
  exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
  document.cookie =
    name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}
function getCookie(name) {
  var arr,
    reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if ((arr = document.cookie.match(reg))) return unescape(arr[2]);
  else return null;
}
function delCookie(name) {
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var cval = getCookie(name);
  if (cval != null)
    document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}

function throttle(fn, delay) {
  let time = null;
  return function () {
    if (time) {
      return;
    }
    time = setTimeout(fn, delay);
  };
}
function generateRandomString(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;
}
!(function (win, doc) {
  function change() {
    var _width = doc.documentElement.clientWidth;
    var pa = _width >= 1024 ? 19.2 : 7.5;
    doc.documentElement.style.fontSize = _width / pa + "px";
  }
  change();
  win.addEventListener("resize", throttle(change, 300), false);
})(window, document);

(function ($) {
  var beforeScrollTop = $(window).scrollTop();
  var wh = $(window).height();

  var isWx = /(MicroMessenger)/i.test(navigator.userAgent);

  $("[data-mdownload]").click(function (event) {
    console.log("event :>> ", event);
    event.preventDefault();

    if (isWx && _isMobile) {
      var url = $(this).data("mdownload");
      location.href = url;
    } else {
      var url = $(this).attr("href");
      location.href = url;
    }
  });

  if (location.href.indexOf("download/meeting") != -1 && isWx && _isMobile) {
    location.href = "/register2023/ecommerceBuy/#/download";
  }

  var os = detectOS();

  $(".download-banner")
    .find("." + os)
    .show();

  if (isWx && _isMobile) {
    $(".wechat_box").show();
  }

  //平滑显示弹出框
  function showDialog(id) {
    $("#layer").fadeIn(300);
    $("#" + id)
      .show()
      .addClass("slideDown");
  }
  //平滑隐藏弹出框
  function hideDialog(id) {
    $("#layer").fadeOut(300);
    $("#" + id)
      .removeClass("slideDown")
      .addClass("slideUp");
    setTimeout(function () {
      $("#" + id)
        .hide()
        .stop(true, true)
        .removeClass("slideUp");
    }, 501);
  }

  function initScrollDom() {
    var scrollTop = $(window).scrollTop();
    var j = 0;
    $(".scroll-top").each(function () {
      var tt = $(this).offset().top;
      if (tt - 100 <= wh + scrollTop) {
        if ($(this).hasClass("items-center")) {
          $(this)
            .addClass("current")
            .css({
              "transition-delay": j * 0.05 + "s",
            });
          j++;
        } else {
          $(this).addClass("current");
        }
      }
    });
  }

  function initScrollSwiperContainer() {
    var scrollTop = $(window).scrollTop();
    $(".slide-wrapper").each(function () {
      if (!$(this).find(".swiper-container").hasClass("disabled")) {
        var tt = $(this).offset().top;
        let container = $(this).find(".swiper-container").attr("id");
        let slideNav = $(this).find(".slide-nav").attr("id");
        if (tt - 100 <= wh + scrollTop && !$(this).attr("hasInit")) {
          let slideContainer = initContainerWithSlideNav(container, slideNav);
          slideNavWithContainer(slideNav, slideContainer);
          $(this).attr("hasInit", true);
        }
      }
    });
  }

  function initScrollWidth() {
    var ww = $(window).width();
    $(".scroll-container").each(function () {
      var tw = $(this).outerWidth();
      $(this).width(tw + (ww - tw) / 2);
    });
  }

  var hasPlay = false;

  function initVideoPlay() {
    var scrollTop = $(window).scrollTop();
    $(".box video").each(function (index) {
      var id = $(this).attr("id");

      var tt = $(this).offset().top;

      if (!$(this).parent().hasClass("swiper-slide")) {
        console.log("offsetTop :>> ", $(this).offset().top);
        console.log("wh/2 + scrollTop :>> ", wh / 2 + scrollTop);
        if (tt <= wh / 2 + scrollTop && tt + (3 * wh) / 2 > scrollTop) {
          if (id === "room_p1") {
            if (!hasPlay) {
              document.getElementById("room_p1").play();
              hasPlay = true;
            }
          } else {
            document.getElementById(id).play();
          }
        }
      }
    });
  }

  var priceTop =
    $(".price-header").length > 0 ? $(".price-header").offset().top : 0;
  var headerHeight = $(".header").outerHeight();

  function fixPriceBar() {
    if (priceTop <= beforeScrollTop + headerHeight) {
      $(".price-wrapper2").addClass("fixed");
    } else {
      $(".price-wrapper2").removeClass("fixed");
    }
  }

  $(window).scroll(function (event) {
    // event.preventDefault();
    var afterScrollTop = $(this).scrollTop();
    var delta = afterScrollTop - beforeScrollTop;
    beforeScrollTop = afterScrollTop;

    var nodeHelpTop = $(".node-help").length ? $(".node-help").offset().top : 0;
    var hh = $(".header").outerHeight();
    var bh = $(".breadcrumb").outerHeight();
    // console.log(delta);
    if (delta <= 0) {
      $("body").removeClass("hideHeader");

      //滚动条上滚
      if ($(".price-wrapper2").length) {
        if (priceTop > beforeScrollTop + headerHeight) {
          $(".price-wrapper2").removeClass("fixed");
        }
      }
      if ($(".node-nav").length) {
        if (nodeHelpTop > beforeScrollTop + headerHeight) {
          $(".node-nav").removeClass("fixed");
        }
      }

      // $(".scroll-top").each(function () {
      //   var tt = $(this).offset().top;
      //   // console.log(tt + ":" + (wh + scrollTop))
      //   if (tt > afterScrollTop + (3 * wh) / 4) {
      //     $(this).removeClass("current");
      //   }
      // });

      $(".node-help h3").each(function (index) {
        var tt = $(this).offset().top;
        if (tt - hh - bh <= wh + beforeScrollTop && tt > beforeScrollTop) {
          $(".node-nav li")
            .eq(index)
            .addClass("active")
            .siblings()
            .removeClass("active");
        }
      });
    } else {
      if (!$("body").hasClass("hideHeader") && afterScrollTop > 80) {
        $("body").addClass("hideHeader");
      }
      initScrollDom();
      initScrollSwiperContainer();
      if (!_isMobile) {
        initVideoPlay();
      }
      if ($(".price-wrapper2").length) {
        if (priceTop <= beforeScrollTop + headerHeight) {
          $(".price-wrapper2").addClass("fixed");
        }
      }
      if ($(".node-nav").length) {
        var navWidth = $(".node-nav").outerWidth();
        if (nodeHelpTop <= beforeScrollTop + headerHeight) {
          $(".node-nav")
            .css("width", navWidth + "px")
            .addClass("fixed");
        }
      }
      $(".node-help h3").each(function (index) {
        var tt = $(this).offset().top;
        if (tt - hh - bh <= wh + beforeScrollTop) {
          $(".node-nav li")
            .eq(index)
            .addClass("active")
            .siblings()
            .removeClass("active");
        }
      });
    }

    if (afterScrollTop > wh / 2) {
      $(".back-top").css("display", "block");
    } else {
      $(".back-top").css("display", "none");
    }
  });

  $(".back-top").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      200
    );
  });

  function hasMenu(m) {
    return location.pathname.indexOf(m) != -1 ? true : false;
  }
  function toId(id) {
    var headerH = $(".header").outerHeight() || 0;
    // alert(headerH+":"+navH)
    var idH = $("#" + id).offset().top - headerH;
    $("html, body").animate(
      {
        scrollTop: idH,
      },
      200
    );
  }
  function getLocationFirstPath() {
    var pathName = location.pathname;
    var index = pathName.indexOf("/", 1);
    return index == -1 ? pathName.substring(1) : pathName.substring(1, index);
  }
  function getLocationLastPath() {
    var pathName = location.pathname;

    var index = pathName.lastIndexOf("/");
    return index == -1 ? pathName.substring(1) : pathName.substring(index + 1);
  }

  function initDataSrcImg() {
    $("[data-src]").each(function () {
      // console.log($(this).data("src"));
      if ($(this).data("src")) {
        $(this).css({
          "background-image": "url(" + $(this).data("src") + ")",
        });
      }
    });
  }

  function initContainerWithSlideNav(container, nav) {
    return new Swiper("#" + container, {
      watchOverflow: true,
      speed: 1000,
      // loop: false,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        stopOnLastSlide: true,
        // pauseOnMouseEnter: true,
      },

      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      on: {
        // init: function () {
        //   if (!_isMobile) {
        //     if (
        //       $("#" + container + " .swiper-slide")
        //         .eq(0)
        //         .find("video").length > 0
        //     ) {
        //       let videoId = $("#" + container + " .swiper-slide")
        //         .eq(0)
        //         .find("video")
        //         .attr("id");
        //       if (videoId) {
        //         document.getElementById(videoId).play();
        //       }
        //     }
        //   }
        // },
        slideChangeTransitionStart: function () {
          var activeIndex = this.activeIndex;
          console.log("activeIndex :>> ", activeIndex);
          $("#" + nav)
            .find(".slide-nav-item")
            .eq(activeIndex)
            .addClass("active")
            .siblings(".slide-nav-item")
            .removeClass("active");
          if (!_isMobile) {
            $("#" + container + " .swiper-slide").each(function (index) {
              if ($(this).find("video").length) {
                var thisVideoId = $(this).find("video").attr("id");
                if (index === activeIndex) {
                  document.getElementById(thisVideoId).play();
                }
              }
            });
          }
        },
        slideChangeTransitionEnd: function () {
          if (!_isMobile) {
            var prevIndex = this.previousIndex;
            var prevVideoId = $("#" + container + " .swiper-slide")
              .eq(prevIndex)
              .find("video")
              .attr("id");
            console.log("prevVideoId :>> ", prevVideoId);
            if (prevVideoId != undefined) {
              document.getElementById(prevVideoId).pause();
            }
          }
        },
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });
  }

  function slideNavWithContainer(nav, container) {
    if ($("#" + nav).hasClass("disabled")) {
      return false;
    } else {
      $("#" + nav + " .slide-nav-item").hover(
        function () {
          var i = $(this).index();
          $(this).addClass("active").siblings().removeClass("active");
          container.slideTo(i);
          // container.autoplay.stop();
        },
        function () {
          // if ($("#" + nav + " .slide-nav-item").length > 1) {
          //   container.autoplay.start();
          // } else {
          //   return false;
          // }
        }
      );
    }
  }

  function submitHelpSearch() {
    var keyword = $("#helpSearch .form-search").val();
    var typeValue = $("#helpSearch .search-form-select span").data("value");

    if (typeValue === "All") {
      if ($.trim(keyword) == "") {
        $("#helpSearch .form-search").focus();
        return false;
      }
    }

    if (keyword.indexOf("<") != -1 || keyword.indexOf("script") != -1) {
      $("#helpSearch .form-search").select();
      return false;
    }
    location.href =
      "/search/support?keyword=" + keyword + "&field_tag=" + typeValue;
  }
  function submitVideoSearch() {
    var keyword = $("#videoSearch .form-search").val();
    var typeValue = $("#videoSearch .search-form-select span").data("value");

    if (typeValue === "All") {
      if ($.trim(keyword) == "") {
        $("#videoSearch .form-search").focus();
        return false;
      }
    }

    if (keyword.indexOf("<") != -1 || keyword.indexOf("script") != -1) {
      $("#videoSearch .form-search").select();
      return false;
    }
    location.href =
      "/search/video?keyword=" + keyword + "&field_tag=" + typeValue;
  }
  function submitJobSearch() {
    var keyword = $("#jobSearch .form-search").val();

    if (keyword.indexOf("<") != -1 || keyword.indexOf("script") != -1) {
      $("#jobSearch .form-search").select();
      return false;
    } else if ($.trim(keyword) == "") {
      $(".search-result").removeClass("show");
      $(".content-wrapper").show();
    } else {
      $.ajax({
        url: "/json/job?keyword=" + keyword,
        dataType: "json",
        success: function (response) {
          console.log(response);
          var result = "";
          if (response && response.length > 0) {
            for (var i = 0; i < response.length; i++) {
              result +=
                '<div class="job-list"><h2>' +
                response[i].title +
                "</h2>" +
                "<h3> " +
                response[i].field_city +
                " ｜ " +
                response[i].field_partment +
                "</h3>" +
                '<div class="job-summary">' +
                response[i].body +
                "</div></div>";
            }
            if ($(".search-result").length) {
              if ($(".search-result").hasClass("show")) {
                $(".search-result .search-wrapper").html(result);
              } else {
                $(".search-result")
                  .addClass("show")
                  .find(".search-wrapper")
                  .html(result);
                $(".content-wrapper").hide();
              }
            }
          } else {
            $(".search-result")
              .addClass("show")
              .find(".search-wrapper")
              .html('<p class="no-val">没有搜索到相关招聘信息</p>');
            $(".content-wrapper").hide();
          }
        },
      });
    }
  }

  function closeVideo() {
    if ($(".video-wrapper").length) {
      $(".video-wrapper").remove();
    }
  }

  function showVideoWithUrl(url) {
    $("body").append(
      '<div class="video-wrapper">' +
        '<a href="javascript:;" class="close">&times;</a>' +
        '<video src="' +
        url +
        '" id="popVideo"></video>' +
        "</div>"
    );

    document.getElementById("popVideo").play();
    $(".video-wrapper a.close").click(function () {
      closeVideo();
    });
  }

  // 获取图片验证码
  function getCheckImgCode() {
    $.ajax({
      url: "/common/image/code",
      dataType: "json",
      type: "GET",
      success: function (response) {
        var res = response;
        // console.log(res);
        if (res.code == 0) {
          $(".img-code").attr(
            "src",
            "data:image/png;base64," + res.data.verifyCodeImage
          );
          $("#verifyCodeToken").val(res.data.verifyCodeToken);
        }
      },
    });
  }

  function initSearchValue() {
    var keyword = getQueryStringRegExp("keyword");
    var field_tag = getQueryStringRegExp("field_tag");

    if (field_tag !== "") {
      var txt = $(
        ".search-form-select li[data-value=" + field_tag + "]"
      ).text();
      $(".search-form-select")
        .find("span")
        .text(txt)
        .attr("data-value", field_tag);
      $(".search-form-select li[data-value=" + field_tag + "]")
        .addClass("selected")
        .siblings()
        .removeClass("selected");
    }

    if (keyword !== "") {
      $(".form-search").val(keyword);
    }
  }

  $.fn.textSearch = function (str, options) {
    var defaults = {
      divFlag: true,
      divStr: " ",
      markClass: "search-blue",
      markColor: "red",
      nullReport: true,
      callback: function () {
        return false;
      },
    };
    var sets = $.extend({}, defaults, options || {}),
      clStr;
    if (sets.markClass) {
      clStr = "class='" + sets.markClass + "'";
    } else {
      clStr = "style='color:" + sets.markColor + ";'";
    }

    //对前一次高亮处理的文字还原
    $("span[rel='mark']")
      .removeAttr("class")
      .removeAttr("style")
      .removeAttr("rel");

    //字符串正则表达式关键字转化
    $.regTrim = function (s) {
      var imp = /[\^\.\\\|\(\)\*\+\-\$\[\]\?]/g;
      var imp_c = {};
      imp_c["^"] = "\\^";
      imp_c["."] = "\\.";
      imp_c["\\"] = "\\\\";
      imp_c["|"] = "\\|";
      imp_c["("] = "\\(";
      imp_c[")"] = "\\)";
      imp_c["*"] = "\\*";
      imp_c["+"] = "\\+";
      imp_c["-"] = "\\-";
      imp_c["$"] = "$";
      imp_c["["] = "\\[";
      imp_c["]"] = "\\]";
      imp_c["?"] = "\\?";
      s = s.replace(imp, function (o) {
        return imp_c[o];
      });
      return s;
    };
    $(this).each(function () {
      var t = $(this);
      str = $.trim(str);
      if (str === "") {
        alert("关键字为空");
        return false;
      } else {
        //将关键字push到数组之中
        var arr = [];
        if (sets.divFlag) {
          arr = str.split(sets.divStr);
        } else {
          arr.push(str);
        }
      }
      var v_html = t.html();
      //删除注释
      v_html = v_html.replace(/<!--(?:.*)\-->/g, "");

      //将HTML代码支离为HTML片段和文字片段，其中文字片段用于正则替换处理，而HTML片段置之不理
      var tags = /[^<>]+|<(\/?)([A-Za-z]+)([^<>]*)>/g;
      var a = v_html.match(tags),
        test = 0;
      $.each(a, function (i, c) {
        if (!/<(?:.|\s)*?>/.test(c)) {
          //非标签
          //开始执行替换
          $.each(arr, function (index, con) {
            if (con === "") {
              return;
            }
            var reg = new RegExp($.regTrim(con), "g");
            if (reg.test(c)) {
              //正则替换
              c = c.replace(reg, "♂" + con + "♀");
              test = 1;
            }
          });
          c = c
            .replace(/♂/g, "<span rel='mark' " + clStr + ">")
            .replace(/♀/g, "</span>");
          a[i] = c;
        }
      });
      //将支离数组重新组成字符串
      var new_html = a.join("");

      $(this).html(new_html);

      if (test === 0 && sets.nullReport) {
        alert("没有搜索结果");
        return false;
      }

      //执行回调函数
      sets.callback();
    });
  };

  function initSearchResultFormat(keyword) {
    // var _html = $(".view-search-help").html();
    // var reg = new RegExp(keyword, "g");
    // var newHtml = _html.replace(
    //   reg,
    //   '<span class="search-blue">' + keyword + "</span>"
    // );
    // $(".view-search-help").html(newHtml);

    $(".view-search-help").textSearch(keyword);
  }

  function initSlideNav() {
    var slideNav = "";
    var lis = "";
    var nt = $(".node-help").offset().top;
    $(".node-help h3").each(function (index, item) {
      $(this).attr("id", "blockquote" + index);
      var navItem = $(this).text();
      var _classname = index == 0 ? "active" : "";
      lis += "<li class=" + _classname + ">" + navItem + "</li>";
    });
    slideNav = "<ul>" + lis + "</ul>";

    $(".node-nav").html(slideNav);

    $(".node-nav").on("click", "li", function () {
      var index = $(this).index();
      $(this).addClass("active").siblings().removeClass("active");
      var hh = $(".header").outerHeight();
      var bh = $(".breadcrumb").outerHeight();
      var st = $("#blockquote" + index).offset().top;
      if (index == 0) {
        $("html, body").animate({ scrollTop: 0 }, 500);
      } else {
        $("html, body").animate({ scrollTop: st - hh - bh + "px" }, 500);
      }
    });
  }

  function initSupportNav() {
    $(".left-sidebar .menu-item--expanded > a").click(function (event) {
      event.preventDefault();
      if ($(this).parent("li").hasClass("menu-item--active-trail")) {
        $(this).parent("li").removeClass("menu-item--active-trail");
      } else {
        $(this)
          .parent("li")
          .addClass("menu-item--active-trail")
          .siblings("li")
          .removeClass("menu-item--active-trail");
      }
    });

    if ($(".breadcrumb ol li").length > 3) {
      var expandNavUrl = $(".breadcrumb ol li").eq(1).find("a").attr("href");
      var activeNavUrl = $(".breadcrumb ol li").eq(2).find("a").attr("href");

      $(".left-sidebar [href='" + expandNavUrl + "']").each(function () {
        $(this).parent("li").addClass("menu-item--active-trail");
      });
      $(".left-sidebar [href='" + activeNavUrl + "']").each(function () {
        $(this).addClass("is-active");
      });
    }
  }

  window.onload = function () {
    var keyword = getQueryStringRegExp("keyword");
    if (keyword !== "") {
      initSearchResultFormat(keyword);
    }
    var _href = $(
      "#meetingBeta .meeting-box-btn:visible a.download-btn:first"
    ).attr("href");
    if (_href) {
      window.location.href = _href;
    }
  };

  function initActiveMenu() {
    var path = location.pathname;
    $("a[href='" + path + "']").each(function () {
      $(this).addClass("active");
      if ($(this).parents("li.menu-item").hasClass("menu-item--expanded")) {
        $(this).parents("li.menu-item").addClass("show-subnav");
      }
    });
  }

  $(function () {
    if (!supportCss3("background-size")) {
      alert("您的浏览器版本过低，为了使网站能够正常浏览，建议升级浏览器！");
    }

    initActiveMenu();
    if (!_isMobile) {
      initVideoPlay();
    }

    $(".rooms-ai-nav li").click(function () {
      var type = $(this).data("type");
      var title = $(this).data("title");
      var intro = $(this).data("intro");
      $(this).addClass("active").siblings().removeClass("active");

      $(".rooms-type").attr("class", "rooms-type " + type);
      $(".rooms-type h3").text(title);
      $(".rooms-type p").text(intro);
      $(".rooms-icon img").attr("src", "./images/rooms/icon-" + type + ".svg");
    });

    $("#app").addClass("fadein");

    // initScrollDom();
    if ($(".left-sidebar .menu-item--expanded").length) {
      initSupportNav();
    }

    if ($(".node-help h3").length) {
      initSlideNav();
    }
    // if ($(".price-wrapper2").length) {
    //   fixPriceBar();
    // }

    if (_isMobile) {
      $(".nav li.expanded > a")
        .attr("href", "javascript:;")
        .click(function (event) {
          var _e = event || window.event;
          _e.preventDefault();
        });
    }

    $(".search-form-select").click(function (event) {
      $(this).toggleClass("toggle-show");
      event.stopPropagation();
    });
    // $(".search-form-select span").click(function (event) {
    //   $(this).parents(".search-form-select").toggleClass("toggle-show");
    //   event.stopPropagation();
    // });

    var clearOut = null;

    $(".nav-menu nav > ul > li.menu-item--expanded").each(function (i) {
      $(this).hover(
        function () {
          $("body").attr("class", "ohidden");
          if ($("body").hasClass("hideHeader")) {
            return false;
          }
          var _this = this;
          $(_this).addClass("on").siblings("li").removeClass("on");
          // initNavActiveLine(".nav li.on a");

          if (!$(".subnav-container").hasClass("show-subnav")) {
            $(".subnav-container").addClass("show-subnav");
            $("#layer").addClass("show-subnav");
          } else {
            clearTimeout(clearOut);
          }
          if ($(".subnav").length > 0) {
            $(".subnav")
              .eq(i)
              .addClass("active")
              .siblings()
              .removeClass("active");
          }
        },
        function () {
          var _this = this;
          clearOut = setTimeout(function () {
            $(_this).removeClass("on");
            // if ($(".nav a.active").length) {
            //     initNavActiveLine(".nav a.active");
            // }
            // else {
            //     $(".nav span.line").stop(true).css("width", "0")
            // }
            $(".subnav-container").removeClass("show-subnav");
            $("body").removeClass("ohidden");
            $("#layer").removeClass("show-subnav");
          }, 100);
        }
      );
    });

    $(".subnav-container").hover(
      function () {
        clearTimeout(clearOut);
        $(this).addClass("show-subnav");
        $("body").addClass("ohidden");
        $("#layer").addClass("show-subnav");
      },
      function () {
        $(this).removeClass("show-subnav");
        // if ($(".nav a.active").length) {
        //     initNavActiveLine(".nav a.active");
        // }
        // else {
        //     $(".nav span.line").css("width", "0")
        // }
        $(".nav-menu nav > ul > li.menu-item--expanded").removeClass("on");
        $("body").removeClass("ohidden");
        $("#layer").removeClass("show-subnav");
      }
    );

    $(".nav-menu .m  ul.menu > li.menu-item--expanded").click(function () {
      $(this)
        .toggleClass("show-subnav")
        .siblings(".menu-item--expanded")
        .removeClass("show-subnav");
    });

    $(".search-form-select li").click(function (event) {
      var txt = $(this).text();
      var val = $(this).data("value");
      $(this).addClass("selected").siblings("li").removeClass("selected");
      $(this)
        .parents(".search-form-select")
        .find("span")
        .text(txt)
        .attr("data-value", val);
      // event.stopPropagation();
    });

    $(document).click(function () {
      if ($(".search-form-select").hasClass("toggle-show")) {
        $(".search-form-select").removeClass("toggle-show");
      }
    });

    if ($(".search-form-select").length) {
      initSearchValue();
    }

    initDataSrcImg();

    initScrollWidth();

    $(".front-banner .banner-content").click(function (e) {
      e.preventDefault();
      var _href = $(this).find("h2").data("href");
      if (_href) {
        location.href = _href;
      }
    });
    $(".front-banner .banner-btns a.more-link").click(function (e) {
      var _event = e || window.event;
      var _href = $(this).attr("href");
      if ($(this).hasClass("play")) {
        _event.preventDefault();
        showVideoWithUrl(_href);
      } else {
        location.href = _href;
      }

      _event.stopPropagation();
      _event.returnValue = false;
      return false;
    });

    $("[data-to]").click(function () {
      var _href = $(this).data("to");
      location.href = _href;
    });

    if ($(".box.gartner").length) {
      // 获取图片验证码
      getCheckImgCode();
      // 点击图片验证码刷新
      $(".img-code").click(function () {
        getCheckImgCode();
      });

      $(".form-country-code").click(function (event) {
        $(this).parents(".form-item").addClass("show-options");
        event.stopPropagation();
      });
      $(".country-list-content li").click(function () {
        var countryCode = $(this).find(".country-code").text();
        $(this).addClass("selected").siblings("li").removeClass("selected");
        $(".form-country-code span").text(countryCode);
      });
      $(document).click(function () {
        if ($(".form-item-phone").hasClass("show-options")) {
          $(".form-item-phone").removeClass("show-options");
        }
      });

      $(".gartner-form .form-text").on("input, keyup", function () {
        if ($.trim($(this).val()) != "") {
          $(".item-error").empty().hide();
        }
      });
    }

    try {
      var hash = location.hash.substring(1);
      if (hash != "") {
        toId(hash);
      }
    } catch (e) {}

    if ($(".help-list").length) {
      $(".help-list").eq(0).addClass("show");
    }

    $(document).on("click", ".help-list h4", function () {
      $(this)
        .parent(".help-list")
        .toggleClass("show")
        .siblings(".help-list")
        .removeClass("show");
    });

    // $(".help-list h4").click(function () {
    //     $(this).parent(".help-list").addClass("show").siblings(".help-list").removeClass("show");
    // })

    $("#helpSearch .form-submit").click(function () {
      submitHelpSearch();
    });
    $("#videoSearch .form-submit").click(function () {
      submitVideoSearch();
    });
    $("#jobSearch .form-submit").click(function () {
      submitJobSearch();
    });

    if ($(".price-wrapper").length && $(window).width() <= 1023) {
      $(".price-top .price-cell").each(function (i) {
        var _html = $(".price-bottom .price-cell").eq(i).html();
        $(this).append(_html);
      });
    }

    $(document).bind("keyup", function (event) {
      // e.preventDefault()

      if ($("#jobSearch").length) {
        setTimeout(function () {
          submitJobSearch();
        }, 500);
        // submitJobSearch()
      }
    });

    $(document).on("keyup", ".form-search", function (event) {
      if (event.keyCode == 13 && $("#helpSearch").length) {
        submitHelpSearch();
      }
      if (event.keyCode == 13 && $("#videoSearch").length) {
        submitVideoSearch();
      }
      if ($("#helpKeywords").val().length > 0) {
        $(".form-reset").show();
      } else {
        $(".form-reset").hide();
      }
    });

    $(document).on("input", ".form-search", function (event) {
      if ($("#helpKeywords").val().length > 0) {
        $(".form-reset").show();
      } else {
        $(".form-reset").hide();
      }
    });

    $(document).on("click", ".form-reset", function () {
      $("#helpKeywords").val("");
      $(this).hide();
    });

    $(".header .nav-btn").click(function () {
      $("body").toggleClass("show-nav");
      if ($("body").hasClass("init")) {
        $("body").toggleClass("init");
      }
    });
    $(".search-form .nav-btn").click(function () {
      $(".help-wrapper").addClass("show-left-nav");
    });

    $(".help-wrapper a.close").click(function () {
      $(".help-wrapper").removeClass("show-left-nav");
    });

    $(".zy-wrapper").on("click", ".zy-content a.play", function (event) {
      event.preventDefault();
      var _href = $(this).attr("href");
      showVideoWithUrl(_href);
    });

    var frontBanner = new Swiper(".front-banner .swiper-container", {
      // watchOverflow: true,
      parallax: true,
      speed: 1000,
      loop: true,
      autoplay: {
        delay: 5000,
      },
      // autoHeight: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      on: {
        // init: function () {
        //     if (!_isMobile) {
        //         $(".front-banner video").each(function (i) {
        //             if (i == 0) {
        //                 this.play();
        //             }
        //         })
        //     }
        // },
        // slideChangeTransitionStart: function () {
        //     var i = this.activeIndex;
        //     if (this.slides.eq(i).find(".banner-main h2").length) {
        //         var _title = this.slides.eq(i).find(".banner-main h2").html();
        //         if (_title.indexOf("》") != -1 && _title.indexOf("<br>") == -1) {
        //             var rhtml = _title.replace("》", "》<br>");
        //             this.slides.eq(i).find(".banner-main h2").html(rhtml);
        //         }
        //     }
        // },
      },
    });

    function initBusinessNavPosition() {
      var aleft = $(".business-nav a.active").offset().left;
      var awidth = $(".business-nav a.active").outerWidth();
      var wwidth = $(window).width();
      var scrollLeft = $(".business-nav").scrollLeft();
      console.log("aleft :>> ", aleft);
      console.log("scrollLeft :>> ", scrollLeft);
      if (aleft + awidth > scrollLeft + wwidth) {
        $(".business-nav").animate(
          {
            scrollLeft: scrollLeft + aleft - wwidth + 20 + awidth + "px",
            // scrollLeft: "50px",
          },
          300
        );
      } else if (aleft < 0) {
        $(".business-nav").animate(
          {
            scrollLeft: 0,
          },
          300
        );
      }
    }

    if ($("#businessContainer").length) {
      var businessBanner = new Swiper("#businessContainer", {
        // watchOverflow: true,
        speed: 1000,
        loop: true,
        autoHeight: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        effect: "fade",
        fadeEffect: {
          crossFade: true,
        },
        on: {
          init: function () {
            $(".business-nav a")
              .eq(0)
              .addClass("active")
              .siblings("a")
              .removeClass("active");
          },
          slideChangeTransitionStart: function () {
            var i = this.realIndex;
            $(".business-nav a")
              .eq(i)
              .addClass("active")
              .siblings("a")
              .removeClass("active");
            if ($(window).width() < 780) {
              initBusinessNavPosition();
            }
          },
        },
      });
      $(".business-nav a").hover(function () {
        var index = $(this).index();
        businessBanner.slideTo(index + 1);
      });
    }

    $(".price-select span").click(function (event) {
      $(this).parents(".price-select").toggleClass("show");
      event.stopPropagation();
    });

    $(document).click(function () {
      if ($(".price-select").hasClass("show")) {
        $(".price-select").removeClass("show");
      }
    });

    $(".events-2 li").hover(
      function () {
        var gifImg = $(this).data("hoverimg");
        $(this).find("img").attr("src", gifImg);
      },
      function () {
        var img = $(this).data("img");
        $(this).find("img").attr("src", img);
      }
    );
    /*
    $(".apply-btn").click(function () {
      var source = getQueryVariable("source");
      var registerUrl = $(".apply-btn").attr("href");
      var newUrl = "";
      if (source.length > 0) {
        newUrl = registerUrl + "?source=" + source;
        $(".apply-btn").attr("href", newUrl);
      }

      var logidUrl = window.location.href;
      if (logidUrl.indexOf("bd_vid") < 0) {
        return;
      }
      try {
        var registerUrl = $(".apply-btn").attr("href");
        if (registerUrl.indexOf("?") > 0) {
          newUrl = registerUrl + "&logidUrl=" + window.btoa(logidUrl);
        } else {
          newUrl = registerUrl + "?logidUrl=" + window.btoa(logidUrl);
        }
        $(".apply-btn").attr("href", newUrl);
      } catch (err) {
        console.log(err.description);
      }
    });
*/

    $(".price-select li").click(function () {
      var _classname = $(this).attr("class");
      if (_classname.indexOf("selected") != -1) {
        return false;
      } else {
        var txt = $(this).text();
        $(this).addClass("selected").siblings("li").removeClass("selected");
        $(this)
          .parents(".price-select")
          .find("span")
          .attr("class", _classname)
          .text(txt);

        $(".price-body").attr("class", "price-body " + _classname);
      }
    });

    $(".hd-price a.close").click(function () {
      $(this).parents(".hd-price").addClass("toggle-ad");
    });
    $(".kaituan").hover(
      function () {
        const pageX = $(this).offset().left;
        const pageY = $(this).offset().top;
        if (pageY > 100) {
          $(".pintuan-qrcode")
            .show()
            .css({
              left: pageX - 26,
              top: pageY - 316,
            });
        } else {
          $(".pintuan-qrcode")
            .addClass("top-arrow")
            .show()
            .css({
              left: pageX - 76,
              top: pageY + 46,
            });
        }
      },
      function () {
        $(".pintuan-qrcode").hide();
      }
    );

    $(".price-select li").click(function () {
      var _classname = $(this).attr("class");
      if (_classname.indexOf("selected") != -1) {
        return false;
      } else {
        var txt = $(this).text();
        $(this).addClass("selected").siblings("li").removeClass("selected");
        $(this)
          .parents(".price-select")
          .find("span")
          .attr("class", _classname)
          .text(txt);

        $(".price-body").attr("class", "price-body " + _classname);
      }
    });

    $(".icon-flink").click(function (event) {
      event.preventDefault();
      $(".friend-link").toggleClass("show");
    });
    function initBgScroll() {
      var clearCase = null;
      $(".hezi-list").on("mouseover", function () {
        if (_isMobile) {
          return false;
        }
        clearTimeout(clearCase);
        var bg = $(this).data("bg");
        $(this).addClass("current").siblings().removeClass("current");
        $(this)
          .parents(".hezi-lists")
          .addClass("hezi-lists-hover")
          .css({
            "background-image": "url(" + bg + ")",
          });
      });
      if (_isMobile) {
        $(".hezi-list").each(function () {
          var bg = $(this).data("bg");
          $(this).css({
            "background-image": "url(" + bg + ")",
          });
        });
      }

      $(".hezi-lists").on("mouseout", function () {
        if (_isMobile) {
          return false;
        }
        var bg = $(this).data("src");
        // var bg = $(this).data("src");
        var $this = $(this);
        clearCase = setTimeout(function () {
          $this.removeClass("hezi-lists-hover").css({
            "background-image": "url(" + bg + ")",
          });
          $this.find(".hezi-list.current").removeClass("current");
        }, 300);
      });
    }
    // 多款盒子，总有一款适合你的会议室
    initBgScroll();

    // function initDownloadBannerHeight() {
    //   // var headerHeight = $(".header").outerHeight();
    //   var wH = $(window).outerHeight();
    //   var h = wH;
    //   $(".download-banner").css("min-height", h + "px");
    // }

    // initDownloadBannerHeight();
    function initBaiduHm() {
      if (
        location.href.indexOf("/privacy") != -1 ||
        location.href.indexOf("/terms") != -1 ||
        location.href.indexOf("/opensourcepolicy") != -1 ||
        location.href.indexOf("/pricing-product") != -1 ||
        location.href.indexOf("/promotion") != -1
      ) {
        return;
      } else {
        var _hmt = _hmt || [];
        var hm = document.createElement("script");
        hm.src = "/hm.js?bd25b33eca996621d4d2a2fa2424e2fd";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
      }
    }

    function getQueryVariable(variable) {
      let query = window.location.search.substring(1);
      let vars = query.split("&");
      for (let i = 0; i < vars.length; i++) {
        let pair = vars[i].split("=");
        if (pair[0] == variable) {
          return pair[1];
        }
      }
      return "";
    }

    function initBackTop() {
      var wh = $(window).height() / 2;
      if ($(window).scrollTop > wh) {
        $(".back-top").css("display", "block");
      } else {
        $(".back-top").css("display", "none");
      }
    }

    // const iframeUrl  = '/register2023/login.html'
    const iframeUrl = "/register2023/ecommerceBuy/#/";
    const storageToken = deserialize(localStorage.getItem("token"));
    const storageUser = deserialize(localStorage.getItem("user"));
    function deserialize(val) {
      if (typeof val !== "string") {
        return undefined;
      }
      try {
        return JSON.parse(val);
      } catch (err) {
        // console.error('deserialize error:', val)
      }
      return undefined;
    }

    if ($(".lang-box").length) {
      var lang = $(
        ".lang-box .language-switcher-language-url li.is-active a"
      ).text();
      $(".lang-box span.lang").text(lang);
    }

    initBaiduHm();
    initBackTop();
    // $("body").running();

    $(".meeting-nav").click(function () {
      var _href = $(this).data("href");
      location.href = location.origin + _href;
    });

    $(".os-mac").click(function (event) {
      // if (os === "mac") {
      event.preventDefault();
      showDialog("downloadMac");
      // }
    });

    $("#downloadMac a.close").click(function () {
      hideDialog("downloadMac");
    });
    $(".linux-btn").click(function () {
      showDialog("downloadLinux");
    });

    $("#downloadLinux a.close").click(function () {
      hideDialog("downloadLinux");
    });
    $(".dl-flex dd").hover(function () {
      var index = $(this).index();
      $(this).addClass("checked").siblings("dd").removeClass("checked");
      $(this)
        .parent("dl")
        .next(".dl-imgs")
        .find("img")
        .eq(index - 1)
        .addClass("checked")
        .siblings()
        .removeClass("checked");
    });

    if (
      location.href.indexOf("pricing-product") != -1 &&
      $("#register2023Frame").length > 0
    ) {
      var url = iframeUrl;
      var hashIndex = url.indexOf("#");
      var cleanUrl = hashIndex !== -1 ? url.substring(0, hashIndex) : url;

      var newSearch = location.search;
      var searchUrl =
        newSearch.indexOf("?") != -1
          ? newSearch + "&t=" + new Date().getTime()
          : newSearch + "?t=" + new Date().getTime();
      let _href = location.origin + cleanUrl + searchUrl;

      $("#register2023Frame").attr("src", _href);
      if (
        (searchUrl.indexOf("userId") != -1 &&
          $("#registerDialog").length > 0) ||
        searchUrl.indexOf("channelId") != -1 ||
        searchUrl.indexOf("token") != -1
      ) {
        if (_isMobile) {
          if (location.href.indexOf("#") !== -1) {
            const _url = new URL(cleanUrl, location.origin);
            _href = _url.origin + _url.pathname + searchUrl + _url.hash;
          }

          location.href = _href;
        } else {
          showDialog("registerDialog");
        }
      } else if (storageToken) {
        $("#register2023Frame").attr(
          "src",
          location.origin +
            iframeUrl +
            "?token=" +
            storageToken +
            "&userId=" +
            storageUser?.id
        );
      }
    }
    // if (
    //   location.href.indexOf("ecommerce-buy") != -1 && $("#ecommerceBuyFrame").length > 0
    // ) {
    //   var searchUrl = location.search;
    //   if (
    //     (searchUrl.indexOf("userId") != -1) ||
    //     searchUrl.indexOf("channelId") != -1
    //   ) {
    //     $("#ecommerceBuyFrame").attr(
    //       "src",
    //       location.origin + iframeUrl + searchUrl
    //     );
    //   } else if (storageToken) {
    //     $("#ecommerceBuyFrame").attr(
    //       "src",
    //       location.origin +
    //         iframeUrl + "?token=" +
    //         storageToken +
    //         "&userId=" +
    //         storageUser?.id
    //     );
    //   }
    // }

    $("#registerDialog a.close").click(function () {
      if (storageToken) {
        $("#register2023Frame").attr(
          "src",
          location.origin +
            iframeUrl +
            "?token=" +
            storageToken +
            "&userId=" +
            storageUser?.id
        );
      }
      hideDialog("registerDialog");
    });
    var registerSrc = $("#register2023Frame").attr("src");
    $("#personalVersion, .hd-price a.big, .hd-price a.small").click(function (
      event
    ) {
      event.preventDefault();
      if (_isMobile) {
        location.href = registerSrc;
      } else {
        showDialog("registerDialog");
        $("#register2023Frame").attr("src", registerSrc);
      }
    });

    // function openBaiduWindow() {
    //     window.open('http://p.qiao.baidu.com/cps/chat?siteId=7697608&amp;userId=10986279&amp;siteToken=bd25b33eca996621d4d2a2fa2424e2fd', 'windowForBridgeIM', 'left=40%,top=200,width=480,height=580,location = no,resizable = yes, status = no, toolbar = no, menubar = no')
    // }

    // $(".icon-service").click(function (e) {
    //     e.preventDefault();
    //     openBaiduWindow()
    // })

    $(".linux-download .linux-left li").hover(function () {
      var index = $(this).index();
      $(".linux-download .linux-right li")
        .eq(index)
        .addClass("active")
        .siblings()
        .removeClass("active");
    });

    $("#registerDialog a.close").click(function () {
      hideDialog("registerDialog");
    });

    $(".event-help").click(function () {
      var url = $(this).find("a.more-link").attr("href");
      location.href = url;
    });
    $(".case-list").click(function () {
      var url = $(this).find("a.more-link").attr("href");
      location.href = url;
    });

    const swiper = new Swiper(".slidebarContainer", {
      slidesPerView: "auto",
      grabCursor: true,
      freeMode: true,
      // loop: true,
      // loopedSlides: 5,
      // slidesPerGroup: 3,
      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
        disableOnInteraction: false,
      },
      autoplay: true,
      // autoplay: {
      //   pauseOnMouseEnter: true,
      // },
    });
  });

  const frontBannerSwiper = new Swiper(".front-banner-container", {
    watchOverflow: true,
    speed: 1000,
    // loop: false,
    autoplay: {
      delay: 20000,
    },
    // autoHeight: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
  });
  $(".tab-nav a").click(function () {
    $(this).addClass("active").siblings("a").removeClass("active");
    var index = $(this).index();
    $(".price-main-wrapper")
      .eq(index)
      .show()
      .siblings(".price-main-wrapper")
      .hide();
    var title = $(this).data("title");
    if (title) {
      $(".price-main .price-title").text(title);
    }
  });

  // if ($(".nav-menu .pc a.device").length) {
  //   var txt = $(".nav-menu .pc a.device").text();
  //   $(".nav-menu .pc a.device").html(
  //     txt +
  //       '<i><img src="/themes/quanshi/images/device.svg?t=' +
  //       new Date().getTime() +
  //       '" style="max-width: none;margin-top: 0px;" /></i>'
  //   );
  // }

  if ($(".nav-menu .pc a.buy").length) {
    var txt = $(".nav-menu .pc a.buy").text();
    $(".nav-menu .pc a.buy").html(
      txt +
        '<i><img src="/themes/quanshi/images/tab99_99.svg?t=' +
        new Date().getTime() +
        '" style="max-width: none" /></i>'
    );
  }

  if ($(".nav-menu .pc .nkpt").length) {
    var txt = $(".nav-menu .pc .nkpt").text();
    $(".nav-menu .pc .nkpt").html(
      txt +
        '<i><img src="/themes/quanshi/images/icon-tj.svg?t=' +
        new Date().getTime() +
        '" /></i>'
    );
  }

  $(".numType li").click(function () {
    var price = $(this).attr("data-price");
    $("#price").text("￥" + price);
    $(this).addClass("active").siblings("li").removeClass("active");
  });

  $(".download-pkg").click(function (event) {
    event.preventDefault();
    var url = $(this).attr("href");
    handleDownload(url);
  });

  $(".nkpt").on("click", function (event) {
    const pageX = $(this).offset().left;
    $(".pintuan-qrcode")
      .show()
      .css({
        left: pageX - 110,
        top: 80,
        zIndex: 9999,
      });
    event.stopPropagation();
  });
  $(document).click(function () {
    if ($(".pintuan-qrcode").is(":visible")) {
      $(".pintuan-qrcode").hide();
    }
  });
})(jQuery);
function generateUUID() {
  return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}
// "URI-Timestamp-rand-uid-PrivateKey"
// /video/standard/test.mp4-1444435200-0-0-aliyuncdnexp1234
function handleDownload(downloadUrl) {
  const url = new URL(downloadUrl);
  const pathname = url.pathname;
  const auth_key = "Quanshi2025A";
  const timestamp = Number.parseInt(new Date().getTime() / 1000);
  const rand = generateUUID();
  const sstring = `${pathname}-${timestamp}-${rand}-0-${auth_key}`;
  const md5hash = CryptoJS.MD5(sstring).toString();

  console.log(
    "url,pathname,timestamp,rand,md5hash :>> ",
    url,
    pathname,
    timestamp,
    rand,
    md5hash
  );
  location.href = `${downloadUrl}?auth_key=${timestamp}-${rand}-0-${md5hash}`;
}
// (function ($) {
//   $(function () {
//     function saveDataCollection() {
//       var etdata = getQueryStringRegExp("etdata"); //获取etdata参数
//       var AppKey = "u797f34lw4xz"; //获取AppKey
//       var AppSecret = "0d31a7614fa72c9aa103e4a492493b2d"; //获取AppSecret
//       var CurTime = new Date().getTime(); //获取当前时间戳
//       var Nonce = generateRandomString(16); //获取随机字符串
//       console.log("etdata :>> ", etdata);
//       if (etdata) {
//         var CheckSum = CryptoJS.MD5(
//           AppSecret + etdata + CurTime + Nonce
//         ).toString(); //获取CheckSum

//         $.ajax({
//           type: "POST",
//           url: "https://umsauth.quanshi.com/eamsmember/dataCollection/save",
//           data: decodeURIComponent(etdata),
//           ContentType: "application/json",
//           beforeSend: function (XMLHttpRequest) {
//             //HttpUtility.UrlEncode
//             XMLHttpRequest.setRequestHeader("AppKey", AppKey);
//             XMLHttpRequest.setRequestHeader("CurTime", CurTime);
//             XMLHttpRequest.setRequestHeader("CheckSum", CheckSum);
//             XMLHttpRequest.setRequestHeader("Nonce", Nonce);
//             XMLHttpRequest.setRequestHeader(
//               "Content-Type",
//               "application/json; charset=UTF-8"
//             );
//           },
//           success: function (res) {
//             //alert(SessionID.success);
//             console.log("res :>> ", res);
//           },
//         });
//       }
//     }
//     saveDataCollection();
//   });
// })(jQuery);
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings) {
  $(document).ready(function () {
    $.ajax({
      type: 'POST',
      cache: false,
      url: drupalSettings.statistics.url,
      data: drupalSettings.statistics.data
    });
  });
})(jQuery, Drupal, drupalSettings);;
