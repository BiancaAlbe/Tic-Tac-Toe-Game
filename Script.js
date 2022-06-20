window.onload = function gridGenerate() {
    for (var i = 1; i <= 3; ++i) {
        for (var j = 1; j <= 3; ++j) {
            document.getElementById('test1').innerHTML += "<div id=table1(" + i + "," + j + ") onclick = Clicks("+ i +","+ j +") class = click ></div>";
        }
        document.getElementById('test1').innerHTML += '<br>';
    }
    
}

let verify = 0, nrx1 = 0, nrx2 = 0, nrx3 = 0, nro1 = 0, nro2 = 0, nro3 = 0, nrj1 = 0, nrj2 = 0, nrj3 = 0;
let nrdiagonal_x_p = 0, nrdiagonal_x_s = 0, nrdiagonal_o_p = 0, nrdiagonal_o_s = 0, nri1 = 0, nri2 = 0, nri3 = 0;
stop_v = 0;

function Clicks(i,j) {
    if (stop_v === 1) {
        return;
    }
    let z = document.getElementById('table1('+i+","+j+')').innerText;
    if (verify === 0 && z != 'X' && z != 'O') {
        document.getElementById('table1('+i+","+j+')').innerHTML= 'X';
        verify = 1;
        if (i === 1) {
            ++nrx1;
        }
        if (i === 2) {
            ++nrx2;
        }
        if (i === 3) {
            ++nrx3;
        }
        if (i === j) {
            ++nrdiagonal_x_p;
        }
        if (i + j === 4) {
            ++nrdiagonal_x_s;
        }
        if (j === 1) {
            ++nrj1;
        }
        if (j === 2) {
            ++nrj2;
        }
        if (j === 3) {
            ++nrj3;
        }

    } else if (verify === 1 && z != 'X' && z != 'O') {
        document.getElementById('table1('+i+","+j+')').innerHTML= 'O';
        verify = 0;
        if (j === 1) {
            ++nro1;
        }
        if (j === 2) {
            ++nro2;
        }
        if (j === 3) {
            ++nro3;
        }
        if (j === i) {
            ++nrdiagonal_o_p;
        }
        if (j + i === 4) {
            ++nrdiagonal_o_s;
        }
        if (i === 1) {
            ++nri1;
        }
        if (i === 2) {
            ++nri2;
        }
        if (i === 3) {
            ++nri3;
        }
    }
    
    if (nrx1 === 3 || nrx2 === 3 || nrx3 === 3 || nrdiagonal_x_p === 3 || nrdiagonal_x_s === 3 || nrj1 === 3 || nrj2 === 3 || nrj3 === 3) {
        document.getElementById('afisare').innerText = ' X - You have won';
        stop_v = 1;
    } 
    if (nro1 === 3 || nro2 === 3 || nro3 === 3 || nrdiagonal_o_p === 3 || nrdiagonal_o_s === 3 || nri1 === 3 || nri2 === 3 || nri3 === 3) {
        document.getElementById('afisare').innerText = ' O - You have won';
        stop_v = 1; 
    }
}