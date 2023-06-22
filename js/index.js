function validateForm() {

  var name = document.getElementById('name').value;
  var surname = document.getElementById('surname').value;
  var telephone = document.getElementById('telephone').value;
  var email = document.getElementById('exampleInputEmail1').value;
  var socialStatus = document.getElementById('socialstatus').value;
  var date = document.getElementById('date').value;
  var agreement = document.getElementById('exampleCheck1').checked;

  if (name.trim() === '') {
    alert('Please enter your name');
    return false;
  }

  if (surname.trim() === '') {
    alert('Please enter your surname');
    return false;
  }

  if (telephone.trim() === '') {
    alert('Please enter your phone number');
    return false;
  }

  if (email.trim() === '') {
    alert('Please enter your email');
    return false;
  }

  var nameRegex = /^[A-Za-z]+$/;;
  if (!nameRegex.test(name)) {
    alert('Please enter a valid name');
    return false;
  }

  var surnameRegex = /^[A-Za-z]+$/;;
  if (!surnameRegex.test(surname)) {
    alert('Please enter a valid surname');
    return false;
  }

  var phoneRegex = /^8\d{9}$/;
  if (!phoneRegex.test(telephone)) {
    alert('Please enter a valid phone number');
    return false;
  }

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address');
    return false;
  }

  if (socialStatus.trim() === '') {
    alert('Please select your social status');
    return false;
  }

  if (date.trim() === '') {
    alert('Please enter the date');
    return false;
  }

  if (!agreement) {
    alert('Please agree to the terms and conditions');
    return false;
  }


  clearForm();
  closeModal();

}

function clearForm() {

  document.getElementById('name').value = '';
  document.getElementById('surname').value = '';
  document.getElementById('telephone').value = '';
  document.getElementById('exampleInputEmail1').value = '';
  document.getElementById('socialstatus').value = '';
  document.getElementById('date').value = '';
  document.getElementById('exampleCheck1').checked = false;

}

function closeModal() {
  var modal = document.getElementById('staticBackdrop');
  var modalInstance = bootstrap.Modal.getInstance(modal);
  modalInstance.hide();
}


