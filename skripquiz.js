let detik = 60
let mulai = false
let skor=0
let cek= true
let timeplayed=0
window.onload=function(){
  document.getElementById("siap").onclick=function(){
    if(cek){
      const ubah=document.getElementById("isisoall")
      ubah.style.height="70vw"
      if(!mulai){
        startTimer();
      }
      const h3 = document.getElementById("soal1");
      h3.innerHTML = "1. Who is the founder of Lamborghini ?";
      h3.style.paddingTop = "2vw";
      // document.getElementById("soal").innerHTML="<h3 id='soal'>Who is the founder of Lamborghini ?</h3>"
      document.getElementById("pil1").innerHTML="<ki1 id='pil1' style='padding-top: 9px;'><input type='radio' name='my1' id='option1'>Franz Josef Popp</ki1><br>"
      document.getElementById("pil2").innerHTML="<ki1 id='pil2'><input type='radio' name='my1' id='option2'>Ferruccio Lamborghini</ki1><br>"
      document.getElementById("pil3").innerHTML="<ki1 id='pil3'><input type='radio' name='my1' id='option3'>Soichiro Honda</ki1><br><br><br>"
      document.getElementById("soal2").innerHTML= "2. Who invented the car ?"
      document.getElementById("pil4").innerHTML= "<ki1 id='pil3' style='padding-top: 9px;'><input type='radio' name='my2' id='option4'>Nikola Tesla</ki1><br>"
      document.getElementById("pil5").innerHTML="<ki1 id='pil4'><input type='radio' name='my2' id='option5'>James Webb</ki1><br>"
      document.getElementById("pil6").innerHTML="<ki1 id='pil5'><input type='radio' name='my2' id='option6'>Karl Benz</ki1><br><br><br>"   
      document.getElementById("soal3").innerHTML= "3. Who is the founder of Mitsubishi ?"
      document.getElementById("pil7").innerHTML= "<ki1 id='pil6' style='padding-top: 9px;'><input type='radio' name='my3' id='option7'>Junji Ito</ki1><br>"
      document.getElementById("pil8").innerHTML="<ki1 id='pil7'><input type='radio' name='my3' id='option8'>Yataro Iwasaki</ki1><br>"
      document.getElementById("pil9").innerHTML="<ki1 id='pil8'><input type='radio' name='my3' id='option9'>Shōzō Kawasaki</ki1><br><br><br>"
      document.getElementById("soal4").innerHTML= "4. Who is the founder of Koenigsegg ? "
      document.getElementById("pil10").innerHTML= "<ki1 id='pil9' style='padding-top: 9px;'><input type='radio' name='my4' id='option10'>Enzo Ferrari</ki1><br>"
      document.getElementById("pil11").innerHTML="<ki1 id='pil10'><input type='radio' name='my4' id='option11'>Christian von Koenigsegg</ki1><br>"
      document.getElementById("pil12").innerHTML="<ki1 id='pil11'><input type='radio' name='my4' id='option12'>Torakusu Yamaha</ki1><br><br><br>"
      document.getElementById("soal5").innerHTML= "5. What is the fastest car in the world based on top speed ?"
      document.getElementById("pil13").innerHTML= "<ki1 id='pil12' style='padding-top: 9px;'><input type='radio' name='my5' id='option13'>Koenigsegg Jesko Absolut</ki1><br>"
      document.getElementById("pil14").innerHTML="<ki1 id='pil13'><input type='radio' name='my5' id='option14'>Bugatti Chiron Super Sport 300+</ki1><br>"
      document.getElementById("pil15").innerHTML="<ki1 id='pil14'><input type='radio' name='my5' id='option15'>Hennessey Venom F5</ki1><br><br><br>"
      document.getElementById("siap").innerHTML="<button type='button' class='btn btn-light fw-bold' id='siap1'>Submit</button>"
      document.getElementById("siap1").onclick=function(){
        if(document.getElementById("option2").checked){
          skor++
        }
        if(document.getElementById("option6").checked){
          skor++;
        }
        if(document.getElementById("option8").checked){
          skor++;
        }
        if(document.getElementById("option11").checked){
          skor++;
        }
        if(document.getElementById("option13").checked){
          skor++;
        }       
        $("#isisoall").html('')
        if(mulai){
          startTimer()
        }
        cek=false
        $(".isisoal").css({"background-color": "black","width": "500px","height": "450px","color": "white","align-items": "center"})
        const hasil= document.createElement("h3")
        hasil.innerHTML="Game Over<br>Your score is "+ skor +"<br>Play time : "+ timeplayed + " seconds"
        hasil.style.paddingTop="11vw"
        const back=document.createElement("a")
        back.innerHTML="<a href='Main.html' class='btn btn-secondary mt-4'>Back to Home"
        document.getElementById("isisoall").appendChild(hasil)
        document.getElementById("isisoall").appendChild(back)
      }
    }    
  }
}
function startTimer() {
mulai=!mulai;
}
setInterval(() =>{
    if(mulai){
    detik--;
    timeplayed++
    if(detik<=0){
        startTimer();
        $("#isisoall").html("")
        $(".isisoal").css({"background-color": "black","width": "500px","height": "450px","color": "white","align-items": "center"})
        const hasil= document.createElement("h3")
        hasil.innerHTML="Game Over<br>Your run out of time"
        hasil.style.paddingTop="11vw"
        const back=document.createElement("a")
        back.innerHTML="<a href='Main.html' class='btn btn-secondary mt-4'>Back to Home"
        document.getElementById("isisoall").appendChild(hasil)
        document.getElementById("isisoall").appendChild(back)
    }
    $(".timer").html(detik.toString().padStart(2,"0"));
    }
},1000);