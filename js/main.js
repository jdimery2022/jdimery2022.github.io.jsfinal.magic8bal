const responses = ["Hazy with a 99% chance of No.", 
    "Think about that question and ask again.",
    "Now is not a good time, ask again in about 90 days.",
    "For sure.",
    "Doubtful.",
    "Ask again later in about one year.",
    "Don't rely on it.",
    "Yes, maybe.",
    "It's possible.",
    "No.",
    "Dream on.",
    "Outlook is sunny with a 99% chance of Yes.",
    "Better not tell you now, ask in 30 days.",
    "Signs point to yes.",
    "Don't count on it.",
    "Outlook stormy with a 75% chance of No.",
    "Yes - in approximately 100 light years.",
];



window.onload = function () {
    const numberEight = document.getElementById("numberEight");
    const response = document.getElementById("response");
    const eightBall = document.getElementById("eight-ball");
    const question = document.getElementById("question");

    eightBall.addEventListener("click", function () {
        if (question.value.length < 1) {
            alert('What do you want to know?');
        } else {
            
            numberEight.innerText = "";
            var num = Math.floor(Math.random() * Math.floor(responses.length));
            response.innerText = responses[num];
        }
    });
};
