
		var slideIndex = 0;
		carousel();
		var s=screen.width;
		var s1=screen.height;
		console.log(s);
		console.log(s1);
		var video=document.getElementsByTagName('iframe');
		video.videoHeight = s;
  		video.videoWidth = s1;
		function carousel() {
		    var i;
		    var x = document.getElementsByClassName("mySlides");
		    var randomNumber = Math.floor((Math.random()*12)+1);
		    for (i = 0; i < x.length; i++) {
		      x[i].style.display = "none"; 
		    }
		    slideIndex++;
		    if (slideIndex > x.length) {slideIndex = 1} 
		    x[	slideIndex-=1].style.display = "block"; 
			slideIndex+=1;
		    setTimeout(carousel, 4000); // Change image every 2 seconds

		}
		
	
