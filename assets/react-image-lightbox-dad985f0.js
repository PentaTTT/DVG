import{a as c,r as Se}from"./react-1c7c5f57.js";import{P as h}from"./prop-types-17c45f42.js";import{M as we}from"./react-modal-28e3761b.js";function se(i,s){var a=Object.keys(i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(i);s&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable})),a.push.apply(a,n)}return a}function v(i){for(var s=1;s<arguments.length;s++){var a=arguments[s]!=null?arguments[s]:{};s%2?se(Object(a),!0).forEach(function(n){ie(i,n,a[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(a)):se(Object(a)).forEach(function(n){Object.defineProperty(i,n,Object.getOwnPropertyDescriptor(a,n))})}return i}function ke(i,s){if(!(i instanceof s))throw new TypeError("Cannot call a class as a function")}function le(i,s){for(var a=0;a<s.length;a++){var n=s[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,n.key,n)}}function Me(i,s,a){return s&&le(i.prototype,s),a&&le(i,a),i}function ie(i,s,a){return s in i?Object.defineProperty(i,s,{value:a,enumerable:!0,configurable:!0,writable:!0}):i[s]=a,i}function H(){return H=Object.assign||function(i){for(var s=1;s<arguments.length;s++){var a=arguments[s];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(i[n]=a[n])}return i},H.apply(this,arguments)}function Ee(i,s){if(typeof s!="function"&&s!==null)throw new TypeError("Super expression must either be null or a function");i.prototype=Object.create(s&&s.prototype,{constructor:{value:i,writable:!0,configurable:!0}}),s&&re(i,s)}function j(i){return j=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},j(i)}function re(i,s){return re=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n},re(i,s)}function Ie(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function m(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function Ce(i,s){return s&&(typeof s=="object"||typeof s=="function")?s:m(i)}function Oe(i){var s=Ie();return function(){var n=j(i),e;if(s){var t=j(this).constructor;e=Reflect.construct(n,arguments,t)}else e=n.apply(this,arguments);return Ce(this,e)}}function ue(i,s){return xe(i)||Le(i,s)||de(i,s)||Re()}function J(i){return Te(i)||Pe(i)||de(i)||De()}function Te(i){if(Array.isArray(i))return oe(i)}function xe(i){if(Array.isArray(i))return i}function Pe(i){if(typeof Symbol<"u"&&i[Symbol.iterator]!=null||i["@@iterator"]!=null)return Array.from(i)}function Le(i,s){var a=i==null?null:typeof Symbol<"u"&&i[Symbol.iterator]||i["@@iterator"];if(a!=null){var n=[],e=!0,t=!1,r,o;try{for(a=a.call(i);!(e=(r=a.next()).done)&&(n.push(r.value),!(s&&n.length===s));e=!0);}catch(l){t=!0,o=l}finally{try{!e&&a.return!=null&&a.return()}finally{if(t)throw o}}return n}}function de(i,s){if(i){if(typeof i=="string")return oe(i,s);var a=Object.prototype.toString.call(i).slice(8,-1);if(a==="Object"&&i.constructor&&(a=i.constructor.name),a==="Map"||a==="Set")return Array.from(i);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return oe(i,s)}}function oe(i,s){(s==null||s>i.length)&&(s=i.length);for(var a=0,n=new Array(s);a<s;a++)n[a]=i[a];return n}function De(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Re(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function he(i){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!i)return"";var a=i;return s&&Object.keys(s).forEach(function(n){a=a.replace(n,s[n])}),a}function ce(){return typeof global.window<"u"?global.window.innerWidth:0}function Ae(){return typeof global.window<"u"?global.window.innerHeight:0}var Xe=function(){try{return global.window.location.hostname!==global.window.parent.location.hostname}catch{return!0}};function me(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:global.window.self;return i===global.window.top||Xe()?i:me(i.parent)}var g=0,A=300,Ye=1.007,Q=100,ze=200,Ne=1,q={ESC:27,LEFT_ARROW:37,RIGHT_ARROW:39},X=0,ee=1,te=2,Z=3,ne=0,x=1,P=2,W=3,Be=200,fe=function(i){Ee(a,i);var s=Oe(a);function a(n){var e;return ke(this,a),e=s.call(this,n),e.state={isClosing:!n.animationDisabled,shouldAnimate:!1,zoomLevel:g,offsetX:0,offsetY:0,loadErrorStatus:{}},e.outerEl=c.createRef(),e.zoomInBtn=c.createRef(),e.zoomOutBtn=c.createRef(),e.caption=c.createRef(),e.closeIfClickInner=e.closeIfClickInner.bind(m(e)),e.handleImageDoubleClick=e.handleImageDoubleClick.bind(m(e)),e.handleImageMouseWheel=e.handleImageMouseWheel.bind(m(e)),e.handleKeyInput=e.handleKeyInput.bind(m(e)),e.handleMouseUp=e.handleMouseUp.bind(m(e)),e.handleMouseDown=e.handleMouseDown.bind(m(e)),e.handleMouseMove=e.handleMouseMove.bind(m(e)),e.handleOuterMousewheel=e.handleOuterMousewheel.bind(m(e)),e.handleTouchStart=e.handleTouchStart.bind(m(e)),e.handleTouchMove=e.handleTouchMove.bind(m(e)),e.handleTouchEnd=e.handleTouchEnd.bind(m(e)),e.handlePointerEvent=e.handlePointerEvent.bind(m(e)),e.handleCaptionMousewheel=e.handleCaptionMousewheel.bind(m(e)),e.handleWindowResize=e.handleWindowResize.bind(m(e)),e.handleZoomInButtonClick=e.handleZoomInButtonClick.bind(m(e)),e.handleZoomOutButtonClick=e.handleZoomOutButtonClick.bind(m(e)),e.requestClose=e.requestClose.bind(m(e)),e.requestMoveNext=e.requestMoveNext.bind(m(e)),e.requestMovePrev=e.requestMovePrev.bind(m(e)),e.timeouts=[],e.currentAction=X,e.eventsSource=ne,e.pointerList=[],e.preventInnerClose=!1,e.preventInnerCloseTimeout=null,e.keyPressed=!1,e.imageCache={},e.lastKeyDownTime=0,e.resizeTimeout=null,e.wheelActionTimeout=null,e.resetScrollTimeout=null,e.scrollX=0,e.scrollY=0,e.moveStartX=0,e.moveStartY=0,e.moveStartOffsetX=0,e.moveStartOffsetY=0,e.swipeStartX=0,e.swipeStartY=0,e.swipeEndX=0,e.swipeEndY=0,e.pinchTouchList=null,e.pinchDistance=0,e.keyCounter=0,e.moveRequested=!1,e}return Me(a,[{key:"componentDidMount",value:function(){var e=this;this.props.animationDisabled||this.setState({isClosing:!1}),this.windowContext=me(),this.listeners={resize:this.handleWindowResize,mouseup:this.handleMouseUp,touchend:this.handleTouchEnd,touchcancel:this.handleTouchEnd,pointerdown:this.handlePointerEvent,pointermove:this.handlePointerEvent,pointerup:this.handlePointerEvent,pointercancel:this.handlePointerEvent},Object.keys(this.listeners).forEach(function(t){e.windowContext.addEventListener(t,e.listeners[t])}),this.loadAllImages()}},{key:"shouldComponentUpdate",value:function(e){var t=this;return this.getSrcTypes().forEach(function(r){t.props[r.name]!==e[r.name]&&(t.moveRequested=!1)}),!this.moveRequested}},{key:"componentDidUpdate",value:function(e){var t=this,r=!1,o={},l={};this.getSrcTypes().forEach(function(u){e[u.name]!==t.props[u.name]&&(r=!0,o[e[u.name]]=!0,l[t.props[u.name]]=!0)}),(r||this.moveRequested)&&(Object.keys(o).forEach(function(u){!(u in l)&&u in t.imageCache&&(t.imageCache[u].loaded=!1)}),this.moveRequested=!1,this.loadAllImages(this.props))}},{key:"componentWillUnmount",value:function(){var e=this;this.didUnmount=!0,Object.keys(this.listeners).forEach(function(t){e.windowContext.removeEventListener(t,e.listeners[t])}),this.timeouts.forEach(function(t){return clearTimeout(t)})}},{key:"setTimeout",value:function(n){function e(t,r){return n.apply(this,arguments)}return e.toString=function(){return n.toString()},e}(function(n,e){var t=this,r=setTimeout(function(){t.timeouts=t.timeouts.filter(function(o){return o!==r}),n()},e);return this.timeouts.push(r),r})},{key:"setPreventInnerClose",value:function(){var e=this;this.preventInnerCloseTimeout&&this.clearTimeout(this.preventInnerCloseTimeout),this.preventInnerClose=!0,this.preventInnerCloseTimeout=this.setTimeout(function(){e.preventInnerClose=!1,e.preventInnerCloseTimeout=null},100)}},{key:"getBestImageForType",value:function(e){var t=this.props[e],r={};if(this.isImageLoaded(t))r=this.getFitSizes(this.imageCache[t].width,this.imageCache[t].height);else if(this.isImageLoaded(this.props["".concat(e,"Thumbnail")]))t=this.props["".concat(e,"Thumbnail")],r=this.getFitSizes(this.imageCache[t].width,this.imageCache[t].height,!0);else return null;return{src:t,height:this.imageCache[t].height,width:this.imageCache[t].width,targetHeight:r.height,targetWidth:r.width}}},{key:"getFitSizes",value:function(e,t,r){var o=this.getLightboxRect(),l=o.height-this.props.imagePadding*2,u=o.width-this.props.imagePadding*2;r||(l=Math.min(l,t),u=Math.min(u,e));var f=u/l,d=e/t;return f>d?{width:e*l/t,height:l}:{width:u,height:t*u/e}}},{key:"getMaxOffsets",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.state.zoomLevel,t=this.getBestImageForType("mainSrc");if(t===null)return{maxX:0,minX:0,maxY:0,minY:0};var r=this.getLightboxRect(),o=this.getZoomMultiplier(e),l=0;o*t.width-r.width<0?l=(r.width-o*t.width)/2:l=(o*t.width-r.width)/2;var u=0;return o*t.height-r.height<0?u=(r.height-o*t.height)/2:u=(o*t.height-r.height)/2,{maxX:l,maxY:u,minX:-1*l,minY:-1*u}}},{key:"getSrcTypes",value:function(){return[{name:"mainSrc",keyEnding:"i".concat(this.keyCounter)},{name:"mainSrcThumbnail",keyEnding:"t".concat(this.keyCounter)},{name:"nextSrc",keyEnding:"i".concat(this.keyCounter+1)},{name:"nextSrcThumbnail",keyEnding:"t".concat(this.keyCounter+1)},{name:"prevSrc",keyEnding:"i".concat(this.keyCounter-1)},{name:"prevSrcThumbnail",keyEnding:"t".concat(this.keyCounter-1)}]}},{key:"getZoomMultiplier",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.state.zoomLevel;return Math.pow(Ye,e)}},{key:"getLightboxRect",value:function(){return this.outerEl.current?this.outerEl.current.getBoundingClientRect():{width:ce(),height:Ae(),top:0,right:0,bottom:0,left:0}}},{key:"clearTimeout",value:function(n){function e(t){return n.apply(this,arguments)}return e.toString=function(){return n.toString()},e}(function(n){this.timeouts=this.timeouts.filter(function(e){return e!==n}),clearTimeout(n)})},{key:"changeZoom",value:function(e,t,r){if(this.props.enableZoom){var o=Math.max(g,Math.min(A,e));if(o!==this.state.zoomLevel){if(o===g){this.setState({zoomLevel:o,offsetX:0,offsetY:0});return}var l=this.getBestImageForType("mainSrc");if(l!==null){var u=this.getZoomMultiplier(),f=this.getZoomMultiplier(o),d=this.getLightboxRect(),E=typeof t<"u"?t-d.left:d.width/2,y=typeof r<"u"?r-d.top:d.height/2,_=(d.width-l.width*u)/2,S=(d.height-l.height*u)/2,U=_-this.state.offsetX,Y=S-this.state.offsetY,K=(E-U)/u,z=(y-Y)/u,w=E-K*f,b=y-z*f,F=(d.width-l.width*f)/2,$=(d.height-l.height*f)/2,I=F-w,L=$-b;if(this.currentAction!==Z){var k=this.getMaxOffsets();this.state.zoomLevel>o&&(I=Math.max(k.minX,Math.min(k.maxX,I)),L=Math.max(k.minY,Math.min(k.maxY,L)))}this.setState({zoomLevel:o,offsetX:I,offsetY:L})}}}}},{key:"closeIfClickInner",value:function(e){!this.preventInnerClose&&e.target.className.search(/\bril-inner\b/)>-1&&this.requestClose(e)}},{key:"handleKeyInput",value:function(e){if(e.stopPropagation(),!this.isAnimating()){if(e.type==="keyup"){this.lastKeyDownTime-=this.props.keyRepeatKeyupBonus;return}var t=e.which||e.keyCode,r=new Date;if(!(r.getTime()-this.lastKeyDownTime<this.props.keyRepeatLimit&&t!==q.ESC))switch(this.lastKeyDownTime=r.getTime(),t){case q.ESC:e.preventDefault(),this.requestClose(e);break;case q.LEFT_ARROW:if(!this.props.prevSrc)return;e.preventDefault(),this.keyPressed=!0,this.requestMovePrev(e);break;case q.RIGHT_ARROW:if(!this.props.nextSrc)return;e.preventDefault(),this.keyPressed=!0,this.requestMoveNext(e);break}}}},{key:"handleOuterMousewheel",value:function(e){var t=this;e.stopPropagation();var r=ze,o=0,l=500;if(this.clearTimeout(this.resetScrollTimeout),this.resetScrollTimeout=this.setTimeout(function(){t.scrollX=0,t.scrollY=0},300),!(this.wheelActionTimeout!==null||this.isAnimating())){if(Math.abs(e.deltaY)<Math.abs(e.deltaX)){this.scrollY=0,this.scrollX+=e.deltaX;var u=r/2;this.scrollX>=r||e.deltaX>=u?(this.requestMoveNext(e),o=l,this.scrollX=0):(this.scrollX<=-1*r||e.deltaX<=-1*u)&&(this.requestMovePrev(e),o=l,this.scrollX=0)}o!==0&&(this.wheelActionTimeout=this.setTimeout(function(){t.wheelActionTimeout=null},o))}}},{key:"handleImageMouseWheel",value:function(e){var t=Ne;if(Math.abs(e.deltaY)>=Math.abs(e.deltaX)){if(e.stopPropagation(),Math.abs(e.deltaY)<t)return;this.scrollX=0,this.scrollY+=e.deltaY,this.changeZoom(this.state.zoomLevel-e.deltaY,e.clientX,e.clientY)}}},{key:"handleImageDoubleClick",value:function(e){this.state.zoomLevel>g?this.changeZoom(g,e.clientX,e.clientY):this.changeZoom(this.state.zoomLevel+Q,e.clientX,e.clientY)}},{key:"shouldHandleEvent",value:function(e){if(this.eventsSource===e)return!0;if(this.eventsSource===ne)return this.eventsSource=e,!0;switch(e){case x:return!1;case P:return this.eventsSource=P,this.filterPointersBySource(),!0;case W:return this.eventsSource===x?(this.eventsSource=W,this.filterPointersBySource(),!0):!1;default:return!1}}},{key:"addPointer",value:function(e){this.pointerList.push(e)}},{key:"removePointer",value:function(e){this.pointerList=this.pointerList.filter(function(t){var r=t.id;return r!==e.id})}},{key:"filterPointersBySource",value:function(){var e=this;this.pointerList=this.pointerList.filter(function(t){var r=t.source;return r===e.eventsSource})}},{key:"handleMouseDown",value:function(e){this.shouldHandleEvent(x)&&a.isTargetMatchImage(e.target)&&(this.addPointer(a.parseMouseEvent(e)),this.multiPointerStart(e))}},{key:"handleMouseMove",value:function(e){this.shouldHandleEvent(x)&&this.multiPointerMove(e,[a.parseMouseEvent(e)])}},{key:"handleMouseUp",value:function(e){this.shouldHandleEvent(x)&&(this.removePointer(a.parseMouseEvent(e)),this.multiPointerEnd(e))}},{key:"handlePointerEvent",value:function(e){if(this.shouldHandleEvent(W))switch(e.type){case"pointerdown":a.isTargetMatchImage(e.target)&&(this.addPointer(a.parsePointerEvent(e)),this.multiPointerStart(e));break;case"pointermove":this.multiPointerMove(e,[a.parsePointerEvent(e)]);break;case"pointerup":case"pointercancel":this.removePointer(a.parsePointerEvent(e)),this.multiPointerEnd(e);break}}},{key:"handleTouchStart",value:function(e){var t=this;this.shouldHandleEvent(P)&&a.isTargetMatchImage(e.target)&&([].forEach.call(e.changedTouches,function(r){return t.addPointer(a.parseTouchPointer(r))}),this.multiPointerStart(e))}},{key:"handleTouchMove",value:function(e){this.shouldHandleEvent(P)&&this.multiPointerMove(e,[].map.call(e.changedTouches,function(t){return a.parseTouchPointer(t)}))}},{key:"handleTouchEnd",value:function(e){var t=this;this.shouldHandleEvent(P)&&([].map.call(e.changedTouches,function(r){return t.removePointer(a.parseTouchPointer(r))}),this.multiPointerEnd(e))}},{key:"decideMoveOrSwipe",value:function(e){this.state.zoomLevel<=g?this.handleSwipeStart(e):this.handleMoveStart(e)}},{key:"multiPointerStart",value:function(e){switch(this.handleEnd(null),this.pointerList.length){case 1:{e.preventDefault(),this.decideMoveOrSwipe(this.pointerList[0]);break}case 2:{e.preventDefault(),this.handlePinchStart(this.pointerList);break}}}},{key:"multiPointerMove",value:function(e,t){switch(this.currentAction){case ee:{e.preventDefault(),this.handleMove(t[0]);break}case te:{e.preventDefault(),this.handleSwipe(t[0]);break}case Z:{e.preventDefault(),this.handlePinch(t);break}}}},{key:"multiPointerEnd",value:function(e){switch(this.currentAction!==X&&(this.setPreventInnerClose(),this.handleEnd(e)),this.pointerList.length){case 0:{this.eventsSource=ne;break}case 1:{e.preventDefault(),this.decideMoveOrSwipe(this.pointerList[0]);break}case 2:{e.preventDefault(),this.handlePinchStart(this.pointerList);break}}}},{key:"handleEnd",value:function(e){switch(this.currentAction){case ee:this.handleMoveEnd(e);break;case te:this.handleSwipeEnd(e);break;case Z:this.handlePinchEnd(e);break}}},{key:"handleMoveStart",value:function(e){var t=e.x,r=e.y;this.props.enableZoom&&(this.currentAction=ee,this.moveStartX=t,this.moveStartY=r,this.moveStartOffsetX=this.state.offsetX,this.moveStartOffsetY=this.state.offsetY)}},{key:"handleMove",value:function(e){var t=e.x,r=e.y,o=this.moveStartX-t+this.moveStartOffsetX,l=this.moveStartY-r+this.moveStartOffsetY;(this.state.offsetX!==o||this.state.offsetY!==l)&&this.setState({offsetX:o,offsetY:l})}},{key:"handleMoveEnd",value:function(){var e=this;this.currentAction=X,this.moveStartX=0,this.moveStartY=0,this.moveStartOffsetX=0,this.moveStartOffsetY=0;var t=this.getMaxOffsets(),r=Math.max(t.minX,Math.min(t.maxX,this.state.offsetX)),o=Math.max(t.minY,Math.min(t.maxY,this.state.offsetY));(r!==this.state.offsetX||o!==this.state.offsetY)&&(this.setState({offsetX:r,offsetY:o,shouldAnimate:!0}),this.setTimeout(function(){e.setState({shouldAnimate:!1})},this.props.animationDuration))}},{key:"handleSwipeStart",value:function(e){var t=e.x,r=e.y;this.currentAction=te,this.swipeStartX=t,this.swipeStartY=r,this.swipeEndX=t,this.swipeEndY=r}},{key:"handleSwipe",value:function(e){var t=e.x,r=e.y;this.swipeEndX=t,this.swipeEndY=r}},{key:"handleSwipeEnd",value:function(e){var t=this.swipeEndX-this.swipeStartX,r=Math.abs(t),o=Math.abs(this.swipeEndY-this.swipeStartY);if(this.currentAction=X,this.swipeStartX=0,this.swipeStartY=0,this.swipeEndX=0,this.swipeEndY=0,!(!e||this.isAnimating()||r<o*1.5)){if(r<Be){var l=this.getLightboxRect();if(r<l.width/4)return}t>0&&this.props.prevSrc?(e.preventDefault(),this.requestMovePrev()):t<0&&this.props.nextSrc&&(e.preventDefault(),this.requestMoveNext())}}},{key:"calculatePinchDistance",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.pinchTouchList,t=ue(e,2),r=t[0],o=t[1];return Math.sqrt(Math.pow(r.x-o.x,2)+Math.pow(r.y-o.y,2))}},{key:"calculatePinchCenter",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.pinchTouchList,t=ue(e,2),r=t[0],o=t[1];return{x:r.x-(r.x-o.x)/2,y:r.y-(r.y-o.y)/2}}},{key:"handlePinchStart",value:function(e){this.props.enableZoom&&(this.currentAction=Z,this.pinchTouchList=e.map(function(t){var r=t.id,o=t.x,l=t.y;return{id:r,x:o,y:l}}),this.pinchDistance=this.calculatePinchDistance())}},{key:"handlePinch",value:function(e){this.pinchTouchList=this.pinchTouchList.map(function(f){for(var d=0;d<e.length;d+=1)if(e[d].id===f.id)return e[d];return f});var t=this.calculatePinchDistance(),r=this.state.zoomLevel+t-this.pinchDistance;this.pinchDistance=t;var o=this.calculatePinchCenter(this.pinchTouchList),l=o.x,u=o.y;this.changeZoom(r,l,u)}},{key:"handlePinchEnd",value:function(){this.currentAction=X,this.pinchTouchList=null,this.pinchDistance=0}},{key:"handleWindowResize",value:function(){this.clearTimeout(this.resizeTimeout),this.resizeTimeout=this.setTimeout(this.forceUpdate.bind(this),100)}},{key:"handleZoomInButtonClick",value:function(){var e=this.state.zoomLevel+Q;this.changeZoom(e),e===A&&this.zoomOutBtn.current.focus()}},{key:"handleZoomOutButtonClick",value:function(){var e=this.state.zoomLevel-Q;this.changeZoom(e),e===g&&this.zoomInBtn.current.focus()}},{key:"handleCaptionMousewheel",value:function(e){if(e.stopPropagation(),!!this.caption.current){var t=this.caption.current.getBoundingClientRect(),r=t.height,o=this.caption.current,l=o.scrollHeight,u=o.scrollTop;(e.deltaY>0&&r+u>=l||e.deltaY<0&&u<=0)&&e.preventDefault()}}},{key:"isAnimating",value:function(){return this.state.shouldAnimate||this.state.isClosing}},{key:"isImageLoaded",value:function(e){return e&&e in this.imageCache&&this.imageCache[e].loaded}},{key:"loadImage",value:function(e,t,r){var o=this;if(this.isImageLoaded(t)){this.setTimeout(function(){r()},1);return}var l=new global.Image;this.props.imageCrossOrigin&&(l.crossOrigin=this.props.imageCrossOrigin),l.onerror=function(u){o.props.onImageLoadError(t,e,u),o.setState(function(f){return{loadErrorStatus:v(v({},f.loadErrorStatus),{},ie({},e,!0))}}),r(u)},l.onload=function(){o.props.onImageLoad(t,e,l),o.imageCache[t]={loaded:!0,width:l.width,height:l.height},r()},l.src=t}},{key:"loadAllImages",value:function(){var e=this,t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.props,r=function(l,u){return function(f){f||e.props[l]!==u||e.didUnmount||e.forceUpdate()}};this.getSrcTypes().forEach(function(o){var l=o.name;t[l]&&e.state.loadErrorStatus[l]&&e.setState(function(u){return{loadErrorStatus:v(v({},u.loadErrorStatus),{},ie({},l,!1))}}),t[l]&&!e.isImageLoaded(t[l])&&e.loadImage(l,t[l],r(l,t[l]))})}},{key:"requestClose",value:function(e){var t=this,r=function(){return t.props.onCloseRequest(e)};if(this.props.animationDisabled||e.type==="keydown"&&!this.props.animationOnKeyInput){r();return}this.setState({isClosing:!0}),this.setTimeout(r,this.props.animationDuration)}},{key:"requestMove",value:function(e,t){var r=this,o={zoomLevel:g,offsetX:0,offsetY:0};!this.props.animationDisabled&&(!this.keyPressed||this.props.animationOnKeyInput)&&(o.shouldAnimate=!0,this.setTimeout(function(){return r.setState({shouldAnimate:!1})},this.props.animationDuration)),this.keyPressed=!1,this.moveRequested=!0,e==="prev"?(this.keyCounter-=1,this.setState(o),this.props.onMovePrevRequest(t)):(this.keyCounter+=1,this.setState(o),this.props.onMoveNextRequest(t))}},{key:"requestMoveNext",value:function(e){this.requestMove("next",e)}},{key:"requestMovePrev",value:function(e){this.requestMove("prev",e)}},{key:"render",value:function(){var e=this,t=this.props,r=t.animationDisabled,o=t.animationDuration,l=t.clickOutsideToClose,u=t.discourageDownloads,f=t.enableZoom,d=t.imageTitle,E=t.nextSrc,y=t.prevSrc,_=t.toolbarButtons,S=t.reactModalStyle,U=t.onAfterOpen,Y=t.imageCrossOrigin,K=t.reactModalProps,z=t.loader,w=this.state,b=w.zoomLevel,F=w.offsetX,$=w.offsetY,I=w.isClosing,L=w.loadErrorStatus,k=this.getLightboxRect(),V={};!r&&this.isAnimating()&&(V=v(v({},V),{},{transition:"transform ".concat(o,"ms")}));var D={};this.getSrcTypes().forEach(function(M){var p=M.name,C=M.keyEnding;D[p]=C});var R=[],G=function(p,C,ge){if(e.props[p]){var N=e.getBestImageForType(p),O=v(v({},V),a.getTransform(v(v({},ge),N)));b>g&&(O.cursor="move");var be=function(T){return Object.keys(T).some(function(_e){return T[_e]})};if(N===null&&be(L)){R.push(c.createElement("div",{className:"".concat(C," ril__image ril-errored"),style:O,key:e.props[p]+D[p]},c.createElement("div",{className:"ril__errorContainer"},e.props.imageLoadErrorMessage)));return}if(N===null){var ye=z!==void 0?z:c.createElement("div",{className:"ril-loading-circle ril__loadingCircle ril__loadingContainer__icon"},J(new Array(12)).map(function(ae,T){return c.createElement("div",{key:T,className:"ril-loading-circle-point ril__loadingCirclePoint"})}));R.push(c.createElement("div",{className:"".concat(C," ril__image ril-not-loaded"),style:O,key:e.props[p]+D[p]},c.createElement("div",{className:"ril__loadingContainer"},ye)));return}var B=N.src;u?(O.backgroundImage="url('".concat(B,"')"),R.push(c.createElement("div",{className:"".concat(C," ril__image ril__imageDiscourager"),onDoubleClick:e.handleImageDoubleClick,onWheel:e.handleImageMouseWheel,style:O,key:B+D[p]},c.createElement("div",{className:"ril-download-blocker ril__downloadBlocker"})))):R.push(c.createElement("img",H({},Y?{crossOrigin:Y}:{},{className:"".concat(C," ril__image"),onDoubleClick:e.handleImageDoubleClick,onWheel:e.handleImageMouseWheel,onDragStart:function(T){return T.preventDefault()},style:O,src:B,key:B+D[p],alt:typeof d=="string"?d:he("Image"),draggable:!1})))}},pe=this.getZoomMultiplier();G("nextSrc","ril-image-next ril__imageNext",{x:k.width}),G("mainSrc","ril-image-current",{x:-1*F,y:-1*$,zoom:pe}),G("prevSrc","ril-image-prev ril__imagePrev",{x:-1*k.width});var ve={overlay:v({zIndex:1e3,backgroundColor:"transparent"},S.overlay),content:v({backgroundColor:"transparent",overflow:"hidden",border:"none",borderRadius:0,padding:0,top:0,left:0,right:0,bottom:0},S.content)};return c.createElement(we,H({isOpen:!0,onRequestClose:l?this.requestClose:void 0,onAfterOpen:function(){e.outerEl.current&&e.outerEl.current.focus(),U()},style:ve,contentLabel:he("Lightbox"),appElement:typeof global.window<"u"?global.window.document.body:void 0},K),c.createElement("div",{className:"ril-outer ril__outer ril__outerAnimating ".concat(this.props.wrapperClassName," ").concat(I?"ril-closing ril__outerClosing":""),style:{transition:"opacity ".concat(o,"ms"),animationDuration:"".concat(o,"ms"),animationDirection:I?"normal":"reverse"},ref:this.outerEl,onWheel:this.handleOuterMousewheel,onMouseMove:this.handleMouseMove,onMouseDown:this.handleMouseDown,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,tabIndex:"-1",onKeyDown:this.handleKeyInput,onKeyUp:this.handleKeyInput},c.createElement("div",{className:"ril-inner ril__inner",onClick:l?this.closeIfClickInner:void 0},R),y&&c.createElement("button",{type:"button",className:"ril-prev-button ril__navButtons ril__navButtonPrev",key:"prev","aria-label":this.props.prevLabel,title:this.props.prevLabel,onClick:this.isAnimating()?void 0:this.requestMovePrev}),E&&c.createElement("button",{type:"button",className:"ril-next-button ril__navButtons ril__navButtonNext",key:"next","aria-label":this.props.nextLabel,title:this.props.nextLabel,onClick:this.isAnimating()?void 0:this.requestMoveNext}),c.createElement("div",{className:"ril-toolbar ril__toolbar"},c.createElement("ul",{className:"ril-toolbar-left ril__toolbarSide ril__toolbarLeftSide"},c.createElement("li",{className:"ril-toolbar__item ril__toolbarItem"},c.createElement("span",{className:"ril-toolbar__item__child ril__toolbarItemChild"},d))),c.createElement("ul",{className:"ril-toolbar-right ril__toolbarSide ril__toolbarRightSide"},_&&_.map(function(M,p){return c.createElement("li",{key:"button_".concat(p+1),className:"ril-toolbar__item ril__toolbarItem"},M)}),f&&c.createElement("li",{className:"ril-toolbar__item ril__toolbarItem"},c.createElement("button",{type:"button",key:"zoom-in","aria-label":this.props.zoomInLabel,title:this.props.zoomInLabel,className:["ril-zoom-in","ril__toolbarItemChild","ril__builtinButton","ril__zoomInButton"].concat(J(b===A?["ril__builtinButtonDisabled"]:[])).join(" "),ref:this.zoomInBtn,disabled:this.isAnimating()||b===A,onClick:!this.isAnimating()&&b!==A?this.handleZoomInButtonClick:void 0})),f&&c.createElement("li",{className:"ril-toolbar__item ril__toolbarItem"},c.createElement("button",{type:"button",key:"zoom-out","aria-label":this.props.zoomOutLabel,title:this.props.zoomOutLabel,className:["ril-zoom-out","ril__toolbarItemChild","ril__builtinButton","ril__zoomOutButton"].concat(J(b===g?["ril__builtinButtonDisabled"]:[])).join(" "),ref:this.zoomOutBtn,disabled:this.isAnimating()||b===g,onClick:!this.isAnimating()&&b!==g?this.handleZoomOutButtonClick:void 0})),c.createElement("li",{className:"ril-toolbar__item ril__toolbarItem"},c.createElement("button",{type:"button",key:"close","aria-label":this.props.closeLabel,title:this.props.closeLabel,className:"ril-close ril-toolbar__item__child ril__toolbarItemChild ril__builtinButton ril__closeButton",onClick:this.isAnimating()?void 0:this.requestClose})))),this.props.imageCaption&&c.createElement("div",{onWheel:this.handleCaptionMousewheel,onMouseDown:function(p){return p.stopPropagation()},className:"ril-caption ril__caption",ref:this.caption},c.createElement("div",{className:"ril-caption-content ril__captionContent"},this.props.imageCaption))))}}],[{key:"isTargetMatchImage",value:function(e){return e&&/ril-image-current/.test(e.className)}},{key:"parseMouseEvent",value:function(e){return{id:"mouse",source:x,x:parseInt(e.clientX,10),y:parseInt(e.clientY,10)}}},{key:"parseTouchPointer",value:function(e){return{id:e.identifier,source:P,x:parseInt(e.clientX,10),y:parseInt(e.clientY,10)}}},{key:"parsePointerEvent",value:function(e){return{id:e.pointerId,source:W,x:parseInt(e.clientX,10),y:parseInt(e.clientY,10)}}},{key:"getTransform",value:function(e){var t=e.x,r=t===void 0?0:t,o=e.y,l=o===void 0?0:o,u=e.zoom,f=u===void 0?1:u,d=e.width,E=e.targetWidth,y=r,_=ce();d>_&&(y+=(_-d)/2);var S=f*(E/d);return{transform:"translate3d(".concat(y,"px,").concat(l,"px,0) scale3d(").concat(S,",").concat(S,",1)")}}}]),a}(Se.Component);fe.propTypes={mainSrc:h.string.isRequired,prevSrc:h.string,nextSrc:h.string,mainSrcThumbnail:h.string,prevSrcThumbnail:h.string,nextSrcThumbnail:h.string,onCloseRequest:h.func.isRequired,onMovePrevRequest:h.func,onMoveNextRequest:h.func,onImageLoadError:h.func,onImageLoad:h.func,onAfterOpen:h.func,discourageDownloads:h.bool,animationDisabled:h.bool,animationOnKeyInput:h.bool,animationDuration:h.number,keyRepeatLimit:h.number,keyRepeatKeyupBonus:h.number,imageTitle:h.node,imageCaption:h.node,imageCrossOrigin:h.string,reactModalStyle:h.shape({}),imagePadding:h.number,wrapperClassName:h.string,toolbarButtons:h.arrayOf(h.node),clickOutsideToClose:h.bool,enableZoom:h.bool,reactModalProps:h.shape({}),nextLabel:h.string,prevLabel:h.string,zoomInLabel:h.string,zoomOutLabel:h.string,closeLabel:h.string,imageLoadErrorMessage:h.node,loader:h.node};fe.defaultProps={imageTitle:null,imageCaption:null,toolbarButtons:null,reactModalProps:{},animationDisabled:!1,animationDuration:300,animationOnKeyInput:!1,clickOutsideToClose:!0,closeLabel:"Close lightbox",discourageDownloads:!1,enableZoom:!0,imagePadding:10,imageCrossOrigin:null,keyRepeatKeyupBonus:40,keyRepeatLimit:180,mainSrcThumbnail:null,nextLabel:"Next image",nextSrc:null,nextSrcThumbnail:null,onAfterOpen:function(){},onImageLoadError:function(){},onImageLoad:function(){},onMoveNextRequest:function(){},onMovePrevRequest:function(){},prevLabel:"Previous image",prevSrc:null,prevSrcThumbnail:null,reactModalStyle:{},wrapperClassName:"",zoomInLabel:"Zoom in",zoomOutLabel:"Zoom out",imageLoadErrorMessage:"This image failed to load",loader:void 0};export{fe as R};