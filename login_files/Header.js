function initialize(){}function populateSchoolList(n){var t=document.getElementById("uxSchoolList"),i;if(t.options.length>0&&t.attributes.getNamedItem("callFrom").nodeValue==n){t.options[0].selected=!0;return}while(t.hasChildNodes())t.removeChild(t.lastChild);i=new Json.Request(rootPath+"Common/Search.ashx","LoadSchools");i.onSuccess=function(i){var l=document.createAttribute("callFrom"),o,h,c,r,u;l.nodeValue=n;t.attributes.setNamedItem(l);o=SelectElement.add(t,"Any School","0");o.selected=!0;var f=[],e=[],s=[];for(r=0,u=i.length;r<u;r++)i[r].group==="In District Schools"?f.push(i[r]):i[r].group==="Out of District Schools"?e.push(i[r]):s.push(i[r]);if(f.length===0&&e.length===0)for(r=0,u=s.length;r<u;r++)o=SelectElement.add(t,s[r].schoolName,s[r].orgId);else{if(f.length>0)for(h=document.createElement("OPTGROUP"),h.label="In District Schools",t.appendChild(h),r=0,u=f.length;r<u;r++)o=SelectElement.add(h,f[r].schoolName,f[r].orgId);if(e.length>0)for(c=document.createElement("OPTGROUP"),c.label="Out of District Schools",t.appendChild(c),r=0,u=e.length;r<u;r++)o=SelectElement.add(c,e[r].schoolName,e[r].orgId)}};i.invoke({securityArea:n})}function onAdvancedSearch(){var i,t,n;if(populateSchoolList(IMPERSONATE_SECURITYAREA),i=$("uxSearchResult"),t=$("uxSearchDialog"),Element.setInnerText($("uxSearchTitle"),"Advanced Teacher Search"),SearchDialog){Element.removeClass(t,"dn");SearchDialog.clear();SearchDialog.addEvents();SearchDialog.open(t);return}SearchDialog=new Dialog("uxSearchDialog");SearchDialog.save=function(){uxSearchInput.value=n._item.teacherNameAndId;impersonateTeacher(n._itemSelected)};SearchDialog.clear=function(){var n=i.getElementsByClassName("list-group");n.length>0&&Element.remove(n[0]);Element.show($("uxInstruction"))};n=new AdvancedSearch(rootPath+"Common/Search.ashx","SearchTeacherByNameAndSchool","personId","teacherNameAndId",[$("uxSearchDialog_LastName"),$("uxSearchDialog_FirstName"),$("uxSchoolList")],$("uxInstruction"),!1);SearchDialog.onClosing=function(){SearchDialog.clear();n._searchResult.onClosing()};n.onShowResults=function(n){Element.hide($("uxInstruction"));Element.hide($("uxInstruction_searchResults"));var t=i.getElementsByClassName("list-group");t.length>0&&Element.remove(t[0]);i.appendChild(n)};SearchDialog.addEvents=function(){n.addEvents()};n.onItemSelected=function(n){impersonateTeacher(n)};n.getSearchParameters=function(){var t=jQuery("#uxSearchDialog_FirstName").val(),i=jQuery("#uxSearchDialog_LastName").val(),r=jQuery("#uxSchoolList").val();n._Params={firstName:t,lastName:i,orgId:r}};n.verifySearchParameters=function(){var t=jQuery("#uxSearchDialog_FirstName").val(),i=jQuery("#uxSearchDialog_LastName").val(),r=jQuery("#uxSchoolList").val();return n._Params.firstName===t&&n._Params.lastName===i&&n._Params.orgId===r};Element.removeClass(t,"dn");SearchDialog.clear();SearchDialog.open(t)}function impersonateTeacher(n){var t=new Json.Request(rootPath+"common/Impersonation.ashx","ImpersonateTeacher");t.onSuccess=function(){navigateToDefaultPage()};t.invoke({impersonatedPersonId:n})}function navigateToDefaultPage(){window.location=rootPath+"Default.aspx"}function showImpersonationBox(){for(var i=document.getElementById(headerBarId),t=Element.getElementsByClassName(i,"pinnacleGrade"),n=0;n<t.length;n++)t[n].style.display="none";document.getElementById(headerBarId).style.height="26px"}function hideImpersonationBox(){document.getElementById(headerBarId).style.display="none"}var SearchDialog,uxSearchInput,IMPERSONATE_SECURITYAREA=73;(function(n){n(function(){var t,i,r;n("#sideBar").hasClass("always-float")?n("#header .button-menu").show():n("#header .button-menu").addClass("visible-xs-inline-block");n(document).on("click","a[role=button][href='#']",function(n){return n.preventDefault(),!1});n(document).on("focus","input",function(t){var f=n("#header[data-mobile=true]"),i,u,r,e;f.length!==0&&(i=n(t.target),i.is("input")&&(u=0,f.is(":visible")&&(u=-f.outerHeight()),i.prop("id")?(r=n("label[for="+i.prop("id")+"]"),r.length>0&&(i=r)):(r=i.siblings("label"),r.length>0&&(i=r)),e=n(window),u-=e.innerHeight()/8,n("html, body").animate({scrollTop:i.offset().top+u})))});n(".button-menu").on("touchstart click",function(t){t.preventDefault();t.stopPropagation();n("#sideBar").toggleClass("show");n(".button-menu").toggleClass("button-menu-visible")});n("html").on("touchstart click",function(t){n("#sideBar").hasClass("show")&&!n.contains(n("#sideBar")[0],t.target)&&(t.preventDefault(),t.stopPropagation(),n("#sideBar").removeClass("show"),n(".button-menu").removeClass("button-menu-visible"))});n("[data-search=teacher]").search({selected:function(t,i){var r=jQuery(this).data("impersonation-url"),u=jQuery(this).data("redirect-url");n.post(r+"/ImpersonateTeacher",{impersonatedPersonId:i.value}).done(function(){document.location.href=u})},cleared:function(){var t=jQuery(this).data("impersonation-url"),i=jQuery(this).data("redirect-url");n.post(t+"/ClearImpersonation").done(function(){document.location.href=i})},showadvanced:function(n){onAdvancedSearch(n)}});r="#sideBarStudentSearch";t=n(r);t&&t.length&&(i=new Search(t[0],siteRoot+"Common/Search.ashx","StudentSearch","studentId","studentName",!0,null,!0),i.onShowResults=function(t){var i=n("#"+this._elementId),r=i.offset();r.top+=i.outerHeight();n(t).offset(r).width(i.outerWidth())},i.onItemSelected=function(t,i){n("#"+this._elementId).val(i.studentName);document.location.href=siteRoot+"InternetViewer/GradeReport.aspx?Student="+i.studentId});n(window).scroll(function(){var t=n(this).scrollTop();t>10?(n("#header").addClass("logo-hidden"),n("#sideBar").addClass("logo-hidden")):(n("#header").removeClass("logo-hidden"),n("#sideBar").removeClass("logo-hidden"))})})})(jQuery);