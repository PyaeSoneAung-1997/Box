

const result = JSON.parse(sessionStorage.getItem("viewdata"));

const container = document.querySelectorAll('.codetextarea');
container[0].children[0].value = result[0].html;
container[1].children[0].value = result[0].css;
container[2].children[0].value = result[0].js;


const htmlTextarea = document.querySelector("#html_code_output_container textarea");
const cssTextarea = document.querySelector("#css_code_output_container textarea");
const jsTextarea = document.querySelector("#js_code_output_container textarea");

const previewFrame = document.getElementById("preview_frame");

function updatePreview() {
  const html = htmlTextarea.value;
  const css = cssTextarea.value;
  const js = jsTextarea.value;

  const previewContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
        ${css}
        body{
        margin:0;
        min-height:100vh;
        display:flex;
        justify-content:center;
        align-items:center;
        }
        </style>
      </head>
      <body>
        ${html}
        <script>
          ${js}
        <\/script>
      </body>
    </html>
  `;

  const iframeDoc =
    previewFrame.contentDocument || previewFrame.contentWindow.document;

  iframeDoc.open();
  iframeDoc.write(previewContent);
  iframeDoc.close();
}

updatePreview();

[htmlTextarea, cssTextarea, jsTextarea].forEach(textarea => {
  textarea.addEventListener("input", updatePreview);
});




//  copy button  
document.querySelectorAll(".copy_button").forEach(button => {
  button.addEventListener("click", () => {

    const outputContainer = button.closest(
      "#html_code_output_container, #css_code_output_container, #js_code_output_container"
    );

    if (!outputContainer) return;

    const textarea = outputContainer.querySelector(".codetextarea textarea");
    const copiedBtn = outputContainer.querySelector(".copided_button");

    if (!textarea || !textarea.value.trim()) return;

    
    navigator.clipboard.writeText(textarea.value).then(() => {
      button.style.display = "none";
      copiedBtn.style.display = "block";

      setTimeout(() => {
        copiedBtn.style.display = "none";
        button.style.display = "block";
      }, 1500);
    });

  });
});

