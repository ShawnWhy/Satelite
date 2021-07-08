var panels = $(".section1 .Panel");

console.log(panels)
for(i=0;i<panels.length;i++){
    // $(panels[i]).css("left",i*100+"%")

    $(panels[i]).css("transform","rotateY("+i*36+"deg )translateZ(300px)")

    
}
var i=0
setInterval(() => {
    for(let i=0;i<panels.length;i++){
        let random = Math.random()*50+5  
        // $(panels[i]).css("left",i*100+"%")
    
        $(panels[i]).css("height",random+"%")
    
        
    }
    
    $(".section1").css("transform","rotateY("+i*10+"deg)")
    i++; 
    if(i==36){
        i=0;
    }
    
}, 300);

var panels2 = $(".section2 .Panel");
console.log(panels2)
for(i=0;i<panels2.length;i++){
    // $(panels[i]).css("left",i*100+"%")

    $(panels2[i]).css("transform","rotateY("+i*36+"deg )translateZ(100px)")

    
}
var i=0
setInterval(() => {
    for(let i=0;i<panels.length;i++){
        let random = Math.random()*50+5  
        // $(panels[i]).css("left",i*100+"%")
    
        $(panels2[i]).css("height",random+"%")
    
        
    }
    
    $(".section2").css("transform","rotateY("+i*10+"deg)")
    i++; 
    if(i==36){
        i=0;
    }
    
}, 300);