// text format function 
function format(text) {
    return text
        .replace(/\s*{\s*/g, " {\n")
        .replace(/;\s*/g, ";\n")
        .replace(/\s*}\s*/g, "\n}\n")
        .trim();
                      }

// romove trim
function get(selector) {
    let result = "";
    for (const sheet of document.styleSheets) {
        try {
            for (const rule of sheet.cssRules) {
                if (rule.selectorText && rule.selectorText.includes(selector)  ) {
                                           result += format(rule.cssText) + "\n\n";
                                                                               }
                                                }
            } 
        catch (e) {
            // skip CORS-blocked sheets
                 }
                                              }
    return result.trim();
                        }

const viewBtn  = document.querySelectorAll(".button_view_code_container");
export const result = [];
      viewBtn.forEach((btn) => {  
        btn.addEventListener("click", async () => {
    var   viewcotadd = btn.parentElement.children[3].children[1].children[1];
          viewcotadd.innerHTML = "1";
    const btncallcls   = btn.closest('.buttonbyonecontainer').querySelector('button');
    const className    = "." + btncallcls.className;
    const selector     = document.querySelector(className);
    const html         = selector.outerHTML;
    const css          = get(selector.className);
    console.log(css);
    let js           = "";
            if(typeof(window[selector.classList[0]]) === "function"){
                 js           = window[selector.classList[0]].toString();
              }
             result.push({html,css,js});
             sessionStorage.setItem("viewdata", JSON.stringify(result));
             window.open("buttonviewcode.html","_self");
                                                     });
                                                     

});