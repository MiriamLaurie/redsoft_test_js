$(function(){


    var buttons = $(".switch__button")
    var tabs = $(".switch-tabs")
    var header = $(".header")
    buttons.on("click",function(e){

        buttons.removeClass("is-active")
        var button = $(this)
        button.addClass("is-active")

        $(".switch-tabs__tab").removeClass("is-active")
        var tab = tabs.find(".switch-tabs__tab").eq(button.index())
        tab.addClass("is-active")

        header.toggleClass('is-active')  

    })

})