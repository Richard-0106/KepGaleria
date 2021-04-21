window.addEventListener("load",init);

function $(nev){
    return document.querySelectorAll(nev);
    
}
//var kepek=["IMG_10272825371653.jpeg","IMG_12741452211602.jpeg","IMG_9655986954315.jpeg"];
//var cim=["1.kép címe","1.kép címe","1.kép címe"];
var kep1={
    eleresiut:"mosomedve.jpeg",
        cim:"1.kép címe"
};
var kep2={
    eleresiut:"IMG_12741452211602.jpeg",
        cim:"2.kép címe"
};
var kep3={
    eleresiut:"IMG_9655986954315.jpeg",
        cim:"3.kép címe"
};
var keptomb=[kep1,kep2,kep3];
function init(){
    for (var i = 0; i < keptomb.length; i++) {
    var elem='<div><h3></h3> <img id="'+i+'"src="" alt=""/><p></p></div>';
        $("article")[0].innerHTML+=elem;
    }
    console.log("üdvözöl a JS");
   // $("section")[0].innerHTML="Hello";
    for (var i = 0; i < $("article img").length; i++) {
        $("article img")[i].src=keptomb[i].eleresiut;
        $("article img")[i].src=keptomb[i]["eleresiut"];
        $("article h3")[i].innerHTML=keptomb[i].cim;
    }
    //$("article img")[0].src="IMG_10272825371653.jpeg";
    //$("article img")[1].src="IMG_12741452211602.jpeg";
    //$("article img")[2].src="IMG_9655986954315.jpeg";
    
    //képekhez hozzá kell rendelni egy eseménykezelőt, kattintásra
    for (var i = 0; i < keptomb.length; i++) {
   // console.log(keptomb[i].eleresiut);
        $("article div img")[i].addEventListener("click",betolt);
    }
    
    //kattintás után az a kép, amire kattintottam a kép címe, leírása,eleresi utja jelenjen meg a konzol üzenetben. 
    
    //kattintás után a kép adatai jelenjenek meg a #nagykep div-ben. azaz:
    //a kattintott kép elérési utját kapja meg a nagykép img src 
    document.getElementById("bal").addEventListener("click",bal);
document.getElementById("jobb").addEventListener("click",jobb);
}


function betolt(){
   var index=this.id;//hanyadik kép
    console.log(keptomb[index].eleresiut);
    console.log(keptomb[index].cim);
    console.log(index);
     $("section div img")[0].src=keptomb[index].eleresiut;
    $("section div h3")[0].innerHTML=keptomb[index].cim;
    
//kattintás után a kép adatai jelenjenek meg a #nagykep div-ben. azaz:
    //a kattintott kép elérési utját kapja meg a nagykép img src 
  
  $("section div img")[0].src= keptomb[index].eleresiut;
  $("section div h3")[0].innerHTML= keptomb[index].cim;
  
  
}
var index=0;
function bal(){
    $("section div img")[0].src=keptomb[index].eleresiut;
    $("section div h3")[0].innerHTML=keptomb[index].cim;
   index -=1;
   if(index<0){
       index=keptomb.length-1;
   
   }
}
function jobb(){
     $("section div img")[0].src=keptomb[index].eleresiut;
    $("section div h3")[0].innerHTML=keptomb[index].cim;
   index +=1;
    if(index===keptomb.length){
        index=0;
        
    }
    
}