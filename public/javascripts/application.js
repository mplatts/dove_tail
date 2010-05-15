// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
$(document).ready(function(){ 
  jQuery(function(){
          $('ul.nav').superfish();
        });
  var contact = $('#contact');
  var home = $('#home');
  var hometext = $('#hometext');
  var contacttext = $('#contacttext');
  
  contacttext.hide();
  
  contact.click(function(){
    home.parent().removeClass('current');
    contact.parent().addClass('current');
    hometext.hide();
    contacttext.show();
  });
  
  home.click(function(){
    contact.parent().removeClass('current');
    home.parent().addClass('current');
    hometext.show();
    contacttext.hide();
  });
  
  /* ANALYTICS */
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-16411086-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
});
