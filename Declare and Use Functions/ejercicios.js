//Ejercicio 1
function payment(transactions, total){
    var transactions = parseInt(prompt("Number of transactions"));
    var total = parseInt(prompt("Total of cost of payments"));
    alert("The final payment is: " +((transactions*3)+total)*1.01);
}

//Ejercicio 2
function names(a, b, c){
    var a = prompt("Tell me your name ");
    var b = prompt("Tell another name ");
    var c = prompt("Tell another name ");
console.log("Welcome " + a + ", " + b + ", " + c + ".");
}
names();

//Ejercicio 3
function age (year);{
    var year = prompt("Tell me your year of birth");
    alert(2022-year);
}
age();

//Ejercicio 4
function nameAge(n1, n2, n3, a1, a2, a3){
    var n1 = prompt("Tell me your name");
    var a1 = prompt("Tell me" + n1 + "age");
    var n2 = prompt("Tell me your name");
    var a2 = prompt("Tell me" + n2 + "age");
    var n3 = prompt("Tell me your name");
    var a3 = prompt("Tell me" + n3 + "age");
    alert("Welcome " +n1 + ", you are " + a1 + ". " + "Welcome " + n3 + "you are " + a3 + ". ")
    }
    nameAge();

    //Challenge yourself
    function grade (){
        var grade = parseInt(prompt("Tell me the grade "));
        if(grade >= 5 && grade <= 8 ){
            alert(true);
        }
        else if (grade > 8 || grade < 11){ 
            alert ("Excellent")
        }
        else if (grade == 11){
            alert ("Perfect")
            }
            else if(grade >= 0 && grade < 5){
            alert(false);
        }
        else{
            alert("Our of range")
        }
    }
    grade();