(function($){

	// slide menu up and down

		$('.nav-toggle').click(function(e){

			if ($('#primary-nav ul').is(':visible')){

				$('#primary-nav ul').not('#primary-nav ul ul').slideUp(400, function(){ $('#primary-nav ul').removeAttr('style'); });

				$('a',this).removeClass('open').text('Open Navigation');
			} else {
				$('#primary-nav ul').not('#primary-nav ul ul').slideDown(400);

				$('a',this).addClass('open').text('Close Navigation');
		}
			e.preventDefault();
			});

	$('#primary-nav ul li').each(function(){

		if($(this).has("ul").length){

			$(this).append('<span>▼</span>');

			$('span',this).click(function(){

				if ($('#primary-nav ul ul').is(':visible')){

					$('#primary-nav ul li.open').removeClass('open').find('span').text('▼').parent().find('ul').slideUp(300);
				}

				if ($(this).parent().find('ul').is(':visible')){

					$(this).text('▼').parent().find('ul').slideUp(300, function(){ $('#primary-nav ul ul').removeAttr('style'); });

					$(this).parent().removeClass('open');

				} else {

					$(this).text('▲').parent().find('ul').slideDown(300);

					$(this).parent().addClass('open');
				}
			});
		}
	});

// SLIDE ASIDE DRAWER UP AND DOWN



		$('.aside-toggle').click(function(e){

			if ($('.aside-drawer').is(':visible')){

				$('.aside-drawer').slideUp(400);

				$('a',this).text('Open Filters');

			} else {

				$('.aside-drawer').slideDown(400);

				$('a',this).text('Close Filters');
		}
			e.preventDefault();
			});


		$('.scrollable').click(function(e){
			e.preventDefault();
			var id = $(this).attr('href');
				$('html,body').animate({scrollTop: $(id).offset().top},'slow');
			e.preventDefault();
		});
	})(jQuery);
