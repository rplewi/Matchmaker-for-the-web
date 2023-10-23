console.log("Matchmaker Starting...");

    const QUESTION_1_ANSWER = 5
    const QUESTION_1_WEIGHT = 3

    const QUESTION_2_ANSWER = 3
    const QUESTION_2_WEIGHT = 2

    const QUESTION_3_ANSWER = 5
    const QUESTION_3_WEIGHT = 3

    const QUESTION_4_ANSWER = 5
    const QUESTION_4_WEIGHT = 1
    
    const QUESTION_5_ANSWER = 1
    const QUESTION_5_WEIGHT = 1

    let final = 100

function displayText(){
    document.getElementById('result_text').innerHTML = "Your Results: " + final + "%"
    document.getElementById('Q1Response').innerHTML = ("Your Answer: " + SelectedText1 + ", took " + (PointsQ1) + " points off")
    document.getElementById('Q2Response').innerHTML = ("Your Answer: " + SelectedText2 + ", took " + (PointsQ2) + " points off");
    document.getElementById('Q3Response').innerHTML = ("Your Answer: " + SelectedText3 + ", took " + (PointsQ3) + " points off");
    document.getElementById('Q4Response').innerHTML = ("Your Answer: " + SelectedText4 + ", took " + (PointsQ4) + " points off");
    document.getElementById('Q5Response').innerHTML = ("Your Answer: " + SelectedText5 + ", took " + (PointsQ5) + " points off");
// Loop used to see what response you should get based on your percentage
    if (final < 80 > 70 ){
        document.getElementById("resultReaction").innerHTML = "Sorry I don't think this is going to work" 
    } else if (final < 70){
        document.getElementById("resultReaction").innerHTML = "Ew, no thanks"
    } else {
        document.getElementById("resultReaction").innerHTML = "We should definitely go on a date"
    }
}

 //Calculates Scores from Values per question
 function calculateQ1(){
    const questionOne = document.getElementById("Question-1").selectedOptions[0].value;
    let question1Compatibility = QUESTION_1_WEIGHT * Math.abs(QUESTION_1_ANSWER - questionOne)
    final = final - question1Compatibility
    PointsQ1 = question1Compatibility.toString();
    console.log(question1Compatibility)
    
 }

 function calculateQ2(){
    const questionTwo = document.getElementById("Question-2").selectedOptions[0].value
    let question2Compatibility = QUESTION_2_WEIGHT * Math.abs(QUESTION_2_ANSWER - questionTwo)
    final = final - question2Compatibility
    PointsQ2 = question2Compatibility.toString();
    console.log(question2Compatibility)

 }

 function calculateQ3(){
    const questionThree = document.getElementById("Question-3").selectedOptions[0].value
    let question3Compatibility = QUESTION_3_WEIGHT * Math.abs(QUESTION_3_ANSWER - questionThree)
    final = final - question3Compatibility
    PointsQ3 = question3Compatibility.toString();
    console.log(question3Compatibility)

 }

 function calculateQ4(){
    const questionFour = document.getElementById("Question-4").selectedOptions[0].value
    let question4Compatibility = QUESTION_4_WEIGHT * Math.abs(QUESTION_4_ANSWER - questionFour)
    final = final - question4Compatibility
    PointsQ4 = question4Compatibility.toString();
    console.log(question4Compatibility)

 }

 function calculateQ5(){
    const questionFive = document.getElementById("Question-5").selectedOptions[0].value
    let question5Compatibility = QUESTION_5_WEIGHT * Math.abs(QUESTION_5_ANSWER - questionFive)
    final = final- question5Compatibility
    PointsQ5 = question5Compatibility.toString();
    console.log(question5Compatibility)

 }

// Function that calculates and recieves values
function compatibilityCalculator(){
    calculateQ1()
    const SelectedText1 = document.getElementById("Question-1").selectedOptions[0].text;
    var dropdown1 = document.getElementById("Question-1");

    calculateQ2()
    const SelectedText2 = document.getElementById("Question-2").selectedOptions[0].text;
    var dropdown2 = document.getElementById("Question-1");


    calculateQ3()
    const SelectedText3 = document.getElementById("Question-3").selectedOptions[0].text;
    var dropdown3 = document.getElementById("Question-1");


    calculateQ4()
    const SelectedText4 = document.getElementById("Question-4").selectedOptions[0].text;
    var dropdown4 = document.getElementById("Question-1");


    calculateQ5()
    const SelectedText5 = document.getElementById("Question-5").selectedOptions[0].text;
    var dropdown5 = document.getElementById("Question-1");


    if (dropdown1,dropdown2,dropdown3,dropdown4,dropdown5.value =="0"){
        alert("Please select an actual option")
    } else{
    document.getElementById('result_text').innerHTML = "Your Results: " + final + "%"
    document.getElementById('Q1Response').innerHTML = ("Your Answer: " + SelectedText1 + ", with a weight of " + QUESTION_1_WEIGHT + ", took " + (PointsQ1) + " points off");
    document.getElementById('Q2Response').innerHTML = ("Your Answer: " + SelectedText2 + ", with a weight of " + QUESTION_2_WEIGHT + ", took " + (PointsQ2) + " points off");
    document.getElementById('Q3Response').innerHTML = ("Your Answer: " + SelectedText3 + ", with a weight of " + QUESTION_3_WEIGHT + ", took " + (PointsQ3) + " points off");
    document.getElementById('Q4Response').innerHTML = ("Your Answer: " + SelectedText4 + ", with a weight of " + QUESTION_4_WEIGHT + ", took " + (PointsQ4) + " points off");
    document.getElementById('Q5Response').innerHTML = ("Your Answer: " + SelectedText5 + ", with a weight of " + QUESTION_5_WEIGHT + ", took " + (PointsQ5) + " points off");
// Loop used to see what response you should get based on your percentage
    if (final < 80 > 70 ){
        document.getElementById("resultReaction").innerHTML = "Sorry I don't think this is going to work" 
    } else if (final < 70){
        document.getElementById("resultReaction").innerHTML = "Ew, no thanks"
    } else {
        document.getElementById("resultReaction").innerHTML = "We should definitely go on a date"
    }
}
document.getElementById("calculateButton").disabled = true;
document.getElementById("Question-1").disabled = true;
document.getElementById("Question-2").disabled = true;
document.getElementById("Question-3").disabled = true;
document.getElementById("Question-4").disabled = true;
document.getElementById("Question-5").disabled = true;

}







