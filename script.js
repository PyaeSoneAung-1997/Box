const container 	= document.querySelector('.LoginSignupcontainer');
const login       	= document.querySelector('.login');
const signup 		= document.querySelector('.signup');
const pagelogin  	= document.querySelector('.loginpage');
const pagecreate  	= document.querySelector('.createpage');

const loginform 	= document.querySelector('.form.login');
const signupform 	= document.querySelector('.form.signup');
const closeformsignup = document.querySelector('.closeformsignup');
const closeformlogin  = document.querySelector('.closeformlogin');

const menucloseform = document.querySelector('.menucloseform');
const menuopenform  = document.querySelector('.menuopenformico'); 
const menu_container= document.querySelector('.menu_container');

// login
login.onclick = function(){
			container.style.display  ="flex";
			loginform.style.display  = "flex";
			signupform.style.display = "none";
}
pagelogin.onclick = function(){
	        container.style.display  ="flex";
            loginform.style.display  = "flex";
			signupform.style.display = "none";
}		
signup.onclick = function(){
	        container.style.display  ="flex";
			loginform.style.display  = "none";
			signupform.style.display = "flex";
		                   }
pagecreate.onclick = function(){
			container.style.display  ="flex";			
			signupform.style.display = "flex";
			loginform.style.display  = "none";
}

closeformsignup.onclick = function(){
			container.style.display  ="none";			
			signupform.style.display = "none";
			loginform.style.display  = "none";
}
closeformlogin.onclick = function(){
			container.style.display  ="none";			
			signupform.style.display = "none";
			loginform.style.display  = "none";
}

// menu
menucloseform.onclick = function(){
			menu_container.style.display ="none";
			menuopenform.style.display   = "block";
}
menuopenform.onclick = function(){
			menu_container.style.display ="block";
			menuopenform.style.display   = "none";
}

//page show hide
const listname   = document.querySelectorAll(".menu_list_name");
      listname.forEach((btn)  => {
		btn.addEventListener("click", async () =>{ 
			const classname = "." + btn.children[1].innerHTML.toLowerCase();
		    const show      = document.querySelector(classname);
		          show.style.display = "block";
			for( var i = 0 ; i < listname.length; i++){
				var x = "." + listname[i].children[1].innerHTML;
				var m = "." + btn.children[1].innerHTML;
				if (x !== m ){
                   document.querySelector(x.toLowerCase()).style.display = "none";
				             };
			                                         }
						
		                                         }); 
	                            });
function updateChildCount() {
  const zoomLevel = window.devicePixelRatio;  
  const cnt = document.getElementsByClassName('container')[0];
  const hcnt = document.getElementsByClassName('head_container')[0];
  if (zoomLevel < 0.81) {
      cnt.style.width = "2200px";
                                      };
  if (zoomLevel < 0.77) {
      cnt.style.width = "2200px";
                                      }
else{
  cnt.style.width = "100%";
}
   if (zoomLevel >= 1.2 ) {
      hcnt.style.height = "20%";
                                      };
   if (zoomLevel > 3) {
      hcnt.style.height = "80%";
	  cnt.style.width = "80%";
                                      };
  if (zoomLevel < 1.2 ) {
      hcnt.style.height = "10%";
                                      };
}
updateChildCount();

// // window resize
window.addEventListener("resize", updateChildCount);