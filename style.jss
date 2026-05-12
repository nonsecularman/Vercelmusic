/* style.css */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: linear-gradient(135deg, #000000, #111827);
  font-family: Arial, sans-serif;
  color: white;
  overflow: hidden;
}

.app {
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 20px;
}

.player {
  width: 360px;

  background: rgba(255,255,255,0.05);

  border: 1px solid rgba(255,255,255,0.1);

  backdrop-filter: blur(20px);

  border-radius: 30px;

  padding: 20px;

  text-align: center;

  box-shadow: 0 0 30px rgba(0,0,0,0.5);
}

.cover {
  width: 100%;
  height: 320px;

  object-fit: cover;

  border-radius: 20px;

  margin-bottom: 15px;
}

h1 {
  font-size: 28px;
  margin-bottom: 5px;
}

p {
  opacity: 0.7;
  margin-bottom: 20px;
}

.progressBar {
  width: 100%;
  height: 8px;

  background: rgba(255,255,255,0.1);

  border-radius: 50px;

  overflow: hidden;

  margin-bottom: 25px;
}

.progress {
  height: 100%;

  background: #00ffcc;

  width: 0%;
}

.controls {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

button {
  width: 65px;
  height: 65px;

  border: none;

  border-radius: 50%;

  font-size: 24px;

  cursor: pointer;

  background: rgba(255,255,255,0.1);

  color: white;

  transition: 0.3s;
}

button:hover {
  transform: scale(1.1);
}

.playBtn {
  width: 80px;
  height: 80px;

  background: #00ffcc;

  color: black;

  font-size: 32px;
}

@media(max-width: 500px) {

  .player {
    width: 100%;
  }

  .cover {
    height: 280px;
  }

}
