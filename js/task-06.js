const inputEl = document.getElementById('validation-input');
 
inputEl.addEventListener('blur', onBlur); 


function onBlur() {     
const desiredLength = parseInt(inputEl.getAttribute('data-length'));
const enteredLength = inputEl.value.length; 

      if (enteredLength === desiredLength) {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
      } else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
      }
    };

    