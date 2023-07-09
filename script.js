function popup() {
            var count = 0;
            if (document.getElementById("Rating1").checked == true) {
                var text = "Thank You";
                alert(text)
                count = count + 1;
            }
            if (document.getElementById("Rating2").checked == true) {
                var text = "Thank You";
                alert(text)
                count = count + 1;
            }
            if (document.getElementById("Rating3").checked == true) {
                var text = "Thank You";
                alert(text)
                count = count + 1;
            }
            if (document.getElementById("Rating4").checked == true) {
                var text = "Thank You";
                alert(text)
                count = count + 1;
            }
            if (document.getElementById("Rating5").checked == true) {
                var text = "Thank You";
                alert(text)
                count = count + 1;
            }
            if (count == 0) {
                var text = "Invalid Submission!!";
                alert(text)
            }
        }
        function hobbies(){
    
            var a = document.getElementById("travel").checked;
            var b = document.getElementById("movies").checked;
            var c = document.getElementById("sleep").checked;
            var d= document.getElementById("music").checked;
            console.log(a,b,c,d)
            if(!a && !b && !c &&!d ){
                confirm("Please select a hobby before conforming")
            }
            else{
                var out = "You have selected : \n"
                if(a){
                    out = out + "\nTravelling";
                }
                if(b){
                    out = out + "\nWatching movies";
                }
                if(c){
                    out = out + "\nSleeping";
                }
                if (d){
                  out=out+"\nListening Music"
                }
                output = "";
                if(confirm(out)){
                    if(a){
                        output = output + "<br><b>Travelling</b>: If travelling was free then most probably you would never see me again <br> I also love to taste all varieties of food wherever i go <br> But I haven't found anything more tastier than Hyderabadi Biryani❤️ till now <br>"
                      }
          
                    if(b){
                        output = output + "<br><b>Watching movies</b>:I am not a big fan of series but i love watching movies a lot<br>"
                    }
          
                    if(c){
                        output = output + "<br><b>Sleeping</b>: All problems one solution go sleep😜🙈<br>"
                    }
                    if(d){
                        output = output + "<br><b>Listening Music</b>: Though i cant sing, I love listening to music, mainly Telugu songs<br>"
                    }
                    var inn = document.getElementById("hobbies");
                    inn.innerHTML = output;
                  }  
            } 
          }
          
 function resetHobbie(){
            
            var a = document.getElementById("travel");
            var b = document.getElementById("movies");
            var c = document.getElementById("sleep");
            var d = document.getElementById("music");
          
            a.checked = false;
            b.checked = false;
            c.checked = false;
            d.checked = false;
            var inn = document.getElementById("hobbieDesc");
            inn.innerHTML = "";      
          }