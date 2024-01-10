
let currentStateOFTabel = false;

function changeDayAndFull() {

    if(currentStateOFTabel === false) {

        Array.from(document.getElementsByClassName('day')).forEach(element => {
            element.classList.toggle('hidden', ("d" + new Date().getDay()) !== element.id);
    
        });
    
        let element = document.getElementById("timetable");
    
        element.classList.add('dayTable');
        element.classList.remove('fullTable');

        currentStateOFTabel = true;

    }  else{

        Array.from(document.getElementsByClassName('day')).forEach(element => {
            element.classList.remove('hidden', ("d" + new Date().getDay()) !== element.id);
    
        });
    
        let element = document.getElementById("timetable");
    
        element.classList.remove('dayTable');
        element.classList.add('fullTable');

        currentStateOFTabel = false;

    }

}


document.getElementById("changeBtn").addEventListener("click", changeDayAndFull);