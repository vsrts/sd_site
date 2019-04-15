/* g2.boot7565-1518552989-g2939-1518552989-tab11785-1518552989-transition13315-1518552989 */
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
 * # Semantic UI 2.2.11 - Tab
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
!function(e,t,a,n){"use strict";t=void 0!==t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.tab=function(n){var i,o=e(e.isFunction(this)?t:this),r=o.selector||"",s=(new Date).getTime(),c=[],l=arguments[0],d="string"==typeof l,u=[].slice.call(arguments,1),b=!1;return o.each(function(){var g,f,h,p,v,m,y=e.isPlainObject(n)?e.extend(!0,{},e.fn.tab.settings,n):e.extend({},e.fn.tab.settings),T=y.className,L=y.metadata,x=y.selector,A=y.error,P="."+y.namespace,C="module-"+y.namespace,F=e(this),S={},j=!0,E=0,O=this,w=F.data(C);v={initialize:function(){v.debug("Initializing tab menu item",F),v.fix.callbacks(),v.determineTabs(),v.debug("Determining tabs",y.context,f),y.auto&&v.set.auto(),v.bind.events(),y.history&&!b&&(v.initializeHistory(),b=!0),v.instantiate()},instantiate:function(){v.verbose("Storing instance of module",v),w=v,F.data(C,v)},destroy:function(){v.debug("Destroying tabs",F),F.removeData(C).off(P)},bind:{events:function(){e.isWindow(O)||(v.debug("Attaching tab activation events to element",F),F.on("click"+P,v.event.click))}},determineTabs:function(){var t;"parent"===y.context?(F.closest(x.ui).length>0?(t=F.closest(x.ui),v.verbose("Using closest UI element as parent",t)):t=F,g=t.parent(),v.verbose("Determined parent element for creating context",g)):y.context?(g=e(y.context),v.verbose("Using selector for tab context",y.context,g)):g=e("body"),y.childrenOnly?(f=g.children(x.tabs),v.debug("Searching tab context children for tabs",g,f)):(f=g.find(x.tabs),v.debug("Searching tab context for tabs",g,f))},fix:{callbacks:function(){e.isPlainObject(n)&&(n.onTabLoad||n.onTabInit)&&(n.onTabLoad&&(n.onLoad=n.onTabLoad,delete n.onTabLoad,v.error(A.legacyLoad,n.onLoad)),n.onTabInit&&(n.onFirstLoad=n.onTabInit,delete n.onTabInit,v.error(A.legacyInit,n.onFirstLoad)),y=e.extend(!0,{},e.fn.tab.settings,n))}},initializeHistory:function(){if(v.debug("Initializing page state"),void 0===e.address)return v.error(A.state),!1;if("state"==y.historyType){if(v.debug("Using HTML5 to manage state"),!1===y.path)return v.error(A.path),!1;e.address.history(!0).state(y.path)}e.address.bind("change",v.event.history.change)},event:{click:function(t){var a=e(this).data(L.tab);void 0!==a?(y.history?(v.verbose("Updating page state",t),e.address.value(a)):(v.verbose("Changing tab",t),v.changeTab(a)),t.preventDefault()):v.debug("No tab specified")},history:{change:function(t){var a=t.pathNames.join("/")||v.get.initialPath(),n=y.templates.determineTitle(a)||!1;v.performance.display(),v.debug("History change event",a,t),m=t,void 0!==a&&v.changeTab(a),n&&e.address.title(n)}}},refresh:function(){h&&(v.debug("Refreshing tab",h),v.changeTab(h))},cache:{read:function(e){return void 0!==e&&S[e]},add:function(e,t){e=e||h,v.debug("Adding cached content for",e),S[e]=t},remove:function(e){e=e||h,v.debug("Removing cached content for",e),delete S[e]}},set:{auto:function(){var t="string"==typeof y.path?y.path.replace(/\/$/,"")+"/{$tab}":"/{$tab}";v.verbose("Setting up automatic tab retrieval from server",t),e.isPlainObject(y.apiSettings)?y.apiSettings.url=t:y.apiSettings={url:t}},loading:function(e){var t=v.get.tabElement(e);t.hasClass(T.loading)||(v.verbose("Setting loading state for",t),t.addClass(T.loading).siblings(f).removeClass(T.active+" "+T.loading),t.length>0&&y.onRequest.call(t[0],e))},state:function(t){e.address.value(t)}},changeTab:function(a){var n=t.history&&t.history.pushState,i=n&&y.ignoreFirstLoad&&j,o=y.auto||e.isPlainObject(y.apiSettings),r=o&&!i?v.utilities.pathToArray(a):v.get.defaultPathArray(a);a=v.utilities.arrayToPath(r),e.each(r,function(t,n){var s,c,l,d,u=r.slice(0,t+1),b=v.utilities.arrayToPath(u),f=v.is.tab(b),x=t+1==r.length,P=v.get.tabElement(b);if(v.verbose("Looking for tab",n),f){if(v.verbose("Tab was found",n),h=b,p=v.utilities.filterArray(r,u),x?d=!0:(c=r.slice(0,t+2),l=v.utilities.arrayToPath(c),(d=!v.is.tab(l))&&v.verbose("Tab parameters found",c)),d&&o)return i?(v.debug("Ignoring remote content on first tab load",b),j=!1,v.cache.add(a,P.html()),v.activate.all(b),y.onFirstLoad.call(P[0],b,p,m),y.onLoad.call(P[0],b,p,m)):(v.activate.navigation(b),v.fetch.content(b,a)),!1;v.debug("Opened local tab",b),v.activate.all(b),v.cache.read(b)||(v.cache.add(b,!0),v.debug("First time tab loaded calling tab init"),y.onFirstLoad.call(P[0],b,p,m)),y.onLoad.call(P[0],b,p,m)}else{if(-1!=a.search("/")||""===a)return v.error(A.missingTab,F,g,b),!1;if(s=e("#"+a+', a[name="'+a+'"]'),b=s.closest("[data-tab]").data(L.tab),P=v.get.tabElement(b),s&&s.length>0&&b)return v.debug("Anchor link used, opening parent tab",P,s),P.hasClass(T.active)||setTimeout(function(){v.scrollTo(s)},0),v.activate.all(b),v.cache.read(b)||(v.cache.add(b,!0),v.debug("First time tab loaded calling tab init"),y.onFirstLoad.call(P[0],b,p,m)),y.onLoad.call(P[0],b,p,m),!1}})},scrollTo:function(t){var n=!!(t&&t.length>0)&&t.offset().top;!1!==n&&(v.debug("Forcing scroll to an in-page link in a hidden tab",n,t),e(a).scrollTop(n))},update:{content:function(t,a,n){var i=v.get.tabElement(t),o=i[0];n=void 0!==n?n:y.evaluateScripts,"string"==typeof y.cacheType&&"dom"==y.cacheType.toLowerCase()&&"string"!=typeof a?i.empty().append(e(a).clone(!0)):n?(v.debug("Updating HTML and evaluating inline scripts",t,a),i.html(a)):(v.debug("Updating HTML",t,a),o.innerHTML=a)}},fetch:{content:function(t,a){var n,i,o=v.get.tabElement(t),r={dataType:"html",encodeParameters:!1,on:"now",cache:y.alwaysRefresh,headers:{"X-Remote":!0},onSuccess:function(e){"response"==y.cacheType&&v.cache.add(a,e),v.update.content(t,e),t==h?(v.debug("Content loaded",t),v.activate.tab(t)):v.debug("Content loaded in background",t),y.onFirstLoad.call(o[0],t,p,m),y.onLoad.call(o[0],t,p,m),y.loadOnce?v.cache.add(a,!0):"string"==typeof y.cacheType&&"dom"==y.cacheType.toLowerCase()&&o.children().length>0?setTimeout(function(){var e=o.children().clone(!0);e=e.not("script"),v.cache.add(a,e)},0):v.cache.add(a,o.html())},urlData:{tab:a}},s=o.api("get request")||!1,c=s&&"pending"===s.state();a=a||t,i=v.cache.read(a),y.cache&&i?(v.activate.tab(t),v.debug("Adding cached content",a),y.loadOnce||("once"==y.evaluateScripts?v.update.content(t,i,!1):v.update.content(t,i)),y.onLoad.call(o[0],t,p,m)):c?(v.set.loading(t),v.debug("Content is already loading",a)):void 0!==e.api?(n=e.extend(!0,{},y.apiSettings,r),v.debug("Retrieving remote content",a,n),v.set.loading(t),o.api(n)):v.error(A.api)}},activate:{all:function(e){v.activate.tab(e),v.activate.navigation(e)},tab:function(e){var t=v.get.tabElement(e),a="siblings"==y.deactivate?t.siblings(f):f.not(t),n=t.hasClass(T.active);v.verbose("Showing tab content for",t),n||(t.addClass(T.active),a.removeClass(T.active+" "+T.loading),t.length>0&&y.onVisible.call(t[0],e))},navigation:function(e){var t=v.get.navElement(e),a="siblings"==y.deactivate?t.siblings(o):o.not(t),n=t.hasClass(T.active);v.verbose("Activating tab navigation for",t,e),n||(t.addClass(T.active),a.removeClass(T.active+" "+T.loading))}},deactivate:{all:function(){v.deactivate.navigation(),v.deactivate.tabs()},navigation:function(){o.removeClass(T.active)},tabs:function(){f.removeClass(T.active+" "+T.loading)}},is:{tab:function(e){return void 0!==e&&v.get.tabElement(e).length>0}},get:{initialPath:function(){return o.eq(0).data(L.tab)||f.eq(0).data(L.tab)},path:function(){return e.address.value()},defaultPathArray:function(e){return v.utilities.pathToArray(v.get.defaultPath(e))},defaultPath:function(e){var t=o.filter("[data-"+L.tab+'^="'+e+'/"]').eq(0),a=t.data(L.tab)||!1;if(a){if(v.debug("Found default tab",a),E<y.maxDepth)return E++,v.get.defaultPath(a);v.error(A.recursion)}else v.debug("No default tabs found for",e,f);return E=0,e},navElement:function(e){return e=e||h,o.filter("[data-"+L.tab+'="'+e+'"]')},tabElement:function(e){var t,a,n,i;return e=e||h,n=v.utilities.pathToArray(e),i=v.utilities.last(n),t=f.filter("[data-"+L.tab+'="'+e+'"]'),a=f.filter("[data-"+L.tab+'="'+i+'"]'),t.length>0?t:a},tab:function(){return h}},utilities:{filterArray:function(t,a){return e.grep(t,function(t){return-1==e.inArray(t,a)})},last:function(t){return!!e.isArray(t)&&t[t.length-1]},pathToArray:function(e){return void 0===e&&(e=h),"string"==typeof e?e.split("/"):[e]},arrayToPath:function(t){return!!e.isArray(t)&&t.join("/")}},setting:function(t,a){if(v.debug("Changing setting",t,a),e.isPlainObject(t))e.extend(!0,y,t);else{if(void 0===a)return y[t];e.isPlainObject(y[t])?e.extend(!0,y[t],a):y[t]=a}},internal:function(t,a){if(e.isPlainObject(t))e.extend(!0,v,t);else{if(void 0===a)return v[t];v[t]=a}},debug:function(){!y.silent&&y.debug&&(y.performance?v.performance.log(arguments):(v.debug=Function.prototype.bind.call(console.info,console,y.name+":"),v.debug.apply(console,arguments)))},verbose:function(){!y.silent&&y.verbose&&y.debug&&(y.performance?v.performance.log(arguments):(v.verbose=Function.prototype.bind.call(console.info,console,y.name+":"),v.verbose.apply(console,arguments)))},error:function(){y.silent||(v.error=Function.prototype.bind.call(console.error,console,y.name+":"),v.error.apply(console,arguments))},performance:{log:function(e){var t,a,n;y.performance&&(t=(new Date).getTime(),n=s||t,a=t-n,s=t,c.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:O,"Execution Time":a})),clearTimeout(v.performance.timer),v.performance.timer=setTimeout(v.performance.display,500)},display:function(){var t=y.name+":",a=0;s=!1,clearTimeout(v.performance.timer),e.each(c,function(e,t){a+=t["Execution Time"]}),t+=" "+a+"ms",r&&(t+=" '"+r+"'"),(void 0!==console.group||void 0!==console.table)&&c.length>0&&(console.groupCollapsed(t),console.table?console.table(c):e.each(c,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),c=[]}},invoke:function(t,a,n){var o,r,s,c=w;return a=a||u,n=O||n,"string"==typeof t&&void 0!==c&&(t=t.split(/[\. ]/),o=t.length-1,e.each(t,function(a,n){var i=a!=o?n+t[a+1].charAt(0).toUpperCase()+t[a+1].slice(1):t;if(e.isPlainObject(c[i])&&a!=o)c=c[i];else{if(void 0!==c[i])return r=c[i],!1;if(!e.isPlainObject(c[n])||a==o)return void 0!==c[n]?(r=c[n],!1):(v.error(A.method,t),!1);c=c[n]}})),e.isFunction(r)?s=r.apply(n,a):void 0!==r&&(s=r),e.isArray(i)?i.push(s):void 0!==i?i=[i,s]:void 0!==s&&(i=s),r}},d?(void 0===w&&v.initialize(),v.invoke(l)):(void 0!==w&&w.invoke("destroy"),v.initialize())}),void 0!==i?i:this},e.tab=function(){e(t).tab.apply(this,arguments)},e.fn.tab.settings={name:"Tab",namespace:"tab",silent:!1,debug:!1,verbose:!1,performance:!0,auto:!1,history:!1,historyType:"hash",path:!1,context:!1,childrenOnly:!1,maxDepth:25,deactivate:"siblings",alwaysRefresh:!1,cache:!0,loadOnce:!1,cacheType:"response",ignoreFirstLoad:!1,apiSettings:!1,evaluateScripts:"once",onFirstLoad:function(e,t,a){},onLoad:function(e,t,a){},onVisible:function(e,t,a){},onRequest:function(e,t,a){},templates:{determineTitle:function(e){}},error:{api:"You attempted to load content without API module",method:"The method you called is not defined",missingTab:"Activated tab cannot be found. Tabs are case-sensitive.",noContent:"The tab you specified is missing a content url.",path:"History enabled, but no path was specified",recursion:"Max recursive depth reached",legacyInit:"onTabInit has been renamed to onFirstLoad in 2.0, please adjust your code.",legacyLoad:"onTabLoad has been renamed to onLoad in 2.0. Please adjust your code",state:"History requires Asual's Address library <https://github.com/asual/jquery-address>"},metadata:{tab:"tab",loaded:"loaded",promise:"promise"},className:{loading:"loading",active:"active"},selector:{tabs:".ui.tab",ui:".ui"}}}(jQuery,window,document);
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