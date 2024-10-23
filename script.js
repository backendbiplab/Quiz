
const quizData = [{
      question: 'Which of the following is a client site language?',
      a: "Java",
      b: "Python",
      c: "C",
      d: "Javascript",
       correct: "d",
},
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
      b: "Cascading Style Sheet",
      c: "Jason Object Notation",
      d: "Document Object Model",
       correct: "a",
  },
   
  {
    question: "What Year Was Javascript Launched?",
    a: "1996",
      b: "1995",
      c: "1994",
      d: "None of the above",
       correct: "b",
  },

  {
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
      b: "Cascading Style Sheet",
      c: "Jason Object Notation",
      d: "Document Object Model",
       correct: "b",
  },

  {
    question: "What does DOM stands for?",
    a: "Hypertext Markup Language",
      b: "Cascading Style Sheet",
      c: "Jason Object Notation",
      d: "Document Object Model",
       correct: "d",
  }
] 
  let index = 0;
  let correct = 0,
      incorrect = 0,
      total = quizData.length;
 let questionBox = document.getElementById('questionBox');
 let allInputs = document.querySelectorAll("input[type='radio']") 
 const loadQuestion = () =>{
   if(total === index){
    return quizEnd()
   }
   reset()
   const data = quizData[index]
   questionBox.innerHTML = `${index + 1} ${data.question}`
   allInputs[0].nextElementSibling.innerText = data.a
   allInputs[1].nextElementSibling.innerText = data.b
   allInputs[2].nextElementSibling.innerText = data.c
   allInputs[3].nextElementSibling.innerText = data.d
 }  
  document.querySelector("#submit").addEventListener('click', function(){
    const data = quizData[index]
    const ans = getAnswer()
    if(ans === data.correct){
      correct++;
    } else{
      incorrect++;
    }
     index++;
     loadQuestion()
  }) 
   
   const getAnswer = ()=>{
    let ans; 
    allInputs.forEach((inputE1)=>{
      if(inputE1.checked){
        ans = inputE1.value;
      }
    }
  )
    return ans;
   }

    const reset = ()=>{
      allInputs.forEach((inputE1)=>{
        inputE1.checked = false;
      })
    }
     const quizEnd = () =>{
      document.getElementsByClassName("container")[0].innerHTML = `<div class="col">
       <h3 class="w-100"> Hii, you have scored ${correct} / ${total} </h3>
       </div>
      `
     }
      loadQuestion(index)