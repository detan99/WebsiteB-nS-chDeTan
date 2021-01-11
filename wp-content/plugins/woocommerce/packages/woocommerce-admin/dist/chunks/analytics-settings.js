(window.__wcAdmin_webpackJsonp=window.__wcAdmin_webpackJsonp||[]).push([[24],{153:function(e,t,r){"use strict";function n(e){return function(){return e}}var o=function(){};o.thatReturns=n,o.thatReturnsFalse=n(!1),o.thatReturnsTrue=n(!0),o.thatReturnsNull=n(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},210:function(e,t,r){"use strict";var n=r(6),o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,a=r(153),c=r(211),i=r(212),s="function"==typeof Symbol&&Symbol.iterator;function l(e,t){return e&&"object"==typeof e&&null!=e.key?(r=e.key,n={"=":"=0",":":"=2"},"$"+(""+r).replace(/[=:]/g,(function(e){return n[e]}))):t.toString(36);var r,n}function u(e,t,r,n){var a,i=typeof e;if("undefined"!==i&&"boolean"!==i||(e=null),null===e||"string"===i||"number"===i||"object"===i&&e.$$typeof===o)return r(n,e,""===t?"."+l(e,0):t),1;var m=0,p=""===t?".":t+":";if(Array.isArray(e))for(var d=0;d<e.length;d++)m+=u(a=e[d],p+l(a,d),r,n);else{var b=function(e){var t=e&&(s&&e[s]||e["@@iterator"]);if("function"==typeof t)return t}(e);if(b){0;for(var f,h=b.call(e),v=0;!(f=h.next()).done;)m+=u(a=f.value,p+l(a,v++),r,n)}else if("object"===i){0;var O=""+e;c(!1,"Objects are not valid as a React child (found: %s).%s","[object Object]"===O?"object with keys {"+Object.keys(e).join(", ")+"}":O,"")}}return m}var m=/\/+/g;function p(e){return(""+e).replace(m,"$&/")}var d,b,f=h,h=function(e){if(this.instancePool.length){var t=this.instancePool.pop();return this.call(t,e),t}return new this(e)},v=function(e){c(e instanceof this,"Trying to release an instance into a pool of a different type."),e.destructor(),this.instancePool.length<this.poolSize&&this.instancePool.push(e)};function O(e,t,r,n){this.result=e,this.keyPrefix=t,this.func=r,this.context=n,this.count=0}function g(e,t,r){var o,c,i=e.result,s=e.keyPrefix,l=e.func,u=e.context,m=l.call(u,t,e.count++);Array.isArray(m)?j(m,i,r,a.thatReturnsArgument):null!=m&&(n.isValidElement(m)&&(o=m,c=s+(!m.key||t&&t.key===m.key?"":p(m.key)+"/")+r,m=n.cloneElement(o,{key:c},void 0!==o.props?o.props.children:void 0)),i.push(m))}function j(e,t,r,n,o){var a="";null!=r&&(a=p(r)+"/");var c=O.getPooled(t,a,n,o);!function(e,t,r){null==e||u(e,"",t,r)}(e,g,c),O.release(c)}O.prototype.destructor=function(){this.result=null,this.keyPrefix=null,this.func=null,this.context=null,this.count=0},d=function(e,t,r,n){if(this.instancePool.length){var o=this.instancePool.pop();return this.call(o,e,t,r,n),o}return new this(e,t,r,n)},(b=O).instancePool=[],b.getPooled=d||f,b.poolSize||(b.poolSize=10),b.release=v;e.exports=function(e){if("object"!=typeof e||!e||Array.isArray(e))return i(!1,"React.addons.createFragment only accepts a single object. Got: %s",e),e;if(n.isValidElement(e))return i(!1,"React.addons.createFragment does not accept a ReactElement without a wrapper object."),e;c(1!==e.nodeType,"React.addons.createFragment(...): Encountered an invalid child; DOM elements are not valid children of React components.");var t=[];for(var r in e)j(e[r],t,r,a.thatReturnsArgument);return t}},211:function(e,t,r){"use strict";e.exports=function(e,t,r,n,o,a,c,i){if(!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[r,n,o,a,c,i],u=0;(s=new Error(t.replace(/%s/g,(function(){return l[u++]})))).name="Invariant Violation"}throw s.framesToPop=1,s}}},212:function(e,t,r){"use strict";var n=r(153);e.exports=n},213:function(e,t,r){"use strict";function n(e){return e.match(/^\{\{\//)?{type:"componentClose",value:e.replace(/\W/g,"")}:e.match(/\/\}\}$/)?{type:"componentSelfClosing",value:e.replace(/\W/g,"")}:e.match(/^\{\{/)?{type:"componentOpen",value:e.replace(/\W/g,"")}:{type:"string",value:e}}e.exports=function(e){return e.split(/(\{\{\/?\s*\w+\s*\/?\}\})/g).map(n)}},42:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=i(r(6)),a=i(r(210)),c=i(r(213));function i(e){return e&&e.__esModule?e:{default:e}}var s=void 0;function l(e,t){var r,c,i,u,m,p,d,b,f=[],h={};for(p=0;p<e.length;p++)if("string"!==(m=e[p]).type){if(!t.hasOwnProperty(m.value)||void 0===t[m.value])throw new Error("Invalid interpolation, missing component node: `"+m.value+"`");if("object"!==n(t[m.value]))throw new Error("Invalid interpolation, component node must be a ReactElement or null: `"+m.value+"`","\n> "+s);if("componentClose"===m.type)throw new Error("Missing opening component token: `"+m.value+"`");if("componentOpen"===m.type){r=t[m.value],i=p;break}f.push(t[m.value])}else f.push(m.value);return r&&(u=function(e,t){var r,n,o=t[e],a=0;for(n=e+1;n<t.length;n++)if((r=t[n]).value===o.value){if("componentOpen"===r.type){a++;continue}if("componentClose"===r.type){if(0===a)return n;a--}}throw new Error("Missing closing component token `"+o.value+"`")}(i,e),d=l(e.slice(i+1,u),t),c=o.default.cloneElement(r,{},d),f.push(c),u<e.length-1&&(b=l(e.slice(u+1),t),f=f.concat(b))),1===f.length?f[0]:(f.forEach((function(e,t){e&&(h["interpolation-child-"+t]=e)})),(0,a.default)(h))}t.default=function(e){var t=e.mixedString,r=e.components,o=e.throwErrors;if(s=t,!r)return t;if("object"!==(void 0===r?"undefined":n(r))){if(o)throw new Error("Interpolation Error: unable to process `"+t+"` because components is not an object");return t}var a=(0,c.default)(t);try{return l(a,r)}catch(e){if(o)throw new Error("Interpolation Error: unable to process `"+t+"` because of error `"+e.message+"`");return t}}},439:function(e,t,r){"use strict";var n=r(8),o=r(12),a=r(4),c=r.n(a),i=r(0);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.a=function(e){var t=e.as,r=void 0===t?"div":t,a=e.className,l=Object(o.a)(e,["as","className"]);return function(e){var t=e.as,r=void 0===t?"div":t,n=Object(o.a)(e,["as"]);return"function"==typeof n.children?n.children(n):Object(i.createElement)(r,n)}(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({as:r,className:c()("components-visually-hidden",a)},l))}},738:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(0);function o(){return Object(n.createElement)("span",{className:"components-spinner"})}},767:function(e,t,r){"use strict";var n=r(0),o=r(4),a=r.n(o),c=r(439);function i(e){var t=e.id,r=e.label,o=e.hideLabelFromVision,s=e.help,l=e.className,u=e.children;return Object(n.createElement)("div",{className:a()("components-base-control",l)},Object(n.createElement)("div",{className:"components-base-control__field"},r&&t&&(o?Object(n.createElement)(c.a,{as:"label",htmlFor:t},r):Object(n.createElement)("label",{className:"components-base-control__label",htmlFor:t},r)),r&&!t&&(o?Object(n.createElement)(c.a,{as:"label"},r):Object(n.createElement)(i.VisualLabel,null,r)),u),!!s&&Object(n.createElement)("p",{id:t+"__help",className:"components-base-control__help"},s))}i.VisualLabel=function(e){var t=e.className,r=e.children;return t=a()("components-base-control__label",t),Object(n.createElement)("span",{className:t},r)},t.a=i},779:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r(7),o=r(12),a=r(0),c=r(300),i=r(575),s=r(759),l=r(767);function u(e){var t=e.label,r=e.className,m=e.heading,p=e.checked,d=e.help,b=e.onChange,f=Object(o.a)(e,["label","className","heading","checked","help","onChange"]),h=Object(c.a)(u),v="inspector-checkbox-control-".concat(h);return Object(a.createElement)(l.a,{label:m,id:v,help:d,className:r},Object(a.createElement)("span",{className:"components-checkbox-control__input-container"},Object(a.createElement)("input",Object(n.a)({id:v,className:"components-checkbox-control__input",type:"checkbox",value:"1",onChange:function(e){return b(e.target.checked)},checked:p,"aria-describedby":d?v+"__help":void 0},f)),p?Object(a.createElement)(i.a,{icon:s.a,className:"components-checkbox-control__checked",role:"presentation"}):null),Object(a.createElement)("label",{className:"components-checkbox-control__label",htmlFor:v},t))}},793:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return g}));var n=r(0),o=r(3),a=r(55),c=r(42),i=r.n(c),s=r(36),l=r(87),u=r(77),m=r(35),p=r(40),d=function(e){var t=e.value,r=e.onChange,o=Object(m.useSettings)("wc_admin",["wcAdminSettings"]).wcAdminSettings.woocommerce_default_date_range,a=Object(l.parse)(t.replace(/&amp;/g,"&")),c=Object(p.getDateParamsFromQuery)(a,o),i=c.period,s=c.compare,d=c.before,b=c.after,f=Object(p.getCurrentDates)(a,o),h={period:i,compare:s,before:d,after:b,primaryDate:f.primary,secondaryDate:f.secondary};return Object(n.createElement)(u.DateRangeFilterPicker,{query:a,onRangeSelect:function(e){r({target:{name:"woocommerce_default_date_range",value:Object(l.stringify)(e)}})},dateQuery:h,isoDateFormat:p.isoDateFormat})},b=["processing","on-hold"],f=["completed","processing","refunded","cancelled","failed","pending","on-hold"],h=Object.keys(s.d).filter((function(e){return"refunded"!==e})).map((function(e){return{value:e,label:s.d[e],description:Object(o.sprintf)(Object(o.__)("Exclude the %s status from reports",'woocommerce'),s.d[e])}})),v=Object(s.g)("unregisteredOrderStatuses",{}),O=[{key:"defaultStatuses",options:h.filter((function(e){return f.includes(e.value)}))},{key:"customStatuses",label:Object(o.__)("Custom Statuses",'woocommerce'),options:h.filter((function(e){return!f.includes(e.value)}))},{key:"unregisteredStatuses",label:Object(o.__)("Unregistered Statuses",'woocommerce'),options:Object.keys(v).map((function(e){return{value:e,label:e,description:Object(o.sprintf)(Object(o.__)("Exclude the %s status from reports",'woocommerce'),e)}}))}],g=Object(a.applyFilters)("woocommerce_admin_analytics_settings",{woocommerce_excluded_report_order_statuses:{label:Object(o.__)("Excluded Statuses:",'woocommerce'),inputType:"checkboxGroup",options:O,helpText:i()({mixedString:Object(o.__)("Orders with these statuses are excluded from the totals in your reports. The {{strong}}Refunded{{/strong}} status can not be excluded.",'woocommerce'),components:{strong:Object(n.createElement)("strong",null)}}),defaultValue:["pending","cancelled","failed"]},woocommerce_actionable_order_statuses:{label:Object(o.__)("Actionable Statuses:",'woocommerce'),inputType:"checkboxGroup",options:O,helpText:Object(o.__)("Orders with these statuses require action on behalf of the store admin. These orders will show up in the Home Screen - Orders task.",'woocommerce'),defaultValue:b},woocommerce_default_date_range:{name:"woocommerce_default_date_range",label:Object(o.__)("Default Date Range:",'woocommerce'),inputType:"component",component:d,helpText:Object(o.__)("Select a default date range. When no range is selected, reports will be viewed by the default date range.",'woocommerce'),defaultValue:"period=month&compare=previous_year"}})},802:function(e,t,r){},803:function(e,t,r){},804:function(e,t,r){},850:function(e,t,r){"use strict";r.r(t);var n=r(38),o=r.n(n),a=r(30),c=r.n(a),i=r(5),s=r.n(i),l=r(0),u=r(3),m=r(72),p=r(277),d=r(20),b=r(77),f=r(35),h=r(64),v=(r(802),r(793)),O=r(17),g=r.n(O),j=r(15),y=r.n(j),_=r(11),w=r.n(_),S=r(18),E=r.n(S),k=r(19),I=r.n(k),N=r(9),P=r.n(N),C=r(779),T=r(1),R=r.n(T),D=r(2);r(803);function x(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=P()(e);if(t){var o=P()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return I()(this,r)}}var A=function(e){E()(r,e);var t=x(r);function r(e){var n;return g()(this,r),n=t.call(this,e),s()(w()(n),"renderInput",(function(){var e=n.props,t=e.handleChange,r=e.name,a=e.inputText,c=e.inputType,i=e.options,s=e.value,u=e.component,p=n.state.disabled;switch(c){case"checkboxGroup":return i.map((function(e){return e.options.length>0&&Object(l.createElement)("div",{className:"woocommerce-setting__options-group",key:e.key,"aria-labelledby":r+"-label"},e.label&&Object(l.createElement)("span",{className:"woocommerce-setting__options-group-label"},e.label),n.renderCheckboxOptions(e.options))}));case"checkbox":return n.renderCheckboxOptions(i);case"button":return Object(l.createElement)(m.a,{isSecondary:!0,onClick:n.handleInputCallback,disabled:p},a);case"component":var d=u;return Object(l.createElement)(d,o()({value:s,onChange:t},n.props));case"text":default:var b=Object(D.uniqueId)(r);return Object(l.createElement)("input",{id:b,type:"text",name:r,onChange:t,value:s,placeholder:a,disabled:p})}})),s()(w()(n),"handleInputCallback",(function(){var e=n.props,t=e.createNotice,r=e.callback;if("function"==typeof r)return new Promise((function(e,o){n.setState({disabled:!0}),r(e,o,t)})).then((function(){n.setState({disabled:!1})})).catch((function(){n.setState({disabled:!1})}))})),n.state={disabled:!1},n}return y()(r,[{key:"renderCheckboxOptions",value:function(e){var t=this.props,r=t.handleChange,n=t.name,o=t.value,a=this.state.disabled;return e.map((function(e){return Object(l.createElement)(C.a,{key:n+"-"+e.value,label:e.label,name:n,checked:o&&o.includes(e.value),onChange:function(t){return r({target:{checked:t,name:n,type:"checkbox",value:e.value}})},disabled:a})}))}},{key:"render",value:function(){var e=this.props,t=e.helpText,r=e.label,n=e.name;return Object(l.createElement)("div",{className:"woocommerce-setting"},Object(l.createElement)("div",{className:"woocommerce-setting__label",id:n+"-label"},r),Object(l.createElement)("div",{className:"woocommerce-setting__input"},this.renderInput(),t&&Object(l.createElement)("span",{className:"woocommerce-setting__help"},t)))}}]),r}(l.Component);A.propTypes={callback:R.a.func,handleChange:R.a.func.isRequired,helpText:R.a.oneOfType([R.a.string,R.a.array]),inputText:R.a.string,inputType:R.a.oneOf(["button","checkbox","checkboxGroup","text","component"]),label:R.a.string.isRequired,name:R.a.string.isRequired,options:R.a.arrayOf(R.a.shape({value:R.a.string,label:R.a.string,description:R.a.string,key:R.a.string,options:R.a.array})),value:R.a.oneOfType([R.a.string,R.a.array])};var F=Object(p.a)(Object(d.withDispatch)((function(e){return{createNotice:e("core/notices").createNotice}})))(A),M=r(7),V=r(21),z=r(22),L=r(13),Y=r(23),q=r(24),U=r(10),H=r(189),W=r(96);function B(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(U.a)(e);if(t){var o=Object(U.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(q.a)(this,r)}}var G=Object(W.a)((function(e){return function(t){Object(Y.a)(n,t);var r=B(n);function n(){var e;return Object(V.a)(this,n),(e=r.apply(this,arguments)).debouncedSpeak=Object(D.debounce)(e.speak.bind(Object(L.a)(e)),500),e}return Object(z.a)(n,[{key:"speak",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"polite";Object(H.a)(e,t)}},{key:"componentWillUnmount",value:function(){this.debouncedSpeak.cancel()}},{key:"render",value:function(){return Object(l.createElement)(e,Object(M.a)({},this.props,{speak:this.speak,debouncedSpeak:this.debouncedSpeak}))}}]),n}(l.Component)}),"withSpokenMessages"),$=r(16),Q=r.n($),J=function(e,t,r){var n={};if(r&&(n.skip_existing=!0),"all"!==t.label)if("custom"===t.label){var o=Q()().diff(Q()(t.date,e),"days",!0);n.days=Math.floor(o)}else n.days=parseInt(t.label,10);return n},K=r(37);var X=Object(p.a)([Object(d.withSelect)((function(e){var t=(0,e(f.IMPORT_STORE_NAME).getFormSettings)();return{selectedPeriod:t.period,skipChecked:t.skipPrevious}})),Object(d.withDispatch)((function(e){var t=e(f.IMPORT_STORE_NAME),r=t.updateImportation,n=t.setImportStarted;return{createNotice:e("core/notices").createNotice,setImportStarted:n,updateImportation:r}}))])((function(e){var t,r=e.clearStatusAndTotalsCache,n=e.createNotice,o=e.dateFormat,a=e.importDate,c=e.onImportStarted,i=e.selectedPeriod,s=e.stopImport,p=e.skipChecked,d=e.status,b=e.setImportStarted,f=e.updateImportation,v=function(){var e=Object(K.addQueryArgs)("/wc-analytics/reports/import",J(o,i,p)),t=Object(u.__)("There was a problem rebuilding your report data.",'woocommerce');g(e,t,!0),c()},O=function(){s();var e=Object(u.__)("There was a problem stopping your current import.",'woocommerce');g("/wc-analytics/reports/import/cancel",e)},g=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];f(e,r).then((function(e){"success"===e.status?n("success",e.message):(n("error",t),b(!1),s())})).catch((function(e){e&&e.message&&(n("error",e.message),b(!1),s())}))},j=function(){var e=Object(u.__)("There was a problem deleting your previous data.",'woocommerce');g("/wc-analytics/reports/import/delete",e),Object(h.recordEvent)("analytics_import_delete_previous"),b(!1)},y=function(){b(!1),r()};return Object(l.createElement)("div",{className:"woocommerce-settings__actions woocommerce-settings-historical-data__actions"},(t="ready"!==d,["initializing","customers","orders","finalizing"].includes(d)?Object(l.createElement)(l.Fragment,null,Object(l.createElement)(m.a,{className:"woocommerce-settings-historical-data__action-button",isPrimary:!0,onClick:O},Object(u.__)("Stop Import",'woocommerce')),Object(l.createElement)("div",{className:"woocommerce-setting__help woocommerce-settings-historical-data__action-help"},Object(u.__)("Imported data will not be lost if the import is stopped.",'woocommerce'),Object(l.createElement)("br",null),Object(u.__)("Navigating away from this page will not affect the import.",'woocommerce'))):["ready","nothing"].includes(d)?a?Object(l.createElement)(l.Fragment,null,Object(l.createElement)(m.a,{isPrimary:!0,onClick:v,disabled:t},Object(u.__)("Start",'woocommerce')),Object(l.createElement)(m.a,{isSecondary:!0,onClick:j},Object(u.__)("Delete Previously Imported Data",'woocommerce'))):Object(l.createElement)(l.Fragment,null,Object(l.createElement)(m.a,{isPrimary:!0,onClick:v,disabled:t},Object(u.__)("Start",'woocommerce'))):("error"===d&&n("error",Object(u.__)("Something went wrong with the importation process.",'woocommerce')),Object(l.createElement)(l.Fragment,null,Object(l.createElement)(m.a,{isSecondary:!0,onClick:y},Object(u.__)("Re-import Data",'woocommerce')),Object(l.createElement)(m.a,{isSecondary:!0,onClick:j},Object(u.__)("Delete Previously Imported Data",'woocommerce'))))))})),Z=r(851),ee=r(40);var te=Object(d.withDispatch)((function(e){return{setImportPeriod:e(f.IMPORT_STORE_NAME).setImportPeriod}}))((function(e){var t,r=e.dateFormat,n=e.disabled,o=e.setImportPeriod,a=e.value,c=function(e){e.date&&e.date.isValid?o(e.date.format(r),!0):o(e.text,!0)},i=function(e){return e.isValid()&&a.date.length===r.length?e.isAfter(new Date,"day")?ee.dateValidationMessages.future:null:ee.dateValidationMessages.invalid};return Object(l.createElement)("div",{className:"woocommerce-settings-historical-data__columns"},Object(l.createElement)("div",{className:"woocommerce-settings-historical-data__column"},Object(l.createElement)(Z.a,{label:Object(u.__)("Import Historical Data",'woocommerce'),value:a.label,disabled:n,onChange:function(e){o(e)},options:[{label:"All",value:"all"},{label:"Last 365 days",value:"365"},{label:"Last 90 days",value:"90"},{label:"Last 30 days",value:"30"},{label:"Last 7 days",value:"7"},{label:"Last 24 hours",value:"1"},{label:"Custom",value:"custom"}]})),"custom"===a.label&&(t=Q()(a.date,r),Object(l.createElement)("div",{className:"woocommerce-settings-historical-data__column"},Object(l.createElement)("div",{className:"woocommerce-settings-historical-data__column-label"},Object(u.__)("Beginning on",'woocommerce')),Object(l.createElement)(b.DatePicker,{date:t.isValid()?t.toDate():null,dateFormat:r,disabled:n,error:i(t),isInvalidDate:function(e){return Q()(e).isAfter(new Date,"day")},onUpdate:c,text:a.date}))))}));var re=function(e){var t=e.label,r=e.progress,n=e.total,o=Object(u.sprintf)(Object(u.__)("Imported %(label)s",'woocommerce'),{label:t}),a=Object(D.isNil)(n)?null:Object(u.sprintf)(Object(u.__)("%(progress)s of %(total)s",'woocommerce'),{progress:r||0,total:n});return Object(l.createElement)("div",{className:"woocommerce-settings-historical-data__progress"},Object(l.createElement)("span",{className:"woocommerce-settings-historical-data__progress-label"},o),a&&Object(l.createElement)("span",{className:"woocommerce-settings-historical-data__progress-label"},a),Object(l.createElement)("progress",{className:"woocommerce-settings-historical-data__progress-bar",max:n,value:r||0}))},ne=r(55),oe=r(738);var ae=function(e){var t=e.importDate,r=e.status,n=Object(ne.applyFilters)("woocommerce_admin_import_status",{nothing:Object(u.__)("Nothing To Import",'woocommerce'),ready:Object(u.__)("Ready To Import",'woocommerce'),initializing:[Object(u.__)("Initializing",'woocommerce'),Object(l.createElement)(oe.a,{key:"spinner"})],customers:[Object(u.__)("Importing Customers",'woocommerce'),Object(l.createElement)(oe.a,{key:"spinner"})],orders:[Object(u.__)("Importing Orders",'woocommerce'),Object(l.createElement)(oe.a,{key:"spinner"})],finalizing:[Object(u.__)("Finalizing",'woocommerce'),Object(l.createElement)(oe.a,{key:"spinner"})],finished:-1===t?Object(u.__)("All historical data imported",'woocommerce'):Object(u.sprintf)(Object(u.__)("Historical data from %s onward imported",'woocommerce'),Q()(t).format("YYYY-MM-DD"))});return Object(l.createElement)("span",{className:"woocommerce-settings-historical-data__status"},Object(u.__)("Status:",'woocommerce')+" ",n[r])};var ce=Object(d.withDispatch)((function(e){return{setSkipPrevious:e(f.IMPORT_STORE_NAME).setSkipPrevious}}))((function(e){var t=e.checked,r=e.disabled,n=e.setSkipPrevious;return Object(l.createElement)(C.a,{className:"woocommerce-settings-historical-data__skip-checkbox",checked:t,disabled:r,label:Object(u.__)("Skip previously imported customers and orders",'woocommerce'),onChange:function(e){n(e)}})}));r(804);function ie(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function se(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ie(Object(r),!0).forEach((function(t){s()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ie(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function le(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=P()(e);if(t){var o=P()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return I()(this,r)}}var ue=function(e){E()(r,e);var t=le(r);function r(){return g()(this,r),t.apply(this,arguments)}return y()(r,[{key:"render",value:function(){var e=this.props,t=e.customersProgress,r=e.customersTotal,n=e.dateFormat,o=e.importDate,a=e.inProgress,c=e.lastImportStartTimestamp,i=e.clearStatusAndTotalsCache,s=e.ordersProgress,m=e.ordersTotal,p=e.onImportStarted,d=e.period,f=e.stopImport,h=e.skipChecked,v=e.status;return Object(l.createElement)(l.Fragment,null,Object(l.createElement)(b.SectionHeader,{title:Object(u.__)("Import Historical Data",'woocommerce')}),Object(l.createElement)("div",{className:"woocommerce-settings__wrapper"},Object(l.createElement)("div",{className:"woocommerce-setting"},Object(l.createElement)("div",{className:"woocommerce-setting__input"},Object(l.createElement)("span",{className:"woocommerce-setting__help"},Object(u.__)("This tool populates historical analytics data by processing customers and orders created prior to activating WooCommerce Admin.",'woocommerce')),"finished"!==v&&Object(l.createElement)(l.Fragment,null,Object(l.createElement)(te,{dateFormat:n,disabled:a,value:d}),Object(l.createElement)(ce,{disabled:a,checked:h}),Object(l.createElement)(re,{label:Object(u.__)("Registered Customers",'woocommerce'),progress:t,total:r}),Object(l.createElement)(re,{label:Object(u.__)("Orders and Refunds",'woocommerce'),progress:s,total:m})),Object(l.createElement)(ae,{importDate:o,status:v})))),Object(l.createElement)(X,{clearStatusAndTotalsCache:i,dateFormat:n,importDate:o,lastImportStartTimestamp:c,onImportStarted:p,stopImport:f,status:v}))}}]),r}(l.Component),me=Object(d.withSelect)((function(e,t){var r=e(f.IMPORT_STORE_NAME),n=r.getImportError,o=r.getImportStatus,a=r.getImportTotals,c=t.activeImport,i=t.cacheNeedsClearing,s=t.dateFormat,l=t.inProgress,u=t.onImportStarted,m=t.onImportFinished,p=t.period,d=t.startStatusCheckInterval,b=t.skipChecked,h=J(s,p,b),v=a(h),O=v.customers,g=v.orders,j=v.lastImportStartTimestamp,y=o(j),_=y.customers,w=y.imported_from,S=y.is_importing,E=y.orders,k=_||{},I=k.imported,N=k.total,P=E||{},C=P.imported,T=P.total,R=Boolean(n(j)||n(h));Boolean(!j&&!l&&!0===S)&&u();var x=Boolean(l&&!i&&!1===S&&(N>0||T>0)&&I===N&&C===T),A={customersTotal:O,isError:R,ordersTotal:g};c&&(A={cacheNeedsClearing:i,customersProgress:I,customersTotal:Object(D.isNil)(N)?O:N,inProgress:l,isError:R,ordersProgress:C,ordersTotal:Object(D.isNil)(T)?g:T});var F=function(e){var t=e.cacheNeedsClearing,r=e.customersProgress,n=e.customersTotal,o=e.isError,a=e.inProgress,c=e.ordersProgress,i=e.ordersTotal;return o?"error":a?Object(D.isNil)(r)||Object(D.isNil)(c)||Object(D.isNil)(n)||Object(D.isNil)(i)||t?"initializing":r<n?"customers":c<i?"orders":"finalizing":n>0||i>0?r===n&&c===i?"finished":"ready":"nothing"}(A);return"initializing"===F&&d(),x&&m(),se(se({},A),{},{importDate:w,status:F})}))(ue);function pe(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=P()(e);if(t){var o=P()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return I()(this,r)}}var de=function(e){E()(r,e);var t=pe(r);function r(){var e;return g()(this,r),(e=t.apply(this,arguments)).dateFormat=Object(u.__)("MM/DD/YYYY",'woocommerce'),e.intervalId=-1,e.lastImportStopTimestamp=0,e.cacheNeedsClearing=!0,e.onImportFinished=e.onImportFinished.bind(w()(e)),e.onImportStarted=e.onImportStarted.bind(w()(e)),e.clearStatusAndTotalsCache=e.clearStatusAndTotalsCache.bind(w()(e)),e.stopImport=e.stopImport.bind(w()(e)),e.startStatusCheckInterval=e.startStatusCheckInterval.bind(w()(e)),e.cancelStatusCheckInterval=e.cancelStatusCheckInterval.bind(w()(e)),e}return y()(r,[{key:"startStatusCheckInterval",value:function(){var e=this;this.intervalId<0&&(this.cacheNeedsClearing=!0,this.intervalId=setInterval((function(){e.clearCache("getImportStatus")}),3*f.SECOND))}},{key:"cancelStatusCheckInterval",value:function(){clearInterval(this.intervalId),this.intervalId=-1}},{key:"clearCache",value:function(e,t){var r=this,n=this.props,o=n.invalidateResolution,a=n.lastImportStartTimestamp;o(e,["getImportStatus"===e?a:t]).then((function(){r.cacheNeedsClearing=!1}))}},{key:"stopImport",value:function(){this.cancelStatusCheckInterval(),this.lastImportStopTimestamp=Date.now()}},{key:"onImportFinished",value:function(){var e=this.props.debouncedSpeak;this.cacheNeedsClearing||(e("Import complete"),this.stopImport())}},{key:"onImportStarted",value:function(){var e=this.props,t=e.notes,r=e.setImportStarted,n=e.updateNote,o=t.find((function(e){return"wc-admin-historical-data"===e.name}));o&&n(o.id,{status:"actioned"}),r(!0)}},{key:"clearStatusAndTotalsCache",value:function(){var e=this.props,t=e.selectedPeriod,r=e.skipChecked,n=J(this.dateFormat,t,r);this.clearCache("getImportTotals",n),this.clearCache("getImportStatus")}},{key:"isImportationInProgress",value:function(){var e=this.props.lastImportStartTimestamp;return void 0!==e&&void 0===this.lastImportStopTimestamp||e>this.lastImportStopTimestamp}},{key:"render",value:function(){var e=this.props,t=e.activeImport,r=e.createNotice,n=e.lastImportStartTimestamp,o=e.selectedPeriod,a=e.skipChecked;return Object(l.createElement)(me,{activeImport:t,cacheNeedsClearing:this.cacheNeedsClearing,createNotice:r,dateFormat:this.dateFormat,inProgress:this.isImportationInProgress(),onImportFinished:this.onImportFinished,onImportStarted:this.onImportStarted,lastImportStartTimestamp:n,clearStatusAndTotalsCache:this.clearStatusAndTotalsCache,period:o,skipChecked:a,startStatusCheckInterval:this.startStatusCheckInterval,stopImport:this.stopImport})}}]),r}(l.Component),be=Object(p.a)([Object(d.withSelect)((function(e){var t=e(f.NOTES_STORE_NAME).getNotes,r=e(f.IMPORT_STORE_NAME),n=r.getImportStarted,o=r.getFormSettings,a=t({page:1,per_page:f.QUERY_DEFAULTS.pageSize,type:"update",status:"unactioned"}),c=n(),i=c.activeImport,s=c.lastImportStartTimestamp,l=o();return{activeImport:i,lastImportStartTimestamp:s,notes:a,selectedPeriod:l.period,skipChecked:l.skipPrevious}})),Object(d.withDispatch)((function(e){var t=e(f.NOTES_STORE_NAME).updateNote,r=e(f.IMPORT_STORE_NAME);return{invalidateResolution:r.invalidateResolution,setImportStarted:r.setImportStarted,updateNote:t}})),G])(de);function fe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.default=Object(p.a)(Object(d.withDispatch)((function(e){return{createNotice:e("core/notices").createNotice}})))((function(e){var t=e.createNotice,r=e.query,n=Object(f.useSettings)("wc_admin",["wcAdminSettings"]),a=n.settingsError,i=n.isRequesting,p=n.isDirty,d=n.persistSettings,O=n.updateAndPersistSettings,g=n.updateSettings,j=n.wcAdminSettings,y=Object(l.useRef)(!1);Object(l.useEffect)((function(){function e(e){if(p)return e.returnValue=Object(u.__)("You have unsaved changes. If you proceed, they will be lost.",'woocommerce'),e.returnValue}return window.addEventListener("beforeunload",e),function(){return window.removeEventListener("beforeunload",e)}}),[p]),Object(l.useEffect)((function(){i?y.current=!0:!i&&y.current&&(a?t("error",Object(u.__)("There was an error saving your settings. Please try again.",'woocommerce')):t("success",Object(u.__)("Your settings have been successfully saved.",'woocommerce')),y.current=!1)}),[i,a,t]);var _=function(e){var t=e.target,r=t.checked,n=t.name,o=t.type,a=t.value,i=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?fe(Object(r),!0).forEach((function(t){s()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):fe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},j);i[n]="checkbox"===o?r?[].concat(c()(i[n]),[a]):i[n].filter((function(e){return e!==a})):a,g("wcAdminSettings",i)};return Object(l.createElement)(l.Fragment,null,Object(l.createElement)(b.SectionHeader,{title:Object(u.__)("Analytics Settings",'woocommerce')}),Object(l.createElement)("div",{className:"woocommerce-settings__wrapper"},Object.keys(v.b).map((function(e){return Object(l.createElement)(F,o()({handleChange:_,value:j[e],key:e,name:e},v.b[e]))})),Object(l.createElement)("div",{className:"woocommerce-settings__actions"},Object(l.createElement)(m.a,{isSecondary:!0,onClick:function(){if(window.confirm(Object(u.__)("Are you sure you want to reset all settings to default values?",'woocommerce'))){var e=Object.keys(v.b).reduce((function(e,t){return e[t]=v.b[t].defaultValue,e}),{});O("wcAdminSettings",e),Object(h.recordEvent)("analytics_settings_reset_defaults")}}},Object(u.__)("Reset Defaults",'woocommerce')),Object(l.createElement)(m.a,{isPrimary:!0,isBusy:i,onClick:function(){d(),Object(h.recordEvent)("analytics_settings_save",j),r.period=void 0,r.compare=void 0,r.before=void 0,r.after=void 0,r.interval=void 0,r.type=void 0,window.wpNavMenuUrlUpdate(r)}},Object(u.__)("Save Settings",'woocommerce')))),"true"===r.import?Object(l.createElement)(b.ScrollTo,{offset:"-56"},Object(l.createElement)(be,{createNotice:t})):Object(l.createElement)(be,{createNotice:t}))}))}}]);