let b1 = document.querySelector("#btn");
let b2 = document.querySelector("#btn2");
let inp = document.querySelector("#dname");
let m = document.querySelector("#message");
let gl = "";

b1.addEventListener("click", function(e) {
     e.preventDefault();
     if(inp.value == "") {
        m.textContent = "Please input a domain name";
     } else {
        gl = `https://www.${inp.value}.com`;
        m.textContent = `Generated Link: ${gl}`;
     }
});

b2.addEventListener("click", function() {
   if(m.value == "Please input a domain name") {
       alert("No domain name yet");
   } else {
     window.location.href = gl;
   }
});