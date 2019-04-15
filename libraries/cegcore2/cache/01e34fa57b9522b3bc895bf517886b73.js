/* dropdown49894-1518552989-form20887-1518552989-g2.actions13247-1518552989-g2.boot7565-1518552989-g2.forms19326-1518552989-g2939-1518552989-jquery.inputmask86185-1518552989-transition13315-1518552989 */
/*!
 * # Semantic UI 2.2.11 - Transition
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
!function(n,i,e,t){"use strict";i=void 0!==i&&i.Math==Math?i:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),n.fn.transition=function(){var t,a=n(this),o=a.selector||"",r=(new Date).getTime(),s=[],l=arguments,d=l[0],u=[].slice.call(arguments,1),c="string"==typeof d;i.requestAnimationFrame||i.mozRequestAnimationFrame||i.webkitRequestAnimationFrame||i.msRequestAnimationFrame;return a.each(function(i){var m,f,p,g,v,b,y,h,w,C=n(this),A=this;w={initialize:function(){m=w.get.settings.apply(A,l),g=m.className,p=m.error,v=m.metadata,h="."+m.namespace,y="module-"+m.namespace,f=C.data(y)||w,b=w.get.animationEndEvent(),c&&(c=w.invoke(d)),!1===c&&(w.verbose("Converted arguments into settings object",m),m.interval?w.delay(m.animate):w.animate(),w.instantiate())},instantiate:function(){w.verbose("Storing instance of module",w),f=w,C.data(y,f)},destroy:function(){w.verbose("Destroying previous module for",A),C.removeData(y)},refresh:function(){w.verbose("Refreshing display type on next animation"),delete w.displayType},forceRepaint:function(){w.verbose("Forcing element repaint");var n=C.parent(),i=C.next();0===i.length?C.detach().appendTo(n):C.detach().insertBefore(i)},repaint:function(){w.verbose("Repainting element");A.offsetWidth},delay:function(n){var e,t,o=w.get.animationDirection();o||(o=w.can.transition()?w.get.direction():"static"),n=void 0!==n?n:m.interval,e="auto"==m.reverse&&o==g.outward,t=e||1==m.reverse?(a.length-i)*m.interval:i*m.interval,w.debug("Delaying animation by",t),setTimeout(w.animate,t)},animate:function(n){if(m=n||m,!w.is.supported())return w.error(p.support),!1;if(w.debug("Preparing animation",m.animation),w.is.animating()){if(m.queue)return!m.allowRepeats&&w.has.direction()&&w.is.occurring()&&!0!==w.queuing?w.debug("Animation is currently occurring, preventing queueing same animation",m.animation):w.queue(m.animation),!1;if(!m.allowRepeats&&w.is.occurring())return w.debug("Animation is already occurring, will not execute repeated animation",m.animation),!1;w.debug("New animation started, completing previous early",m.animation),f.complete()}w.can.animate()?w.set.animating(m.animation):w.error(p.noAnimation,m.animation,A)},reset:function(){w.debug("Resetting animation to beginning conditions"),w.remove.animationCallbacks(),w.restore.conditions(),w.remove.animating()},queue:function(n){w.debug("Queueing animation of",n),w.queuing=!0,C.one(b+".queue"+h,function(){w.queuing=!1,w.repaint(),w.animate.apply(this,m)})},complete:function(n){w.debug("Animation complete",m.animation),w.remove.completeCallback(),w.remove.failSafe(),w.is.looping()||(w.is.outward()?(w.verbose("Animation is outward, hiding element"),w.restore.conditions(),w.hide()):w.is.inward()?(w.verbose("Animation is outward, showing element"),w.restore.conditions(),w.show()):(w.verbose("Static animation completed"),w.restore.conditions(),m.onComplete.call(A)))},force:{visible:function(){var n=C.attr("style"),i=w.get.userStyle(),e=w.get.displayType(),t=i+"display: "+e+" !important;",a=C.css("display"),o=void 0===n||""===n;a!==e?(w.verbose("Overriding default display to show element",e),C.attr("style",t)):o&&C.removeAttr("style")},hidden:function(){var n=C.attr("style"),i=C.css("display"),e=void 0===n||""===n;"none"===i||w.is.hidden()?e&&C.removeAttr("style"):(w.verbose("Overriding default display to hide element"),C.css("display","none"))}},has:{direction:function(i){var e=!1;return i=i||m.animation,"string"==typeof i&&(i=i.split(" "),n.each(i,function(n,i){i!==g.inward&&i!==g.outward||(e=!0)})),e},inlineDisplay:function(){var i=C.attr("style")||"";return n.isArray(i.match(/display.*?;/,""))}},set:{animating:function(n){var i;w.remove.completeCallback(),n=n||m.animation,i=w.get.animationClass(n),w.save.animation(i),w.force.visible(),w.remove.hidden(),w.remove.direction(),w.start.animation(i)},duration:function(n,i){i=i||m.duration,((i="number"==typeof i?i+"ms":i)||0===i)&&(w.verbose("Setting animation duration",i),C.css({"animation-duration":i}))},direction:function(n){n=n||w.get.direction(),n==g.inward?w.set.inward():w.set.outward()},looping:function(){w.debug("Transition set to loop"),C.addClass(g.looping)},hidden:function(){C.addClass(g.transition).addClass(g.hidden)},inward:function(){w.debug("Setting direction to inward"),C.removeClass(g.outward).addClass(g.inward)},outward:function(){w.debug("Setting direction to outward"),C.removeClass(g.inward).addClass(g.outward)},visible:function(){C.addClass(g.transition).addClass(g.visible)}},start:{animation:function(n){n=n||w.get.animationClass(),w.debug("Starting tween",n),C.addClass(n).one(b+".complete"+h,w.complete),m.useFailSafe&&w.add.failSafe(),w.set.duration(m.duration),m.onStart.call(A)}},save:{animation:function(n){w.cache||(w.cache={}),w.cache.animation=n},displayType:function(n){"none"!==n&&C.data(v.displayType,n)},transitionExists:function(i,e){n.fn.transition.exists[i]=e,w.verbose("Saving existence of transition",i,e)}},restore:{conditions:function(){var n=w.get.currentAnimation();n&&(C.removeClass(n),w.verbose("Removing animation class",w.cache)),w.remove.duration()}},add:{failSafe:function(){var n=w.get.duration();w.timer=setTimeout(function(){C.triggerHandler(b)},n+m.failSafeDelay),w.verbose("Adding fail safe timer",w.timer)}},remove:{animating:function(){C.removeClass(g.animating)},animationCallbacks:function(){w.remove.queueCallback(),w.remove.completeCallback()},queueCallback:function(){C.off(".queue"+h)},completeCallback:function(){C.off(".complete"+h)},display:function(){C.css("display","")},direction:function(){C.removeClass(g.inward).removeClass(g.outward)},duration:function(){C.css("animation-duration","")},failSafe:function(){w.verbose("Removing fail safe timer",w.timer),w.timer&&clearTimeout(w.timer)},hidden:function(){C.removeClass(g.hidden)},visible:function(){C.removeClass(g.visible)},looping:function(){w.debug("Transitions are no longer looping"),w.is.looping()&&(w.reset(),C.removeClass(g.looping))},transition:function(){C.removeClass(g.visible).removeClass(g.hidden)}},get:{settings:function(i,e,t){return"object"==typeof i?n.extend(!0,{},n.fn.transition.settings,i):"function"==typeof t?n.extend({},n.fn.transition.settings,{animation:i,onComplete:t,duration:e}):"string"==typeof e||"number"==typeof e?n.extend({},n.fn.transition.settings,{animation:i,duration:e}):"object"==typeof e?n.extend({},n.fn.transition.settings,e,{animation:i}):"function"==typeof e?n.extend({},n.fn.transition.settings,{animation:i,onComplete:e}):n.extend({},n.fn.transition.settings,{animation:i})},animationClass:function(n){var i=n||m.animation,e=w.can.transition()&&!w.has.direction()?w.get.direction()+" ":"";return g.animating+" "+g.transition+" "+e+i},currentAnimation:function(){return!(!w.cache||void 0===w.cache.animation)&&w.cache.animation},currentDirection:function(){return w.is.inward()?g.inward:g.outward},direction:function(){return w.is.hidden()||!w.is.visible()?g.inward:g.outward},animationDirection:function(i){var e;return i=i||m.animation,"string"==typeof i&&(i=i.split(" "),n.each(i,function(n,i){i===g.inward?e=g.inward:i===g.outward&&(e=g.outward)})),e||!1},duration:function(n){return n=n||m.duration,!1===n&&(n=C.css("animation-duration")||0),"string"==typeof n?n.indexOf("ms")>-1?parseFloat(n):1e3*parseFloat(n):n},displayType:function(n){return n=void 0===n||n,m.displayType?m.displayType:(n&&void 0===C.data(v.displayType)&&w.can.transition(!0),C.data(v.displayType))},userStyle:function(n){return n=n||C.attr("style")||"",n.replace(/display.*?;/,"")},transitionExists:function(i){return n.fn.transition.exists[i]},animationStartEvent:function(){var n,i=e.createElement("div"),t={animation:"animationstart",OAnimation:"oAnimationStart",MozAnimation:"mozAnimationStart",WebkitAnimation:"webkitAnimationStart"};for(n in t)if(void 0!==i.style[n])return t[n];return!1},animationEndEvent:function(){var n,i=e.createElement("div"),t={animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"mozAnimationEnd",WebkitAnimation:"webkitAnimationEnd"};for(n in t)if(void 0!==i.style[n])return t[n];return!1}},can:{transition:function(i){var e,t,a,o,r,s,l=m.animation,d=w.get.transitionExists(l),u=w.get.displayType(!1);if(void 0===d||i){if(w.verbose("Determining whether animation exists"),e=C.attr("class"),t=C.prop("tagName"),a=n("<"+t+" />").addClass(e).insertAfter(C),o=a.addClass(l).removeClass(g.inward).removeClass(g.outward).addClass(g.animating).addClass(g.transition).css("animationName"),r=a.addClass(g.inward).css("animationName"),u||(u=a.attr("class",e).removeAttr("style").removeClass(g.hidden).removeClass(g.visible).show().css("display"),w.verbose("Determining final display state",u),w.save.displayType(u)),a.remove(),o!=r)w.debug("Direction exists for animation",l),s=!0;else{if("none"==o||!o)return void w.debug("No animation defined in css",l);w.debug("Static animation found",l,u),s=!1}w.save.transitionExists(l,s)}return void 0!==d?d:s},animate:function(){return void 0!==w.can.transition()}},is:{animating:function(){return C.hasClass(g.animating)},inward:function(){return C.hasClass(g.inward)},outward:function(){return C.hasClass(g.outward)},looping:function(){return C.hasClass(g.looping)},occurring:function(n){return n=n||m.animation,n="."+n.replace(" ","."),C.filter(n).length>0},visible:function(){return C.is(":visible")},hidden:function(){return"hidden"===C.css("visibility")},supported:function(){return!1!==b}},hide:function(){w.verbose("Hiding element"),w.is.animating()&&w.reset(),A.blur(),w.remove.display(),w.remove.visible(),w.set.hidden(),w.force.hidden(),m.onHide.call(A),m.onComplete.call(A)},show:function(n){w.verbose("Showing element",n),w.remove.hidden(),w.set.visible(),w.force.visible(),m.onShow.call(A),m.onComplete.call(A)},toggle:function(){w.is.visible()?w.hide():w.show()},stop:function(){w.debug("Stopping current animation"),C.triggerHandler(b)},stopAll:function(){w.debug("Stopping all animation"),w.remove.queueCallback(),C.triggerHandler(b)},clear:{queue:function(){w.debug("Clearing animation queue"),w.remove.queueCallback()}},enable:function(){w.verbose("Starting animation"),C.removeClass(g.disabled)},disable:function(){w.debug("Stopping animation"),C.addClass(g.disabled)},setting:function(i,e){if(w.debug("Changing setting",i,e),n.isPlainObject(i))n.extend(!0,m,i);else{if(void 0===e)return m[i];n.isPlainObject(m[i])?n.extend(!0,m[i],e):m[i]=e}},internal:function(i,e){if(n.isPlainObject(i))n.extend(!0,w,i);else{if(void 0===e)return w[i];w[i]=e}},debug:function(){!m.silent&&m.debug&&(m.performance?w.performance.log(arguments):(w.debug=Function.prototype.bind.call(console.info,console,m.name+":"),w.debug.apply(console,arguments)))},verbose:function(){!m.silent&&m.verbose&&m.debug&&(m.performance?w.performance.log(arguments):(w.verbose=Function.prototype.bind.call(console.info,console,m.name+":"),w.verbose.apply(console,arguments)))},error:function(){m.silent||(w.error=Function.prototype.bind.call(console.error,console,m.name+":"),w.error.apply(console,arguments))},performance:{log:function(n){var i,e,t;m.performance&&(i=(new Date).getTime(),t=r||i,e=i-t,r=i,s.push({Name:n[0],Arguments:[].slice.call(n,1)||"",Element:A,"Execution Time":e})),clearTimeout(w.performance.timer),w.performance.timer=setTimeout(w.performance.display,500)},display:function(){var i=m.name+":",e=0;r=!1,clearTimeout(w.performance.timer),n.each(s,function(n,i){e+=i["Execution Time"]}),i+=" "+e+"ms",o&&(i+=" '"+o+"'"),a.length>1&&(i+=" ("+a.length+")"),(void 0!==console.group||void 0!==console.table)&&s.length>0&&(console.groupCollapsed(i),console.table?console.table(s):n.each(s,function(n,i){console.log(i.Name+": "+i["Execution Time"]+"ms")}),console.groupEnd()),s=[]}},invoke:function(i,e,a){var o,r,s,l=f;return e=e||u,a=A||a,"string"==typeof i&&void 0!==l&&(i=i.split(/[\. ]/),o=i.length-1,n.each(i,function(e,t){var a=e!=o?t+i[e+1].charAt(0).toUpperCase()+i[e+1].slice(1):i;if(n.isPlainObject(l[a])&&e!=o)l=l[a];else{if(void 0!==l[a])return r=l[a],!1;if(!n.isPlainObject(l[t])||e==o)return void 0!==l[t]&&(r=l[t],!1);l=l[t]}})),n.isFunction(r)?s=r.apply(a,e):void 0!==r&&(s=r),n.isArray(t)?t.push(s):void 0!==t?t=[t,s]:void 0!==s&&(t=s),void 0!==r&&r}},w.initialize()}),void 0!==t?t:this},n.fn.transition.exists={},n.fn.transition.settings={name:"Transition",silent:!1,debug:!1,verbose:!1,performance:!0,namespace:"transition",interval:0,reverse:"auto",onStart:function(){},onComplete:function(){},onShow:function(){},onHide:function(){},useFailSafe:!0,failSafeDelay:100,allowRepeats:!1,displayType:!1,animation:"fade",duration:!1,queue:!0,metadata:{displayType:"display"},className:{animating:"animating",disabled:"disabled",hidden:"hidden",inward:"in",loading:"loading",looping:"looping",outward:"out",transition:"transition",visible:"visible"},error:{noAnimation:"Element is no longer attached to DOM. Unable to animate.  Use silent setting to surpress this warning in production.",repeated:"That animation is already occurring, cancelling repeated animation",method:"The method you called is not defined",support:"This browser does not support CSS animations"}}}(jQuery,window,document);
/*!
 * # Semantic UI 2.2.11 - Form Validation
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
!function(e,t,n,i){"use strict";t=void 0!==t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.form=function(t){var i,r=e(this),a=r.selector||"",o=(new Date).getTime(),s=[],l=arguments[0],u=arguments[1],c="string"==typeof l,d=[].slice.call(arguments,1);return r.each(function(){var f,p,m,g,h,v,b,y,x,k,E,w,C,V,R,S,F,A,T,D=e(this),O=this,j=[],$=!1;T={initialize:function(){T.get.settings(),c?(void 0===A&&T.instantiate(),T.invoke(l)):(void 0!==A&&A.invoke("destroy"),T.verbose("Initializing form validation",D,y),T.bindEvents(),T.set.defaults(),T.instantiate())},instantiate:function(){T.verbose("Storing instance of module",T),A=T,D.data(S,T)},destroy:function(){T.verbose("Destroying previous module",A),T.removeEvents(),D.removeData(S)},refresh:function(){T.verbose("Refreshing selector cache"),f=D.find(E.field),p=D.find(E.group),m=D.find(E.message),g=D.find(E.prompt),h=D.find(E.submit),v=D.find(E.clear),b=D.find(E.reset)},submit:function(){T.verbose("Submitting form",D),D.submit()},attachEvents:function(t,n){n=n||"submit",e(t).on("click"+F,function(e){T[n](),e.preventDefault()})},bindEvents:function(){T.verbose("Attaching form events"),D.on("submit"+F,T.validate.form).on("blur"+F,E.field,T.event.field.blur).on("click"+F,E.submit,T.submit).on("click"+F,E.reset,T.reset).on("click"+F,E.clear,T.clear),y.keyboardShortcuts&&D.on("keydown"+F,E.field,T.event.field.keydown),f.each(function(){var t=e(this),n=t.prop("type"),i=T.get.changeEvent(n,t);e(this).on(i+F,T.event.field.change)})},clear:function(){f.each(function(){var t=e(this),n=t.parent(),i=t.closest(p),r=i.find(E.prompt),a=t.data(k.defaultValue)||"",o=n.is(E.uiCheckbox),s=n.is(E.uiDropdown);i.hasClass(w.error)&&(T.verbose("Resetting error on field",i),i.removeClass(w.error),r.remove()),s?(T.verbose("Resetting dropdown value",n,a),n.dropdown("clear")):o?t.prop("checked",!1):(T.verbose("Resetting field value",t,a),t.val(""))})},reset:function(){f.each(function(){var t=e(this),n=t.parent(),i=t.closest(p),r=i.find(E.prompt),a=t.data(k.defaultValue),o=n.is(E.uiCheckbox),s=n.is(E.uiDropdown),l=i.hasClass(w.error);void 0!==a&&(l&&(T.verbose("Resetting error on field",i),i.removeClass(w.error),r.remove()),s?(T.verbose("Resetting dropdown value",n,a),n.dropdown("restore defaults")):o?(T.verbose("Resetting checkbox value",n,a),t.prop("checked",a)):(T.verbose("Resetting field value",t,a),t.val(a)))})},determine:{isValid:function(){var t=!0;return e.each(x,function(e,n){T.validate.field(n,e,!0)||(t=!1)}),t}},is:{bracketedRule:function(e){return e.type&&e.type.match(y.regExp.bracket)},shorthandFields:function(e){var t=Object.keys(e),n=e[t[0]];return T.is.shorthandRules(n)},shorthandRules:function(t){return"string"==typeof t||e.isArray(t)},empty:function(e){return!e||0===e.length||(e.is('input[type="checkbox"]')?!e.is(":checked"):T.is.blank(e))},blank:function(t){return""===e.trim(t.val())},valid:function(t){var n=!0;return t?(T.verbose("Checking if field is valid",t),T.validate.field(x[t],t,!1)):(T.verbose("Checking if form is valid"),e.each(x,function(e,t){T.is.valid(e)||(n=!1)}),n)}},removeEvents:function(){D.off(F),f.off(F),h.off(F),f.off(F)},event:{field:{keydown:function(t){var n=e(this),i=t.which,r=n.is(E.input),a=n.is(E.checkbox),o=n.closest(E.uiDropdown).length>0,s={enter:13,escape:27};i==s.escape&&(T.verbose("Escape key pressed blurring field"),n.blur()),t.ctrlKey||i!=s.enter||!r||o||a||($||(n.one("keyup"+F,T.event.field.keyup),T.submit(),T.debug("Enter pressed on input submitting form")),$=!0)},keyup:function(){$=!1},blur:function(t){var n=e(this),i=n.closest(p),r=T.get.validation(n);i.hasClass(w.error)?(T.debug("Revalidating field",n,r),r&&T.validate.field(r)):"blur"!=y.on&&"change"!=y.on||r&&T.validate.field(r)},change:function(t){var n=e(this),i=n.closest(p),r=T.get.validation(n);r&&("change"==y.on||i.hasClass(w.error)&&y.revalidate)&&(clearTimeout(T.timer),T.timer=setTimeout(function(){T.debug("Revalidating field",n,T.get.validation(n)),T.validate.field(r)},y.delay))}}},get:{ancillaryValue:function(e){return!(!e.type||!e.value&&!T.is.bracketedRule(e))&&(void 0!==e.value?e.value:e.type.match(y.regExp.bracket)[1]+"")},ruleName:function(e){return T.is.bracketedRule(e)?e.type.replace(e.type.match(y.regExp.bracket)[0],""):e.type},changeEvent:function(e,t){return"checkbox"==e||"radio"==e||"hidden"==e||t.is("select")?"change":T.get.inputEvent()},inputEvent:function(){return void 0!==n.createElement("input").oninput?"input":void 0!==n.createElement("input").onpropertychange?"propertychange":"keyup"},fieldsFromShorthand:function(t){var n={};return e.each(t,function(t,i){"string"==typeof i&&(i=[i]),n[t]={rules:[]},e.each(i,function(e,i){n[t].rules.push({type:i})})}),n},prompt:function(e,t){var n,i,r,a=T.get.ruleName(e),o=T.get.ancillaryValue(e),s=e.prompt||y.prompt[a]||y.text.unspecifiedRule,l=-1!==s.search("{value}"),u=-1!==s.search("{name}");return(u||l)&&(i=T.get.field(t.identifier)),l&&(s=s.replace("{value}",i.val())),u&&(n=i.closest(E.group).find("label").eq(0),r=1==n.length?n.text():i.prop("placeholder")||y.text.unspecifiedField,s=s.replace("{name}",r)),s=s.replace("{identifier}",t.identifier),s=s.replace("{ruleValue}",o),e.prompt||T.verbose("Using default validation prompt for type",s,a),s},settings:function(){if(e.isPlainObject(t)){var n=Object.keys(t),i=n.length>0&&(void 0!==t[n[0]].identifier&&void 0!==t[n[0]].rules);i?(y=e.extend(!0,{},e.fn.form.settings,u),x=e.extend({},e.fn.form.settings.defaults,t),T.error(y.error.oldSyntax,O),T.verbose("Extending settings from legacy parameters",x,y)):(t.fields&&T.is.shorthandFields(t.fields)&&(t.fields=T.get.fieldsFromShorthand(t.fields)),y=e.extend(!0,{},e.fn.form.settings,t),x=e.extend({},e.fn.form.settings.defaults,y.fields),T.verbose("Extending settings",x,y))}else y=e.fn.form.settings,x=e.fn.form.settings.defaults,T.verbose("Using default form validation",x,y);R=y.namespace,k=y.metadata,E=y.selector,w=y.className,C=y.regExp,V=y.error,S="module-"+R,F="."+R,A=D.data(S),T.refresh()},field:function(t){return T.verbose("Finding field with identifier",t),t=T.escape.string(t),f.filter("#"+t).length>0?f.filter("#"+t):f.filter('[name="'+t+'"]').length>0?f.filter('[name="'+t+'"]'):f.filter('[name="'+t+'[]"]').length>0?f.filter('[name="'+t+'[]"]'):f.filter("[data-"+k.validate+'="'+t+'"]').length>0?f.filter("[data-"+k.validate+'="'+t+'"]'):e("<input/>")},fields:function(t){var n=e();return e.each(t,function(e,t){n=n.add(T.get.field(t))}),n},validation:function(t){var n,i;return!!x&&(e.each(x,function(e,r){i=r.identifier||e,T.get.field(i)[0]==t[0]&&(r.identifier=i,n=r)}),n||!1)},value:function(e){var t,n=[];return n.push(e),t=T.get.values.call(O,n),t[e]},values:function(t){var n=e.isArray(t)?T.get.fields(t):f,i={};return n.each(function(t,n){var r=e(n),a=(r.prop("type"),r.prop("name")),o=r.val(),s=r.is(E.checkbox),l=r.is(E.radio),u=-1!==a.indexOf("[]"),c=!!s&&r.is(":checked");a&&(u?(a=a.replace("[]",""),i[a]||(i[a]=[]),s?c?i[a].push(o||!0):i[a].push(!1):i[a].push(o)):l?void 0===i[a]&&(i[a]=!!c):i[a]=s?!!c&&(o||!0):o)}),i}},has:{field:function(e){return T.verbose("Checking for existence of a field with identifier",e),e=T.escape.string(e),"string"!=typeof e&&T.error(V.identifier,e),f.filter("#"+e).length>0||(f.filter('[name="'+e+'"]').length>0||f.filter("[data-"+k.validate+'="'+e+'"]').length>0)}},escape:{string:function(e){return e=String(e),e.replace(C.escape,"\\$&")}},add:{rule:function(e,t){T.add.field(e,t)},field:function(t,n){var i={};T.is.shorthandRules(n)?(n=e.isArray(n)?n:[n],i[t]={rules:[]},e.each(n,function(e,n){i[t].rules.push({type:n})})):i[t]=n,x=e.extend({},x,i),T.debug("Adding rules",i,x)},fields:function(t){var n;n=t&&T.is.shorthandFields(t)?T.get.fieldsFromShorthand(t):t,x=e.extend({},x,n)},prompt:function(t,n){var i=T.get.field(t),r=i.closest(p),a=r.children(E.prompt),o=0!==a.length;n="string"==typeof n?[n]:n,T.verbose("Adding field error state",t),r.addClass(w.error),y.inline&&(o||(a=y.templates.prompt(n),a.appendTo(r)),a.html(n[0]),o?T.verbose("Inline errors are disabled, no inline error added",t):y.transition&&void 0!==e.fn.transition&&D.transition("is supported")?(T.verbose("Displaying error with css transition",y.transition),a.transition(y.transition+" in",y.duration)):(T.verbose("Displaying error with fallback javascript animation"),a.fadeIn(y.duration)))},errors:function(e){T.debug("Adding form error messages",e),T.set.error(),m.html(y.templates.error(e))}},remove:{rule:function(t,n){var i=e.isArray(n)?n:[n];if(void 0==n)return T.debug("Removed all rules"),void(x[t].rules=[]);void 0!=x[t]&&e.isArray(x[t].rules)&&e.each(x[t].rules,function(e,n){-1!==i.indexOf(n.type)&&(T.debug("Removed rule",n.type),x[t].rules.splice(e,1))})},field:function(t){var n=e.isArray(t)?t:[t];e.each(n,function(e,t){T.remove.rule(t)})},rules:function(t,n){e.isArray(t)?e.each(fields,function(e,t){T.remove.rule(t,n)}):T.remove.rule(t,n)},fields:function(e){T.remove.field(e)},prompt:function(t){var n=T.get.field(t),i=n.closest(p),r=i.children(E.prompt);i.removeClass(w.error),y.inline&&r.is(":visible")&&(T.verbose("Removing prompt for field",t),y.transition&&void 0!==e.fn.transition&&D.transition("is supported")?r.transition(y.transition+" out",y.duration,function(){r.remove()}):r.fadeOut(y.duration,function(){r.remove()}))}},set:{success:function(){D.removeClass(w.error).addClass(w.success)},defaults:function(){f.each(function(){var t=e(this),n=t.filter(E.checkbox).length>0,i=n?t.is(":checked"):t.val();t.data(k.defaultValue,i)})},error:function(){D.removeClass(w.success).addClass(w.error)},value:function(e,t){var n={};return n[e]=t,T.set.values.call(O,n)},values:function(t){e.isEmptyObject(t)||e.each(t,function(t,n){var i,r=T.get.field(t),a=r.parent(),o=e.isArray(n),s=a.is(E.uiCheckbox),l=a.is(E.uiDropdown),u=r.is(E.radio)&&s,c=r.length>0;c&&(o&&s?(T.verbose("Selecting multiple",n,r),a.checkbox("uncheck"),e.each(n,function(e,t){i=r.filter('[value="'+t+'"]'),a=i.parent(),i.length>0&&a.checkbox("check")})):u?(T.verbose("Selecting radio value",n,r),r.filter('[value="'+n+'"]').parent(E.uiCheckbox).checkbox("check")):s?(T.verbose("Setting checkbox value",n,a),!0===n?a.checkbox("check"):a.checkbox("uncheck")):l?(T.verbose("Setting dropdown value",n,a),a.dropdown("set selected",n)):(T.verbose("Setting field value",n,r),r.val(n)))})}},validate:{form:function(e,t){var n=T.get.values();if($)return!1;if(j=[],T.determine.isValid()){if(T.debug("Form has no validation errors, submitting"),T.set.success(),!0!==t)return y.onSuccess.call(O,e,n)}else if(T.debug("Form has errors"),T.set.error(),y.inline||T.add.errors(j),void 0!==D.data("moduleApi")&&e.stopImmediatePropagation(),!0!==t)return y.onFailure.call(O,j,n)},field:function(t,n,i){i=void 0===i||i,"string"==typeof t&&(T.verbose("Validating field",t),n=t,t=x[t]);var r=t.identifier||n,a=T.get.field(r),o=!!t.depends&&T.get.field(t.depends),s=!0,l=[];return t.identifier||(T.debug("Using field name as identifier",r),t.identifier=r),a.prop("disabled")?(T.debug("Field is disabled. Skipping",r),s=!0):t.optional&&T.is.blank(a)?(T.debug("Field is optional and blank. Skipping",r),s=!0):t.depends&&T.is.empty(o)?(T.debug("Field depends on another value that is not present or empty. Skipping",o),s=!0):void 0!==t.rules&&e.each(t.rules,function(e,n){T.has.field(r)&&!T.validate.rule(t,n)&&(T.debug("Field is invalid",r,n.type),l.push(T.get.prompt(n,t)),s=!1)}),s?(i&&(T.remove.prompt(r,l),y.onValid.call(a)),!0):(i&&(j=j.concat(l),T.add.prompt(r,l),y.onInvalid.call(a,l)),!1)},rule:function(t,n){var i=T.get.field(t.identifier),r=(n.type,i.val()),a=T.get.ancillaryValue(n),o=T.get.ruleName(n),s=y.rules[o];return e.isFunction(s)?(r=void 0===r||""===r||null===r?"":e.trim(r+""),s.call(i,r,a)):void T.error(V.noRule,o)}},setting:function(t,n){if(e.isPlainObject(t))e.extend(!0,y,t);else{if(void 0===n)return y[t];y[t]=n}},internal:function(t,n){if(e.isPlainObject(t))e.extend(!0,T,t);else{if(void 0===n)return T[t];T[t]=n}},debug:function(){!y.silent&&y.debug&&(y.performance?T.performance.log(arguments):(T.debug=Function.prototype.bind.call(console.info,console,y.name+":"),T.debug.apply(console,arguments)))},verbose:function(){!y.silent&&y.verbose&&y.debug&&(y.performance?T.performance.log(arguments):(T.verbose=Function.prototype.bind.call(console.info,console,y.name+":"),T.verbose.apply(console,arguments)))},error:function(){y.silent||(T.error=Function.prototype.bind.call(console.error,console,y.name+":"),T.error.apply(console,arguments))},performance:{log:function(e){var t,n,i;y.performance&&(t=(new Date).getTime(),i=o||t,n=t-i,o=t,s.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:O,"Execution Time":n})),clearTimeout(T.performance.timer),T.performance.timer=setTimeout(T.performance.display,500)},display:function(){var t=y.name+":",n=0;o=!1,clearTimeout(T.performance.timer),e.each(s,function(e,t){n+=t["Execution Time"]}),t+=" "+n+"ms",a&&(t+=" '"+a+"'"),r.length>1&&(t+=" ("+r.length+")"),(void 0!==console.group||void 0!==console.table)&&s.length>0&&(console.groupCollapsed(t),console.table?console.table(s):e.each(s,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),s=[]}},invoke:function(t,n,r){var a,o,s,l=A;return n=n||d,r=O||r,"string"==typeof t&&void 0!==l&&(t=t.split(/[\. ]/),a=t.length-1,e.each(t,function(n,i){var r=n!=a?i+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(l[r])&&n!=a)l=l[r];else{if(void 0!==l[r])return o=l[r],!1;if(!e.isPlainObject(l[i])||n==a)return void 0!==l[i]&&(o=l[i],!1);l=l[i]}})),e.isFunction(o)?s=o.apply(r,n):void 0!==o&&(s=o),e.isArray(i)?i.push(s):void 0!==i?i=[i,s]:void 0!==s&&(i=s),o}},T.initialize()}),void 0!==i?i:this},e.fn.form.settings={name:"Form",namespace:"form",debug:!1,verbose:!1,performance:!0,fields:!1,keyboardShortcuts:!0,on:"submit",inline:!1,delay:200,revalidate:!0,transition:"scale",duration:200,onValid:function(){},onInvalid:function(){},onSuccess:function(){return!0},onFailure:function(){return!1},metadata:{defaultValue:"default",validate:"validate"},regExp:{htmlID:/^[a-zA-Z][\w:.-]*$/g,bracket:/\[(.*)\]/i,decimal:/^\d+\.?\d*$/,email:/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,escape:/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,flags:/^\/(.*)\/(.*)?/,integer:/^\-?\d+$/,number:/^\-?\d*(\.\d+)?$/,url:/(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/i},text:{unspecifiedRule:"Please enter a valid value",unspecifiedField:"This field"},prompt:{empty:"{name} must have a value",checked:"{name} must be checked",email:"{name} must be a valid e-mail",url:"{name} must be a valid url",regExp:"{name} is not formatted correctly",integer:"{name} must be an integer",decimal:"{name} must be a decimal number",number:"{name} must be set to a number",is:'{name} must be "{ruleValue}"',isExactly:'{name} must be exactly "{ruleValue}"',not:'{name} cannot be set to "{ruleValue}"',notExactly:'{name} cannot be set to exactly "{ruleValue}"',contain:'{name} cannot contain "{ruleValue}"',containExactly:'{name} cannot contain exactly "{ruleValue}"',doesntContain:'{name} must contain  "{ruleValue}"',doesntContainExactly:'{name} must contain exactly "{ruleValue}"',minLength:"{name} must be at least {ruleValue} characters",length:"{name} must be at least {ruleValue} characters",exactLength:"{name} must be exactly {ruleValue} characters",maxLength:"{name} cannot be longer than {ruleValue} characters",match:"{name} must match {ruleValue} field",different:"{name} must have a different value than {ruleValue} field",creditCard:"{name} must be a valid credit card number",minCount:"{name} must have at least {ruleValue} choices",exactCount:"{name} must have exactly {ruleValue} choices",maxCount:"{name} must have {ruleValue} or less choices"},selector:{checkbox:'input[type="checkbox"], input[type="radio"]',clear:".clear",field:"input, textarea, select",group:".field",input:"input",message:".error.message",prompt:".prompt.label",radio:'input[type="radio"]',reset:'.reset:not([type="reset"])',submit:'.submit:not([type="submit"])',uiCheckbox:".ui.checkbox",uiDropdown:".ui.dropdown"},className:{error:"error",label:"ui prompt label",pressed:"down",success:"success"},error:{identifier:"You must specify a string identifier for each field",method:"The method you called is not defined.",noRule:"There is no rule matching the one you specified",oldSyntax:"Starting in 2.0 forms now only take a single settings object. Validation settings converted to new syntax automatically."},templates:{error:function(t){var n='<ul class="list">';return e.each(t,function(e,t){n+="<li>"+t+"</li>"}),n+="</ul>",e(n)},prompt:function(t){return e("<div/>").addClass("ui basic red pointing prompt label").html(t[0])}},rules:{empty:function(t){return!(void 0===t||""===t||e.isArray(t)&&0===t.length)},checked:function(){return e(this).filter(":checked").length>0},email:function(t){return e.fn.form.settings.regExp.email.test(t)},url:function(t){return e.fn.form.settings.regExp.url.test(t)},regExp:function(t,n){if(n instanceof RegExp)return t.match(n);var i,r=n.match(e.fn.form.settings.regExp.flags);return r&&(n=r.length>=2?r[1]:n,i=r.length>=3?r[2]:""),t.match(new RegExp(n,i))},integer:function(t,n){var i,r,a,o=e.fn.form.settings.regExp.integer;return n&&-1===["",".."].indexOf(n)&&(-1==n.indexOf("..")?o.test(n)&&(i=r=n-0):(a=n.split("..",2),o.test(a[0])&&(i=a[0]-0),o.test(a[1])&&(r=a[1]-0))),o.test(t)&&(void 0===i||t>=i)&&(void 0===r||t<=r)},decimal:function(t){return e.fn.form.settings.regExp.decimal.test(t)},number:function(t){return e.fn.form.settings.regExp.number.test(t)},is:function(e,t){return t="string"==typeof t?t.toLowerCase():t,(e="string"==typeof e?e.toLowerCase():e)==t},isExactly:function(e,t){return e==t},not:function(e,t){return e="string"==typeof e?e.toLowerCase():e,t="string"==typeof t?t.toLowerCase():t,e!=t},notExactly:function(e,t){return e!=t},contains:function(t,n){return n=n.replace(e.fn.form.settings.regExp.escape,"\\$&"),-1!==t.search(new RegExp(n,"i"))},containsExactly:function(t,n){return n=n.replace(e.fn.form.settings.regExp.escape,"\\$&"),-1!==t.search(new RegExp(n))},doesntContain:function(t,n){return n=n.replace(e.fn.form.settings.regExp.escape,"\\$&"),-1===t.search(new RegExp(n,"i"))},doesntContainExactly:function(t,n){return n=n.replace(e.fn.form.settings.regExp.escape,"\\$&"),-1===t.search(new RegExp(n))},minLength:function(e,t){return void 0!==e&&e.length>=t},length:function(e,t){return void 0!==e&&e.length>=t},exactLength:function(e,t){return void 0!==e&&e.length==t},maxLength:function(e,t){return void 0!==e&&e.length<=t},match:function(t,n){var i;e(this);return e('[data-validate="'+n+'"]').length>0?i=e('[data-validate="'+n+'"]').val():e("#"+n).length>0?i=e("#"+n).val():e('[name="'+n+'"]').length>0?i=e('[name="'+n+'"]').val():e('[name="'+n+'[]"]').length>0&&(i=e('[name="'+n+'[]"]')),void 0!==i&&t.toString()==i.toString()},different:function(t,n){var i;e(this);return e('[data-validate="'+n+'"]').length>0?i=e('[data-validate="'+n+'"]').val():e("#"+n).length>0?i=e("#"+n).val():e('[name="'+n+'"]').length>0?i=e('[name="'+n+'"]').val():e('[name="'+n+'[]"]').length>0&&(i=e('[name="'+n+'[]"]')),void 0!==i&&t.toString()!==i.toString()},creditCard:function(t,n){var i,r,a={visa:{pattern:/^4/,length:[16]},amex:{pattern:/^3[47]/,length:[15]},mastercard:{pattern:/^5[1-5]/,length:[16]},discover:{pattern:/^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)/,length:[16]},unionPay:{pattern:/^(62|88)/,length:[16,17,18,19]},jcb:{pattern:/^35(2[89]|[3-8][0-9])/,length:[16]},maestro:{pattern:/^(5018|5020|5038|6304|6759|676[1-3])/,length:[12,13,14,15,16,17,18,19]},dinersClub:{pattern:/^(30[0-5]|^36)/,length:[14]},laser:{pattern:/^(6304|670[69]|6771)/,length:[16,17,18,19]},visaElectron:{pattern:/^(4026|417500|4508|4844|491(3|7))/,length:[16]}},o={},s=!1,l="string"==typeof n&&n.split(",");if("string"==typeof t&&0!==t.length){if(t=t.replace(/[\-]/g,""),l&&(e.each(l,function(n,i){(r=a[i])&&(o={length:-1!==e.inArray(t.length,r.length),pattern:-1!==t.search(r.pattern)},o.length&&o.pattern&&(s=!0))}),!s))return!1;if(i={number:-1!==e.inArray(t.length,a.unionPay.length),pattern:-1!==t.search(a.unionPay.pattern)},i.number&&i.pattern)return!0;for(var u=t.length,c=0,d=[[0,1,2,3,4,5,6,7,8,9],[0,2,4,6,8,1,3,5,7,9]],f=0;u--;)f+=d[c][parseInt(t.charAt(u),10)],c^=1;return f%10==0&&f>0}},minCount:function(e,t){return 0==t||(1==t?""!==e:e.split(",").length>=t)},exactCount:function(e,t){return 0==t?""===e:1==t?""!==e&&-1===e.search(","):e.split(",").length==t},maxCount:function(e,t){return 0!=t&&(1==t?-1===e.search(","):e.split(",").length<=t)}}}}(jQuery,window,document);
/*!
 * # Semantic UI 2.2.11 - Dropdown
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
!function(e,t,n,i){"use strict";t=void 0!==t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.dropdown=function(i){var o,a=e(this),s=e(n),r=a.selector||"",l="ontouchstart"in n.documentElement,c=(new Date).getTime(),u=[],d=arguments[0],v="string"==typeof d,f=[].slice.call(arguments,1);return a.each(function(m){var h,g,p,b,w,x,C,S,y=e.isPlainObject(i)?e.extend(!0,{},e.fn.dropdown.settings,i):e.extend({},e.fn.dropdown.settings),A=y.className,T=y.message,k=y.fields,L=y.keys,I=y.metadata,D=y.namespace,q=y.regExp,R=y.selector,O=y.error,V=y.templates,E="."+D,F="module-"+D,M=e(this),z=e(y.context),P=M.find(R.text),H=M.find(R.search),j=M.find(R.sizer),N=M.find(R.input),U=M.find(R.icon),K=M.prev().find(R.text).length>0?M.prev().find(R.text):M.prev(),W=M.children(R.menu),B=W.find(R.item),$=!1,Q=!1,X=!1,Y=this,G=M.data(F);S={initialize:function(){S.debug("Initializing dropdown",y),S.is.alreadySetup()?S.setup.reference():(S.setup.layout(),S.refreshData(),S.save.defaults(),S.restore.selected(),S.create.id(),S.bind.events(),S.observeChanges(),S.instantiate())},instantiate:function(){S.verbose("Storing instance of dropdown",S),G=S,M.data(F,S)},destroy:function(){S.verbose("Destroying previous dropdown",M),S.remove.tabbable(),M.off(E).removeData(F),W.off(E),s.off(b),S.disconnect.menuObserver(),S.disconnect.selectObserver()},observeChanges:function(){"MutationObserver"in t&&(x=new MutationObserver(S.event.select.mutation),C=new MutationObserver(S.event.menu.mutation),S.debug("Setting up mutation observer",x,C),S.observe.select(),S.observe.menu())},disconnect:{menuObserver:function(){C&&C.disconnect()},selectObserver:function(){x&&x.disconnect()}},observe:{select:function(){S.has.input()&&x.observe(N[0],{childList:!0,subtree:!0})},menu:function(){S.has.menu()&&C.observe(W[0],{childList:!0,subtree:!0})}},create:{id:function(){w=(Math.random().toString(16)+"000000000").substr(2,8),b="."+w,S.verbose("Creating unique id for element",w)},userChoice:function(t){var n,i,o;return!!(t=t||S.get.userValues())&&(t=e.isArray(t)?t:[t],e.each(t,function(t,a){!1===S.get.item(a)&&(o=y.templates.addition(S.add.variables(T.addResult,a)),i=e("<div />").html(o).attr("data-"+I.value,a).attr("data-"+I.text,a).addClass(A.addition).addClass(A.item),y.hideAdditions&&i.addClass(A.hidden),n=void 0===n?i:n.add(i),S.verbose("Creating user choices for value",a,i))}),n)},userLabels:function(t){var n=S.get.userValues();n&&(S.debug("Adding user labels",n),e.each(n,function(e,t){S.verbose("Adding custom user value"),S.add.label(t,t)}))},menu:function(){W=e("<div />").addClass(A.menu).appendTo(M)},sizer:function(){j=e("<span />").addClass(A.sizer).insertAfter(H)}},search:function(e){e=void 0!==e?e:S.get.query(),S.verbose("Searching for query",e),S.has.minCharacters(e)?S.filter(e):S.hide()},select:{firstUnfiltered:function(){S.verbose("Selecting first non-filtered element"),S.remove.selectedItem(),B.not(R.unselectable).not(R.addition+R.hidden).eq(0).addClass(A.selected)},nextAvailable:function(e){e=e.eq(0);var t=e.nextAll(R.item).not(R.unselectable).eq(0),n=e.prevAll(R.item).not(R.unselectable).eq(0);t.length>0?(S.verbose("Moving selection to",t),t.addClass(A.selected)):(S.verbose("Moving selection to",n),n.addClass(A.selected))}},setup:{api:function(){var e={debug:y.debug,urlData:{value:S.get.value(),query:S.get.query()},on:!1};S.verbose("First request, initializing API"),M.api(e)},layout:function(){M.is("select")&&(S.setup.select(),S.setup.returnedObject()),S.has.menu()||S.create.menu(),S.is.search()&&!S.has.search()&&(S.verbose("Adding search input"),H=e("<input />").addClass(A.search).prop("autocomplete","off").insertBefore(P)),S.is.multiple()&&S.is.searchSelection()&&!S.has.sizer()&&S.create.sizer(),y.allowTab&&S.set.tabbable()},select:function(){var t=S.get.selectValues();S.debug("Dropdown initialized on a select",t),M.is("select")&&(N=M),N.parent(R.dropdown).length>0?(S.debug("UI dropdown already exists. Creating dropdown menu only"),M=N.closest(R.dropdown),S.has.menu()||S.create.menu(),W=M.children(R.menu),S.setup.menu(t)):(S.debug("Creating entire dropdown from select"),M=e("<div />").attr("class",N.attr("class")).addClass(A.selection).addClass(A.dropdown).html(V.dropdown(t)).insertBefore(N),N.hasClass(A.multiple)&&!1===N.prop("multiple")&&(S.error(O.missingMultiple),N.prop("multiple",!0)),N.is("[multiple]")&&S.set.multiple(),N.prop("disabled")&&(S.debug("Disabling dropdown"),M.addClass(A.disabled)),N.removeAttr("class").detach().prependTo(M)),S.refresh()},menu:function(e){W.html(V.menu(e,k)),B=W.find(R.item)},reference:function(){S.debug("Dropdown behavior was called on select, replacing with closest dropdown"),M=M.parent(R.dropdown),S.refresh(),S.setup.returnedObject(),v&&(G=S,S.invoke(d))},returnedObject:function(){var e=a.slice(0,m),t=a.slice(m+1);a=e.add(M).add(t)}},refresh:function(){S.refreshSelectors(),S.refreshData()},refreshItems:function(){B=W.find(R.item)},refreshSelectors:function(){S.verbose("Refreshing selector cache"),P=M.find(R.text),H=M.find(R.search),N=M.find(R.input),U=M.find(R.icon),K=M.prev().find(R.text).length>0?M.prev().find(R.text):M.prev(),W=M.children(R.menu),B=W.find(R.item)},refreshData:function(){S.verbose("Refreshing cached metadata"),B.removeData(I.text).removeData(I.value)},clearData:function(){S.verbose("Clearing metadata"),B.removeData(I.text).removeData(I.value),M.removeData(I.defaultText).removeData(I.defaultValue).removeData(I.placeholderText)},toggle:function(){S.verbose("Toggling menu visibility"),S.is.active()?S.hide():S.show()},show:function(t){if(t=e.isFunction(t)?t:function(){},!S.can.show()&&S.is.remote()&&(S.debug("No API results retrieved, searching before show"),S.queryRemote(S.get.query(),S.show)),S.can.show()&&!S.is.active()){if(S.debug("Showing dropdown"),!S.has.message()||S.has.maxSelections()||S.has.allResultsFiltered()||S.remove.message(),S.is.allFiltered())return!0;!1!==y.onShow.call(Y)&&S.animate.show(function(){S.can.click()&&S.bind.intent(),S.has.menuSearch()&&S.focusSearch(),S.set.visible(),t.call(Y)})}},hide:function(t){t=e.isFunction(t)?t:function(){},S.is.active()&&(S.debug("Hiding dropdown"),!1!==y.onHide.call(Y)&&S.animate.hide(function(){S.remove.visible(),t.call(Y)}))},hideOthers:function(){S.verbose("Finding other dropdowns to hide"),a.not(M).has(R.menu+"."+A.visible).dropdown("hide")},hideMenu:function(){S.verbose("Hiding menu  instantaneously"),S.remove.active(),S.remove.visible(),W.transition("hide")},hideSubMenus:function(){var e=W.children(R.item).find(R.menu);S.verbose("Hiding sub menus",e),e.transition("hide")},bind:{events:function(){l&&S.bind.touchEvents(),S.bind.keyboardEvents(),S.bind.inputEvents(),S.bind.mouseEvents()},touchEvents:function(){S.debug("Touch device detected binding additional touch events"),S.is.searchSelection()||S.is.single()&&M.on("touchstart"+E,S.event.test.toggle),W.on("touchstart"+E,R.item,S.event.item.mouseenter)},keyboardEvents:function(){S.verbose("Binding keyboard events"),M.on("keydown"+E,S.event.keydown),S.has.search()&&M.on(S.get.inputEvent()+E,R.search,S.event.input),S.is.multiple()&&s.on("keydown"+b,S.event.document.keydown)},inputEvents:function(){S.verbose("Binding input change events"),M.on("change"+E,R.input,S.event.change)},mouseEvents:function(){S.verbose("Binding mouse events"),S.is.multiple()&&M.on("click"+E,R.label,S.event.label.click).on("click"+E,R.remove,S.event.remove.click),S.is.searchSelection()?(M.on("mousedown"+E,S.event.mousedown).on("mouseup"+E,S.event.mouseup).on("mousedown"+E,R.menu,S.event.menu.mousedown).on("mouseup"+E,R.menu,S.event.menu.mouseup).on("click"+E,R.icon,S.event.icon.click).on("focus"+E,R.search,S.event.search.focus).on("click"+E,R.search,S.event.search.focus).on("blur"+E,R.search,S.event.search.blur).on("click"+E,R.text,S.event.text.focus),S.is.multiple()&&M.on("click"+E,S.event.click)):("click"==y.on?M.on("click"+E,R.icon,S.event.icon.click).on("click"+E,S.event.test.toggle):"hover"==y.on?M.on("mouseenter"+E,S.delay.show).on("mouseleave"+E,S.delay.hide):M.on(y.on+E,S.toggle),M.on("mousedown"+E,S.event.mousedown).on("mouseup"+E,S.event.mouseup).on("focus"+E,S.event.focus),S.has.menuSearch()?M.on("blur"+E,R.search,S.event.search.blur):M.on("blur"+E,S.event.blur)),W.on("mouseenter"+E,R.item,S.event.item.mouseenter).on("mouseleave"+E,R.item,S.event.item.mouseleave).on("click"+E,R.item,S.event.item.click)},intent:function(){S.verbose("Binding hide intent event to document"),l&&s.on("touchstart"+b,S.event.test.touch).on("touchmove"+b,S.event.test.touch),s.on("click"+b,S.event.test.hide)}},unbind:{intent:function(){S.verbose("Removing hide intent event from document"),l&&s.off("touchstart"+b).off("touchmove"+b),s.off("click"+b)}},filter:function(e){var t=void 0!==e?e:S.get.query(),n=function(){S.is.multiple()&&S.filterActive(),(e||!e&&0==S.get.activeItem().length)&&S.select.firstUnfiltered(),S.has.allResultsFiltered()?y.onNoResults.call(Y,t)?y.allowAdditions?y.hideAdditions&&(S.verbose("User addition with no menu, setting empty style"),S.set.empty(),S.hideMenu()):(S.verbose("All items filtered, showing message",t),S.add.message(T.noResults)):(S.verbose("All items filtered, hiding dropdown",t),S.hideMenu()):(S.remove.empty(),S.remove.message()),y.allowAdditions&&S.add.userSuggestion(e),S.is.searchSelection()&&S.can.show()&&S.is.focusedOnSearch()&&S.show()};y.useLabels&&S.has.maxSelections()||(y.apiSettings?S.can.useAPI()?S.queryRemote(t,function(){y.filterRemoteData&&S.filterItems(t),n()}):S.error(O.noAPI):(S.filterItems(t),n()))},queryRemote:function(t,n){var i={errorDuration:!1,cache:"local",throttle:y.throttle,urlData:{query:t},onError:function(){S.add.message(T.serverError),n()},onFailure:function(){S.add.message(T.serverError),n()},onSuccess:function(e){S.remove.message(),S.setup.menu({values:e[k.remoteValues]}),n()}};M.api("get request")||S.setup.api(),i=e.extend(!0,{},i,y.apiSettings),M.api("setting",i).api("query")},filterItems:function(t){var n=void 0!==t?t:S.get.query(),i=null,o=S.escape.string(n),a=new RegExp("^"+o,"igm");S.has.query()&&(i=[],S.verbose("Searching for matching values",n),B.each(function(){var t,o,s=e(this);if("both"==y.match||"text"==y.match){if(t=String(S.get.choiceText(s,!1)),-1!==t.search(a))return i.push(this),!0;if("exact"===y.fullTextSearch&&S.exactSearch(n,t))return i.push(this),!0;if(!0===y.fullTextSearch&&S.fuzzySearch(n,t))return i.push(this),!0}if("both"==y.match||"value"==y.match){if(o=String(S.get.choiceValue(s,t)),-1!==o.search(a))return i.push(this),!0;if("exact"===y.fullTextSearch&&S.exactSearch(n,o))return i.push(this),!0;if(!0===y.fullTextSearch&&S.fuzzySearch(n,o))return i.push(this),!0}})),S.debug("Showing only matched items",n),S.remove.filteredItem(),i&&B.not(i).addClass(A.filtered)},fuzzySearch:function(e,t){var n=t.length,i=e.length;if(e=e.toLowerCase(),t=t.toLowerCase(),i>n)return!1;if(i===n)return e===t;e:for(var o=0,a=0;o<i;o++){for(var s=e.charCodeAt(o);a<n;)if(t.charCodeAt(a++)===s)continue e;return!1}return!0},exactSearch:function(e,t){return e=e.toLowerCase(),t=t.toLowerCase(),t.indexOf(e)>-1},filterActive:function(){y.useLabels&&B.filter("."+A.active).addClass(A.filtered)},focusSearch:function(e){S.has.search()&&!S.is.focusedOnSearch()&&(e?(M.off("focus"+E,R.search),H.focus(),M.on("focus"+E,R.search,S.event.search.focus)):H.focus())},forceSelection:function(){var e=B.not(A.filtered).filter("."+A.selected).eq(0),t=B.not(A.filtered).filter("."+A.active).eq(0),n=e.length>0?e:t;if(n.length>0&&!S.is.multiple())return S.debug("Forcing partial selection to selected item",n),void S.event.item.click.call(n,{},!0);y.allowAdditions?(S.set.selected(S.get.query()),S.remove.searchTerm()):S.remove.searchTerm()},event:{change:function(){X||(S.debug("Input changed, updating selection"),S.set.selected())},focus:function(){y.showOnFocus&&!$&&S.is.hidden()&&!g&&S.show()},blur:function(e){g=n.activeElement===this,$||g||(S.remove.activeLabel(),S.hide())},mousedown:function(){S.is.searchSelection()?p=!0:$=!0},mouseup:function(){S.is.searchSelection()?p=!1:$=!1},click:function(t){e(t.target).is(M)&&(S.is.focusedOnSearch()?S.show():S.focusSearch())},search:{focus:function(){$=!0,S.is.multiple()&&S.remove.activeLabel(),y.showOnFocus&&S.search()},blur:function(e){g=n.activeElement===this,S.is.searchSelection()&&!p&&(Q||g||(y.forceSelection&&S.forceSelection(),S.hide())),p=!1}},icon:{click:function(e){S.toggle()}},text:{focus:function(e){$=!0,S.focusSearch()}},input:function(e){(S.is.multiple()||S.is.searchSelection())&&S.set.filtered(),clearTimeout(S.timer),S.timer=setTimeout(S.search,y.delay.search)},label:{click:function(t){var n=e(this),i=M.find(R.label),o=i.filter("."+A.active),a=n.nextAll("."+A.active),s=n.prevAll("."+A.active),r=a.length>0?n.nextUntil(a).add(o).add(n):n.prevUntil(s).add(o).add(n);t.shiftKey?(o.removeClass(A.active),r.addClass(A.active)):t.ctrlKey?n.toggleClass(A.active):(o.removeClass(A.active),n.addClass(A.active)),y.onLabelSelect.apply(this,i.filter("."+A.active))}},remove:{click:function(){var t=e(this).parent();t.hasClass(A.active)?S.remove.activeLabels():S.remove.activeLabels(t)}},test:{toggle:function(e){var t=S.is.multiple()?S.show:S.toggle;S.is.bubbledLabelClick(e)||S.is.bubbledIconClick(e)||S.determine.eventOnElement(e,t)&&e.preventDefault()},touch:function(e){S.determine.eventOnElement(e,function(){"touchstart"==e.type?S.timer=setTimeout(function(){S.hide()},y.delay.touch):"touchmove"==e.type&&clearTimeout(S.timer)}),e.stopPropagation()},hide:function(e){S.determine.eventInModule(e,S.hide)}},select:{mutation:function(e){S.debug("<select> modified, recreating menu"),S.setup.select()}},menu:{mutation:function(t){var n=t[0],i=e(n.addedNodes?n.addedNodes[0]:!1),o=e(n.removedNodes?n.removedNodes[0]:!1),a=i.add(o),s=a.is(R.addition)||a.closest(R.addition).length>0,r=a.is(R.message)||a.closest(R.message).length>0;s||r?(S.debug("Updating item selector cache"),S.refreshItems()):(S.debug("Menu modified, updating selector cache"),S.refresh())},mousedown:function(){Q=!0},mouseup:function(){Q=!1}},item:{mouseenter:function(t){var n=e(t.target),i=e(this),o=i.children(R.menu),a=i.siblings(R.item).children(R.menu),s=o.length>0;!(o.find(n).length>0)&&s&&(clearTimeout(S.itemTimer),S.itemTimer=setTimeout(function(){S.verbose("Showing sub-menu",o),e.each(a,function(){S.animate.hide(!1,e(this))}),S.animate.show(!1,o)},y.delay.show),t.preventDefault())},mouseleave:function(t){var n=e(this).children(R.menu);n.length>0&&(clearTimeout(S.itemTimer),S.itemTimer=setTimeout(function(){S.verbose("Hiding sub-menu",n),S.animate.hide(!1,n)},y.delay.hide))},click:function(t,i){var o=e(this),a=e(t?t.target:""),s=o.find(R.menu),r=S.get.choiceText(o),l=S.get.choiceValue(o,r),c=s.length>0,u=s.find(a).length>0;S.has.menuSearch()&&e(n.activeElement).blur(),u||c&&!y.allowCategorySelection||(S.is.searchSelection()&&(y.allowAdditions&&S.remove.userAddition(),S.remove.searchTerm(),S.is.focusedOnSearch()||1==i||S.focusSearch(!0)),y.useLabels||(S.remove.filteredItem(),S.set.scrollPosition(o)),S.determine.selectAction.call(this,r,l))}},document:{keydown:function(e){var t=e.which;if(S.is.inObject(t,L)){var n=M.find(R.label),i=n.filter("."+A.active),o=(i.data(I.value),n.index(i)),a=n.length,s=i.length>0,r=i.length>1,l=0===o,c=o+1==a,u=S.is.searchSelection(),d=S.is.focusedOnSearch(),v=S.is.focused(),f=d&&0===S.get.caretPosition();if(u&&!s&&!d)return;t==L.leftArrow?!v&&!f||s?s&&(e.shiftKey?S.verbose("Adding previous label to selection"):(S.verbose("Selecting previous label"),n.removeClass(A.active)),l&&!r?i.addClass(A.active):i.prev(R.siblingLabel).addClass(A.active).end(),e.preventDefault()):(S.verbose("Selecting previous label"),n.last().addClass(A.active)):t==L.rightArrow?(v&&!s&&n.first().addClass(A.active),s&&(e.shiftKey?S.verbose("Adding next label to selection"):(S.verbose("Selecting next label"),n.removeClass(A.active)),c?u?d?n.removeClass(A.active):S.focusSearch():r?i.next(R.siblingLabel).addClass(A.active):i.addClass(A.active):i.next(R.siblingLabel).addClass(A.active),e.preventDefault())):t==L.deleteKey||t==L.backspace?s?(S.verbose("Removing active labels"),c&&u&&!d&&S.focusSearch(),i.last().next(R.siblingLabel).addClass(A.active),S.remove.activeLabels(i),e.preventDefault()):f&&!s&&t==L.backspace&&(S.verbose("Removing last label on input backspace"),i=n.last().addClass(A.active),S.remove.activeLabels(i)):i.removeClass(A.active)}}},keydown:function(e){var t=e.which;if(S.is.inObject(t,L)){var n,i=B.not(R.unselectable).filter("."+A.selected).eq(0),o=W.children("."+A.active).eq(0),a=i.length>0?i:o,s=a.length>0?a.siblings(":not(."+A.filtered+")").addBack():W.children(":not(."+A.filtered+")"),r=a.children(R.menu),l=a.closest(R.menu),c=l.hasClass(A.visible)||l.hasClass(A.animating)||l.parent(R.menu).length>0,u=r.length>0,d=a.length>0,v=a.not(R.unselectable).length>0,f=t==L.delimiter&&y.allowAdditions&&S.is.multiple(),m=y.allowAdditions&&y.hideAdditions&&(t==L.enter||f)&&v;if(m&&(S.verbose("Selecting item from keyboard shortcut",a),S.event.item.click.call(a,e),S.is.searchSelection()&&S.remove.searchTerm()),S.is.visible()){if((t==L.enter||f)&&(t==L.enter&&d&&u&&!y.allowCategorySelection?(S.verbose("Pressed enter on unselectable category, opening sub menu"),t=L.rightArrow):v&&(S.verbose("Selecting item from keyboard shortcut",a),S.event.item.click.call(a,e),S.is.searchSelection()&&S.remove.searchTerm()),e.preventDefault()),d&&(t==L.leftArrow&&l[0]!==W[0]&&(S.verbose("Left key pressed, closing sub-menu"),S.animate.hide(!1,l),a.removeClass(A.selected),l.closest(R.item).addClass(A.selected),e.preventDefault()),t==L.rightArrow&&u&&(S.verbose("Right key pressed, opening sub-menu"),S.animate.show(!1,r),a.removeClass(A.selected),r.find(R.item).eq(0).addClass(A.selected),e.preventDefault())),t==L.upArrow){if(n=d&&c?a.prevAll(R.item+":not("+R.unselectable+")").eq(0):B.eq(0),s.index(n)<0)return S.verbose("Up key pressed but reached top of current menu"),void e.preventDefault();S.verbose("Up key pressed, changing active item"),a.removeClass(A.selected),n.addClass(A.selected),S.set.scrollPosition(n),y.selectOnKeydown&&S.is.single()&&S.set.selectedItem(n),e.preventDefault()}if(t==L.downArrow){if(n=d&&c?n=a.nextAll(R.item+":not("+R.unselectable+")").eq(0):B.eq(0),0===n.length)return S.verbose("Down key pressed but reached bottom of current menu"),void e.preventDefault();S.verbose("Down key pressed, changing active item"),B.removeClass(A.selected),n.addClass(A.selected),S.set.scrollPosition(n),y.selectOnKeydown&&S.is.single()&&S.set.selectedItem(n),e.preventDefault()}t==L.pageUp&&(S.scrollPage("up"),e.preventDefault()),t==L.pageDown&&(S.scrollPage("down"),e.preventDefault()),t==L.escape&&(S.verbose("Escape key pressed, closing dropdown"),S.hide())}else f&&e.preventDefault(),t!=L.downArrow||S.is.visible()||(S.verbose("Down key pressed, showing dropdown"),S.show(),e.preventDefault())}else S.has.search()||S.set.selectedLetter(String.fromCharCode(t))}},trigger:{change:function(){var e=n.createEvent("HTMLEvents"),t=N[0];t&&(S.verbose("Triggering native change event"),e.initEvent("change",!0,!1),t.dispatchEvent(e))}},determine:{selectAction:function(t,n){S.verbose("Determining action",y.action),e.isFunction(S.action[y.action])?(S.verbose("Triggering preset action",y.action,t,n),S.action[y.action].call(Y,t,n,this)):e.isFunction(y.action)?(S.verbose("Triggering user action",y.action,t,n),y.action.call(Y,t,n,this)):S.error(O.action,y.action)},eventInModule:function(t,i){var o=e(t.target),a=o.closest(n.documentElement).length>0,s=o.closest(M).length>0;return i=e.isFunction(i)?i:function(){},a&&!s?(S.verbose("Triggering event",i),i(),!0):(S.verbose("Event occurred in dropdown, canceling callback"),!1)},eventOnElement:function(t,i){var o=e(t.target),a=o.closest(R.siblingLabel),s=n.body.contains(t.target),r=0===M.find(a).length,l=0===o.closest(W).length;return i=e.isFunction(i)?i:function(){},s&&r&&l?(S.verbose("Triggering event",i),i(),!0):(S.verbose("Event occurred in dropdown menu, canceling callback"),!1)}},action:{nothing:function(){},activate:function(t,n,i){if(n=void 0!==n?n:t,S.can.activate(e(i))){if(S.set.selected(n,e(i)),S.is.multiple()&&!S.is.allFiltered())return;S.hideAndClear()}},select:function(t,n,i){if(n=void 0!==n?n:t,S.can.activate(e(i))){if(S.set.value(n,e(i)),S.is.multiple()&&!S.is.allFiltered())return;S.hideAndClear()}},combo:function(t,n,i){n=void 0!==n?n:t,S.set.selected(n,e(i)),S.hideAndClear()},hide:function(e,t,n){S.set.value(t,e),S.hideAndClear()}},get:{id:function(){return w},defaultText:function(){return M.data(I.defaultText)},defaultValue:function(){return M.data(I.defaultValue)},placeholderText:function(){return M.data(I.placeholderText)||""},text:function(){return P.text()},query:function(){return e.trim(H.val())},searchWidth:function(e){return e=void 0!==e?e:H.val(),j.text(e),Math.ceil(j.width()+1)},selectionCount:function(){var t=S.get.values();return S.is.multiple()?e.isArray(t)?t.length:0:""!==S.get.value()?1:0},transition:function(e){return"auto"==y.transition?S.is.upward(e)?"slide up":"slide down":y.transition},userValues:function(){var t=S.get.values();return!!t&&(t=e.isArray(t)?t:[t],e.grep(t,function(e){return!1===S.get.item(e)}))},uniqueArray:function(t){return e.grep(t,function(n,i){return e.inArray(n,t)===i})},caretPosition:function(){var e,t,i=H.get(0);return"selectionStart"in i?i.selectionStart:n.selection?(i.focus(),e=n.selection.createRange(),t=e.text.length,e.moveStart("character",-i.value.length),e.text.length-t):void 0},value:function(){var t=N.length>0?N.val():M.data(I.value),n=e.isArray(t)&&1===t.length&&""===t[0];return void 0===t||n?"":t},values:function(){var e=S.get.value();return""===e?"":!S.has.selectInput()&&S.is.multiple()?"string"==typeof e?e.split(y.delimiter):"":e},remoteValues:function(){var t=S.get.values(),n=!1;return t&&("string"==typeof t&&(t=[t]),e.each(t,function(e,t){var i=S.read.remoteData(t);S.verbose("Restoring value from session data",i,t),i&&(n||(n={}),n[t]=i)})),n},choiceText:function(t,n){if(n=void 0!==n?n:y.preserveHTML,t)return t.find(R.menu).length>0&&(S.verbose("Retrieving text of element with sub-menu"),t=t.clone(),t.find(R.menu).remove(),t.find(R.menuIcon).remove()),void 0!==t.data(I.text)?t.data(I.text):n?e.trim(t.html()):e.trim(t.text())},choiceValue:function(t,n){return n=n||S.get.choiceText(t),!!t&&(void 0!==t.data(I.value)?String(t.data(I.value)):"string"==typeof n?e.trim(n.toLowerCase()):String(n))},inputEvent:function(){var e=H[0];return!!e&&(void 0!==e.oninput?"input":void 0!==e.onpropertychange?"propertychange":"keyup")},selectValues:function(){var t={};return t.values=[],M.find("option").each(function(){var n=e(this),i=n.html(),o=n.attr("disabled"),a=void 0!==n.attr("value")?n.attr("value"):i;"auto"===y.placeholder&&""===a?t.placeholder=i:t.values.push({name:i,value:a,disabled:o})}),y.placeholder&&"auto"!==y.placeholder&&(S.debug("Setting placeholder value to",y.placeholder),t.placeholder=y.placeholder),y.sortSelect?(t.values.sort(function(e,t){return e.name>t.name?1:-1}),S.debug("Retrieved and sorted values from select",t)):S.debug("Retrieved values from select",t),t},activeItem:function(){return B.filter("."+A.active)},selectedItem:function(){var e=B.not(R.unselectable).filter("."+A.selected);return e.length>0?e:B.eq(0)},itemWithAdditions:function(e){var t=S.get.item(e),n=S.create.userChoice(e);return n&&n.length>0&&(t=t.length>0?t.add(n):n),t},item:function(t,n){var i,o,a=!1;return t=void 0!==t?t:void 0!==S.get.values()?S.get.values():S.get.text(),i=o?t.length>0:void 0!==t&&null!==t,o=S.is.multiple()&&e.isArray(t),n=""===t||0===t||(n||!1),i&&B.each(function(){var i=e(this),s=S.get.choiceText(i),r=S.get.choiceValue(i,s);if(null!==r&&void 0!==r)if(o)-1===e.inArray(String(r),t)&&-1===e.inArray(s,t)||(a=a?a.add(i):i);else if(n){if(S.verbose("Ambiguous dropdown value using strict type check",i,t),r===t||s===t)return a=i,!0}else if(String(r)==String(t)||s==t)return S.verbose("Found select item by value",r,t),a=i,!0}),a}},check:{maxSelections:function(e){return!y.maxSelections||(e=void 0!==e?e:S.get.selectionCount(),e>=y.maxSelections?(S.debug("Maximum selection count reached"),y.useLabels&&(B.addClass(A.filtered),S.add.message(T.maxSelections)),!0):(S.verbose("No longer at maximum selection count"),S.remove.message(),S.remove.filteredItem(),S.is.searchSelection()&&S.filterItems(),!1))}},restore:{defaults:function(){S.clear(),S.restore.defaultText(),S.restore.defaultValue()},defaultText:function(){var e=S.get.defaultText();e===S.get.placeholderText?(S.debug("Restoring default placeholder text",e),S.set.placeholderText(e)):(S.debug("Restoring default text",e),S.set.text(e))},placeholderText:function(){S.set.placeholderText()},defaultValue:function(){var e=S.get.defaultValue();void 0!==e&&(S.debug("Restoring default value",e),""!==e?(S.set.value(e),S.set.selected()):(S.remove.activeItem(),S.remove.selectedItem()))},labels:function(){y.allowAdditions&&(y.useLabels||(S.error(O.labels),y.useLabels=!0),S.debug("Restoring selected values"),S.create.userLabels()),S.check.maxSelections()},selected:function(){S.restore.values(),S.is.multiple()?(S.debug("Restoring previously selected values and labels"),S.restore.labels()):S.debug("Restoring previously selected values")},values:function(){S.set.initialLoad(),y.apiSettings&&y.saveRemoteData&&S.get.remoteValues()?S.restore.remoteValues():S.set.selected(),S.remove.initialLoad()},remoteValues:function(){var t=S.get.remoteValues();S.debug("Recreating selected from session data",t),t&&(S.is.single()?e.each(t,function(e,t){S.set.text(t)}):e.each(t,function(e,t){S.add.label(e,t)}))}},read:{remoteData:function(e){var n;return void 0===t.Storage?void S.error(O.noStorage):void 0!==(n=sessionStorage.getItem(e))&&n}},save:{defaults:function(){S.save.defaultText(),S.save.placeholderText(),S.save.defaultValue()},defaultValue:function(){var e=S.get.value();S.verbose("Saving default value as",e),M.data(I.defaultValue,e)},defaultText:function(){var e=S.get.text();S.verbose("Saving default text as",e),M.data(I.defaultText,e)},placeholderText:function(){var e;!1!==y.placeholder&&P.hasClass(A.placeholder)&&(e=S.get.text(),S.verbose("Saving placeholder text as",e),M.data(I.placeholderText,e))},remoteData:function(e,n){if(void 0===t.Storage)return void S.error(O.noStorage);S.verbose("Saving remote data to session storage",n,e),sessionStorage.setItem(n,e)}},clear:function(){S.is.multiple()&&y.useLabels?S.remove.labels():(S.remove.activeItem(),S.remove.selectedItem()),S.set.placeholderText(),S.clearValue()},clearValue:function(){S.set.value("")},scrollPage:function(e,t){var n,i,o,a=t||S.get.selectedItem(),s=a.closest(R.menu),r=s.outerHeight(),l=s.scrollTop(),c=B.eq(0).outerHeight(),u=Math.floor(r/c),d=(s.prop("scrollHeight"),"up"==e?l-c*u:l+c*u),v=B.not(R.unselectable);o="up"==e?v.index(a)-u:v.index(a)+u,n="up"==e?o>=0:o<v.length,i=n?v.eq(o):"up"==e?v.first():v.last(),i.length>0&&(S.debug("Scrolling page",e,i),a.removeClass(A.selected),i.addClass(A.selected),y.selectOnKeydown&&S.is.single()&&S.set.selectedItem(i),s.scrollTop(d))},set:{filtered:function(){var e=S.is.multiple(),t=S.is.searchSelection(),n=e&&t,i=t?S.get.query():"",o="string"==typeof i&&i.length>0,a=S.get.searchWidth(),s=""!==i;e&&o&&(S.verbose("Adjusting input width",a,y.glyphWidth),H.css("width",a)),o||n&&s?(S.verbose("Hiding placeholder text"),P.addClass(A.filtered)):(!e||n&&!s)&&(S.verbose("Showing placeholder text"),P.removeClass(A.filtered))},empty:function(){M.addClass(A.empty)},loading:function(){M.addClass(A.loading)},placeholderText:function(e){e=e||S.get.placeholderText(),S.debug("Setting placeholder text",e),S.set.text(e),P.addClass(A.placeholder)},tabbable:function(){S.is.searchSelection()?(S.debug("Added tabindex to searchable dropdown"),H.val("").attr("tabindex",0),W.attr("tabindex",-1)):(S.debug("Added tabindex to dropdown"),void 0===M.attr("tabindex")&&(M.attr("tabindex",0),W.attr("tabindex",-1)))},initialLoad:function(){S.verbose("Setting initial load"),h=!0},activeItem:function(e){y.allowAdditions&&e.filter(R.addition).length>0?e.addClass(A.filtered):e.addClass(A.active)},partialSearch:function(e){var t=S.get.query().length;H.val(e.substr(0,t))},scrollPosition:function(e,t){var n,i,o,a,s,r,l,c,u;e=e||S.get.selectedItem(),n=e.closest(R.menu),i=e&&e.length>0,t=void 0!==t&&t,e&&n.length>0&&i&&(a=e.position().top,n.addClass(A.loading),r=n.scrollTop(),s=n.offset().top,a=e.offset().top,o=r-s+a,t||(l=n.height(),u=r+l<o+5,c=o-5<r),S.debug("Scrolling to active item",o),(t||c||u)&&n.scrollTop(o),n.removeClass(A.loading))},text:function(e){"select"!==y.action&&("combo"==y.action?(S.debug("Changing combo button text",e,K),y.preserveHTML?K.html(e):K.text(e)):(e!==S.get.placeholderText()&&P.removeClass(A.placeholder),S.debug("Changing text",e,P),P.removeClass(A.filtered),y.preserveHTML?P.html(e):P.text(e)))},selectedItem:function(e){var t=S.get.choiceValue(e),n=S.get.choiceText(e,!1),i=S.get.choiceText(e,!0);S.debug("Setting user selection to item",e),S.remove.activeItem(),S.set.partialSearch(n),S.set.activeItem(e),S.set.selected(t,e),S.set.text(i)},selectedLetter:function(t){var n,i=B.filter("."+A.selected),o=i.length>0&&S.has.firstLetter(i,t),a=!1;o&&(n=i.nextAll(B).eq(0),S.has.firstLetter(n,t)&&(a=n)),a||B.each(function(){if(S.has.firstLetter(e(this),t))return a=e(this),!1}),a&&(S.verbose("Scrolling to next value with letter",t),S.set.scrollPosition(a),i.removeClass(A.selected),a.addClass(A.selected),y.selectOnKeydown&&S.is.single()&&S.set.selectedItem(a))},direction:function(e){"auto"==y.direction?(S.remove.upward(),S.can.openDownward(e)?S.remove.upward(e):S.set.upward(e),S.is.leftward(e)||S.can.openRightward(e)||S.set.leftward(e)):"upward"==y.direction&&S.set.upward(e)},upward:function(e){(e||M).addClass(A.upward)},leftward:function(e){(e||W).addClass(A.leftward)},value:function(e,t,n){var i=S.escape.value(e),o=N.length>0,a=(S.has.value(e),S.get.values()),s=void 0!==e?String(e):e;if(o){if(!y.allowReselection&&s==a&&(S.verbose("Skipping value update already same value",e,a),!S.is.initialLoad()))return;S.is.single()&&S.has.selectInput()&&S.can.extendSelect()&&(S.debug("Adding user option",e),S.add.optionValue(e)),S.debug("Updating input value",i,a),X=!0,N.val(i),!1===y.fireOnInit&&S.is.initialLoad()?S.debug("Input native change event ignored on initial load"):S.trigger.change(),X=!1}else S.verbose("Storing value in metadata",i,N),i!==a&&M.data(I.value,s);!1===y.fireOnInit&&S.is.initialLoad()?S.verbose("No callback on initial load",y.onChange):y.onChange.call(Y,e,t,n)},active:function(){M.addClass(A.active)},multiple:function(){M.addClass(A.multiple)},visible:function(){M.addClass(A.visible)},exactly:function(e,t){S.debug("Setting selected to exact values"),S.clear(),S.set.selected(e,t)},selected:function(t,n){var i=S.is.multiple();(n=y.allowAdditions?n||S.get.itemWithAdditions(t):n||S.get.item(t))&&(S.debug("Setting selected menu item to",n),S.is.multiple()&&S.remove.searchWidth(),S.is.single()?(S.remove.activeItem(),S.remove.selectedItem()):y.useLabels&&S.remove.selectedItem(),n.each(function(){var t=e(this),o=S.get.choiceText(t),a=S.get.choiceValue(t,o),s=t.hasClass(A.filtered),r=t.hasClass(A.active),l=t.hasClass(A.addition),c=i&&1==n.length;i?!r||l?(y.apiSettings&&y.saveRemoteData&&S.save.remoteData(o,a),y.useLabels?(S.add.value(a,o,t),S.add.label(a,o,c),S.set.activeItem(t),S.filterActive(),S.select.nextAvailable(n)):(S.add.value(a,o,t),S.set.text(S.add.variables(T.count)),S.set.activeItem(t))):s||(S.debug("Selected active value, removing label"),S.remove.selected(a)):(y.apiSettings&&y.saveRemoteData&&S.save.remoteData(o,a),S.set.text(o),S.set.value(a,o,t),t.addClass(A.active).addClass(A.selected))}))}},add:{label:function(t,n,i){var o,a=S.is.searchSelection()?H:P,s=S.escape.value(t);if(o=e("<a />").addClass(A.label).attr("data-"+I.value,s).html(V.label(s,n)),o=y.onLabelCreate.call(o,s,n),S.has.label(t))return void S.debug("Label already exists, skipping",s)
;y.label.variation&&o.addClass(y.label.variation),!0===i?(S.debug("Animating in label",o),o.addClass(A.hidden).insertBefore(a).transition(y.label.transition,y.label.duration)):(S.debug("Adding selection label",o),o.insertBefore(a))},message:function(t){var n=W.children(R.message),i=y.templates.message(S.add.variables(t));n.length>0?n.html(i):n=e("<div/>").html(i).addClass(A.message).appendTo(W)},optionValue:function(t){var n=S.escape.value(t);N.find('option[value="'+S.escape.string(n)+'"]').length>0||(S.disconnect.selectObserver(),S.is.single()&&(S.verbose("Removing previous user addition"),N.find("option."+A.addition).remove()),e("<option/>").prop("value",n).addClass(A.addition).html(t).appendTo(N),S.verbose("Adding user addition as an <option>",t),S.observe.select())},userSuggestion:function(e){var t,n=W.children(R.addition),i=S.get.item(e),o=i&&i.not(R.addition).length,a=n.length>0;if(!y.useLabels||!S.has.maxSelections()){if(""===e||o)return void n.remove();a?(n.data(I.value,e).data(I.text,e).attr("data-"+I.value,e).attr("data-"+I.text,e).removeClass(A.filtered),y.hideAdditions||(t=y.templates.addition(S.add.variables(T.addResult,e)),n.html(t)),S.verbose("Replacing user suggestion with new value",n)):(n=S.create.userChoice(e),n.prependTo(W),S.verbose("Adding item choice to menu corresponding with user choice addition",n)),y.hideAdditions&&!S.is.allFiltered()||n.addClass(A.selected).siblings().removeClass(A.selected),S.refreshItems()}},variables:function(e,t){var n,i,o=-1!==e.search("{count}"),a=-1!==e.search("{maxCount}"),s=-1!==e.search("{term}");return S.verbose("Adding templated variables to message",e),o&&(n=S.get.selectionCount(),e=e.replace("{count}",n)),a&&(n=S.get.selectionCount(),e=e.replace("{maxCount}",y.maxSelections)),s&&(i=t||S.get.query(),e=e.replace("{term}",i)),e},value:function(t,n,i){var o,a=S.get.values();if(""===t)return void S.debug("Cannot select blank values from multiselect");e.isArray(a)?(o=a.concat([t]),o=S.get.uniqueArray(o)):o=[t],S.has.selectInput()?S.can.extendSelect()&&(S.debug("Adding value to select",t,o,N),S.add.optionValue(t)):(o=o.join(y.delimiter),S.debug("Setting hidden input to delimited value",o,N)),!1===y.fireOnInit&&S.is.initialLoad()?S.verbose("Skipping onadd callback on initial load",y.onAdd):y.onAdd.call(Y,t,n,i),S.set.value(o,t,n,i),S.check.maxSelections()}},remove:{active:function(){M.removeClass(A.active)},activeLabel:function(){M.find(R.label).removeClass(A.active)},empty:function(){M.removeClass(A.empty)},loading:function(){M.removeClass(A.loading)},initialLoad:function(){h=!1},upward:function(e){(e||M).removeClass(A.upward)},leftward:function(e){(e||W).removeClass(A.leftward)},visible:function(){M.removeClass(A.visible)},activeItem:function(){B.removeClass(A.active)},filteredItem:function(){y.useLabels&&S.has.maxSelections()||(y.useLabels&&S.is.multiple()?B.not("."+A.active).removeClass(A.filtered):B.removeClass(A.filtered),S.remove.empty())},optionValue:function(e){var t=S.escape.value(e),n=N.find('option[value="'+S.escape.string(t)+'"]');n.length>0&&n.hasClass(A.addition)&&(x&&(x.disconnect(),S.verbose("Temporarily disconnecting mutation observer")),n.remove(),S.verbose("Removing user addition as an <option>",t),x&&x.observe(N[0],{childList:!0,subtree:!0}))},message:function(){W.children(R.message).remove()},searchWidth:function(){H.css("width","")},searchTerm:function(){S.verbose("Cleared search term"),H.val(""),S.set.filtered()},userAddition:function(){B.filter(R.addition).remove()},selected:function(t,n){if(!(n=y.allowAdditions?n||S.get.itemWithAdditions(t):n||S.get.item(t)))return!1;n.each(function(){var t=e(this),n=S.get.choiceText(t),i=S.get.choiceValue(t,n);S.is.multiple()?y.useLabels?(S.remove.value(i,n,t),S.remove.label(i)):(S.remove.value(i,n,t),0===S.get.selectionCount()?S.set.placeholderText():S.set.text(S.add.variables(T.count))):S.remove.value(i,n,t),t.removeClass(A.filtered).removeClass(A.active),y.useLabels&&t.removeClass(A.selected)})},selectedItem:function(){B.removeClass(A.selected)},value:function(e,t,n){var i,o=S.get.values();S.has.selectInput()?(S.verbose("Input is <select> removing selected option",e),i=S.remove.arrayValue(e,o),S.remove.optionValue(e)):(S.verbose("Removing from delimited values",e),i=S.remove.arrayValue(e,o),i=i.join(y.delimiter)),!1===y.fireOnInit&&S.is.initialLoad()?S.verbose("No callback on initial load",y.onRemove):y.onRemove.call(Y,e,t,n),S.set.value(i,t,n),S.check.maxSelections()},arrayValue:function(t,n){return e.isArray(n)||(n=[n]),n=e.grep(n,function(e){return t!=e}),S.verbose("Removed value from delimited string",t,n),n},label:function(e,t){var n=M.find(R.label),i=n.filter("[data-"+I.value+'="'+S.escape.string(e)+'"]');S.verbose("Removing label",i),i.remove()},activeLabels:function(e){e=e||M.find(R.label).filter("."+A.active),S.verbose("Removing active label selections",e),S.remove.labels(e)},labels:function(t){t=t||M.find(R.label),S.verbose("Removing labels",t),t.each(function(){var t=e(this),n=t.data(I.value),i=void 0!==n?String(n):n,o=S.is.userValue(i);if(!1===y.onLabelRemove.call(t,n))return void S.debug("Label remove callback cancelled removal");S.remove.message(),o?(S.remove.value(i),S.remove.label(i)):S.remove.selected(i)})},tabbable:function(){S.is.searchSelection()?(S.debug("Searchable dropdown initialized"),H.removeAttr("tabindex"),W.removeAttr("tabindex")):(S.debug("Simple selection dropdown initialized"),M.removeAttr("tabindex"),W.removeAttr("tabindex"))}},has:{menuSearch:function(){return S.has.search()&&H.closest(W).length>0},search:function(){return H.length>0},sizer:function(){return j.length>0},selectInput:function(){return N.is("select")},minCharacters:function(e){return!y.minCharacters||(e=void 0!==e?String(e):String(S.get.query()),e.length>=y.minCharacters)},firstLetter:function(e,t){var n,i;return!(!e||0===e.length||"string"!=typeof t)&&(n=S.get.choiceText(e,!1),t=t.toLowerCase(),i=String(n).charAt(0).toLowerCase(),t==i)},input:function(){return N.length>0},items:function(){return B.length>0},menu:function(){return W.length>0},message:function(){return 0!==W.children(R.message).length},label:function(e){var t=S.escape.value(e);return M.find(R.label).filter("[data-"+I.value+'="'+S.escape.string(t)+'"]').length>0},maxSelections:function(){return y.maxSelections&&S.get.selectionCount()>=y.maxSelections},allResultsFiltered:function(){var e=B.not(R.addition);return e.filter(R.unselectable).length===e.length},userSuggestion:function(){return W.children(R.addition).length>0},query:function(){return""!==S.get.query()},value:function(t){var n=S.get.values();return!!(e.isArray(n)?n&&-1!==e.inArray(t,n):n==t)}},is:{active:function(){return M.hasClass(A.active)},bubbledLabelClick:function(t){return e(t.target).is("select, input")&&M.closest("label").length>0},bubbledIconClick:function(t){return e(t.target).closest(U).length>0},alreadySetup:function(){return M.is("select")&&M.parent(R.dropdown).length>0&&0===M.prev().length},animating:function(e){return e?e.transition&&e.transition("is animating"):W.transition&&W.transition("is animating")},leftward:function(e){return(e||W).hasClass(A.leftward)},disabled:function(){return M.hasClass(A.disabled)},focused:function(){return n.activeElement===M[0]},focusedOnSearch:function(){return n.activeElement===H[0]},allFiltered:function(){return(S.is.multiple()||S.has.search())&&!(0==y.hideAdditions&&S.has.userSuggestion())&&!S.has.message()&&S.has.allResultsFiltered()},hidden:function(e){return!S.is.visible(e)},initialLoad:function(){return h},inObject:function(t,n){var i=!1;return e.each(n,function(e,n){if(n==t)return i=!0,!0}),i},multiple:function(){return M.hasClass(A.multiple)},remote:function(){return y.apiSettings&&S.can.useAPI()},single:function(){return!S.is.multiple()},selectMutation:function(t){var n=!1;return e.each(t,function(t,i){if(i.target&&e(i.target).is("select"))return n=!0,!0}),n},search:function(){return M.hasClass(A.search)},searchSelection:function(){return S.has.search()&&1===H.parent(R.dropdown).length},selection:function(){return M.hasClass(A.selection)},userValue:function(t){return-1!==e.inArray(t,S.get.userValues())},upward:function(e){return(e||M).hasClass(A.upward)},visible:function(e){return e?e.hasClass(A.visible):W.hasClass(A.visible)},verticallyScrollableContext:function(){var e=z.get(0)!==t&&z.css("overflow-y");return"auto"==e||"scroll"==e},horizontallyScrollableContext:function(){var e=z.get(0)!==t&&z.css("overflow-X");return"auto"==e||"scroll"==e}},can:{activate:function(e){return!!y.useLabels||(!S.has.maxSelections()||!(!S.has.maxSelections()||!e.hasClass(A.active)))},openDownward:function(e){var t,n=e||W,i=!0,o={};return n.addClass(A.loading),t={context:{scrollTop:z.scrollTop(),height:z.outerHeight()},menu:{offset:n.offset(),height:n.outerHeight()}},S.is.verticallyScrollableContext()&&(t.menu.offset.top+=t.context.scrollTop),o={above:t.context.scrollTop<=t.menu.offset.top-t.menu.height,below:t.context.scrollTop+t.context.height>=t.menu.offset.top+t.menu.height},o.below?(S.verbose("Dropdown can fit in context downward",o),i=!0):o.below||o.above?(S.verbose("Dropdown cannot fit below, opening upward",o),i=!1):(S.verbose("Dropdown cannot fit in either direction, favoring downward",o),i=!0),n.removeClass(A.loading),i},openRightward:function(e){var t,n=e||W,i=!0,o=!1;return n.addClass(A.loading),t={context:{scrollLeft:z.scrollLeft(),width:z.outerWidth()},menu:{offset:n.offset(),width:n.outerWidth()}},S.is.horizontallyScrollableContext()&&(t.menu.offset.left+=t.context.scrollLeft),o=t.menu.offset.left+t.menu.width>=t.context.scrollLeft+t.context.width,o&&(S.verbose("Dropdown cannot fit in context rightward",o),i=!1),n.removeClass(A.loading),i},click:function(){return l||"click"==y.on},extendSelect:function(){return y.allowAdditions||y.apiSettings},show:function(){return!S.is.disabled()&&(S.has.items()||S.has.message())},useAPI:function(){return void 0!==e.fn.api}},animate:{show:function(t,n){var i,o=n||W,a=n?function(){}:function(){S.hideSubMenus(),S.hideOthers(),S.set.active()};t=e.isFunction(t)?t:function(){},S.verbose("Doing menu show animation",o),S.set.direction(n),i=S.get.transition(n),S.is.selection()&&S.set.scrollPosition(S.get.selectedItem(),!0),(S.is.hidden(o)||S.is.animating(o))&&("none"==i?(a(),o.transition("show"),t.call(Y)):void 0!==e.fn.transition&&M.transition("is supported")?o.transition({animation:i+" in",debug:y.debug,verbose:y.verbose,duration:y.duration,queue:!0,onStart:a,onComplete:function(){t.call(Y)}}):S.error(O.noTransition,i))},hide:function(t,n){var i=n||W,o=(n?y.duration:y.duration,n?function(){}:function(){S.can.click()&&S.unbind.intent(),S.remove.active()}),a=S.get.transition(n);t=e.isFunction(t)?t:function(){},(S.is.visible(i)||S.is.animating(i))&&(S.verbose("Doing menu hide animation",i),"none"==a?(o(),i.transition("hide"),t.call(Y)):void 0!==e.fn.transition&&M.transition("is supported")?i.transition({animation:a+" out",duration:y.duration,debug:y.debug,verbose:y.verbose,queue:!0,onStart:o,onComplete:function(){t.call(Y)}}):S.error(O.transition))}},hideAndClear:function(){S.remove.searchTerm(),S.has.maxSelections()||(S.has.search()?S.hide(function(){S.remove.filteredItem()}):S.hide())},delay:{show:function(){S.verbose("Delaying show event to ensure user intent"),clearTimeout(S.timer),S.timer=setTimeout(S.show,y.delay.show)},hide:function(){S.verbose("Delaying hide event to ensure user intent"),clearTimeout(S.timer),S.timer=setTimeout(S.hide,y.delay.hide)}},escape:{value:function(t){var n=e.isArray(t),i="string"==typeof t,o=!i&&!n,a=i&&-1!==t.search(q.quote),s=[];return o||!a?t:(S.debug("Encoding quote values for use in select",t),n?(e.each(t,function(e,t){s.push(t.replace(q.quote,"&quot;"))}),s):t.replace(q.quote,"&quot;"))},string:function(e){return e=String(e),e.replace(q.escape,"\\$&")}},setting:function(t,n){if(S.debug("Changing setting",t,n),e.isPlainObject(t))e.extend(!0,y,t);else{if(void 0===n)return y[t];e.isPlainObject(y[t])?e.extend(!0,y[t],n):y[t]=n}},internal:function(t,n){if(e.isPlainObject(t))e.extend(!0,S,t);else{if(void 0===n)return S[t];S[t]=n}},debug:function(){!y.silent&&y.debug&&(y.performance?S.performance.log(arguments):(S.debug=Function.prototype.bind.call(console.info,console,y.name+":"),S.debug.apply(console,arguments)))},verbose:function(){!y.silent&&y.verbose&&y.debug&&(y.performance?S.performance.log(arguments):(S.verbose=Function.prototype.bind.call(console.info,console,y.name+":"),S.verbose.apply(console,arguments)))},error:function(){y.silent||(S.error=Function.prototype.bind.call(console.error,console,y.name+":"),S.error.apply(console,arguments))},performance:{log:function(e){var t,n,i;y.performance&&(t=(new Date).getTime(),i=c||t,n=t-i,c=t,u.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:Y,"Execution Time":n})),clearTimeout(S.performance.timer),S.performance.timer=setTimeout(S.performance.display,500)},display:function(){var t=y.name+":",n=0;c=!1,clearTimeout(S.performance.timer),e.each(u,function(e,t){n+=t["Execution Time"]}),t+=" "+n+"ms",r&&(t+=" '"+r+"'"),(void 0!==console.group||void 0!==console.table)&&u.length>0&&(console.groupCollapsed(t),console.table?console.table(u):e.each(u,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),u=[]}},invoke:function(t,n,i){var a,s,r,l=G;return n=n||f,i=Y||i,"string"==typeof t&&void 0!==l&&(t=t.split(/[\. ]/),a=t.length-1,e.each(t,function(n,i){var o=n!=a?i+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(l[o])&&n!=a)l=l[o];else{if(void 0!==l[o])return s=l[o],!1;if(!e.isPlainObject(l[i])||n==a)return void 0!==l[i]?(s=l[i],!1):(S.error(O.method,t),!1);l=l[i]}})),e.isFunction(s)?r=s.apply(i,n):void 0!==s&&(r=s),e.isArray(o)?o.push(r):void 0!==o?o=[o,r]:void 0!==r&&(o=r),s}},v?(void 0===G&&S.initialize(),S.invoke(d)):(void 0!==G&&G.invoke("destroy"),S.initialize())}),void 0!==o?o:a},e.fn.dropdown.settings={silent:!1,debug:!1,verbose:!1,performance:!0,on:"click",action:"activate",apiSettings:!1,selectOnKeydown:!0,minCharacters:0,filterRemoteData:!1,saveRemoteData:!0,throttle:200,context:t,direction:"auto",keepOnScreen:!0,match:"both",fullTextSearch:!1,placeholder:"auto",preserveHTML:!0,sortSelect:!1,forceSelection:!0,allowAdditions:!1,hideAdditions:!0,maxSelections:!1,useLabels:!0,delimiter:",",showOnFocus:!0,allowReselection:!1,allowTab:!0,allowCategorySelection:!1,fireOnInit:!1,transition:"auto",duration:200,glyphWidth:1.037,label:{transition:"scale",duration:200,variation:!1},delay:{hide:300,show:200,search:20,touch:50},onChange:function(e,t,n){},onAdd:function(e,t,n){},onRemove:function(e,t,n){},onLabelSelect:function(e){},onLabelCreate:function(t,n){return e(this)},onLabelRemove:function(e){return!0},onNoResults:function(e){return!0},onShow:function(){},onHide:function(){},name:"Dropdown",namespace:"dropdown",message:{addResult:"Add <b>{term}</b>",count:"{count} selected",maxSelections:"Max {maxCount} selections",noResults:"No results found.",serverError:"There was an error contacting the server"},error:{action:"You called a dropdown action that was not defined",alreadySetup:"Once a select has been initialized behaviors must be called on the created ui dropdown",labels:"Allowing user additions currently requires the use of labels.",missingMultiple:"<select> requires multiple property to be set to correctly preserve multiple values",method:"The method you called is not defined.",noAPI:"The API module is required to load resources remotely",noStorage:"Saving remote data requires session storage",noTransition:"This module requires ui transitions <https://github.com/Semantic-Org/UI-Transition>"},regExp:{escape:/[-[\]{}()*+?.,\\^$|#\s]/g,quote:/"/g},metadata:{defaultText:"defaultText",defaultValue:"defaultValue",placeholderText:"placeholder",text:"text",value:"value"},fields:{remoteValues:"results",values:"values",disabled:"disabled",name:"name",value:"value",text:"text"},keys:{backspace:8,delimiter:188,deleteKey:46,enter:13,escape:27,pageUp:33,pageDown:34,leftArrow:37,upArrow:38,rightArrow:39,downArrow:40},selector:{addition:".addition",dropdown:".ui.dropdown",hidden:".hidden",icon:"> .dropdown.icon",input:'> input[type="hidden"], > select',item:".item",label:"> .label",remove:"> .label > .delete.icon",siblingLabel:".label",menu:".menu",message:".message",menuIcon:".dropdown.icon",search:"input.search, .menu > .search > input, .menu input.search",sizer:"> input.sizer",text:"> .text:not(.icon)",unselectable:".disabled, .filtered"},className:{active:"active",addition:"addition",animating:"animating",disabled:"disabled",empty:"empty",dropdown:"ui dropdown",filtered:"filtered",hidden:"hidden transition",item:"item",label:"ui label",loading:"loading",menu:"menu",message:"message",multiple:"multiple",placeholder:"default",sizer:"sizer",search:"search",selected:"selected",selection:"selection",upward:"upward",leftward:"left",visible:"visible"}},e.fn.dropdown.settings.templates={dropdown:function(t){var n=t.placeholder||!1,i=(t.values,"");return i+='<i class="dropdown icon"></i>',t.placeholder?i+='<div class="default text">'+n+"</div>":i+='<div class="text"></div>',i+='<div class="menu">',e.each(t.values,function(e,t){i+=t.disabled?'<div class="disabled item" data-value="'+t.value+'">'+t.name+"</div>":'<div class="item" data-value="'+t.value+'">'+t.name+"</div>"}),i+="</div>"},menu:function(t,n){var i=t[n.values]||{},o="";return e.each(i,function(e,t){var i=t[n.text]?'data-text="'+t[n.text]+'"':"",a=t[n.disabled]?"disabled ":"";o+='<div class="'+a+'item" data-value="'+t[n.value]+'"'+i+">",o+=t[n.name],o+="</div>"}),o},label:function(e,t){return t+'<i class="delete icon"></i>'},message:function(e){return e},addition:function(e){return e}}}(jQuery,window,document);
(function($){
	if($.G2 == undefined){
		$.G2 = {};
	}
	$.G2.composer = {};
	
	$.G2.scrollTo = function(Elem){
		if(Elem.length > 0){
			$('html, body').animate({
				scrollTop: Elem.offset().top - 50
			}, 'slow');
		}
	};
	
	$.G2.split = function(inputs, maxcount){
		var data = {};
		if(inputs.length > maxcount){
			for(i = 0; i <= inputs.length; i = i + maxcount){
				data[i] = inputs.slice(i, i + maxcount).serialize();
			}
		}else{
			data[0] = inputs.serialize();
		}
		
		return data;
	};
	
	$.G2.composer.init = function(){
		var section = arguments[0];
		var args = arguments[1];
		
		$.G2.composer[section] = {};
		$.G2.composer[section].params = args;
	};
	
	$.G2.composer.ready = function(){
		var section = arguments[0];
		var args = arguments[1];
		
		$.extend($.G2.composer[section].params, args);
		
		$.each($.G2.composer[section].params, function(i, arr){
			$.G2[i]['ready'].apply($.G2[i], arr);
		});
	};
}(jQuery));
(function($){
	if($.G2 == undefined){
		$.G2 = {};
	}
	$.G2.boot = {};
	
	$.G2.boot.autocompleter = function(Container){
		Container.find('[data-autocomplete]').each(function(i, dropfield){
			$(dropfield).closest('.ui.search.dropdown').dropdown({
				apiSettings : {
					url: $(dropfield).data('url') + '&' + $(dropfield).attr('name') + '={query}',
					cache : false,
					onResponse : function(Response){
						if(!Response.hasOwnProperty('results')){
							var results = [];
							results['success'] = true;
							results['results'] = [];
							
							var count = 0;
							$.each(Response, function(key, obj){
								results['results'][count] = {};
								results['results'][count]['value'] = key;
								results['results'][count]['name'] = obj;
								count = count + 1;
							});
							
							return results;
						}
					}
				},
				minCharacters: $(dropfield).data('mincharacters') ? $(dropfield).data('mincharacters') : 0,
				message : {noResults : $(dropfield).data('noresults') ? $(dropfield).data('noresults') : 'No results found'},
				//saveRemoteData:false
			});
		});
	};
	
	$.G2.boot.calendar = function(Container){
		//calendar
		Container.find('[data-calendar]').each(function(i, calfield){
			var mindate = null;
			if($(calfield).data('mindate')){
				var parts = $(calfield).data('mindate').split('-');
				var mindate = new Date(parts[0], parts[1]-1, parts[2]); 
			}
			var maxdate = null;
			if($(calfield).data('maxdate')){
				var parts = $(calfield).data('maxdate').split('-');
				var maxdate = new Date(parts[0], parts[1]-1, parts[2]); 
			}
			if(jQuery.fn.calendar != undefined){
				
				var $realDate = $('<input type="hidden" name="'+$(calfield).attr('name')+'">');
				$(calfield).closest('.field').after($realDate);
				
				var dformat = $(calfield).data('dformat') ? $(calfield).data('dformat') : 'YYYY-MM-DD';
				var sformat = $(calfield).data('sformat') ? $(calfield).data('sformat') : 'YYYY-MM-DD';
				
				if($(calfield).val().length > 0){
					$realDate.val(moment($(calfield).val(), dformat).format(sformat));
				}
				
				$(calfield).closest('.field').calendar({
					startMode : $(calfield).data('startmode'),
					type : $(calfield).data('type'),
					minDate : mindate,
					maxDate : maxdate,
					startCalendar: $(calfield).data('startcalendar') ? $($(calfield).data('startcalendar')).closest('.field') : null,
					endCalendar: $(calfield).data('endcalendar') ? $($(calfield).data('endcalendar')).closest('.field') : null,
					firstDayOfWeek: $(calfield).data('firstday') ? $(calfield).data('firstday') : 0,
					ampm: $(calfield).data('ampm') ? $(calfield).data('ampm') : true,
					monthFirst: $(calfield).data('monthfirst') ? $(calfield).data('monthfirst') : true,
					
					formatter:{
						datetime: function (date, settings) {
							if (!date) return '';
							return moment(date).format(dformat);
						}
					},
					parser:{
						date: function (text, settings) {
							if (!text) return '';
							return moment(text, dformat).toDate();
						}
					},
					onChange: function (date, text, mode){
						$realDate.val(moment(date).format(sformat));
					},
					popupOptions:{
						position: $(calfield).data('popuppos') ? $(calfield).data('popuppos') : 'top center'
					},

					text:{
						days: $(calfield).data('days') ? $(calfield).data('days').split(',') : ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
						months: $(calfield).data('months') ? $(calfield).data('months').split(',') : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
						monthsShort: $(calfield).data('monthsshort') ? $(calfield).data('monthsshort').split(',') : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
						today: $(calfield).data('today') ? $(calfield).data('today').split(',') : 'Today',
						now: $(calfield).data('now') ? $(calfield).data('now').split(',') : 'Now',
						am: $(calfield).data('am') ? $(calfield).data('am').split(',') : 'AM',
						pm: $(calfield).data('pm') ? $(calfield).data('pm').split(',') : 'PM'
					}
				});
			}
		});
	};
	
	$.G2.boot.ready = function(){
		$('body').on('contentChange.basics', 'div', function(e){
			e.stopPropagation();
			
			if(jQuery.fn.tab != undefined){
				$(this).find('.ui.menu.G2-tabs .item, .ui.steps.G2-tabs .step').tab();
			}
			if(jQuery.fn.dropdown != undefined){
				$(this).find('.ui.dropdown').dropdown({'forceSelection' : false, 'placeholder' : ''});
				$.G2.boot.autocompleter($(this));
			}
			if(jQuery.fn.checkbox != undefined){
				$(this).find('.ui.checkbox').checkbox('refresh');
			}
			
			if(jQuery.fn.accordion != undefined){
				$(this).find('.ui.accordion').accordion();
				$(this).find('.ui.accordion').accordion('refresh');
			}
			
			if(jQuery.fn.tooltipster != undefined){
				$(this).find('[data-hint]').each(function(i, element){
					$(element).tooltipster({
						content: $(element).data('hint'),
						maxWidth: 300,
						delay: 50,
						debug: false,
						contentAsHTML: true
					});
				});
			}
			
			//G2 actions
			if($.G2.actions != undefined){
				$.G2.actions.ready();
			}
			
			if($.G2.actions2 != undefined){
				$.G2.actions2.ready($(this));
			}
			
			if($.G2.forms2 != undefined){
				$.G2.forms2.ready($(this));
			}
			
			$.G2.boot.calendar($(this));
			
			//wysiwyg editor
			if($.G2.tinymce != undefined){
				$.G2.tinymce.init();
			}
			//textareas expand
			$(this).on('keyup.resize', 'textarea[data-autoresize="1"]', function(e){
				$(this).css('overflow', 'hidden');
				if($(this).val().split("\n").length > $(this).attr('rows')){
					$(this).attr('rows', $(this).val().split("\n").length);
				}else{
					if($(this).data('rows') == undefined){
						$(this).data('rows', $(this).attr('rows'));
					}
					if($(this).data('rows') <= $(this).val().split("\n").length){
						$(this).attr('rows', $(this).val().split("\n").length);
					}
				}
			});
			$(this).find('textarea[data-autoresize="1"]').trigger('keyup.resize');
			
		});
		
		//new forms
		//if($('form.ui.form.ce_form').length > 0){
		if($.G2.validation != undefined){
			$('body').on('contentChange.form', 'form', function(e){
				e.stopPropagation();
				$.G2.validation.ready($(this));
			});
			
			$('form.ui.form.ce_form').trigger('contentChange');
		}
		
		//toolbar
		$('.ui.toolbar-button[data-url]').on('click', function(e){
			if($(this).attr('data-form')){
				var toolbar_form = $($(this).attr('data-form'));
			}else{
				var toolbar_form = $(this).closest('form');
			}
			
			toolbar_form.attr('action', $(this).data('url'));
			
			if($(this).attr('name')){
				toolbar_form.append($('<input />').attr('type', 'hidden').attr('name', $(this).attr('name')).val(1));
			}
			
			if($(this).data('selections') == '1' && toolbar_form.find('.ui.selector.checkbox.checked').length == 0){
				alert($(this).data('message'));
				return false;
			}
			
			if($(this).attr('data-fn')){
				var fn = $(this).attr('data-fn');
				window[$(this).attr('data-fn')]($(this));
			}else{
				toolbar_form.submit();
			}
		});
		
		//list selectors
		if(jQuery.fn.checkbox != undefined){
			$('.ui.selector.checkbox').checkbox({
				onChecked: function(){
					$(this).closest('tr').addClass('warning');
				},
				onUnchecked: function(){
					$(this).closest('tr').removeClass('warning');
				}
			});
			$('.ui.selector.checkbox').checkbox('attach events', '.ui.select_all.checkbox');
		}
		
		//errors
		$(':input[data-error]').closest('.field').addClass('error');
		
	};
	
}(jQuery));
(function($){
	if($.G2 == undefined){
		$.G2 = {};
	}
	$.G2.forms = {};
	
	$.G2.forms.initializeForm = function (Form){
		var validationRules = {};
		
		jQuery.fn.form.settings.rules.required = function(value){
			if(value){
				return true;
			}else{
				return false;
			}
		};
		
		jQuery.fn.form.settings.rules.email = function(value){
			if(value.match(/^([a-zA-Z0-9_\.\-\+%])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{1,11})+$/)){
				return true;
			}else{
				return false;
			}
		};
		
		jQuery.fn.form.settings.rules.minChecked = function(value, minChecked){
			jQuery(this).closest('.fields').off('change.validation').on('change.validation', ':input', function(){
				Form.form('validate form');
			});
			
			if(jQuery(this).closest('.fields').find(':input:checked').length >= minChecked){
				jQuery(this).closest('.fields').removeClass('error');
				return true;
			}else{
				jQuery(this).closest('.fields').addClass('error');
				return false;
			}
		};
		
		jQuery.fn.form.settings.rules.maxChecked = function(value, maxChecked){
			jQuery(this).closest('.fields').off('change.validation').on('change.validation', ':input', function(){
				Form.form('validate form');
			});
			
			if(jQuery(this).closest('.fields').find(':input:checked').length > maxChecked){
				jQuery(this).closest('.fields').addClass('error');
				return false;
			}else{
				jQuery(this).closest('.fields').removeClass('error');
				return true;
			}
		};
		
		jQuery.fn.form.settings.rules.exactChecked = function(value, exactChecked){
			jQuery(this).closest('.fields').off('change.validation').on('change.validation', ':input', function(){
				Form.form('validate form');
			});
			
			if(jQuery(this).closest('.fields').find(':input:checked').length != exactChecked){
				jQuery(this).closest('.fields').addClass('error');
				return false;
			}else{
				jQuery(this).closest('.fields').removeClass('error');
				return true;
			}
		};
		
		Form.find('[data-validationrules]').each(function(i, inp){
			if(jQuery(inp).data('validationrules').disabled == undefined || jQuery(inp).data('validationrules').disabled == 0){
				validationRules['field'+i] = jQuery(inp).data('validationrules');
				
				//jQuery.each(['empty', 'required', 'checked', 'minChecked', 'maxChecked', 'exactChecked'], function(i, r){
				jQuery.each(jQuery(inp).data('validationrules')['rules'], function(i, r){
					//if(jQuery(inp).data('validationrules')['rules'][0]['type'].indexOf(r) >= 0){
					jQuery.each(['empty', 'required', 'checked', 'minChecked', 'maxChecked', 'exactChecked'], function(ir, vr){
						if(r['type'].indexOf(vr) > -1){
							if(jQuery(inp).parent().hasClass('checkbox')){
								if(jQuery(inp).closest('.fields').length > 0){
									jQuery(inp).closest('.fields').addClass('required');
								}else{
									jQuery(inp).closest('.field').addClass('required');
								}
							}else{
								jQuery(inp).closest('.field').addClass('required');
							}
						}
					});
				});
			}
		});
		
		Form.form({
			//inline : true,
			inline : Form.data('valloc') ? ((Form.data('valloc') == 'inline' || Form.data('valloc') == 'inlinetext') ? true : false) : true,
			on : 'blur',
			fields: validationRules,
			onInvalid: function(){
				if(Form.data('valloc') == 'inlinetext'){
					var erlabel = $(this).closest('.field').find('.ui.label.prompt.pointing').first();
					erlabel.css('display', 'none !important');
					var field = $(this).closest('.multifield.fields.grouped, .multifield.fields.inline').length > 0 ? $(this).closest('.multifield.fields.grouped, .multifield.fields.inline') : $(this).closest('.field');
					if(field.find('small.custom-error').length > 0){
						field.find('small.custom-error').show();
					}else{
						field.append($('<small class="custom-error">').css('color', 'red').css('display', 'block').text(erlabel.text()));
					}
					erlabel.remove();
				}
			},
			onValid: function(){
				var field = $(this).closest('.multifield.fields.grouped, .multifield.fields.inline').length > 0 ? $(this).closest('.multifield.fields.grouped, .multifield.fields.inline') : $(this).closest('.field');
				field.find('small.custom-error').hide();
			}
		});
	}
	
	$.G2.forms.initializeEvents = function (Form){
		//Form.find('[data-events]').each(function(i, inp){
		Form.off('change.events click.events ready.events', '[data-events]');
		Form.on('change.events click.events ready.events', '[data-events]', function(e){
			e.stopPropagation();
			//var events = jQuery(inp).data('events');
			var inp = this;
			var events = JSON.parse(jQuery(inp).attr('data-events'));
			
			//jQuery(inp).off('change.events click.events ready.events');
			jQuery.each(events, function(ei, event){
				//jQuery(inp).off('change click ready');
				//jQuery(inp).on('change.events click.events ready.events', function(e){
					
					if(event.hasOwnProperty('identifier') != true || event['identifier'] == '' || event.hasOwnProperty('action') != true || event.action.length == 0){
						return;
					}
					
					//get current input value
					var inp_value = jQuery(inp).data('value') ? jQuery(inp).data('value') : jQuery(inp).val();
					
					if(jQuery(inp).attr('type') == 'checkbox'){
						inp_value = (jQuery(inp).is(':checked') ? inp_value : '');
					}
					if(jQuery(inp).prop('tagName') == 'SELECT'){
						inp_value = jQuery(inp).find(':selected').data('value') ? jQuery(inp).find(':selected').data('value') : jQuery(inp).val();
					}
					if(event.hasOwnProperty('value') != true){
						event['value'] = [jQuery(inp).val()];
					}
					if(event.hasOwnProperty('group') && event.group == 1){
						inp_value = [];
						jQuery.each(jQuery(inp).closest('.fields').find(':input:checked'), function(kk, checked){
							if(jQuery(checked).data('value')){
								inp_value.push(jQuery(checked).data('value'));
							}else{
								inp_value.push(jQuery(checked).val());
							}
						});
					}
					
					//evaluate condition
					var event_condition = false;
					if(jQuery.isArray(inp_value)){
						if(event.sign == '='){
							//event_condition = (jQuery.inArray(event['value'], inp_value) > -1);
							event_condition = (jQuery(inp_value).filter(event['value']).length > 0);
						}else if(event.sign == '!='){
							//event_condition = (jQuery.inArray(event['value'], inp_value) == -1);
							event_condition = (jQuery(inp_value).filter(event['value']).length == 0);
						}else if(event.sign == 'change'){
							if(e.type != 'ready'){
								event_condition = true;
							}
						}
					}else{
						if(event.sign == '='){
							//event_condition = (inp_value == event['value']);
							event_condition = (jQuery([inp_value]).filter(event['value']).length > 0);
						}else if(event.sign == '!='){
							//event_condition = (inp_value != event['value']);
							event_condition = (jQuery([inp_value]).filter(event['value']).length == 0);
						}else if(event.sign == 'change'){
							if(e.type != 'ready'){
								event_condition = true;
							}
						}else if(event.sign == 'click' && e.type == 'click'){
							event_condition = true;
						}
					}
					
					var event_targets = [];
					jQuery.each(event['identifier'], function(idi, ident){
						if(ident.substring(0, 1) == '#' || ident.substring(0, 1) == '.' || ident.substring(0, 1) == '['){
							event_targets = jQuery.merge(event_targets, jQuery(ident));
						}else{
							event_targets = jQuery.merge(event_targets, jQuery(':input[name="' + ident + '"]'));
							if(jQuery.inArray('function', event.action) > -1){
								event_targets = [ident];
							}
						}
					});
					
					jQuery.each(event_targets, function(ix, event_target){
						event_target = jQuery(event_target);
						var event_target_one = event_target;
						
						var target_element = event_target.closest('.field');
						if(jQuery.inArray(event_target.prop('tagName'), ['BUTTON', 'DIV']) > -1){
							target_element = event_target;
						}
						if(jQuery.inArray(event_target.prop('type'), ['checkbox', 'radio']) > -1){
							target_element = event_target.closest('.multifield.fields').length > 0 ? event_target.closest('.multifield.fields') : event_target.closest('.field');
						}
						
						if(event_target.data('ghost')){
							if(event_target.closest('.multifield.fields').length > 0){
								var real_event_target = event_target.closest('.multifield.fields').find(':checkbox, :radio');
								target_element = event_target.closest('.multifield.fields');
								if(real_event_target.length > 0){
									event_target = real_event_target;
									event_target_one = real_event_target.first();
								}
							}else{
								
							}
						}
						
						if(jQuery.isArray(event.action) == false){
							event.action = [event.action];
						}
						if(event_condition){
							if(jQuery.inArray('hide', event.action) > -1){
								target_element.hide();
							}
							if(jQuery.inArray('show', event.action) > -1){
								//target_element.show();
								target_element.css('display', '');
								target_element.removeClass('hidden');
							}
							if(jQuery.inArray('disable', event.action) > -1){
								target_element.addClass('disabled');
								event_target.prop('disabled', true);
							}
							if(jQuery.inArray('enable', event.action) > -1){
								target_element.removeClass('disabled');
								event_target.prop('disabled', false);
								if(event_target.prop('tagName') == 'SELECT'){
									event_target.parent('.ui.dropdown').removeClass('disabled');
								}
							}
							if(jQuery.inArray('disable_validation', event.action) > -1){
								if(event_target_one.data('validationrules')){
									var vrules = event_target_one.data('validationrules');
									vrules['disabled'] = 1;
									event_target_one.data('validationrules', vrules);
									
									$.G2.forms.initializeForm(Form);
									target_element.removeClass('required error');
									target_element.find('.ui.label.red.pointing.prompt').remove();
								}
							}
							if(jQuery.inArray('enable_validation', event.action) > -1){
								if(event_target_one.data('validationrules')){
									var vrules = event_target_one.data('validationrules');
									vrules['disabled'] = 0;
									event_target_one.data('validationrules', vrules);
									
									$.G2.forms.initializeForm(Form);
								}
							}
							if(jQuery.inArray('reload', event.action) > -1){
								if(e.type != 'ready' && event_target.length > 0){
									target_element.addClass('ui form loading');
									
									$.ajax({
										url: event_target.data('reloadurl'),
										data: jQuery(inp).closest('.form').serialize(),
										success: function(result){
											var newContent = $(result);
											
											target_element.replaceWith(newContent);
											
											newContent.trigger('contentChange');
											//Form.trigger('contentChange');
										}
									});
								}
							}
							if(jQuery.inArray('function', event.action) > -1){
								jQuery.each(event['identifier'], function(idi, ident){
									if(e.type != 'ready' && window[ident] != undefined){
										window[ident](jQuery(inp));
									}
								});
							}
							//if(jQuery.inArray(event.action, ['add', 'sub', 'multiply', 'set']) > -1){
							if(jQuery(event.action).filter(['add', 'sub', 'multiply', 'set']).length){
								target_element = event_target;
								
								var current_value = parseFloat(target_element.val());
								if(isNaN(current_value)){
									current_value = 0;
								}
								
								if(jQuery.isArray(inp_value)){
									var inp_value_float = 0;
									jQuery.each(inp_value, function(iv, inp_value_v){
										if(!isNaN(parseFloat(inp_value_v))){
											inp_value_float = inp_value_float + parseFloat(inp_value_v);
										}
									});
								}else{
									var inp_value_float = parseFloat(inp_value);
									if(isNaN(inp_value_float)){
										inp_value_float = 0;
										if(event.action == 'multiply'){
											inp_value_float = 1;
										}
									}
								}
								
								var calcList = {};
								var inp_name = jQuery(inp).attr('name');
								
								if(target_element.data('calclist')){
									calcList = target_element.data('calclist');
								}
								
								var prev_inp_value = 0;
								if(calcList.hasOwnProperty(inp_name)){
									prev_inp_value = calcList[inp_name];
								}
								
								calcList[inp_name] = inp_value_float;
								target_element.data('calclist', calcList);
								var change_value = 0;
								
								if(jQuery.inArray('add', event.action) > -1){
									var total = current_value + inp_value_float - prev_inp_value;
									change_value = inp_value_float;
								}else if(jQuery.inArray('sub', event.action) > -1){
									var total = current_value - inp_value_float - prev_inp_value;
									change_value = - inp_value_float;
								}else if(jQuery.inArray('multiply', event.action) > -1){
									if(prev_inp_value == 0){
										prev_inp_value = 1;
									}
									var total = (current_value/prev_inp_value) * inp_value_float;
								}else if(jQuery.inArray('set', event.action) > -1){
									var total = inp_value_float;
								}
								
								if(change_value != 0){
									calcList[inp_name] = change_value;
									target_element.data('calclist', calcList);
								}
								
								target_element.val(total);
								
								if(target_element.data('display')){
									jQuery('#'+target_element.data('display')).text(total);
								}
							}
						}
					});
				//});
				
				//jQuery(inp).trigger('ready.events');
			});
			
			//jQuery(inp).trigger('ready.events');
		});
		
		Form.find('[data-events]').trigger('ready.events');
	}
	
	$.G2.forms.initializeFeatures = function (Form){
		Form.on('click', '.partitioned .ui.button.next, .partitioned .ui.button.forward', function(e){
			e.preventDefault();
			var activeTab = jQuery(this).closest('.partitioned').find('.ui.segment.tab.active').first();
			activeTab.find(':input').trigger('blur');
			
			if(activeTab.next('.ui.segment.tab').length > 0 && activeTab.find('.field.error').length == 0){
				activeTab.removeClass('active');
				jQuery('[data-tab="'+activeTab.data('tab')+'"]').removeClass('active');
				activeTab.next('.ui.segment.tab').addClass('active');
				jQuery('[data-tab="'+activeTab.next('.ui.segment.tab').data('tab')+'"]').addClass('active').removeClass('disabled');
			}else{
				
			}
		});
		
		Form.on('click', '.partitioned .ui.button.prev, .partitioned .ui.button.backward', function(e){
			e.preventDefault();
			var activeTab = jQuery(this).closest('.partitioned').find('.ui.segment.tab.active').first();
			activeTab.find(':input').trigger('blur');
			
			if(activeTab.prev('.ui.segment.tab').length > 0 && activeTab.find('.field.error').length == 0){
				activeTab.removeClass('active');
				jQuery('[data-tab="'+activeTab.data('tab')+'"]').removeClass('active');
				activeTab.prev('.ui.segment.tab').addClass('active');
				jQuery('[data-tab="'+activeTab.prev('.ui.segment.tab').data('tab')+'"]').addClass('active').removeClass('disabled');
			}else{
				
			}
		});
		
		//Form.find('.repeater .ui.source-item').hide().find(':input').prop('disabled', true);
		Form.find('.repeater .ui.source-item').hide().find(':input').each(function(i, inp){
			$(inp).attr('ex-name', $(inp).attr('name'));
			$(inp).removeAttr('name');
			if(jQuery(inp).data('validationrules')){
				$(inp).attr('data-exvalidationrules', $(inp).attr('data-validationrules'));
				$(inp).removeAttr('data-validationrules');
			}
		});
		
		Form.on('click.repeater', '.repeater .ui.button.multiply', function(e){
			e.preventDefault();
			
			var cloned = jQuery(this).closest('.repeater').find('.ui.source-item').clone().show();
			cloned.find(':input').each(function(i, inp){
				$(inp).attr('name', $(inp).attr('ex-name'));
				$(inp).removeAttr('ex-name');
				if(jQuery(inp).attr('data-exvalidationrules')){
					$(inp).attr('data-validationrules', $(inp).attr('data-exvalidationrules'));
				}
			});
			
			var newHTML = cloned.html().replace(/-N-/g, jQuery(this).closest('.repeater').data('count'));
			if(cloned.data('name')){
				repeaterRegex = new RegExp('#'+cloned.data('name')+'.count', 'gi');
				newHTML = newHTML.replace(repeaterRegex, jQuery(this).closest('.repeater').data('count'));
			}
			
			cloned.html(newHTML);
			jQuery(this).closest('.repeater').data('count', parseInt(jQuery(this).closest('.repeater').data('count')) + 1);
			
			if(jQuery(this).closest('.repeater').data('limit')){
				if(jQuery(this).closest('.repeater').find('.clone-item').length >= parseInt(jQuery(this).closest('.repeater').data('limit'))){
					return;
				}
			}
			jQuery(this).before(cloned.removeClass('source-item').addClass('clone-item'));
			
			cloned.trigger('contentChange');
			jQuery.G2.forms.initializeForm(Form);
			
			jQuery(this).closest('.repeater').trigger('g2.forms.repeater.add');
		});
		
		Form.on('click.repeater', '.repeater .ui.button.remove', function(e){
			e.preventDefault();
			
			jQuery(this).closest('.ui.clone-item').remove();
			
			jQuery(this).closest('.repeater').trigger('g2.forms.repeater.remove');
			
			jQuery.G2.forms.initializeForm(Form);
		});
		
		Form.on('click', '.modaled > .ui.button.green, .modaled > .ui.button.launch', function(e){
			e.preventDefault();
			var theModal = jQuery(this).closest('.modaled').find('.ui.modal').first();
			theModal.modal({detachable : false, closable : (theModal.data('closable') ? true : false)}).modal('show');
		});
		
		Form.on('submit', function(e){
			if(Form.form('is valid') == false){
				if(Form.find('.field.error').first().is(':visible')){
					jQuery.G2.scrollTo(Form.find('.field.error').first());
				}else{
					if(Form.find('.field.error').first().closest('.partitioned').length > 0){
						var activeTab = Form.find('.field.error').first().closest('.partitioned').find('.ui.segment.tab.active').first();
			
						activeTab.removeClass('active');
						jQuery('[data-tab="'+activeTab.data('tab')+'"]').removeClass('active');
						Form.find('.field.error').first().closest('.ui.segment.tab').addClass('active');
						jQuery('[data-tab="'+Form.find('.field.error').first().closest('.ui.segment.tab').data('tab')+'"]').addClass('active');
						jQuery('[data-tab="'+Form.find('.field.error').first().closest('.ui.segment.tab').data('tab')+'"]').removeClass('disabled');
					}
				}
			}else{
				if(Form.data('subanimation')){
					Form.addClass('loading');
				}
				//Form.form('submit');
			}
		});
	}
	
	$.G2.forms.invisible = function(){
		jQuery('div[data-invisible="1"]').each(function(i, invForm){
			var content = jQuery(invForm).html();
			var newForm = jQuery('<form>').html(content);
			jQuery.each(jQuery(invForm).get(0).attributes, function(i, att){
				newForm.attr(att.name, att.value);
			});
			jQuery(invForm).replaceWith(newForm);
			//jQuery('body').trigger('contentChange');
		});
	}
	
	$.G2.forms.ready = function(Form){
		jQuery.G2.forms.initializeFeatures(Form);
		
		jQuery.G2.forms.initializeEvents(Form);
		
		jQuery.G2.forms.initializeForm(Form);
		
		if(jQuery.fn.inputmask != undefined){
			Form.find('[data-inputmask]').inputmask();
		}
		
		Form.on('g2.actions.dynamic.beforeStart', function(){
			Form.data('beforeStart', Form.form('is valid'));
		});
	}
	
}(jQuery));
/*!
* jquery.inputmask.bundle.js
* https://github.com/RobinHerbots/Inputmask
* Copyright (c) 2010 - 2017 Robin Herbots
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
* Version: 4.0.1-25
*/

!function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};b.m=a,b.c=c,b.i=function(a){return a},b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{configurable:!1,enumerable:!0,get:d})},b.n=function(a){var c=a&&a.__esModule?function(){return a.default}:function(){return a};return b.d(c,"a",c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p="",b(b.s=9)}([function(a,b,c){"use strict";var d,e,f;"function"==typeof Symbol&&Symbol.iterator;!function(g){e=[c(2)],d=g,void 0!==(f="function"==typeof d?d.apply(b,e):d)&&(a.exports=f)}(function(a){return a})},function(a,b,c){"use strict";var d,e,f,g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a};!function(g){e=[c(0),c(11),c(10)],d=g,void 0!==(f="function"==typeof d?d.apply(b,e):d)&&(a.exports=f)}(function(a,b,c,d){function e(b,c,g){if(!(this instanceof e))return new e(b,c,g);this.el=d,this.events={},this.maskset=d,this.refreshValue=!1,!0!==g&&(a.isPlainObject(b)?c=b:(c=c||{},c.alias=b),this.opts=a.extend(!0,{},this.defaults,c),this.noMasksCache=c&&c.definitions!==d,this.userOptions=c||{},this.isRTL=this.opts.numericInput,f(this.opts.alias,c,this.opts))}function f(b,c,g){var h=e.prototype.aliases[b];return h?(h.alias&&f(h.alias,d,g),a.extend(!0,g,h),a.extend(!0,g,c),!0):(null===g.mask&&(g.mask=b),!1)}function h(b,c){function f(b,f,g){var h=!1;if(null!==b&&""!==b||(h=null!==g.regex,h?(b=g.regex,b=b.replace(/^(\^)(.*)(\$)$/,"$2")):(h=!0,b=".*")),1===b.length&&!1===g.greedy&&0!==g.repeat&&(g.placeholder=""),g.repeat>0||"*"===g.repeat||"+"===g.repeat){var i="*"===g.repeat?0:"+"===g.repeat?1:g.repeat;b=g.groupmarker.start+b+g.groupmarker.end+g.quantifiermarker.start+i+","+g.repeat+g.quantifiermarker.end}var j,k=h?"regex_"+g.regex:g.numericInput?b.split("").reverse().join(""):b;return e.prototype.masksCache[k]===d||!0===c?(j={mask:b,maskToken:e.prototype.analyseMask(b,h,g),validPositions:{},_buffer:d,buffer:d,tests:{},metadata:f,maskLength:d},!0!==c&&(e.prototype.masksCache[k]=j,j=a.extend(!0,{},e.prototype.masksCache[k]))):j=a.extend(!0,{},e.prototype.masksCache[k]),j}if(a.isFunction(b.mask)&&(b.mask=b.mask(b)),a.isArray(b.mask)){if(b.mask.length>1){b.keepStatic=null===b.keepStatic||b.keepStatic;var g=b.groupmarker.start;return a.each(b.numericInput?b.mask.reverse():b.mask,function(c,e){g.length>1&&(g+=b.groupmarker.end+b.alternatormarker+b.groupmarker.start),e.mask===d||a.isFunction(e.mask)?g+=e:g+=e.mask}),g+=b.groupmarker.end,f(g,b.mask,b)}b.mask=b.mask.pop()}return b.mask&&b.mask.mask!==d&&!a.isFunction(b.mask.mask)?f(b.mask.mask,b.mask,b):f(b.mask,b.mask,b)}function i(f,h,j){function o(a,b,c){b=b||0;var e,f,g,h=[],i=0,k=r();do{!0===a&&p().validPositions[i]?(g=p().validPositions[i],f=g.match,e=g.locator.slice(),h.push(!0===c?g.input:!1===c?f.nativeDef:J(i,f))):(g=u(i,e,i-1),f=g.match,e=g.locator.slice(),(!1===j.jitMasking||i<k||"number"==typeof j.jitMasking&&isFinite(j.jitMasking)&&j.jitMasking>i)&&h.push(!1===c?f.nativeDef:J(i,f))),i++}while((V===d||i<V)&&(null!==f.fn||""!==f.def)||b>i);return""===h[h.length-1]&&h.pop(),p().maskLength=i+1,h}function p(){return h}function q(a){var b=p();b.buffer=d,!0!==a&&(b.validPositions={},b.p=0)}function r(a,b,c){var e=-1,f=-1,g=c||p().validPositions;a===d&&(a=-1);for(var h in g){var i=parseInt(h);g[i]&&(b||!0!==g[i].generatedInput)&&(i<=a&&(e=i),i>=a&&(f=i))}return-1!==e&&a-e>1||f<a?e:f}function s(b,c,e,f){var g,h=b,i=a.extend(!0,{},p().validPositions),k=!1;for(p().p=b,g=c-1;g>=h;g--)p().validPositions[g]!==d&&(!0!==e&&(!p().validPositions[g].match.optionality&&function(a){var b=p().validPositions[a];if(b!==d&&null===b.match.fn){var c=p().validPositions[a-1],e=p().validPositions[a+1];return c!==d&&e!==d}return!1}(g)||!1===j.canClearPosition(p(),g,r(),f,j))||delete p().validPositions[g]);for(q(!0),g=h+1;g<=r();){for(;p().validPositions[h]!==d;)h++;if(g<h&&(g=h+1),p().validPositions[g]===d&&E(g))g++;else{var l=u(g);!1===k&&i[h]&&i[h].match.def===l.match.def?(p().validPositions[h]=a.extend(!0,{},i[h]),p().validPositions[h].input=l.input,delete p().validPositions[g],g++):w(h,l.match.def)?!1!==D(h,l.input||J(g),!0)&&(delete p().validPositions[g],g++,k=!0):E(g)||(g++,h--),h++}}q(!0)}function t(a,b){for(var c,e=a,f=r(),g=p().validPositions[f]||x(0)[0],h=g.alternation!==d?g.locator[g.alternation].toString().split(","):[],i=0;i<e.length&&(c=e[i],!(c.match&&(j.greedy&&!0!==c.match.optionalQuantifier||(!1===c.match.optionality||!1===c.match.newBlockMarker)&&!0!==c.match.optionalQuantifier)&&(g.alternation===d||g.alternation!==c.alternation||c.locator[g.alternation]!==d&&C(c.locator[g.alternation].toString().split(","),h)))||!0===b&&(null!==c.match.fn||/[0-9a-bA-Z]/.test(c.match.def)));i++);return c}function u(a,b,c){return p().validPositions[a]||t(x(a,b?b.slice():b,c))}function v(a){return p().validPositions[a]?p().validPositions[a]:x(a)[0]}function w(a,b){for(var c=!1,d=x(a),e=0;e<d.length;e++)if(d[e].match&&d[e].match.def===b){c=!0;break}return c}function x(b,c,e){function f(c,e,g,i){function l(g,i,q){function r(b,c){var d=0===a.inArray(b,c.matches);return d||a.each(c.matches,function(a,e){if(!0===e.isQuantifier&&(d=r(b,c.matches[a-1])))return!1}),d}function s(b,c,e){var f,g;if(p().validPositions[b-1]&&e&&p().tests[b])for(var h=p().validPositions[b-1].locator,i=p().tests[b][0].locator,j=0;j<e;j++)if(h[j]!==i[j])return h.slice(e+1);return(p().tests[b]||p().validPositions[b])&&a.each(p().tests[b]||[p().validPositions[b]],function(a,b){var h=e!==d?e:b.alternation,i=b.locator[h]!==d?b.locator[h].toString().indexOf(c):-1;(g===d||i<g)&&-1!==i&&(f=b,g=i)}),f?f.locator.slice((e!==d?e:f.alternation)+1):e!==d?s(b,c):d}if(k>1e4)throw"Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. "+p().mask;if(k===b&&g.matches===d)return m.push({match:g,locator:i.reverse(),cd:o}),!0;if(g.matches!==d){if(g.isGroup&&q!==g){if(g=l(c.matches[a.inArray(g,c.matches)+1],i))return!0}else if(g.isOptional){var t=g;if(g=f(g,e,i,q)){if(h=m[m.length-1].match,!r(h,t))return!0;n=!0,k=b}}else if(g.isAlternator){var u,v=g,w=[],x=m.slice(),y=i.length,z=e.length>0?e.shift():-1;if(-1===z||"string"==typeof z){var A,B=k,C=e.slice(),D=[];if("string"==typeof z)D=z.split(",");else for(A=0;A<v.matches.length;A++)D.push(A);for(var E=0;E<D.length;E++){if(A=parseInt(D[E]),m=[],e=s(k,A,y)||C.slice(),!0!==(g=l(v.matches[A]||c.matches[A],[A].concat(i),q)||g)&&g!==d&&D[D.length-1]<v.matches.length){var F=a.inArray(g,c.matches)+1;c.matches.length>F&&(g=l(c.matches[F],[F].concat(i.slice(1,i.length)),q))&&(D.push(F.toString()),a.each(m,function(a,b){b.alternation=i.length-1}))}u=m.slice(),k=B,m=[];for(var G=0;G<u.length;G++){var H=u[G],I=!1;H.alternation=H.alternation||y;for(var J=0;J<w.length;J++){var K=w[J];if("string"!=typeof z||-1!==a.inArray(H.locator[H.alternation].toString(),D)){if(function(a,b){return a.match.nativeDef===b.match.nativeDef||a.match.def===b.match.nativeDef||a.match.nativeDef===b.match.def}(H,K)){I=!0,H.alternation===K.alternation&&-1===K.locator[K.alternation].toString().indexOf(H.locator[H.alternation])&&(K.locator[K.alternation]=K.locator[K.alternation]+","+H.locator[H.alternation],K.alternation=H.alternation),H.match.nativeDef===K.match.def&&(H.locator[H.alternation]=K.locator[K.alternation],w.splice(w.indexOf(K),1,H));break}if(H.match.def===K.match.def){I=!1;break}if(function(a,c){return null===a.match.fn&&null!==c.match.fn&&c.match.fn.test(a.match.def,p(),b,!1,j,!1)}(H,K)||function(a,c){return null!==a.match.fn&&null!==c.match.fn&&c.match.fn.test(a.match.def.replace(/[\[\]]/g,""),p(),b,!1,j,!1)}(H,K)){H.alternation==K.alternation&&-1===H.locator[H.alternation].toString().indexOf(K.locator[K.alternation].toString().split("")[0])&&(H.na=H.na||H.locator[H.alternation].toString(),-1===H.na.indexOf(H.locator[H.alternation].toString().split("")[0])&&(H.na=H.na+","+H.locator[K.alternation].toString().split("")[0]),I=!0,H.locator[H.alternation]=K.locator[K.alternation].toString().split("")[0]+","+H.locator[H.alternation],w.splice(w.indexOf(K),0,H));break}}}I||w.push(H)}}"string"==typeof z&&(w=a.map(w,function(b,c){if(isFinite(c)){var e=b.alternation,f=b.locator[e].toString().split(",");b.locator[e]=d,b.alternation=d;for(var g=0;g<f.length;g++)-1!==a.inArray(f[g],D)&&(b.locator[e]!==d?(b.locator[e]+=",",b.locator[e]+=f[g]):b.locator[e]=parseInt(f[g]),b.alternation=e);if(b.locator[e]!==d)return b}})),m=x.concat(w),k=b,n=m.length>0,g=w.length>0,e=C.slice()}else g=l(v.matches[z]||c.matches[z],[z].concat(i),q);if(g)return!0}else if(g.isQuantifier&&q!==c.matches[a.inArray(g,c.matches)-1])for(var L=g,M=e.length>0?e.shift():0;M<(isNaN(L.quantifier.max)?M+1:L.quantifier.max)&&k<=b;M++){var N=c.matches[a.inArray(L,c.matches)-1];if(g=l(N,[M].concat(i),N)){if(h=m[m.length-1].match,h.optionalQuantifier=M>L.quantifier.min-1,r(h,N)){if(M>L.quantifier.min-1){n=!0,k=b;break}return!0}return!0}}else if(g=f(g,e,i,q))return!0}else k++}for(var q=e.length>0?e.shift():0;q<c.matches.length;q++)if(!0!==c.matches[q].isQuantifier){var r=l(c.matches[q],[q].concat(g),i);if(r&&k===b)return r;if(k>b)break}}function g(a){if(j.keepStatic&&b>0&&a.length>1+(""===a[a.length-1].match.def?1:0)&&!0!==a[0].match.optionality&&!0!==a[0].match.optionalQuantifier&&null===a[0].match.fn&&!/[0-9a-bA-Z]/.test(a[0].match.def)){if(p().validPositions[b-1]===d)return[t(a)];if(p().validPositions[b-1].alternation===a[0].alternation)return[t(a)];if(p().validPositions[b-1])return[t(a)]}return a}var h,i=p().maskToken,k=c?e:0,l=c?c.slice():[0],m=[],n=!1,o=c?c.join(""):"";if(b>-1){if(c===d){for(var q,r=b-1;(q=p().validPositions[r]||p().tests[r])===d&&r>-1;)r--;q!==d&&r>-1&&(l=function(b){var c=[];return a.isArray(b)||(b=[b]),b.length>0&&(b[0].alternation===d?(c=t(b.slice()).locator.slice(),0===c.length&&(c=b[0].locator.slice())):a.each(b,function(a,b){if(""!==b.def)if(0===c.length)c=b.locator.slice();else for(var d=0;d<c.length;d++)b.locator[d]&&-1===c[d].toString().indexOf(b.locator[d])&&(c[d]+=","+b.locator[d])})),c}(q),o=l.join(""),k=r)}if(p().tests[b]&&p().tests[b][0].cd===o)return g(p().tests[b]);for(var s=l.shift();s<i.length;s++){if(f(i[s],l,[s])&&k===b||k>b)break}}return(0===m.length||n)&&m.push({match:{fn:null,cardinality:0,optionality:!0,casing:null,def:"",placeholder:""},locator:[],cd:o}),c!==d&&p().tests[b]?g(a.extend(!0,[],m)):(p().tests[b]=a.extend(!0,[],m),g(p().tests[b]))}function y(){return p()._buffer===d&&(p()._buffer=o(!1,1),p().buffer===d&&(p().buffer=p()._buffer.slice())),p()._buffer}function z(a){return p().buffer!==d&&!0!==a||(p().buffer=o(!0,r(),!0)),p().buffer}function A(a,b,c){var e,f;if(!0===a)q(),a=0,b=c.length;else for(e=a;e<b;e++)delete p().validPositions[e];for(f=a,e=a;e<b;e++)if(q(!0),c[e]!==j.skipOptionalPartCharacter){var g=D(f,c[e],!0,!0);!1!==g&&(q(!0),f=g.caret!==d?g.caret:g.pos+1)}}function B(b,c,d){switch(j.casing||c.casing){case"upper":b=b.toUpperCase();break;case"lower":b=b.toLowerCase();break;case"title":var f=p().validPositions[d-1];b=0===d||f&&f.input===String.fromCharCode(e.keyCode.SPACE)?b.toUpperCase():b.toLowerCase();break;default:if(a.isFunction(j.casing)){var g=Array.prototype.slice.call(arguments);g.push(p().validPositions),b=j.casing.apply(this,g)}}return b}function C(b,c,e){for(var f,g=j.greedy?c:c.slice(0,1),h=!1,i=e!==d?e.split(","):[],k=0;k<i.length;k++)-1!==(f=b.indexOf(i[k]))&&b.splice(f,1);for(var l=0;l<b.length;l++)if(-1!==a.inArray(b[l],g)){h=!0;break}return h}function D(b,c,f,g,h,i){function k(a){var b=Z?a.begin-a.end>1||a.begin-a.end==1:a.end-a.begin>1||a.end-a.begin==1;return b&&0===a.begin&&a.end===p().maskLength?"full":b}function l(c,e,f){var h=!1;return a.each(x(c),function(i,l){for(var n=l.match,o=e?1:0,t="",u=n.cardinality;u>o;u--)t+=H(c-(u-1));if(e&&(t+=e),z(!0),!1!==(h=null!=n.fn?n.fn.test(t,p(),c,f,j,k(b)):(e===n.def||e===j.skipOptionalPartCharacter)&&""!==n.def&&{c:J(c,n,!0)||n.def,pos:c})){var v=h.c!==d?h.c:e;v=v===j.skipOptionalPartCharacter&&null===n.fn?J(c,n,!0)||n.def:v;var w=c,x=z();if(h.remove!==d&&(a.isArray(h.remove)||(h.remove=[h.remove]),a.each(h.remove.sort(function(a,b){return b-a}),function(a,b){s(b,b+1,!0)})),h.insert!==d&&(a.isArray(h.insert)||(h.insert=[h.insert]),a.each(h.insert.sort(function(a,b){return a-b}),function(a,b){D(b.pos,b.c,!0,g)})),h.refreshFromBuffer){var y=h.refreshFromBuffer;if(A(!0===y?y:y.start,y.end,x),h.pos===d&&h.c===d)return h.pos=r(),!1;if((w=h.pos!==d?h.pos:c)!==c)return h=a.extend(h,D(w,v,!0,g)),!1}else if(!0!==h&&h.pos!==d&&h.pos!==c&&(w=h.pos,A(c,w,z().slice()),w!==c))return h=a.extend(h,D(w,v,!0)),!1;return(!0===h||h.pos!==d||h.c!==d)&&(i>0&&q(!0),m(w,a.extend({},l,{input:B(v,n,w)}),g,k(b))||(h=!1),!1)}}),h}function m(b,c,e,f){if(f||j.insertMode&&p().validPositions[b]!==d&&e===d){var g,h=a.extend(!0,{},p().validPositions),i=r(d,!0);for(g=b;g<=i;g++)delete p().validPositions[g];p().validPositions[b]=a.extend(!0,{},c);var k,l=!0,m=p().validPositions,o=!1,s=p().maskLength;for(g=k=b;g<=i;g++){var t=h[g];if(t!==d)for(var u=k;u<p().maskLength&&(null===t.match.fn&&m[g]&&(!0===m[g].match.optionalQuantifier||!0===m[g].match.optionality)||null!=t.match.fn);){if(u++,!1===o&&h[u]&&h[u].match.def===t.match.def)p().validPositions[u]=a.extend(!0,{},h[u]),p().validPositions[u].input=t.input,n(u),k=u,l=!0;else if(w(u,t.match.def)){var v=D(u,t.input,!0,!0);l=!1!==v,k=v.caret||v.insert?r():u,o=!0}else if(!(l=!0===t.generatedInput)&&u>=p().maskLength-1)break;if(p().maskLength<s&&(p().maskLength=s),l)break}if(!l)break}if(!l)return p().validPositions=a.extend(!0,{},h),q(!0),!1}else p().validPositions[b]=a.extend(!0,{},c);return q(!0),!0}function n(b){for(var c=b-1;c>-1&&!p().validPositions[c];c--);var e,f;for(c++;c<b;c++)p().validPositions[c]===d&&(!1===j.jitMasking||j.jitMasking>c)&&(f=x(c,u(c-1).locator,c-1).slice(),""===f[f.length-1].match.def&&f.pop(),(e=t(f))&&(e.match.def===j.radixPointDefinitionSymbol||!E(c,!0)||a.inArray(j.radixPoint,z())<c&&e.match.fn&&e.match.fn.test(J(c),p(),c,!1,j))&&!1!==(v=l(c,J(c,e.match,!0)||(null==e.match.fn?e.match.def:""!==J(c)?J(c):z()[c]),!0))&&(p().validPositions[v.pos||c].generatedInput=!0))}f=!0===f;var o=b;b.begin!==d&&(o=Z&&!k(b)?b.end:b.begin);var v=!0,y=a.extend(!0,{},p().validPositions);if(a.isFunction(j.preValidation)&&!f&&!0!==g&&!0!==i&&(v=j.preValidation(z(),o,c,k(b),j)),!0===v){if(n(o),k(b)&&(Q(d,e.keyCode.DELETE,b,!0,!0),o=p().p),o<p().maskLength&&(V===d||o<V)&&(v=l(o,c,f),(!f||!0===g)&&!1===v&&!0!==i)){var G=p().validPositions[o];if(!G||null!==G.match.fn||G.match.def!==c&&c!==j.skipOptionalPartCharacter){if((j.insertMode||p().validPositions[F(o)]===d)&&!E(o,!0))for(var I=o+1,K=F(o);I<=K;I++)if(!1!==(v=l(I,c,f))){!function(b,c){var e=p().validPositions[c];if(e)for(var f=e.locator,g=f.length,h=b;h<c;h++)if(p().validPositions[h]===d&&!E(h,!0)){var i=x(h).slice(),j=t(i,!0),k=-1;""===i[i.length-1].match.def&&i.pop(),a.each(i,function(a,b){for(var c=0;c<g;c++){if(b.locator[c]===d||!C(b.locator[c].toString().split(","),f[c].toString().split(","),b.na)){var e=f[c],h=j.locator[c],i=b.locator[c];e-h>Math.abs(e-i)&&(j=b);break}k<c&&(k=c,j=b)}}),j=a.extend({},j,{input:J(h,j.match,!0)||j.match.def}),j.generatedInput=!0,m(h,j,!0),p().validPositions[c]=d,l(c,e.input,!0)}}(o,v.pos!==d?v.pos:I),o=I;break}}else v={caret:F(o)}}!1===v&&j.keepStatic&&!f&&!0!==h&&(v=function(b,c,e){var f,h,i,k,l,m,n,o,s=a.extend(!0,{},p().validPositions),t=!1,u=r();for(k=p().validPositions[u];u>=0;u--)if((i=p().validPositions[u])&&i.alternation!==d){if(f=u,h=p().validPositions[f].alternation,k.locator[i.alternation]!==i.locator[i.alternation])break;k=i}if(h!==d){o=parseInt(f);var v=k.locator[k.alternation||h]!==d?k.locator[k.alternation||h]:n[0];v.length>0&&(v=v.split(",")[0]);var w=p().validPositions[o],y=p().validPositions[o-1];a.each(x(o,y?y.locator:d,o-1),function(f,i){n=i.locator[h]?i.locator[h].toString().split(","):[];for(var k=0;k<n.length;k++){var u=[],x=0,y=0,z=!1;if(v<n[k]&&(i.na===d||-1===a.inArray(n[k],i.na.split(","))||-1===a.inArray(v.toString(),n))){p().validPositions[o]=a.extend(!0,{},i);var A=p().validPositions[o].locator;for(p().validPositions[o].locator[h]=parseInt(n[k]),null==i.match.fn?(w.input!==i.match.def&&(z=!0,!0!==w.generatedInput&&u.push(w.input)),y++,p().validPositions[o].generatedInput=!/[0-9a-bA-Z]/.test(i.match.def),p().validPositions[o].input=i.match.def):p().validPositions[o].input=w.input,l=o+1;l<r(d,!0)+1;l++)m=p().validPositions[l],m&&!0!==m.generatedInput&&/[0-9a-bA-Z]/.test(m.input)?u.push(m.input):l<b&&x++,delete p().validPositions[l];for(z&&u[0]===i.match.def&&u.shift(),q(!0),t=!0;u.length>0;){var B=u.shift();if(B!==j.skipOptionalPartCharacter&&!(t=D(r(d,!0)+1,B,!1,g,!0)))break}if(t){p().validPositions[o].locator=A;var C=r(b)+1;for(l=o+1;l<r()+1;l++)((m=p().validPositions[l])===d||null==m.match.fn)&&l<b+(y-x)&&y++;b+=y-x,t=D(b>C?C:b,c,e,g,!0)}if(t)return!1;q(),p().validPositions=a.extend(!0,{},s)}}})}return t}(o,c,f)),!0===v&&(v={pos:o})}if(a.isFunction(j.postValidation)&&!1!==v&&!f&&!0!==g&&!0!==i){var L=j.postValidation(z(!0),v,j);if(L.refreshFromBuffer&&L.buffer){var M=L.refreshFromBuffer;A(!0===M?M:M.start,M.end,L.buffer)}v=!0===L?v:L}return v&&v.pos===d&&(v.pos=o),!1!==v&&!0!==i||(q(!0),p().validPositions=a.extend(!0,{},y)),v}function E(a,b){var c=u(a).match;if(""===c.def&&(c=v(a).match),null!=c.fn)return c.fn;if(!0!==b&&a>-1){var d=x(a);return d.length>1+(""===d[d.length-1].match.def?1:0)}return!1}function F(a,b){var c=p().maskLength;if(a>=c)return c;var d=a;for(x(c+1).length>1&&(o(!0,c+1,!0),c=p().maskLength);++d<c&&(!0===b&&(!0!==v(d).match.newBlockMarker||!E(d))||!0!==b&&!E(d)););return d}function G(a,b){var c,d=a;if(d<=0)return 0;for(;--d>0&&(!0===b&&!0!==v(d).match.newBlockMarker||!0!==b&&!E(d)&&(c=x(d),c.length<2||2===c.length&&""===c[1].match.def)););return d}function H(a){return p().validPositions[a]===d?J(a):p().validPositions[a].input}function I(b,c,e,f,g){if(f&&a.isFunction(j.onBeforeWrite)){var h=j.onBeforeWrite.call(X,f,c,e,j);if(h){if(h.refreshFromBuffer){var i=h.refreshFromBuffer;A(!0===i?i:i.start,i.end,h.buffer||c),c=z(!0)}e!==d&&(e=h.caret!==d?h.caret:e)}}b!==d&&(b.inputmask._valueSet(c.join("")),e===d||f!==d&&"blur"===f.type?S(b,e,0===c.length):n&&f&&"input"===f.type?setTimeout(function(){M(b,e)},0):M(b,e),!0===g&&(_=!0,a(b).trigger("input")))}function J(b,c,e){if(c=c||v(b).match,c.placeholder!==d||!0===e)return a.isFunction(c.placeholder)?c.placeholder(j):c.placeholder;if(null===c.fn){if(b>-1&&p().validPositions[b]===d){var f,g=x(b),h=[];if(g.length>1+(""===g[g.length-1].match.def?1:0))for(var i=0;i<g.length;i++)if(!0!==g[i].match.optionality&&!0!==g[i].match.optionalQuantifier&&(null===g[i].match.fn||f===d||!1!==g[i].match.fn.test(f.match.def,p(),b,!0,j))&&(h.push(g[i]),null===g[i].match.fn&&(f=g[i]),h.length>1&&/[0-9a-bA-Z]/.test(h[0].match.def)))return j.placeholder.charAt(b%j.placeholder.length)}return c.def}return j.placeholder.charAt(b%j.placeholder.length)}function K(b,f,g,h,i){function k(a,b){return-1!==y().slice(a,F(a)).join("").indexOf(b)&&!E(a)&&v(a).match.nativeDef===b.charAt(b.length-1)}var l=h.slice(),m="",n=-1,o=d;if(q(),g||!0===j.autoUnmask)n=F(n);else{var s=y().slice(0,F(-1)).join(""),t=l.join("").match(new RegExp("^"+e.escapeRegex(s),"g"));t&&t.length>0&&(l.splice(0,t.length*s.length),n=F(n))}if(-1===n?(p().p=F(n),n=0):p().p=n,a.each(l,function(c,e){if(e!==d)if(p().validPositions[c]===d&&l[c]===J(c)&&E(c,!0)&&!1===D(c,l[c],!0,d,d,!0))p().p++;else{var f=new a.Event("_checkval");f.which=e.charCodeAt(0),m+=e;var h=r(d,!0),i=p().validPositions[h],s=u(h+1,i?i.locator.slice():d,h);if(!k(n,m)||g||j.autoUnmask){var t=g?c:null==s.match.fn&&s.match.optionality&&h+1<p().p?h+1:p().p;o=da.keypressEvent.call(b,f,!0,!1,g,t),n=t+1,m=""}else o=da.keypressEvent.call(b,f,!0,!1,!0,h+1);if(!1!==o&&!g&&a.isFunction(j.onBeforeWrite)){var v=o;if(o=j.onBeforeWrite.call(X,f,z(),o.forwardPosition,j),(o=a.extend(v,o))&&o.refreshFromBuffer){var w=o.refreshFromBuffer;A(!0===w?w:w.start,w.end,o.buffer),q(!0),o.caret&&(p().p=o.caret,o.forwardPosition=o.caret)}}}}),f){var w=d;c.activeElement===b&&o&&(w=j.numericInput?G(o.forwardPosition):o.forwardPosition),I(b,z(),w,i||new a.Event("checkval"),i&&"input"===i.type)}}function L(b){if(b){if(b.inputmask===d)return b.value;b.inputmask&&b.inputmask.refreshValue&&da.setValueEvent.call(b)}var c=[],e=p().validPositions;for(var f in e)e[f].match&&null!=e[f].match.fn&&c.push(e[f].input);var g=0===c.length?"":(Z?c.reverse():c).join("");if(a.isFunction(j.onUnMask)){var h=(Z?z().slice().reverse():z()).join("");g=j.onUnMask.call(X,h,g,j)}return g}function M(a,e,f,g){function h(a){if(!0!==g&&Z&&"number"==typeof a&&(!j.greedy||""!==j.placeholder)){a=z().join("").length-a}return a}var i;if(e===d)return a.setSelectionRange?(e=a.selectionStart,f=a.selectionEnd):b.getSelection?(i=b.getSelection().getRangeAt(0),i.commonAncestorContainer.parentNode!==a&&i.commonAncestorContainer!==a||(e=i.startOffset,f=i.endOffset)):c.selection&&c.selection.createRange&&(i=c.selection.createRange(),e=0-i.duplicate().moveStart("character",-a.inputmask._valueGet().length),f=e+i.text.length),{begin:h(e),end:h(f)};if(e.begin!==d&&(f=e.end,e=e.begin),"number"==typeof e){e=h(e),f=h(f),f="number"==typeof f?f:e;var l=parseInt(((a.ownerDocument.defaultView||b).getComputedStyle?(a.ownerDocument.defaultView||b).getComputedStyle(a,null):a.currentStyle).fontSize)*f;if(a.scrollLeft=l>a.scrollWidth?l:0,k||!1!==j.insertMode||e!==f||f++,a.setSelectionRange)a.selectionStart=e,a.selectionEnd=f;else if(b.getSelection){if(i=c.createRange(),a.firstChild===d||null===a.firstChild){var m=c.createTextNode("");a.appendChild(m)}i.setStart(a.firstChild,e<a.inputmask._valueGet().length?e:a.inputmask._valueGet().length),i.setEnd(a.firstChild,f<a.inputmask._valueGet().length?f:a.inputmask._valueGet().length),i.collapse(!0);var n=b.getSelection();n.removeAllRanges(),n.addRange(i)}else a.createTextRange&&(i=a.createTextRange(),i.collapse(!0),i.moveEnd("character",f),i.moveStart("character",e),i.select());S(a,{begin:e,end:f})}}function N(b){var c,e,f=z(),g=f.length,h=r(),i={},j=p().validPositions[h],k=j!==d?j.locator.slice():d;for(c=h+1;c<f.length;c++)e=u(c,k,c-1),k=e.locator.slice(),i[c]=a.extend(!0,{},e);var l=j&&j.alternation!==d?j.locator[j.alternation]:d;for(c=g-1;c>h&&(e=i[c],(e.match.optionality||e.match.optionalQuantifier&&e.match.newBlockMarker||l&&(l!==i[c].locator[j.alternation]&&null!=e.match.fn||null===e.match.fn&&e.locator[j.alternation]&&C(e.locator[j.alternation].toString().split(","),l.toString().split(","))&&""!==x(c)[0].def))&&f[c]===J(c,e.match));c--)g--;return b?{l:g,def:i[g]?i[g].match:d}:g}function O(a){for(var b,c=N(),e=a.length,f=p().validPositions[r()];c<e&&!E(c,!0)&&(b=f!==d?u(c,f.locator.slice(""),f):v(c))&&!0!==b.match.optionality&&(!0!==b.match.optionalQuantifier&&!0!==b.match.newBlockMarker||c+1===e&&""===(f!==d?u(c+1,f.locator.slice(""),f):v(c+1)).match.def);)c++;for(;(b=p().validPositions[c-1])&&b&&b.match.optionality&&b.input===j.skipOptionalPartCharacter;)c--;return a.splice(c),a}function P(b){if(a.isFunction(j.isComplete))return j.isComplete(b,j);if("*"===j.repeat)return d;var c=!1,e=N(!0),f=G(e.l);if(e.def===d||e.def.newBlockMarker||e.def.optionality||e.def.optionalQuantifier){c=!0;for(var g=0;g<=f;g++){var h=u(g).match;if(null!==h.fn&&p().validPositions[g]===d&&!0!==h.optionality&&!0!==h.optionalQuantifier||null===h.fn&&b[g]!==J(g,h)){c=!1;break}}}return c}function Q(b,c,f,g,h){if((j.numericInput||Z)&&(c===e.keyCode.BACKSPACE?c=e.keyCode.DELETE:c===e.keyCode.DELETE&&(c=e.keyCode.BACKSPACE),Z)){var i=f.end;f.end=f.begin,f.begin=i}c===e.keyCode.BACKSPACE&&(f.end-f.begin<1||!1===j.insertMode)?(f.begin=G(f.begin),p().validPositions[f.begin]!==d&&p().validPositions[f.begin].input===j.groupSeparator&&f.begin--):c===e.keyCode.DELETE&&f.begin===f.end&&(f.end=E(f.end,!0)&&p().validPositions[f.end]&&p().validPositions[f.end].input!==j.radixPoint?f.end+1:F(f.end)+1,p().validPositions[f.begin]!==d&&p().validPositions[f.begin].input===j.groupSeparator&&f.end++),s(f.begin,f.end,!1,g),!0!==g&&function(){if(j.keepStatic){for(var c=[],e=r(-1,!0),f=a.extend(!0,{},p().validPositions),g=p().validPositions[e];e>=0;e--){var h=p().validPositions[e];if(h){if(!0!==h.generatedInput&&/[0-9a-bA-Z]/.test(h.input)&&c.push(h.input),delete p().validPositions[e],h.alternation!==d&&h.locator[h.alternation]!==g.locator[h.alternation])break;g=h}}if(e>-1)for(p().p=F(r(-1,!0));c.length>0;){var i=new a.Event("keypress");i.which=c.pop().charCodeAt(0),da.keypressEvent.call(b,i,!0,!1,!1,p().p)}else p().validPositions=a.extend(!0,{},f)}}();var k=r(f.begin,!0);if(k<f.begin)p().p=F(k);else if(!0!==g&&(p().p=f.begin,!0!==h))for(;p().p<k&&p().validPositions[p().p]===d;)p().p++}function R(d){function e(a){var b,e=c.createElement("span");for(var g in f)isNaN(g)&&-1!==g.indexOf("font")&&(e.style[g]=f[g]);e.style.textTransform=f.textTransform,e.style.letterSpacing=f.letterSpacing,e.style.position="absolute",e.style.height="auto",e.style.width="auto",e.style.visibility="hidden",e.style.whiteSpace="nowrap",c.body.appendChild(e);var h,i=d.inputmask._valueGet(),j=0;for(b=0,h=i.length;b<=h;b++){if(e.innerHTML+=i.charAt(b)||"_",e.offsetWidth>=a){var k=a-j,l=e.offsetWidth-a;e.innerHTML=i.charAt(b),k-=e.offsetWidth/3,b=k<l?b-1:b;break}j=e.offsetWidth}return c.body.removeChild(e),b}var f=(d.ownerDocument.defaultView||b).getComputedStyle(d,null),g=c.createElement("div");g.style.width=f.width,g.style.textAlign=f.textAlign,W=c.createElement("div"),W.className="im-colormask",d.parentNode.insertBefore(W,d),d.parentNode.removeChild(d),W.appendChild(g),W.appendChild(d),d.style.left=g.offsetLeft+"px",a(d).on("click",function(a){return M(d,e(a.clientX)),da.clickEvent.call(d,[a])}),a(d).on("keydown",function(a){a.shiftKey||!1===j.insertMode||setTimeout(function(){S(d)},0)})}function S(a,b,e){function f(){m||null!==h.fn&&i.input!==d?m&&(null!==h.fn&&i.input!==d||""===h.def)&&(m=!1,l+="</span>"):(m=!0,l+="<span class='im-static'>")}function g(d){!0!==d&&n!==b.begin||c.activeElement!==a||(l+="<span class='im-caret' style='border-right-width: 1px;border-right-style: solid;'></span>")}var h,i,k,l="",m=!1,n=0;if(W!==d){var o=z();if(b===d?b=M(a):b.begin===d&&(b={begin:b,end:b}),!0!==e){var q=r();do{g(),p().validPositions[n]?(i=p().validPositions[n],h=i.match,k=i.locator.slice(),f(),l+=o[n]):(i=u(n,k,n-1),h=i.match,k=i.locator.slice(),(!1===j.jitMasking||n<q||"number"==typeof j.jitMasking&&isFinite(j.jitMasking)&&j.jitMasking>n)&&(f(),l+=J(n,h))),n++}while((V===d||n<V)&&(null!==h.fn||""!==h.def)||q>n||m);-1===l.indexOf("im-caret")&&g(!0),m&&f()}var s=W.getElementsByTagName("div")[0];s.innerHTML=l,a.inputmask.positionColorMask(a,s)}}h=h||this.maskset,j=j||this.opts;var T,U,V,W,X=this,Y=this.el,Z=this.isRTL,$=!1,_=!1,aa=!1,ba=!1,ca={on:function(b,c,f){var g=function(b){if(this.inputmask===d&&"FORM"!==this.nodeName){var c=a.data(this,"_inputmask_opts");c?new e(c).mask(this):ca.off(this)}else{if("setvalue"===b.type||"FORM"===this.nodeName||!(this.disabled||this.readOnly&&!("keydown"===b.type&&b.ctrlKey&&67===b.keyCode||!1===j.tabThrough&&b.keyCode===e.keyCode.TAB))){switch(b.type){case"input":if(!0===_)return _=!1,b.preventDefault();break;case"keydown":$=!1,_=!1;break;case"keypress":if(!0===$)return b.preventDefault();$=!0;break;case"click":if(l||m){var g=this,h=arguments;return setTimeout(function(){f.apply(g,h)},0),!1}}var i=f.apply(this,arguments);return!1===i&&(b.preventDefault(),b.stopPropagation()),i}b.preventDefault()}};b.inputmask.events[c]=b.inputmask.events[c]||[],b.inputmask.events[c].push(g),-1!==a.inArray(c,["submit","reset"])?null!=b.form&&a(b.form).on(c,g):a(b).on(c,g)},off:function(b,c){if(b.inputmask&&b.inputmask.events){var d;c?(d=[],d[c]=b.inputmask.events[c]):d=b.inputmask.events,a.each(d,function(c,d){for(;d.length>0;){var e=d.pop();-1!==a.inArray(c,["submit","reset"])?null!=b.form&&a(b.form).off(c,e):a(b).off(c,e)}delete b.inputmask.events[c]})}}},da={keydownEvent:function(b){var d=this,f=a(d),g=b.keyCode,h=M(d);if(g===e.keyCode.BACKSPACE||g===e.keyCode.DELETE||m&&g===e.keyCode.BACKSPACE_SAFARI||b.ctrlKey&&g===e.keyCode.X&&!function(a){var b=c.createElement("input"),d="on"+a,e=d in b;return e||(b.setAttribute(d,"return;"),e="function"==typeof b[d]),b=null,e}("cut"))b.preventDefault(),Q(d,g,h),I(d,z(!0),p().p,b,d.inputmask._valueGet()!==z().join("")),d.inputmask._valueGet()===y().join("")?f.trigger("cleared"):!0===P(z())&&f.trigger("complete");else if(g===e.keyCode.END||g===e.keyCode.PAGE_DOWN){b.preventDefault();var i=F(r());j.insertMode||i!==p().maskLength||b.shiftKey||i--,M(d,b.shiftKey?h.begin:i,i,!0)}else g===e.keyCode.HOME&&!b.shiftKey||g===e.keyCode.PAGE_UP?(b.preventDefault(),M(d,0,b.shiftKey?h.begin:0,!0)):(j.undoOnEscape&&g===e.keyCode.ESCAPE||90===g&&b.ctrlKey)&&!0!==b.altKey?(K(d,!0,!1,T.split("")),f.trigger("click")):g!==e.keyCode.INSERT||b.shiftKey||b.ctrlKey?!0===j.tabThrough&&g===e.keyCode.TAB?(!0===b.shiftKey?(null===v(h.begin).match.fn&&(h.begin=F(h.begin)),h.end=G(h.begin,!0),h.begin=G(h.end,!0)):(h.begin=F(h.begin,!0),h.end=F(h.begin,!0),h.end<p().maskLength&&h.end--),h.begin<p().maskLength&&(b.preventDefault(),M(d,h.begin,h.end))):b.shiftKey||!1===j.insertMode&&(g===e.keyCode.RIGHT?setTimeout(function(){var a=M(d);M(d,a.begin)},0):g===e.keyCode.LEFT&&setTimeout(function(){var a=M(d);M(d,Z?a.begin+1:a.begin-1)},0)):(j.insertMode=!j.insertMode,M(d,j.insertMode||h.begin!==p().maskLength?h.begin:h.begin-1));j.onKeyDown.call(this,b,z(),M(d).begin,j),aa=-1!==a.inArray(g,j.ignorables)},keypressEvent:function(b,c,f,g,h){var i=this,k=a(i),l=b.which||b.charCode||b.keyCode;if(!(!0===c||b.ctrlKey&&b.altKey)&&(b.ctrlKey||b.metaKey||aa))return l===e.keyCode.ENTER&&T!==z().join("")&&(T=z().join(""),setTimeout(function(){k.trigger("change")},0)),!0;if(l){46===l&&!1===b.shiftKey&&""!==j.radixPoint&&(l=j.radixPoint.charCodeAt(0));var m,n=c?{begin:h,end:h}:M(i),o=String.fromCharCode(l);p().writeOutBuffer=!0;var r=D(n,o,g);if(!1!==r&&(q(!0),m=r.caret!==d?r.caret:c?r.pos+1:F(r.pos),p().p=m),!1!==f&&(setTimeout(function(){j.onKeyValidation.call(i,l,r,j)},0),p().writeOutBuffer&&!1!==r)){var s=z();I(i,s,j.numericInput&&r.caret===d?G(m):m,b,!0!==c),!0!==c&&setTimeout(function(){!0===P(s)&&k.trigger("complete")},0)}if(b.preventDefault(),c)return!1!==r&&(r.forwardPosition=m),r}},pasteEvent:function(c){var d,e=this,f=c.originalEvent||c,g=a(e),h=e.inputmask._valueGet(!0),i=M(e);Z&&(d=i.end,i.end=i.begin,i.begin=d);var k=h.substr(0,i.begin),l=h.substr(i.end,h.length);if(k===(Z?y().reverse():y()).slice(0,i.begin).join("")&&(k=""),l===(Z?y().reverse():y()).slice(i.end).join("")&&(l=""),Z&&(d=k,k=l,l=d),b.clipboardData&&b.clipboardData.getData)h=k+b.clipboardData.getData("Text")+l;else{if(!f.clipboardData||!f.clipboardData.getData)return!0;h=k+f.clipboardData.getData("text/plain")+l}var m=h;if(a.isFunction(j.onBeforePaste)){if(!1===(m=j.onBeforePaste.call(X,h,j)))return c.preventDefault();m||(m=h)}return K(e,!1,!1,Z?m.split("").reverse():m.toString().split("")),I(e,z(),F(r()),c,T!==z().join("")),!0===P(z())&&g.trigger("complete"),c.preventDefault()},inputFallBackEvent:function(b){var c=this,d=c.inputmask._valueGet();if(z().join("")!==d){var f=M(c);if(!1===function(b,c,d){if("."===c.charAt(d.begin-1)&&""!==j.radixPoint&&(c=c.split(""),c[d.begin-1]=j.radixPoint.charAt(0),c=c.join("")),c.charAt(d.begin-1)===j.radixPoint&&c.length>z().length){var e=new a.Event("keypress");return e.which=j.radixPoint.charCodeAt(0),da.keypressEvent.call(b,e,!0,!0,!1,d.begin-1),!1}}(c,d,f))return!1;if(d=d.replace(new RegExp("("+e.escapeRegex(y().join(""))+")*"),""),!1===function(b,c,d){if(l){var e=c.replace(z().join(""),"");if(1===e.length){var f=new a.Event("keypress");return f.which=e.charCodeAt(0),
da.keypressEvent.call(b,f,!0,!0,!1,p().validPositions[d.begin-1]?d.begin:d.begin-1),!1}}}(c,d,f))return!1;f.begin>d.length&&(M(c,d.length),f=M(c));var g=z().join(""),h=d.substr(0,f.begin),i=d.substr(f.begin),k=g.substr(0,f.begin),m=g.substr(f.begin),o=f,q=0;if(i===m||h===k){if(o={begin:h.length},h[h.length-1]!==k[k.length-1]&&(o.begin--,q++),i.length>m.length)o.end=o.begin;else{var s=m.replace(new RegExp(e.escapeRegex(i)+"$"),"");o.end=o.begin+s.length+q}o.begin!==o.end||E(o.begin)||(o.end=f.end)}if(o.begin<o.end)I(c,z(),o),h.split("")[h.length-1]!==k.split("")[k.length-1]?(b.which=h.charCodeAt(h.length-1),aa=!1,da.keypressEvent.call(c,b)):(o.begin===o.end-1&&M(c,G(o.begin+1),o.end),b.keyCode=e.keyCode.DELETE,da.keydownEvent.call(c,b));else{if(-1===r()){for(var t=y().join("");null===d.match(e.escapeRegex(t)+"$");)t=t.slice(1);d=d.replace(t,"")}a.isFunction(j.onBeforeMask)&&(d=j.onBeforeMask.call(X,d,j)||d),K(c,!0,!1,d.split(""),b),function(a,b,c){var d=M(a).begin,f=a.inputmask._valueGet(),g=f.indexOf(b),h=d;if(0===g&&d!==b.length)d=b.length;else{for(;null===f.match(e.escapeRegex(c)+"$");)c=c.substr(1);var i=f.indexOf(c);-1!==i&&""!==c&&d>i&&i>g&&(d=i)}E(d)||(d=F(d)),h!==d&&(M(a,d),n&&setTimeout(function(){M(a,d)},0))}(c,h,i),!0===P(z())&&a(c).trigger("complete")}b.preventDefault()}},setValueEvent:function(b){this.inputmask.refreshValue=!1;var c=this,d=c.inputmask._valueGet(!0);a.isFunction(j.onBeforeMask)&&(d=j.onBeforeMask.call(X,d,j)||d),d=d.split(""),K(c,!0,!1,Z?d.reverse():d),T=z().join(""),(j.clearMaskOnLostFocus||j.clearIncomplete)&&c.inputmask._valueGet()===y().join("")&&c.inputmask._valueSet("")},focusEvent:function(a){var b=this,c=b.inputmask._valueGet();j.showMaskOnFocus&&(!j.showMaskOnHover||j.showMaskOnHover&&""===c)&&(b.inputmask._valueGet()!==z().join("")?I(b,z(),F(r())):!1===ba&&M(b,F(r()))),!0===j.positionCaretOnTab&&!1===ba&&""!==c&&(I(b,z(),M(b)),da.clickEvent.apply(b,[a,!0])),T=z().join("")},mouseleaveEvent:function(a){var b=this;if(ba=!1,j.clearMaskOnLostFocus&&c.activeElement!==b){var d=z().slice(),e=b.inputmask._valueGet();e!==b.getAttribute("placeholder")&&""!==e&&(-1===r()&&e===y().join("")?d=[]:O(d),I(b,d))}},clickEvent:function(b,e){function f(b){if(""!==j.radixPoint){var c=p().validPositions;if(c[b]===d||c[b].input===J(b)){if(b<F(-1))return!0;var e=a.inArray(j.radixPoint,z());if(-1!==e){for(var f in c)if(e<f&&c[f].input!==J(f))return!1;return!0}}}return!1}var g=this;setTimeout(function(){if(c.activeElement===g){var a=M(g);if(e&&(Z?a.end=a.begin:a.begin=a.end),a.begin===a.end)switch(j.positionCaretOnClick){case"none":break;case"radixFocus":if(f(a.begin)){var b=z().join("").indexOf(j.radixPoint);M(g,j.numericInput?F(b):b);break}default:var h=a.begin,i=r(h,!0),k=F(i);if(h<k)M(g,E(h,!0)||E(h-1,!0)?h:F(h));else{var l=p().validPositions[i],m=u(k,l?l.match.locator:d,l),n=J(k,m.match);if(""!==n&&z()[k]!==n&&!0!==m.match.optionalQuantifier&&!0!==m.match.newBlockMarker||!E(k,!0)&&m.match.def===n){var o=F(k);(h>=o||h===k)&&(k=o)}M(g,k)}}}},0)},dblclickEvent:function(a){var b=this;setTimeout(function(){M(b,0,F(r()))},0)},cutEvent:function(d){var f=this,g=a(f),h=M(f),i=d.originalEvent||d,j=b.clipboardData||i.clipboardData,k=Z?z().slice(h.end,h.begin):z().slice(h.begin,h.end);j.setData("text",Z?k.reverse().join(""):k.join("")),c.execCommand&&c.execCommand("copy"),Q(f,e.keyCode.DELETE,h),I(f,z(),p().p,d,T!==z().join("")),f.inputmask._valueGet()===y().join("")&&g.trigger("cleared")},blurEvent:function(b){var c=a(this),e=this;if(e.inputmask){var f=e.inputmask._valueGet(),g=z().slice();""!==f&&(j.clearMaskOnLostFocus&&(-1===r()&&f===y().join("")?g=[]:O(g)),!1===P(g)&&(setTimeout(function(){c.trigger("incomplete")},0),j.clearIncomplete&&(q(),g=j.clearMaskOnLostFocus?[]:y().slice())),I(e,g,d,b)),T!==z().join("")&&(T=g.join(""),c.trigger("change"))}},mouseenterEvent:function(a){var b=this;ba=!0,c.activeElement!==b&&j.showMaskOnHover&&b.inputmask._valueGet()!==z().join("")&&I(b,z())},submitEvent:function(a){T!==z().join("")&&U.trigger("change"),j.clearMaskOnLostFocus&&-1===r()&&Y.inputmask._valueGet&&Y.inputmask._valueGet()===y().join("")&&Y.inputmask._valueSet(""),j.removeMaskOnSubmit&&(Y.inputmask._valueSet(Y.inputmask.unmaskedvalue(),!0),setTimeout(function(){I(Y,z())},0))},resetEvent:function(a){Y.inputmask.refreshValue=!0,setTimeout(function(){U.trigger("setvalue")},0)}};e.prototype.positionColorMask=function(a,b){a.style.left=b.offsetLeft+"px"};var ea;if(f!==d)switch(f.action){case"isComplete":return Y=f.el,P(z());case"unmaskedvalue":return Y!==d&&f.value===d||(ea=f.value,ea=(a.isFunction(j.onBeforeMask)?j.onBeforeMask.call(X,ea,j)||ea:ea).split(""),K(d,!1,!1,Z?ea.reverse():ea),a.isFunction(j.onBeforeWrite)&&j.onBeforeWrite.call(X,d,z(),0,j)),L(Y);case"mask":!function(b){ca.off(b);var e=function(b,e){var f=b.getAttribute("type"),h="INPUT"===b.tagName&&-1!==a.inArray(f,e.supportsInputType)||b.isContentEditable||"TEXTAREA"===b.tagName;if(!h)if("INPUT"===b.tagName){var i=c.createElement("input");i.setAttribute("type",f),h="text"===i.type,i=null}else h="partial";return!1!==h?function(b){function f(){return this.inputmask?this.inputmask.opts.autoUnmask?this.inputmask.unmaskedvalue():-1!==r()||!0!==e.nullable?c.activeElement===this&&e.clearMaskOnLostFocus?(Z?O(z().slice()).reverse():O(z().slice())).join(""):i.call(this):"":i.call(this)}function h(b){j.call(this,b),this.inputmask&&a(this).trigger("setvalue")}var i,j;if(!b.inputmask.__valueGet){if(!0!==e.noValuePatching){if(Object.getOwnPropertyDescriptor){"function"!=typeof Object.getPrototypeOf&&(Object.getPrototypeOf="object"===g("test".__proto__)?function(a){return a.__proto__}:function(a){return a.constructor.prototype});var k=Object.getPrototypeOf?Object.getOwnPropertyDescriptor(Object.getPrototypeOf(b),"value"):d;k&&k.get&&k.set?(i=k.get,j=k.set,Object.defineProperty(b,"value",{get:f,set:h,configurable:!0})):"INPUT"!==b.tagName&&(i=function(){return this.textContent},j=function(a){this.textContent=a},Object.defineProperty(b,"value",{get:f,set:h,configurable:!0}))}else c.__lookupGetter__&&b.__lookupGetter__("value")&&(i=b.__lookupGetter__("value"),j=b.__lookupSetter__("value"),b.__defineGetter__("value",f),b.__defineSetter__("value",h));b.inputmask.__valueGet=i,b.inputmask.__valueSet=j}b.inputmask._valueGet=function(a){return Z&&!0!==a?i.call(this.el).split("").reverse().join(""):i.call(this.el)},b.inputmask._valueSet=function(a,b){j.call(this.el,null===a||a===d?"":!0!==b&&Z?a.split("").reverse().join(""):a)},i===d&&(i=function(){return this.value},j=function(a){this.value=a},function(b){if(a.valHooks&&(a.valHooks[b]===d||!0!==a.valHooks[b].inputmaskpatch)){var c=a.valHooks[b]&&a.valHooks[b].get?a.valHooks[b].get:function(a){return a.value},f=a.valHooks[b]&&a.valHooks[b].set?a.valHooks[b].set:function(a,b){return a.value=b,a};a.valHooks[b]={get:function(a){if(a.inputmask){if(a.inputmask.opts.autoUnmask)return a.inputmask.unmaskedvalue();var b=c(a);return-1!==r(d,d,a.inputmask.maskset.validPositions)||!0!==e.nullable?b:""}return c(a)},set:function(b,c){var d,e=a(b);return d=f(b,c),b.inputmask&&e.trigger("setvalue"),d},inputmaskpatch:!0}}}(b.type),function(b){ca.on(b,"mouseenter",function(b){var c=a(this);this.inputmask._valueGet()!==z().join("")&&c.trigger("setvalue")})}(b))}}(b):b.inputmask=d,h}(b,j);if(!1!==e&&(Y=b,U=a(Y),V=Y!==d?Y.maxLength:d,-1===V&&(V=d),!0===j.colorMask&&R(Y),n&&(Y.hasOwnProperty("inputmode")&&(Y.inputmode=j.inputmode,Y.setAttribute("inputmode",j.inputmode)),"rtfm"===j.androidHack&&(!0!==j.colorMask&&R(Y),Y.type="password")),!0===e&&(ca.on(Y,"submit",da.submitEvent),ca.on(Y,"reset",da.resetEvent),ca.on(Y,"mouseenter",da.mouseenterEvent),ca.on(Y,"blur",da.blurEvent),ca.on(Y,"focus",da.focusEvent),ca.on(Y,"mouseleave",da.mouseleaveEvent),!0!==j.colorMask&&ca.on(Y,"click",da.clickEvent),ca.on(Y,"dblclick",da.dblclickEvent),ca.on(Y,"paste",da.pasteEvent),ca.on(Y,"dragdrop",da.pasteEvent),ca.on(Y,"drop",da.pasteEvent),ca.on(Y,"cut",da.cutEvent),ca.on(Y,"complete",j.oncomplete),ca.on(Y,"incomplete",j.onincomplete),ca.on(Y,"cleared",j.oncleared),n||!0===j.inputEventOnly?Y.removeAttribute("maxLength"):(ca.on(Y,"keydown",da.keydownEvent),ca.on(Y,"keypress",da.keypressEvent)),ca.on(Y,"compositionstart",a.noop),ca.on(Y,"compositionupdate",a.noop),ca.on(Y,"compositionend",a.noop),ca.on(Y,"keyup",a.noop),ca.on(Y,"input",da.inputFallBackEvent),ca.on(Y,"beforeinput",a.noop)),ca.on(Y,"setvalue",da.setValueEvent),T=y().join(""),""!==Y.inputmask._valueGet(!0)||!1===j.clearMaskOnLostFocus||c.activeElement===Y)){var f=a.isFunction(j.onBeforeMask)?j.onBeforeMask.call(X,Y.inputmask._valueGet(!0),j)||Y.inputmask._valueGet(!0):Y.inputmask._valueGet(!0);""!==f&&K(Y,!0,!1,Z?f.split("").reverse():f.split(""));var h=z().slice();T=h.join(""),!1===P(h)&&j.clearIncomplete&&q(),j.clearMaskOnLostFocus&&c.activeElement!==Y&&(-1===r()?h=[]:O(h)),I(Y,h),c.activeElement===Y&&M(Y,F(r()))}}(Y);break;case"format":return ea=(a.isFunction(j.onBeforeMask)?j.onBeforeMask.call(X,f.value,j)||f.value:f.value).split(""),K(d,!0,!1,Z?ea.reverse():ea),f.metadata?{value:Z?z().slice().reverse().join(""):z().join(""),metadata:i.call(this,{action:"getmetadata"},h,j)}:Z?z().slice().reverse().join(""):z().join("");case"isValid":f.value?(ea=f.value.split(""),K(d,!0,!0,Z?ea.reverse():ea)):f.value=z().join("");for(var fa=z(),ga=N(),ha=fa.length-1;ha>ga&&!E(ha);ha--);return fa.splice(ga,ha+1-ga),P(fa)&&f.value===z().join("");case"getemptymask":return y().join("");case"remove":if(Y&&Y.inputmask){U=a(Y),Y.inputmask._valueSet(j.autoUnmask?L(Y):Y.inputmask._valueGet(!0)),ca.off(Y);Object.getOwnPropertyDescriptor&&Object.getPrototypeOf?Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Y),"value")&&Y.inputmask.__valueGet&&Object.defineProperty(Y,"value",{get:Y.inputmask.__valueGet,set:Y.inputmask.__valueSet,configurable:!0}):c.__lookupGetter__&&Y.__lookupGetter__("value")&&Y.inputmask.__valueGet&&(Y.__defineGetter__("value",Y.inputmask.__valueGet),Y.__defineSetter__("value",Y.inputmask.__valueSet)),Y.inputmask=d}return Y;case"getmetadata":if(a.isArray(h.metadata)){var ia=o(!0,0,!1).join("");return a.each(h.metadata,function(a,b){if(b.mask===ia)return ia=b,!1}),ia}return h.metadata}}var j=navigator.userAgent,k=/mobile/i.test(j),l=/iemobile/i.test(j),m=/iphone/i.test(j)&&!l,n=/android/i.test(j)&&!l;return e.prototype={dataAttribute:"data-inputmask",defaults:{placeholder:"_",optionalmarker:{start:"[",end:"]"},quantifiermarker:{start:"{",end:"}"},groupmarker:{start:"(",end:")"},alternatormarker:"|",escapeChar:"\\",mask:null,regex:null,oncomplete:a.noop,onincomplete:a.noop,oncleared:a.noop,repeat:0,greedy:!0,autoUnmask:!1,removeMaskOnSubmit:!1,clearMaskOnLostFocus:!0,insertMode:!0,clearIncomplete:!1,alias:null,onKeyDown:a.noop,onBeforeMask:null,onBeforePaste:function(b,c){return a.isFunction(c.onBeforeMask)?c.onBeforeMask.call(this,b,c):b},onBeforeWrite:null,onUnMask:null,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:a.noop,skipOptionalPartCharacter:" ",numericInput:!1,rightAlign:!1,undoOnEscape:!0,radixPoint:"",radixPointDefinitionSymbol:d,groupSeparator:"",keepStatic:null,positionCaretOnTab:!0,tabThrough:!1,supportsInputType:["text","tel","password"],ignorables:[8,9,13,19,27,33,34,35,36,37,38,39,40,45,46,93,112,113,114,115,116,117,118,119,120,121,122,123,0,229],isComplete:null,canClearPosition:a.noop,preValidation:null,postValidation:null,staticDefinitionSymbol:d,jitMasking:!1,nullable:!0,inputEventOnly:!1,noValuePatching:!1,positionCaretOnClick:"lvp",casing:null,inputmode:"verbatim",colorMask:!1,androidHack:!1,importDataAttributes:!0},definitions:{9:{validator:"[0-9]",cardinality:1,definitionSymbol:"*"},a:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",cardinality:1,definitionSymbol:"*"},"*":{validator:"[0-9A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",cardinality:1}},aliases:{},masksCache:{},mask:function(g){function j(c,e,g,h){if(!0===e.importDataAttributes){var i,j,k,l,m=function(a,e){null!==(e=e!==d?e:c.getAttribute(h+"-"+a))&&("string"==typeof e&&(0===a.indexOf("on")?e=b[e]:"false"===e?e=!1:"true"===e&&(e=!0)),g[a]=e)},n=c.getAttribute(h);if(n&&""!==n&&(n=n.replace(new RegExp("'","g"),'"'),j=JSON.parse("{"+n+"}")),j){k=d;for(l in j)if("alias"===l.toLowerCase()){k=j[l];break}}m("alias",k),g.alias&&f(g.alias,g,e);for(i in e){if(j){k=d;for(l in j)if(l.toLowerCase()===i.toLowerCase()){k=j[l];break}}m(i,k)}}return a.extend(!0,e,g),("rtl"===c.dir||e.rightAlign)&&(c.style.textAlign="right"),("rtl"===c.dir||e.numericInput)&&(c.dir="ltr",c.removeAttribute("dir"),e.isRTL=!0),e}var k=this;return"string"==typeof g&&(g=c.getElementById(g)||c.querySelectorAll(g)),g=g.nodeName?[g]:g,a.each(g,function(b,c){var f=a.extend(!0,{},k.opts);j(c,f,a.extend(!0,{},k.userOptions),k.dataAttribute);var g=h(f,k.noMasksCache);g!==d&&(c.inputmask!==d&&c.inputmask.remove(),c.inputmask=new e(d,d,!0),c.inputmask.opts=f,c.inputmask.noMasksCache=k.noMasksCache,c.inputmask.userOptions=a.extend(!0,{},k.userOptions),c.inputmask.isRTL=f.isRTL||f.numericInput,c.inputmask.el=c,c.inputmask.maskset=g,a.data(c,"_inputmask_opts",f),i.call(c.inputmask,{action:"mask"}))}),g&&g[0]?g[0].inputmask||this:this},option:function(b,c){return"string"==typeof b?this.opts[b]:"object"===(void 0===b?"undefined":g(b))?(a.extend(this.userOptions,b),this.el&&!0!==c&&this.mask(this.el),this):void 0},unmaskedvalue:function(a){return this.maskset=this.maskset||h(this.opts,this.noMasksCache),i.call(this,{action:"unmaskedvalue",value:a})},remove:function(){return i.call(this,{action:"remove"})},getemptymask:function(){return this.maskset=this.maskset||h(this.opts,this.noMasksCache),i.call(this,{action:"getemptymask"})},hasMaskedValue:function(){return!this.opts.autoUnmask},isComplete:function(){return this.maskset=this.maskset||h(this.opts,this.noMasksCache),i.call(this,{action:"isComplete"})},getmetadata:function(){return this.maskset=this.maskset||h(this.opts,this.noMasksCache),i.call(this,{action:"getmetadata"})},isValid:function(a){return this.maskset=this.maskset||h(this.opts,this.noMasksCache),i.call(this,{action:"isValid",value:a})},format:function(a,b){return this.maskset=this.maskset||h(this.opts,this.noMasksCache),i.call(this,{action:"format",value:a,metadata:b})},analyseMask:function(b,c,f){function g(a,b,c,d){this.matches=[],this.openGroup=a||!1,this.alternatorGroup=!1,this.isGroup=a||!1,this.isOptional=b||!1,this.isQuantifier=c||!1,this.isAlternator=d||!1,this.quantifier={min:1,max:1}}function h(b,g,h){h=h!==d?h:b.matches.length;var i=b.matches[h-1];if(c)0===g.indexOf("[")||u||"."===g?b.matches.splice(h++,0,{fn:new RegExp(g,f.casing?"i":""),cardinality:1,optionality:b.isOptional,newBlockMarker:i===d||i.def!==g,casing:null,def:g,placeholder:d,nativeDef:g}):a.each(g.split(""),function(a,c){i=b.matches[h-1],b.matches.splice(h++,0,{fn:null,cardinality:0,optionality:b.isOptional,newBlockMarker:i===d||i.def!==c&&null!==i.fn,casing:null,def:f.staticDefinitionSymbol||c,placeholder:f.staticDefinitionSymbol!==d?c:d,nativeDef:c})}),u=!1;else{var j=(f.definitions?f.definitions[g]:d)||e.prototype.definitions[g];if(j&&!u){for(var k=j.prevalidator,l=k?k.length:0,m=1;m<j.cardinality;m++){var n=l>=m?k[m-1]:[],o=n.validator,p=n.cardinality;b.matches.splice(h++,0,{fn:o?"string"==typeof o?new RegExp(o,f.casing?"i":""):new function(){this.test=o}:new RegExp("."),cardinality:p||1,optionality:b.isOptional,newBlockMarker:i===d||i.def!==(j.definitionSymbol||g),casing:j.casing,def:j.definitionSymbol||g,placeholder:j.placeholder,nativeDef:g}),i=b.matches[h-1]}b.matches.splice(h++,0,{fn:j.validator?"string"==typeof j.validator?new RegExp(j.validator,f.casing?"i":""):new function(){this.test=j.validator}:new RegExp("."),cardinality:j.cardinality,optionality:b.isOptional,newBlockMarker:i===d||i.def!==(j.definitionSymbol||g),casing:j.casing,def:j.definitionSymbol||g,placeholder:j.placeholder,nativeDef:g})}else b.matches.splice(h++,0,{fn:null,cardinality:0,optionality:b.isOptional,newBlockMarker:i===d||i.def!==g&&null!==i.fn,casing:null,def:f.staticDefinitionSymbol||g,placeholder:f.staticDefinitionSymbol!==d?g:d,nativeDef:g}),u=!1}}function i(b){b&&b.matches&&a.each(b.matches,function(a,e){var g=b.matches[a+1];(g===d||g.matches===d||!1===g.isQuantifier)&&e&&e.isGroup&&(e.isGroup=!1,c||(h(e,f.groupmarker.start,0),!0!==e.openGroup&&h(e,f.groupmarker.end))),i(e)})}function j(){if(w.length>0){if(o=w[w.length-1],h(o,m),o.isAlternator){p=w.pop();for(var a=0;a<p.matches.length;a++)p.matches[a].isGroup=!1;w.length>0?(o=w[w.length-1],o.matches.push(p)):v.matches.push(p)}}else h(v,m)}function k(a){a.matches=a.matches.reverse();for(var b in a.matches)if(a.matches.hasOwnProperty(b)){var c=parseInt(b);if(a.matches[b].isQuantifier&&a.matches[c+1]&&a.matches[c+1].isGroup){var e=a.matches[b];a.matches.splice(b,1),a.matches.splice(c+1,0,e)}a.matches[b].matches!==d?a.matches[b]=k(a.matches[b]):a.matches[b]=function(a){return a===f.optionalmarker.start?a=f.optionalmarker.end:a===f.optionalmarker.end?a=f.optionalmarker.start:a===f.groupmarker.start?a=f.groupmarker.end:a===f.groupmarker.end&&(a=f.groupmarker.start),a}(a.matches[b])}return a}var l,m,n,o,p,q,r,s=/(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?\})|[^.?*+^${[]()|\\]+|./g,t=/\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,u=!1,v=new g,w=[],x=[];for(c&&(f.optionalmarker.start=d,f.optionalmarker.end=d);l=c?t.exec(b):s.exec(b);){if(m=l[0],c&&!0!==u)switch(m.charAt(0)){case"?":m="{0,1}";break;case"+":case"*":m="{"+m+"}"}if(u)j();else switch(m.charAt(0)){case f.escapeChar:u=!0,c&&j();break;case f.optionalmarker.end:case f.groupmarker.end:if(n=w.pop(),n.openGroup=!1,n!==d)if(w.length>0){if(o=w[w.length-1],o.matches.push(n),o.isAlternator){p=w.pop();for(var y=0;y<p.matches.length;y++)p.matches[y].isGroup=!1,p.matches[y].alternatorGroup=!1;w.length>0?(o=w[w.length-1],o.matches.push(p)):v.matches.push(p)}}else v.matches.push(n);else j();break;case f.optionalmarker.start:w.push(new g(!1,!0));break;case f.groupmarker.start:w.push(new g(!0));break;case f.quantifiermarker.start:var z=new g(!1,!1,!0);m=m.replace(/[{}]/g,"");var A=m.split(","),B=isNaN(A[0])?A[0]:parseInt(A[0]),C=1===A.length?B:isNaN(A[1])?A[1]:parseInt(A[1]);if("*"!==C&&"+"!==C||(B="*"===C?0:1),z.quantifier={min:B,max:C},w.length>0){var D=w[w.length-1].matches;l=D.pop(),l.isGroup||(r=new g(!0),r.matches.push(l),l=r),D.push(l),D.push(z)}else l=v.matches.pop(),l.isGroup||(c&&null===l.fn&&"."===l.def&&(l.fn=new RegExp(l.def,f.casing?"i":"")),r=new g(!0),r.matches.push(l),l=r),v.matches.push(l),v.matches.push(z);break;case f.alternatormarker:if(w.length>0){o=w[w.length-1];var E=o.matches[o.matches.length-1];q=o.openGroup&&(E.matches===d||!1===E.isGroup&&!1===E.isAlternator)?w.pop():o.matches.pop()}else q=v.matches.pop();if(q.isAlternator)w.push(q);else if(q.alternatorGroup?(p=w.pop(),q.alternatorGroup=!1):p=new g(!1,!1,!1,!0),p.matches.push(q),w.push(p),q.openGroup){q.openGroup=!1;var F=new g(!0);F.alternatorGroup=!0,w.push(F)}break;default:j()}}for(;w.length>0;)n=w.pop(),v.matches.push(n);return v.matches.length>0&&(i(v),x.push(v)),(f.numericInput||f.isRTL)&&k(x[0]),x}},e.extendDefaults=function(b){a.extend(!0,e.prototype.defaults,b)},e.extendDefinitions=function(b){a.extend(!0,e.prototype.definitions,b)},e.extendAliases=function(b){a.extend(!0,e.prototype.aliases,b)},e.format=function(a,b,c){return e(b).format(a,c)},e.unmask=function(a,b){return e(b).unmaskedvalue(a)},e.isValid=function(a,b){return e(b).isValid(a)},e.remove=function(b){a.each(b,function(a,b){b.inputmask&&b.inputmask.remove()})},e.escapeRegex=function(a){var b=["/",".","*","+","?","|","(",")","[","]","{","}","\\","$","^"];return a.replace(new RegExp("(\\"+b.join("|\\")+")","gim"),"\\$1")},e.keyCode={ALT:18,BACKSPACE:8,BACKSPACE_SAFARI:127,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91,X:88},e})},function(a,b){a.exports=jQuery},function(a,b,c){"use strict";var d,e,f;"function"==typeof Symbol&&Symbol.iterator;!function(g){e=[c(0),c(1)],d=g,void 0!==(f="function"==typeof d?d.apply(b,e):d)&&(a.exports=f)}(function(a,b){function c(a){return isNaN(a)||29===new Date(a,2,0).getDate()}return b.extendAliases({"dd/mm/yyyy":{mask:"1/2/y",placeholder:"dd/mm/yyyy",regex:{val1pre:new RegExp("[0-3]"),val1:new RegExp("0[1-9]|[12][0-9]|3[01]"),val2pre:function(a){var c=b.escapeRegex.call(this,a);return new RegExp("((0[1-9]|[12][0-9]|3[01])"+c+"[01])")},val2:function(a){var c=b.escapeRegex.call(this,a);return new RegExp("((0[1-9]|[12][0-9])"+c+"(0[1-9]|1[012]))|(30"+c+"(0[13-9]|1[012]))|(31"+c+"(0[13578]|1[02]))")}},leapday:"29/02/",separator:"/",yearrange:{minyear:1900,maxyear:2099},isInYearRange:function(a,b,c){if(isNaN(a))return!1;var d=parseInt(a.concat(b.toString().slice(a.length))),e=parseInt(a.concat(c.toString().slice(a.length)));return!isNaN(d)&&(b<=d&&d<=c)||!isNaN(e)&&(b<=e&&e<=c)},determinebaseyear:function(a,b,c){var d=(new Date).getFullYear();if(a>d)return a;if(b<d){for(var e=b.toString().slice(0,2),f=b.toString().slice(2,4);b<e+c;)e--;var g=e+f;return a>g?a:g}if(a<=d&&d<=b){for(var h=d.toString().slice(0,2);b<h+c;)h--;var i=h+c;return i<a?a:i}return d},onKeyDown:function(c,d,e,f){var g=a(this);if(c.ctrlKey&&c.keyCode===b.keyCode.RIGHT){var h=new Date;g.val(h.getDate().toString()+(h.getMonth()+1).toString()+h.getFullYear().toString()),g.trigger("setvalue")}},getFrontValue:function(a,b,c){for(var d=0,e=0,f=0;f<a.length&&"2"!==a.charAt(f);f++){var g=c.definitions[a.charAt(f)];g?(d+=e,e=g.cardinality):e++}return b.join("").substr(d,e)},postValidation:function(a,b,d){var e,f,g=a.join("");return 0===d.mask.indexOf("y")?(f=g.substr(0,4),e=g.substring(4,10)):(f=g.substring(6,10),e=g.substr(0,6)),b&&(e!==d.leapday||c(f))},definitions:{1:{validator:function(a,b,c,d,e){var f=e.regex.val1.test(a);return d||f||a.charAt(1)!==e.separator&&-1==="-./".indexOf(a.charAt(1))||!(f=e.regex.val1.test("0"+a.charAt(0)))?f:(b.buffer[c-1]="0",{refreshFromBuffer:{start:c-1,end:c},pos:c,c:a.charAt(0)})},cardinality:2,prevalidator:[{validator:function(a,b,c,d,e){var f=a;isNaN(b.buffer[c+1])||(f+=b.buffer[c+1]);var g=1===f.length?e.regex.val1pre.test(f):e.regex.val1.test(f);if(!d&&!g){if(g=e.regex.val1.test(a+"0"))return b.buffer[c]=a,b.buffer[++c]="0",{pos:c,c:"0"};if(g=e.regex.val1.test("0"+a))return b.buffer[c]="0",c++,{pos:c}}return g},cardinality:1}]},2:{validator:function(a,b,c,d,e){var f=e.getFrontValue(b.mask,b.buffer,e);-1!==f.indexOf(e.placeholder[0])&&(f="01"+e.separator);var g=e.regex.val2(e.separator).test(f+a);return d||g||a.charAt(1)!==e.separator&&-1==="-./".indexOf(a.charAt(1))||!(g=e.regex.val2(e.separator).test(f+"0"+a.charAt(0)))?g:(b.buffer[c-1]="0",{refreshFromBuffer:{start:c-1,end:c},pos:c,c:a.charAt(0)})},cardinality:2,prevalidator:[{validator:function(a,b,c,d,e){isNaN(b.buffer[c+1])||(a+=b.buffer[c+1]);var f=e.getFrontValue(b.mask,b.buffer,e);-1!==f.indexOf(e.placeholder[0])&&(f="01"+e.separator);var g=1===a.length?e.regex.val2pre(e.separator).test(f+a):e.regex.val2(e.separator).test(f+a);return d||g||!(g=e.regex.val2(e.separator).test(f+"0"+a))?g:(b.buffer[c]="0",c++,{pos:c})},cardinality:1}]},y:{validator:function(a,b,c,d,e){return e.isInYearRange(a,e.yearrange.minyear,e.yearrange.maxyear)},cardinality:4,prevalidator:[{validator:function(a,b,c,d,e){var f=e.isInYearRange(a,e.yearrange.minyear,e.yearrange.maxyear);if(!d&&!f){var g=e.determinebaseyear(e.yearrange.minyear,e.yearrange.maxyear,a+"0").toString().slice(0,1);if(f=e.isInYearRange(g+a,e.yearrange.minyear,e.yearrange.maxyear))return b.buffer[c++]=g.charAt(0),{pos:c};if(g=e.determinebaseyear(e.yearrange.minyear,e.yearrange.maxyear,a+"0").toString().slice(0,2),f=e.isInYearRange(g+a,e.yearrange.minyear,e.yearrange.maxyear))return b.buffer[c++]=g.charAt(0),b.buffer[c++]=g.charAt(1),{pos:c}}return f},cardinality:1},{validator:function(a,b,c,d,e){var f=e.isInYearRange(a,e.yearrange.minyear,e.yearrange.maxyear);if(!d&&!f){var g=e.determinebaseyear(e.yearrange.minyear,e.yearrange.maxyear,a).toString().slice(0,2);if(f=e.isInYearRange(a[0]+g[1]+a[1],e.yearrange.minyear,e.yearrange.maxyear))return b.buffer[c++]=g.charAt(1),{pos:c};if(g=e.determinebaseyear(e.yearrange.minyear,e.yearrange.maxyear,a).toString().slice(0,2),f=e.isInYearRange(g+a,e.yearrange.minyear,e.yearrange.maxyear))return b.buffer[c-1]=g.charAt(0),b.buffer[c++]=g.charAt(1),b.buffer[c++]=a.charAt(0),{refreshFromBuffer:{start:c-3,end:c},pos:c}}return f},cardinality:2},{validator:function(a,b,c,d,e){return e.isInYearRange(a,e.yearrange.minyear,e.yearrange.maxyear)},cardinality:3}]}},insertMode:!1,autoUnmask:!1},"mm/dd/yyyy":{placeholder:"mm/dd/yyyy",alias:"dd/mm/yyyy",regex:{val2pre:function(a){var c=b.escapeRegex.call(this,a);return new RegExp("((0[13-9]|1[012])"+c+"[0-3])|(02"+c+"[0-2])")},val2:function(a){var c=b.escapeRegex.call(this,a);return new RegExp("((0[1-9]|1[012])"+c+"(0[1-9]|[12][0-9]))|((0[13-9]|1[012])"+c+"30)|((0[13578]|1[02])"+c+"31)")},val1pre:new RegExp("[01]"),val1:new RegExp("0[1-9]|1[012]")},leapday:"02/29/",onKeyDown:function(c,d,e,f){var g=a(this);if(c.ctrlKey&&c.keyCode===b.keyCode.RIGHT){var h=new Date;g.val((h.getMonth()+1).toString()+h.getDate().toString()+h.getFullYear().toString()),g.trigger("setvalue")}}},"yyyy/mm/dd":{mask:"y/1/2",placeholder:"yyyy/mm/dd",alias:"mm/dd/yyyy",leapday:"/02/29",onKeyDown:function(c,d,e,f){var g=a(this);if(c.ctrlKey&&c.keyCode===b.keyCode.RIGHT){var h=new Date;g.val(h.getFullYear().toString()+(h.getMonth()+1).toString()+h.getDate().toString()),g.trigger("setvalue")}}},"dd.mm.yyyy":{mask:"1.2.y",placeholder:"dd.mm.yyyy",leapday:"29.02.",separator:".",alias:"dd/mm/yyyy"},"dd-mm-yyyy":{mask:"1-2-y",placeholder:"dd-mm-yyyy",leapday:"29-02-",separator:"-",alias:"dd/mm/yyyy"},"mm.dd.yyyy":{mask:"1.2.y",placeholder:"mm.dd.yyyy",leapday:"02.29.",separator:".",alias:"mm/dd/yyyy"},"mm-dd-yyyy":{mask:"1-2-y",placeholder:"mm-dd-yyyy",leapday:"02-29-",separator:"-",alias:"mm/dd/yyyy"},"yyyy.mm.dd":{mask:"y.1.2",placeholder:"yyyy.mm.dd",leapday:".02.29",separator:".",alias:"yyyy/mm/dd"},"yyyy-mm-dd":{mask:"y-1-2",placeholder:"yyyy-mm-dd",leapday:"-02-29",separator:"-",alias:"yyyy/mm/dd"},datetime:{mask:"1/2/y h:s",placeholder:"dd/mm/yyyy hh:mm",alias:"dd/mm/yyyy",regex:{hrspre:new RegExp("[012]"),hrs24:new RegExp("2[0-4]|1[3-9]"),hrs:new RegExp("[01][0-9]|2[0-4]"),ampm:new RegExp("^[a|p|A|P][m|M]"),mspre:new RegExp("[0-5]"),ms:new RegExp("[0-5][0-9]")},timeseparator:":",hourFormat:"24",definitions:{h:{validator:function(a,b,c,d,e){if("24"===e.hourFormat&&24===parseInt(a,10))return b.buffer[c-1]="0",b.buffer[c]="0",{refreshFromBuffer:{start:c-1,end:c},c:"0"};var f=e.regex.hrs.test(a);if(!d&&!f&&(a.charAt(1)===e.timeseparator||-1!=="-.:".indexOf(a.charAt(1)))&&(f=e.regex.hrs.test("0"+a.charAt(0))))return b.buffer[c-1]="0",b.buffer[c]=a.charAt(0),c++,{refreshFromBuffer:{start:c-2,end:c},pos:c,c:e.timeseparator};if(f&&"24"!==e.hourFormat&&e.regex.hrs24.test(a)){var g=parseInt(a,10);return 24===g?(b.buffer[c+5]="a",b.buffer[c+6]="m"):(b.buffer[c+5]="p",b.buffer[c+6]="m"),g-=12,g<10?(b.buffer[c]=g.toString(),b.buffer[c-1]="0"):(b.buffer[c]=g.toString().charAt(1),b.buffer[c-1]=g.toString().charAt(0)),{refreshFromBuffer:{start:c-1,end:c+6},c:b.buffer[c]}}return f},cardinality:2,prevalidator:[{validator:function(a,b,c,d,e){var f=e.regex.hrspre.test(a);return d||f||!(f=e.regex.hrs.test("0"+a))?f:(b.buffer[c]="0",c++,{pos:c})},cardinality:1}]},s:{validator:"[0-5][0-9]",cardinality:2,prevalidator:[{validator:function(a,b,c,d,e){var f=e.regex.mspre.test(a);return d||f||!(f=e.regex.ms.test("0"+a))?f:(b.buffer[c]="0",c++,{pos:c})},cardinality:1}]},t:{validator:function(a,b,c,d,e){return e.regex.ampm.test(a+"m")},casing:"lower",cardinality:1}},insertMode:!1,autoUnmask:!1},datetime12:{mask:"1/2/y h:s t\\m",placeholder:"dd/mm/yyyy hh:mm xm",alias:"datetime",hourFormat:"12"},"mm/dd/yyyy hh:mm xm":{mask:"1/2/y h:s t\\m",placeholder:"mm/dd/yyyy hh:mm xm",alias:"datetime12",regex:{val2pre:function(a){var c=b.escapeRegex.call(this,a);return new RegExp("((0[13-9]|1[012])"+c+"[0-3])|(02"+c+"[0-2])")},val2:function(a){var c=b.escapeRegex.call(this,a);return new RegExp("((0[1-9]|1[012])"+c+"(0[1-9]|[12][0-9]))|((0[13-9]|1[012])"+c+"30)|((0[13578]|1[02])"+c+"31)")},val1pre:new RegExp("[01]"),val1:new RegExp("0[1-9]|1[012]")},leapday:"02/29/",onKeyDown:function(c,d,e,f){var g=a(this);if(c.ctrlKey&&c.keyCode===b.keyCode.RIGHT){var h=new Date;g.val((h.getMonth()+1).toString()+h.getDate().toString()+h.getFullYear().toString()),g.trigger("setvalue")}}},"hh:mm t":{mask:"h:s t\\m",placeholder:"hh:mm xm",alias:"datetime",hourFormat:"12"},"h:s t":{mask:"h:s t\\m",placeholder:"hh:mm xm",alias:"datetime",hourFormat:"12"},"hh:mm:ss":{mask:"h:s:s",placeholder:"hh:mm:ss",alias:"datetime",autoUnmask:!1},"hh:mm":{mask:"h:s",placeholder:"hh:mm",alias:"datetime",autoUnmask:!1},date:{alias:"dd/mm/yyyy"},"mm/yyyy":{mask:"1/y",placeholder:"mm/yyyy",leapday:"donotuse",separator:"/",alias:"mm/dd/yyyy"},shamsi:{regex:{val2pre:function(a){var c=b.escapeRegex.call(this,a);return new RegExp("((0[1-9]|1[012])"+c+"[0-3])")},val2:function(a){var c=b.escapeRegex.call(this,a);return new RegExp("((0[1-9]|1[012])"+c+"(0[1-9]|[12][0-9]))|((0[1-9]|1[012])"+c+"30)|((0[1-6])"+c+"31)")},val1pre:new RegExp("[01]"),val1:new RegExp("0[1-9]|1[012]")},yearrange:{minyear:1300,maxyear:1499},mask:"y/1/2",leapday:"/12/30",placeholder:"yyyy/mm/dd",alias:"mm/dd/yyyy",clearIncomplete:!0},"yyyy-mm-dd hh:mm:ss":{mask:"y-1-2 h:s:s",placeholder:"yyyy-mm-dd hh:mm:ss",alias:"datetime",separator:"-",leapday:"-02-29",regex:{val2pre:function(a){var c=b.escapeRegex.call(this,a);return new RegExp("((0[13-9]|1[012])"+c+"[0-3])|(02"+c+"[0-2])")},val2:function(a){var c=b.escapeRegex.call(this,a);return new RegExp("((0[1-9]|1[012])"+c+"(0[1-9]|[12][0-9]))|((0[13-9]|1[012])"+c+"30)|((0[13578]|1[02])"+c+"31)")},val1pre:new RegExp("[01]"),val1:new RegExp("0[1-9]|1[012]")},onKeyDown:function(a,b,c,d){}}}),b})},function(a,b,c){"use strict";var d,e,f;"function"==typeof Symbol&&Symbol.iterator;!function(g){e=[c(0),c(1)],d=g,void 0!==(f="function"==typeof d?d.apply(b,e):d)&&(a.exports=f)}(function(a,b){return b.extendDefinitions({A:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",cardinality:1,casing:"upper"},"&":{validator:"[0-9A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",cardinality:1,casing:"upper"},"#":{validator:"[0-9A-Fa-f]",cardinality:1,casing:"upper"}}),b.extendAliases({url:{definitions:{i:{validator:".",cardinality:1}},mask:"(\\http://)|(\\http\\s://)|(ftp://)|(ftp\\s://)i{+}",insertMode:!1,autoUnmask:!1,inputmode:"url"},ip:{mask:"i[i[i]].i[i[i]].i[i[i]].i[i[i]]",definitions:{i:{validator:function(a,b,c,d,e){return c-1>-1&&"."!==b.buffer[c-1]?(a=b.buffer[c-1]+a,a=c-2>-1&&"."!==b.buffer[c-2]?b.buffer[c-2]+a:"0"+a):a="00"+a,new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]").test(a)},cardinality:1}},onUnMask:function(a,b,c){return a},inputmode:"numeric"},email:{mask:"*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",greedy:!1,onBeforePaste:function(a,b){return a=a.toLowerCase(),a.replace("mailto:","")},definitions:{"*":{validator:"[0-9A-Za-z!#$%&'*+/=?^_`{|}~-]",cardinality:1,casing:"lower"},"-":{validator:"[0-9A-Za-z-]",cardinality:1,casing:"lower"}},onUnMask:function(a,b,c){return a},inputmode:"email"},mac:{mask:"##:##:##:##:##:##"},vin:{mask:"V{13}9{4}",definitions:{V:{validator:"[A-HJ-NPR-Za-hj-npr-z\\d]",cardinality:1,casing:"upper"}},clearIncomplete:!0,autoUnmask:!0}}),b})},function(a,b,c){"use strict";var d,e,f;"function"==typeof Symbol&&Symbol.iterator;!function(g){e=[c(0),c(1)],d=g,
void 0!==(f="function"==typeof d?d.apply(b,e):d)&&(a.exports=f)}(function(a,b,c){function d(a,c){for(var d="",e=0;e<a.length;e++)b.prototype.definitions[a.charAt(e)]||c.definitions[a.charAt(e)]||c.optionalmarker.start===a.charAt(e)||c.optionalmarker.end===a.charAt(e)||c.quantifiermarker.start===a.charAt(e)||c.quantifiermarker.end===a.charAt(e)||c.groupmarker.start===a.charAt(e)||c.groupmarker.end===a.charAt(e)||c.alternatormarker===a.charAt(e)?d+="\\"+a.charAt(e):d+=a.charAt(e);return d}return b.extendAliases({numeric:{mask:function(a){if(0!==a.repeat&&isNaN(a.integerDigits)&&(a.integerDigits=a.repeat),a.repeat=0,a.groupSeparator===a.radixPoint&&("."===a.radixPoint?a.groupSeparator=",":","===a.radixPoint?a.groupSeparator=".":a.groupSeparator="")," "===a.groupSeparator&&(a.skipOptionalPartCharacter=c),a.autoGroup=a.autoGroup&&""!==a.groupSeparator,a.autoGroup&&("string"==typeof a.groupSize&&isFinite(a.groupSize)&&(a.groupSize=parseInt(a.groupSize)),isFinite(a.integerDigits))){var b=Math.floor(a.integerDigits/a.groupSize),e=a.integerDigits%a.groupSize;a.integerDigits=parseInt(a.integerDigits)+(0===e?b-1:b),a.integerDigits<1&&(a.integerDigits="*")}a.placeholder.length>1&&(a.placeholder=a.placeholder.charAt(0)),"radixFocus"===a.positionCaretOnClick&&""===a.placeholder&&!1===a.integerOptional&&(a.positionCaretOnClick="lvp"),a.definitions[";"]=a.definitions["~"],a.definitions[";"].definitionSymbol="~",!0===a.numericInput&&(a.positionCaretOnClick="radixFocus"===a.positionCaretOnClick?"lvp":a.positionCaretOnClick,a.digitsOptional=!1,isNaN(a.digits)&&(a.digits=2),a.decimalProtect=!1);var f="[+]";if(f+=d(a.prefix,a),!0===a.integerOptional?f+="~{1,"+a.integerDigits+"}":f+="~{"+a.integerDigits+"}",a.digits!==c){a.radixPointDefinitionSymbol=a.decimalProtect?":":a.radixPoint;var g=a.digits.toString().split(",");isFinite(g[0]&&g[1]&&isFinite(g[1]))?f+=a.radixPointDefinitionSymbol+";{"+a.digits+"}":(isNaN(a.digits)||parseInt(a.digits)>0)&&(a.digitsOptional?f+="["+a.radixPointDefinitionSymbol+";{1,"+a.digits+"}]":f+=a.radixPointDefinitionSymbol+";{"+a.digits+"}")}return f+=d(a.suffix,a),f+="[-]",a.greedy=!1,f},placeholder:"",greedy:!1,digits:"*",digitsOptional:!0,enforceDigitsOnBlur:!1,radixPoint:".",positionCaretOnClick:"radixFocus",groupSize:3,groupSeparator:"",autoGroup:!1,allowMinus:!0,negationSymbol:{front:"-",back:""},integerDigits:"+",integerOptional:!0,prefix:"",suffix:"",rightAlign:!0,decimalProtect:!0,min:null,max:null,step:1,insertMode:!0,autoUnmask:!1,unmaskAsNumber:!1,inputmode:"numeric",preValidation:function(b,d,e,f,g){if("-"===e||e==g.negationSymbol.front)return!0===g.allowMinus&&(g.isNegative=g.isNegative===c||!g.isNegative,""===b.join("")||{caret:d,dopost:!0});if(!1===f&&e===g.radixPoint&&g.digits!==c&&(isNaN(g.digits)||parseInt(g.digits)>0)){var h=a.inArray(g.radixPoint,b);if(-1!==h)return!0===g.numericInput?d===h:{caret:h+1}}return!0},postValidation:function(d,e,f){var g=f.suffix.split(""),h=f.prefix.split("");if(e.pos==c&&e.caret!==c&&!0!==e.dopost)return e;var i=e.caret!=c?e.caret:e.pos,j=d.slice();f.numericInput&&(i=j.length-i-1,j=j.reverse());var k=j[i];if(k===f.groupSeparator&&(i+=1,k=j[i]),i==j.length-f.suffix.length-1&&k===f.radixPoint)return e;k!==c&&k!==f.radixPoint&&k!==f.negationSymbol.front&&k!==f.negationSymbol.back&&(j[i]="?",f.prefix.length>0&&i>=(!1===f.isNegative?1:0)&&i<f.prefix.length-1+(!1===f.isNegative?1:0)?h[i-(!1===f.isNegative?1:0)]="?":f.suffix.length>0&&i>=j.length-f.suffix.length-(!1===f.isNegative?1:0)&&(g[i-(j.length-f.suffix.length-(!1===f.isNegative?1:0))]="?")),h=h.join(""),g=g.join("");var l=j.join("").replace(h,"");if(l=l.replace(g,""),l=l.replace(new RegExp(b.escapeRegex(f.groupSeparator),"g"),""),l=l.replace(new RegExp("[-"+b.escapeRegex(f.negationSymbol.front)+"]","g"),""),l=l.replace(new RegExp(b.escapeRegex(f.negationSymbol.back)+"$"),""),isNaN(f.placeholder)&&(l=l.replace(new RegExp(b.escapeRegex(f.placeholder),"g"),"")),l.length>1&&1!==l.indexOf(f.radixPoint)&&("0"==k&&(l=l.replace(/^\?/g,"")),l=l.replace(/^0/g,"")),l.charAt(0)===f.radixPoint&&""!==f.radixPoint&&!0!==f.numericInput&&(l="0"+l),""!==l){if(l=l.split(""),(!f.digitsOptional||f.enforceDigitsOnBlur&&"blur"===e.event)&&isFinite(f.digits)){var m=a.inArray(f.radixPoint,l),n=a.inArray(f.radixPoint,j);-1===m&&(l.push(f.radixPoint),m=l.length-1);for(var o=1;o<=f.digits;o++)f.digitsOptional&&(!f.enforceDigitsOnBlur||"blur"!==e.event)||l[m+o]!==c&&l[m+o]!==f.placeholder.charAt(0)?-1!==n&&j[n+o]!==c&&(l[m+o]=l[m+o]||j[n+o]):l[m+o]=e.placeholder||f.placeholder.charAt(0)}if(!0!==f.autoGroup||""===f.groupSeparator||k===f.radixPoint&&e.pos===c&&!e.dopost)l=l.join("");else{var p=l[l.length-1]===f.radixPoint&&e.c===f.radixPoint;l=b(function(a,b){var c="";if(c+="("+b.groupSeparator+"*{"+b.groupSize+"}){*}",""!==b.radixPoint){var d=a.join("").split(b.radixPoint);d[1]&&(c+=b.radixPoint+"*{"+d[1].match(/^\d*\??\d*/)[0].length+"}")}return c}(l,f),{numericInput:!0,jitMasking:!0,definitions:{"*":{validator:"[0-9?]",cardinality:1}}}).format(l.join("")),p&&(l+=f.radixPoint),l.charAt(0)===f.groupSeparator&&l.substr(1)}}if(f.isNegative&&"blur"===e.event&&(f.isNegative="0"!==l),l=h+l,l+=g,f.isNegative&&(l=f.negationSymbol.front+l,l+=f.negationSymbol.back),l=l.split(""),k!==c)if(k!==f.radixPoint&&k!==f.negationSymbol.front&&k!==f.negationSymbol.back)i=a.inArray("?",l),i>-1?l[i]=k:i=e.caret||0;else if(k===f.radixPoint||k===f.negationSymbol.front||k===f.negationSymbol.back){var q=a.inArray(k,l);-1!==q&&(i=q)}f.numericInput&&(i=l.length-i-1,l=l.reverse());var r={caret:k===c||e.pos!==c?i+(f.numericInput?-1:1):i,buffer:l,refreshFromBuffer:e.dopost||d.join("")!==l.join("")};return r.refreshFromBuffer?r:e},onBeforeWrite:function(d,e,f,g){if(d)switch(d.type){case"keydown":return g.postValidation(e,{caret:f,dopost:!0},g);case"blur":case"checkval":var h;if(function(a){a.parseMinMaxOptions===c&&(null!==a.min&&(a.min=a.min.toString().replace(new RegExp(b.escapeRegex(a.groupSeparator),"g"),""),","===a.radixPoint&&(a.min=a.min.replace(a.radixPoint,".")),a.min=isFinite(a.min)?parseFloat(a.min):NaN,isNaN(a.min)&&(a.min=Number.MIN_VALUE)),null!==a.max&&(a.max=a.max.toString().replace(new RegExp(b.escapeRegex(a.groupSeparator),"g"),""),","===a.radixPoint&&(a.max=a.max.replace(a.radixPoint,".")),a.max=isFinite(a.max)?parseFloat(a.max):NaN,isNaN(a.max)&&(a.max=Number.MAX_VALUE)),a.parseMinMaxOptions="done")}(g),null!==g.min||null!==g.max){if(h=g.onUnMask(e.join(""),c,a.extend({},g,{unmaskAsNumber:!0})),null!==g.min&&h<g.min)return g.isNegative=g.min<0,g.postValidation(g.min.toString().replace(".",g.radixPoint).split(""),{caret:f,dopost:!0,placeholder:"0"},g);if(null!==g.max&&h>g.max)return g.isNegative=g.max<0,g.postValidation(g.max.toString().replace(".",g.radixPoint).split(""),{caret:f,dopost:!0,placeholder:"0"},g)}return g.postValidation(e,{caret:f,placeholder:"0",event:"blur"},g);case"_checkval":return{caret:f}}},regex:{integerPart:function(a,c){return c?new RegExp("["+b.escapeRegex(a.negationSymbol.front)+"+]?"):new RegExp("["+b.escapeRegex(a.negationSymbol.front)+"+]?\\d+")},integerNPart:function(a){return new RegExp("[\\d"+b.escapeRegex(a.groupSeparator)+b.escapeRegex(a.placeholder.charAt(0))+"]+")}},definitions:{"~":{validator:function(a,d,e,f,g,h){var i=f?new RegExp("[0-9"+b.escapeRegex(g.groupSeparator)+"]").test(a):new RegExp("[0-9]").test(a);if(!0===i){if(!0!==g.numericInput&&d.validPositions[e]!==c&&"~"===d.validPositions[e].match.def&&!h){var j=d.buffer.join("");j=j.replace(new RegExp("[-"+b.escapeRegex(g.negationSymbol.front)+"]","g"),""),j=j.replace(new RegExp(b.escapeRegex(g.negationSymbol.back)+"$"),"");var k=j.split(g.radixPoint);k.length>1&&(k[1]=k[1].replace(/0/g,g.placeholder.charAt(0))),"0"===k[0]&&(k[0]=k[0].replace(/0/g,g.placeholder.charAt(0))),j=k[0]+g.radixPoint+k[1]||"";var l=d._buffer.join("");for(j===g.radixPoint&&(j=l);null===j.match(b.escapeRegex(l)+"$");)l=l.slice(1);j=j.replace(l,""),j=j.split(""),i=j[e]===c?{pos:e,remove:e}:{pos:e}}}else f||a!==g.radixPoint||d.validPositions[e-1]!==c||(d.buffer[e]="0",i={pos:e+1});return i},cardinality:1},"+":{validator:function(a,b,c,d,e){return e.allowMinus&&("-"===a||a===e.negationSymbol.front)},cardinality:1,placeholder:""},"-":{validator:function(a,b,c,d,e){return e.allowMinus&&a===e.negationSymbol.back},cardinality:1,placeholder:""},":":{validator:function(a,c,d,e,f){var g="["+b.escapeRegex(f.radixPoint)+"]",h=new RegExp(g).test(a);return h&&c.validPositions[d]&&c.validPositions[d].match.placeholder===f.radixPoint&&(h={caret:d+1}),h},cardinality:1,placeholder:function(a){return a.radixPoint}}},onUnMask:function(a,c,d){if(""===c&&!0===d.nullable)return c;var e=a.replace(d.prefix,"");return e=e.replace(d.suffix,""),e=e.replace(new RegExp(b.escapeRegex(d.groupSeparator),"g"),""),""!==d.placeholder.charAt(0)&&(e=e.replace(new RegExp(d.placeholder.charAt(0),"g"),"0")),d.unmaskAsNumber?(""!==d.radixPoint&&-1!==e.indexOf(d.radixPoint)&&(e=e.replace(b.escapeRegex.call(this,d.radixPoint),".")),e=e.replace(new RegExp("^"+b.escapeRegex(d.negationSymbol.front)),"-"),e=e.replace(new RegExp(b.escapeRegex(d.negationSymbol.back)+"$"),""),Number(e)):e},isComplete:function(a,c){var d=a.join("");if(a.slice().join("")!==d)return!1;var e=d.replace(c.prefix,"");return e=e.replace(c.suffix,""),e=e.replace(new RegExp(b.escapeRegex(c.groupSeparator),"g"),""),","===c.radixPoint&&(e=e.replace(b.escapeRegex(c.radixPoint),".")),isFinite(e)},onBeforeMask:function(a,d){if(d.isNegative=c,a=a.toString().charAt(a.length-1)===d.radixPoint?a.toString().substr(0,a.length-1):a.toString(),""!==d.radixPoint&&isFinite(a)){var e=a.split("."),f=""!==d.groupSeparator?parseInt(d.groupSize):0;2===e.length&&(e[0].length>f||e[1].length>f||e[0].length<=f&&e[1].length<f)&&(a=a.replace(".",d.radixPoint))}var g=a.match(/,/g),h=a.match(/\./g);if(h&&g?h.length>g.length?(a=a.replace(/\./g,""),a=a.replace(",",d.radixPoint)):g.length>h.length?(a=a.replace(/,/g,""),a=a.replace(".",d.radixPoint)):a=a.indexOf(".")<a.indexOf(",")?a.replace(/\./g,""):a=a.replace(/,/g,""):a=a.replace(new RegExp(b.escapeRegex(d.groupSeparator),"g"),""),0===d.digits&&(-1!==a.indexOf(".")?a=a.substring(0,a.indexOf(".")):-1!==a.indexOf(",")&&(a=a.substring(0,a.indexOf(",")))),""!==d.radixPoint&&isFinite(d.digits)&&-1!==a.indexOf(d.radixPoint)){var i=a.split(d.radixPoint),j=i[1].match(new RegExp("\\d*"))[0];if(parseInt(d.digits)<j.toString().length){var k=Math.pow(10,parseInt(d.digits));a=a.replace(b.escapeRegex(d.radixPoint),"."),a=Math.round(parseFloat(a)*k)/k,a=a.toString().replace(".",d.radixPoint)}}return a},canClearPosition:function(a,b,c,d,e){var f=a.validPositions[b],g=f.input!==e.radixPoint||null!==a.validPositions[b].match.fn&&!1===e.decimalProtect||f.input===e.radixPoint&&a.validPositions[b+1]&&null===a.validPositions[b+1].match.fn||isFinite(f.input)||b===c||f.input===e.groupSeparator||f.input===e.negationSymbol.front||f.input===e.negationSymbol.back;return!g||"+"!=f.match.nativeDef&&"-"!=f.match.nativeDef||(e.isNegative=!1),g},onKeyDown:function(c,d,e,f){var g=a(this);if(c.ctrlKey)switch(c.keyCode){case b.keyCode.UP:g.val(parseFloat(this.inputmask.unmaskedvalue())+parseInt(f.step)),g.trigger("setvalue");break;case b.keyCode.DOWN:g.val(parseFloat(this.inputmask.unmaskedvalue())-parseInt(f.step)),g.trigger("setvalue")}}},currency:{prefix:"$ ",groupSeparator:",",alias:"numeric",placeholder:"0",autoGroup:!0,digits:2,digitsOptional:!1,clearMaskOnLostFocus:!1},decimal:{alias:"numeric"},integer:{alias:"numeric",digits:0,radixPoint:""},percentage:{alias:"numeric",digits:2,digitsOptional:!0,radixPoint:".",placeholder:"0",autoGroup:!1,min:0,max:100,suffix:" %",allowMinus:!1}}),b})},function(a,b,c){"use strict";var d,e,f;"function"==typeof Symbol&&Symbol.iterator;!function(g){e=[c(0),c(1)],d=g,void 0!==(f="function"==typeof d?d.apply(b,e):d)&&(a.exports=f)}(function(a,b){function c(a,b){var c=(a.mask||a).replace(/#/g,"9").replace(/\)/,"9").replace(/[+()#-]/g,""),d=(b.mask||b).replace(/#/g,"9").replace(/\)/,"9").replace(/[+()#-]/g,""),e=(a.mask||a).split("#")[0],f=(b.mask||b).split("#")[0];return 0===f.indexOf(e)?-1:0===e.indexOf(f)?1:c.localeCompare(d)}var d=b.prototype.analyseMask;return b.prototype.analyseMask=function(b,c,e){function f(a,c,d){c=c||"",d=d||h,""!==c&&(d[c]={});for(var e="",g=d[c]||d,i=a.length-1;i>=0;i--)b=a[i].mask||a[i],e=b.substr(0,1),g[e]=g[e]||[],g[e].unshift(b.substr(1)),a.splice(i,1);for(var j in g)g[j].length>500&&f(g[j].slice(),j,g)}function g(b){var c="",d=[];for(var f in b)a.isArray(b[f])?1===b[f].length?d.push(f+b[f]):d.push(f+e.groupmarker.start+b[f].join(e.groupmarker.end+e.alternatormarker+e.groupmarker.start)+e.groupmarker.end):d.push(f+g(b[f]));return 1===d.length?c+=d[0]:c+=e.groupmarker.start+d.join(e.groupmarker.end+e.alternatormarker+e.groupmarker.start)+e.groupmarker.end,c}var h={};return e.phoneCodes&&(e.phoneCodes&&e.phoneCodes.length>1e3&&(b=b.substr(1,b.length-2),f(b.split(e.groupmarker.end+e.alternatormarker+e.groupmarker.start)),b=g(h)),b=b.replace(/9/g,"\\9")),d.call(this,b,c,e)},b.extendAliases({abstractphone:{groupmarker:{start:"<",end:">"},countrycode:"",phoneCodes:[],mask:function(a){return a.definitions={"#":b.prototype.definitions[9]},a.phoneCodes.sort(c)},keepStatic:!0,onBeforeMask:function(a,b){var c=a.replace(/^0{1,2}/,"").replace(/[\s]/g,"");return(c.indexOf(b.countrycode)>1||-1===c.indexOf(b.countrycode))&&(c="+"+b.countrycode+c),c},onUnMask:function(a,b,c){return a.replace(/[()#-]/g,"")},inputmode:"tel"}}),b})},function(a,b,c){"use strict";var d,e,f,g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a};!function(g){e=[c(2),c(1)],d=g,void 0!==(f="function"==typeof d?d.apply(b,e):d)&&(a.exports=f)}(function(a,b){return void 0===a.fn.inputmask&&(a.fn.inputmask=function(c,d){var e,f=this[0];if(void 0===d&&(d={}),"string"==typeof c)switch(c){case"unmaskedvalue":return f&&f.inputmask?f.inputmask.unmaskedvalue():a(f).val();case"remove":return this.each(function(){this.inputmask&&this.inputmask.remove()});case"getemptymask":return f&&f.inputmask?f.inputmask.getemptymask():"";case"hasMaskedValue":return!(!f||!f.inputmask)&&f.inputmask.hasMaskedValue();case"isComplete":return!f||!f.inputmask||f.inputmask.isComplete();case"getmetadata":return f&&f.inputmask?f.inputmask.getmetadata():void 0;case"setvalue":a(f).val(d),f&&void 0===f.inputmask&&a(f).triggerHandler("setvalue");break;case"option":if("string"!=typeof d)return this.each(function(){if(void 0!==this.inputmask)return this.inputmask.option(d)});if(f&&void 0!==f.inputmask)return f.inputmask.option(d);break;default:return d.alias=c,e=new b(d),this.each(function(){e.mask(this)})}else{if("object"==(void 0===c?"undefined":g(c)))return e=new b(c),void 0===c.mask&&void 0===c.alias?this.each(function(){if(void 0!==this.inputmask)return this.inputmask.option(c);e.mask(this)}):this.each(function(){e.mask(this)});if(void 0===c)return this.each(function(){e=new b(d),e.mask(this)})}}),a.fn.inputmask})},function(a,b,c){var d=c(12);"string"==typeof d&&(d=[[a.i,d,""]]);c(14)(d,{});d.locals&&(a.exports=d.locals)},function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}c(8),c(3),c(4),c(5),c(6);var e=c(1),f=d(e),g=c(0),h=d(g),i=c(2),j=d(i);h.default===j.default&&c(7),window.Inputmask=f.default},function(a,b,c){"use strict";var d;"function"==typeof Symbol&&Symbol.iterator;void 0!==(d=function(){return document}.call(b,c,b,a))&&(a.exports=d)},function(a,b,c){"use strict";var d;"function"==typeof Symbol&&Symbol.iterator;void 0!==(d=function(){return window}.call(b,c,b,a))&&(a.exports=d)},function(a,b,c){b=a.exports=c(13)(void 0),b.push([a.i,"span.im-caret {\r\n    -webkit-animation: 1s blink step-end infinite;\r\n    animation: 1s blink step-end infinite;\r\n}\r\n\r\n@keyframes blink {\r\n    from, to {\r\n        border-right-color: black;\r\n    }\r\n    50% {\r\n        border-right-color: transparent;\r\n    }\r\n}\r\n\r\n@-webkit-keyframes blink {\r\n    from, to {\r\n        border-right-color: black;\r\n    }\r\n    50% {\r\n        border-right-color: transparent;\r\n    }\r\n}\r\n\r\nspan.im-static {\r\n    color: grey;\r\n}\r\n\r\ndiv.im-colormask {\r\n    display: inline-block;\r\n    border-style: inset;\r\n    border-width: 2px;\r\n    -webkit-appearance: textfield;\r\n    -moz-appearance: textfield;\r\n    appearance: textfield;\r\n}\r\n\r\ndiv.im-colormask > input {\r\n    position: absolute;\r\n    display: inline-block;\r\n    background-color: transparent;\r\n    color: transparent;\r\n    -webkit-appearance: caret;\r\n    -moz-appearance: caret;\r\n    appearance: caret;\r\n    border-style: none;\r\n    left: 0; /*calculated*/\r\n}\r\n\r\ndiv.im-colormask > input:focus {\r\n    outline: none;\r\n}\r\n\r\ndiv.im-colormask > div {\r\n    color: black;\r\n    display: inline-block;\r\n    width: 100px; /*calculated*/\r\n}",""])},function(a,b){function c(a,b){var c=a[1]||"",e=a[3];if(!e)return c;if(b&&"function"==typeof btoa){var f=d(e),g=e.sources.map(function(a){return"/*# sourceURL="+e.sourceRoot+a+" */"});return[c].concat(g).concat([f]).join("\n")}return[c].join("\n")}function d(a){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"}a.exports=function(a){var b=[];return b.toString=function(){return this.map(function(b){var d=c(b,a);return b[2]?"@media "+b[2]+"{"+d+"}":d}).join("")},b.i=function(a,c){"string"==typeof a&&(a=[[null,a,""]]);for(var d={},e=0;e<this.length;e++){var f=this[e][0];"number"==typeof f&&(d[f]=!0)}for(e=0;e<a.length;e++){var g=a[e];"number"==typeof g[0]&&d[g[0]]||(c&&!g[2]?g[2]=c:c&&(g[2]="("+g[2]+") and ("+c+")"),b.push(g))}},b}},function(a,b,c){function d(a,b){for(var c=0;c<a.length;c++){var d=a[c],e=o[d.id];if(e){e.refs++;for(var f=0;f<e.parts.length;f++)e.parts[f](d.parts[f]);for(;f<d.parts.length;f++)e.parts.push(k(d.parts[f],b))}else{for(var g=[],f=0;f<d.parts.length;f++)g.push(k(d.parts[f],b));o[d.id]={id:d.id,refs:1,parts:g}}}}function e(a){for(var b=[],c={},d=0;d<a.length;d++){var e=a[d],f=e[0],g=e[1],h=e[2],i=e[3],j={css:g,media:h,sourceMap:i};c[f]?c[f].parts.push(j):b.push(c[f]={id:f,parts:[j]})}return b}function f(a,b){var c=q(a.insertInto);if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var d=t[t.length-1];if("top"===a.insertAt)d?d.nextSibling?c.insertBefore(b,d.nextSibling):c.appendChild(b):c.insertBefore(b,c.firstChild),t.push(b);else{if("bottom"!==a.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");c.appendChild(b)}}function g(a){a.parentNode.removeChild(a);var b=t.indexOf(a);b>=0&&t.splice(b,1)}function h(a){var b=document.createElement("style");return a.attrs.type="text/css",j(b,a.attrs),f(a,b),b}function i(a){var b=document.createElement("link");return a.attrs.type="text/css",a.attrs.rel="stylesheet",j(b,a.attrs),f(a,b),b}function j(a,b){Object.keys(b).forEach(function(c){a.setAttribute(c,b[c])})}function k(a,b){var c,d,e;if(b.singleton){var f=s++;c=r||(r=h(b)),d=l.bind(null,c,f,!1),e=l.bind(null,c,f,!0)}else a.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(c=i(b),d=n.bind(null,c,b),e=function(){g(c),c.href&&URL.revokeObjectURL(c.href)}):(c=h(b),d=m.bind(null,c),e=function(){g(c)});return d(a),function(b){if(b){if(b.css===a.css&&b.media===a.media&&b.sourceMap===a.sourceMap)return;d(a=b)}else e()}}function l(a,b,c,d){var e=c?"":d.css;if(a.styleSheet)a.styleSheet.cssText=v(b,e);else{var f=document.createTextNode(e),g=a.childNodes;g[b]&&a.removeChild(g[b]),g.length?a.insertBefore(f,g[b]):a.appendChild(f)}}function m(a,b){var c=b.css,d=b.media;if(d&&a.setAttribute("media",d),a.styleSheet)a.styleSheet.cssText=c;else{for(;a.firstChild;)a.removeChild(a.firstChild);a.appendChild(document.createTextNode(c))}}function n(a,b,c){var d=c.css,e=c.sourceMap,f=void 0===b.convertToAbsoluteUrls&&e;(b.convertToAbsoluteUrls||f)&&(d=u(d)),e&&(d+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */");var g=new Blob([d],{type:"text/css"}),h=a.href;a.href=URL.createObjectURL(g),h&&URL.revokeObjectURL(h)}var o={},p=function(a){var b;return function(){return void 0===b&&(b=a.apply(this,arguments)),b}}(function(){return window&&document&&document.all&&!window.atob}),q=function(a){var b={};return function(c){return void 0===b[c]&&(b[c]=a.call(this,c)),b[c]}}(function(a){return document.querySelector(a)}),r=null,s=0,t=[],u=c(15);a.exports=function(a,b){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");b=b||{},b.attrs="object"==typeof b.attrs?b.attrs:{},void 0===b.singleton&&(b.singleton=p()),void 0===b.insertInto&&(b.insertInto="head"),void 0===b.insertAt&&(b.insertAt="bottom");var c=e(a);return d(c,b),function(a){for(var f=[],g=0;g<c.length;g++){var h=c[g],i=o[h.id];i.refs--,f.push(i)}if(a){d(e(a),b)}for(var g=0;g<f.length;g++){var i=f[g];if(0===i.refs){for(var j=0;j<i.parts.length;j++)i.parts[j]();delete o[i.id]}}}};var v=function(){var a=[];return function(b,c){return a[b]=c,a.filter(Boolean).join("\n")}}()},function(a,b){a.exports=function(a){var b="undefined"!=typeof window&&window.location;if(!b)throw new Error("fixUrls requires window.location");if(!a||"string"!=typeof a)return a;var c=b.protocol+"//"+b.host,d=c+b.pathname.replace(/\/[^\/]*$/,"/");return a.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(a,b){var e=b.trim().replace(/^"(.*)"$/,function(a,b){return b}).replace(/^'(.*)'$/,function(a,b){return b});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(e))return a;var f;return f=0===e.indexOf("//")?e:0===e.indexOf("/")?c+e:d+e.replace(/^\.\//,""),"url("+JSON.stringify(f)+")"})}}]);
(function($){
	if($.G2 == undefined){
		$.G2 = {};
	}
	
	$.G2.actions = {};
	$.G2.actions.list = {};
	
	$.G2.actions.include = function(items){
		$.each(items, function(k, item){
			$.G2.actions.list[k] = item;
		});
	};
	
	$.G2.actions.ready = function(Elem){
		if(typeof Elem == 'undefined'){
			Elem = $('body');
		}
		
		Elem.find('.G2-static').each(function(k, element){
			$.G2.actions.statics(element);
		});
		
		Elem.find('.G2-dynamic').each(function(k, element){
			$.G2.actions.dynamics(element);
		});
		
	};
	
	$.G2.actions.statics = function(element){
		var id = $(element).data('id');
		
		$(element).off('click.static');
		$(element).on('click.static', function(e){
			e.preventDefault();
			if($.G2.actions.list.hasOwnProperty(id) && $.G2.actions.list[id].hasOwnProperty('click')){
				var result = $.G2.actions.list[id].click($(element), e);
				if(result == false){
					return ret;
				}
			}
		});
		
		if($(element).data('task')){
			
			var targets = $.G2.actions.getTarget(element, $(element).data('task'));
			target_element = targets[1];
			element_task = targets[0];
			$(element).data('target', target_element);
			
			if(element_task == 'popup'){
				
				popup_element = target_element;
				
				if(popup_element == null){
					$(element).after($('<div class="ui fluid popup top left transition hidden G2-static-popup"><div class="ui active inline centered loader"></div></div>'));
					popup_element = $(element).next('.popup').first();
				}
				
				if(popup_element != null){
					$(element).popup({
						//inline: true, 
						position: (typeof popup_element.data('position') == 'undefined') ? 'top right' : popup_element.data('position'),
						popup: popup_element,
						on : 'click',
						closable: true,
						exclusive: true,
						preserve: true,
						lastResort: true,
						onHidden: function(){
							//$('body').off('click.staticpopup');
						},
						onVisible: function(){
							/*$('body').on('click.staticpopup', function(_e){
								if(_e.target !== $(element).next('.popup')[0] && !$.contains($(element).next('.popup')[0], _e.target)){
									if($(element).next('.popup').hasClass('visible')){
										$(element).popup('show');
										$(element).popup('hide');
									}
								}
							});*/
						}
					});
					/*$(element).on('click', function(){
						$(element).popup('show');
					});*/
				}
				
			}else if(element_task == 'modal'){
				
				modal_element = target_element;
				$(element).on('click', function(){
					$(element).next('.ui.modal').modal({'detachable' : false, 'inverted' : true}).modal('show');
				});
			}else if(element_task == 'scroll'){
				
				$(element).off('click').on('click', function(e){
					e.preventDefault();
					target_element = $(element).data('target');
					
					if(target_element != null){
						$.G2.scrollTo(target_element);
					}
				});
			}else if(element_task == 'hide'){
				
				$(element).off('click').on('click', function(e){
					e.preventDefault();
					target_element = $(element).data('target');
					
					target_element.removeClass('visible').addClass('hidden');
				});
			}else if(element_task == 'remove'){
				
				$(element).off('click').on('click', function(e){
					e.preventDefault();
					target_element = $(element).data('target');
					
					target_element.remove();
					$(element).trigger('g2.actions.static.remove');
				});
			}else if(element_task == 'clone'){
				
				$(element).off('click').on('click', function(e){
					e.preventDefault();
					target_element = $(element).data('target');
					
					var clone = target_element.clone();
					var counter = target_element.data('counter') ? parseInt(target_element.data('counter')) : 0;
					counter = counter + 1;
					target_element.data('counter', counter);
					
					clone.html(clone.html().replace(/\[0\]/g, '[' + counter + ']').replace(/-0/g, counter));
					target_element.after(clone);
					
					clone.trigger('contentChange.basics');
				});
			}
		}
	};
	
	$.G2.actions.getTarget = function(element, string){
		
		var task_data = string.split(':');
		var task_data1 = task_data[0].split('/');
		
		if(task_data.length > 1){
			var task_data2 = task_data[1].split('/');
		}else{
			var task_data2 = '';
		}
		
		var target_element = null;
		
		if(task_data1[1] == 'self'){
			
			target_element = $(element);
		
		}else if(task_data1[1] == 'next'){
			
			if(task_data2[0] == undefined){
				target_element = $(element).next();
			}else{
				target_element = $(element).next().find(task_data2[0]);
			}
			
		}else if(task_data1[1] == 'closest' && task_data2[0] != undefined){
			
			target_element = $(element).closest(task_data2[0]);
			
		}else if(task_data1[1] == 'child'){
			
		}else if((task_data1[1] == 'find' || task_data1[1] == undefined) && task_data2[0] != undefined){
			
			target_element = $(task_data2[0]);
			
		}else if(task_data1[1] == undefined && task_data2[0] == undefined){
			target_element = $(element).next();
		}
		
		return [task_data1[0], target_element];
	};
	
	$.G2.actions.dynamics = function(element){
		var id = $(element).data('id');
		
		var Event = 'click'; 
		if($(element).prop('tagName') == 'FORM'){
			Event = 'submit';
			$(element).data('url', $(element).attr('action'));
		}
		
		if($(element).data('url') == undefined && $(element).attr('href')){
			$(element).data('url', $(element).attr('href'));
		}
		/*
		if($(element).is('.ui.dropdown')){
			$(element).data('url', $(element).find('select').first().data('url'));
		}
		*/
		$(element).off(Event + '.dynamic');
		$(element).on(Event + '.dynamic', function(e){
			
			e.preventDefault();
			
			$.G2.actions.dynamics.run(element);
		});
	};
	
	$.G2.actions.dynamics.run = function(element){
		var id = $(element).data('id');
		
		var counter = $(element).data('counter') ? parseInt($(element).data('counter')) : 0;
		//counter = counter + 1;
		//$(element).data('counter', counter);
		
		var counterParam = $(element).attr('name') ? '&' + $(element).attr('name') + '[counter]=' + counter : '';
		counterParam = counterParam + '&_counter=' + counter;
		//update the counter for the next run
		counter = counter + 1;
		$(element).data('counter', counter);
		
		if($(element).data('once') && $(element).data('called')){
			return false;
		}
		
		//trigger element completion event
		var beforeStartValue = $(element).triggerHandler('g2.actions.dynamic.beforeStart');
		if(beforeStartValue === false || $(element).data('beforeStart') === false){
			return false;
		}
		
		if($(element).data('url')){
			var requestData = {};
			var content = false;//'application/x-www-form-urlencoded; charset=UTF-8';
			var container = '';
			var buildData = false;
			
			if($(element).data('dtask')){
				
				var targets = $.G2.actions.getTarget(element, $(element).data('dtask'));
				target_element = targets[1];
				element_task = targets[0];
				
				if(element_task == 'send'){
					
					if(target_element != null){
						buildData = true;
						container = target_element;
					}
					
				}
			}
			
			//check triggers
			if($(element).data('dynamic') && $(element).data('dynamic')['onstart']){
				$.each($(element).data('dynamic')['onstart'], function(dact, dactdata){
					if(dact == 'send'){
						buildData = true;
						$.each(dactdata, function(k, dactid){
							container = $(dactid);
						});
					}
				});
			}
			
			if(buildData){
				//add text data
				requestData = new FormData();
				$.each(container.find(':input').serializeArray(), function(key, input){
					requestData.append(input.name, input.value);
				});
				//add files data
				container.find('input[type="file"]').each(function(key, input){
					requestData.append($(input).attr('name'), $(input)[0].files[0]);
				});
			}
			
			$.ajax({
				xhr: function(){
					var xhr = new window.XMLHttpRequest();
					
					if(container && jQuery.fn.progress != undefined){
						//container.find('.progress').show();
						xhr.upload.addEventListener('progress', function(evt){
							if(evt.lengthComputable){
								var percentComplete = evt.loaded / evt.total;
								percentComplete = parseInt(percentComplete * 100);
								
								container.find('.progress').progress('set percent', percentComplete);
								
								if(percentComplete === 100){
									//container.find('.progress').hide();
								}
							}
						}, false);
					}
					return xhr;
				},
				url: $(element).data('url') + counterParam,
				type: "POST",
				data: requestData,
				processData: false,
				contentType: content,
				beforeSend: function(){
					$(element).addClass('loading');
					if(container && container.hasClass('loading') == false){
						container.append('<div class="ui active inverted dimmer"><div class="ui text loader"></div></div>');
					}
				},
				error: function(xhr, textStatus, message){
					$(element).removeClass('loading');
					if(container){
						container.children('.ui.active.dimmer').remove();
					}
					
					if(jQuery.fn.popup != undefined){
						$(element).popup({html : '<div class="ui message error small">'+textStatus+':'+message+'</div>'});
						$(element).popup('show');
					}else{
						alert(textStatus+':'+message);
					}
				},
				success: function(data, textStatus, xhr){
					$(element).removeClass('loading');
					//$(element).popup('destroy');
					
					if(container){
						container.find('.ui.dimmer').remove();
					}
					var is_json = false;
					//check response data type
					if(data.substring(0, 1) == '{' && data.slice(-1) == '}'){
						var is_json = true;
						
						var json = JSON.parse(data);
						
						if(json.hasOwnProperty('error') && json.error != 0){
							if(jQuery.fn.popup != undefined){
								$(element).popup({html : '<div class="ui message error small">'+json.error+'</div>'});
								$(element).popup('show');
							}else{
								alert(json.error);
							}
						}else{
							json.error = 0;
						}
						
						data = json;
					}
					
					var newContent = '';
					
					if($(element).data('result') && (is_json == false || (is_json == true && data.error == 0))){
						
						if(is_json == false){
							var newContent = $(data);
						}
						
						var targets = $.G2.actions.getTarget(element, $(element).data('result'));
						target_element = targets[1];
						element_task = targets[0];
						
						if(element_task == 'replace'){
							
							if(target_element != null){
								target_element.replaceWith(newContent);
							}
						}else if(element_task == 'after'){
							
							if(target_element != null){
								target_element.after(newContent);
							}
						}else if(element_task == 'before'){
							
							if(target_element != null){
								target_element.before(newContent);
							}
						}else if(element_task == 'html'){
							
							if(target_element != null){
								target_element.html(newContent);
							}
						}else if(element_task == 'text'){
							
							if(target_element != null){
								target_element.text(data);
							}
						}else if(element_task == 'append'){
							
							if(target_element != null){
								target_element.append(newContent);
							}
						}else if(element_task == 'prepend'){
							
							if(target_element != null){
								target_element.prepend(newContent);
							}
						}else if(element_task == 'remove'){
							
							if(target_element != null){
								if(target_element.prop('tagName') == 'TR'){
									target_element.remove();
								}else{
									target_element.transition({
										'animation' : 'fly right', 
										'onComplete' : function(){
											target_element.remove();
										}
									});
								}
							}
						}
						
					}
					
					//process click events for the element
					/*if($.G2.actions.list.hasOwnProperty(id) && $.G2.actions.list[id].hasOwnProperty('success')){
						$.G2.actions.list[id].success($(element), data, is_json, newContent);
					}*/
					
					//check triggers
					if($(element).data('dynamic') && $(element).data('dynamic')['oncomplete']){
						//$.each($(element).data('dynamic'), function(devent, deventdata){
							$.each($(element).data('dynamic')['oncomplete'], function(dact, dactdata){
								if(dact == 'reload'){
									$.each(dactdata, function(k, dactid){
										$(dactid).addClass('loading');
										$.ajax({
											url: $(dactid).data('url'),
											success: function(result){
												var newContent = $(result);
												$(dactid).replaceWith(newContent);
												newContent.trigger('contentChange');
											}
										});
									});
								}else if(dact == 'show'){
									$.each(dactdata, function(k, dactid){
										$(dactid).removeClass('hidden');
										$(dactid).show();
									});
								}else if(dact == 'hide'){
									$.each(dactdata, function(k, dactid){
										$(dactid).addClass('hidden');
										$(dactid).hide();
									});
								}
							});
						//});
					}
					//trigger element completion event
					$(element).trigger('g2.actions.dynamic.complete', [data, is_json, newContent]);
					//set called status
					if($(element).data('once')){
						$(element).data('called', true);
					}
					
					if(is_json == false && newContent){
						newContent.trigger('contentChange');
					}
					
				}
			});
		}
	};
	
}(jQuery));