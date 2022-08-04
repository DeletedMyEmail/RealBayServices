$(#logobtn).on("click", function (){
  window.location.href = "/";
})

$('.cookies').on('click', function() {
  $(this).hide();
})

$(#profile-button).on("click", function (){
  window.location.href = "/profileSettings";
})

$(#items-button).on("click", function (){
  window.location.href = "/itemSettings";
})
