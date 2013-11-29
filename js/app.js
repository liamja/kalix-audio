$(document).foundation();


$(document).ready(function (){
  
  // Email obfuscation
  var convert, emailElement, part1, part2;
  part1 = 'abcdefghijklm@.';
  part2 = 'nopqrstuvwxyz@.';
  convert = function(text) {
    var i, index, output, _i, _ref;
    output = "";
    for (i = _i = 0, _ref = text.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
      index = part1.indexOf(text.charAt(i));
      if (index !== -1) {
        output += part2.charAt(index);
      } else {
        index = part2.indexOf(text.charAt(i));
        output += part1.charAt(index);
      }
    }
    return output;
  };
  emailElement = document.getElementById('email');
  emailElement.innerHTML = convert(emailElement.innerHTML);
  $(emailElement).attr('href', 'mailto:' + emailElement.innerHTML);
});
