!function(t){var e={};function a(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=e,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(i,n,function(e){return t[e]}.bind(null,n));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=0)}([function(t,e,a){a(1),t.exports=a(6)},function(t,e,a){const i=a(2),n=a(3);window.vcustom={checkout:new n({type:'"{{type}}"',accordionPayments:"{{accordionPayments}}",deliveryDateFormat:"{{deliveryDateFormat}}",quantityPriceCart:"{{quantityPriceCart}}",showNoteField:"{{showNoteField}}"}),debug:new i({dbg:!1,logo:""})},vcustom.checkout.start()},function(t,e){t.exports=class{constructor({dbg:t=!1,logo:e='<img src="https://via.placeholder.com/160x60">'}={}){this.classOn="debug-on",this.logo=e,this.headerHTML=`<header class="main-header debug-elem"> <div class="container"> <div class="header-link"> <a href="/" title="add more products" class="buy-more-link link">Continue shopping</a> <a href="/checkout/#/cart" title="back to cart" class="back-cart-link link">Back to Cart</a> </div><a href="/" title="Go to homepage" class="logo">${this.logo}</a> </div></header>`,this.footerHTML='<footer class="main-footer debug-elem"> <div class="container"> <svg class="vtex-logo" height="40" viewBox="0 0 115 58" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M48.2904 13.4951H20.8256C18.6959 13.4951 17.3322 15.7303 18.3287 17.5885L21.076 22.7244H16.0956C15.7802 22.7245 15.4701 22.805 15.1955 22.9581C14.9209 23.1112 14.6909 23.3318 14.528 23.5984C14.3651 23.865 14.2746 24.1686 14.2654 24.4799C14.2562 24.7911 14.3286 25.0994 14.4756 25.375L23.3121 41.8868C23.4679 42.1772 23.7009 42.4202 23.986 42.5897C24.2712 42.7592 24.5977 42.8488 24.9306 42.8488C25.2635 42.8488 25.59 42.7592 25.8752 42.5897C26.1603 42.4202 26.3933 42.1772 26.5491 41.8868L28.949 37.4266L31.9598 43.0541C33.0195 45.0333 35.8901 45.037 36.9535 43.0599L50.7197 17.4848C51.6927 15.6759 50.365 13.4951 48.2904 13.4951ZM35.9533 24.4223L30.0175 35.4525C29.9137 35.6456 29.7587 35.8072 29.5689 35.9198C29.3792 36.0325 29.162 36.0921 28.9405 36.0921C28.7191 36.0921 28.5019 36.0325 28.3122 35.9198C28.1224 35.8072 27.9674 35.6456 27.8636 35.4525L21.9851 24.4687C21.8868 24.2856 21.8382 24.0805 21.8437 23.8734C21.8493 23.6662 21.909 23.464 22.017 23.2863C22.125 23.1085 22.2776 22.9614 22.4601 22.859C22.6426 22.7566 22.8488 22.7025 23.0587 22.7019H34.9061C35.1107 22.7019 35.3119 22.7542 35.49 22.8537C35.6682 22.9532 35.8172 23.0965 35.9226 23.2697C36.028 23.4429 36.0862 23.64 36.0916 23.842C36.097 24.044 36.0493 24.2439 35.9533 24.4223Z" fill="#F71963" style=" /* fill: #000; */"></path><path d="M77.5031 25.3597H74.4988V35.5249C74.4986 35.6176 74.4613 35.7063 74.3949 35.7718C74.3286 35.8373 74.2387 35.8742 74.1448 35.8744H71.8279C71.7341 35.8742 71.6442 35.8373 71.5779 35.7718C71.5115 35.7063 71.4742 35.6176 71.474 35.5249V25.3597H68.4521C68.4066 25.3616 68.3612 25.3544 68.3186 25.3385C68.2759 25.3227 68.2369 25.2986 68.2039 25.2677C68.1709 25.2367 68.1445 25.1995 68.1264 25.1583C68.1082 25.117 68.0986 25.0726 68.0981 25.0277V23.2297C68.0986 23.1847 68.1082 23.1403 68.1264 23.0991C68.1445 23.0578 68.1709 23.0206 68.2039 22.9897C68.2369 22.9587 68.2759 22.9346 68.3186 22.9188C68.3612 22.903 68.4066 22.8958 68.4521 22.8976H77.5023C77.5961 22.8933 77.6879 22.9257 77.7575 22.988C77.8271 23.0502 77.869 23.1371 77.8739 23.2297V25.0284C77.8688 25.1207 77.827 25.2073 77.7575 25.2693C77.6881 25.3314 77.5966 25.3639 77.5031 25.3597Z" fill="#F71963"></path><path d="M87.1474 35.8013C86.5284 35.8883 85.487 36.0283 83.577 36.0283C81.2953 36.0283 79.2795 35.4519 79.2795 32.2742V26.4742C79.2795 23.2965 81.3137 22.7375 83.5946 22.7375C85.5039 22.7375 86.5284 22.8775 87.1474 22.9645C87.3949 22.9993 87.5014 23.087 87.5014 23.3139V24.9401C87.5012 25.0327 87.4638 25.1215 87.3975 25.187C87.3312 25.2525 87.2412 25.2894 87.1474 25.2896H83.4184C82.5871 25.2896 82.2867 25.5687 82.2867 26.4771V28.0663H87.0064C87.1002 28.0665 87.1902 28.1034 87.2565 28.1689C87.3228 28.2344 87.3602 28.3231 87.3604 28.4158V30.0746C87.3602 30.1672 87.3228 30.2559 87.2565 30.3214C87.1902 30.3869 87.1002 30.4238 87.0064 30.424H82.2867V32.2749C82.2867 33.1826 82.5871 33.4625 83.4184 33.4625H87.1474C87.2412 33.4627 87.3312 33.4995 87.3975 33.565C87.4638 33.6305 87.5012 33.7193 87.5014 33.8119V35.4359C87.5014 35.6614 87.3949 35.7665 87.1474 35.8013Z" fill="#F71963"></path><path d="M100.491 35.8709H97.6795C97.4497 35.8709 97.3432 35.7984 97.2198 35.6091L94.7818 31.7877L92.5728 35.525C92.4487 35.7346 92.3253 35.8745 92.1322 35.8745H89.515C89.338 35.8745 89.2499 35.7694 89.2499 35.6476C89.2533 35.6048 89.2653 35.5632 89.2851 35.525L93.1162 29.2175L89.2455 23.2283C89.2258 23.1963 89.2138 23.1604 89.2102 23.1232C89.2165 23.059 89.2476 22.9997 89.2969 22.9575C89.3462 22.9153 89.4101 22.8933 89.4753 22.8963H92.3224C92.517 22.8963 92.6587 23.071 92.763 23.2283L95.0256 26.7554L97.2154 23.2283C97.3035 23.071 97.4629 22.8963 97.656 22.8963H100.273C100.338 22.8933 100.402 22.9153 100.452 22.9575C100.501 22.9997 100.532 23.059 100.538 23.1232C100.535 23.1604 100.523 23.1963 100.503 23.2283L96.6514 29.2545L100.668 35.525C100.7 35.5783 100.718 35.6382 100.721 35.6998C100.722 35.8013 100.633 35.8709 100.491 35.8709Z" fill="#F71963"></path><path d="M63.8595 22.9324C63.7964 22.9325 63.7352 22.9543 63.6865 22.9939C63.6377 23.0336 63.6044 23.0887 63.5922 23.1499L61.0249 32.5306C60.9896 32.7228 60.9368 32.7924 60.7774 32.7924C60.6181 32.7924 60.5652 32.7199 60.5299 32.5306L57.9597 23.1477C57.9475 23.0865 57.9142 23.0314 57.8654 22.9918C57.8167 22.9521 57.7555 22.9303 57.6924 22.9302H55.1655C55.1244 22.9302 55.0838 22.9394 55.0468 22.9571C55.0098 22.9747 54.9773 23.0004 54.9518 23.0322C54.9262 23.064 54.9083 23.101 54.8993 23.1406C54.8902 23.1802 54.8904 23.2213 54.8996 23.2608C54.8996 23.2608 58.0353 34.0191 58.0698 34.1249C58.4884 35.4067 59.504 36.0193 60.7965 36.0193C62.0273 36.0193 63.1017 35.3777 63.5217 34.1285C63.5716 33.9835 66.6376 23.2601 66.6376 23.2601C66.6467 23.2206 66.6468 23.1796 66.6377 23.1401C66.6286 23.1006 66.6106 23.0636 66.5851 23.032C66.5595 23.0003 66.5271 22.9747 66.4902 22.957C66.4532 22.9394 66.4128 22.9302 66.3717 22.9302L63.8595 22.9324Z" fill="#F71963"></path><path d="M48.2904 13.4951H20.8256C18.6959 13.4951 17.3322 15.7303 18.3287 17.5885L21.076 22.7244H16.0956C15.7802 22.7245 15.4701 22.805 15.1955 22.9581C14.9209 23.1112 14.6909 23.3318 14.528 23.5984C14.3651 23.865 14.2746 24.1686 14.2654 24.4799C14.2562 24.7911 14.3286 25.0994 14.4756 25.375L23.3121 41.8868C23.4679 42.1772 23.7009 42.4202 23.986 42.5897C24.2712 42.7592 24.5977 42.8488 24.9306 42.8488C25.2635 42.8488 25.59 42.7592 25.8752 42.5897C26.1603 42.4202 26.3933 42.1772 26.5491 41.8868L28.949 37.4266L31.9598 43.0541C33.0195 45.0333 35.8901 45.037 36.9535 43.0599L50.7197 17.4848C51.6927 15.6759 50.365 13.4951 48.2904 13.4951ZM35.9533 24.4223L30.0175 35.4525C29.9137 35.6456 29.7587 35.8072 29.5689 35.9198C29.3792 36.0325 29.162 36.0921 28.9405 36.0921C28.7191 36.0921 28.5019 36.0325 28.3122 35.9198C28.1224 35.8072 27.9674 35.6456 27.8636 35.4525L21.9851 24.4687C21.8868 24.2856 21.8382 24.0805 21.8437 23.8734C21.8493 23.6662 21.909 23.464 22.017 23.2863C22.125 23.1085 22.2776 22.9614 22.4601 22.859C22.6426 22.7566 22.8488 22.7025 23.0587 22.7019H34.9061C35.1107 22.7019 35.3119 22.7542 35.49 22.8537C35.6682 22.9532 35.8172 23.0965 35.9226 23.2697C36.028 23.4429 36.0862 23.64 36.0916 23.842C36.097 24.044 36.0493 24.2439 35.9533 24.4223Z" fill="#F71963"></path></svg> </div></footer>'}headernFooter(){$("body").prepend(this.headerHTML),$("body").append(this.footerHTML)}start(){$("body").addClass(this.classOn),this.headernFooter(),console.log("%c >>>>> YOU ARE CURRENTLY DEBUGING THE HEADER, IT'S A BETA! ISSUES CAN HAPPEN... Use `vcustom.debug.stop()` to stop! ","background: #111; color: #bada55")}stop(){$("body").removeClass(this.classOn),$(".debug-elem").remove()}}},function(t,e,a){const{_locale:i}=a(4),{debounce:n}=a(5);t.exports=class{constructor({type:t="vertical",accordionPayments:e=!0,deliveryDateFormat:a=!1,quantityPriceCart:i=!1,showNoteField:n=!1}={}){this.type=t,this.orderForm="",this.orderId=this.orderForm?this.orderForm.orderFormId:"",this.lang="",this.accordionPayments=e,this.deliveryDateFormat=a,this.quantityPriceCart=i,this.showNoteField=n}general(){$(".custom-cart-template-wrap").length||$(".cart-template.mini-cart .cart-fixed > *").wrapAll('<div class="custom-cart-template-wrap">'),$(".table.cart-items tbody tr.product-item").each((function(t){if($(this).find(".v-custom-product-item-wrap").length>0)return!1;$(this).find("> *").wrapAll('<div class="v-custom-product-item-wrap">')})),$("body").addClass("v-custom-loaded")}builder(){let t=this;"vertical"==this.type?t.buildVertical():"horizontal"==this.type?t.buildHorizontal():console.error("No `type` identified, check your code"),t.showNoteField&&$("body").addClass("js-vcustom-showNoteField")}buildVertical(){$("body").addClass("body-cart-vertical"),$(".cart-template .cart-links-bottom:eq(0)").appendTo(".cart-template > .summary-template-holder"),$(".cart-template .cart-more-options:eq(0), .cart-template .extensions-checkout-buttons-container").appendTo(".cart-template-holder")}buildHorizontal(){}checkEmpty(t){0==t.length?$("body").addClass("v-custom-cart-empty"):$("body").removeClass("v-custom-cart-empty")}addEditButtoninLogin(){$("#v-custom-edit-login-data").remove(),$(".client-pre-email h3.client-pre-email-h span").append(`\n      <a id="v-custom-edit-login-data" class="link-box-edit btn btn-small" style="" title="${!this.lang||this.lang.editLabel}">\n        <i class="icon-edit"></i>\n        <i class="icon-spinner icon-spin icon-3x"></i>\n      </a>\n    `)}addStepsHeader(){if($(".checkout-steps").length>0)return!1;$("header.main-header").length&&$("header.main-header .container").append('\n      <div class="checkout-steps">\n        <div class="checkout-steps-wrap">\n          <span class="checkout-steps_bar">\n            <span class="checkout-steps_bar_inner"></span>\n            <span class="checkout-steps_bar_inner-active"></span>\n          </span>\n          <div class="checkout-steps_items">\n            <span class="checkout-steps_item checkout-steps_item_cart js-checkout-steps-item" data-url="/checkout/#/cart">\n              <span class="text">Cart</span>\n            </span>\n            <span class="checkout-steps_item checkout-steps_item_identification js-checkout-steps-item" data-url="/checkout/#/profile">\n              <span class="text">Identification</span>\n            </span>\n            <span class="checkout-steps_item checkout-steps_item_shipping js-checkout-steps-item" data-url="/checkout/#/shipping">\n              <span class="text">Shipping</span>\n            </span>\n            <span class="checkout-steps_item checkout-steps_item_payment js-checkout-steps-item" data-url="/checkout/#/payment">\n              <span class="text">Payment</span>\n            </span>\n            <span class="checkout-steps_item checkout-steps_item_confirmation js-checkout-steps-item">\n              <span class="text">Confirmation</span>\n            </span>\n          </div>\n        </div>\n      </div>\n    ')}addAssemblies(t){try{$.each(t.items,(function(t){let e=this;if(e.assemblies.length>0){let a='<div class="v-custom-assemblies">';$.each(e.assemblies,(function(t){let e=this.inputValues;a+=`<p>${this.id}</p>`,a+='<ul class="v-custom-assemblies__values">',Object.entries(e).forEach(([t,e])=>{a+=`<li class="v-custom-assemblies__values__item assembly-${t.toLowerCase().replace(/ /g,"-")}">\n                                      <strong>${t}</strong>\n                                      <span>${e.trim()}</span>\n                                    </li>`}),a+="</ul>"})),a+="</div>",$(`.table.cart-items tbody tr.product-item:eq(${t}) .v-custom-assemblies`).remove(),$(`.table.cart-items tbody tr.product-item:eq(${t})`).addClass("v-custom-assemblies-in").find("td.product-name").append(a)}}))}catch(t){}}bundleItems(t){try{$.each(t.items,(function(t){this.bundleItems.length>0?$(`.table.cart-items tbody tr.product-item:eq(${t})`).addClass("v-custom-bundles-in").find("td.product-name"):$(`.table.cart-items tbody tr.product-item:eq(${t})`).removeClass("v-custom-bundles-in")})),$(".table.cart-items tbody tr.item-service").each((function(t){if($(this).find(".v-custom-trservice-wrap").length>0)return!1;$(this).find("> *").wrapAll('<div class="v-custom-trservice-wrap">')}))}catch(t){}}showCustomMsgCoupon(t){let e=t.marketingData.coupon,a=t.items.reduce((function(t,a){return t+(a.priceTags.length?a.priceTags.filter(t=>t.ratesAndBenefitsIdentifier?t.ratesAndBenefitsIdentifier.matchedParameters["couponCode@Marketing"]==e:0).length:0)}),0);if(!e||a>0)return $("fieldset.coupon-fieldset").removeClass("js-vcustom-showCustomMsgCoupon"),$(".vcustom-showCustomMsgCoupon").remove(),!1;0==$(".vcustom-showCustomMsgCoupon").length&&$("fieldset.coupon-fieldset").addClass("js-vcustom-showCustomMsgCoupon").append(`<p class="vcustom-showCustomMsgCoupon">${this.lang.couponInactive}</div>`)}addLabels(t){let e=t.marketingData.coupon,a=[];if(!e)return!1;try{$(".table.cart-items tbody tr.product-item, .mini-cart .cart-items li").removeClass("v-custom-addLabels-active js-vcustom-addLabels"),$(".v-custom-addLabels-active-flag").remove(),$.each(t.items,(function(t){this.priceTags.length>0&&this.priceTags.filter(t=>!!t.ratesAndBenefitsIdentifier&&t.ratesAndBenefitsIdentifier.matchedParameters["couponCode@Marketing"]==e).length>0&&(a.push(this),$(`.table.cart-items tbody tr.product-item:eq(${t})`).addClass("v-custom-addLabels-active js-vcustom-addLabels").find(".product-name").append(`<span class="v-custom-addLabels-active-flag">${e}</span>`))}))}catch(t){console.error(t)}}buildMiniCart(t){if(0==t.items.filter(t=>null!=t.parentItemIndex).length)return!1;""!=$(".mini-cart .cart-items").text().trim()&&($(".mini-cart .cart-items").html(""+$(".mini-cart .cart-items").html()),$.each(t.items,(function(t){"available"==this.availability&&$(`.mini-cart .cart-items li:eq(${t})`).find(".item-unavailable").remove()})))}removeMCLoader(){$(".mini-cart .cart-items").addClass("v-loaded")}indexedInItems(t){let e=this;try{if(0==t.items.filter(t=>null!=t.parentItemIndex).length)return e.removeMCLoader(),!1;t.items&&($.each(t.items,(function(t){null!=this.parentItemIndex&&($(`.table.cart-items tbody tr.product-item:eq(${t}), .mini-cart .cart-items li:eq(${t}) `).addClass("v-custom-indexed-item"),$(`.table.cart-items tbody tr.product-item:eq(${this.parentItemIndex}), .mini-cart .cart-items li:eq(${this.parentItemIndex})`).addClass("v-custom-indexedItems-in"),$(".mini-cart .cart-items li").length>0&&$(`.mini-cart .cart-items li:eq(${t})`).appendTo(`.mini-cart .cart-items li:eq(${this.parentItemIndex})`))})),e.removeMCLoader())}catch(t){e.removeMCLoader()}}addBusinessDays(t,e=i18n.options.lng){let a=new Date;a=new Date(a.getTime());let i=a.getDay();a.setDate(a.getDate()+t+(6===i?2:+!i)+2*Math.floor((t-1+(i%6||1))/5));let n={weekday:"long",month:"short",day:"numeric"};return"pt"==e&&(n={weekday:"short",month:"short",day:"numeric"}),a.getDate()-(new Date).getDate()==1?this.lang.tomorrowLabel||"Tomorrow":(a=a.toLocaleDateString(e,n),a)}changeShippingTimeInfo(){let t=this;$("body").addClass("v-custom-changeShippingTimeInfo");let e=[".shp-summary-package-time > span","p.vtex-omnishipping-1-x-sla.sla",".vtex-omnishipping-1-x-leanShippingTextLabelSingle > span","span.shipping-date",".shp-option-text-time",".pkpmodal-pickup-point-sla",".shp-option-text-package"];try{$("\n        .vtex-omnishipping-1-x-summaryPackage.shp-summary-package:not(.v-changeShippingTimeInfo-active), \n        .vtex-omnishipping-1-x-leanShippingOption, \n        .vtex-omnishipping-1-x-packageItem:not(.v-changeShippingTimeInfo-active),\n        .orderform-template .cart-template.mini-cart .item,\n        .vtex-pickup-points-modal-3-x-pickupPointSlaAvailability        \n      ").each((function(a){let i=$(this).find(e.map(t=>t+":not(.v-changeShippingTimeInfo-elem-active)").join(", ")).text();if(""!=i&&i.match(/(day)|(dia)/gm)){let a=parseInt(i.match(/\d+/));if(a){let i=t.lang.deliveryDateText;$(this).find(e.join(", ")).text().toLowerCase().match(/(ready in up)|(pronto)/gm)&&(i=t.lang.PickupDateText),$(this).find(e.join(", ")).html(`${i} <strong>${t.addBusinessDays(a)}</strong>`).addClass("v-changeShippingTimeInfo-elem-active")}}$(this).addClass("v-changeShippingTimeInfo-active")}))}catch(t){}}changeShippingTimeInfoInit(){let t=this;t.lang&&t.deliveryDateFormat&&t.changeShippingTimeInfo()}enchancementTotalPrice(t){let e=this;if(e.quantityPriceCart)try{$.each(t.items,(function(a){let i=$(`.table.cart-items tbody tr.product-item:eq(${a})`);if(1==this.quantity||0==i.find("td.product-price").find(".best-price").length)return;let n=i.find(".total-selling-price").text(),s=`\n          <div class="v-custom-quantity-price vqc-ldelem">\n            <span class="v-custom-quantity-price__list">\n              ${this.listPrice>this.sellingPrice?`<span class="v-custom-quantity-price__list--list">${t.storePreferencesData.currencySymbol} ${(this.listPrice/100).toFixed(2)}</span>`:""}\n            </span>\n          </div>\n        `;i.find("td.product-price").find(".vqc-ldelem").remove(),i.find("td.product-price").addClass("v-custom-quantity-price-active").prepend(s).append(`<div class="v-custom-quantity-price vqc-ldelem"><span class="v-custom-quantity-price__best">${n}</span></div>`),i.find("td.product-price").find("> .best-price").wrap('<div class="v-custom-quantity-price__list--selling"></div>'),i.find("td.product-price").find(".v-custom-quantity-price__list--selling").append(`<span class="vqc-ldelem"> ${e.lang.eachLabel}</span>`)}))}catch(t){}}update(t){let e=this;this.checkEmpty(t.items),this.addAssemblies(t),this.enchancementTotalPrice(t),this.bundleItems(t),this.buildMiniCart(t),this.indexedInItems(t),n((function(){t.marketingData&&(e.addLabels(t),e.showCustomMsgCoupon(t))}),250)()}updateStep(){let t=["cart","email","profile","shipping","payment"];if($("body").removeClass(t.map(t=>"v-custom-step-"+t).join(" ")),window.location.hash){let e=window.location.hash.split("/")[1];t.find(t=>t==e),$("body").addClass("v-custom-step-"+e)}}updateLang(t){if(this.lang=i[t.storePreferencesData.countryCode],!this.lang)return!1;const e=this.lang;e.editLabel&&$(".link-box-edit").attr("title",e.editLabel),e.cartSubmitButton&&$("#cart-to-orderform").text(e.cartSubmitButton),e.cartNoteLabel&&$("p.note-label label").text(e.cartNoteLabel),e.identifiedUserMessage&&$(".identified-user-modal-body p.identified-user-message").html(e.identifiedUserMessage),e.paypalPhone&&$(".payment-paypal-help-number").text(e.paypalPhone),e.paypalImg?$(".payment-paypal-title-short-logo").css("background-image",`url(${e.paypalImg})`):""==e.paypalImg&&$(".payment-paypal-title-short-logo").hide()}paymentBuilder(){let t=this;if(t.orderForm&&0==$(".payment-group-item-cards").length&&t.orderForm.paymentData){let e='<span class="payment-group-item-cards">';$.each(t.orderForm.paymentData.paymentSystems.filter(t=>"creditCardPaymentGroup"==t.groupName),(function(t){e+=`<span class="card-flag ${this.name}">${this.name}</span>`})),e+="</span>",t.accordionPayments?$("#payment-group-creditCardPaymentGroup").append(e):$("#iframe-placeholder-creditCardPaymentGroup").prepend(e)}if(!this.accordionPayments||$(".payment-group-list-btn").find(".v-custom-payment-item-wrap").length>0)return!1;$("body").addClass("v-custom-paymentBuilder-accordion"),$(".payment-group-item").each((function(t){$(this).wrap(`<div class='v-custom-payment-item-wrap ${$(this).hasClass("active")?"active":""}'></div>`)})),$(".payment-group-item").each((function(t){$("#payment-data .steps-view > div:eq(0)").appendTo($(this).closest(".v-custom-payment-item-wrap"))}))}bind(){let t=this;$("body").on("click","#v-custom-edit-login-data",(function(e){e.preventDefault(),$(this).addClass("active");var a=new XMLHttpRequest;a.addEventListener("readystatechange",(function(){this.readyState===this.DONE&&(location.reload(),setTimeout((function(){$("#v-custom-edit-login-data").removeClass("active")}),1e3))})),a.open("GET","/checkout/changeToAnonymousUser/"+t.orderForm.orderFormId),a.setRequestHeader("content-type","application/json"),a.setRequestHeader("accept","application/json"),a.send(null)})),$("body").on("click",".v-custom-payment-item-wrap",(function(t){$(".v-custom-payment-item-wrap").removeClass("active"),$(this).addClass("active")})),$("body").on("click",".vtex-pickup-points-modal-3-x-pickupDetailsHeaderButton, #map-canvas img, .vtex-omnishipping-1-x-pickupPointChange, .pkpmodal-pickup-point, .vtex-pickup-points-modal-3-x-modalDetailsBackLnk",(function(e){setTimeout(()=>{t.changeShippingTimeInfoInit()},100)})),$("body").on("click",".js-checkout-steps-item .text",(function(t){window.location=$(this).closest(".checkout-steps_item").attr("data-url")}))}init(){let t=this;t.orderForm=!!vtexjs.checkout.orderForm&&vtexjs.checkout.orderForm,t.general(),t.updateStep(),t.addStepsHeader(),t.builder(),t.paymentBuilder(),t.changeShippingTimeInfoInit(),t.orderForm&&(t.updateLang(t.orderForm),t.update(t.orderForm)),t.addEditButtoninLogin()}start(){let t=this;try{$((function(){t.bind()})),$(document).ajaxComplete((function(){t.init()})),$(window).on("hashchange",(function(){t.updateStep(),t.changeShippingTimeInfoInit(),t.paymentBuilder(),t.orderForm&&(t.buildMiniCart(t.orderForm),t.indexedInItems(t.orderForm),t.updateLang(t.orderForm))})),$(window).on("orderFormUpdated.vtex",(function(e,a){t.update(a)})),console.log("🎉 Yay! You are using the vtex.checkout.ui customization !!")}catch(e){t.general()}}}},function(t,e){t.exports._locale={BRA:{couponInactive:"Nenhum desconto aplicado. Confira as regras.",editLabel:"Editar",deliveryDateText:"Entrega até",PickupDateText:"Pronto até",eachLabel:"cada",tomorrowLabel:"Amanhã"},CAN:{couponInactive:"No discounts available. Check the conditions.",editLabel:"Edit",paypalImg:"",paypalPhone:"1 (888) 221-1161",cartSubmitButton:"Proceed to Payment",deliveryDateText:"Arrives by",PickupDateText:"Ready by",eachLabel:"each",tomorrowLabel:"Tomorrow",identifiedUserMessage:"Thanks for coming back!\nTo expedite your transaction, we have securely populated your information for you."},USA:{couponInactive:"No discounts available. Check the conditions.",editLabel:"Edit",paypalImg:"",paypalPhone:"1 (888) 221-1161",cartSubmitButton:"Proceed to Payment",deliveryDateText:"Arrives by",PickupDateText:"Ready by",eachLabel:"each",tomorrowLabel:"Tomorrow",cartNoteLabel:"Gift Message or Comments",identifiedUserMessage:"Thanks for coming back!<br/>To expedite your transaction, we have securely populated your information for you."}}},function(t,e){t.exports.debounce=(t,e)=>{let a;return function(...i){clearTimeout(a),a=setTimeout(()=>{clearTimeout(a),t(...i)},e)}}},function(t,e,a){t.exports=a.p+"checkout6-custom.css"}]);