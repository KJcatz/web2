
(function( $ ) {
	$(function() {
		$( ".buttonNumber1" ).click(function() {
			$( ".boxPackage" ).addClass( "off" );
      $( ".narrow" ).addClass( "off" );
      $(".buttonNumber1Top").hide();
      $(this).addClass( "clicking");
		});
		$( ".clicking" ).click(function() {
			$( ".boxPackage" ).removeClass( "off" );
      $('.buttonNumber1Top').show();
		});
	});
})( jQuery );

(function( $ ) {
	$(function() {
		$( ".buttonNumber2" ).click(function() {
			$( ".boxPackage" ).addClass( "stamp" );
      $( ".stamper" ).addClass( "clicked" );
      $(".buttonNumber2Top").hide();
      $(this).addClass( "clicking2");
		});
		$( ".buttonNumber2.clicking2" ).click(function() {
			$( ".boxPackage" ).removeClass( "stamp" );
      $(this).show();
		});
	});
})( jQuery );

(function( $ ) {
	$(function() {
		$( ".stamper" ).click(function() {
			$( ".boxPackage" ).addClass( "stamp" );
      $(".buttonNumber2Top").hide();
      $(this).addClass( "clicking2");
		});
	});
})( jQuery );
