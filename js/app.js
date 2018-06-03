$(document).ready(function(){

  const $filtrosToggle = $('#BotonCollapse')
  $filtrosToggle.click((ev) => {
    ev.preventDefault()

    const $i = $filtrosToggle.find('i.fa')
    const isDown = $i.hasClass('fa fa-chevron-down')
    if (isDown) {
      $i.removeClass('fa fa-chevron-down').addClass('fa fa-chevron-up')
    } else {
      $i.removeClass('fa fa-chevron-up').addClass('fa fa-chevron-down')
    }
  });

  $(function() {
    var container = document.getElementById('menu');
    var headroom = new Headroom(menu);
    headroom.init();
  });


});
