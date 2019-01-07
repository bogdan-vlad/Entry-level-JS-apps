let quotes = [
{
	name: 'Stephen King',
	quote: 'Some quote here'
},
{
	name: 'John F. Kennedy',
	quote: 'This is the second quote'
},
{
	name: 'Abraham Lincoln',
	quote: 'This is definetelly the third one'
},
{
	name: 'Leonardo Da Vinci',
	quote: 'Wow, a forth quote'
}
]

let quoteBtn = document.querySelector('#quoteBtn');
let quoteAuthor = document.querySelector('#quoteAuthor');
let quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', displayQuote);

function displayQuote () {
	let number = Math.floor(Math.random()*quotes.length);
	quoteAuthor.innerHTML = quotes[number].name;
	quote.innerHTML = quotes[number].quote;

}

