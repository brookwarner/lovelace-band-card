function t(t,e,i,s){var r,n=arguments.length,o=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(o=(n<3?r(o):n>3?r(e,i,o):r(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),r=new WeakMap;let n=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&r.set(e,t))}return t}toString(){return this.cssText}};const o=t=>new n("string"==typeof t?t:t+"",void 0,s),a=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new n(i,t,s)},c=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return o(e)})(t):t,{is:h,defineProperty:l,getOwnPropertyDescriptor:d,getOwnPropertyNames:p,getOwnPropertySymbols:u,getPrototypeOf:m}=Object,_=globalThis,f=_.trustedTypes,g=f?f.emptyScript:"",$=_.reactiveElementPolyfillSupport,v=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},b=(t,e)=>!h(t,e),x={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:b};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),_.litPropertyMetadata??=new WeakMap;let w=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=x){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&l(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:r}=d(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const n=s?.call(this);r?.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??x}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const t=m(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const t=this.properties,e=[...p(t),...u(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(c(t))}else void 0!==t&&e.push(c(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{if(i)t.adoptedStyleSheets=s.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of s){const s=document.createElement("style"),r=e.litNonce;void 0!==r&&s.setAttribute("nonce",r),s.textContent=i.cssText,t.appendChild(s)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:y).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=s;const n=r.fromAttribute(e,t.type);this[s]=n??this._$Ej?.get(s)??n,this._$Em=null}}requestUpdate(t,e,i,s=!1,r){if(void 0!==t){const n=this.constructor;if(!1===s&&(r=this[t]),i??=n.getPropertyOptions(t),!((i.hasChanged??b)(r,e)||i.useDefault&&i.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:r},n){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==r||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[v("elementProperties")]=new Map,w[v("finalized")]=new Map,$?.({ReactiveElement:w}),(_.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const A=globalThis,S=t=>t,E=A.trustedTypes,k=E?E.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",M=`lit$${Math.random().toFixed(9).slice(2)}$`,P="?"+M,T=`<${P}>`,N=document,O=()=>N.createComment(""),U=t=>null===t||"object"!=typeof t&&"function"!=typeof t,z=Array.isArray,R="[ \t\n\f\r]",H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,D=/-->/g,B=/>/g,L=RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),j=/'/g,I=/"/g,q=/^(?:script|style|textarea|title)$/i,F=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),V=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),X=new WeakMap,J=N.createTreeWalker(N,129);function K(t,e){if(!z(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==k?k.createHTML(e):e}const Z=(t,e)=>{const i=t.length-1,s=[];let r,n=2===e?"<svg>":3===e?"<math>":"",o=H;for(let e=0;e<i;e++){const i=t[e];let a,c,h=-1,l=0;for(;l<i.length&&(o.lastIndex=l,c=o.exec(i),null!==c);)l=o.lastIndex,o===H?"!--"===c[1]?o=D:void 0!==c[1]?o=B:void 0!==c[2]?(q.test(c[2])&&(r=RegExp("</"+c[2],"g")),o=L):void 0!==c[3]&&(o=L):o===L?">"===c[0]?(o=r??H,h=-1):void 0===c[1]?h=-2:(h=o.lastIndex-c[2].length,a=c[1],o=void 0===c[3]?L:'"'===c[3]?I:j):o===I||o===j?o=L:o===D||o===B?o=H:(o=L,r=void 0);const d=o===L&&t[e+1].startsWith("/>")?" ":"";n+=o===H?i+T:h>=0?(s.push(a),i.slice(0,h)+C+i.slice(h)+M+d):i+M+(-2===h?e:d)}return[K(t,n+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class G{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,n=0;const o=t.length-1,a=this.parts,[c,h]=Z(t,e);if(this.el=G.createElement(c,i),J.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=J.nextNode())&&a.length<o;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(C)){const e=h[n++],i=s.getAttribute(t).split(M),o=/([.?@])?(.*)/.exec(e);a.push({type:1,index:r,name:o[2],strings:i,ctor:"."===o[1]?it:"?"===o[1]?st:"@"===o[1]?rt:et}),s.removeAttribute(t)}else t.startsWith(M)&&(a.push({type:6,index:r}),s.removeAttribute(t));if(q.test(s.tagName)){const t=s.textContent.split(M),e=t.length-1;if(e>0){s.textContent=E?E.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],O()),J.nextNode(),a.push({type:2,index:++r});s.append(t[e],O())}}}else if(8===s.nodeType)if(s.data===P)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(M,t+1));)a.push({type:7,index:r}),t+=M.length-1}r++}}static createElement(t,e){const i=N.createElement("template");return i.innerHTML=t,i}}function Q(t,e,i=t,s){if(e===V)return e;let r=void 0!==s?i._$Co?.[s]:i._$Cl;const n=U(e)?void 0:e._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),void 0===n?r=void 0:(r=new n(t),r._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=r:i._$Cl=r),void 0!==r&&(e=Q(t,r._$AS(t,e.values),r,s)),e}class Y{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??N).importNode(e,!0);J.currentNode=s;let r=J.nextNode(),n=0,o=0,a=i[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new tt(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new nt(r,this,t)),this._$AV.push(e),a=i[++o]}n!==a?.index&&(r=J.nextNode(),n++)}return J.currentNode=N,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class tt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Q(this,t,e),U(t)?t===W||null==t||""===t?(this._$AH!==W&&this._$AR(),this._$AH=W):t!==this._$AH&&t!==V&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>z(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==W&&U(this._$AH)?this._$AA.nextSibling.data=t:this.T(N.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=G.createElement(K(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new Y(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=X.get(t.strings);return void 0===e&&X.set(t.strings,e=new G(t)),e}k(t){z(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new tt(this.O(O()),this.O(O()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=S(t).nextSibling;S(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class et{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=W,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=W}_$AI(t,e=this,i,s){const r=this.strings;let n=!1;if(void 0===r)t=Q(this,t,e,0),n=!U(t)||t!==this._$AH&&t!==V,n&&(this._$AH=t);else{const s=t;let o,a;for(t=r[0],o=0;o<r.length-1;o++)a=Q(this,s[i+o],e,o),a===V&&(a=this._$AH[o]),n||=!U(a)||a!==this._$AH[o],a===W?t=W:t!==W&&(t+=(a??"")+r[o+1]),this._$AH[o]=a}n&&!s&&this.j(t)}j(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class it extends et{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===W?void 0:t}}class st extends et{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==W)}}class rt extends et{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=Q(this,t,e,0)??W)===V)return;const i=this._$AH,s=t===W&&i!==W||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==W&&(i===W||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class nt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Q(this,t)}}const ot=A.litHtmlPolyfillSupport;ot?.(G,tt),(A.litHtmlVersions??=[]).push("3.3.3");const at=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ct extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let r=s._$litPart$;if(void 0===r){const t=i?.renderBefore??null;s._$litPart$=r=new tt(e.insertBefore(O(),t),t,void 0,i??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return V}}ct._$litElement$=!0,ct.finalized=!0,at.litElementHydrateSupport?.({LitElement:ct});const ht=at.litElementPolyfillSupport;ht?.({LitElement:ct}),(at.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const lt=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},dt={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:b},pt=(t=dt,e,i)=>{const{kind:s,metadata:r}=i;let n=globalThis.litPropertyMetadata.get(r);if(void 0===n&&globalThis.litPropertyMetadata.set(r,n=new Map),"setter"===s&&((t=Object.create(t)).wrapped=!0),n.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const r=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,r,t,!0,i)},init(e){return void 0!==e&&this.C(s,void 0,t,e),e}}}if("setter"===s){const{name:s}=i;return function(i){const r=this[s];e.call(this,i),this.requestUpdate(s,r,t,!0,i)}}throw Error("Unsupported decorator location: "+s)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ut(t){return(e,i)=>"object"==typeof i?pt(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function mt(t){return ut({...t,state:!0,attribute:!1})}const _t={red:"#f44336",pink:"#e91e63",purple:"#9c27b0","deep-purple":"#673ab7",indigo:"#3f51b5",blue:"#2196f3","light-blue":"#03a9f4",cyan:"#00bcd4",teal:"#009688",green:"#4caf50","light-green":"#8bc34a",lime:"#cddc39",yellow:"#ffeb3b",amber:"#ffc107",orange:"#ff9800","deep-orange":"#ff5722",brown:"#795548",grey:"#9e9e9e","blue-grey":"#607d8b"},ft="#ffa726",gt="#7986cb";function $t(t){return t?_t[t]||t:"var(--primary-color, #2196f3)"}const vt={band:"mdi:arrow-expand-horizontal",daynight:"mdi:theme-light-dark"};let yt=class extends ct{constructor(){super(...arguments),this._entA="",this._entB="",this._interaction="drag",this._dragging=null,this._tipShow=!1}setConfig(t){if(!t||!t.mode)throw new Error("band-card: 'mode' is required (band | daynight)");if("band"===t.mode){if(!t.lower_entity||!t.upper_entity)throw new Error("band-card: band mode needs lower_entity and upper_entity")}else{if("daynight"!==t.mode)throw new Error(`band-card: unknown mode '${t.mode}'`);if(!t.day_entity||!t.night_entity)throw new Error("band-card: daynight mode needs day_entity and night_entity")}this._config=t,this._interaction=t.interaction||"drag",this._entA="band"===t.mode?t.lower_entity:t.day_entity,this._entB="band"===t.mode?t.upper_entity:t.night_entity}getCardSize(){return"steppers"===this._interaction?2:3}shouldUpdate(t){return!(this._dragging&&!t.has("_config")&&!t.has("_tipShow"))}_isTime(){return this._entA.startsWith("input_datetime.")}_parseTime(t){const e=/^(\d{1,2}):(\d{2})(?::(\d{2}))?$/.exec(t);return e?60*Number(e[1])+Number(e[2]):NaN}_attr(t,e,i){const s=this.hass?.states[t],r=s?.attributes?.[e];return null==r?i:Number(r)}_scale(){const t=this._config;if(this._isTime())return{min:0,max:1440,step:Number(t.step_minutes??15)};const e=this._attr(this._entA,"min",0),i=this._attr(this._entB,"min",0),s=this._attr(this._entA,"max",100),r=this._attr(this._entB,"max",100),n=this._attr(this._entA,"step",1),o=this._attr(this._entB,"step",1);return{min:null!=t.min?Number(t.min):Math.min(e,i),max:null!=t.max?Number(t.max):Math.max(s,r),step:null!=t.step?Number(t.step):Math.min(n,o)}}_val(t){const e=this.hass?.states[t];return e?"string"==typeof e.state&&/^\d{1,2}:\d{2}(:\d{2})?$/.test(e.state)?this._parseTime(e.state):Number(e.state):NaN}_unit(){if(this._isTime())return"";if(this._config.unit)return this._config.unit;const t=this.hass?.states[this._entA];return t?.attributes?.unit_of_measurement||""}_frac(t,e){return e.max===e.min?0:Math.max(0,Math.min(1,(t-e.min)/(e.max-e.min)))}_snap(t,e){const i=Math.round((t-e.min)/e.step)*e.step+e.min,s=Math.max(e.min,Math.min(e.max,i));return Number(s.toFixed(4))}_fmt(t){if(!isFinite(t))return"—";if(this._isTime()){const e=(Math.round(t)%1440+1440)%1440;return`${String(Math.floor(e/60)).padStart(2,"0")}:${String(e%60).padStart(2,"0")}`}const e=this._scale().step<1?1:0;return t.toFixed(e)}_accent(){return $t(this._config.color||this._config.icon_color)}_nightActive(){if("daynight"!==this._config.mode)return null;const t=this._config.is_night_entity||"binary_sensor.dewpoint_window_is_night",e=this.hass?.states[t];return e?"on"===e.state||"below_horizon"===e.state:null}_setValue(t,e){if(t&&isFinite(e)){if(t.startsWith("input_datetime.")){const i=(Math.round(e)%1440+1440)%1440,s=`${String(Math.floor(i/60)).padStart(2,"0")}:${String(i%60).padStart(2,"0")}:00`;return void this.hass.callService("input_datetime","set_datetime",{entity_id:t,time:s}).catch(e=>console.error("band-card: set_datetime FAILED",t,s,e))}this.hass.callService("input_number","set_value",{entity_id:t,value:e}).catch(i=>console.error("band-card: set_value FAILED",t,e,i))}else console.error("band-card: refusing to set",t,"to non-finite value",e)}_entFor(t){return"a"===t?this._entA:this._entB}_clampOrder(t,e){return"band"!==this._config.mode?e:"a"===t?Math.min(e,this._val(this._entB)):Math.max(e,this._val(this._entA))}_onStep(t,e){const i=this._scale(),s=this._clampOrder(t,this._snap(this._val(this._entFor(t))+e*i.step,i));this._setValue(this._entFor(t),s)}get _track(){return this.renderRoot.querySelector(".track")}_pointerValue(t){const e=this._scale(),i=this._track.getBoundingClientRect(),s=Math.max(0,Math.min(1,(t.clientX-i.left)/i.width));return this._snap(e.min+s*(e.max-e.min),e)}_onDown(t){t.preventDefault();const e=t.currentTarget,i=this._scale(),s=Math.abs(this._val(this._entA)-this._val(this._entB))<=i.step+1e-9,r=t.clientX,n={which:e.dataset.which,resolved:!s};this._dragging=n.which,e.setPointerCapture(t.pointerId),e.style.zIndex="4";const o=t=>{if(!n.resolved){const e=t.clientX-r;if(Math.abs(e)<3)return;n.which=e>0?"b":"a",n.resolved=!0,this._dragging=n.which;const i=this.renderRoot.querySelector(`.thumb-${n.which}`);i&&(i.style.zIndex="5")}this._onMove(n.which,t)},a=t=>{e.releasePointerCapture(t.pointerId),e.removeEventListener("pointermove",o),e.removeEventListener("pointerup",a),e.removeEventListener("pointercancel",a),this.renderRoot.querySelectorAll(".thumb").forEach(t=>t.style.zIndex=""),this._dragging=null,n.resolved?this._setValue(this._entFor(n.which),this._clampOrder(n.which,this._pointerValue(t))):this.requestUpdate()};e.addEventListener("pointermove",o),e.addEventListener("pointerup",a),e.addEventListener("pointercancel",a)}_onMove(t,e){const i=this._clampOrder(t,this._pointerValue(e)),s=this._scale(),r=100*this._frac(i,s),n=this.renderRoot.querySelector(`.thumb-${t}`),o=this.renderRoot.querySelector(`.lbl-${t}`),a=this._unit();if(n&&(n.style.left=`${r}%`),o)if(o.style.left=`${r}%`,"daynight"===this._config.mode){const e="a"===t?"mdi:weather-sunny":"mdi:weather-night",s="a"===t?ft:gt;o.innerHTML=`<ha-icon icon="${e}" style="--mdc-icon-size:13px;color:${s}"></ha-icon><span>${this._fmt(i)}${a}</span>`}else o.innerHTML=`<span>${this._fmt(i)}${a}</span>`;if("band"===this._config.mode){const e=100*this._frac(this._val(this._entFor("a"===t?"b":"a")),s),i=Math.min(r,e),n=Math.max(r,e),o=this.renderRoot.querySelector(".fill");o&&(o.style.left=`${i}%`,o.style.width=n-i+"%")}}_toggleTip(){this._tipShow=!0,clearTimeout(this._tipTimer),this._tipTimer=window.setTimeout(()=>this._tipShow=!1,2500)}render(){if(!this._config||!this.hass)return W;const t=this._config,e=this.hass.states[this._entA],i=this.hass.states[this._entB],s=t.icon||(this._isTime()?"mdi:clock-outline":vt[t.mode]),r=this._accent(),n=!e||!i||"unavailable"===e.state||"unavailable"===i.state,o=this._scale(),a=this._val(this._entA),c=this._val(this._entB),h=this._unit(),l=this._nightActive(),d="steppers"!==this._interaction,p="drag"!==this._interaction;return F`
      <ha-card style="--accent:${r}">
        <div class="row">
          <div class="shape"><ha-icon .icon=${s}></ha-icon></div>
          <div class="text">
            <span class="primary">${t.name||""}</span>
            ${n?W:this._renderSecondary(l,h)}
          </div>
        </div>
        ${n?F`<div class="unavailable">Entities unavailable</div>`:F`
              ${d?this._renderTrack(o,a,c,h,l):W}
              ${p?this._renderSteppers(a,c,h):W}
            `}
      </ha-card>
    `}_renderSecondary(t,e){const i=this._config;if("daynight"===i.mode&&null!==t)return t?F`<span class="secondary"><ha-icon icon="mdi:weather-night" style="color:${gt}"></ha-icon><span>Night active</span></span>`:F`<span class="secondary"><ha-icon icon="mdi:weather-sunny" style="color:${ft}"></ha-icon><span>Day active</span></span>`;if(i.current_entity){const t=this._val(i.current_entity);return F`<span class="secondary">${isFinite(t)?`Now ${this._fmt(t)}${e}`:""}</span>`}return W}_renderTrack(t,e,i,s,r){const n=this._config,o=100*this._frac(e,t),a=100*this._frac(i,t),c="band"===n.mode,h=!1===r,l=!0===r,d=c?F`<span>${this._fmt(e)}${s}</span>`:F`<ha-icon class="sun" icon="mdi:weather-sunny"></ha-icon><span>${this._fmt(e)}${s}</span>`,p=c?F`<span>${this._fmt(i)}${s}</span>`:F`<ha-icon class="moon" icon="mdi:weather-night"></ha-icon><span>${this._fmt(i)}${s}</span>`;return F`
      <div class="track-wrap">
        <div class="track">
          <div class="rail"></div>
          ${c?F`<div class="fill" style="left:${Math.min(o,a)}%;width:${Math.abs(a-o)}%"></div>`:W}
          ${this._renderMarker(t,c?Math.min(e,i):null,c?Math.max(e,i):null)}
          <div class="lbl lbl-a ${h?"active":""}" style="left:${o}%">${d}</div>
          <div class="lbl lbl-b ${l?"active":""}" style="left:${a}%">${p}</div>
          <div
            class="thumb thumb-a ${l?"dim":""} ${h?"ring":""}"
            data-which="a"
            style="left:${o}%"
            @pointerdown=${this._onDown}
          ></div>
          <div
            class="thumb thumb-b ${h?"dim":""} ${l?"ring":""}"
            data-which="b"
            style="left:${a}%"
            @pointerdown=${this._onDown}
          ></div>
        </div>
      </div>
    `}_renderMarker(t,e,i){const s=this._config;if(!s.current_entity)return W;const r=this._val(s.current_entity);if(!isFinite(r))return W;let n="";null!==e&&null!==i&&(n=r>=e&&r<=i?"inside":"outside");const o=this.hass.states[s.current_entity],a=o?.attributes?.friendly_name||"Current";return F`
      <div
        class="marker-wrap ${n} ${this._tipShow?"show":""}"
        style="left:${100*this._frac(r,t)}%"
        @click=${this._toggleTip}
      >
        <div class="marker-tip">${a}: ${this._fmt(r)}${this._unit()}</div>
        <div class="marker-line"></div>
        <div class="marker-dot"></div>
      </div>
    `}_renderSteppers(t,e,i){const s="daynight"===this._config.mode,r=(t,e,s,r)=>F`
      <div class="stepper">
        <button @click=${()=>this._onStep(t,-1)}><ha-icon icon="mdi:minus"></ha-icon></button>
        <span class="v"
          >${s?F`<ha-icon icon=${s} style="color:${r}"></ha-icon>`:W}<span
            >${this._fmt(e)}${i}</span
          ></span
        >
        <button @click=${()=>this._onStep(t,1)}><ha-icon icon="mdi:plus"></ha-icon></button>
      </div>
    `;return F`
      <div class="steppers">
        ${r("a",t,s?"mdi:weather-sunny":void 0,ft)}
        ${r("b",e,s?"mdi:weather-night":void 0,gt)}
      </div>
    `}};yt.styles=a`
    ha-card { padding: var(--mush-spacing, 12px); }
    .row { display: flex; align-items: center; gap: 12px; }
    .shape {
      flex: 0 0 auto;
      width: var(--mush-icon-size, 42px);
      height: var(--mush-icon-size, 42px);
      border-radius: var(--mush-icon-border-radius, 12px);
      display: flex; align-items: center; justify-content: center;
      background-color: color-mix(in srgb, var(--accent) 20%, transparent);
      color: var(--accent);
      --mdc-icon-size: 22px;
    }
    .text { display: flex; flex-direction: column; min-width: 0; flex: 1; }
    .primary {
      color: var(--mush-card-primary-color, var(--primary-text-color));
      font-weight: var(--mush-card-primary-font-weight, 500);
      font-size: var(--mush-card-primary-font-size, 14px);
      line-height: var(--mush-card-primary-line-height, 1.4);
      white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
    }
    .secondary {
      color: var(--mush-card-secondary-color, var(--secondary-text-color));
      font-size: var(--mush-card-secondary-font-size, 12px);
      line-height: var(--mush-card-secondary-line-height, 1.4);
      display: flex; align-items: center; gap: 4px;
    }
    .secondary ha-icon { --mdc-icon-size: 14px; }
    .track-wrap { padding: 26px 12px 4px; }
    .track { position: relative; height: 20px; }
    .rail { position: absolute; top: 7px; left: 0; right: 0; height: 6px; border-radius: 3px; background: var(--divider-color, #cfcfcf); }
    .fill { position: absolute; top: 7px; height: 6px; border-radius: 3px; background: var(--accent); }
    .marker-wrap { position: absolute; top: -3px; width: 20px; height: 26px; margin-left: -10px; cursor: pointer; }
    .marker-line { position: absolute; left: 50%; top: 3px; width: 3px; height: 20px; margin-left: -1.5px; background: var(--secondary-text-color, #888); border-radius: 2px; }
    .marker-dot { position: absolute; left: 50%; top: 0; width: 7px; height: 7px; margin-left: -3.5px; border-radius: 50%; background: var(--secondary-text-color, #888); box-shadow: 0 0 0 2px var(--card-background-color, #fff); }
    .marker-wrap.inside .marker-line, .marker-wrap.inside .marker-dot { background: var(--success-color, #43a047); }
    .marker-wrap.outside .marker-line, .marker-wrap.outside .marker-dot { background: var(--error-color, #e53935); }
    .marker-tip {
      position: absolute; bottom: 28px; left: 50%; transform: translateX(-50%);
      background: var(--secondary-background-color, #2c2c2c); color: var(--primary-text-color);
      font-size: 11px; line-height: 1.3; padding: 4px 7px; border-radius: 6px; white-space: nowrap;
      opacity: 0; transition: opacity 0.12s; pointer-events: none; z-index: 2;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
    }
    .marker-wrap:hover .marker-tip, .marker-wrap.show .marker-tip { opacity: 1; }
    .thumb {
      position: absolute; top: -3px; width: 26px; height: 26px; margin-left: -13px;
      border-radius: 50%; background: var(--accent); cursor: grab; touch-action: none;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4); border: 2px solid var(--card-background-color, #fff);
      transition: opacity 0.15s;
    }
    .thumb:active { cursor: grabbing; }
    .thumb.dim { opacity: 0.3; }
    .thumb.ring { box-shadow: 0 0 0 2px var(--card-background-color, #fff), 0 0 0 4px var(--accent), 0 1px 4px rgba(0, 0, 0, 0.4); }
    .lbl {
      position: absolute; top: -24px; transform: translateX(-50%); font-size: 12px;
      color: var(--secondary-text-color, #888); white-space: nowrap; display: flex; align-items: center; gap: 2px;
    }
    .lbl ha-icon { --mdc-icon-size: 13px; }
    .lbl ha-icon.sun { color: ${o(ft)}; }
    .lbl ha-icon.moon { color: ${o(gt)}; }
    .lbl.active { color: var(--accent); font-weight: 500; }
    .steppers { display: flex; gap: 10px; margin-top: 14px; }
    .stepper { flex: 1; display: flex; align-items: center; justify-content: space-between; border: 1px solid var(--divider-color, #cfcfcf); border-radius: 12px; padding: 5px 8px; }
    .stepper .v { font-size: 14px; color: var(--primary-text-color); display: flex; align-items: center; gap: 3px; }
    .stepper .v ha-icon { --mdc-icon-size: 14px; }
    .stepper button {
      width: 30px; height: 30px; border: none; border-radius: 8px; cursor: pointer;
      background: var(--secondary-background-color, #f1f1f1); color: var(--primary-text-color);
      display: flex; align-items: center; justify-content: center; --mdc-icon-size: 18px;
    }
    .stepper button:active { transform: scale(0.94); }
    .unavailable { color: var(--secondary-text-color, #888); font-size: 13px; padding: 6px 0; }
  `,t([ut({attribute:!1})],yt.prototype,"hass",void 0),t([mt()],yt.prototype,"_config",void 0),t([mt()],yt.prototype,"_tipShow",void 0),yt=t([lt("band-card")],yt);let bt=class extends ct{setConfig(t){if(!t||!Array.isArray(t.columns)||!Array.isArray(t.rows))throw new Error("matrix-card: 'columns' and 'rows' arrays are required");this._config=t}getCardSize(){return 1+(this._config?.rows.length??0)}_cell(t){const e=this.hass?.states[t];if(!e||"unavailable"===e.state||"unknown"===e.state)return{txt:"—",avail:!1};const i=e.attributes?.unit_of_measurement||"",s=Number(e.state);return{txt:`${isFinite(s)?Math.abs(s)<100?s.toFixed(1):String(Math.round(s)):e.state}${i}`,avail:!0}}render(){if(!this._config||!this.hass)return W;const t=this._config,e=t.column_icons||[],i=t.column_colors||[],s=`minmax(56px, 1fr) repeat(${t.columns.length}, minmax(46px, max-content))`;return F`
      <ha-card>
        ${t.title?F`<div class="title">${t.title}</div>`:W}
        <div class="grid" style="grid-template-columns:${s}">
          <div class="hcell"></div>
          ${t.columns.map((t,s)=>F`<div class="hcell" style="--c:${$t(i[s])}">
              ${e[s]?F`<ha-icon icon=${e[s]}></ha-icon>`:W}<span>${t}</span>
            </div>`)}
          ${t.rows.map((t,e)=>{const i=(t.entities||[]).map(t=>this._cell(t)),s=i.every(t=>t.avail);return F`
              <div class="label ${e>0?"sep":""} ${s?"":"dim"}">
                ${t.icon?F`<ha-icon icon=${t.icon}></ha-icon>`:W}<span class="nm">${t.name||""}</span>
              </div>
              ${i.map(t=>F`<div class="v ${e>0?"sep":""} ${t.avail?"":"dim"}">${t.txt}</div>`)}
            `})}
        </div>
      </ha-card>
    `}};bt.styles=a`
    ha-card { padding: var(--mush-spacing, 12px); }
    .title {
      font-size: var(--mush-card-primary-font-size, 15px); font-weight: 500;
      color: var(--mush-card-primary-color, var(--primary-text-color)); margin: 2px 2px 12px;
    }
    .grid { display: grid; align-items: center; column-gap: 12px; }
    .hcell {
      font-size: 11px; letter-spacing: 0.04em; text-transform: uppercase; color: var(--c, var(--secondary-text-color));
      display: flex; align-items: center; justify-content: flex-end; gap: 4px; padding: 0 2px 8px; white-space: nowrap;
    }
    .hcell ha-icon { --mdc-icon-size: 15px; color: var(--c, var(--secondary-text-color)); }
    .label { display: flex; align-items: center; gap: 10px; min-width: 0; padding: 10px 2px; }
    .label ha-icon { --mdc-icon-size: 21px; color: var(--secondary-text-color); flex: 0 0 auto; }
    .nm { font-size: 14px; color: var(--primary-text-color); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .v {
      font-size: 14px; color: var(--primary-text-color); text-align: right;
      font-variant-numeric: tabular-nums; padding: 10px 2px; white-space: nowrap;
    }
    .sep { border-top: 0.5px solid var(--divider-color, rgba(255, 255, 255, 0.12)); }
    .dim { opacity: 0.4; }
  `,t([ut({attribute:!1})],bt.prototype,"hass",void 0),t([mt()],bt.prototype,"_config",void 0),bt=t([lt("matrix-card")],bt);window.customCards=window.customCards||[],window.customCards.push({type:"band-card",name:"Band Card",description:"Dual-thumb card for hysteresis bands, day/night value pairs, and time windows.",preview:!1},{type:"matrix-card",name:"Matrix Card",description:"Aligned, mushroom-styled grid of entities by row and column.",preview:!1}),console.info("%c BAND-CARDS %c v1.0.0 ","background:#1D9E75;color:#fff;border-radius:3px 0 0 3px","background:#444;color:#fff;border-radius:0 3px 3px 0");export{yt as BandCard,bt as MatrixCard};
