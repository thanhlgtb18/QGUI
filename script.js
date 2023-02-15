window.ladi_viewport = function () {var screen_width = window.ladi_screen_width || window.screen.width;var width = window.outerWidth > 0 ? window.outerWidth : screen_width;var widthDevice = width;var is_desktop = width >= 768;var content = "";if (typeof window.ladi_is_desktop == "undefined" || window.ladi_is_desktop == undefined) {window.ladi_is_desktop = is_desktop;}if (!is_desktop) {widthDevice = 420;} else {widthDevice = 960;}content = "width=" + widthDevice + ", user-scalable=no";var scale = 1;if (!is_desktop && widthDevice != screen_width && screen_width > 0) {scale = screen_width / widthDevice;}if (scale != 1) {content += ", initial-scale=" + scale + ", minimum-scale=" + scale + ", maximum-scale=" + scale;}var docViewport = document.getElementById("viewport");if (!docViewport) {docViewport = document.createElement("meta");docViewport.setAttribute("id", "viewport");docViewport.setAttribute("name", "viewport");document.head.appendChild(docViewport);}docViewport.setAttribute("content", content);};window.ladi_viewport();window.ladi_fbq_data = [];window.ladi_fbq = function (track_name, conversion_name, data, event_data) {window.ladi_fbq_data.push([track_name, conversion_name, data, event_data]);};


    document.getElementsByClassName('hlgascheck')[0].addEventListener('click', function (event) {

        jQuery(".checkTrue").show();
        jQuery(".checkFalse").show();

        var maso1 = document.getElementById("<%= txtMaSo1.ClientID %>").value;
        var maso2 = document.getElementById("<%= txtMaSo2.ClientID %>").value;
        var maso3 = document.getElementById("<%= txtMaSo3.ClientID %>").value;
        var maso4 = document.getElementById("<%= txtMaSo4.ClientID %>").value;

        var makichhoat = maso1 + maso2 + maso3 + maso4;
        var link = window.location.href;
        link = link.replace("http", "");
        link = link.replace("://1qr.hlgas.vn/", "");
        link = link.replace("&makichhoat" + makichhoat, "");

        //link = link.replace("https://", "");
        //link = link.replace("localhost:44338/", "");

        // Kiểm tra mã kích hoạt
        jQuery.post("/Views/Hander/hdAjax.ashx?action=checkQR&link=" + link + "&makichhoat=" + makichhoat, function (result) {

            if (result.length < 10) {

                jQuery(".checkTrue").show();
                jQuery(".checkFalse").css("display", "none");
            }
            else {
                
                jQuery(".checkTrue").css("display", "none");
                jQuery(".checkFalse").show();
            }

        });
    });

    function inputActivationCode1() {
        var maso1 = document.getElementById("<%= txtMaSo1.ClientID %>");
        var maso2 = document.getElementById("<%= txtMaSo2.ClientID %>");

        if (maso1.value.length == "1") {
            maso2.focus();
        }
        //else if (maso2.value.length == "1") {
        //    maso3.focus();
        //}
        //else if (maso3.value.length == "1") {
        //    maso4.focus();
        //}
        //else if (maso4.value.length == "1") {
        //    //maso4.focus();
        //}
    }

    function inputActivationCode2() {
        var maso2 = document.getElementById("<%= txtMaSo2.ClientID %>");
        var maso3 = document.getElementById("<%= txtMaSo3.ClientID %>");

        if (maso2.value.length == "1") {
            maso3.focus();
        }
    }

    function inputActivationCode3() {
        var maso3 = document.getElementById("<%= txtMaSo3.ClientID %>");
        var maso4 = document.getElementById("<%= txtMaSo4.ClientID %>");

        if (maso3.value.length == "1") {
            maso4.focus();
        }
    }

    function inputActivationCode4() {

    }


    function ShowPoupop() {

        var maso1 = document.getElementById("<%= txtMaSo1.ClientID %>").value;
        var maso2 = document.getElementById("<%= txtMaSo2.ClientID %>").value;
        var maso3 = document.getElementById("<%= txtMaSo3.ClientID %>").value;
        var maso4 = document.getElementById("<%= txtMaSo4.ClientID %>").value;

        var makichhoat = maso1 + maso2 + maso3 + maso4;

        if (makichhoat.length > 3 && maso4.length > 0) {
            //$('.showPopup').css("display", "none");
            //jQuery(".checkTrue").css("display", "none");
            //jQuery(".checkFalse").css("display", "none");
        }

        //setTimeout(ShowPoupop, 6000);
    }
    //ShowPoupop();


(function () {
        var style_lazyload = document.getElementById('style_lazyload'); var docEventScroll = window; var list_element_lazyload = document.querySelectorAll('.ladi-section-background, .ladi-image-background, .ladi-button-background, .ladi-headline, .ladi-video-background, .ladi-countdown-background, .ladi-box, .ladi-frame-background, .ladi-banner, .ladi-form-item-background, .ladi-gallery-view-item, .ladi-gallery-control-item, .ladi-spin-lucky-screen, .ladi-spin-lucky-start, .ladi-form-label-container .ladi-form-label-item.image, .ladi-list-paragraph ul li'); for (var i = 0; i < list_element_lazyload.length; i++) {
            var rect = list_element_lazyload[i].getBoundingClientRect(); if (rect.x == "undefined" || rect.x == undefined || rect.y == "undefined" || rect.y == undefined) { rect.x = rect.left; rect.y = rect.top; } var offset_top = rect.y + window.scrollY; if (offset_top >= window.scrollY + window.innerHeight || window.scrollY >= offset_top + list_element_lazyload[i].offsetHeight) { list_element_lazyload[i].classList.add('ladi-lazyload'); }
        } if (typeof style_lazyload != "undefined" && style_lazyload != undefined) { style_lazyload.parentElement.removeChild(style_lazyload); } var currentScrollY = window.scrollY; var stopLazyload = function (event) {
            if (event.type == "scroll" && window.scrollY == currentScrollY) { currentScrollY = -1; return; } docEventScroll.removeEventListener('scroll', stopLazyload); list_element_lazyload = document.getElementsByClassName('ladi-lazyload'); while (list_element_lazyload.length > 0) { list_element_lazyload[0].classList.remove('ladi-lazyload'); }
        }; var scrollEventPassive = null; try {
            var opts = Object.defineProperty(
                {}, 'passive',
                {
                    get: function () {
                        scrollEventPassive =
                        { passive: true };
                    }
                }); window.addEventListener('testPassive', null, opts); window.removeEventListener('testPassive', null, opts);
        } catch (e) { } docEventScroll.addEventListener('scroll', stopLazyload, scrollEventPassive);
    })();


(function () {
            var run = function () {
            if (typeof window.LadiPageScript == "undefined" || window.LadiPageScript == undefined || typeof window.ladi == "undefined" || window.ladi == undefined) { setTimeout(run, 100); return; } window.LadiPageApp = window.LadiPageApp || new window.LadiPageAppV2(); window.LadiPageScript.runtime.ladipage_id = '5f23e56400edcd386abf1cc7'; window.LadiPageScript.runtime.publish_platform = 'LADIPAGEDNS'; window.LadiPageScript.runtime.isMobileOnly = false; window.LadiPageScript.runtime.DOMAIN_SET_COOKIE = ["1qr.vn"]; window.LadiPageScript.runtime.DOMAIN_FREE = []; window.LadiPageScript.runtime.bodyFontSize = 12; window.LadiPageScript.runtime.store_id = "5e99c06df16f4f5ac3910977"; window.LadiPageScript.runtime.time_zone = 7; window.LadiPageScript.runtime.currency = "VND"; window.LadiPageScript.runtime.convert_replace_str = true; window.LadiPageScript.runtime.desktop_width = 960; window.LadiPageScript.runtime.mobile_width = 420; window.LadiPageScript.runtime.eventData = "%7B%22SECTION_POPUP%22%3A%7B%22type%22%3A%22section%22%2C%22desktop.option.background-style%22%3A%22solid%22%2C%22mobile.option.background-style%22%3A%22solid%22%7D%2C%22SECTION296%22%3A%7B%22type%22%3A%22section%22%2C%22option.event_custom_script%22%3A%22%3Ca%20href%3D%5C%22tel%3A0862732222%5C%22%3E08%206273%202222%3C%2Fa%3E%22%2C%22desktop.option.background-style%22%3A%22image%22%2C%22mobile.option.background-style%22%3A%22image%22%7D%2C%22SECTION278%22%3A%7B%22type%22%3A%22section%22%2C%22desktop.option.background-style%22%3A%22solid%22%2C%22mobile.option.background-style%22%3A%22solid%22%7D%2C%22HEADLINE298%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22PARAGRAPH302%22%3A%7B%22type%22%3A%22paragraph%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22PARAGRAPH303%22%3A%7B%22type%22%3A%22paragraph%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22PARAGRAPH312%22%3A%7B%22type%22%3A%22paragraph%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22HEADLINE281%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22HEADLINE287%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22PARAGRAPH294%22%3A%7B%22type%22%3A%22paragraph%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22PARAGRAPH295%22%3A%7B%22type%22%3A%22paragraph%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22IMAGE299%22%3A%7B%22type%22%3A%22image%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22PARAGRAPH328%22%3A%7B%22type%22%3A%22paragraph%22%2C%22option.conversion_name%22%3A%22button%20click%22%2C%22option.event_custom_script%22%3A%22%3Ca%20href%3D%5C%22tel%3A0913332355%5C%22%3E0913332355%3C%2Fa%3E%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22BUTTON_TEXT329%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22BUTTON329%22%3A%7B%22type%22%3A%22button%22%2C%22option.data_action%22%3A%7B%22type%22%3A%22phone%22%2C%22action%22%3A%220906173866%22%7D%2C%22option.is_submit_form%22%3Afalse%2C%22option.is_buy_now%22%3Afalse%2C%22option.data_setting.type_dataset%22%3A%22COLLECTION%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22HEADLINE399%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22HEADLINE404%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22HEADLINE405%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22HEADLINE441%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22IMAGE440%22%3A%7B%22type%22%3A%22image%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22POPUP437%22%3A%7B%22type%22%3A%22popup%22%2C%22desktop.option.popup_position%22%3A%22default%22%2C%22desktop.option.popup_backdrop%22%3A%22background-color%3A%20rgba(0%2C%200%2C%200%2C%200.5)%3B%22%2C%22mobile.option.popup_position%22%3A%22default%22%2C%22mobile.option.popup_backdrop%22%3A%22background-color%3A%20rgba(0%2C%200%2C%200%2C%200.5)%3B%22%7D%2C%22HEADLINE477%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22PARAGRAPH481%22%3A%7B%22type%22%3A%22paragraph%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22PARAGRAPH482%22%3A%7B%22type%22%3A%22paragraph%22%2C%22option.conversion_name%22%3A%22button%20click%22%2C%22option.event_custom_script%22%3A%22%3Ca%20href%3D%5C%22tel%3A0913332355%5C%22%3E0913332355%3C%2Fa%3E%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22PARAGRAPH483%22%3A%7B%22type%22%3A%22paragraph%22%2C%22option.conversion_name%22%3A%22button%20click%22%2C%22option.event_custom_script%22%3A%22%3Ca%20href%3D%5C%22tel%3A0913332355%5C%22%3E0913332355%3C%2Fa%3E%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22PARAGRAPH484%22%3A%7B%22type%22%3A%22paragraph%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22PARAGRAPH485%22%3A%7B%22type%22%3A%22paragraph%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22PARAGRAPH486%22%3A%7B%22type%22%3A%22paragraph%22%2C%22option.conversion_name%22%3A%22button%20click%22%2C%22option.event_custom_script%22%3A%22%3Ca%20href%3D%5C%22tel%3A0913332355%5C%22%3E0913332355%3C%2Fa%3E%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22FORM496%22%3A%7B%22type%22%3A%22form%22%2C%22option.form_config_id%22%3A%225f564e390a159f159468a8e8%22%2C%22option.form_send_ladipage%22%3Afalse%2C%22option.thankyou_type%22%3A%22default%22%2C%22option.thankyou_value%22%3A%22C%E1%BA%A3m%20%C6%A1n%20b%E1%BA%A1n%20%C4%91%C3%A3%20quan%20t%C3%A2m!%22%2C%22option.form_auto_funnel%22%3Atrue%2C%22option.form_captcha%22%3Atrue%2C%22option.form_auto_complete%22%3Atrue%2C%22option.is_form_coupon%22%3Afalse%2C%22option.is_form_login%22%3Afalse%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22BUTTON497%22%3A%7B%22type%22%3A%22button%22%2C%22option.is_submit_form%22%3Afalse%2C%22option.is_buy_now%22%3Afalse%2C%22option.data_setting.type_dataset%22%3A%22COLLECTION%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22BUTTON_TEXT497%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22FORM_ITEM502%22%3A%7B%22type%22%3A%22form_item%22%2C%22option.input_type%22%3A%22number%22%2C%22option.input_tabindex%22%3A2%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22FORM_ITEM504%22%3A%7B%22type%22%3A%22form_item%22%2C%22option.input_type%22%3A%22number%22%2C%22option.input_tabindex%22%3A2%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22FORM_ITEM505%22%3A%7B%22type%22%3A%22form_item%22%2C%22option.input_type%22%3A%22number%22%2C%22option.input_tabindex%22%3A3%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22FORM_ITEM506%22%3A%7B%22type%22%3A%22form_item%22%2C%22option.input_type%22%3A%22number%22%2C%22option.input_tabindex%22%3A4%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22IMAGE521%22%3A%7B%22type%22%3A%22image%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22HEADLINE522%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22HEADLINE523%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22POPUP516%22%3A%7B%22type%22%3A%22popup%22%2C%22desktop.option.popup_position%22%3A%22default%22%2C%22desktop.option.popup_backdrop%22%3A%22background-color%3A%20rgba(0%2C%200%2C%200%2C%200.5)%3B%22%2C%22mobile.option.popup_position%22%3A%22default%22%2C%22mobile.option.popup_backdrop%22%3A%22background-color%3A%20rgba(0%2C%200%2C%200%2C%200.5)%3B%22%7D%2C%22HEADLINE529%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_action%22%3A%7B%22type%22%3A%22phone%22%2C%22action%22%3A%2202033825320%22%7D%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22HEADLINE532%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22HEADLINE533%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_action%22%3A%7B%22type%22%3A%22phone%22%2C%22action%22%3A%2202033586366%22%7D%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22HEADLINE536%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22HEADLINE537%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_action%22%3A%7B%22type%22%3A%22phone%22%2C%22action%22%3A%2202033664616%22%7D%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22HEADLINE539%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22HEADLINE540%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_action%22%3A%7B%22type%22%3A%22phone%22%2C%22action%22%3A%220354566999%22%7D%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22HEADLINE542%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22HEADLINE543%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_action%22%3A%7B%22type%22%3A%22phone%22%2C%22action%22%3A%2202033%20515178%22%7D%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22HEADLINE545%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22HEADLINE546%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_action%22%3A%7B%22type%22%3A%22phone%22%2C%22action%22%3A%2202033%20822022%22%7D%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22HEADLINE548%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22HEADLINE549%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_action%22%3A%7B%22type%22%3A%22phone%22%2C%22action%22%3A%2202033858082%22%7D%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22HEADLINE551%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22HEADLINE552%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_action%22%3A%7B%22type%22%3A%22phone%22%2C%22action%22%3A%2202033%20611588%22%7D%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22HEADLINE554%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22HEADLINE555%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_action%22%3A%7B%22type%22%3A%22phone%22%2C%22action%22%3A%2202033839188%22%7D%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22HEADLINE557%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22HEADLINE558%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_action%22%3A%7B%22type%22%3A%22phone%22%2C%22action%22%3A%2202033%20831958%22%7D%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22HEADLINE560%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22HEADLINE561%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_action%22%3A%7B%22type%22%3A%22phone%22%2C%22action%22%3A%220913%20811%20396%22%7D%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22HEADLINE563%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22HEADLINE564%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_action%22%3A%7B%22type%22%3A%22phone%22%2C%22action%22%3A%220913%20811%20396%22%7D%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22HEADLINE566%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22HEADLINE567%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_action%22%3A%7B%22type%22%3A%22phone%22%2C%22action%22%3A%220913%20811%20396%22%7D%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22HEADLINE569%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22HEADLINE570%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_action%22%3A%7B%22type%22%3A%22phone%22%2C%22action%22%3A%220913%20811%20396%22%7D%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22HEADLINE572%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22HEADLINE573%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_action%22%3A%7B%22type%22%3A%22phone%22%2C%22action%22%3A%220913%20811%20396%22%7D%2C%22option.data_setting.sort_name%22%3A%22created_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%7D"; window.LadiPageScript.run(true); window.LadiPageScript.runEventScroll();
            }; run();
        })();