
const count = document.getElementById('count');
const textarea = document.getElementById('text');
const maxLength = document.getAttribute('maxlength');

let textarea.oninput = function () {
  count.innerHTML = maxLength - this.value.length;
};

 if (count.innerHTML == 0) {
    count.classList.add('null');
  } else {
    count.classList.remove('null');
  }
};
 

