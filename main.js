let currentIndex = 0; 

function moveButton() {
  let btn = document.querySelector('.call-btn');
  

  let positions = [
    { x: 100, y: 50 },
    { x: 300, y: 80 },
    { x: -100, y: 60 },
    { x: 43, y: 60 },
    { x: 30, y: -160 }
  ];
  
  let newX = positions[currentIndex].x;
  let newY = positions[currentIndex].y;

  btn.style.transform = `translate(${newX}px, ${newY}px)`;
  
 
  currentIndex = (currentIndex + 1) % positions.length;
}
function MessageClick() {
  let overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.top = "50%";
  overlay.style.left = "50%";
  overlay.style.transform = "translate(-50%, -50%)";
  overlay.style.width = "300px";
  overlay.style.height = "200px";
  overlay.style.background = "#000000EB";
  overlay.style.display = "flex";
  overlay.style.flexDirection = "column";
  overlay.style.justifyContent = "center";
  overlay.style.boxShadow = "0 0 15px #00ffff";
  overlay.style.alignItems = "center";
  overlay.style.color = "white";
  overlay.style.fontSize = "20px";
  overlay.style.fontFamily = '"Mada", sans-serif';
  overlay.style.zIndex = "9999";
  overlay.style.opacity = "0";
  overlay.style.transition = "opacity 0.5s ease-in-out";
  overlay.style.borderRadius = "10px";
  overlay.style.padding = "20px";
  
  let img = document.createElement("img");
  img.src = "https://raw.githubusercontent.com/xov-team/files_xov/main/memez/meme-2SasCDq80Tur.png";
  img.style.width = "100px";
  img.style.height = "100px";
  img.style.marginBottom = "10px";
  
  let text = document.createElement("p");
  text.textContent = "انت عبيط ولا ايه ما قدامك كل الروابط فوق";
  text.style.margin = "0";
  text.style.textAlign = "center";
  text.style.fontSize = "15px";
  overlay.appendChild(img);
  overlay.appendChild(text);
  document.body.appendChild(overlay);
  
  setTimeout(() => {
    overlay.style.opacity = "1";
  }, 10);
  
  setTimeout(() => {
    overlay.style.opacity = "0";
    setTimeout(() => {
      overlay.remove();
    }, 500);
  }, 3000);
}
