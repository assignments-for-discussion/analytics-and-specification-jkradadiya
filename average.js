
function average(numbers) {
  var numbers = numbers.filter(function(val) {
    return !isNaN(val);
  });
  return numbers.reduce((p, c)=>   p + c, 0) / numbers.length;
}

module.exports = {average};
