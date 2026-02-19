const dateElements = document.getElementsByClassName("date");
const just = new Date();

const format = just.toLocaleString('en-US', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: true
});

const answer = format.replace(',', "");

dateElements[0].innerText = answer;