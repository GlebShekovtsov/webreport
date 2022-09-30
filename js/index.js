let burger = document.querySelector(".burger");
let menu = document.querySelector(".header__nav");
let menuLinks = menu.querySelectorAll(".nav__link");

burger.addEventListener("click", function () {
  menu.classList.toggle("header__nav--active");
  burger.classList.toggle("burger--active");
  document.body.classList.toggle("scroll-lock");
});

menuLinks.forEach(function (el) {
  el.addEventListener("click", function () {
    menu.classList.remove("header__nav--active");
    burger.classList.remove("burger--active");
    document.body.classList.remove("scroll-lock");
  });
});



$(".accordion").accordion({
    active: false,
    collapsible: true,
    animate: 400,
    heightStyle: "content",
    beforeActivate: function (event, ui) {
        // The accordion believes a panel is being opened
        if (ui.newHeader[0]) {
            var currHeader = ui.newHeader;
            var currContent = currHeader.next('.ui-accordion-content');
            // The accordion believes a panel is being closed
        } else {
            var currHeader = ui.oldHeader;
            var currContent = currHeader.next('.ui-accordion-content');
        }
        // Since we've changed the default behavior, this detects the actual status
        var isPanelSelected = currHeader.attr('aria-selected') == 'true';

        // Toggle the panel's header
        currHeader.toggleClass('ui-corner-all', isPanelSelected).toggleClass('accordion-header-active ui-state-active ui-corner-top', !isPanelSelected).attr('aria-selected', ((!isPanelSelected).toString()));

        // Toggle the panel's icon
        currHeader.children('.ui-icon').toggleClass('ui-icon-triangle-1-e', isPanelSelected).toggleClass('ui-icon-triangle-1-s', !isPanelSelected);

        // Toggle the panel's content
        currContent.toggleClass('accordion-content-active', !isPanelSelected)
        if (isPanelSelected) { currContent.slideUp(); } else { currContent.slideDown(); }

        return false; // Cancels the default action
    }
});

