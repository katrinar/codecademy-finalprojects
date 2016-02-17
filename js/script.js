$(document).ready(function() {
  $('.robot').click(function(){
    $('#nameBox').show();
      $('#robotClick').hide();
  });
  $('#playButton').click(function() {
    var userName = $('input[name=firstname]').val();
      $('#intro-name').append('<div id="intro-name">' + "hi " + userName + ", Welcome to Janguru. You are the CHOSEN ONE. " + setup.greeting + " Click me on the desert or forest to continue" +'</div>');	
        	$('#nameBox').hide();
          $('#location-option').show();
        });

  $('form').keypress(function (e) {
  if (e.which == 13) {
    var userName = $('input[name=firstname]').val();
      $('#intro-name').append('<div id="intro-name">' + "hi " + userName + ", Welcome to Janguru. You are the CHOSEN ONE. " + setup.greeting + " Click me on the desert or forest to continue" +'</div>');  
          $('#nameBox').hide();
          $('#location-option').show();
    return false;  
  }
});

   $(".jungle").click(function(){
      $('#location-option').hide();
      $("#intro-name").hide();
      $("#intro-location").append('<div id="intro-location">' + locations.junglespray + '</div>');
      $("#weapon-bugspray").show();
   }); 

    $(".desert").click(function(){
      $('#location-option').hide();
      $("#intro-name").hide();
      $("#intro-location").append('<div id="intro-location">' + locations.desertlizard + '</div>');
      $("#weapon-lizard").show();
   }); 
     

    });

