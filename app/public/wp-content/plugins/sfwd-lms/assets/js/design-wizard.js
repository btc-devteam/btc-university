/** This file is part of the LearnDash plugin and was generated automatically */
!function(){function e(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function t(t){for(var s=1;s<arguments.length;s++){var r=null!=arguments[s]?arguments[s]:{};s%2?e(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):e(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function a(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=new URLSearchParams(window.location.search),a=t.get("template"),n=t.get("nonce"),l=0,d=0;e?(l=1,m(),d=6,a.includes("astra")?d=parseInt(d)+35:a.includes("kadence")&&(d=parseInt(d)+9),Cookies.set("ldDwTotalSteps",d)):(l=Cookies.get("ldDwCurrentStepN"),l=parseInt(l)+1,d=Cookies.get("ldDwTotalSteps")),Cookies.set("ldDwCurrentStepN",l),jQuery.post(LearnDashDesignWizard.ajaxurl,{action:"ld_dw_build_template",nonce:n,template:a,init:e},(function(e){if(e.success){if(e.data.complete){l=1,d=1,m(!0);var t=LearnDashDesignWizard.templates.actions_success;jQuery(".design-wizard > .content > .text").replaceWith(t)}else"build_template"!==e.data.step?s():"build_template"===e.data.step&&("astra"===e.data.theme?r():"kadence"===e.data.theme&&i());o({currentStepN:l,totalSteps:d,message:e.data.message})}}))}function r(){var e,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},d=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"POST",c=new URLSearchParams(window.location.search),p=Cookies.get("ldDwFont"),m=Cookies.get("ldDwPalette"),f=JSON.stringify(n("astra",p)),h=Cookies.get("astra-site-color-scheme"),g=c.get("step");h&&(e=JSON.stringify(l("astra",m,h))),a.length<1&&(a=LearnDashDesignWizard.ajaxurl);var w,k=["astra-sites-api-request","astra-required-plugins","astra-sites-filesystem-permission","astra-sites-set-start-flag","astra-sites-reset-customizer-data","astra-sites-reset-site-options","astra-sites-reset-widgets-data","astra-sites-reset-terms-and-forms","astra-sites-get-deleted-post-ids","astra-sites-reset-posts","astra-sites-import-wpforms","astra-sites-import-cartflows","astra-sites-import-customizer-settings","astra-sites-import-prepare-xml","astra-wxr-import","astra-sites-import-options","astra-sites-import-widgets","astra_sites_set_site_data-site_colors","astra_sites_set_site_data-site_typography","astra-sites-import-end"],_=Cookies.get("ldDwThemeTemplateId"),D=Cookies.get("ldDwLastBuildAstraStep"),v=Cookies.get("ldDwTotalSteps"),y=Cookies.get("ldDwCurrentStepN"),C="";y=parseInt(y)+1,Cookies.set("ldDwCurrentStepN",y),w=D?k.indexOf(D)+1:0;var j=k[w];if(j){var b,S,Q;switch(g=j,j){case"astra-sites-api-request":i.url="astra-sites/"+_,C="Get template data";break;case"astra-sites-reset-customizer-data":C="Reset site data";break;case"astra-sites-reset-posts":S="undefined"!==(b=Cookies.get("astra-site-deleted-post-ids"))?(b=b.split(",")).splice(0,10):[],i.ids=Object.assign({},S),i.ids=JSON.stringify(i.ids),Q="undefined"!==b&&b.length>0;break;case"astra-sites-import-wpforms":i.wpforms_url=Cookies.get("astra-site-wpforms-path"),Cookies.remove("astra-site-wpforms-path"),C="Import wpforms data if any";break;case"astra-sites-import-cartflows":i.cartflows_url=Cookies.get("astra-site-cartflows-path"),Cookies.remove("astra-site-cartflows-path"),C="Import cartflows data if any";break;case"astra-sites-import-widgets":i.widgets_data=Cookies.get("astra-site-widgets-data"),Cookies.remove("astra-site-widgets-data"),C="Import widgets data";break;case"astra-sites-import-prepare-xml":i.wxr_url=Cookies.get("astra-site-wxr-path"),Cookies.remove("astra-site-wxr-path"),C="Import XML data";break;case"astra_sites_set_site_data-site_colors":g="astra_sites_set_site_data",i.param="site-colors",i.palette=e,i.security=LearnDashDesignWizard.ajax_set_data_nonce,Cookies.remove("astra-site-color-scheme"),C="Apply site color options";break;case"astra_sites_set_site_data-site_typography":g="astra_sites_set_site_data",i.param="site-typography",i.typography=f,i.security=LearnDashDesignWizard.ajax_set_data_nonce,C="Apply site typography options"}o({currentStepN:y,totalSteps:v,message:C}),jQuery.ajax({url:a,type:d,data:t({action:g,_ajax_nonce:LearnDashDesignWizard.ajax_nonce},i),success:function(e){if("astra-wxr-import"===j)e.length>0&&r();else if("astra-wxr-import"!==j)if(e.success){var t,a="",i="POST";switch(j){case"astra-sites-api-request":Cookies.set("astra-site-wpforms-path",e.data["astra-site-wpforms-path"]),Cookies.set("astra-site-cartflows-path",e.data["astra-site-cartflows-path"]),Cookies.set("astra-site-wxr-path",e.data["astra-site-wxr-path"]),Cookies.set("astra-site-widgets-data",e.data["astra-site-widgets-data"]);break;case"astra-required-plugins":Cookies.set("astra-site-required-plugins",e.data.required_plugins),e.data.required_plugins.notinstalled.forEach((function(e){wp.updates.queue.push({action:"install-plugin",data:{slug:e.slug,init:e.init,name:e.name,clear_destination:!0,success:function(){u(e)},error:function(){}}})})),wp.updates.queueChecker(),e.data.required_plugins.inactive.forEach((function(e){u(e)}));break;case"astra-sites-get-deleted-post-ids":t=e.data.splice(0,100),Cookies.set("astra-site-deleted-post-ids",t);break;case"astra-sites-import-prepare-xml":a=e.data.url,i="GET";break;case"astra-sites-import-end":return Cookies.remove("ldDwLastBuildAstraStep"),void s()}r(a,{},i)}else{C=Object.hasOwnProperty.call(e,"data")&&Object.hasOwnProperty.call(e.data,"message")?e.data.message:LearnDashDesignWizard.messages.dw_error_default,C=LearnDashDesignWizard.messages.dw_error_prefix+": "+C,o({currentStepN:y-1,totalSteps:v,message:C});var n=LearnDashDesignWizard.templates.actions_error;jQuery(".design-wizard > .content > .text").replaceWith(n),Cookies.remove("ldDwLastBuildAstraStep")}y=parseInt(y)+1,Cookies.set("ldDwCurrentStepN",y)}}).fail((function(){Cookies.remove("ldDwLastBuildAstraStep"),Cookies.remove("ldDwCurrentStepN")})),Q?Cookies.set("ldDwLastBuildAstraStep","astra-sites-reset-terms-and-forms"):Cookies.set("ldDwLastBuildAstraStep",j)}else Cookies.remove("ldDwLastBuildAstraStep")}function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"POST",n=new URLSearchParams(window.location.search),l=n.get("step");e.length<1&&(e=LearnDashDesignWizard.ajaxurl);var d,c=["kadence_import_get_template_data","kadence_check_plugin_data","kadence_remove_past_import_data","kadence_import_install_plugins","kadence_import_demo_data","kadence_import_customizer_data","kadence_after_import_data"],p=Cookies.get("ldDwThemeTemplateId"),u=Cookies.get("ldDwLastBuildKadenceStep"),m=Cookies.get("ldDwTotalSteps"),h=Cookies.get("ldDwCurrentStepN"),g="";h=parseInt(h)+1,Cookies.set("ldDwCurrentStepN",h),d=u?c.indexOf(u)+1:0;var w=c[d];if(w){switch(l=w,a.selected=p,a.builder="blocks",w){case"kadence_import_get_template_data":a.template_type="blocks",g="Get template data";break;case"check_plugin_data":a.selected="",a.builder="blocks",g="Check plugin data";break;case"kadence_import_demo_data":a.palette=Cookies.get("ldDwPalette"),a.font=Cookies.get("ldDwFont"),g="Import demo data";break;case"kadence_import_customizer_data":a.wp_customize="on",delete a.selected,delete a.builder,g="Import customizer data"}o({currentStepN:h,totalSteps:m,message:g}),w&&Cookies.set("ldDwLastBuildKadenceStep",w),jQuery.ajax({url:e,type:r,data:t({action:l,security:LearnDashDesignWizard.ajax_kadence_security_nonce},a),success:function(e){var t;switch(w){case"kadence_import_get_template_data":t=JSON.parse(e),Cookies.set("ldDwKadenceTemplateData",t);break;case"kadence_import_demo_data":"newAJAX"===e.status&&Cookies.set("ldDwLastBuildKadenceStep","kadence_import_install_plugins");break;case"kadence_after_import_data":return f(),void s()}i("",{},"POST")}}).fail((function(){f()}))}else f()}function o(e){var t=e.currentStepN/e.totalSteps*100;t=(t=t>100?100:t).toFixed(0),jQuery(".progress .percentage .number").text(t+"%"),jQuery(".progress .bar progress").attr("value",t),""!==e.message&&jQuery(".progress .status .message").html(e.message)}function n(e,t){var a={};return Object.prototype.hasOwnProperty.call(LearnDashDesignWizard.fonts[e][t],"details")&&(a=LearnDashDesignWizard.fonts[e][t].details),a}function l(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return a.length>0?LearnDashDesignWizard.palettes[e][a][t]:LearnDashDesignWizard.palettes[e][t]}function d(e,t,a,s){var r={step:t+1,template:a,nonce:s};s||delete r.nonce;var i=new URLSearchParams(r),o=encodeURI(e+"&"+i.toString());window.location.href=o}function c(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",s=document.getElementById("ld-site-preview");if(s){var r,i,o,d,c={};switch(t){case"site-colors":"astra"===e?(r="colorPalette",i=l("astra",a,Cookies.get("astra-site-color-scheme")||"light")):"kadence"===e&&(o="color",d="default"!==a?Cookies.get("ldDwPalette"):"");break;case"site-typography":"astra"===e?(r="siteTypography",i=p(a,i=n("astra",a))):"kadence"===e&&(o="font",d="default"!==a?Cookies.get("ldDwFont"):"")}"astra"===e?r&&i&&s.contentWindow.postMessage({call:"starterTemplatePreviewDispatch",value:{param:r,data:i}},"*"):"kadence"===e&&(c[o]=d,s.contentWindow.postMessage(c,"*"))}}function p(e,t){var a=e;t.id=a;return["font-family-h1","font-family-h2","font-family-h3","font-family-h4","font-family-h5","font-family-h6","font-weight-h1","font-weight-h2","font-weight-h3","font-weight-h4","font-weight-h5","font-weight-h6"].forEach((function(e){t[e]="inherit"})),["line-height-h1","line-height-h2","line-height-h3","line-height-h4","line-height-h5","line-height-h6","text-transform-h1","text-transform-h2","text-transform-h3","text-transform-h4","text-transform-h5","text-transform-h6"].forEach((function(e){t[e]=""})),t}function u(e){jQuery.post(LearnDashDesignWizard.ajaxurl,{action:"astra-required-plugin-activate",_ajax_nonce:LearnDashDesignWizard.ajax_nonce,init:e.init},(function(){}))}function m(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=["ldDwCurrentStepN","ldDwTotalSteps","ldDwLastBuildAstraStep","ldDwLastBuildKadenceStep","astra-site-wpforms-path","astra-site-cartflows-path","astra-site-wxr-path","astra-site-widgets-data","astra-site-required-plugins"];e&&t.push.apply(t,["astra-site-color-scheme","ldDwTemplateId","ldDwThemeTemplateId","ldDwFont","ldDwPalette"]),t.forEach((function(e){Cookies.remove(e)}))}function f(){["ldDwLastBuildKadenceStep","ldDwPalette","ldDwFont"].forEach((function(e){Cookies.remove(e)}))}jQuery(window).on("load",(function(){!function(){var e=new URLSearchParams(window.location.search),t=e.get("template"),a=e.get("nonce"),r=e.get("step"),i="";r=r?parseInt(r):1,t&&(i=t.includes("kadence_")?"kadence":"astra");if(1===r)Cookies.remove("ldDwTemplateId");else if(2===r||3===r||4===r){var o=Cookies.get("ldDwFont"),n=Cookies.get("ldDwPalette");setTimeout((function(){c(i,"site-colors",n),c(i,"site-typography",o),setTimeout((function(){jQuery("#ld-site-preview").show()}),1e3)}),500)}else 5===r&&t.length>0&&a.length>0&&(Cookies.remove("ldDwLastBuildAstraStep"),Cookies.remove("ldDwLastBuildKadenceStep"),s(!0))}()})),jQuery((function(){jQuery(document).on("mouseover",".templates .template figure",(function(e){e.preventDefault(),jQuery(this).addClass("hover")})),jQuery(document).on("mouseleave",".templates .template figure",(function(e){e.preventDefault(),jQuery(this).removeClass("hover")})),jQuery(document).on("click",".templates .template figure .actions .select",(function(e){e.preventDefault();var t=jQuery(this).closest(".templates"),a=jQuery(this).closest(".template").data("id"),s=jQuery(this).closest(".template").data("theme_template_id");t.find(".template").removeClass("selected"),jQuery(this).closest(".template").addClass("selected"),Cookies.set("ldDwTemplateId",a),Cookies.set("ldDwThemeTemplateId",s),Cookies.set("ldDwPalette","default"),Cookies.set("ldDwFont","default")})),jQuery(document).on("click",".templates .template figure .actions .preview",(function(e){e.preventDefault();var t=jQuery(".preview-wrapper"),a=t.find(".iframe-wrapper"),s=jQuery(this).closest(".template"),r=s.data("id").includes("kadence_")?"kadence":"astra",i=s.data("preview_url");i&&i.length>0&&(t.find("iframe").attr("src",i),t.show(),a.hide(),setTimeout((function(){c(r,"site-colors","default"),c(r,"site-typography","default"),a.show()}),500))})),jQuery(document).on("click",".preview-wrapper .close",(function(e){e.preventDefault();var t=jQuery(this).closest(".preview-wrapper");t.find(".preview iframe").removeAttr("src"),t.hide()})),jQuery(document).on("click",".design-wizard .fonts .font",(function(e){e.preventDefault();var t=jQuery(this).closest(".fonts"),a=jQuery(this).data("id"),s=Cookies.get("ldDwTemplateId").includes("kadence_")?"kadence":"astra";t.find(".font").removeClass("selected"),jQuery(this).addClass("selected"),Cookies.set("ldDwFont",a),c(s,"site-typography",a)})),jQuery(document).on("click",".design-wizard .reset-font-button",(function(e){e.preventDefault();var t=jQuery(this).closest(".header").find(".fonts"),a=Cookies.get("ldDwTemplateId").includes("kadence_")?"kadence":"astra";t.find(".font").removeClass("selected"),Cookies.remove("ldDwFont"),c(a,"site-typography","default")})),jQuery(document).on("click",".design-wizard .palettes .palette",(function(e){e.preventDefault();var t=jQuery(this).closest(".palettes"),a=jQuery(this).data("id"),s=Cookies.get("ldDwTemplateId").includes("kadence_")?"kadence":"astra";t.find(".palette").removeClass("selected"),jQuery(this).addClass("selected"),Cookies.set("ldDwPalette",a),c(s,"site-colors",a)})),jQuery(document).on("click",".design-wizard .reset-palette-button",(function(e){e.preventDefault();var t=jQuery(this).closest(".header").find(".palettes"),a=Cookies.get("ldDwTemplateId").includes("kadence_")?"kadence":"astra";t.find(".palette").removeClass("selected"),Cookies.remove("ldDwPalette"),c(a,"site-colors","default")})),jQuery(document).on("click",".next-button",(function(e){e.preventDefault();var t=window.location.href,a=new URLSearchParams(window.location.search),s=Cookies.get("ldDwTemplateId"),r=!1;if(!s||"undefined"===s)return alert("Please select a template first"),!1;var i=a.get("step");1===(i=i?parseInt(i):1)?(s.includes("astra_")&&Cookies.set("astra-site-color-scheme","light"),d(t,i,s,r)):d(t,i,s,4===i?r=LearnDashDesignWizard.ajax_init_nonce:r)})),jQuery(document).on("click",".back",(function(e){e.preventDefault(),history.back()})),jQuery(document).on("click",".exit",(function(e){e.preventDefault(),window.location.href=LearnDashDesignWizard.learndash_setup_url})),jQuery(document).on("click",".visit-site",(function(e){e.preventDefault(),jQuery('<a href="'+LearnDashDesignWizard.site_url+'" target="_blank"Visit Site</a>')[0].click()}))}))}();