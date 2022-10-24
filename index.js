const addShow = document.getElementById('newShow');
const list = document.getElementById('container');
const input = document.getElementById('inputField');
const nameSort = document.getElementById('nameSort');
const ratingSort = document.getElementById('ratingSort');





addShow.addEventListener('click', function(){
    document.querySelector('.bg-modal').style.display = 'flex';
})
document.querySelector('.close').addEventListener('click', function(){
    document.querySelector('.bg-modal').style.display = 'none';
})



var list1= [];
var list2= [];
var list3= [];

var n = 1;
var x = 0;


function addRow(){
    var AddRown = document.getElementById('tab');
    var newRow = AddRown.insertRow(n);
    
    
    list1[x] = document.getElementById("nameOfShow").value;
    list2[x] = document.getElementById("ratingOfShow").value;
    list3[x] = document.getElementById("tot").value;

    if(list1[x] == "" || list2[x] > 10){
        alert("String is empty!");
        alert("No numbers higher than 10!");
    }else{
        var cel1 = newRow.insertCell(0);
        var cel2 = newRow.insertCell(1);
        var cel3 = newRow.insertCell(2);
    }



    cel1.innerHTML = list1[x];
    cel2.innerHTML = list2[x];
    cel3.innerHTML = n++;


    nameOfShow.value = "";
    ratingOfShow.value = "";


    

}




