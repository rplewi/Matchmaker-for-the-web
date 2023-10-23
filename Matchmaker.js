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

    calculateQ2()
    const SelectedText2 = document.getElementById("Question-2").selectedOptions[0].text;

    calculateQ3()
    const SelectedText3 = document.getElementById("Question-3").selectedOptions[0].text;

    calculateQ4()
    const SelectedText4 = document.getElementById("Question-4").selectedOptions[0].text;

    calculateQ5()
    const SelectedText5 = document.getElementById("Question-5").selectedOptions[0].text;

    document.getElementById('result_text').innerHTML = "Your Results: " + final + "%"
    document.getElementById('Q1Response').innerHTML = ("Your Answer: " + SelectedText1 + ", gave you " + (PointsQ1) + " points")
    document.getElementById('Q2Response').innerHTML = ("Your Answer: " + SelectedText2 + ", gave you " + (PointsQ2) + " points");
    document.getElementById('Q3Response').innerHTML = ("Your Answer: " + SelectedText3 + ", gave you " + (PointsQ3) + " points");
    document.getElementById('Q4Response').innerHTML = ("Your Answer: " + SelectedText4 + ", gave you " + (PointsQ4) + " points");
    document.getElementById('Q5Response').innerHTML = ("Your Answer: " + SelectedText5 + ", gave you " + (PointsQ5) + " points");
// Loop used to see what response you should get based on your percentage
    if (final < 50 ){
        document.getElementById("resultReaction").innerHTML = "Dude No" 
    } else if (final < 70){
        document.getElementById("resultReaction").innerHTML = "Bruh"
    } else {
        document.getElementById("resultReaction").innerHTML = "Dude lets hang out"
    }
}







