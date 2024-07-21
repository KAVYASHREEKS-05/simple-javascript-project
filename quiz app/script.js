const questions=[
    {
        question:"What does HTML stand for?",
        answers:[
            {choice:'HyperText Markup Language',correct:true},
            {choice:'Home Tool Markup Language',correct:false},
            {choice:'Hyperlinks and Text Markup Language',correct:false},
            {choice:'HyperTool Markup Language',correct:false}
       ]
    },
    {
        question:"Which CSS property is used to create space between the element's border and inner content?",
        answers:[
            {choice:`margin`,correct:false},
            {choice:'border-spacing',correct:false},
            {choice:'padding',correct:true},
            {choice:'spacing',correct:false}

        ]
    },
    {
        question:'Which property is used to change the background color of an element?',
        answers:[
            {choice:'color',correct:false},
            {choice:'background-color',correct:true},
            {choice:'bgcolor',correct:false},
            {choice:'background',correct:false}

        ]
    },
    {
        question:"What will be the output of console.log(typeof [1, 2, 3]) in JavaScript?",
        answers:[
            {choice:'array',correct:false},
            {choice:'number',correct:false},
            {choice:'object',correct:true},
            {choice:'undefined',correct:false}
        ]
    },
    {
        question:'Which keyword is used to declare a variable in JavaScript?',
        answers:[
            {choice:'var',correct:false},
            {choice:'let',correct:false},
            {choice:'const',correct:false},
            {choice:'All of the above',correct:true}


        ]
    }
]
const Question=document.querySelector('.question')
const Answers=document.querySelector('.answers')
const nextButton=document.querySelector('.next')


let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML='Next'
    showQuestions()
}

function showQuestions(){
    resetState()
    let currentQuestion=questions[currentQuestionIndex]
    let currentQuestionNo=currentQuestionIndex+1
    Question.innerHTML=currentQuestionNo+'.'+currentQuestion.question

    currentQuestion.answers.forEach((ans)=>{
        const button=document.createElement('button')
        button.innerHTML=ans.choice;
        console.log(ans.choice)
        button.classList.add('btn')
        Answers.appendChild(button)
        if(ans.correct){
            button.dataset.correct=ans.correct;
        }
        button.addEventListener('click',selectAnswer)

    })
}


function resetState(){
    nextButton.style.display="none";
    while(Answers.firstChild){
         Answers.removeChild(Answers.firstChild)
    }

}
function selectAnswer(e){
    const selectedAnswer=e.target;
    console.log(selectedAnswer)
    const isCorrect=selectedAnswer.dataset.correct==='true'
    if(isCorrect){
        selectedAnswer.classList.add('correct')
        score++;
    }
    else{
        selectedAnswer.classList.add('incorrect')
    }
    const answerButtons = document.querySelectorAll('.btn');
    answerButtons.forEach(button => {
        button.disabled = true;
    });
    nextButton.style.display='block'

    
}
function showScore(){
    resetState()
    Question.innerHTML=`You Scored ${score} out of ${questions.length}`
    nextButton.innerHTML='Play Again';
    nextButton.style.display='block'

}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestions()
    }
    else{
        showScore()
    }
}
nextButton.addEventListener('click',()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton()
    }
    else{
        startQuiz()
    }
})
startQuiz()