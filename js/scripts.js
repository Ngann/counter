// Working with RegExp
// $(document).ready(function(){
//   $("form").submit(function(event){
//     var inputString = $("input#sentence").val();
//     var stringArray = inputString.split('');
//     var replaceVowel = inputString.replace(/[aeiou]/gi,'-');
//
//     vowels.forEach(function(vowel){
//
//     })
//     $(".output").text(replaceVowel);
//     event.preventDefault();
//     });
//   });

// Working with forEach and long if statment
// var removeVowels = function(string) {
//   var outputArray = [];
//   var stringLetters = string.split('');
//   var vowels = ['a', 'e', 'i', 'o', 'u']
//   stringLetters.forEach(function(letter) {
//     // vowels.forEach(function(vowel) {
//       if (letter === "e" || letter === "o" || letter === "i") {
//          letter = '-' ;
//       }
//       outputArray.push(letter)
//     // })
//   })
//   var outputString = outputArray.join('');
//   return outputString;
// }
//
// $(document).ready(function() {
//   $("form").submit(function(event){
//     event.preventDefault(event);
//     // var inputString = $("input#sentence").val();
//     var result = removeVowels($("input#sentence").val());
//     console.log(result);
//
//   })
// })

// ForEach using inludes method
$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault(event);

    var inputString = $("input#sentence").val();
    var removeVowels = function(string) {
      var outputArray = [];
      var stringLetters = string.split('');
      var vowels = ['a', 'e', 'i', 'o', 'u'];
      stringLetters.forEach(function(letter) {
        if (vowels.includes(letter) === false) {
          outputArray.push(letter);
        }
        if (vowels.includes(letter) === true) {
          outputArray.push('-');

        }
      })
      return outputArray.join('');
    }

    var result = removeVowels(inputString);
    console.log(result);
  })
})
