let detik = 60
let mulai = false
let skor=0
let vote1=1537
let vote2=1238
let vote3=1078
$(document).ready(function() {
  $("#komeng").click(function(event){
    event.preventDefault()
    let userna= $("#user").val()
    let isikomeng =$("#komenguser").val()
    if(document.getElementById("user").checkValidity()){
      y=document.getElementById("komenuser").innerHTML
      x= "<div id='isikomenuser' class='mb-2'><ok>" +userna+"</ok><br>"+isikomeng+ "</div>";
      document.getElementById("komenuser").innerHTML=x+y
    }
    else{
      document.getElementById("user").reportValidity()
    }
  })
    $(".navbar-brand").hover(
      function() {
        $(this).text("What I Know Is car");
      },
      function() {
        $(this).text("WIKIcar")
      }
    );
    $(".submitq").click(function(){
      $("#boxq").val("");
      alert("Question has been sent")
    })
  $("#vote").click(function(){
    event.preventDefault()
    if(document.getElementById("pili1").checked){
      vote1++;
      $("#vt1").text("With "+vote1+" vote on this car")
    }
    else if(document.getElementById("pili2").checked){
      vote2++;
      $("#vt2").text("With "+vote2+" vote on this car")
    }
    else if(document.getElementById("pili3").checked){
      vote3++;
      $("#vt3").text("With "+vote3+" vote on this car")
    }
    else{
      document.getElementById("pili1").reportValidity()
      document.getElementById("pili2").reportValidity()
      document.getElementById("pili3").reportValidity()
    }
  })
});
// function startTimer() {
//   mulai=!mulai;
// }
// setInterval(() =>{
//    if(mulai){
//       detik--;
//       if(detik<=0){
//         startTimer();
//         alert("Game Over")
//       }
//       $(".timer").html(detik.toString().padStart(2,"0"));
//    }
// },1000);

