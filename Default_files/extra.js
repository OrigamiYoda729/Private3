      (function($) {
        $(function() {
          $('[data-toggle="tooltip"]').tooltip();
          $('[data-toggle="popover"]').popover();

          var height = $("#header").outerHeight();
          if ($("#logoRow").is(":visible"))
            height += $("#logoRow div").outerHeight();

          var sideBar = $("#sideBar");
          if (sideBar.hasClass("always-float")) {
            sideBar.css("height", "calc(100% - " + height + "px");
            sideBar.css("overflow-x", "hidden");
            sideBar.css("overflow-y", "auto");
          } else {
            sideBar.css("min-height", "calc(100% - " + height + "px");
          }

          $("[data-toggle=clear]")
            .on("click", function(event) {
              var targetSelector = $(event.target).data("target");
              var $target = $(targetSelector);
              $target.val("");
              $.post(rootPath + "common/Impersonation.ashx/ClearImpersonation")
                .done(function() {
                  document.location.href = "Default.aspx";
                });
            });

          $("[data-toggle=advanced]").on("click", function(event) {
            onAdvancedSearch(event);
          });

          $("[data-collapse]").iconSwitcher();
        });
      })(jQuery);
