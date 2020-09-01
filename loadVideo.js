$(document).ready(function() {
    $("#oi a").click(function(e) {
        e.preventDefault();
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