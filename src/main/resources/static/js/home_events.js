/**
 * Обработчики событий на странице home.html (/home)
 */
$(document).ready(function(){
    $('#main_page_link').addClass('active');
    getAndPrintAllTopicsOfUser($('#topics_container'))
        .then();

    /**
     *  обновляем "колокольчик" - счётчик уведомлений
     *  имитация нотификации
     */
    window.onload = getNumberOfNotificationsOfUser($('#notif_counter'));
    setInterval( function () { getNumberOfNotificationsOfUser($('#notif_counter')).then(); }, 5000);

    /**
     * Нажатие на кнопку поиска по хэштегу
     */
    $('#hashtag_home_button').on('click', function() {
        let hashtag = $('#hashtag_input').val();
        hashtag = hashtag.trim();
        if (hashtag.startsWith('#')) {
            hashtag = hashtag.slice(1);
        }
        if (hashtag !== '') {
            getTopicsOfUserByHashtag(hashtag, $('#topics_container'))
                .then();
        } else {
            let contentContainer = $('#topics_container');
            contentContainer.empty();
            getAndPrintAllTopicsOfUser(contentContainer)
                .then();
        }
    });
});