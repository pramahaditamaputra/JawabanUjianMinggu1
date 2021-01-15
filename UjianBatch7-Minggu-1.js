let tableMatrix1 = document.getElementById('matrix1');
let tableMatrix2 = document.getElementById('matrix2');
let tableMatrix11 = document.getElementById('dataMatrix1');
let tableMatrix22 = document.getElementById('dataMatrix2');
let matrixColumn = document.getElementById('matrixColumn');

let res1 = "";
let res2 = "";
let matrixColumnValue1 = [];
let matrixColumnValue2 = [];

let matrixResult = [];
let matrixResultColumn = "";
let idNilai1 = "nilai1";
let idNilai2 = "nilai2";

tableMatrix1.hidden = true;
tableMatrix2.hidden = true;
document.getElementById('matrixResult').hidden = true;
document.getElementById('kalkulasi').hidden = true;

function generateMatrixColumn() { 
    console.log(matrixColumn.value);
    document.getElementById('matrixResult').hidden = true;
    document.getElementById('kalkulasi').hidden = false;
    tableMatrix1.hidden = false;
    tableMatrix2.hidden = false;
    tableMatrix11.innerHTML = '';
    tableMatrix22.innerHTML = '';
    matrixColumnValue1 = [];
    matrixColumnValue2 = [];
    res1 = [];
    res2 = [];

    for (let i = 0; i < matrixColumn.value*matrixColumn.value; i++) { 
        matrixColumnValue1.push(`<td> <input type="number" id="nilai1${i}"> </td>`);
        matrixColumnValue2.push(`<td> <input type="number" id="nilai2${i}"> </td>`);
    }
    
    for (i = 0; i < matrixColumnValue1.length; i++) { 
        res1 += matrixColumnValue1[i];
        res2 += matrixColumnValue2[i];
    }

    tableMatrix11.innerHTML = res1;
    tableMatrix22.innerHTML = res2;
}

function tambah() {
    document.getElementById('matrixResult').hidden = false;
    matrixResult = [];
    matrixResultColumn = "";
    for (let i = 0; i < matrixColumnValue1.length; i++) { 
        matrixResult.push(`${parseInt(document.getElementById(idNilai1+[i]).value) + parseInt(document.getElementById(idNilai2+[i]).value)}`);
    }

    for (let i = 0; i < matrixResult.length; i++) { 
        matrixResultColumn += `<td> <input type="number" value="${matrixResult[i]}"> </td>`;
    }
    console.log(matrixResultColumn);
    document.getElementById('result').innerHTML = matrixResultColumn;
}