import { useEffect, useRef, useState } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';

interface AudioPlayerProps {
  title: string;
  src: string;
  artist?: string;
  autoPlay?: boolean;
}

export function AudioPlayer({
  title,
  src,
  artist = 'Davide Paratore',
  autoPlay = false
}: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.8);

  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.volume = volume;

    if (autoPlay) {
      audioRef.current.play();
      setIsPlaying(true);
    }

    return () => {
      audioRef.current?.pause();
    };
  }, [autoPlay, volume]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div className="mt-6 border-t border-zinc-800 pt-4">
      <audio ref={audioRef} src={src} />

      <div className="flex items-center justify-between mb-3">
        <div>
          <div className="text-white text-sm">{title}</div>
          <div className="text-xs text-zinc-500">{artist}</div>
        </div>

        <button
          onClick={togglePlay}
          className="w-10 h-10 bg-emerald-500 flex items-center justify-center"
        >
          {isPlaying ? (
            <Pause className="w-5 h-5 text-black" />
          ) : (
            <Play className="w-5 h-5 text-black" />
          )}
        </button>
      </div>

      <div className="flex items-center gap-3">
        <Volume2 className="w-4 h-4 text-zinc-500" />
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
          className="w-full accent-emerald-500"
        />
      </div>
    </div>
  );
}
