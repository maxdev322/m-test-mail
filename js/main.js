$(document).ready(function() {
    $(".news__slider.owl-carousel").owlCarousel({
        dots: true,
        margin: 10,
        center: true,
        responsive:{ //Адаптация в зависимости от разрешения экрана
            0:{
                items:1
            },
            600:{
                items:1,
                center: false,
            },
            1000:{
                items:3
            }
        }
    });

    $(".prices__list.owl-carousel").owlCarousel({
        dots: true,
        margin: 10,
        
        navText: ["<img src='./images/prev_btn.png'>","<img src='./images/next_btn.png'>"],
        center: true,
        loop: true,
        responsive:{ //Адаптация в зависимости от разрешения экрана
            0:{
                items:1
            },
            600:{
                items:1,
                center: false,
            },
            1000:{
                items:3,    
                nav: true,
            }
        }
    });

    $(".gym__slider.owl-carousel").owlCarousel({
        dots: true,
        margin: 10,
        navText: ["<img src='./images/prev_btn.png'>","<img src='./images/next_btn.png'>"],
        center: true,
        loop: true,
        responsive:{ //Адаптация в зависимости от разрешения экрана
            0:{
                items:1 
            },
            600:{
                items:1,
            },
            1000:{
                items:1,
                nav: true,
            }
        }
    });
    
    // $('.dir_menu_list').click(function() {
    //     $('.hide_links').removeClass('hide')
    // })

    // $('.dir_menu_list').click(function() {
    //     $('.hide_links').removeClass('hide')
    // })

    // $(document).mouseup( function(e){ // событие клика по веб-документу
	// 	let menuWrap = $(".hide_links"); // тут указываем ID элемента
	// 	if ( !menuWrap.is(e.target)) { // и не по его дочерним элементам
	// 		menuWrap.addClass('hide') // скрываем его
	// 	}
	// });

    $(".menuToggle").click(function() {
        $(this).toggleClass("active");
        $('.header_top__ul').slideToggle(300, function(){
          if($(this).css('display') === "none"){
            $(this).removeAttr('style');
          }
        });
      });
    
    $('.header_top__item>a').click(function () {
        $(".menuToggle").toggleClass("active")
        $('.header_top__ul').slideToggle(300, function(){
            if($(this).css('display') === "none"){
              $(this).removeAttr('style');
            }
          });
    })

    $('.faq__content_item_showed').click(function () {
        $(this).next().toggleClass('hide');
        $(this).children('img').toggleClass('reverse')
    })

    $(window).scroll(function() {
        let placHeight = $('.header_top').height() + 40;
        if($(this).scrollTop() > 0) {
            $('.header_top').addClass('stickytop');
            $('.header_top_plac').css({
                height: placHeight,
                marginBottom: 175
            });
            $('.hamburger').addClass('scroll_js')
            $('.header_top__logotel').addClass('scroll_top_tel')
            $('.header_top__logotel svg path').addClass('tel_icon__scroll')
            $('.header_top__ul a').addClass('scroll_text_color')
        }
        else{
            $('.header_top').removeClass('stickytop');
            $('.header_top_plac').css({
                height: 0,
                marginBottom: 0
            });
            $('.hamburger').removeClass('scroll_js')
            $('.header_top__logotel').removeClass('scroll_top_tel')
            $('.header_top__logotel svg path').removeClass('tel_icon__scroll')
            $('.header_top__ul a').removeClass('scroll_text_color')
        }
    });

    $('.modal_content__close').click(function() {
        $('#modal_video').get(0).pause();
		$(this).parents('.modal_back').hide();
        
		return false;
	});        
 
	// Закрытие по клавише Esc.
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.modal_back').hide();
            $('#modal_video').get(0).pause();
		}
	});
	
	// Клик по фону, но не по окну.
	$('.modal_back').click(function(e) {
		if ($(e.target).closest('.modal_content').length == 0) {
			$(this).hide();
            $('#modal_video').get(0).pause();					
		}
	});

    $('.invite__content_right_inv_btn').click(function() {
		$('.modal_back').show();
		return false;
	});

    
    if ($(window).width()<800) {
        $('.main_contacts').removeClass('hide')
        $('.desc_contacts').addClass('hide')
        $('.header_top__desc_tel').addClass('hide')
    }else{
        $('.main_contacts').addClass('hide')
        $('.desc_contacts').removeClass('hide')
        $('.header_top__desc_tel').removeClass('hide')
    }

    // отправка формы

    $("form").submit(function () {
        // Получение ID формы
        var formID = $(this).attr('id');
        // Добавление решётки к имени ID
        var formNm = $('#' + formID);
        $.ajax({
            type: "POST",
            url: './send.php',
            data: formNm.serialize(),
            beforeSend: function () {
                // Вывод текста в процессе отправки
                $(formNm).html('<p style="text-align:center">Отправка...</p>');
            },
            success: function (data) {
                // Вывод текста результата отправки
                $(formNm).html('<p style="text-align:center">'+data+'</p>');
            },
            error: function (jqXHR, text, error) {
                // Вывод текста ошибки отправки
                $(formNm).html(error);
            }
        });
        return false;
    });

    // let name = $('input[name=form_name]').val();
    // let tel = $('input[name=form_tel]').val();
    // let mw = $('input[name=form__inputs_gender]').val();
    // let direct = $('select[name=form_inputs_direct]').val()
    // let age = $('input[name=form_age]')
    // let otpravka = true;
    // if(name==""){
    //     otpravka = false;
    // }
    // if(tel ==""){
    //     otpravka = false;
    // }
    // if(mw ==""){
    //     otpravka = false;
    // }
    // if(direct =="" || direct =="Неопределено"){
    //     otpravka = false;
    // }
    // if(age ==""){
    //     otpravka = false;
    // }

    // formDann = {
    //     'user_name': name,
    //     'user_tel': tel,
    //     'user_mw': mw,
    //     'user_direct': direct,
    //     'user_age': age,
    // };

    // if(otpravka){
    //     $.post('send.php', formDann, function(feedBack){
    //     formResult = '<div>'+feedBack.text+'</div>';
    //     $("#form_result").hide().html(formResult).slideDown();
    //     }, 'json');
    // }
});