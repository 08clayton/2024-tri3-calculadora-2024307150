 const calcs = document.querySelectorAll('.calc');

    calcs.forEach(calc => {
      const input = calc.querySelector('input');
      const buttons = calc.querySelectorAll('button:not([data-char="="])');
      const equal = calc.querySelector('[data-char="="]');

      equal.addEventListener('click', () => {
        input.value = eval(input.value);
      });

      buttons.forEach(button => {
        button.addEventListener('click', () => {
          input.value += button.textContent;
        });
      });
    })
