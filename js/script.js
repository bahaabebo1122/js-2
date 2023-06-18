
// index.html
var allpr = document.querySelectorAll(".container-fluid  .btn");
var content = document.querySelector("#div1-hidd");
var btn = document.querySelector("#btn2");
var praces = document.querySelector("#h3");
var totalprace = 0 ;

  allpr.forEach(function (item) {
    item.onclick = function (){
        totalprace += +(item.getAttribute("prace"))
        content.innerHTML += item.textContent + ` / `

        if (content.innerHTML != ""){
            btn.style.display = "block"
            content.style.borderWidth = "2px"
        }
    }
  }
)

  btn.onclick = function(){
    praces.innerHTML = totalprace +`.LE`

    if(praces.innerHTML !=""){
        praces.style.borderColor = "green"
        praces.style.color = "green"
    }
}

  content.onclick = function (){
    content.innerHTML = ""
    content.style.borderWidth = "0px"
    praces.innerHTML = 0
}
















