$('.question .question__item').each(function (i) {

    var _number = i;
    $(this).click(function () {
        $(this).toggleClass('active')
        $('.question__answer').eq(_number).slideToggle(300);
    });
});
// Variables
var clickedTab = $(".question__tabs > .active");
var tabWrapper = $(".question__content");
var activeTab = tabWrapper.find(".active");
var activeTabHeight = activeTab.outerHeight();

// Show tab on page load
activeTab.show();

// Set height of wrapper on page load
tabWrapper.height(activeTabHeight);

$(".question__tabs > li").on("click", function () {

    // Remove class from active tab
    $(".question__tabs > li").removeClass("active");

    // Add class active to clicked tab
    $(this).addClass("active");

    // Update clickedTab variable
    clickedTab = $(".question__tabs .active");

    // fade out active tab
    activeTab.fadeOut(250, function () {

        // Remove active class all tabs
        $(".question__content > li").removeClass("active");

        // Get index of clicked tab
        var clickedTabIndex = clickedTab.index();

        // Add class active to corresponding tab
        $(".question__content > li").eq(clickedTabIndex).addClass("active");

        // update new active tab
        activeTab = $(".question__content > .active");

        // Update variable
        activeTabHeight = activeTab.outerHeight();

        // Animate height of wrapper to new tab height
        tabWrapper.stop().delay(50).animate({
            height: activeTabHeight
        }, 500, function () {

            // Fade in active tab
            activeTab.delay(50).fadeIn(250);

        });
    });
});
$('.notice .notice__item').each(function (i) {

    var _number = i;
    $(this).click(function () {
        $(this).toggleClass('active')
        $('.notice__answer').eq(_number).slideToggle(300);
    });
});