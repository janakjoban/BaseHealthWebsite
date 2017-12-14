$( document ).ready(function() {
    var news_posts = $('.news-post');

    if (news_posts.length < 4) {
        $('#news-show-more').hide();
    }

    if (news_posts.length > 4 || news_posts.length <= 4) {
        var hide = news_posts.slice(4, news_posts.length);
        hide.hide();
    }

    var blogs_posts = $('.blogs-post');

    if (blogs_posts.length < 4 || blogs_posts.length <= 4) {
        $('#blogs-show-more').hide();
    }

    if (blogs_posts.length > 4) {
        var hide = blogs_posts.slice(4, blogs_posts.length);
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

function showMoreBlogs() {
    var hidden_posts = $('.blogs-post:hidden');

    // show 4 at a time
    if (hidden_posts.length >= 4) {
        hidden_posts.slice(0, 4).show();
    }
    else {
        hidden_posts.show();
    }

    // hide the button if there are no more hidden posts
    if ($('.blogs-post:hidden').length == 0) {
        $('#blogs-show-more').hide();
    }
}
