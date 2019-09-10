document.addEventListener('DOMContentLoaded',() =>{
  var socket = io.connect (location.protocol+'//'+document.domain+':'+location.port);
  var messages = document.querySelector('#message')
  socket.on('load_page', gourps=>{

  for (i = 0;i<groups.length;i++){
   const btn = document.createElement('button');
   btn.innerHTML = groups[i];
   messages.appendChild(btn);
 }
 var create_group = document.querySelector('#create_group');
 create_group.onsubmit= () =>{
   const group_name = document.querySelector('#create_group').value;
   socket.emit('submit group' {"group_name":group_name});
 }
})
});
