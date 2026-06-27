function t(t,e,i,s){var r,n=arguments.length,o=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(o=(n<3?r(o):n>3?r(e,i,o):r(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),r=new WeakMap;let n=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&r.set(e,t))}return t}toString(){return this.cssText}};const o=t=>new n("string"==typeof t?t:t+"",void 0,s),a=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return o(e)})(t):t,{is:h,defineProperty:c,getOwnPropertyDescriptor:l,getOwnPropertyNames:d,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,_=globalThis,m=_.trustedTypes,f=m?m.emptyScript:"",$=_.reactiveElementPolyfillSupport,g=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},b=(t,e)=>!h(t,e),v={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:b};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),_.litPropertyMetadata??=new WeakMap;let w=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=v){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&c(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:r}=l(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const n=s?.call(this);r?.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??v}static _$Ei(){if(this.hasOwnProperty(g("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(g("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(g("properties"))){const t=this.properties,e=[...d(t),...p(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{if(i)t.adoptedStyleSheets=s.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of s){const s=document.createElement("style"),r=e.litNonce;void 0!==r&&s.setAttribute("nonce",r),s.textContent=i.cssText,t.appendChild(s)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:y).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=s;const n=r.fromAttribute(e,t.type);this[s]=n??this._$Ej?.get(s)??n,this._$Em=null}}requestUpdate(t,e,i,s=!1,r){if(void 0!==t){const n=this.constructor;if(!1===s&&(r=this[t]),i??=n.getPropertyOptions(t),!((i.hasChanged??b)(r,e)||i.useDefault&&i.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:r},n){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==r||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[g("elementProperties")]=new Map,w[g("finalized")]=new Map,$?.({ReactiveElement:w}),(_.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const x=globalThis,A=t=>t,S=x.trustedTypes,E=S?S.createPolicy("lit-html",{createHTML:t=>t}):void 0,k="$lit$",M=`lit$${Math.random().toFixed(9).slice(2)}$`,C="?"+M,N=`<${C}>`,P=document,T=()=>P.createComment(""),O=t=>null===t||"object"!=typeof t&&"function"!=typeof t,U=Array.isArray,R="[ \t\n\f\r]",z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,H=/-->/g,D=/>/g,B=RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),I=/'/g,L=/"/g,j=/^(?:script|style|textarea|title)$/i,F=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),q=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),W=new WeakMap,K=P.createTreeWalker(P,129);function X(t,e){if(!U(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}const J=(t,e)=>{const i=t.length-1,s=[];let r,n=2===e?"<svg>":3===e?"<math>":"",o=z;for(let e=0;e<i;e++){const i=t[e];let a,h,c=-1,l=0;for(;l<i.length&&(o.lastIndex=l,h=o.exec(i),null!==h);)l=o.lastIndex,o===z?"!--"===h[1]?o=H:void 0!==h[1]?o=D:void 0!==h[2]?(j.test(h[2])&&(r=RegExp("</"+h[2],"g")),o=B):void 0!==h[3]&&(o=B):o===B?">"===h[0]?(o=r??z,c=-1):void 0===h[1]?c=-2:(c=o.lastIndex-h[2].length,a=h[1],o=void 0===h[3]?B:'"'===h[3]?L:I):o===L||o===I?o=B:o===H||o===D?o=z:(o=B,r=void 0);const d=o===B&&t[e+1].startsWith("/>")?" ":"";n+=o===z?i+N:c>=0?(s.push(a),i.slice(0,c)+k+i.slice(c)+M+d):i+M+(-2===c?e:d)}return[X(t,n+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class Z{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,n=0;const o=t.length-1,a=this.parts,[h,c]=J(t,e);if(this.el=Z.createElement(h,i),K.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=K.nextNode())&&a.length<o;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(k)){const e=c[n++],i=s.getAttribute(t).split(M),o=/([.?@])?(.*)/.exec(e);a.push({type:1,index:r,name:o[2],strings:i,ctor:"."===o[1]?et:"?"===o[1]?it:"@"===o[1]?st:tt}),s.removeAttribute(t)}else t.startsWith(M)&&(a.push({type:6,index:r}),s.removeAttribute(t));if(j.test(s.tagName)){const t=s.textContent.split(M),e=t.length-1;if(e>0){s.textContent=S?S.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],T()),K.nextNode(),a.push({type:2,index:++r});s.append(t[e],T())}}}else if(8===s.nodeType)if(s.data===C)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(M,t+1));)a.push({type:7,index:r}),t+=M.length-1}r++}}static createElement(t,e){const i=P.createElement("template");return i.innerHTML=t,i}}function G(t,e,i=t,s){if(e===q)return e;let r=void 0!==s?i._$Co?.[s]:i._$Cl;const n=O(e)?void 0:e._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),void 0===n?r=void 0:(r=new n(t),r._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=r:i._$Cl=r),void 0!==r&&(e=G(t,r._$AS(t,e.values),r,s)),e}class Q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??P).importNode(e,!0);K.currentNode=s;let r=K.nextNode(),n=0,o=0,a=i[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new Y(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new rt(r,this,t)),this._$AV.push(e),a=i[++o]}n!==a?.index&&(r=K.nextNode(),n++)}return K.currentNode=P,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Y{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=G(this,t,e),O(t)?t===V||null==t||""===t?(this._$AH!==V&&this._$AR(),this._$AH=V):t!==this._$AH&&t!==q&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>U(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==V&&O(this._$AH)?this._$AA.nextSibling.data=t:this.T(P.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Z.createElement(X(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new Q(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=W.get(t.strings);return void 0===e&&W.set(t.strings,e=new Z(t)),e}k(t){U(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new Y(this.O(T()),this.O(T()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=A(t).nextSibling;A(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=V,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=V}_$AI(t,e=this,i,s){const r=this.strings;let n=!1;if(void 0===r)t=G(this,t,e,0),n=!O(t)||t!==this._$AH&&t!==q,n&&(this._$AH=t);else{const s=t;let o,a;for(t=r[0],o=0;o<r.length-1;o++)a=G(this,s[i+o],e,o),a===q&&(a=this._$AH[o]),n||=!O(a)||a!==this._$AH[o],a===V?t=V:t!==V&&(t+=(a??"")+r[o+1]),this._$AH[o]=a}n&&!s&&this.j(t)}j(t){t===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===V?void 0:t}}class it extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==V)}}class st extends tt{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=G(this,t,e,0)??V)===q)return;const i=this._$AH,s=t===V&&i!==V||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==V&&(i===V||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class rt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){G(this,t)}}const nt=x.litHtmlPolyfillSupport;nt?.(Z,Y),(x.litHtmlVersions??=[]).push("3.3.3");const ot=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class at extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let r=s._$litPart$;if(void 0===r){const t=i?.renderBefore??null;s._$litPart$=r=new Y(e.insertBefore(T(),t),t,void 0,i??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return q}}at._$litElement$=!0,at.finalized=!0,ot.litElementHydrateSupport?.({LitElement:at});const ht=ot.litElementPolyfillSupport;ht?.({LitElement:at}),(ot.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ct={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:b},lt=(t=ct,e,i)=>{const{kind:s,metadata:r}=i;let n=globalThis.litPropertyMetadata.get(r);if(void 0===n&&globalThis.litPropertyMetadata.set(r,n=new Map),"setter"===s&&((t=Object.create(t)).wrapped=!0),n.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const r=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,r,t,!0,i)},init(e){return void 0!==e&&this.C(s,void 0,t,e),e}}}if("setter"===s){const{name:s}=i;return function(i){const r=this[s];e.call(this,i),this.requestUpdate(s,r,t,!0,i)}}throw Error("Unsupported decorator location: "+s)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function dt(t){return(e,i)=>"object"==typeof i?lt(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function pt(t){return dt({...t,state:!0,attribute:!1})}const ut={red:"#f44336",pink:"#e91e63",purple:"#9c27b0","deep-purple":"#673ab7",indigo:"#3f51b5",blue:"#2196f3","light-blue":"#03a9f4",cyan:"#00bcd4",teal:"#009688",green:"#4caf50","light-green":"#8bc34a",lime:"#cddc39",yellow:"#ffeb3b",amber:"#ffc107",orange:"#ff9800","deep-orange":"#ff5722",brown:"#795548",grey:"#9e9e9e","blue-grey":"#607d8b"},_t="#ffa726",mt="#7986cb";const ft={band:"mdi:arrow-expand-horizontal",daynight:"mdi:theme-light-dark"};let $t=class extends at{constructor(){super(...arguments),this._entA="",this._entB="",this._readonly=!1,this._interaction="drag",this._dragging=null,this._tipShow=!1}setConfig(t){if(!t||!t.mode)throw new Error("band-card: 'mode' is required (band | daynight)");if("band"===t.mode){if(!t.lower_entity||!t.upper_entity)throw new Error("band-card: band mode needs lower_entity and upper_entity")}else{if("daynight"!==t.mode)throw new Error(`band-card: unknown mode '${t.mode}'`);if(!t.day_entity||!t.night_entity)throw new Error("band-card: daynight mode needs day_entity and night_entity")}this._config=t,this._readonly=!!t.readonly,this._interaction=t.interaction||"drag",this._entA="band"===t.mode?t.lower_entity:t.day_entity,this._entB="band"===t.mode?t.upper_entity:t.night_entity,this._attrA="band"===t.mode?t.lower_attribute:t.day_attribute,this._attrB="band"===t.mode?t.upper_attribute:t.night_attribute}getCardSize(){return"steppers"===this._interaction?2:3}shouldUpdate(t){return!(this._dragging&&!t.has("_config")&&!t.has("_tipShow"))}_isTime(){return"time"===this._config.value_type||this._entA.startsWith("input_datetime.")}_parseTime(t){const e=/^(\d{1,2}):(\d{2})(?::(\d{2}))?$/.exec(t);return e?60*Number(e[1])+Number(e[2]):NaN}_parseFlexibleTime(t){if("number"==typeof t)return t;if("string"!=typeof t)return NaN;const e=t.trim(),i=/^(\d{1,2}):(\d{2})(?::\d{2})?\s*(AM|PM)?$/i.exec(e);if(i){let t=Number(i[1]);const e=i[3]?.toUpperCase();return"PM"===e&&t<12&&(t+=12),"AM"===e&&12===t&&(t=0),60*t+Number(i[2])}const s=new Date(e);return isNaN(s.getTime())?NaN:60*s.getHours()+s.getMinutes()}_value(t,e){const i=this.hass?.states[t];if(!i)return NaN;const s=e?i.attributes[e]:i.state;return null==s?NaN:this._isTime()?this._parseFlexibleTime(s):Number(s)}_attr(t,e,i){const s=this.hass?.states[t],r=s?.attributes?.[e];return null==r?i:Number(r)}_scale(){const t=this._config;if(this._isTime())return{min:0,max:1440,step:Number(t.step_minutes??15)};const e=this._attr(this._entA,"min",0),i=this._attr(this._entB,"min",0),s=this._attr(this._entA,"max",100),r=this._attr(this._entB,"max",100),n=this._attr(this._entA,"step",1),o=this._attr(this._entB,"step",1);return{min:null!=t.min?Number(t.min):Math.min(e,i),max:null!=t.max?Number(t.max):Math.max(s,r),step:null!=t.step?Number(t.step):Math.min(n,o)}}_val(t){const e=this.hass?.states[t];return e?"string"==typeof e.state&&/^\d{1,2}:\d{2}(:\d{2})?$/.test(e.state)?this._parseTime(e.state):Number(e.state):NaN}_unit(){if(this._isTime())return"";if(this._config.unit)return this._config.unit;const t=this.hass?.states[this._entA];return t?.attributes?.unit_of_measurement||""}_frac(t,e){return e.max===e.min?0:Math.max(0,Math.min(1,(t-e.min)/(e.max-e.min)))}_snap(t,e){const i=Math.round((t-e.min)/e.step)*e.step+e.min,s=Math.max(e.min,Math.min(e.max,i));return Number(s.toFixed(4))}_fmt(t){if(!isFinite(t))return"—";if(this._isTime()){const e=(Math.round(t)%1440+1440)%1440;return`${String(Math.floor(e/60)).padStart(2,"0")}:${String(e%60).padStart(2,"0")}`}const e=this._scale().step<1?1:0;return t.toFixed(e)}_accent(){return function(t){return t?ut[t]||t:"var(--primary-color, #2196f3)"}(this._config.color||this._config.icon_color)}_nightActive(){if("daynight"!==this._config.mode)return null;const t=this._config.is_night_entity||"binary_sensor.dewpoint_window_is_night",e=this.hass?.states[t];return e?"on"===e.state||"below_horizon"===e.state:null}_setValue(t,e){if(t&&isFinite(e)){if(t.startsWith("input_datetime.")){const i=(Math.round(e)%1440+1440)%1440,s=`${String(Math.floor(i/60)).padStart(2,"0")}:${String(i%60).padStart(2,"0")}:00`;return void this.hass.callService("input_datetime","set_datetime",{entity_id:t,time:s}).catch(e=>console.error("band-card: set_datetime FAILED",t,s,e))}this.hass.callService("input_number","set_value",{entity_id:t,value:e}).catch(i=>console.error("band-card: set_value FAILED",t,e,i))}else console.error("band-card: refusing to set",t,"to non-finite value",e)}_entFor(t){return"a"===t?this._entA:this._entB}_clampOrder(t,e){return"band"!==this._config.mode?e:"a"===t?Math.min(e,this._val(this._entB)):Math.max(e,this._val(this._entA))}_onStep(t,e){const i=this._scale(),s=this._clampOrder(t,this._snap(this._val(this._entFor(t))+e*i.step,i));this._setValue(this._entFor(t),s)}get _track(){return this.renderRoot.querySelector(".track")}_pointerValue(t){const e=this._scale(),i=this._track.getBoundingClientRect(),s=Math.max(0,Math.min(1,(t.clientX-i.left)/i.width));return this._snap(e.min+s*(e.max-e.min),e)}_onDown(t){t.preventDefault();const e=t.currentTarget,i=this._scale(),s=Math.abs(this._val(this._entA)-this._val(this._entB))<=i.step+1e-9,r=t.clientX,n=t.pointerId,o={which:e.dataset.which,resolved:!s};this._dragging=o.which;try{e.setPointerCapture(n)}catch{}e.style.zIndex="4";const a=t=>{if(t.pointerId===n){if(t.preventDefault(),!o.resolved){const e=t.clientX-r;if(Math.abs(e)<3)return;o.which=e>0?"b":"a",o.resolved=!0,this._dragging=o.which;const i=this.renderRoot.querySelector(`.thumb-${o.which}`);i&&(i.style.zIndex="5")}this._onMove(o.which,t)}},h=t=>{if(t.pointerId===n){window.removeEventListener("pointermove",a),window.removeEventListener("pointerup",h),window.removeEventListener("pointercancel",h);try{e.releasePointerCapture(n)}catch{}this.renderRoot.querySelectorAll(".thumb").forEach(t=>t.style.zIndex=""),this._dragging=null,o.resolved?this._setValue(this._entFor(o.which),this._clampOrder(o.which,this._pointerValue(t))):this.requestUpdate()}};window.addEventListener("pointermove",a,{passive:!1}),window.addEventListener("pointerup",h),window.addEventListener("pointercancel",h)}_onMove(t,e){const i=this._clampOrder(t,this._pointerValue(e)),s=this._scale(),r=100*this._frac(i,s),n=this.renderRoot.querySelector(`.thumb-${t}`),o=this.renderRoot.querySelector(`.lbl-${t}`),a=this._unit();if(n&&(n.style.left=`${r}%`),o)if(o.style.left=`${r}%`,"daynight"===this._config.mode){const e="a"===t?"mdi:weather-sunny":"mdi:weather-night",s="a"===t?_t:mt;o.innerHTML=`<ha-icon icon="${e}" style="--mdc-icon-size:13px;color:${s}"></ha-icon><span>${this._fmt(i)}${a}</span>`}else o.innerHTML=`<span>${this._fmt(i)}${a}</span>`;if("band"===this._config.mode){const e=100*this._frac(this._val(this._entFor("a"===t?"b":"a")),s),i=Math.min(r,e),n=Math.max(r,e),o=this.renderRoot.querySelector(".fill");o&&(o.style.left=`${i}%`,o.style.width=n-i+"%")}}_toggleTip(){this._tipShow=!0,clearTimeout(this._tipTimer),this._tipTimer=window.setTimeout(()=>this._tipShow=!1,2500)}_moreInfo(t){t&&function(t,e){t.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0}))}(this,t)}_onKey(t,e){!e||"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),this._moreInfo(e))}render(){if(!this._config||!this.hass)return V;const t=this._config,e=this.hass.states[this._entA],i=this.hass.states[this._entB],s=t.icon||(this._isTime()?"mdi:clock-outline":ft[t.mode]),r=this._accent(),n=!e||!i||"unavailable"===e.state||"unavailable"===i.state,o=this._scale(),a=this._value(this._entA,this._attrA),h=this._value(this._entB,this._attrB),c=this._unit(),l=this._nightActive(),d=this._readonly||"steppers"!==this._interaction,p=!this._readonly&&"drag"!==this._interaction,u=t.current_entity||this._entA;return F`
      <ha-card style="--accent:${r}">
        <div
          class="row clickable"
          role="button"
          tabindex="0"
          @click=${()=>this._moreInfo(u)}
          @keydown=${t=>this._onKey(t,u)}
        >
          <div class="shape"><ha-icon .icon=${s}></ha-icon></div>
          <div class="text">
            <span class="primary">${t.name||""}</span>
            ${n?V:this._renderSecondary(l,c)}
          </div>
        </div>
        ${n?F`<div class="unavailable">Entities unavailable</div>`:F`
              ${d?this._renderTrack(o,a,h,c,l):V}
              ${p?this._renderSteppers(a,h,c):V}
            `}
      </ha-card>
    `}_renderSecondary(t,e){const i=this._config;if("daynight"===i.mode&&null!==t)return t?F`<span class="secondary"><ha-icon icon="mdi:weather-night" style="color:${mt}"></ha-icon><span>Night active</span></span>`:F`<span class="secondary"><ha-icon icon="mdi:weather-sunny" style="color:${_t}"></ha-icon><span>Day active</span></span>`;if(i.current_entity){const t=this._value(i.current_entity,i.current_attribute);return F`<span class="secondary">${isFinite(t)?`Now ${this._fmt(t)}${e}`:""}</span>`}return V}_renderTrack(t,e,i,s,r){const n=this._config,o=100*this._frac(e,t),a=100*this._frac(i,t),h="band"===n.mode,c=!1===r,l=!0===r,d=h?F`<span>${this._fmt(e)}${s}</span>`:F`<ha-icon class="sun" icon="mdi:weather-sunny"></ha-icon><span>${this._fmt(e)}${s}</span>`,p=h?F`<span>${this._fmt(i)}${s}</span>`:F`<ha-icon class="moon" icon="mdi:weather-night"></ha-icon><span>${this._fmt(i)}${s}</span>`;return F`
      <div class="track-wrap">
        <div class="track">
          <div class="rail"></div>
          ${h?F`<div class="fill" style="left:${Math.min(o,a)}%;width:${Math.abs(a-o)}%"></div>`:V}
          ${this._renderMarker(t,h?Math.min(e,i):null,h?Math.max(e,i):null)}
          <div
            class="lbl lbl-a clickable ${c?"active":""}"
            style="left:${o}%"
            role="button"
            tabindex="0"
            @click=${()=>this._moreInfo(this._entA)}
            @keydown=${t=>this._onKey(t,this._entA)}
          >${d}</div>
          <div
            class="lbl lbl-b clickable ${l?"active":""}"
            style="left:${a}%"
            role="button"
            tabindex="0"
            @click=${()=>this._moreInfo(this._entB)}
            @keydown=${t=>this._onKey(t,this._entB)}
          >${p}</div>
          ${this._readonly?V:F`
                <div
                  class="thumb thumb-a ${l?"dim":""} ${c?"ring":""}"
                  data-which="a"
                  style="left:${o}%"
                  @pointerdown=${this._onDown}
                ></div>
                <div
                  class="thumb thumb-b ${c?"dim":""} ${l?"ring":""}"
                  data-which="b"
                  style="left:${a}%"
                  @pointerdown=${this._onDown}
                ></div>
              `}
        </div>
      </div>
    `}_renderMarker(t,e,i){const s=this._config;if(!s.current_entity)return V;const r=this._value(s.current_entity,s.current_attribute);if(!isFinite(r))return V;let n="";null!==e&&null!==i&&(n=r>=e&&r<=i?"inside":"outside");const o=this.hass.states[s.current_entity],a=o?.attributes?.friendly_name||"Current";return F`
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
        <span
          class="v clickable"
          role="button"
          tabindex="0"
          @click=${()=>this._moreInfo(this._entFor(t))}
          @keydown=${e=>this._onKey(e,this._entFor(t))}
          >${s?F`<ha-icon icon=${s} style="color:${r}"></ha-icon>`:V}<span
            >${this._fmt(e)}${i}</span
          ></span
        >
        <button @click=${()=>this._onStep(t,1)}><ha-icon icon="mdi:plus"></ha-icon></button>
      </div>
    `;return F`
      <div class="steppers">
        ${r("a",t,s?"mdi:weather-sunny":void 0,_t)}
        ${r("b",e,s?"mdi:weather-night":void 0,mt)}
      </div>
    `}};$t.styles=((t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new n(i,t,s)})`
    ha-card { padding: var(--mush-spacing, 12px); }
    .row { display: flex; align-items: center; gap: 12px; }
    .clickable { cursor: pointer; }
    .row.clickable { border-radius: 12px; outline-offset: 2px; }
    .row.clickable:focus-visible,
    .lbl.clickable:focus-visible,
    .stepper .v.clickable:focus-visible { outline: 2px solid var(--accent); }
    .lbl.clickable { border-radius: 6px; }
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
    .lbl ha-icon.sun { color: ${o(_t)}; }
    .lbl ha-icon.moon { color: ${o(mt)}; }
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
  `,t([dt({attribute:!1})],$t.prototype,"hass",void 0),t([pt()],$t.prototype,"_config",void 0),t([pt()],$t.prototype,"_tipShow",void 0),$t=t([(t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)})("band-card")],$t);window.customCards=window.customCards||[],window.customCards.push({type:"band-card",name:"Band Card",description:"Dual-thumb card for hysteresis bands, day/night value pairs, and time windows.",preview:!1}),console.info("%c BAND-CARD %c v1.1.0 ","background:#1D9E75;color:#fff;border-radius:3px 0 0 3px","background:#444;color:#fff;border-radius:0 3px 3px 0");export{$t as BandCard};
