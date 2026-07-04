let count = 0; // woah, number. super cool.

let counter = document.getElementById("count"); // grab stuff
let button = document.getElementById("click");
let grade = document.getElementById("grade")

function upd(){
    counter.innerHTML = `you have <b>${count}</b> clicks`; // set counter

    if (count < 10){                                       // determine and update grade
        grade.innerHTML = `your grade: <b>F</b>`;
    }
    else if (count > 10, count <= 30){
        grade.innerHTML = `your grade: <b>D</b>`;
    }
    else if (count > 30, count <= 50){
        grade.innerHTML = `your grade: <b>C</b>`;
    }
    else if (count > 50, count <= 80){
        grade.innerHTML = `your grade: <b>B</b>`;
    }
    else if (count > 80, count <= 120){
        grade.innerHTML = `your grade: <b>A</b>`;
    }
    else if (count > 120, count <= 200){
        grade.innerHTML = `your grade: <b>A+</b>`;
    }
    else if (count > 200){
        grade.innerHTML = `your grade: <b>S</b>`;
    }
    else if (count > 6767676767676767676767){
        grade.innerHTML = `your grade: <b>S+<b>`;
    }
};

button.onclick = function(){ // clicky clicky
    count += 1
    upd()
};