
let openModal = document.getElementById('modalBtn');
let closeModal = document.getElementById("closeBtn");

let popup = document.getElementById("myModal");
let send = document.querySelector("#send");
let userInput = document.querySelector("#message")
let ul = document.querySelector("ul")
let timezone= document.querySelector("#time")

send.addEventListener("click", updateMessage)

openModal.addEventListener("click", ()=>{
	popup.style.display='block';
   openModal.style.display='none';
})

closeModal.addEventListener("click", ()=>{
		popup.style.display='none';
         openModal.style.display='block';
})


function updateMessage(e){
	e.preventDefault();
   let userValue = document.querySelector("#message").value;
    if(userValue.length > 0){
      // Get Hours and Minutes
      let now = new Date();
      let hour= now.getHours();
      let minutes = now.getMinutes();
      let time = {hour,minutes};

      // Create List of Messages
      let li = document.createElement("li");

      // Create p tag
      let span = document.createElement("p");
      span.className='time';

      li.appendChild(document.createTextNode(userValue));
      span.appendChild(document.createTextNode(`${time.hour}:${time.minutes}`));
      li.appendChild(span)
   
      ul.appendChild(li);
      clearInput();
  }
}
function clearInput(){
   document.querySelector("#message").value=""
}
