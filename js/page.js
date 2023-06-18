//bage.html

var btn2 = document.querySelector("#btn2");
var conpro = document.querySelector("#addpro");
var inputtext = document.querySelector("#inputtext");
var alrt = document.querySelector("#alrt");

    data=[
        {id:1 , name: "oppo" },
        {id:2 , name: "iphon" },
        {id:3 , name: "realme" },
        {id:4 , name: "samsung" }
    ]

    function text(item){
        conpro.innerHTML = "";
        item.forEach(function (ele) {
            conpro.innerHTML += `<div onclick = delitem(${ele.id})> ${ele.name} </div>`
        });
    }
    window.onload = function (){
        text(data);
    }

    btn2.addEventListener("click", additem);

    function additem(){
        if (inputtext.value ==""){
            alrt.style.display ="block";
            alert ("Please enter the product..");
        }
        var lastid = data.length? data[data.length-1].id :0;
        data.push({id: ++lastid, name: inputtext.value});
        var added = data[data.length-1]
        conpro.innerHTML += `<div onclick = delitem(${added.id})> ${added.name} </div>`
        inputtext.value =""
    }

function delitem(id) {

    var index = data.map(function(i){
        return i.id;
    }).indexOf(id);
    if (index !== -1){
        data.splice(index,1);
        text(data);
    }
}