document.addEventListener('DOMContentLoaded', function() {

  document.body.style.backgroundImage = "{{url_for('static', filename='Presentation.png')}}";

  let box = document.querySelector('#box');

  box.style.marginLeft = '30%';
  box.style.textAlign = 'center';
  box.style.marginTop = '15%';
  box.style.backgroundColor = '#ab7890';
  box.style.padding = '5%';
  box.style.width = '350px';
  

  let inputs = document.querySelectorAll('input');
  inputs.forEach(function(input){
    input.style.padding = '5%';
    input.style.borderRadius = '10px';
  });
});
