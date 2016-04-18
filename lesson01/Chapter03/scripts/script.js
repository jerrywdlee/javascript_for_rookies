function greet() {
  var your_name = prompt('Plz Input Your Name','Neptunia'); // LoL! You See my hobby ;)
  var confirm_msg = "Dear " + your_name + ", " + "Is JavaScript Awesome?";
  var confirm_window = confirm(confirm_msg);
  if (confirm_window === true) {
    alert('Thank You ' + your_name + ' (^ - ^)');
  }else {
    alert("I'm So Said (; _ ;)");
  }
}
