// JavaScript for music player functionality
const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('play-pause-btn');
const stopBtn = document.getElementById('stop');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const rewindBtn = document.getElementById('rewind');
const fastForwardBtn = document.getElementById('fast-forward');
const progress = document.getElementById('progress');
const volume = document.getElementById('volume');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const playlist = document.getElementById('playlist');
const urlInput = document.getElementById('url-input');
const loadUrlBtn = document.getElementById('load-url');
const fileInput = document.getElementById('file-input');
const playFileBtn = document.getElementById('play-file');
const muteBtn = document.getElementById('mute');
const shuffleBtn = document.getElementById('shuffle');
const repeatBtn = document.getElementById('repeat');

let currentSongIndex = 0;
let isPlaying = false;
let isMuted = false;
let isShuffling = false;
let isRepeating = false;
const fastForwardTime = 5; // Seconds to fast forward or rewind

// Initialize playlist
const playlistSongs = [
    { file: 'https://archive.org/download/ramanuj-bhajan-jai-ramanuj-jai-ramanuj-unlimited/Ramanuj%20Bhajan%20Jai%20Ramanuj%20Jai%20Ramanuj%20Unlimited.mp3', title: ' भजन 1 - जय रामानुज भजन ' },
    { file: 'https://archive.org/download/stotra-ratnam-aalavandar/StotraRatnam%20Aalavandar.mp3', title: 'स्तोत्र 2 - स्तोत्र रत्नम् ' },
    { file: 'https://archive.org/download/stotra-ratnam-aalavandar/THIRUPPAAVAI.mp3', title: 'दिव्य प्रबन्धम 1 - तिरुप्पावै' },
    { file: 'https://archive.org/download/stotra-ratnam-aalavandar/Tiru%20Pallandu.mp3', title: 'दिव्य प्रबन्धम 2 - तिरुपल्लान्डु ' },
    { file: 'https://archive.org/download/stotra-ratnam-aalavandar/Thiruppalliyezhuchi.mp3', title: 'दिव्य प्रबन्धम 3 - तिरुपल्लीयेडुच्ची ' }
];

function renderPlaylist() {
    playlist.innerHTML = '';
    playlistSongs.forEach((song, index) => {
        const li = document.createElement('li');
        li.textContent = song.title;
        li.dataset.file = song.file;
        li.addEventListener('click', () => {
            currentSongIndex = index;
            loadSong(song);
            playSong();
        });
        playlist.appendChild(li);
    });
    updatePlaylistActive(currentSongIndex);
}

function updatePlaylistActive(index) {
    const items = playlist.querySelectorAll('li');
    items.forEach((item, i) => {
        item.classList.toggle('active', i === index);
    });
}

function updateButtonState() {
    shuffleBtn.classList.toggle('active', isShuffling);
    repeatBtn.classList.toggle('active', isRepeating);
}

function loadSong(song) {
    audio.src = song.file;
    document.getElementById('title').textContent = song.title;
    document.getElementById('artist').textContent = 'Artist'; // Replace with actual artist info if available
    audio.load();
    updatePlaylistActive(currentSongIndex);
}

function playSong() {
    audio.play();
    playPauseBtn.querySelector('i').classList.replace('fa-play', 'fa-pause');
    isPlaying = true;
}

function pauseSong() {
    audio.pause();
    playPauseBtn.querySelector('i').classList.replace('fa-pause', 'fa-play');
    isPlaying = false;
}

function togglePlayPause() {
    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
}

function stopSong() {
    audio.pause();
    audio.currentTime = 0;
    playPauseBtn.querySelector('i').classList.replace('fa-pause', 'fa-play');
    isPlaying = false;
}

function fastForward() {
    audio.currentTime += fastForwardTime;
}

function rewind() {
    audio.currentTime -= fastForwardTime;
}

function toggleMute() {
    isMuted = !isMuted;
    audio.muted = isMuted;
    muteBtn.querySelector('i').classList.toggle('fa-volume-mute', isMuted);
    muteBtn.querySelector('i').classList.toggle('fa-volume-up', !isMuted);
}

function updateProgress() {
    progress.value = (audio.currentTime / audio.duration) * 100;
    currentTimeEl.textContent = formatTime(audio.currentTime);
    durationEl.textContent = formatTime(audio.duration);
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

function changeVolume() {
    audio.volume = volume.value / 100;
}

// Navigate to the next song
function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % playlistSongs.length;
    loadSong(playlistSongs[currentSongIndex]);
    playSong();
}

// Navigate to the previous song
function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + playlistSongs.length) % playlistSongs.length;
    loadSong(playlistSongs[currentSongIndex]);
    playSong();
}

// Event Listeners
playPauseBtn.addEventListener('click', togglePlayPause);
stopBtn.addEventListener('click', stopSong);
fastForwardBtn.addEventListener('click', fastForward);
rewindBtn.addEventListener('click', rewind);
muteBtn.addEventListener('click', toggleMute);
volume.addEventListener('input', changeVolume);
progress.addEventListener('input', () => {
    audio.currentTime = (progress.value / 100) * audio.duration;
});
audio.addEventListener('timeupdate', updateProgress);
audio.addEventListener('ended', () => {
    if (isRepeating) {
        playSong();
    } else if (isShuffling) {
        currentSongIndex = Math.floor(Math.random() * playlistSongs.length);
        loadSong(playlistSongs[currentSongIndex]);
        playSong();
    } else {
        nextSong();
    }
});

loadUrlBtn.addEventListener('click', () => {
    if (urlInput.value) {
        audio.src = urlInput.value;
        loadSong({ file: urlInput.value, title: 'Loaded URL' });
        playSong();
    }
});

playFileBtn.addEventListener('click', () => {
    if (fileInput.files[0]) {
        const file = fileInput.files[0];
        audio.src = URL.createObjectURL(file);
        loadSong({ file: audio.src, title: file.name });
        playSong();
    }
});

shuffleBtn.addEventListener('click', () => {
    isShuffling = !isShuffling;
    updateButtonState();
});

repeatBtn.addEventListener('click', () => {
    isRepeating = !isRepeating;
    updateButtonState();
});

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

// Initial render of the playlist
renderPlaylist();
