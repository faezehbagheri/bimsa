var i =0;
var j =0;
var k =0;
function leftState(){
    //برای چرخش لوگو ها به سمت چپ
    $(".orbit__circle--8").removeClass("orbit__circle--8").addClass("orbit__circle--1");
    $(".orbit__circle--7").removeClass("orbit__circle--7").addClass("orbit__circle--8");
    $(".orbit__circle--6").removeClass("orbit__circle--6").addClass("orbit__circle--7");
    $(".orbit__circle--5").removeClass("orbit__circle--5").addClass("orbit__circle--6");
    $(".orbit__circle--4").removeClass("orbit__circle--4").addClass("orbit__circle--5");
    $(".orbit__circle--3").removeClass("orbit__circle--3").addClass("orbit__circle--4");
    $(".orbit__circle--2").removeClass("orbit__circle--2").addClass("orbit__circle--3");
    
    if((i%8) == 0){
        $(".orbit__circle--1").first().removeClass("orbit__circle--1").addClass("orbit__circle--2");
        i++;
    }else{            
        $(".orbit__circle--1").last().removeClass("orbit__circle--1").addClass("orbit__circle--2");
        i++;
    }
    //برای چرخش دایره های کوچیک به سمت چپ
    $(".orbit__circle-small--3").removeClass("orbit__circle-small--3").addClass("orbit__circle-small--1");
    $(".orbit__circle-small--2").removeClass("orbit__circle-small--2").addClass("orbit__circle-small--3");

    if((j%3) == 0){
        $(".orbit__circle-small--1").first().removeClass("orbit__circle-small--1").addClass("orbit__circle-small--2");
        j++;
    }else{            
        $(".orbit__circle-small--1").last().removeClass("orbit__circle-small--1").addClass("orbit__circle-small--2");
        j++;
    }
}
function rightState(){
    $(".orbit__circle--1").removeClass("orbit__circle--1").addClass("orbit__circle--8");
    $(".orbit__circle--2").removeClass("orbit__circle--2").addClass("orbit__circle--1");
    $(".orbit__circle--3").removeClass("orbit__circle--3").addClass("orbit__circle--2");
    $(".orbit__circle--4").removeClass("orbit__circle--4").addClass("orbit__circle--3");
    $(".orbit__circle--5").removeClass("orbit__circle--5").addClass("orbit__circle--4");
    $(".orbit__circle--6").removeClass("orbit__circle--6").addClass("orbit__circle--5");
    $(".orbit__circle--7").removeClass("orbit__circle--7").addClass("orbit__circle--6");
    if((i%8) == 0){
        $(".orbit__circle--8").last().removeClass("orbit__circle--8").addClass("orbit__circle--7");
        i--;
    }else{            
        $(".orbit__circle--8").first().removeClass("orbit__circle--8").addClass("orbit__circle--7");
        i--;
    }
    $(".orbit__circle-small--1").removeClass("orbit__circle-small--1").addClass("orbit__circle-small--3");
    $(".orbit__circle-small--2").removeClass("orbit__circle-small--2").addClass("orbit__circle-small--1");

    if((j%3) == 0){
        $(".orbit__circle-small--3").last().removeClass("orbit__circle-small--3").addClass("orbit__circle-small--2");
        j--;
    }else{            
        $(".orbit__circle-small--3").first().removeClass("orbit__circle-small--3").addClass("orbit__circle-small--2");
        j--;
    }
}

var show_aghsat= false;
var show_info= false;
function showAnswer(selector){
    document.querySelector(selector).classList.toggle("show-answer");
}
// var
function showInfo(selector){
    show_info = !show_info;
    document.querySelector(selector).classList.toggle('show-info');
    if(show_info && !show_aghsat){
        document.querySelector(selector).classList.remove('show-aghsat');
    }
    if(!show_info && show_aghsat){
        document.querySelector(selector).classList.remove('show-aghsat');
    }
}
function showAghsat(selector){
    show_aghsat=true;
    document.querySelector(selector).classList.add('show-aghsat');
}