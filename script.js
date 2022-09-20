/**
 * Javascript coding task 2-1
 * ---description---
 * 1. Create variables to represent scores of exams for Matt and Simon and set values 80 and 45;
 * 2. Create variable to set the lower limit for passing an exam and assign to it value as 51;
 * 3. Write the condition in if statement, which will check if both students have passed an exam and log the result in console;
 * 4. Use else if statement in order to check if one of the students has passed an exam and 
 * log the result in console;
 * 5. Use else statement in order to display in console that both students have failed;
 * 6. In case of passing the exam by one of the students, find out which one was that and 
 * display in console as an additional information the student name and his points
 * 7. Test all the possible cases (a. both students passed; b. Matt passed and Simon 
 * failed; c. Simon passed and Matt failed; d. both students failed).
 */
  
  
  const scoreMatt = 80;
  const scoreSimon = 49;
  const passScore = 51;
  if(scoreMatt >= passScore && scoreSimon >= passScore){
    console.log("Both students passed");
  }else if(scoreMatt >= passScore && scoreSimon <= passScore){
    console.log("Matt passed and Simon failed");
  }else if(scoreMatt <= passScore && scoreSimon >= passScore){
    console.log("Simon passed and Matt failed");
  }else{
    console.log("Both students failed");
  }



/**
 * Javascript coding task 2-2
 * ---description---
 *1. Create an array - students, insert four items, which should be objects and have three properties: name, score1, score2, with the following values:
 *          a. John, 47, 46
 *          b. Bob, 23, 24
 *          c. Nick, 40, 35
 *          d. Alex, 44, 45
 * 
 *2. Suppose that, students have chance to get different degrees of diploma, like A, B, C, D, E and those degrees are relevant to the following passing limits 91, 81, 71, 61, 51. According to that, create two arrays for passing limits and for degrees
 * 
 *3. Create function which will calculate total score (score1 + score2) for each student.
 * 
 *4. Create function and use in it for loops, if else statements and whatever you need, in order to figure out, which student has passed an exam and what kind of degree he has got.
 * 
 *5. Display the final result in console.
 */


const students = [['John', 47, 46],['Bob', 23, 24],['Nick', 40, 35],['Alex', 44, 45]];
