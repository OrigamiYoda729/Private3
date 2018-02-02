function $(n,t){return t&&(n=t+n),document.getElementById(n)}function createFrame(n,t){return frame=document.createElement("DIV"),frame.className=t,n.appendChild(frame),frame}function createRow(n,t,i){var r=document.createElement("DIV");return r.className=t,typeof i!="undefined"&&(r.className+=" "+t+(i&1)),Browser.type===BrowserType.Gecko?(r.style.display="-moz-box",r.style.width="auto",r.style.minWidth="100%"):Browser.type===BrowserType.WebKit&&(r.style.display="table",r.style.width="100%"),n.appendChild(r),r}function createCell(n,t,i){var r=document.createElement("DIV"),u=document.createElement("DIV");return t&&(r.className=t),i&&(r.innerHTML=i),u.className=document.documentMode>=8?"inline":Browser.type===BrowserType.IE?"inline-ie":"inline",u.appendChild(r),n.appendChild(u),r}function createAnchor(n,t,i,r){var u=document.createElement("A");return u.href="javascript:void(0)",t&&(u.className=t),u.innerHTML=n,Event.addListener(u,"click",i,r),u}function Rectangle(n,t,i,r){this.left=n;this.top=t;this.right=n+i;this.bottom=t+r}function Uri(n){var t=n.split("?",2);this.path=t[0];this.query=t[1];this.root="/"+this.path.split("/")[3];this._url=n}function CheckBoxList(n,t){this.id=n;this.name=t||n}function htmlEncode(n){return String(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}Array.prototype.push||(Array.prototype.push=function(n){this[this.length]=n});Array.prototype.indexOf||(Array.prototype.indexOf=function(n){for(var i=this.length,r=+arguments[1]||0,t=r;t<i;t++)if(this[t]===n)return t;return-1},Array.indexOf=function(n,t){Array.prototype.indexOf.call(n,t)});Array.prototype.lastIndexOf||(Array.prototype.lastIndexOf=function(n){for(var i=+arguments[1]||this.length-1,t=i;t>=0;t--)if(this[t]===n)return t;return-1},Array.lastIndexOf=function(n,t){Array.prototype.lastIndexOf.call(n,t)});Array.prototype.every||(Array.prototype.every=function(n,t){for(var r=this.length,i=0;i<r;i++)if(!n.call(t,this[i],i,this))return!1;return!0},Array.every=function(n,t,i){Array.prototype.every.call(n,t,i)});Array.prototype.forEach||(Array.prototype.forEach=function(n,t){for(var r=this.length,i=0;i<r;i++)n.call(t,this[i],i,this)});Array.forEach||(Array.forEach=function(n,t,i){Array.prototype.forEach.call(n,t,i)});Array.prototype.each=Array.prototype.forEach;Array.prototype.next=function(n){var t=this.indexOf(n)+1;return t==0?null:this[t]};Array.prototype.previous=function(n){var t=this.indexOf(n)-1;return t<0?null:this[t]};Array.prototype.clear=function(){this.length=0};Array.prototype.remove=function(n){return this.splice(this.indexOf(n),1)};Array.prototype.dispose=function(){for(var n=0;n<this.length;n++)this[n].dispose()};String.prototype.trimRight||(String.prototype.trimRight=function(){for(var n=this.length;n>0&&this.charCodeAt(n-1)==32;)n--;return n==this.length?this:this.substr(0,n)});String.prototype.trimLeft||(String.prototype.trimLeft=function(){for(var n=0;n<this.length&&this.charCodeAt(n)==32;)n++;return n==0?this:this.substr(n)});String.prototype.trim||(String.prototype.trim=function(){return this.trimRight().trimLeft()});String.prototype.compareTo=function(n){return this<n?-1:this>n?1:0};String.compare=function(n,t,i){return i&&(n=n.toLowerCase(),t=t.toLowerCase()),n.compareTo(t)};Decimal={};Decimal.round=function(n,t){var i=Math.round(n*Math.pow(10,t))/Math.pow(10,t);return parseFloat(i)};Function.empty=function(){};Function.falseFunction=function(){return!1};Function.prototype.getListener=function(n){var t=this;return function(i){return t.call(n,Event.normalize(i))}};Function.prototype.bind=function(n){var t=this,i;return arguments.length>1?(i=Array.prototype.slice.call(arguments,1),function(){return t.apply(n,i)}):function(){return t.apply(n,arguments)}};Function.prototype.getCallback=Function.prototype.bind;var BrowserType={Other:0,IE:1,Mozilla:2,Safari:3,WebKit:3,Opera:4,Gecko:5};Browser=new function(){this.type=BrowserType.Other;this.version=0;var n=navigator.userAgent.toLowerCase(),t;(t=n.indexOf("opera/"))!=-1||(t=n.indexOf("opera "))!=-1?(this.type=BrowserType.Opera,this.version=parseFloat(n.substr(t+6))):(t=n.indexOf("msie "))!=-1&&document.all?(this.type=BrowserType.IE,this.version=parseFloat(n.substr(t+5))):(t=n.indexOf("applewebkit/"))!=-1?(this.type=BrowserType.Safari,this.version=parseFloat(n.substr(t+12))):(t=n.indexOf("gecko"))!=-1?(this.type=BrowserType.Gecko,this.version=parseFloat(n.substr(n.indexOf("rv:")+3))):(t=n.indexOf("mozilla/"))!=-1&&(this.type=BrowserType.Mozilla,this.version=parseFloat(n.substr(t+8)))};Browser.getStyle=function(n){switch(this.type){case BrowserType.Mozilla:case BrowserType.Gecko:return n+"-moz";case BrowserType.Safari:return n+"-khtml"}return""};Browser.isBrowser=function(n,t){return this.type!=n?!1:this.version>=t};Browser.isMozilla=function(n){return this.isBrowser(BrowserType.Mozilla,n)};Browser.isIE=function(n){return this.isBrowser(BrowserType.IE,n)};Browser.isSafari=function(n){return this.isBrowser(BrowserType.Safari,n)};Rectangle.prototype.inflate=function(n,t){this.left-=n;this.right+=n;this.top-=t;this.bottom+=t};Rectangle.prototype.contains=function(n){return n.left>=this.left&&n.right<=this.right&&n.top>=this.top&&n.bottom<=this.bottom};Rectangle.prototype.containsPoint=function(n,t){return n>=this.left&&n<=this.right&&t>=this.top&&t<=this.bottom};Rectangle.prototype.intersectsWith=function(n){return this.containsPoint(n.left,n.top)?!0:this.containsPoint(n.left,n.bottom)?!0:this.containsPoint(n.right,n.top)?!0:this.containsPoint(n.right,n.bottom)?!0:!1};Rectangle.prototype.toString=function(){return this.left+","+this.top+","+this.right+","+this.bottom};Element||(Element={});Element.getOffset=function(n,t){for(var i=0,r=0;n&&n!=t;)i+=n.offsetLeft-n.scrollLeft,r+=n.offsetTop-n.scrollTop,n=n.offsetParent;return{x:i,y:r}};Element.getPosition=function(n){for(var i=0,r=0,t;n;){if(t=Element.getStyle(n,"position"),t=="absolute"||t=="relative")break;i+=n.offsetLeft;r+=n.offsetTop;n=n.offsetParent}return{x:i,y:r}};Element.getPosition=function(n,t){for(var r=0,u=0,i;n;){if(n==t)break;if(i=Element.getStyle(n,"position"),i=="absolute"||i=="relative")break;r+=n.offsetLeft;u+=n.offsetTop;n=n.offsetParent}return{x:r,y:u}};Element.moveTo=function(n,t,i){n.style.left=t+"px";n.style.top=i+"px"};Element.resize=function(n,t,i){n.style.width=t+"px";n.style.height=i+"px"};Element.center=function(n){n.style.top="50%";n.style.left="50%";Element.getStyle(n,"width")=="auto"&&(n.style.width="35%");n.style.marginLeft=-n.offsetWidth/2+"px";n.style.marginTop=-n.offsetHeight/2+"px"};Element.centerWidth=function(n,t){n.style.top="50%";n.style.left="50%";t!="auto"&&(n.style.width=t);n.style.marginLeft=-n.offsetWidth/2+"px";n.style.marginTop=-n.offsetHeight/2+"px"};Element.scrollbarWidth=function(){var t=document.createElement("p"),n,r,i;return t.style.width="100%",t.style.height="200px",n=document.createElement("div"),n.style.position="absolute",n.style.top="0px",n.style.left="0px",n.style.visibility="hidden",n.style.width="200px",n.style.height="150px",n.style.overflow="hidden",n.appendChild(t),document.body.appendChild(n),r=t.offsetWidth,n.style.overflow="scroll",i=t.offsetWidth,r==i&&(i=n.clientWidth),document.body.removeChild(n),r-i};Element.show=function(n,t){typeof t=="undefined"&&(t=!0);n.style.display=t?"":"none"};Element.showInline=function(n){n.style.display="inline"};Element.hide=function(n,t){typeof t=="undefined"&&(t=!0);n&&(n.style.display=t?"none":"")};Element.setOffsetLeft=function(n,t){n.style.left=t+"px"};Element.getOffsetRight=function(n){return n.offsetLeft+n.offsetWidth};Element.insertBefore=function(n,t){t.parentNode.insertBefore(n,t)};Element.insertAfter=function(n,t){t.nextSibling?t.parentNode.insertBefore(n,t.nextSibling):t.parentNode.appendChild(n)};Element.remove=function(n){n.parentNode&&n.parentNode.removeChild(n)};Element.css=function(n,t){return window.getComputedStyle?window.getComputedStyle(n)[t]:n.currentStyle[t]};Element.setOffsetWidth=function(n,t){Element.css(n,"box-sizing")!="border-box"&&(t-=n.offsetWidth-n.clientWidth);n.style.width=t<0?0:t+"px"};Element.setOffsetHeight=function(n,t){Element.css(n,"box-sizing")!="border-box"&&(t-=n.offsetHeight-n.clientHeight);n.style.height=t<0?0:t+"px"};Element.setHeight=function(n,t){t<0&&(t=0);n.style.height=t+"px"};Element.setWidth=function(n,t){t<0&&(t=0);n.style.width=t+"px"};Element.heightTaken=function(n){for(var i=n,r=0,t=i.previousSibling;t&&t.parentNode.tagName!="FORM"&&t.parentNode.tagName!="BODY";)t.offsetHeight&&(r+=t.offsetHeight),t=t.previousSibling;while(i.parentNode.tagName!="FORM"&&i.parentNode.tagName!="BODY")i=i.parentNode;return r+i.offsetTop};Element.setFillHeight=function(n,t){Element.setHeight(n,document.body.clientHeight-(Element.heightTaken(n)+t))};Element.scrollIntoView=function(n,t){n.offsetLeft<t.scrollLeft?t.scrollLeft=n.offsetLeft:n.offsetLeft+n.offsetWidth>t.scrollLeft+t.clientWidth&&(t.scrollLeft=n.offsetLeft+n.offsetWidth-t.clientWidth);n.offsetTop<t.scrollTop?t.scrollTop=n.offsetTop:n.offsetTop+n.offsetHeight>t.scrollTop+t.clientHeight&&(t.scrollTop=n.offsetTop+n.offsetHeight-t.clientHeight)};Element.setOpacity=function(n,t){t>=1?(n.style.filter="",n.style.opacity=""):(n.style.filter="alpha(opacity="+t*100+")",n.style.opacity=t)};Element.setText=function(n,t){t||(t=" ");var i=n.firstChild,r=document.createTextNode(t);i?n.replaceChild(r,i):n.appendChild(r)};Element.setInnerText=function(n,t){t.length==0&&(t=" ");n.innerText?n.innerText=t:n.textContent?n.textContent=t:(n.innerHTML="",n.appendChild(document.createTextNode(t)))};Element.create=function(n,t,i){var r=document.createElement(n);return t&&(r.className=t),i&&r.appendChild(document.createTextNode(i)),r};Element.createDiv=function(n){var t=document.createElement("DIV");return n&&(t.className=n),t};Element.createTable=function(n){var t=document.createElement("TABLE");return t.cellPadding=0,t.cellSpacing=0,n&&(t.className=n),t};Element.createImage=function(n,t,i,r){var u=document.createElement("IMG");return u.src=n,u.width=t,u.height=i,r&&(u.className=r),u};Element.getStyle=function(n,t){return Element.getComputedStyle(n)[t]};Element.getComputedStyle=function(n){return n.currentStyle?n.currentStyle:document.defaultView&&document.defaultView.getComputedStyle?document.defaultView.getComputedStyle(n,""):null};Element.getBounds=function(n,t){var i=new Rectangle(n.offsetLeft,n.offsetTop,n.offsetWidth,n.offsetHeight);if(!t)return i;while(n&&n.offsetParent!=t)i.left+=n.offsetParent.offsetLeft,i.top+=n.offsetParent.offsetTop,i.right+=n.offsetParent.offsetLeft,i.bottom+=n.offsetParent.offsetTop,n=n.offsetParent;return i};Element.getElementsByClassName=function(n,t,i){for(var u=n.getElementsByTagName(i||"*"),f=[],r=0;r<u.length;r++)Element.hasClassName(u[r],t)&&f.push(u[r]);return f};Element.clone=function(n,t){var r=n.cloneNode(!0),f,u,i;for(r.id&&(r.id+=t,r._id=t),f=r.getElementsByTagName("*"),u=0;u<f.length;u++)i=f[u],i.id&&(i.id+=t,i._id=t),i.name&&(i.name+=t),i.htmlFor&&(i.htmlFor+=t);return r};Element.appendClass=function(n,t){var i,r;if(n){if(!n.className){n.className=t;return}(i=n.className.split(" "),i.indexOf(t)>=0)||(i.push(t),r=i.join(" "),r!=n.className&&(n.className=r))}};Element.removeClass=function(n,t){var i,r,u;if(n&&n.className){for(i=n.className.split(" "),r=0;r<i.length;r++)i[r]==t&&(i[r]="");u=i.join(" ");n.className!=u&&(n.className=u.trim().replace(/\s+/g," "))}};Element.hasClassName=function(n,t){return n.className?n.className.split(" ").indexOf(t)!=-1:!1};Element.setClass=function(n,t,i){if(n){typeof i=="undefined"&&(i=!0);var r=i?Element.appendClass:Element.removeClass;r(n,t)}};Element.toggleClass=function(n,t){n&&(Element.hasClassName(n,t)?Element.removeClass(n,t):Element.appendClass(n,t))};Element.findParent=function(n,t){t=t.toUpperCase();for(var i=n.parentNode;i&&i.tagName!=t;)i=i.parentNode;return i};Element.findParentWithClassName=function(n,t,i){t=t.toUpperCase();for(var r=n;r&&(r.tagName!=t||!Element.hasClassName(r,i));)r=r.parentNode;return r};Element.createInput=Browser.type==BrowserType.IE&&Browser.version<9?function(n){return document.createElement('<input name="'+n+'">')}:function(n){var t=document.createElement("input");return t.name=n,t};Element.beginTag=function(n,t,i){var r,u;if(n){for(r=[],r.push("<"),r.push(n),t&&(r.push(' class = "'),r.push(t),r.push('"')),u=0;i&&u<i.length;u++)r.push(" "),r.push(i[u].Name),r.push(' = "'),r.push(i[u].Value),r.push('"');return r.push(" >"),r.join("")}};Element.endTag=function(n){var t=[];return t.push("<\/"),t.push(n),t.push(">"),t.join("")};Element.showStatusMessage=function(n,t,i){var u=$("ErrorStatus"),r;u||(r=document.createElement("div"),r.id="ErrorStatus",r.style.left="45%",r.style.top="10px",r.style.margin=0,r.style.fontSize="8pt",r.style.padding="5px 10px 5px 30px",r.style.backgroundPosition="5px",r.style.position="absolute",r.style.display="none",document.body.appendChild(r),u=r);u.className=i||"flash-warning";Element.setText(u,n);Element.setOpacity(u,1);Element.show(u,!0);onTimeout=function(){Effect.fadeOut(u,500,function(n){Element.hide(n)})};window.setTimeout("onTimeout()",t)};Element.isVisible=function(n){if(Element.getStyle(n,"display")=="none"||Element.getStyle(n,"visibility")=="hidden"||n.offsetLeft<0||n.offsetTop<0)return!1;var t=self.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,i=self.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;return n.offsetLeft>t||n.offsetTop>i?!1:!0};SelectElement={};SelectElement.selectByValue=function(n,t){for(var r=n.options,i=0;i<r.length;i++)if(r[i].value==t){n.selectedIndex=i;break}};SelectElement.add=function(n,t,i){var r=document.createElement("OPTION");return n.nodeName=="OPTGROUP"&&Browser.type==BrowserType.IE&&Browser.version<9?r.label=t:r.text=t,r.value=i,n.options&&n.options.add?n.options.add(r,-1):n.appendChild(r),r};SelectElement.getSelectedValue=function(n){return n.options[n.selectedIndex].value};Date.MONTH_NAMES=["January","February","March","April","May","June","July","August","September","October","November","December"];Date.DAY_NAMES=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];Date.getNow=function(){return new Date};Date.getToday=function(){var n=Date.getNow();return new Date(n.getFullYear(),n.getMonth(),n.getDate())};Date.prototype.addDays=function(n){return new Date(this.getFullYear(),this.getMonth(),this.getDate()+n)};Date.prototype.toMonthDateString=function(){return[this.getMonth()+1,this.getDate()].join("/")};Date.prototype.toShortDateString=function(){return[this.getMonth()+1,this.getDate(),this.getFullYear()].join("/")};Date.prototype.toXmlDateString=function(){return[this.getFullYear(),(this.getMonth()+1).format(2),this.getDate().format(2)].join("-")};Date.parseXml=function(n){var t=n.split("-");return new Date(t[0],t[1]-1,t[2])};Date.prototype.getDayString=function(n){var t=Date.DAY_NAMES[this.getDay()];return n?t.substr(0,n):t};Date.prototype.getMonthString=function(){return Date.MONTH_NAMES[this.getMonth()]};Date.prototype.isToday=function(){var n=new Date;return n.getDate()==this.getDate()&&n.getMonth()==this.getMonth()&&n.getFullYear()==this.getFullYear()};Date.prototype.elapsed=function(){return(new Date).getTime()-this.getTime()};Date.convertToLocalUTC=function(n){var t=(new Date).getTimezoneOffset();return new Date(new Date(n).getTime()-t*6e4)};Number.prototype.format=function(n,t){var i=this.toString(t?t:10);if(n)while(i.length<n)i="0"+i;return i};Number.prototype.toHex=function(n){return this.format(n,16)};Guid={};Guid.empty="00000000-0000-0000-0000-000000000000";Guid.toString=function(n,t){var i,r;return typeof n!="string"?n:(i=n.replace(/(\{|\}|\(|\)|-)/g,""),i.length!=32)?n:(t&&(t=t.toUpperCase()),t=="N")?i:(r=i.substring(0,8)+"-"+i.substring(8,12)+"-"+i.substring(12,16)+"-"+i.substring(16,20)+"-"+i.substring(20,32),t=="B")?"{"+r+"}":t=="P"?"("+r+")":r};Guid.isEmpty=function(n){return Guid.toString(n,"D")==Guid.empty};Form={};Form.getLabelFor=function(n){for(var i=document.getElementsByTagName("LABEL"),t=0;t<i.length;t++)if(i[t].htmlFor==n)return i[t];return null};Form._buttonTypes=["submit","button","reset"];Form.isButton=function(n){return Form._buttonTypes.indexOf(n.type)>=0};Form.disableButtons=function(n){for(var t=(n||document).getElementsByTagName("INPUT"),i=0;i<t.length;i++)Form.isButton(t[i])&&(t[i].disabled=!0);return t};Form.disableFields=function(n){for(var i=n.getElementsByTagName("INPUT"),t=0;t<i.length;t++)Form.isButton(i[t])||(i[t].type=="text"?i[t].readOnly=!0:i[t].disabled=!0);for(i=n.getElementsByTagName("SELECT"),t=0;t<i.length;t++)i[t].disabled=!0};Form._getFields=function(n){for(var i,r=[],u=n.getElementsByTagName("*"),t=0;t<u.length;t++){i=u[t];switch(i.tagName){case"INPUT":case"SELECT":case"TEXTAREA":r.push(i)}}return r};Form._getValue=function(n){switch(n.type.toLowerCase()){case"checkbox":case"radio":return n.checked?n.value:null}return n.value};Form.serialize=function(n){var t={};return Form._getFields(n).each(function(n){if(n.name&&!n.disabled){var i=Form._getValue(n);i!==null&&(n.name in t?(t[n.name]instanceof Array||(t[n.name]=[t[n.name]]),t[n.name].push(i)):t[n.name]=i)}}),t};Uri.getCurrent=function(){return new Uri(document.location.href)};Uri.prototype.toString=function(){var n=this.path;return this.query&&(n+="?"+this.query),n};Uri.prototype.getQuery=function(){var n=this._url.indexOf("?"),t;return n<0?"":(t=this._url.indexOf("#"),t<0)?this._url.substr(n+1):this._url.substring(n+1,t)};Uri.prototype.getFragment=function(){var n=this._url.indexOf("#");return n<0?"":this._url.substr(n+1)};Cookie={};Cookie.setValue=function(n,t,i){var r=n+"="+t+"; path=/";i&&(r+="; expires="+i.toGMTString());document.cookie=r};Cookie.getValue=function(n){for(var t,r=n+"=",u=document.cookie.split(";"),i=0;i<u.length;i++){for(t=u[i];t.charAt(0)==" ";)t=t.substring(1,t.length);if(t.indexOf(r)==0)return t.substring(r.length,t.length)}return null};Cookie.clear=function(n){Cookie.setValue(n,"",Date.getNow().addDays(-1))};HttpUtility={};HttpUtility.htmlEncode=function(n){return n=n.replace(new RegExp("&","g"),"&amp;"),n=n.replace(new RegExp('"',"g"),"&quot;"),n=n.replace(new RegExp("<","g"),"&lt;"),n.replace(new RegExp(">","g"),"&gt;")};KeyCode={Backspace:8,Tab:9,Enter:13,Escape:27,Space:32,PageUp:33,PageDown:34,Left:37,Up:38,Right:39,Down:40};QueryString={};QueryString.parse=function(n){for(var i,r=n.split("&"),u={},t=0;t<r.length;t++)i=r[t].split("="),u[decodeURIComponent(i[0])]=decodeURIComponent(i[1]);return u};QueryString.fromObject=function(n){var t=[];for(var i in n)t.length&&t.push("&"),t.push(encodeURIComponent(i)),t.push("="),t.push(encodeURIComponent(n[i]));return t.join("")};CheckBoxList.prototype.create=function(){var n=document.createElement("TABLE"),t=document.createElement("TBODY");return n.id=this.id,n.cellPadding=0,n.cellSpacing=0,n.appendChild(t),document.body.appendChild(n),n};CheckBoxList.prototype.getElement=function(){return document.getElementById(this.id)||this.create()};CheckBoxList.prototype.clear=function(){for(var n=this.getElement().tBodies[0];n.rows.length;)n.deleteRow(0)};CheckBoxList.prototype.addItem=function(n,t,i,r){var o=this.getElement(),f=document.createElement("TR"),e;r&&(f.className=r,f.setAttribute("identity",t));var s=document.createElement("TD"),h=document.createElement("TD"),u=document.createElement("INPUT");return u.type="checkbox",u.id=[this.id,o.rows.length].join("_"),u.name=this.name,u.value=t,s.appendChild(u),e=document.createElement("LABEL"),e.htmlFor=u.id,e.appendChild(document.createTextNode(n)),h.appendChild(e),f.appendChild(s),f.appendChild(h),o.tBodies[0].appendChild(f),u.checked=i,f};Table={};Table.sort=function(n,t){for(var u=n.tBodies[0],r=[],i=0,f=u.rows.length;i<f;i++)r.push(u.rows[i]);for(r.sort(t),i=0,f=r.length;i<f;i++)u.appendChild(r[i])};Table.sortByColumn=function(n,t,i){function r(n,r){var u=n.cells[t].childNodes[0].innerHTML,f=r.cells[t].childNodes[0].innerHTML;return u<f?i?1:-1:u>f?i?-1:1:0}Table.sort(n,r);Table.stripe(n)};Table.stripeRows=function(n){for(var t,r=0,i=0,u=n.length;i<u;i++)(t=n[i],t.style&&t.style.display=="none")||(Element.removeClass(t,"row0"),Element.removeClass(t,"row1"),Element.appendClass(t,"row"+(r&1)),r++)};Table.stripe=function(n){if(n.tagName=="TABLE")for(var t=0;t<n.tBodies.length;t++)Table.stripeRows(n.tBodies[t].rows);else n.tagName=="TBODY"&&Table.stripeRows(n.rows)};Table.clearRows=function(n){for(var t=n.tBodies[0],i=t.rows;i.length>0;)t.deleteRow(0)};Table.createDomRow=function(n){n.splice(0,0,"<table>");n.push("<\/table>");var t=document.createElement("span");return t.innerHTML=n.join(""),t.firstChild.firstChild.firstChild};DragItem={};DragItem.dragTo=function(n,t){this._targetId=n;this._callback=t;this._beginCapture()};DragItem.getElement=function(){var n=$("DragItemImage");return n==null&&(n=document.createElement("IMG"),n.id="DragItemImage",n.src="../Images/DragPlaceholder.png",n.style.display="none",document.body.appendChild(n)),n};DragItem._beginCapture=function(){Event.addListener(document,"mousemove",this._onMouseMove,this);Event.addListener(document,"mouseup",this._onMouseUp,this)};DragItem._endCapture=function(){Event.removeListener(document,"mousemove",this._onMouseMove,this);Event.removeListener(document,"mouseup",this._onMouseUp,this)};DragItem._onMouseMove=function(n){n.stopPropagation();n.preventDefault();var t=this.getElement();Element.show(t);Element.moveTo(t,n.clientX,n.clientY)};DragItem._onMouseUp=function(n){this._endCapture();var t=this.getElement();Element.hide(t);this._callback&&Element.getBounds($(this._targetId),document.body).containsPoint(n.clientX,n.clientY)&&this._callback(this._targetId);this._targetId=null;this._callback=null};Timespan=function(n){this._milliseconds=n};Timespan.millisecondsPerHour=36e5;Timespan.millisecondsPerMinute=6e4;Timespan.prototype.seconds=function(){var n=this.hours()*Timespan.millisecondsPerHour,t=this.minutes()*Timespan.millisecondsPerMinute;return(this._milliseconds-n-t)/1e3|0};Timespan.prototype.minutes=function(){var n=this.hours()*Timespan.millisecondsPerHour,t=this._milliseconds-n;return t/Timespan.millisecondsPerMinute|0};Timespan.prototype.hours=function(){return this._milliseconds/Timespan.millisecondsPerHour|0};Timespan.prototype.toReadableString=function(){var n=[],t=this.hours(),i=this.minutes(),r=this.seconds(),u;return t>0&&(n.push(t),n.push(" "),n.push(t>1?"hours ":"hour ")),i>0&&(n.push(i),n.push(" "),n.push(i>1?"minutes ":"minute ")),r>0&&(n.push(r),n.push(" "),n.push(r>1?"seconds ":"second ")),u=n.join(""),u.substring(0,u.length-1)};