


// // view button show lines function
// function showLines(html,css,js) {
//     const htmllineBox = document.getElementById("htmllineBox");
//     const csslineBox = document.getElementById("csslineBox");
//     const jslineBox = document.getElementById("jslineBox");

//           htmllineBox.innerHTML = ""; // clear previous
//           csslineBox.innerHTML  = ""; // clear previous
//           jslineBox.innerHTML   = ""; // clear previous
    
//     const htmllines = html.split("\n");
//     const csslines  = css.split("\n");
//     const jslines   = js.split("\n");

//     htmllines.forEach(line => {
//         const li              = document.createElement("li");
//               li.textContent  = line;
//               htmllineBox.appendChild(li);
//                               });

//     csslines.forEach(line => {
//         const li             = document.createElement("li");
//               li.textContent = line;
//               csslineBox.appendChild(li);
//                               });

//     jslines.forEach(line => {
//         const li             = document.createElement("li");
//               li.textContent = line;
//               jslineBox.appendChild(li);
//                             });
// } 
 

//Like
const likebtn = document.querySelectorAll('#like');
function rgbToName(rgb) {
  const colors = {
    "rgb(255, 0, 0)": "red",
    "rgb(0, 0, 0)": "black",
  };
  return colors[rgb] || rgb;
}
likebtn.forEach(btn => {
btn.addEventListener('click', () => {
  const baseColor = getComputedStyle(btn).getPropertyValue('--base-color').trim();
   
   if ( baseColor === "red"){
    btn.style.setProperty('--base-color', 'black');
    btn.parentElement.children[1].innerHTML = "0";
    }

    if ( baseColor  === "black"){
    btn.style.setProperty('--base-color', 'red');
    btn.parentElement.children[1].innerHTML = "1";
    }
});
});

//responsible box ( cnt = container )
const buttoncnt = document.querySelectorAll('.buttonbyonecontainer');
const cnts      = document.querySelector('.button_list_container')?.lastElementChild; //Call last child
const crt       = document.getElementsByClassName('button_list_container')[0];

const qty    = 60;
const calc   = qty - buttoncnt.length;
 //  || clac < 0 reminder
if( calc > 0 ){
for (let i = 0; i < calc ; i++) {
  const element = document.createElement('div');
  const btn     =  `   
                      <div class="name_container">                                 
                        <span class="name">AD</span>
                      </div> 
                      <div class="button_container">
                         I am Blank or Ad
                      </div>
                  `;
        element.className = "buttonbyonecontainer";
        element.setAttribute("id", "AD");
        element.innerHTML = btn;
        crt.appendChild(element);
}
}




