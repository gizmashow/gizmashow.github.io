var date_end = new Date("June 30 2020 00:00:00");
var fun_old = '';
var div = document.getElementById("block");

function clock(){
            var date = new Date();
            var time = date.getHours()+':'+date.getMinutes()+':'; 
            if (date.getSeconds() <10){
                time += "0" + date.getSeconds();
            }
            else{
                time += date.getSeconds();
            }
            let m = document.getElementById('clock');
            m.innerHTML = time;
}
setInterval(clock, 1000);    

function randomInteger(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}


div.addEventListener("click", mouselog, {once:false});
 //{once:false}
function mouselog() {
    div.className = "container";
    switch(randomInteger(1, 11)){
        case 1: {
            fun = "one"; 
            break
        }
        case 2: {
            fun = 'two'; 
            break
        }
        case 3: {
            fun = 'three'; 
            break
        }
        case 4: {
            fun = 'four'; 
            break
        }
        case 5: {
            fun = 'five'; 
            break
        }
        case 6: {
            fun = 'six'; 
            break
        }
        case 7: {
            fun = 'seven'; 
            break
        }
        case 8: {
            fun = 'eight'; 
            break
        }
        case 9: {
            fun = 'nine'; 
            break
        }
        case 10: {
            fun = 'ten'; 
            break
        }
        case 11: {
            fun = 'eleven'; 
            break
        }
    }
    
    div.className = div.className + fun;
}

