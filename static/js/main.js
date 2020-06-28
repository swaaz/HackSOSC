$('#bot').hide();

//onclick button
$('#chat-button').click(function(){

    var ifrm = document.createElement("iframe");
ifrm.style="width: 280px; max-height: 100%; height: 338px; position: fixed; bottom: 0px; right: 3px; text-align: left; z-index: 2147483647; border: 0px none; border-radius: 4px 4px 0px 0px; box-shadow: 0px 0px 5px  rgb(51, 51, 51);";
document.body.appendChild(ifrm);


// input text
// function inputText(text){
//    $('body').append("<div class='chat-container input'><p class='input'>"+text+"</p></div><br>");
// };

//output text
//function outputText(text){
//    $('body').append("<div class='chat-container output'><p class='output'>"+text+"</p></div><br>");
//};
})

