
function compare() {
  var comparison;
  var a = $('#a').val();
  var b = $('#b').val();

  if (a < b) {
    comparison = '<';
  } else if (a > b) {
    comparison = '>';
  } else if (a === b) {
    comparison = '===';
  } else{
    comparison = 'N/A';
  }
  
 $('#comparison').html(comparison);
}

$('#submit').click(compare);