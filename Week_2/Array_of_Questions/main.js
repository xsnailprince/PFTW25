const QnA = [
   {question: 'A popular meme features what green Muppet drinking a glass of tea, often used to passive aggressively judge people for doing things they’re not supposed to?',
    answer: 'Kermit the Frog',
   },
   {question: 'The "ice bucket challenge" went viral in the summer of 2014 and it promoted awareness for a disease associated with a professional athlete. What is the initialism for the disease?',
    answer: 'ALS',
   },
   {question: 'There is a meme from a 1960s cartoon of three different versions of what Marvel superhero pointing at each other? It was recreated in a 2018 animated film and referenced in promotional material for a 2021 film.',
    answer: 'SpiderMan',
   },
   {question: 'Which Korean pop song and its horseback-riding dance by PSY went viral worldwide in 2012?',
    answer: 'Gangnam Style',
   },
   {question: 'Often used to express defiance, one popular meme shows "Real Housewives of Beverly Hills" cast member Taylor Armstrong crying, pointing, and yelling at what animal?',
    answer: 'Cat',
   },
];

const randomizer = Math.round(Math.random() * QnA.length -1);

let userAnswer = window.prompt(QnA[randomizer].question);

window.alert('you answered ' + userAnswer + '. The correct answer was ' + QnA[randomizer].answer);


