// app.js

const songs = [
  {
    title: "Night Drive",
    artist: "Disha",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    cover:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Moon Light",
    artist: "Disha",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    cover:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Dream Beat",
    artist: "Disha",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    cover:
      "https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=1200&auto=format&fit=crop",
  },
];

function App() {
  const audioRef = React.useRef(null);

  const [currentSong, setCurrentSong] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentSong]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const nextSong = () => {
    setCurrentSong((prev) => (prev + 1) % songs.length);
    setIsPlaying(true);
  };

  const prevSong = () => {
    setCurrentSong((prev) =>
      prev === 0 ? songs.length - 1 : prev - 1
    );
    setIsPlaying(true);
  };

  const updateProgress = () => {
    const { currentTime, duration } = audioRef.current;

    if (duration) {
      setProgress((currentTime / duration) * 100);
    }
  };

  return (
    <div className="app">

      <div className="player">

        <img
          src={songs[currentSong].cover}
          className="cover"
        />

        <h1>{songs[currentSong].title}</h1>

        <p>{songs[currentSong].artist}</p>

        <div className="progressBar">
          <div
            className="progress"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="controls">

          <button onClick={prevSong}>
            ⏮
          </button>

          <button className="playBtn" onClick={togglePlay}>
            {isPlaying ? "⏸" : "▶"}
          </button>

          <button onClick={nextSong}>
            ⏭
          </button>

        </div>

        <audio
          ref={audioRef}
          src={songs[currentSong].src}
          onTimeUpdate={updateProgress}
          onEnded={nextSong}
        />

      </div>

    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
