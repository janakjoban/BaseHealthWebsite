var openbtn = document.getElementsByClassName("click-to-open");
var body = document.getElementById("pageBody");

for (var i = 0; i < openbtn.length; i++) {
  var thisBtn = openbtn[i];
  thisBtn.addEventListener("click", function(){
    var modal = document.getElementById(this.dataset.modal);
    modal.className = "show-modal";
    body.className = "modal-lock";
  }, false);
}
var closebtn = document.getElementsByClassName("click-to-close");

for (var i = 0; i < closebtn.length; i++) {
  var thisBtn = closebtn[i];
  thisBtn.addEventListener("click", function(){
    var modal = document.getElementById(this.dataset.modal);
    modal.className = "hide-modal";
    body.className = "modal-hidden";
  }, false);
}

$(document).ready(function(){
   if ($.cookie('pomlShown') != '1') {
     var modal = document.getElementById('simpleModal-poml');
     var body = document.getElementById("pageBody");
     modal.className = "show-modal";
     body.className = "modal-lock";
    $.cookie('pomlShown', '1', { expires: 60}); }
   });

// $("#pomlClose").click(function (e)
//   {
//      sessionStorage["PopupShown"] = 'yes'; //Save in the sessionStorage if the modal has been shown
// });
//
// $(document).ready(function ()
//      {
//      if(sessionStorage["PopupShown"] != 'yes'){
//        var modal = document.getElementById('simpleModal-poml');
//        var body = document.getElementById("pageBody");
//        modal.className = "show-modal";
//        body.className = "modal-lock";
//      }
// });
