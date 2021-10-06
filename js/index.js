$(document).ready(function () {


    $(".agregar").on("click", function(event){
        event.preventDefault();
        var div = $("<div>");
        div.prop('class','lis')

        var list = $("<li>");
        var text = $("#newText").val();

        var pElement = $("<li>")
        pElement.text(text)
        div.append(pElement)

        var checkButton = $("<button>");
        checkButton.prop('class','checar');
        checkButton.text("Check")

        var delButton = $("<button>");
        delButton.prop('class','del');
        delButton.text("Delete");

        div.append(checkButton);
        div.append(delButton);
        list.append(div)
        $(".Lista").append(div);
        $("#newText").val("")
    });

    $(".Lista").on("click", ".del", function() {
        $(this).parent().remove()
    });

    $(".Lista").on("click", ".checar", function() {
        console.log($(this).prev())
        $(this).prev().toggleClass("chec");
    });


});