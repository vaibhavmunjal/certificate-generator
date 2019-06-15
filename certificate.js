$(function() {

    $(".draggable").draggable({
        cursor: "move",
        revert: "invalid",
        helper: "clone",
    });

    $(".certi-page").droppable({
        accept: '.draggable',
        hoverClass: "ui-state-active",
        drop: function (ev, ui) {
            if ($(ui.draggable).hasClass('new')) {
                $('.new').draggable({
                    containment: $(".certi-page"),
                    revert: false,
                });
            }
            else {
                $(this).append($(ui.draggable).clone().draggable({
                    helper: "original"
                }).addClass('new').css({
                    left: event.pageX + "px",
                    top: event.pageY + "px",
                    position: "absolute"})
                  .attr("contenteditable", "true"));
            }
        }
    });

});