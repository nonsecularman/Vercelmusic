* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

body {
  background: #0f172a;
  color: white;
}

.container {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  width: 250px;
  background: #111827;
  padding: 20px;
  border-right: 1px solid #1e293b;
}

.profile {
  text-align: center;
  margin-bottom: 40px;
}

.profile img {
  width: 90px;
  border-radius: 50%;
  margin-bottom: 10px;
}

.profile h2 {
  font-size: 20px;
}

.menu button {
  width: 100%;
  padding: 12px;
  margin-top: 10px;
  border: none;
  border-radius: 10px;
  background: #1e293b;
  color: white;
  cursor: pointer;
  transition: 0.3s;
}

.menu button:hover {
  background: #3b82f6;
}

.main {
  flex: 1;
  padding: 20px;
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.search-box {
  display: flex;
  gap: 10px;
}

.search-box input {
  width: 300px;
  padding: 12px;
  border-radius: 10px;
  border: none;
  outline: none;
}

.search-box button {
  padding: 12px 20px;
  border: none;
  border-radius: 10px;
  background: #2563eb;
  color: white;
  cursor: pointer;
}

#results {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.card {
  background: #1e293b;
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  transition: 0.3s;
}

.card:hover {
  transform: scale(1.03);
}

.card img {
  width: 100%;
}

.card-content {
  padding: 10px;
}

.card-content h3 {
  font-size: 16px;
}

.player {
  width: 100%;
  height: 400px;
  margin-top: 30px;
  border-radius: 20px;
  overflow: hidden;
  border: 2px solid #1e293b;
}

iframe {
  width: 100%;
  height: 100%;
}

@media(max-width: 768px){
  .container {
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
  }

  .topbar {
    flex-direction: column;
    gap: 15px;
  }

  .search-box input {
    width: 100%;
  }
}
