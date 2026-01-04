import { useState, useRef, useEffect } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  SkipBack,
  SkipForward,
  Settings,
  Subtitles,
} from "lucide-react";
import { Slider } from "@/components/ui/slider";

interface VideoPlayerProps {
  title: string;
  posterImage: string;
  onClose?: () => void;
}

const VideoPlayer = ({ title, posterImage, onClose }: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(80);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [isBuffering, setIsBuffering] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout>();

  // Demo video - using a sample video
  const videoUrl = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case " ":
          e.preventDefault();
          togglePlay();
          break;
        case "m":
          toggleMute();
          break;
        case "f":
          toggleFullscreen();
          break;
        case "Escape":
          if (onClose) onClose();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isPlaying, isMuted]);

  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    if (isPlaying) {
      controlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false);
      }, 3000);
    }
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      setIsBuffering(true);
      setTimeout(() => setIsBuffering(false), 1000);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement && containerRef.current) {
      containerRef.current.requestFullscreen();
      setIsFullscreen(true);
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const handleVolumeChange = (value: number[]) => {
    setVolume(value[0]);
    setIsMuted(value[0] === 0);
  };

  const handleSeek = (value: number[]) => {
    setCurrentTime(value[0]);
  };

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);
    if (h > 0) {
      return `${h}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
    }
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  // Simulate video progress
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && currentTime < 9120) {
      interval = setInterval(() => {
        setCurrentTime((prev) => Math.min(prev + 1, 9120));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentTime]);

  useEffect(() => {
    setDuration(9120); // 2h 32m in seconds
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-video bg-black rounded-xl overflow-hidden group"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => isPlaying && setShowControls(false)}
    >
      {/* Video/Poster */}
      <div className="absolute inset-0">
        {isPlaying ? (
          <video
            src={videoUrl}
            className="w-full h-full object-contain"
            muted={isMuted}
            autoPlay
          />
        ) : (
          <img
            src={posterImage}
            alt={title}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Buffering Indicator */}
      {isBuffering && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      {/* Gradient Overlays */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 transition-opacity duration-300 ${
          showControls ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Top Bar */}
      <div
        className={`absolute top-0 left-0 right-0 p-4 lg:p-6 flex items-center justify-between transition-opacity duration-300 ${
          showControls ? "opacity-100" : "opacity-0"
        }`}
      >
        <h2 className="font-heading text-xl lg:text-2xl text-white">{title}</h2>
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-lg hover:bg-white/20 transition-colors">
            <Subtitles className="w-5 h-5 text-white" />
          </button>
          <button className="p-2 rounded-lg hover:bg-white/20 transition-colors">
            <Settings className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Center Play Button */}
      <button
        onClick={togglePlay}
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
          showControls || !isPlaying ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-glow hover:scale-110 transition-transform">
          {isPlaying ? (
            <Pause className="w-8 h-8 lg:w-10 lg:h-10 text-primary-foreground" />
          ) : (
            <Play className="w-8 h-8 lg:w-10 lg:h-10 text-primary-foreground ml-1" />
          )}
        </div>
      </button>

      {/* Bottom Controls */}
      <div
        className={`absolute bottom-0 left-0 right-0 p-4 lg:p-6 transition-opacity duration-300 ${
          showControls ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Progress Bar */}
        <div className="mb-4">
          <Slider
            value={[currentTime]}
            max={duration}
            step={1}
            onValueChange={handleSeek}
            className="cursor-pointer"
          />
        </div>

        {/* Controls Row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Play/Pause */}
            <button
              onClick={togglePlay}
              className="p-2 rounded-lg hover:bg-white/20 transition-colors"
            >
              {isPlaying ? (
                <Pause className="w-6 h-6 text-white" />
              ) : (
                <Play className="w-6 h-6 text-white" />
              )}
            </button>

            {/* Skip Back */}
            <button className="p-2 rounded-lg hover:bg-white/20 transition-colors">
              <SkipBack className="w-5 h-5 text-white" />
            </button>

            {/* Skip Forward */}
            <button className="p-2 rounded-lg hover:bg-white/20 transition-colors">
              <SkipForward className="w-5 h-5 text-white" />
            </button>

            {/* Volume */}
            <div className="flex items-center gap-2 group/volume">
              <button
                onClick={toggleMute}
                className="p-2 rounded-lg hover:bg-white/20 transition-colors"
              >
                {isMuted || volume === 0 ? (
                  <VolumeX className="w-5 h-5 text-white" />
                ) : (
                  <Volume2 className="w-5 h-5 text-white" />
                )}
              </button>
              <div className="w-0 overflow-hidden group-hover/volume:w-24 transition-all duration-300">
                <Slider
                  value={[isMuted ? 0 : volume]}
                  max={100}
                  step={1}
                  onValueChange={handleVolumeChange}
                  className="cursor-pointer"
                />
              </div>
            </div>

            {/* Time */}
            <span className="text-white text-sm font-medium">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Fullscreen */}
            <button
              onClick={toggleFullscreen}
              className="p-2 rounded-lg hover:bg-white/20 transition-colors"
            >
              {isFullscreen ? (
                <Minimize className="w-5 h-5 text-white" />
              ) : (
                <Maximize className="w-5 h-5 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
