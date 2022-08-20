$(function () {
    $('#carousel').carousel({ interval: 2000 });
    $('#carouselButton').on('click', function () {
        if ($('#carouselButton').children('span').hasClass('fa-pause')) {
            $('#carousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
            return;
        }
        $('#carousel').carousel('cycle');
        $('#carouselButton').children('span').removeClass('fa-play ');
        $('#carouselButton').children('span').addClass('fa-pause');
    });

    $('#reserveButton').on('click', function () {
        $('#reserve').modal('show')
    });

    $('#login-link').on('click', function () {
        $('#loginModal').modal('show')
    });


});