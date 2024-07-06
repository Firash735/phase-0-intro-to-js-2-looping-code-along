function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
function writeCards(names, event) {
    let messages = [];
    let i = 0;
    while (i < names.length) {
      messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
      i++;
    }
    return messages;
  }