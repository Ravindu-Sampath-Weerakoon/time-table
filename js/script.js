
let currentStateOFTabel = false;
Array.from(document.getElementsByClassName('day')).forEach(element => {
    element.classList.toggle('hidden', ("d" + new Date().getDay()) !== element.id);
});



function changeDayAndFull(event) {

    const element = document.getElementById("timetable");

    if(currentStateOFTabel === false) {
        event.target.innerText = "Go to All days";
    }  else{
        event.target.innerText = "Go to today";
    }


    Array.from(document.getElementsByClassName('day')).forEach(element => {
        if( ("d" + new Date().getDay()) !== element.id ){
            element.classList.toggle('hidden');
        }
        
    });

    element.classList.toggle('dayTable');
    element.classList.toggle('fullTable');

    currentStateOFTabel = !currentStateOFTabel;

}


document.getElementById("changeBtn").addEventListener("click", changeDayAndFull);




