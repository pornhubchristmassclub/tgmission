$(document).ready(function() {
    $('.form-select').select2();
});



$(document).ready(function() {
    var table = $('#example').DataTable( {
        rowReorder: {
            selector: 'td:nth-child(2)'
        },
        responsive: true
    } );
} );



$(document).ready(function() {
    $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})






$(window).on('load', function() {
	// Check all tables. You may need to be more restrictive.
	$('table').each(function() {
		var element = $(this);
		// Create the wrapper element
		var scrollWrapper = $('<div />', {
			'class': 'scrollable',
			'html': '<div />' // The inner div is needed for styling
		}).insertBefore(element);
		// Store a reference to the wrapper element
		element.data('scrollWrapper', scrollWrapper);
		// Move the scrollable element inside the wrapper element
		element.appendTo(scrollWrapper.find('div'));
		// Check if the element is wider than its parent and thus needs to be scrollable
		if (element.outerWidth() > element.parent().outerWidth()) {
			element.data('scrollWrapper').addClass('has-scroll');
		}
		// When the viewport size is changed, check again if the element needs to be scrollable
		$(window).on('resize orientationchange', function() {
			if (element.outerWidth() > element.parent().outerWidth()) {
				element.data('scrollWrapper').addClass('has-scroll');
			} else {
				element.data('scrollWrapper').removeClass('has-scroll');
			}
		});
	});
});