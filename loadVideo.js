$(document).ready(function() {
    $("#oi a").click(function(e) {
        e.preventDefault();
        $("#videoaqui").html("Carregando...");
        var video = $(this).attr("href");
        $.ajax({
            url: video,
            type: "GET",
            success: function(urlVideo) {
                $("#videoaqui").html(urlVideo);
            }
        })
    });
});