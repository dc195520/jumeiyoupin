var minutes=30;
var seconds=0;
var ms=0;
var myTimer=null;

function startf(){
    if(myTimer==null){
        myTimer=setInterval(addf,10);
    }
}

function show_time(){
    ms--;
    if(ms<0){
        seconds--;
        ms=9;
    }
    if(seconds<0){
        minutes--;
        seconds=59;
    }
    if(minutes<0){
        minutes=0;
        seconds=0;
        ms=0;
    }
    document.getElementById('car_time').innerHTML=("0"+minutes).toString().substr(-2)+":"+("0"+seconds).toString().substr(-2)+"."+("0"+ms).toString().substr(-1);
    setTimeout("show_time()",100);
}

