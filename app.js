const API_KEY = "YOUR_YOUTUBE_API_KEY";

const results = document.getElementById("results");
const player = document.getElementById("player");


async function searchSong() {

  const query = document.getElementById("searchInput").value;

  if (!query) {
    alert("Enter Song Name");
    return;
  }


  results.innerHTML = `<h2>Loading...</h2>`;


  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=12&q=${query}+song&key=${API_KEY}`;

  try {

    const response = await fetch(url);
    const data = await response.json();


    results.innerHTML = "";


    data.items.forEach(item => {

      const videoId = item.id.videoId;
      const title = item.snippet.title;
      const thumbnail = item.snippet.thumbnails.high.url;


      const card = document.createElement("div");
      card.className = "card";


      card.innerHTML = `
        <img src="${thumbnail}">
        <div class="card-content">
          <h3>${title}</h3>
        </div>
      `;


      card.onclick = () => playSong(videoId);

      results.appendChild(card);

    });

  } catch (err) {
    results.innerHTML = `<h2>Error Loading Songs</h2>`;
    console.log(err);
  }
}


function playSong(videoId) {

  player.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
}


function showHome() {
  results.innerHTML = `
    <h2>🎵 Welcome to Crystal Music</h2>
    <p>Search any song from YouTube</p>
  `;
}


async function showTrending() {

  results.innerHTML = `<h2>Loading Trending...</h2>`;


  const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&videoCategoryId=10&maxResults=12&key=${API_KEY}`;

  try {

    const response = await fetch(url);
    const data = await response.json();


    results.innerHTML = "";


    data.items.forEach(item => {

      const videoId = item.id;
      const title = item.snippet.title;
      const thumbnail = item.snippet.thumbnails.high.url;


      const card = document.createElement("div");
      card.className = "card";


      card.innerHTML = `
        <img src="${thumbnail}">
        <div class="card-content">
          <h3>${title}</h3>
        </div>
      `;

      card.onclick = () => playSong(videoId);

      results.appendChild(card);

    });

  } catch (err) {
    results.innerHTML = `<h2>Error Loading Trending Songs</h2>`;
  }
}


showHome();
