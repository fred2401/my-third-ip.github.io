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
