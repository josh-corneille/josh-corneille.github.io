/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$('#translateInput').keyup(function () {
    var og_text = $('#translateInput').val();
    $('#translatedText').empty();
    $('#translatedText').append(og_text);
});

$('#dwarven').click(function () {
    $('#translatedText').css('font-family', 'dwarven');
});

$('#elvish').click(function () {
    $('#translatedText').css('font-family', 'elvish');
});

$('#draconic').click(function () {
    $('#translatedText').css('font-family', 'draconic');
});
