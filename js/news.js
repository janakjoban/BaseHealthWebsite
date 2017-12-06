$( document ).ready(function() {
    var news_posts = $('.news-post');

    if (news_posts.length == 0) {
        $('#news-show-more').hide();
    }

    if (news_posts.length > 4 || press_posts.length <= 4) {
        var hide = news_posts.slice(4, news_posts.length);
        hide.hide();
    }

    var press_posts = $('.press-post');

    if (press_posts.length == 0 || press_posts.length <= 4) {
        $('#press-show-more').hide();
    }

    if (press_posts.length > 4) {
        var hide = press_posts.slice(4, press_posts.length);
        hide.hide();
    }
});

function showMoreNews() {
    var hidden_posts = $('.news-post:hidden');

    // show 4 at a time
    if (hidden_posts.length >= 4) {
        hidden_posts.slice(0, 4).show();
    }
    else {
        hidden_posts.show();
    }

    // hide the button if there are no more hidden posts
    if ($('.news-post:hidden').length == 0) {
        $('#news-show-more').hide();
    }
}

function showMorePress() {
    var hidden_posts = $('.press-post:hidden');

    // show 4 at a time
    if (hidden_posts.length >= 4) {
        hidden_posts.slice(0, 4).show();
    }
    else {
        hidden_posts.show();
    }

    // hide the button if there are no more hidden posts
    if ($('.press-post:hidden').length == 0) {
        $('#press-show-more').hide();
    }
}