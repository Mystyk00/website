document.addEventListener("DOMContentLoaded", function() {
    var scrollToBottomButton = document.getElementById("scroll_to_bottom");

    scrollToBottomButton.addEventListener("click", function() {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth"
        });
    });
});
