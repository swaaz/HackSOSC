$('#bot').hide();
$('#chat-button-close').hide();

//onclick button functions : open and close chat window
$('#chat-button-open').click(function(){
    $('#chat-button-open').hide();
    $('#chat-button-close').show();
    $('#bot').show();
    $('#chat-button-close').click(function(){
        $('#bot').hide();
        $('#chat-button-close').hide();
        $('#chat-button-open').show();
    })

//appending input chats
$('#send-button').click(function(){
    var inputText= $('#chat-textfield').val();
    if(inputText!=""){
    $('.chat').append("<div class='chat-input'><p class='input'>"+inputText+"</p></div>");}
    $('#chat-textfield').val("");
    updateScroll();
})

//always show last chat bubble
var element = document.getElementById("chat");
element.scrollTop = element.scrollHeight;

function updateScroll(){
    var element = document.getElementById("chat");
    element.scrollTop = element.scrollHeight;
}


//bot response



//output text
//function outputText(text){
//    $('body').append("<div class='chat-container output'><p class='output'>"+text+"</p></div><br>");
//};
})

