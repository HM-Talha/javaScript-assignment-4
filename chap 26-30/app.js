// ------Chapter # 26-30----

// ---Ques # 1
var number = 3.45214;
var round = Math.round(number);
var floor = Math.floor(number);
var ceil = Math.ceil(number);
document.write("number:" + " " + number + "<br>")
document.write("round off:" + " " + round + "<br>")
document.write("Floor value:" + " " + floor + "<br>")
document.write("ceil value:" + " " + ceil + "<br><br><br>")

// ---Ques # 2
var number1 = -2.673;
var round1 = Math.round(number1);
var floor1 = Math.floor(number1);
var ceil1 = Math.ceil(number1);
document.write("number:" + " " + number1 + "<br>")
document.write("round off:" + " " + round1 + "<br>")
document.write("Floor value:" + " " + floor1 + "<br>")
document.write("ceil value:" + " " + ceil1 + "<br><br><br>")

// ---Ques # 3
var num = Number(prompt("Enter Number for Absolute"));
var absolute =Math.abs(num);
document.write("<br><br>The Absolute Value Of "+num +" is "+ absolute);

// ---Ques # 4
var ran = Math.floor(Math.random() * 6 + 1);
var rand = Math.floor(Math.random() * 6 + 1);
document.write("Random dice value:" + " " + ran + "<br>")
document.write("Random dice value:" + " " + rand + "<br><br><br>")

// ---Ques #5
var toss = Math.floor(Math.random() * 2 + 1);
// document.write(toss)
if (toss == 1) {
    document.write(toss + "<br>")
    document.write("random coin value:" + " " + "heads" + "<br><br><br>")
} else {
    document.write(toss + "<br>")
    document.write("random coin value:" + " " + "tails" + "<br><br><br>")
}

// ---Ques #6
var randomNum = Math.floor(Math.random() * 100 + 1);
document.write("random number betwenn 1 and 100:" + " " + randomNum + "<br><br><br>")

// ---Ques #7
var userWeight = prompt("Enter Your Weight in 'kgs'")
var userWeight1 = userWeight.replace("kgs", "KIlograms")
document.write("the Weight of user is"+" "+userWeight )

// ---Ques #8
var scrtNum = Math.floor(Math.random() * 10 + 1)
var userNume = +prompt("Enter NUmber Between 1 and 10")
if (scrtNum == userNume){
    alert("Congratulations")
}else{
    alert("try Agein Dear.. the Number is"+" "+scrtNum)
}
