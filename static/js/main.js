$('#bot').hide();
$('#chat-button-close').hide();

//onclick button functions : open and close chat window
$('#chat-button-open').click(function() {
    $('#chat-button-open').hide();
    $('#chat-button-close').show();
    $('#bot').show();
    $('#chat-button-close').click(function() {
        $('#bot').hide();
        $('#chat-button-close').hide();
        $('#chat-button-open').show();
    })

    //appending input chats
    $('#send-button').click(function() {
        var inputText = $('#chat-textfield').val();
        if (inputText != "") {
            $('.chat').append("<div class='chat-input'><p class='input'>" + inputText + "</p></div>");
        }
        $('#chat-textfield').val("");
        updateScroll();
    })

    //always show last chat bubble
    var element = document.getElementById("chat");
    element.scrollTop = element.scrollHeight;

    function updateScroll() {
        var element = document.getElementById("chat");
        element.scrollTop = element.scrollHeight;
    }


    //bot response

    function getResponse() {
        let userText = $("#chat-textfield").val();
        let userHtml = '<p class="input"><span>' + userText + '</span></p>';
        $("#chat-textfield").val("");
        $("#bot-header").append(userHtml);
        document.getElementById('userInput').scrollIntoView({
            block: 'start',
            behavior: 'smooth'
        });
        $.get("/get", {
            msg: userText
        }).done(function(data) {
            var botHtml = '<p class="output"><span>' + data + '</span></p>';
            $("#bot-header").append(botHtml);
            document.getElementById('userInput').scrollIntoView({
                block: 'start',
                behavior: 'smooth'
            });
        });
    }
    $("#chat-textfield").keypress(function(e) {
        //if enter key is pressed
        if (e.which == 13) {
            getResponse();
        }
    });
    $("#send-button").click(function() {
        getResponse();
    });


    // output text

    function outputText(text) {
        $('body').append("<div class='chat-output'><p class='output'>" + text + "</p></div><br>");
    };

})