!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react"));else if("function"==typeof define&&define.amd)define(["react"],t);else{var r="object"==typeof exports?t(require("react")):t(e.react);for(var i in r)("object"==typeof exports?exports:e)[i]=r[i]}}(self,(e=>(()=>{"use strict";var t={29:function(e,t,r){var i=this&&this.__createBinding||(Object.create?function(e,t,r,i){void 0===i&&(i=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,i,n)}:function(e,t,r,i){void 0===i&&(i=r),e[i]=t[r]}),n=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||i(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),n(r(224),t)},224:function(e,t,r){var i=this&&this.__createBinding||(Object.create?function(e,t,r,i){void 0===i&&(i=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,i,n)}:function(e,t,r,i){void 0===i&&(i=r),e[i]=t[r]}),n=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||i(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),n(r(379),t),n(r(312),t)},379:function(e,t,r){var i=this&&this.__createBinding||(Object.create?function(e,t,r,i){void 0===i&&(i=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,i,n)}:function(e,t,r,i){void 0===i&&(i=r),e[i]=t[r]}),n=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||i(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),n(r(259),t),n(r(856),t)},259:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Subscription=void 0,t.Subscription=class{constructor(e){this.events=[],this.initEvents=e=>{this.events.forEach((t=>t(e)))},this.setState=e=>{const t=Object.assign(Object.assign({},this.state),e);this.initEvents(t)},this.getState=()=>this.state,this.listen=e=>{this.events.push(e)},this.unlisten=e=>{this.events.some((t=>t===e))&&(this.events=this.events.filter((t=>t!==e)))},this.state=e}}},856:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useGlobalStore=void 0;const i=r(156),n=r(379),s={};window.store=s;const o=(e,t)=>{if(!t)return new n.Subscription(e);if(s[Symbol.for(t)])return s[Symbol.for(t)];{const r=new n.Subscription(e),i=Symbol.for(t);return s[i]=r,r}};t.useGlobalStore=e=>{const{namespace:t,initState:r}=e,n=o(r,t),[s,c]=(0,i.useState)(n.getState());return(0,i.useEffect)((()=>(n.listen(c),()=>{n.unlisten(c)})),[]),[s,n.setState]}},312:function(e,t,r){var i=this&&this.__createBinding||(Object.create?function(e,t,r,i){void 0===i&&(i=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,i,n)}:function(e,t,r,i){void 0===i&&(i=r),e[i]=t[r]}),n=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||i(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),n(r(941),t),n(r(785),t)},941:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SubscriptionProxy=void 0,t.SubscriptionProxy=class{constructor(e){this.events=[],this.initEvents=(e,t)=>{this.events.filter((t=>t.type===e)).forEach((e=>e.handler(t)))},this.setState=(e,t)=>{Reflect.set(this.state,e,t)},this.getState=e=>this.state[e],this.listen=(e,t)=>{this.events.some((e=>e.handler===t))||this.events.push({type:e,handler:t})},this.unlisten=(e,t)=>{this.events.some((e=>e.handler===t))&&(this.events=this.events.filter((e=>e.handler!==t)))},this.state=new Proxy(e,{set:(e,t,r)=>(Reflect.set(e,t,r),this.initEvents(t,r),!0)})}}},785:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useProxyStore=void 0;const i=r(156);t.useProxyStore=(e,t)=>{const[r,n]=(0,i.useState)(e.getState(t)),s=(0,i.useCallback)((r=>{e.setState(t,r)}),[t,e]);return(0,i.useEffect)((()=>(e.listen(t,n),()=>{e.unlisten(t,n)})),[t,e,e.setState]),[r,s]}},156:t=>{t.exports=e}},r={};return function e(i){var n=r[i];if(void 0!==n)return n.exports;var s=r[i]={exports:{}};return t[i].call(s.exports,s,s.exports,e),s.exports}(29)})()));