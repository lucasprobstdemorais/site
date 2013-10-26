/*! jQuery UI - v1.10.0 - 2013-02-11
* http://jqueryui.com
* Includes: jquery.ui.effect.js
* Copyright (c) 2013 jQuery Foundation and other contributors Licensed MIT */

jQuery.effects||function(e,t){var n="ui-effects-";e.effects={effect:{}},function(e,t){function h(e,t,n){var r=u[t.type]||{};return e==null?n||!t.def?null:t.def:(e=r.floor?~~e:parseFloat(e),isNaN(e)?t.def:r.mod?(e+r.mod)%r.mod:0>e?0:r.max<e?r.max:e)}function p(t){var n=s(),r=n._rgba=[];return t=t.toLowerCase(),c(i,function(e,i){var s,u=i.re.exec(t),a=u&&i.parse(u),f=i.space||"rgba";if(a)return s=n[f](a),n[o[f].cache]=s[o[f].cache],r=n._rgba=s._rgba,!1}),r.length?(r.join()==="0,0,0,0"&&e.extend(r,l.transparent),n):l[t]}function d(e,t,n){return n=(n+1)%1,n*6<1?e+(t-e)*n*6:n*2<1?t:n*3<2?e+(t-e)*(2/3-n)*6:e}var n="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",r=/^([\-+])=\s*(\d+\.?\d*)/,i=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[e[1],e[2],e[3],e[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[e[1]*2.55,e[2]*2.55,e[3]*2.55,e[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(e){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(e){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(e){return[e[1],e[2]/100,e[3]/100,e[4]]}}],s=e.Color=function(t,n,r,i){return new e.Color.fn.parse(t,n,r,i)},o={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},u={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},a=s.support={},f=e("<p>")[0],l,c=e.each;f.style.cssText="background-color:rgba(1,1,1,.5)",a.rgba=f.style.backgroundColor.indexOf("rgba")>-1,c(o,function(e,t){t.cache="_"+e,t.props.alpha={idx:3,type:"percent",def:1}}),s.fn=e.extend(s.prototype,{parse:function(n,r,i,u){if(n===t)return this._rgba=[null,null,null,null],this;if(n.jquery||n.nodeType)n=e(n).css(r),r=t;var a=this,f=e.type(n),d=this._rgba=[];r!==t&&(n=[n,r,i,u],f="array");if(f==="string")return this.parse(p(n)||l._default);if(f==="array")return c(o.rgba.props,function(e,t){d[t.idx]=h(n[t.idx],t)}),this;if(f==="object")return n instanceof s?c(o,function(e,t){n[t.cache]&&(a[t.cache]=n[t.cache].slice())}):c(o,function(t,r){var i=r.cache;c(r.props,function(e,t){if(!a[i]&&r.to){if(e==="alpha"||n[e]==null)return;a[i]=r.to(a._rgba)}a[i][t.idx]=h(n[e],t,!0)}),a[i]&&e.inArray(null,a[i].slice(0,3))<0&&(a[i][3]=1,r.from&&(a._rgba=r.from(a[i])))}),this},is:function(e){var t=s(e),n=!0,r=this;return c(o,function(e,i){var s,o=t[i.cache];return o&&(s=r[i.cache]||i.to&&i.to(r._rgba)||[],c(i.props,function(e,t){if(o[t.idx]!=null)return n=o[t.idx]===s[t.idx],n})),n}),n},_space:function(){var e=[],t=this;return c(o,function(n,r){t[r.cache]&&e.push(n)}),e.pop()},transition:function(e,t){var n=s(e),r=n._space(),i=o[r],a=this.alpha()===0?s("transparent"):this,f=a[i.cache]||i.to(a._rgba),l=f.slice();return n=n[i.cache],c(i.props,function(e,r){var i=r.idx,s=f[i],o=n[i],a=u[r.type]||{};if(o===null)return;s===null?l[i]=o:(a.mod&&(o-s>a.mod/2?s+=a.mod:s-o>a.mod/2&&(s-=a.mod)),l[i]=h((o-s)*t+s,r))}),this[r](l)},blend:function(t){if(this._rgba[3]===1)return this;var n=this._rgba.slice(),r=n.pop(),i=s(t)._rgba;return s(e.map(n,function(e,t){return(1-r)*i[t]+r*e}))},toRgbaString:function(){var t="rgba(",n=e.map(this._rgba,function(e,t){return e==null?t>2?1:0:e});return n[3]===1&&(n.pop(),t="rgb("),t+n.join()+")"},toHslaString:function(){var t="hsla(",n=e.map(this.hsla(),function(e,t){return e==null&&(e=t>2?1:0),t&&t<3&&(e=Math.round(e*100)+"%"),e});return n[3]===1&&(n.pop(),t="hsl("),t+n.join()+")"},toHexString:function(t){var n=this._rgba.slice(),r=n.pop();return t&&n.push(~~(r*255)),"#"+e.map(n,function(e){return e=(e||0).toString(16),e.length===1?"0"+e:e}).join("")},toString:function(){return this._rgba[3]===0?"transparent":this.toRgbaString()}}),s.fn.parse.prototype=s.fn,o.hsla.to=function(e){if(e[0]==null||e[1]==null||e[2]==null)return[null,null,null,e[3]];var t=e[0]/255,n=e[1]/255,r=e[2]/255,i=e[3],s=Math.max(t,n,r),o=Math.min(t,n,r),u=s-o,a=s+o,f=a*.5,l,c;return o===s?l=0:t===s?l=60*(n-r)/u+360:n===s?l=60*(r-t)/u+120:l=60*(t-n)/u+240,u===0?c=0:f<=.5?c=u/a:c=u/(2-a),[Math.round(l)%360,c,f,i==null?1:i]},o.hsla.from=function(e){if(e[0]==null||e[1]==null||e[2]==null)return[null,null,null,e[3]];var t=e[0]/360,n=e[1],r=e[2],i=e[3],s=r<=.5?r*(1+n):r+n-r*n,o=2*r-s;return[Math.round(d(o,s,t+1/3)*255),Math.round(d(o,s,t)*255),Math.round(d(o,s,t-1/3)*255),i]},c(o,function(n,i){var o=i.props,u=i.cache,a=i.to,f=i.from;s.fn[n]=function(n){a&&!this[u]&&(this[u]=a(this._rgba));if(n===t)return this[u].slice();var r,i=e.type(n),l=i==="array"||i==="object"?n:arguments,p=this[u].slice();return c(o,function(e,t){var n=l[i==="object"?e:t.idx];n==null&&(n=p[t.idx]),p[t.idx]=h(n,t)}),f?(r=s(f(p)),r[u]=p,r):s(p)},c(o,function(t,i){if(s.fn[t])return;s.fn[t]=function(s){var o=e.type(s),u=t==="alpha"?this._hsla?"hsla":"rgba":n,a=this[u](),f=a[i.idx],l;return o==="undefined"?f:(o==="function"&&(s=s.call(this,f),o=e.type(s)),s==null&&i.empty?this:(o==="string"&&(l=r.exec(s),l&&(s=f+parseFloat(l[2])*(l[1]==="+"?1:-1))),a[i.idx]=s,this[u](a)))}})}),s.hook=function(t){var n=t.split(" ");c(n,function(t,n){e.cssHooks[n]={set:function(t,r){var i,o,u="";if(r!=="transparent"&&(e.type(r)!=="string"||(i=p(r)))){r=s(i||r);if(!a.rgba&&r._rgba[3]!==1){o=n==="backgroundColor"?t.parentNode:t;while((u===""||u==="transparent")&&o&&o.style)try{u=e.css(o,"backgroundColor"),o=o.parentNode}catch(f){}r=r.blend(u&&u!=="transparent"?u:"_default")}r=r.toRgbaString()}try{t.style[n]=r}catch(f){}}},e.fx.step[n]=function(t){t.colorInit||(t.start=s(t.elem,n),t.end=s(t.end),t.colorInit=!0),e.cssHooks[n].set(t.elem,t.start.transition(t.end,t.pos))}})},s.hook(n),e.cssHooks.borderColor={expand:function(e){var t={};return c(["Top","Right","Bottom","Left"],function(n,r){t["border"+r+"Color"]=e}),t}},l=e.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(jQuery),function(){function i(t){var n,r,i=t.ownerDocument.defaultView?t.ownerDocument.defaultView.getComputedStyle(t,null):t.currentStyle,s={};if(i&&i.length&&i[0]&&i[i[0]]){r=i.length;while(r--)n=i[r],typeof i[n]=="string"&&(s[e.camelCase(n)]=i[n])}else for(n in i)typeof i[n]=="string"&&(s[n]=i[n]);return s}function s(t,n){var i={},s,o;for(s in n)o=n[s],t[s]!==o&&!r[s]&&(e.fx.step[s]||!isNaN(parseFloat(o)))&&(i[s]=o);return i}var n=["add","remove","toggle"],r={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};e.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(t,n){e.fx.step[n]=function(e){if(e.end!=="none"&&!e.setAttr||e.pos===1&&!e.setAttr)jQuery.style(e.elem,n,e.end),e.setAttr=!0}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}),e.effects.animateClass=function(t,r,o,u){var a=e.speed(r,o,u);return this.queue(function(){var r=e(this),o=r.attr("class")||"",u,f=a.children?r.find("*").addBack():r;f=f.map(function(){var t=e(this);return{el:t,start:i(this)}}),u=function(){e.each(n,function(e,n){t[n]&&r[n+"Class"](t[n])})},u(),f=f.map(function(){return this.end=i(this.el[0]),this.diff=s(this.start,this.end),this}),r.attr("class",o),f=f.map(function(){var t=this,n=e.Deferred(),r=e.extend({},a,{queue:!1,complete:function(){n.resolve(t)}});return this.el.animate(this.diff,r),n.promise()}),e.when.apply(e,f.get()).done(function(){u(),e.each(arguments,function(){var t=this.el;e.each(this.diff,function(e){t.css(e,"")})}),a.complete.call(r[0])})})},e.fn.extend({_addClass:e.fn.addClass,addClass:function(t,n,r,i){return n?e.effects.animateClass.call(this,{add:t},n,r,i):this._addClass(t)},_removeClass:e.fn.removeClass,removeClass:function(t,n,r,i){return n?e.effects.animateClass.call(this,{remove:t},n,r,i):this._removeClass(t)},_toggleClass:e.fn.toggleClass,toggleClass:function(n,r,i,s,o){return typeof r=="boolean"||r===t?i?e.effects.animateClass.call(this,r?{add:n}:{remove:n},i,s,o):this._toggleClass(n,r):e.effects.animateClass.call(this,{toggle:n},r,i,s)},switchClass:function(t,n,r,i,s){return e.effects.animateClass.call(this,{add:n,remove:t},r,i,s)}})}(),function(){function r(t,n,r,i){e.isPlainObject(t)&&(n=t,t=t.effect),t={effect:t},n==null&&(n={}),e.isFunction(n)&&(i=n,r=null,n={});if(typeof n=="number"||e.fx.speeds[n])i=r,r=n,n={};return e.isFunction(r)&&(i=r,r=null),n&&e.extend(t,n),r=r||n.duration,t.duration=e.fx.off?0:typeof r=="number"?r:r in e.fx.speeds?e.fx.speeds[r]:e.fx.speeds._default,t.complete=i||n.complete,t}function i(t){return!t||typeof t=="number"||e.fx.speeds[t]?!0:typeof t=="string"&&!e.effects.effect[t]}e.extend(e.effects,{version:"1.10.0",save:function(e,t){for(var r=0;r<t.length;r++)t[r]!==null&&e.data(n+t[r],e[0].style[t[r]])},restore:function(e,r){var i,s;for(s=0;s<r.length;s++)r[s]!==null&&(i=e.data(n+r[s]),i===t&&(i=""),e.css(r[s],i))},setMode:function(e,t){return t==="toggle"&&(t=e.is(":hidden")?"show":"hide"),t},getBaseline:function(e,t){var n,r;switch(e[0]){case"top":n=0;break;case"middle":n=.5;break;case"bottom":n=1;break;default:n=e[0]/t.height}switch(e[1]){case"left":r=0;break;case"center":r=.5;break;case"right":r=1;break;default:r=e[1]/t.width}return{x:r,y:n}},createWrapper:function(t){if(t.parent().is(".ui-effects-wrapper"))return t.parent();var n={width:t.outerWidth(!0),height:t.outerHeight(!0),"float":t.css("float")},r=e("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),i={width:t.width(),height:t.height()},s=document.activeElement;try{s.id}catch(o){s=document.body}return t.wrap(r),(t[0]===s||e.contains(t[0],s))&&e(s).focus(),r=t.parent(),t.css("position")==="static"?(r.css({position:"relative"}),t.css({position:"relative"})):(e.extend(n,{position:t.css("position"),zIndex:t.css("z-index")}),e.each(["top","left","bottom","right"],function(e,r){n[r]=t.css(r),isNaN(parseInt(n[r],10))&&(n[r]="auto")}),t.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),t.css(i),r.css(n).show()},removeWrapper:function(t){var n=document.activeElement;return t.parent().is(".ui-effects-wrapper")&&(t.parent().replaceWith(t),(t[0]===n||e.contains(t[0],n))&&e(n).focus()),t},setTransition:function(t,n,r,i){return i=i||{},e.each(n,function(e,n){var s=t.cssUnit(n);s[0]>0&&(i[n]=s[0]*r+s[1])}),i}}),e.fn.extend({effect:function(){function o(n){function u(){e.isFunction(i)&&i.call(r[0]),e.isFunction(n)&&n()}var r=e(this),i=t.complete,o=t.mode;(r.is(":hidden")?o==="hide":o==="show")?u():s.call(r[0],t,u)}var t=r.apply(this,arguments),n=t.mode,i=t.queue,s=e.effects.effect[t.effect];return e.fx.off||!s?n?this[n](t.duration,t.complete):this.each(function(){t.complete&&t.complete.call(this)}):i===!1?this.each(o):this.queue(i||"fx",o)},_show:e.fn.show,show:function(e){if(i(e))return this._show.apply(this,arguments);var t=r.apply(this,arguments);return t.mode="show",this.effect.call(this,t)},_hide:e.fn.hide,hide:function(e){if(i(e))return this._hide.apply(this,arguments);var t=r.apply(this,arguments);return t.mode="hide",this.effect.call(this,t)},__toggle:e.fn.toggle,toggle:function(t){if(i(t)||typeof t=="boolean"||e.isFunction(t))return this.__toggle.apply(this,arguments);var n=r.apply(this,arguments);return n.mode="toggle",this.effect.call(this,n)},cssUnit:function(t){var n=this.css(t),r=[];return e.each(["em","px","%","pt"],function(e,t){n.indexOf(t)>0&&(r=[parseFloat(n),t])}),r}})}(),function(){var t={};e.each(["Quad","Cubic","Quart","Quint","Expo"],function(e,n){t[n]=function(t){return Math.pow(t,e+2)}}),e.extend(t,{Sine:function(e){return 1-Math.cos(e*Math.PI/2)},Circ:function(e){return 1-Math.sqrt(1-e*e)},Elastic:function(e){return e===0||e===1?e:-Math.pow(2,8*(e-1))*Math.sin(((e-1)*80-7.5)*Math.PI/15)},Back:function(e){return e*e*(3*e-2)},Bounce:function(e){var t,n=4;while(e<((t=Math.pow(2,--n))-1)/11);return 1/Math.pow(4,3-n)-7.5625*Math.pow((t*3-2)/22-e,2)}}),e.each(t,function(t,n){e.easing["easeIn"+t]=n,e.easing["easeOut"+t]=function(e){return 1-n(1-e)},e.easing["easeInOut"+t]=function(e){return e<.5?n(e*2)/2:1-n(e*-2+2)/2}})}()}(jQuery);

/*
    Masked Input plugin for jQuery
    Copyright (c) 2007-2013 Josh Bush (digitalbush.com)
    Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
    Version: 1.3.1
*/
(function(e){function t(){var e=document.createElement("input"),t="onpaste";return e.setAttribute(t,""),"function"==typeof e[t]?"paste":"input"}var n,a=t()+".mask",r=navigator.userAgent,i=/iphone/i.test(r),o=/android/i.test(r);e.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},dataName:"rawMaskFn",placeholder:"_"},e.fn.extend({caret:function(e,t){var n;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof e?(t="number"==typeof t?t:e,this.each(function(){this.setSelectionRange?this.setSelectionRange(e,t):this.createTextRange&&(n=this.createTextRange(),n.collapse(!0),n.moveEnd("character",t),n.moveStart("character",e),n.select())})):(this[0].setSelectionRange?(e=this[0].selectionStart,t=this[0].selectionEnd):document.selection&&document.selection.createRange&&(n=document.selection.createRange(),e=0-n.duplicate().moveStart("character",-1e5),t=e+n.text.length),{begin:e,end:t})},unmask:function(){return this.trigger("unmask")},mask:function(t,r){var c,l,s,u,f,h;return!t&&this.length>0?(c=e(this[0]),c.data(e.mask.dataName)()):(r=e.extend({placeholder:e.mask.placeholder,completed:null},r),l=e.mask.definitions,s=[],u=h=t.length,f=null,e.each(t.split(""),function(e,t){"?"==t?(h--,u=e):l[t]?(s.push(RegExp(l[t])),null===f&&(f=s.length-1)):s.push(null)}),this.trigger("unmask").each(function(){function c(e){for(;h>++e&&!s[e];);return e}function d(e){for(;--e>=0&&!s[e];);return e}function m(e,t){var n,a;if(!(0>e)){for(n=e,a=c(t);h>n;n++)if(s[n]){if(!(h>a&&s[n].test(R[a])))break;R[n]=R[a],R[a]=r.placeholder,a=c(a)}b(),x.caret(Math.max(f,e))}}function p(e){var t,n,a,i;for(t=e,n=r.placeholder;h>t;t++)if(s[t]){if(a=c(t),i=R[t],R[t]=n,!(h>a&&s[a].test(i)))break;n=i}}function g(e){var t,n,a,r=e.which;8===r||46===r||i&&127===r?(t=x.caret(),n=t.begin,a=t.end,0===a-n&&(n=46!==r?d(n):a=c(n-1),a=46===r?c(a):a),k(n,a),m(n,a-1),e.preventDefault()):27==r&&(x.val(S),x.caret(0,y()),e.preventDefault())}function v(t){var n,a,i,l=t.which,u=x.caret();t.ctrlKey||t.altKey||t.metaKey||32>l||l&&(0!==u.end-u.begin&&(k(u.begin,u.end),m(u.begin,u.end-1)),n=c(u.begin-1),h>n&&(a=String.fromCharCode(l),s[n].test(a)&&(p(n),R[n]=a,b(),i=c(n),o?setTimeout(e.proxy(e.fn.caret,x,i),0):x.caret(i),r.completed&&i>=h&&r.completed.call(x))),t.preventDefault())}function k(e,t){var n;for(n=e;t>n&&h>n;n++)s[n]&&(R[n]=r.placeholder)}function b(){x.val(R.join(""))}function y(e){var t,n,a=x.val(),i=-1;for(t=0,pos=0;h>t;t++)if(s[t]){for(R[t]=r.placeholder;pos++<a.length;)if(n=a.charAt(pos-1),s[t].test(n)){R[t]=n,i=t;break}if(pos>a.length)break}else R[t]===a.charAt(pos)&&t!==u&&(pos++,i=t);return e?b():u>i+1?(x.val(""),k(0,h)):(b(),x.val(x.val().substring(0,i+1))),u?t:f}var x=e(this),R=e.map(t.split(""),function(e){return"?"!=e?l[e]?r.placeholder:e:void 0}),S=x.val();x.data(e.mask.dataName,function(){return e.map(R,function(e,t){return s[t]&&e!=r.placeholder?e:null}).join("")}),x.attr("readonly")||x.one("unmask",function(){x.unbind(".mask").removeData(e.mask.dataName)}).bind("focus.mask",function(){clearTimeout(n);var e;S=x.val(),e=y(),n=setTimeout(function(){b(),e==t.length?x.caret(0,e):x.caret(e)},10)}).bind("blur.mask",function(){y(),x.val()!=S&&x.change()}).bind("keydown.mask",g).bind("keypress.mask",v).bind(a,function(){setTimeout(function(){var e=y(!0);x.caret(e),r.completed&&e==x.val().length&&r.completed.call(x)},0)}),y()}))}})})(jQuery);


/* Main */

!function() {

	'use strict';

	/**
	 * Mobile resolution? Default is true.
	 */
	var is_mobile = true;//Modernizr.mq('only all and (max-width: 480px)');

	/**
	 * Getup
	 */
	var Getup = window.Getup || {};

	/**
	 * Getup
	 * Configuration
	 */
	Getup.config = {

		/**
		 * Height of menu (update on window resize and load)
		 */
		menu_height: 70
	};

	/**
	 * Preloader
	 */
	Getup.preload = {};

	/**
	 * Preloader
	 * Configuration
	 */
	Getup.preload.config = {};

	/**
	 * Preloader
	 * Loader content
	 */
	Getup.preload.config.content = $('<div id="preloader"><p>fitting the clouds... <span id="percent">0%</span></p></div>');

	/**
	 * Preloader
	 * Directories configuration
	 */
	Getup.preload.config.directories = {
		'image': '/static/img/'
	};

	/**
	 * Preloader
	 * Elements
	 */
	Getup.preload.elements = {};

	/**
	 * Preloader
	 * Is loading?
	 */
	Getup.preload.loading = false;

	/**
	 * Preloader
	 * Actual preloader precent
	 */
	Getup.preload.percent = 0;

	/**
	 * Preloader
	 * Number of files to preload
	 */
	Getup.preload.total = 0;

	/**
	 * Preloader
	 * Representative percent value of each file from the total
	 */
	Getup.preload.eachLoad = 0;

	/**
	 * Preloader
	 * Callback function on preloader finish to load all files
	 */
	Getup.preload.onComplete = null;

	/**
	 * Preloader
	 * Initialization
	 */
	Getup.preload.init = function(callback) {
		/**
		 * Files to donwload on page load (general or mobile)
		 */
		var directory = (is_mobile) ? 'mobile/' : '';
		Getup.preload.config.data = [
			{type: 'image', file: 'sprite.png'},
			{type: 'image', file: directory + 'clouds.jpg'},
			{type: 'image', file: directory + 'mountains.jpg'},
			{type: 'image', file: directory + 'world.jpg'}
		];

		/**
		 * Number of files to preload
		 */
		Getup.preload.total = Getup.preload.config.data.length;

		/**
		 * Representative percent value of each file from the total
		 */
		Getup.preload.eachLoad = Math.floor(100 / Getup.preload.total);

		/**
		 * Append hide loader content to body
		 */
		Getup.elements.body.append(Getup.preload.config.content.hide());

		/**
		 * Show the loader content and start the loader
		 */
		Getup.preload.config.content.fadeIn(function() {
			Getup.preload.elements.percent = $('#percent');
			Getup.preload.elements.text = Getup.preload.config.content.find('p');

			Getup.preload.onComplete = callback;
			Getup.preload.load();
		});
	};

	/**
	 * Preloader
	 * Load next file
	 */
	Getup.preload.load = function() {
		if (Getup.preload.config.data < 1) {
			Getup.preload.percent = 100;
			Getup.preload.updatePercent();

			return Getup.preload.hide();
		}

		var data = Getup.preload.config.data.shift();
		var file = Getup.preload.config.directories[data.type] + data.file;

		var loader = $('<img />');
		loader.load(function() {
			Getup.preload.updatePercent();
			Getup.preload.load();
		});
		loader.attr('src', file);
	};

	/**
	 * Preloader
	 * Hide preload
	 */
	Getup.preload.hide = function() {
		Getup.preload.elements.text.fadeOut(300, function() {
			Getup.elements.main.show();
			Getup.elements.footer.show();
			Getup.elements.header.css('top', 0);

			Getup.preload.config.content.animate({ height: Getup.config.menu_height }, { easing: 'easeInOutCirc', complete: function() {
				Getup.preload.config.content.fadeOut();
				Getup.elements.body.removeClass('preloader');

				Getup.preload.onComplete();
			}});
		});
	};

	/**
	 * Preloader
	 * Update the percent of preload
	 */
	Getup.preload.updatePercent = function() {
		Getup.preload.percent += Getup.preload.eachLoad;
		if (Getup.preload.percent > 100) Getup.preload.percent = 100;

		Getup.preload.elements.percent.text(Getup.preload.percent + ' %');
	}

	/**
	 * Elements
	 */
	Getup.elements = {};

	/**
	 * Elements
	 * Element: body
	 */
	Getup.elements.body = $('body');

	/**
	 * Elements
	 * Element: header container
	 */
	Getup.elements.header = $('.header-container');

	/**
	 * Elements
	 * Element: menu control
	 */
	Getup.elements.header.menu_control = $('.menu-control');

	/**
	 * Elements
	 * Element: main container
	 */
	Getup.elements.main = $('.main-container');

	/**
	 * Elements
	 * Element: home/carousel
	 */
	Getup.elements.home = Getup.elements.carousel = $('#home');

	/**
	 * Elements
	 * Element: how it works
	 */
	Getup.elements.how_it_works = $('#how-it-works');

	/**
	 * Elements
	 * Element: see more form how it works
	 */
	Getup.elements.see_more = Getup.elements.how_it_works.find("a");

	/**
	 * Elements
	 * Element: footer container
	 */
	Getup.elements.footer = $('.footer-container');

	/**
	 * Mobile
	 */
	Getup.mobile = {};

	/**
	 * Mobile Menu
	 */
	Getup.mobile.menu = {}

	/**
	 * Mobile Menu
	 * Configuration
	 */
	Getup.mobile.menu.configuration = {

		/**
		 * Height of menu when closed
		 */
		closed_height : Getup.config.menu_height
	}		

	/**
	 * Mobile Menu
	 * Open mobile menu
	 */
	Getup.mobile.menu.open = function() {

		/**
		 * Remove the closed class and set the height to auto
		 */
		Getup.elements.header.removeClass('closed').height('auto');

		/**
		 * Retrieve the open height.
		 */
		var open_height = Getup.elements.header.height();

		/**
		 * set the original height to closed.
		 */
		Getup.elements.header.height(Getup.mobile.menu.configuration.closed_height);

		/**
		 * Animate the height of the menu to open height.
		 */
		Getup.elements.header.animate({ height: open_height }, { queue: false, easing: 'easeInOutCirc' });
	};

	/**
	 * Mobile Menu
	 * Close mobile menu
	 */
	Getup.mobile.menu.close = function() {
		/**
		 * Animate the height of the menu to closed height.
		 */
		Getup.elements.header.animate({ height: Getup.mobile.menu.configuration.closed_height }, { queue: false, easing: 'easeInOutCirc', complete: function() {

			/**
			 * Remove the closed class.
			 */
			Getup.elements.header.addClass('closed');
		}});
	};

	/**
	 * Mobile Menu
	 * Mobile menu toggle status
	 */
	Getup.mobile.menu.toggle = function() {
		Getup.elements.header.hasClass('closed') ? Getup.mobile.menu.open() : Getup.mobile.menu.close();
	};

	/**
	 * Carousel
	 */
	Getup.carousel = {};

	/**
	 * Carousel
	 * Configuration
	 */
	Getup.carousel.config = {
		/**
		 * Selected index 
		 */
		index: 0,

		/**
		 * Directions
		 */
		directions: { '1': '-100%', '-1': '100%' },

		/**
		 * Timer interval
		 * default: 7000 ms
		 */
		interval: 7000
	};

	/**
	 * Carousel
	 * Elements
	 */
	Getup.carousel.elements = {

		/**
		 * All sections
		 */
		sections: Getup.elements.carousel.find('section'),

		/**
		 * Selected section 
		 */
		selected: null,

		/**
		 * Content of selected section 
		 */
		content: null
	};

	/**
	 * Carousel
	 * Show the selected carousel
	 */
	Getup.carousel.next = function(callback) {

		/**
		 * Show the actual section
		 */
		Getup.carousel.elements.selected.animate({ left: 0 }, { queue: false, easing: 'easeInCirc' });

		/**
		 * Show the actual content of section
		 */
		setTimeout(function() {
			Getup.carousel.elements.content.animate({ left: 0 }, { queue: false, easing: 'easeInOutCirc', complete: function() {

				/**
				 * Before transictions, start a new timer
				 */
				Getup.carousel.start_timer();

				/**
				 * Callback if exists
				 */
				if (callback) callback();
			}});
		}, 300);
	};

	/**
	 * Carousel
	 * Move to next/previous section
	 */
	Getup.carousel.move = function(direction, callback) {

		/**
		 * Call the hide function
		 */
		Getup.carousel.hide(direction, function() {

			/**
			 * Set the new index
			 */
			Getup.carousel.config.index += (direction === -1) ? -1 : 1;

			/**
			 * Get the total of sections
			 */
			var total_sections = Getup.carousel.elements.sections.size();

			/**
			 * Get the index of the last section
			 */
			var last_section = total_sections - 1;

			/**
			 * Validate the index of section
			 */
			Getup.carousel.config.index = (Getup.carousel.config.index < 0 
				? last_section
				: (Getup.carousel.config.index > last_section
					? 0
					: Getup.carousel.config.index));

			/**
			 * Show the new section
			 */
			Getup.carousel.change(direction, callback);			
		});
	};

	/**
	 * Carousel
	 * Hide actual section
	 */
	Getup.carousel.hide = function(direction, callback) {

		/**
		 * Hide the actual section
		 */
		Getup.carousel.elements.content.animate({ left: Getup.carousel.config.directions[direction] }, { queue: false, easing: 'easeInOutCirc' });

		/**
		 * Hide the actual content of section
		 */
		setTimeout(function() {
			Getup.carousel.elements.selected.animate({ left: Getup.carousel.config.directions[direction] }, { queue: false, easing: 'easeInCirc' });

			callback();
		}, 200);
	};	

	/**
	 * Carousel
	 * Change the carousel
	 */
	Getup.carousel.change = function(direction, callback) {

		/**
		 * Get the selected section and content section
		 */
		Getup.carousel.get_selected();

		/**
		 * Set the start position of the selected section
		 */
		Getup.carousel.elements.selected.css('left', Getup.carousel.config.directions[-direction]);

		/**
		 * Set the start position of the selected content
		 */
		Getup.carousel.elements.content.css('left', Getup.carousel.config.directions[-direction]);

		/**
		 * Show the selected section
		 */
		Getup.carousel.next(callback);
	};

	/**
	 * Carousel
	 * Get selected section
	 */
	Getup.carousel.get_selected = function() {

		/**
		 * Get the selected section
		 */
		Getup.carousel.elements.selected = Getup.carousel.elements.sections.eq(Getup.carousel.config.index);

		/**
		 * Get the content of the selected section
		 */
		Getup.carousel.elements.content = Getup.carousel.elements.selected.find('.wrapper');
	};

	/**
	 * Carousel
	 * Animate the carousel start
	 */
	 Getup.carousel.show = function() {

		/**
		 * Slide down th carousel
		 Getup.elements.carousel.show();
		 */
	};

	/**
	 * Carousel
	 * Timer save
	 */
	Getup.carousel._timer = null;

	/**
	 * Carousel
	 * Start timer count
	 */
	Getup.carousel.start_timer = function() {

		/**
		 * Clear the timer
		 */
		clearTimeout(Getup.carousel._timer);

		/**
		 * Create a new timer
		 */
		Getup.carousel._timer = setTimeout(function() {

			/**
			 * Move the carousel
			 */
			Getup.carousel.move(1);

		}, Getup.carousel.config.interval);
	};

	/**
	 * Carousel
	 * Initialization
	 */
	Getup.carousel.init = function() {

		/**
		 * Get the selected section and content section
		 */
		Getup.carousel.get_selected();

		/**
		 * Set the start position of the selected section
		 */
		Getup.carousel.elements.selected.css('left', 0);

		/**
		 * Set the start position of the selected content
		 */
		Getup.carousel.elements.content.css('left', 0);

		/**
		 * Hide the carousel
		 Getup.elements.carousel.hide();
		 */
	};


	/**
	 * Articles
	 */
	Getup.articles = {};

	/**
	 * Articles
	 * How it works
	 */
	Getup.articles.how_it_works = {};

	/** 
	 * Articles
	 * How it works
	 * Toggle hidden information
	 *
	 * (element scope)
	 */
	Getup.articles.how_it_works.toggle = function() {
		var element = $(this);
		var hidden = element.next();
		var text = element.data('text');

		hidden.slideToggle();

		element.data('text', element.text());
		element.text(text);
	};

	/**
	 * Articles
	 * Compare
	 */
	Getup.articles.compare = {};

	/**
	 * Articles
	 * Compare
	 * Toggle hidden information
	 */
	Getup.articles.compare.toggle = function() {
	};

	/**
	 * Articles
	 * Sign up
	 */
	Getup.articles.signup = {};

	/**
	 * Articles
	 * Sign up
	 * Toggle hidden form
	 */
	Getup.articles.signup.toggle = function() {

	};

	/**
	 * Articles
	 * Sign up
	 * Toggle hidden form
	 */
	Getup.articles.signup.send = function() {};

	/**
	 * Site resize
	 */
	var resize = function() {

		/**
		 * Update mobile validation using Modernizr.mq
		 */
		is_mobile = Modernizr.mq('only all and (max-width: 480px)');

		/**
		 * Height of menu
		 */
		Getup.config.menu_height = is_mobile ? 70 : 122;
	};

	/**
	 * Site initialization
	 */
	var init = function() {


		// Verify and move to page X ...
		//Getup.carousel.slideDown();
		Getup.carousel.start_timer();
	};

	/**
	 * General events
	 */
	Getup.events = {};

	/**
	 * General events
	 * Event: mobile menu controller
	 */
	Getup.elements.header.menu_control.click(Getup.mobile.menu.toggle);

	/**
	 * General events
	 * Event: mobile menu controller
	 */
	Getup.elements.see_more.click(Getup.articles.how_it_works.toggle);

	/**
	 * General events
	 * Event: mobile menu controller
	 */
	$(window).resize(resize);

	/**
	 * Call resize to update config values
	 */
	resize();

	/**
	 * Preload initialization
	 */
	Getup.preload.init(init);

	/**
	 * Carousel initialization
	 */
	Getup.carousel.init();

	/**
	 * Export getup class to window scope
	 */
	 window.Getup = Getup;
}();