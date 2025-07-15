// Neon Wave Player - JavaScript Module

class NeonWavePlayer {
    constructor() {
        // Audio elements
        this.audio = document.getElementById('audio-player');
        this.canvas = document.getElementById('waveform-visualizer');
        this.ctx = this.canvas.getContext('2d');
        
        // Audio context for visualizer
        this.audioContext = null;
        this.analyser = null;
        this.source = null;
        this.dataArray = null;
        
        // Player state
        this.isPlaying = false;
        this.currentTrackIndex = 0;
        this.volume = 0.7;
        this.shuffleMode = false;
        this.repeatMode = 'off'; // off, one, all
        
        // Playlist data
        this.playlist = [
            {
                title: 'Digital Dreams',
                artist: 'Neon Collective',
                duration: '3:45',
                genre: 'Synthwave',
                year: '2089',
                bpm: '128',
                url: 'https://example.com/track1.mp3'
            },
            {
                title: 'Chrome Hearts',
                artist: 'Cyber Punk',
                duration: '4:12',
                genre: 'Dark Synth',
                year: '2090',
                bpm: '140',
                url: 'https://example.com/track2.mp3'
            },
            {
                title: 'Neural Network',
                artist: 'AI Composer',
                duration: '5:23',
                genre: 'Ambient',
                year: '2091',
                bpm: '90',
                url: 'https://example.com/track3.mp3'
            },
            {
                title: 'Hologram Highway',
                artist: 'Future Bass',
                duration: '3:58',
                genre: 'Electronic',
                year: '2088',
                bpm: '150',
                url: 'https://example.com/track4.mp3'
            },
            {
                title: 'Quantum Flux',
                artist: 'Void Walker',
                duration: '6:30',
                genre: 'Experimental',
                year: '2092',
                bpm: '175',
                url: 'https://example.com/track5.mp3'
            }
        ];
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.renderPlaylist();
        this.loadTrack(0);
        this.setupAudioContext();
        this.resizeCanvas();
        
        // Start animation loop
        this.animate();
    }
    
    setupAudioContext() {
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
            this.analyser = this.audioContext.createAnalyser();
            this.analyser.fftSize = 256;
            this.analyser.smoothingTimeConstant = 0.8;
            
            const bufferLength = this.analyser.frequencyBinCount;
            this.dataArray = new Uint8Array(bufferLength);
            
            // Connect audio element to analyser
            this.source = this.audioContext.createMediaElementSource(this.audio);
            this.source.connect(this.analyser);
            this.analyser.connect(this.audioContext.destination);
        } catch (error) {
            console.error('Failed to setup audio context:', error);
        }
    }
    
    setupEventListeners() {
        // Play/Pause
        document.getElementById('play-pause-btn').addEventListener('click', () => this.togglePlayPause());
        
        // Navigation
        document.getElementById('prev-btn').addEventListener('click', () => this.previousTrack());
        document.getElementById('next-btn').addEventListener('click', () => this.nextTrack());
        
        // Modes
        document.getElementById('shuffle-btn').addEventListener('click', () => this.toggleShuffle());
        document.getElementById('repeat-btn').addEventListener('click', () => this.toggleRepeat());
        
        // Volume
        const volumeSlider = document.getElementById('volume-slider');
        volumeSlider.addEventListener('input', (e) => this.setVolume(e.target.value / 100));
        
        // Seek
        const seekSlider = document.getElementById('seek-slider');
        seekSlider.addEventListener('input', (e) => this.seek(e.target.value));
        
        // Audio events
        this.audio.addEventListener('timeupdate', () => this.updateProgress());
        this.audio.addEventListener('ended', () => this.handleTrackEnd());
        this.audio.addEventListener('loadedmetadata', () => this.updateDuration());
        
        // EQ presets
        document.querySelectorAll('.eq-preset').forEach(btn => {
            btn.addEventListener('click', (e) => this.setEQPreset(e.target.dataset.preset));
        });
        
        // Add track button
        document.getElementById('add-track-btn').addEventListener('click', () => this.addTrack());
        
        // Window resize
        window.addEventListener('resize', () => this.resizeCanvas());
    }
    
    resizeCanvas() {
        const container = this.canvas.parentElement;
        this.canvas.width = container.offsetWidth;
        this.canvas.height = 200;
    }
    
    loadTrack(index) {
        const track = this.playlist[index];
        if (!track) return;
        
        this.currentTrackIndex = index;
        
        // Update UI
        document.getElementById('track-title').textContent = track.title;
        document.getElementById('track-artist').textContent = track.artist;
        document.getElementById('track-genre').textContent = track.genre;
        document.getElementById('track-year').textContent = track.year;
        document.getElementById('track-bpm').textContent = track.bpm + ' BPM';
        
        // Update playlist highlighting
        this.updatePlaylistHighlight();
        
        // Load audio (using placeholder URL)
        // In real implementation, this would load actual audio files
        // this.audio.src = track.url;
        
        // Reset progress
        document.getElementById('progress-fill').style.width = '0%';
        document.getElementById('current-time').textContent = '00:00';
        document.getElementById('duration-time').textContent = track.duration;
    }
    
    togglePlayPause() {
        if (this.audioContext && this.audioContext.state === 'suspended') {
            this.audioContext.resume();
        }
        
        if (this.isPlaying) {
            this.pause();
        } else {
            this.play();
        }
    }
    
    play() {
        // In real implementation, this would play the audio
        // this.audio.play();
        this.isPlaying = true;
        document.getElementById('play-icon').classList.add('hidden');
        document.getElementById('pause-icon').classList.remove('hidden');
        
        // Simulate playback
        this.simulatePlayback();
    }
    
    pause() {
        // In real implementation, this would pause the audio
        // this.audio.pause();
        this.isPlaying = false;
        document.getElementById('play-icon').classList.remove('hidden');
        document.getElementById('pause-icon').classList.add('hidden');
        
        // Stop simulation
        if (this.playbackInterval) {
            clearInterval(this.playbackInterval);
        }
    }
    
    simulatePlayback() {
        let progress = 0;
        this.playbackInterval = setInterval(() => {
            if (progress >= 100) {
                this.handleTrackEnd();
                return;
            }
            
            progress += 0.5;
            document.getElementById('progress-fill').style.width = progress + '%';
            document.getElementById('seek-slider').value = progress;
            
            // Update time display
            const duration = this.parseDuration(this.playlist[this.currentTrackIndex].duration);
            const current = (progress / 100) * duration;
            document.getElementById('current-time').textContent = this.formatTime(current);
        }, 100);
    }
    
    parseDuration(durationStr) {
        const [minutes, seconds] = durationStr.split(':').map(Number);
        return minutes * 60 + seconds;
    }
    
    formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    
    previousTrack() {
        if (this.shuffleMode) {
            this.playRandomTrack();
        } else {
            this.currentTrackIndex = (this.currentTrackIndex - 1 + this.playlist.length) % this.playlist.length;
            this.loadTrack(this.currentTrackIndex);
            if (this.isPlaying) this.play();
        }
    }
    
    nextTrack() {
        if (this.shuffleMode) {
            this.playRandomTrack();
        } else {
            this.currentTrackIndex = (this.currentTrackIndex + 1) % this.playlist.length;
            this.loadTrack(this.currentTrackIndex);
            if (this.isPlaying) this.play();
        }
    }
    
    playRandomTrack() {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * this.playlist.length);
        } while (newIndex === this.currentTrackIndex && this.playlist.length > 1);
        
        this.loadTrack(newIndex);
        if (this.isPlaying) this.play();
    }
    
    handleTrackEnd() {
        if (this.repeatMode === 'one') {
            this.seek(0);
            this.play();
        } else if (this.repeatMode === 'all' || this.currentTrackIndex < this.playlist.length - 1) {
            this.nextTrack();
        } else {
            this.pause();
        }
    }
    
    toggleShuffle() {
        this.shuffleMode = !this.shuffleMode;
        const shuffleBtn = document.getElementById('shuffle-btn');
        shuffleBtn.dataset.active = this.shuffleMode;
    }
    
    toggleRepeat() {
        const modes = ['off', 'all', 'one'];
        const currentIndex = modes.indexOf(this.repeatMode);
        this.repeatMode = modes[(currentIndex + 1) % modes.length];
        
        const repeatBtn = document.getElementById('repeat-btn');
        repeatBtn.dataset.mode = this.repeatMode;
        
        // Update visual indicator
        if (this.repeatMode === 'off') {
            repeatBtn.style.color = '';
        } else if (this.repeatMode === 'all') {
            repeatBtn.style.color = 'var(--neon-cyan)';
        } else {
            repeatBtn.style.color = 'var(--neon-pink)';
        }
    }
    
    setVolume(value) {
        this.volume = value;
        this.audio.volume = value;
        document.getElementById('volume-level').textContent = Math.round(value * 100) + '%';
        
        // Update volume icon
        const volumeBtn = document.getElementById('volume-btn');
        if (value === 0) {
            volumeBtn.innerHTML = '<svg viewBox="0 0 24 24" class="control-icon"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>';
        } else if (value < 0.5) {
            volumeBtn.innerHTML = '<svg viewBox="0 0 24 24" class="control-icon"><path d="M7 9v6h4l5 5V4l-5 5H7z"/></svg>';
        } else {
            volumeBtn.innerHTML = '<svg viewBox="0 0 24 24" class="control-icon"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg>';
        }
    }
    
    seek(value) {
        const duration = this.parseDuration(this.playlist[this.currentTrackIndex].duration);
        const seekTime = (value / 100) * duration;
        
        // In real implementation, this would seek the audio
        // this.audio.currentTime = seekTime;
        
        document.getElementById('progress-fill').style.width = value + '%';
        document.getElementById('current-time').textContent = this.formatTime(seekTime);
    }
    
    updateProgress() {
        const progress = (this.audio.currentTime / this.audio.duration) * 100;
        document.getElementById('progress-fill').style.width = progress + '%';
        document.getElementById('seek-slider').value = progress;
        document.getElementById('current-time').textContent = this.formatTime(this.audio.currentTime);
    }
    
    updateDuration() {
        document.getElementById('duration-time').textContent = this.formatTime(this.audio.duration);
    }
    
    setEQPreset(preset) {
        // Update active state
        document.querySelectorAll('.eq-preset').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-preset="${preset}"]`).classList.add('active');
        
        // In real implementation, this would apply audio filters
        console.log(`EQ preset set to: ${preset}`);
    }
    
    renderPlaylist() {
        const playlistElement = document.getElementById('playlist');
        playlistElement.innerHTML = '';
        
        this.playlist.forEach((track, index) => {
            const li = document.createElement('li');
            li.className = 'playlist-item';
            li.innerHTML = `
                <span class="track-number">${(index + 1).toString().padStart(2, '0')}</span>
                <div class="track-details">
                    <span class="track-name">${track.title}</span>
                    <span class="track-duration">${track.duration}</span>
                </div>
            `;
            
            li.addEventListener('click', () => {
                this.loadTrack(index);
                this.play();
            });
            
            playlistElement.appendChild(li);
        });
    }
    
    updatePlaylistHighlight() {
        document.querySelectorAll('.playlist-item').forEach((item, index) => {
            if (index === this.currentTrackIndex) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }
    
    addTrack() {
        // In real implementation, this would open a file picker or dialog
        alert('Add track functionality would open a file picker in a real application');
    }
    
    animate() {
        requestAnimationFrame(() => this.animate());
        
        if (!this.isPlaying || !this.analyser) return;
        
        // Get frequency data
        this.analyser.getByteFrequencyData(this.dataArray);
        
        // Clear canvas
        this.ctx.fillStyle = 'rgba(22, 22, 22, 0.2)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Draw waveform
        const barWidth = (this.canvas.width / this.dataArray.length) * 2.5;
        let x = 0;
        
        for (let i = 0; i < this.dataArray.length; i++) {
            // Generate synthetic data for demo
            const barHeight = this.isPlaying ? 
                Math.sin(Date.now() * 0.001 + i * 0.5) * 50 + Math.random() * 100 : 
                0;
            
            // Create gradient
            const gradient = this.ctx.createLinearGradient(0, this.canvas.height, 0, this.canvas.height - barHeight);
            gradient.addColorStop(0, '#ff006e');
            gradient.addColorStop(0.5, '#00f5ff');
            gradient.addColorStop(1, '#8338ec');
            
            this.ctx.fillStyle = gradient;
            this.ctx.fillRect(x, this.canvas.height - barHeight, barWidth, barHeight);
            
            // Add glow effect
            this.ctx.shadowBlur = 20;
            this.ctx.shadowColor = '#00f5ff';
            
            x += barWidth + 1;
        }
    }
}

// Initialize player when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const player = new NeonWavePlayer();
    
    // Add glitch effect on hover
    const playerContainer = document.querySelector('.player-container');
    playerContainer.addEventListener('mouseenter', () => {
        const glitchOverlay = document.querySelector('.glitch-overlay');
        glitchOverlay.style.animation = 'glitch 2s infinite';
    });
    
    playerContainer.addEventListener('mouseleave', () => {
        const glitchOverlay = document.querySelector('.glitch-overlay');
        glitchOverlay.style.animation = 'glitch 10s infinite';
    });
});