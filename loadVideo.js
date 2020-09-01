$(document).ready(function() {
    $.ajax({
        url: "https://eitri.opservices.com/video.html",
        type: 'GET',
        success: function(res) {
            var html = res;
            $("body").html(html);
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


            })
        }
    })
    $("body").html()
});