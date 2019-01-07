let sendBtn = document.querySelector('#sendBtn');
let messageIn = document.querySelector('#messageIn');
let messageOut = document.querySelector('#messageOut');

sendBtn.addEventListener('click', sendMsg)

function sendMsg (){
	let content = messageIn.value;

	if (content === '') {
		alert('Please enter a valid value');
	}
	else {
	messageOut.innerHTML = content;
	messageIn.value = '';
	}


}