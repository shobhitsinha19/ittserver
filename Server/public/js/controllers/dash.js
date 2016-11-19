$("form[name='uploader']").submit(function(e) {
        var formData = new FormData($(this)[0]);

        $.ajax({
            url: "http://1.186.12.250:5000",
            type: "POST",
            data: formData,
            async: false,
            success: function (msg) {
                var response = jQuery.parseJSON(msg);
                //translate(response);
                console.log(response);
              //  angular.element('#dashCtrl').scope().$apply();
                translate(response);


            },
            cache: false,
            contentType: false,
            processData: false
        });

        e.preventDefault();
    });
    $(document).ready(function() {
          $('select').material_select();
      });
