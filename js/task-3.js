const formInput = document.querySelector('#name-input');
const greetText = document.querySelector('#name-output');

console.log(formInput);
console.log(greetText);


  formInput.addEventListener('input', () => {
    const trimmedValue = formInput.value.trim();
    greetText.innerText = trimmedValue || 'Anonymous';
  });



