const elForm = document.querySelector('.login-form');

elForm.addEventListener('submit', event => {
  event.preventDefault();
   
  if (elForm.elements.email.value === '' || elForm.elements.password.value === '') {
    alert('All form fields must be filled in');
    return;
  }
        
  const dataForm = {
    [elForm.elements.email.name]: elForm.elements.email.value.trim(),
    [elForm.elements.password.name]: elForm.elements.password.value.trim(),
  }
  console.log(dataForm);
  
 elForm.reset();
});
