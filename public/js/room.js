import TextEditor from "./TE/client/TextEditor.js";
import Board from "./WB/whiteboard-collab/src/components/board/Board.jsx";
import ReactDOM from 'react-dom';
let messagesContainer = document.getElementById('messages');
messagesContainer.scrollTop = messagesContainer.scrollHeight;

const memberContainer = document.getElementById('members__container');
const memberButton = document.getElementById('members__button');

const chatContainer = document.getElementById('messages__container');
const chatButton = document.getElementById('chat__button');

let activeMemberContainer = false;








memberButton.addEventListener('click', () => {
  if (activeMemberContainer) {
    memberContainer.style.display = 'none';
  } else {
    memberContainer.style.display = 'block';
  }

  activeMemberContainer = !activeMemberContainer;
});

let activeChatContainer = false;

chatButton.addEventListener('click', () => {
  if (activeChatContainer) {
    chatContainer.style.display = 'none';
  } else {
    chatContainer.style.display = 'block';
  }

  activeChatContainer = !activeChatContainer;
});

let displayFrame = document.getElementById('stream__box')
let videoFrames = document.getElementsByClassName('video__container')
let userIdInDisplayFrame = null;

let expandVideoFrame = (e) => {

  let child = displayFrame.children[0]
  if(child){
      document.getElementById('streams__container').appendChild(child)
  }

  displayFrame.style.display = 'block'
  displayFrame.appendChild(e.currentTarget)
  userIdInDisplayFrame = e.currentTarget.id

  for(let i = 0; videoFrames.length > i; i++){
    if(videoFrames[i].id != userIdInDisplayFrame){
      videoFrames[i].style.height = '100px'
      videoFrames[i].style.width = '100px'
    }
  }

}

for(let i = 0; videoFrames.length > i; i++){
  videoFrames[i].addEventListener('click', expandVideoFrame)
}


let hideDisplayFrame = () => {
    userIdInDisplayFrame = null
    displayFrame.style.display = null

    let child = displayFrame.children[0]
    document.getElementById('streams__container').appendChild(child)

    for(let i = 0; videoFrames.length > i; i++){
      videoFrames[i].style.height = '300px'
      videoFrames[i].style.width = '300px'
  }
}

displayFrame.addEventListener('click', hideDisplayFrame)

function whiteboard() {
  // Get the query string from the URL
  const queryString = window.location.search;

  // Parse the query string to get the search parameters
  const searchParams = new URLSearchParams(queryString);

  // Get the value of the 'room' parameter
  const roomId = searchParams.get('room');

  
  let link = "https://white-board-av.netlify.app/?room=" + roomId;

  window.open(link, "_blank"); // Replace with the URL of the new page
}

function texteditor() {
  const queryString = window.location.search;

  // Parse the query string to get the search parameters
  const searchParams = new URLSearchParams(queryString);

  // Get the value of the 'room' parameter
  const roomId = searchParams.get('room');

  
  let link = "https://texteditorav.netlify.app/";
  window.open(link, "_blank"); // Replace with the URL of the new page
}
