/*!
* jQuery Cookie Plugin
* https://github.com/carhartl/jquery-cookie
*
* Copyright 2011, Klaus Hartl
* Dual licensed under the MIT or GPL Version 2 licenses.
* http://www.opensource.org/licenses/mit-license.php
* http://www.opensource.org/licenses/GPL-2.0
*/
(function(n){n.cookie=function(t,i,r){var h,f,e,o,u,s;if(arguments.length>1&&(!/Object/.test(Object.prototype.toString.call(i))||i===null||i===undefined))return r=n.extend({},r),(i===null||i===undefined)&&(r.expires=-1),typeof r.expires=="number"&&(h=r.expires,f=r.expires=new Date,f.setDate(f.getDate()+h)),i=String(i),document.cookie=[encodeURIComponent(t),"=",r.raw?i:encodeURIComponent(i),r.expires?"; expires="+r.expires.toUTCString():"",r.path?"; path="+r.path:"",r.domain?"; domain="+r.domain:"",r.secure?"; secure":""].join("");for(r=i||{},e=r.raw?function(n){return n}:decodeURIComponent,o=document.cookie.split("; "),u=0;s=o[u]&&o[u].split("=");u++)if(e(s[0])===t)return e(s[1]||"");return null}})(jQuery);