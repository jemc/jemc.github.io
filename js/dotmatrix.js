
function randomColor() {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
    color += letters[Math.round(Math.random() * 2)+i+4];
  }
  return color;
}

setInterval(function() {
  $('.dotmatrixdot').each(function(index, dot) {
    $(dot).css('background', randomColor());
  });
}, 80);

function setupDotMatrices() {
  var approxWidth = 25;
  var dotMargin = 1;
  var dotRadius = 5;
  var docWidth = $('.dotmatrix').width();
  
  var numberOfRows = 2;
  var numberOfColumns = Math.round(docWidth / approxWidth);
  var dotSize = docWidth / numberOfColumns - dotMargin * 2;
  
  $('.dotmatrix').empty();
  
  for(var i=0; i<numberOfRows; i++)
    $('.dotmatrix').append('<div class="dotmatrixrow"></div>');
  
  for(var i=0; i<numberOfColumns; i++)
    $('.dotmatrixrow').append('<div class="dotmatrixdot"></div>');
  
  $('.dotmatrixdot').width(dotSize);
  $('.dotmatrixdot').height(dotSize);
  $('.dotmatrixdot').css('float', 'left');
  $('.dotmatrixdot').css('background', '#ffffff');
  $('.dotmatrixdot').css('border-radius', dotRadius);
  $('.dotmatrixdot').css('margin', dotMargin);
  $('.dotmatrixrow').css('margin-top', dotMargin-4);
  $('.dotmatrixrow').css('margin-bottom', dotMargin-4);
  $('.dotmatrixrow').css('width', '100%');
  $('.dotmatrix').css('width', '100%');
}

setupDotMatrices();

$(window).resize(function() { setupDotMatrices(); });
