
        const audio = document.getElementById('audio');
        const playPauseBtn = document.getElementById('play-pause');
        const stopBtn = document.getElementById('stop');
        const prevBtn = document.getElementById('prev');
        const nextBtn = document.getElementById('next');
        const rewindBtn = document.getElementById('rewind');
        const fastForwardBtn = document.getElementById('fast-forward');
        const progress = document.getElementById('progress');
        const volume = document.getElementById('volume');
        const currentTimeEl = document.getElementById('current-time');
        const durationEl = document.getElementById('duration');
        const playlistItems = document.querySelectorAll('#playlist li');
        const repeatBtn = document.getElementById('repeat');
        const randomBtn = document.getElementById('random');
        const muteBtn = document.getElementById('mute');
        const onOffBtn = document.getElementById('on-off');
        const equalizer = document.getElementById('equalizer');

        let currentSongIndex = 0;
        let isPlaying = false;
        let isRepeating = false;
        let isRandom = false;
        let isMuted = false;
        const fastForwardTime = 5; // Seconds to fast forward or rewind
        let autoOffTimer = 0;
        let autoOffTimeout;

        function loadSong(song) {
            audio.src = song.getAttribute('data-file');
            document.getElementById('title').textContent = song.textContent.split(' - ')[0];
            document.getElementById('artist').textContent = song.textContent.split(' - ')[1];
            document.getElementById('cover').src = 'cover.jpg'; // Add cover image logic if needed
        }

        function playSong() {
            audio.play();
            playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
            isPlaying = true;
            equalizer.classList.add('active'); // Show and animate equalizer
        }

        function pauseSong() {
            audio.pause();
            playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
            isPlaying = false;
            equalizer.classList.remove('active'); // Hide equalizer animation
        }

        function stopSong() {
            audio.pause();
            audio.currentTime = 0;
            playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
            isPlaying = false;
            equalizer.classList.remove('active'); // Hide equalizer animation
        }

        function prevSong() {
            if (currentSongIndex > 0) {
                currentSongIndex--;
            } else {
                currentSongIndex = playlistItems.length - 1;
            }
            loadSong(playlistItems[currentSongIndex]);
            playSong();
        }

        function nextSong() {
            if (currentSongIndex < playlistItems.length - 1) {
                currentSongIndex++;
            } else {
                currentSongIndex = 0;
            }
            loadSong(playlistItems[currentSongIndex]);
            playSong();
        }

        function rewind() {
            audio.currentTime -= fastForwardTime;
        }

        function fastForward() {
            audio.currentTime += fastForwardTime;
        }

        function setProgress() {
            audio.currentTime = progress.value * audio.duration / 100;
        }

        function updateProgress() {
            const { currentTime, duration } = audio;
            progress.value = (currentTime / duration) * 100;
            currentTimeEl.textContent = formatTime(currentTime);
            durationEl.textContent = formatTime(duration);
        }

        function setVolume() {
            audio.volume = volume.value / 100;
        }

        function toggleRepeat() {
            isRepeating = !isRepeating;
            repeatBtn.classList.toggle('active', isRepeating);
            audio.loop = isRepeating;
        }

        function toggleRandom() {
            isRandom = !isRandom;
            randomBtn.classList.toggle('active', isRandom);
        }

        function toggleMute() {
            isMuted = !isMuted;
            audio.muted = isMuted;
            muteBtn.innerHTML = isMuted ? '<i class="fas fa-volume-mute"></i>' : '<i class="fas fa-volume-up"></i>';
        }

        function formatTime(seconds) {
            const minutes = Math.floor(seconds / 60);
            const secs = Math.floor(seconds % 60).toString().padStart(2, '0');
            return `${minutes}:${secs}`;
        }

        playlistItems.forEach((item) => {
            item.addEventListener('click', () => {
                currentSongIndex = Array.from(playlistItems).indexOf(item);
                loadSong(item);
                playSong();
            });
        });

        audio.addEventListener('timeupdate', updateProgress);

        audio.addEventListener('ended', () => {
            stopSong(); // Stop the current song when it ends
            if (isRandom) {
                currentSongIndex = Math.floor(Math.random() * playlistItems.length);
                loadSong(playlistItems[currentSongIndex]);
                playSong();
            } else if (isRepeating) {
                playSong(); // Restart the same song
            } else {
                nextSong(); // Move to next song
            }
        });

        playPauseBtn.addEventListener('click', () => {
            if (isPlaying) {
                pauseSong();
            } else {
                playSong();
            }
        });

        stopBtn.addEventListener('click', stopSong);

        prevBtn.addEventListener('click', prevSong);

        nextBtn.addEventListener('click', nextSong);

        rewindBtn.addEventListener('click', rewind);

        fastForwardBtn.addEventListener('click', fastForward);

        progress.addEventListener('input', setProgress);

        volume.addEventListener('input', setVolume);

        repeatBtn.addEventListener('click', toggleRepeat);

        randomBtn.addEventListener('click', toggleRandom);

        muteBtn.addEventListener('click', toggleMute);

        onOffBtn.addEventListener('click', () => {
            if (audio.src) {
                if (isPlaying) {
                    stopSong();
                } else {
                    playSong();
                }
            }
        });
 
