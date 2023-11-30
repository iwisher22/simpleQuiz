const questions = [
	{
		que: "Which of the following is a client site language?",
		a: "Java",
		b: "C",
		c: "Python",
		d: "JavaScript",
		correct: "d",
	},
	{
		que: "What does HTML stand for?",
		a: "Hypertext Markup Language",
		b: "Cascading Style Sheet",
		c: "Jason Object Notation",
		d: "Helicopters Terminals Motorboats Lamborginis",
		correct: "a",
	},
	{
		que: "What year was JavaScript launched?",
		a: "1996",
		b: "1995",
		c: "1994",
		d: "none of the above",
		correct: "b",
	},
	{
		que: "What does CSS stands for?",
		a: "Hypertext Markup Language",
		b: "Cascading Style Sheet",
		c: "Jason Object Notation",
		d: "Helicopters Terminals Motorboats Lamborginis",
		correct: "b",
	},
];

let index = 0;
let total = questions.length;
let right = 0,
	wrong = 0;

const quesBox = document.getElementById("quesBox");
const optionInput = document.querySelectorAll(".options");

const loadData = () => {
	if (index === total) {
		return endQuiz();
	} else {
		reset();
	}

	const data = questions[index];
	quesBox.innerText = `${index + 1}) ${data.que}`;
	optionInput[0].nextElementSibling.innerText = data.a;
	optionInput[1].nextElementSibling.innerText = data.b;
	optionInput[2].nextElementSibling.innerText = data.c;
	optionInput[3].nextElementSibling.innerText = data.d;
};

const submitQuiz = () => {
	const data = questions[index];
	const ans = getAnswer();
	if (ans === data.correct) {
		right++;
	} else {
		wrong++;
	}
	index++;
	loadData();

	return;
};

const getAnswer = () => {
	optionInput.forEach((input) => {
		if (input.checked) {
			return input.value;
		}
	});
};

const reset = () => {
	optionInput.forEach((input) => {
		input.checked = false;
	});
};

const endQuiz = () => {
	document.getElementById("box").innerHTML = `<h3>Thank you for playaing </h3>`;
};

loadData();
