const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
let input = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'AC') {
      input = '';
      display.textContent = '0';
    } else if (value === '←') {
      input = input.slice(0, -1);
      display.textContent = input || '0';
    } else if (value === '=') {
      try {
        input = eval(input).toString();
        display.textContent = input;
      } catch {
        display.textContent = 'Error';
        input = '';
      }
    } else {
      input += value;
      display.textContent = input;
    }
  });
});
