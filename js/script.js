function data(){
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var message=document.getElementById("message").value;

    if(name===""  || email===""  || message===""){
        alert("input data into all fields");
    }
    else{
        alert(name+" you have sumitted your message, thank you for the feedback");
    }
}
$(document).ready(function() {
    $("#part1").click(function() {
      $(".columntwo1").toggle();
      $(".columntwoshowing1").toggle();
    });
    $("#part2").click(function() {
        $(".columntwo2").toggle();
        $(".columntwoshowing2").toggle();
      });
    $("#part3").click(function() {
        $(".columntwo3").toggle();
        $(".columntwoshowing3").toggle();
      });
  });
