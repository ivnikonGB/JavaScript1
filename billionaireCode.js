var ans, questionNumber, score = 0;

do {
    questionNumber = Math.floor(Math.random() * questions.length)
    ans = showQuestion(questionNumber);
    if(ans != -1) ans = checkAnswer(ans, questionNumber);
} while(ans != -1);

alert("Игра окончена.\n Вы набрали: " + score + " очков.");

// functions
function showQuestion(questionNumber) {
    var text, answer, ret;
    var text = "Вопрос: " + questions[questionNumber].question + "\nВарианты ответов:\n";
    for (answer in questions[questionNumber].answers) {
        answerNumber = parseInt(answer) + 1;
        text += answerNumber + ": " + questions[questionNumber].answers[answer] + "\n";
    }
    text += "Введите номер правильного ответа или -1 для выхода";
    do
        ret = prompt(text, 1);
    while(!checkInput(ret))
    return ret;
}

function checkInput(ret) {
    if((ret >= 1 && ret <= 4) || ret == -1)
        return true
    else {
        alert("Введено некорректное значение!!!");
        return false;
    }
}

function checkAnswer(ans, questionNumber) {
    if(ans == questions[questionNumber].correctAnswer + 1) {
        alert("Правильно!!!");
        score +=100;
    } else {
        alert("Неправильно!!! Вы покидаете игру!!!");
        ans = -1;
    }
    return ans;
}