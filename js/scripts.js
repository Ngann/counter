// var countToNumber = parseInt($("input#countToNumber").val());
// var countByNumber = parseInt($("input#countByNumber").val());


// var counter = function() {
//   var countedNums = [];
//   var total = 0;
//   for (var i = 0; i <= countToNumber; i++) {
//     total += countByNumber;
//     countedNums.push(total);
//   }
//   return countedNums;
// }


$(document).ready(function() {
  $("form").submit(function(event) {
    var countToNumber = parseInt($("input#countToNumber").val());
    var countByNumber = parseInt($("input#countByNumber").val());

    var counter = function() {
      var countedNums = [];
      var total = 0;
      for (var i = 0; i <= (countToNumber/countByNumber) - 1; i++) {
        total += countByNumber;
        countedNums.push(total);
      }
      return countedNums;
    }

    $(".output").append(counter().join(", "));
    // $(".output").text(countByNumber);
    console.log(countByNumber);
    event.preventDefault();
  });
});
