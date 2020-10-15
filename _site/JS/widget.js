(function () {
    var jQuery;
    var ChatToggle = false;

    if (window.jQuery === undefined || window.jQuery.fn.jquery !== '1.7.1') {
        var script_tag = document.createElement('script');
        script_tag.setAttribute("type", "text/javascript");
        script_tag.setAttribute("src", "https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js");
        if (script_tag.readyState) {
            script_tag.onreadystatechange = function () { // For old versions of IE
                if (this.readyState == 'complete' || this.readyState == 'loaded') {
                    // localStorage.getItem('myData');
                    scriptLoadHandler();
                }
            };
        } else { // Other browsers
            script_tag.onload = scriptLoadHandler;
        }
        (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
    } else {
        jQuery = window.jQuery;
        // main(); //our main JS functionality
    }

    function addStyleString(str) {
        var node = document.createElement('style');
        node.innerHTML = str;
        document.body.appendChild(node);
    }

    function scriptLoadHandler() {
        jQuery = window.jQuery.noConflict(true);
        jQuery(document).ready(function ($) {
            //setup vars
            var $container = $('#widget-container');
            var widget = '<div class="brandbot-launcher-frame"> <div id="brandbot-icon-container"> <div class="brandbot-launcher"> <div class="brandbot-launcher-open-icon animate-shake"> <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 612.069 612.069" style="enable-background:new 0 0 612.069 612.069;" xml:space="preserve"> <g> <path fill="#fff" d="M540.947,57.384H71.053C31.861,57.384,0,89.176,0,128.436v281.95c0,39.192,31.792,71.053,71.053,71.053h49.607 l43.646,58.446c2.946,3.7,12.607,14.8,27.407,14.8c6.646,0,16.992-2.946,26.653-15.554l43.646-57.692h279.004 c39.192,0,71.053-31.792,71.053-71.053V129.122C611.932,89.929,580.139,57.384,540.947,57.384z M584.593,411.072 c0,24.392-20.007,43.646-43.646,43.646H254.543c-4.454,0-8.154,2.193-11.1,5.207l-47.346,63.653 c-2.946,3.7-4.454,4.454-4.454,4.454c-0.754,0-3.7-2.193-5.207-4.454l-47.346-63.653c-2.193-3.7-6.646-5.207-11.1-5.207H71.738 c-24.392,0-43.646-20.007-43.646-43.646v-281.95c0-24.392,20.007-43.646,43.646-43.646h469.894 c24.392,0,43.646,20.007,43.646,43.646v281.95H584.593z M498.74,272.666c0,7.4-5.892,13.292-13.292,13.292H125.045 c-7.4,0-13.292-5.892-13.292-13.292c0-7.4,5.893-13.292,13.292-13.292h360.403C492.848,258.62,498.74,264.581,498.74,272.666z M498.74,354.819c0,7.4-5.892,13.292-13.292,13.292H125.045c-7.4,0-13.292-5.893-13.292-13.292s5.893-13.292,13.292-13.292h360.403 C492.848,340.773,498.74,346.665,498.74,354.819z M110.999,191.267c0-7.4,5.893-13.292,13.292-13.292h216.79 c7.4,0,13.292,5.893,13.292,13.292s-5.893,13.292-13.292,13.292H125.045C117.645,205.382,110.999,198.667,110.999,191.267z"/> </g> </svg> </div><div class="brandbot-launcher-close-icon"> <svg width="14" height="14"><path fill="#FFF" d="M13.978 12.637l-1.341 1.341L6.989 8.33l-5.648 5.648L0 12.637l5.648-5.648L0 1.341 1.341 0l5.648 5.648L12.637 0l1.341 1.341L8.33 6.989l5.648 5.648z" fill-rule="evenodd"></path></svg> </div></div></div></div><div id="brandbot-container" style="position: fixed;width: 0px;height: 0px;bottom: 0px;right: 0px;z-index: 2147483647;"> <div data-reactroot="" class="brandbot-app brandbot-app-launcher-enabled"> <span> <div class="brandbot-messenger-frame"> <iframe style="width:300px" id="brandbot-frame" src="javascript:;" allowfullscreen="" name="brandbot-messenger-frame" title="Brandbot BG Chat" tabindex="0"> </iframe> </div><span> <div class="brandbot-gradient"></div></span> </span> </div></div>';
            //var styles = '#brandbot-container .brandbot-ap-launcher-enabled .brandbot-messenger-frame{bottom:calc(20px + 80px)}#brandbot-container .brandbot-messenger-frame{z-index:99!important;position:fixed!important;bottom:20px;right:20px;height:80%;width:376px!important;max-height:704px!important;-webkit-box-shadow:0 5px 40px rgba(0,0,0,.16)!important;box-shadow:0 5px 40px rgba(0,0,0,.16)!important;border-radius:8px!important;overflow:hidden!important;opacity:0}#brandbot-container .brandbot-messenger-frame>iframe{width:100%!important;height:100%!important;border:none}#brandbot-container .brandbot-messenger,#brandbot-container .brandbot-messenger-sheet{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;position:absolute;top:0;bottom:0;left:0;right:0}#brandbot-container .brandbot-messenger{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}#brandbot-container .brandbot-messenger-body{position:relative;-webkit-box-flex:1;-ms-flex:1;flex:1;background-color:#fff;-webkit-box-shadow:inset 0 21px 4px -20px rgba(0,0,0,.2);box-shadow:inset 0 21px 4px -20px rgba(0,0,0,.2)}#brandbot-icon-container .brandbot-launcher-open-icon{opacity:1;-webkit-transform:rotate(0) scale(1);transform:rotate(0) scale(1);margin:15px}#brandbot-icon-container .brandbot-launcher-close-icon,#brandbot-icon-container .intercom-launcher-open-icon{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;position:absolute;top:0;bottom:0;width:100%;-webkit-transition:opacity .08s linear,-webkit-transform .16s linear;transition:opacity .08s linear,-webkit-transform .16s linear;transition:transform .16s linear,opacity .08s linear;transition:transform .16s linear,opacity .08s linear,-webkit-transform .16s linear}.brandbot-launcher-active{opacity:1!important;-webkit-transform:rotate(0)!important;transform:rotate(0)!important}#brandbot-icon-container .brandbot-launcher-close-icon{opacity:0;-webkit-transform:rotate(-30deg);transform:rotate(-30deg)}#brandbot-icon-container .brandbot-launcher *{cursor:pointer}#brandbot-icon-container .brandbot-launcher{position:absolute;top:0;left:0;width:60px;height:60px;border-radius:50%;cursor:pointer;-webkit-transform-origin:center;transform-origin:center;-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden;font-family:intercom-font,"Helvetica Neue",Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}#brandbot-container .brandbot-gradient{z-index:2;position:fixed;width:500px;height:500px;bottom:0;right:0;content:"";pointer-events:none;background:radial-gradient(ellipse at bottom right,rgba(29,39,54,.16) 0,rgba(29,39,54,0) 72%);opacity:0}.brandbot-launcher-frame{z-index:2147483000!important;position:fixed!important;bottom:20px;right:20px;width:60px!important;height:60px!important;border-radius:50%!important;background:linear-gradient(178deg,#4dc1ff,#65bbf9,#2c62b7)!important}.animate-icon-hide{animation:hideRotate 1s forwards!important}.animate-shake{animation:shake .82s cubic-bezier(.36,.07,.19,.97) both}.animate-brandbot-open{animation:fadeInUp 1s forwards}.animate-gradient-close{animation:fadeOut .8s}.animate-brandbot-close{animation-name:fadeOutTop;animation-duration:.8s;height:0px!important}.gradient-show{animation:fadeIn 1s forwards}.animate-icon-show{animation:fadein 1s forwards}@keyframes hideRotate{from{opacity:1}to{opacity:0;-webkit-transform:rotate(-30deg);transform:rotate(-30deg)}}@keyframes fadein{from{opacity:0}to{opacity:1!important}}@keyframes fadeOut{from{opacity:1}to{opacity:0}}@keyframes fadeInUp{from{transform:translate3d(0,50px,0)}to{transform:translate3d(0,0,0);opacity:1}}@keyframes fadeOutTop{0%{opacity:1;-webkit-transform:translate(0,0);transform:translate(0,0)}100%{-webkit-transform:translate(0,-50px);transform:translate(0,-50px);opacity:0!important}}@keyframes shake{10%,90%{transform:translate3d(0,-1px,0)}20%,80%{transform:translate3d(0,2px,0)}30%,50%,70%{transform:translate3d(0,-4px,0)}40%,60%{transform:translate3d(0,4px,0)}}';
            var styles = '#brandbot-container .brandbot-app-launcher-enabled .brandbot-messenger-frame{bottom:calc(20px + 80px)}#brandbot-container .brandbot-messenger-frame{z-index:99!important;position:fixed!important;bottom:20px;right:20px;height:80%;width:376px!important;important;max-height:704px!important;-webkit-box-shadow:0 5px 40px rgba(0,0,0,.16)!important;box-shadow:0 5px 40px rgba(0,0,0,.16)!important;border-radius:8px!important;overflow:hidden!important;opacity:0}#brandbot-container .brandbot-messenger-frame>iframe{width:100%!important;height:100%!important;border:none}#brandbot-container .brandbot-messenger,#brandbot-container .brandbot-messenger-sheet{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;position:absolute;top:0;bottom:0;left:0;right:0}#brandbot-container .brandbot-messenger{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}#brandbot-container .brandbot-messenger-body{position:relative;-webkit-box-flex:1;-ms-flex:1;flex:1;background-color:#fff;-webkit-box-shadow:inset 0 21px 4px -20px rgba(0,0,0,.2);box-shadow:inset 0 21px 4px -20px rgba(0,0,0,.2)}#brandbot-icon-container .brandbot-launcher-open-icon{opacity:1;-webkit-transform:rotate(0) scale(1);transform:rotate(0) scale(1);margin:15px}#brandbot-icon-container .brandbot-launcher-close-icon,#brandbot-icon-container .intercom-launcher-open-icon{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;position:absolute;top:0;bottom:0;width:100%;-webkit-transition:opacity .08s linear,-webkit-transform .16s linear;transition:opacity .08s linear,-webkit-transform .16s linear;transition:transform .16s linear,opacity .08s linear;transition:transform .16s linear,opacity .08s linear,-webkit-transform .16s linear}.brandbot-launcher-active{opacity:1!important;-webkit-transform:rotate(0)!important;transform:rotate(0)!important}#brandbot-icon-container .brandbot-launcher-close-icon{opacity:0;-webkit-transform:rotate(-30deg);transform:rotate(-30deg)}#brandbot-icon-container .brandbot-launcher *{cursor:pointer}#brandbot-icon-container .brandbot-launcher{position:absolute;top:0;left:0;width:60px;height:60px;border-radius:50%;cursor:pointer;-webkit-transform-origin:center;transform-origin:center;-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden;font-family:intercom-font,"Helvetica Neue",Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}#brandbot-container .brandbot-gradient{z-index:2;position:fixed;width:500px;height:500px;bottom:0;right:0;content:"";pointer-events:none;background:radial-gradient(ellipse at bottom right,rgba(29,39,54,.16) 0,rgba(29,39,54,0) 72%);opacity:0}.brandbot-launcher-frame{z-index:2147483000!important;position:fixed!important;bottom:20px;right:20px;width:60px!important;height:60px!important;border-radius:50%!important;background:linear-gradient(178deg,#4dc1ff,#65bbf9,#2c62b7)!important}.animate-icon-hide{animation:hideRotate 1s forwards!important}.animate-shake{animation:shake .82s cubic-bezier(.36,.07,.19,.97) both}.animate-brandbot-open{animation:fadeInUp 1s forwards}.animate-gradient-close{animation:fadeOut .8s}.animate-brandbot-close{animation-name:fadeOutTop;animation-duration:.8s; height:0px!important}.gradient-show{animation:fadeIn 1s forwards}.animate-icon-show{animation:fadein 1s forwards}@keyframes hideRotate{from{opacity:1}to{opacity:0;-webkit-transform:rotate(-30deg);transform:rotate(-30deg)}}@keyframes fadein{from{opacity:0}to{opacity:1!important}}@keyframes fadeOut{from{opacity:1}to{opacity:0}}@keyframes fadeInUp{from{transform:translate3d(0,50px,0)}to{transform:translate3d(0,0,0);opacity:1}}@keyframes fadeOutTop{0%{opacity:1;-webkit-transform:translate(0,0);transform:translate(0,0)}100%{-webkit-transform:translate(0,-50px);transform:translate(0,-50px);opacity:0!important}}@keyframes shake{10%,90%{transform:translate3d(0,-1px,0)}20%,80%{transform:translate3d(0,2px,0)}30%,50%,70%{transform:translate3d(0,-4px,0)}40%,60%{transform:translate3d(0,4px,0)}}';

            /*
            console.log(sessionStorage.getItem('bgchat'));
            console.log('---------');
            var myData = JSON.parse(sessionStorage.getItem('bgchat'));
            if (myData == null) {
                myData = { "nombres": "USUARIO", "apellidos": "SIN-NOMBRE", "email": "no-email@no-email.com", "cedula": "0000000000", "producto": { "name": "Solicitud de Tarjeta", "code": "subject-1-CC" } };
            }

            if (myData.nombres == null || myData.nombres == "") {
                myData.nombres = "USUARIO";
            }
            if (myData.apellidos == null || myData.apellidos == "") {
                myData.apellidos = "SIN-NOMBRE"
            }
            if (myData.email == null || myData.email == "") {
                myData.email = "no-email@no-email.com";
            }
            if (myData.cedula == null || myData.cedula == "") {
                myData.cedula = "0000000000"
            }
            if (myData.producto == null || myData.producto == "") {
                myData.producto = { "name": "Solicitud de Tarjeta", "code": "subject-1-CC" }
            }*/

            var urlchat = 'https://trivia.brandbot.co/';
            //var urlchat = 'https://bg.brandbot.co/ada/bot?email=' + myData.email;
            //urlchat = urlchat + "&cedula=" + myData.cedula;
            //urlchat = urlchat + "&nombres=" + myData.nombres;
            //urlchat = urlchat + "&apellidos=" + myData.apellidos;
            //urlchat = urlchat + "&producto=" + myData.producto;

            $container.append(widget);
            addStyleString(styles);
            $('#brandbot-frame').attr('src', urlchat);

            $("#brandbot-icon-container").on("click", function () {
                if (!ChatToggle) {
                    $('.brandbot-messenger-frame').removeClass('animate-brandbot-close');
                    $('.brandbot-messenger-frame').addClass('animate-brandbot-open');

                    $('.brandbot-gradient').removeClass('animate-gradient-close');
                    $('.brandbot-gradient').addClass('animate-brandbot-open');

                    $('.brandbot-launcher-open-icon').removeClass('animate-gradient-close');
                    $('.brandbot-launcher-open-icon').addClass('animate-icon-hide');

                    $('.brandbot-launcher-close-icon').addClass('brandbot-launcher-active');
                    ChatToggle = true;

                } else {
                    $('.brandbot-messenger-frame').removeClass('animate-brandbot-open');
                    $('.brandbot-messenger-frame').addClass('animate-brandbot-close');

                    $('.brandbot-gradient').removeClass('animate-brandbot-open');
                    $('.brandbot-gradient').addClass('animate-gradient-close');

                    $('.brandbot-launcher-close-icon').removeClass('brandbot-launcher-active');
                    $('.brandbot-launcher-open-icon').removeClass('animate-icon-hide');
                    ChatToggle = false;
                }
            });
        });
    }
})();
