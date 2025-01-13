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
    { file: 'https://archive.org/download/by-yuvraj-sarkarji-melodious-voice/%E0%A4%B6%E0%A4%B0%20%E0%A4%B5%E0%A4%B0%E0%A4%A6%E0%A4%B5%E0%A4%B2%E0%A4%B2%E0%A4%AD%20%E0%A4%B8%E0%A4%A4%E0%A4%A4%E0%A4%B0%E0%A4%AE%20By%20-%20Yuvraj%20Sarkarji%20Melodious%20Voice.mp3', title: 'स्तोत्र 2 - वरदवल्लभास्तोत्रम्  ' },
    { file: 'https://archive.org/download/stotra-ratnam-aalavandar/StotraRatnam%20Aalavandar.mp3', title: 'स्तोत्र 1 - स्तोत्ररत्नम् ( आलवन्दार ) ' },
    { file: 'https://archive.org/download/sri-vishnu-sahasranamam-by-h.-h-chinna-jeeyar-swamiji-sanskrit-jetworld_202412/Sri%20Vishnu%20Sahasranamam%20by%20H.H%20Chinna%20Jeeyar%20Swamiji%20%20Sanskrit%20%20Jetworld.mp3', title: 'स्तोत्र 2 - विष्णु सहस्रनाम स्तोत्रम् - चिन्न जीयर स्वामिजी ' },
    { file: 'https://archive.org/download/ghibrans-spiritual-series-kamalakucha-song-lyric-video-vinaya-karthik-rajan-think-divine/Ghibran%27s%20Spiritual%20Series%20%20Kamalakucha%20Song%20Lyric%20Video%20%20Vinaya%20Karthik%20Rajan%20%20Think%20Divine.mp3', title: 'स्तोत्र 3 - वेङ्कतेश स्तोत्रम्  ' },
    { file: 'https://archive.org/download/sri-venkateswara-suprabhatam-telugu-lyrics-and-meanings/SRI%20VENKATESWARA%20SUPRABHATAM%20TELUGU%20LYRICS%20AND%20MEANINGS.mp3', title: 'स्तोत्र 2 - वेङ्कतेश सुप्रभातम् ' },
    { file: 'https://archive.org/download/sudarsanasathakam-malola-kannan-sri-sudarsanasatakam/Sudarsanasathakam%20-%20Malola%20Kannan%20-%20Sri%20Sudarsanasatakam.mp3', title: 'स्तोत्र 2 - सुदर्शन शतकम्  ' },
    { file: 'https://archive.org/download/bhaj-yatirajam-a-tribute-to-sri-ramanujacharyaji-swami-ramkrishnacharya-ji-ensemble/%E0%A4%AD%E0%A4%9C%20%E0%A4%AF%E0%A4%A4%E0%A4%B0%E0%A4%9C%20Bhaj%20Yatirajam%20%20A%20Tribute%20to%20Sri%20Ramanujacharyaji%20%20Swami%20Ramkrishnacharya%20Ji%20%26%20Ensemble.mp3', title: 'स्तोत्र 2 - भज यतिराज स्तोत्रम् ' },
    { file: 'https://archive.org/download/panchayudha-sthotram-by-niharika-ram-by-taalapatram/Panchayudha%20Sthotram%20%20%E0%B0%AA%E0%B0%9A%E0%B0%AF%E0%B0%A7%20%E0%B0%B8%E0%B0%A4%E0%B0%A4%E0%B0%B0%E0%B0%AE%20%20By%20Niharika%20Ram%20%20By%20Taalapatram.mp3', title: 'स्तोत्र 2 - पञ्चायुध स्तोत्रम्  ' },
    { file: 'https://archive.org/download/learn-narayana-kavacham-from-shrimad-bhagavatam-sanskrit-guided-chant-only-stotram/Learn%20Narayana%20Kavacham%20from%20Shrimad%20Bhagavatam%20-%20Sanskrit%20Guided%20Chant%20%28Only%20Stotram%29.mp3', title: 'स्तोत्र 2 - नारायणकवचम् ' },
    { file: 'https://archive.org/download/mukunda-mala-stotram/Mukunda%20Mala%20stotram.mp3', title: 'स्तोत्र 2 - मुकुन्द माला स्तोत्रम्  ' },
    { file: 'https://archive.org/download/stotra-ratnam-aalavandar/THIRUPPAAVAI.mp3', title: 'दिव्य प्रबन्धम 1 - तिरुप्पावै' },
    { file: 'https://archive.org/download/stotra-ratnam-aalavandar/Tiru%20Pallandu.mp3', title: 'दिव्य प्रबन्धम 2 - तिरुपल्लान्डु ' },
    { file: 'https://archive.org/download/stotra-ratnam-aalavandar/Thiruppalliyezhuchi.mp3', title: 'दिव्य प्रबन्धम 3 - तिरुपल्लीयेडुच्ची ' },
    { file: 'https://ne.shreesampradaya.com/wp-content/uploads/2025/01/गोदा-आमाको-विवाहमा-माला-साट्दा-नाच्ने-गीत-श्री-सम्प्रदाय-डट-कम.mp3', title: ' Goda mala gitam ' }
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
