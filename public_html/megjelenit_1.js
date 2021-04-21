
$(function(){
 modositasok();
});
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
function modositasok(){
    for (var i = 0; i < keptomb.length; i++) {
         var elem='<div><h3></h3> <img id="'+i+'"src="" alt=""/><p></p></div>';
       $("article").eq(0).append(elem);
    }
    //console.log("üdvözöl a JS");
   // $("section")[0].innerHTML="Hello";
//    for (var i = 0; i < $("article img").length; i++) {
//        $("article img")[i].src=keptomb[i].eleresiut;
//        $("article img")[i].src=keptomb[i]["eleresiut"];
//        $("article h3")[i].innerHTML=keptomb[i].cim;
//    }
 for (var i = 0; i < $("article img").length; i++) {
        $("article img").eq(i).attr("src",keptomb[i].eleresiut);
        $("article h3").eq(i).text(keptomb[i].cim);
        }
   // console.log(keptomb[i].eleresiut);
        $("article div img").click(betolt);
    $("#bal").click(bal);
    $("#jobb").click(jobb);
    $("#nagykep").click(bal);
}


function betolt(){
   var index=this.id;//hanyadik kép
    console.log(keptomb[index].eleresiut);
    console.log(keptomb[index].cim);
    console.log(index);
      $("section div img").eq(0).attr("src",keptomb[index].eleresiut);
    $("section div h3").eq(0).text(keptomb[index].cim);   
//kattintás után a kép adatai jelenjenek meg a #nagykep div-ben. azaz:
    //a kattintott kép elérési utját kapja meg a nagykép img src 
   $("section div img").eq(0).attr("src",keptomb[index].eleresiut);
  $("section div h3").eq(0).text(keptomb[index].cim);
}
var index=0;
function bal(){
    $("#nagykep").fadeTo("slow", 0.8);
    $("section div img").eq(0).attr("src",keptomb[index].eleresiut);
    $("section div h3").eq(0).text(keptomb[index].cim);
   index -=1;
   if(index<0){
       index=keptomb.length-1;
   }
}
function jobb(){
    
     $("section div img").eq(0).attr("src",keptomb[index].eleresiut);
    $("section div h3").eq(0).text(keptomb[index].cim);
   index +=1;
    if(index===keptomb.length){
        index=0;
    }  
}