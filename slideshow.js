jQuery(function($) {
	// settings
	var animationDuration   = 1000,
		singleSlideDuration = 4000;

	var $lists = $('ul.slideshow'),
		timer;

	var next = function () {
		if (timer) {
			clearTimeout(timer);
			timer = null;
		}

		$lists.each(function () {
			var $list    = $(this),
				$current = $list.find('li.active:first'),
				$next    = $current.next();

			// wrap-around if we've reached the last element
			if ($next.length === 0) {
				$next = $list.find('li:first');
			}

			$current.fadeOut(animationDuration);
			$next.fadeIn(animationDuration, function () {
				$next.addClass('active');
				$current.removeClass('active');
				timer = setTimeout(next, singleSlideDuration);
			});
		});
	};

	$lists.click(next);
	timer = setTimeout(next, singleSlideDuration);
});
