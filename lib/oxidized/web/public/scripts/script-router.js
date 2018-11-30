$(document).on('click', '#load_button', function() {
  var router_path = $('select.form-control[name="router_path"]').val();
  
  $.ajax({
    url: '/ajax_router',
    type: 'POST',
    data: {"router_path": router_path},
    dataType: 'text',
    success: function (result) {
      $("textarea[name='router_file']").val(result)
    },
    error: function () {
      alert("error");
    }
  });
});