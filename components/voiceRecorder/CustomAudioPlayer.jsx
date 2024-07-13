/**
 * v0 by Vercel.
 * @see https://v0.dev/t/fkvWGwE1ZYR
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Check, Trash } from "lucide-react";

export default function CustomAudioPlayer({
  src,
  deleteRecording,
  submitRecording,
  setIsRecording,
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);
  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  const handleVolumeChange = (value) => {
    audioRef.current.volume = value / 100;
    setVolume(value);
  };
  const handleSeek = (value) => {
    audioRef.current.currentTime = (value / 100) * audioRef.current.duration;
    setCurrentTime(value);
  };
  useEffect(() => {
    const audio = audioRef.current;
    audio.addEventListener("timeupdate", () => {
      setCurrentTime(audio.currentTime);
      setDuration(audio.duration);
    });
    return () => {
      audio.removeEventListener("timeupdate", () => {});
    };
  }, []);
  return (
    <div className="bg-muted rounded-lg p-4 shadow-md w-full max-w-md">
      <audio ref={audioRef} src={src} />
      <div className="flex items-center justify-between mb-4">
        <span className="flex items-center gap-[0.1rem]">
          <Button
            variant="ghost"
            size="icon"
            onClick={togglePlay}
            className="text-primary"
          >
            {isPlaying ? (
              <PauseIcon className="w-6 h-6" />
            ) : (
              <PlayIcon className="w-6 h-6" />
            )}
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="text-rose-500"
            onClick={() => {
              deleteRecording(), setIsRecording();
            }}
          >
            <Trash className="w-6 h-6" />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="text-green-500"
            onClick={submitRecording}
          >
            <Check className="w-6 h-6" />
          </Button>
        </span>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <Volume2Icon className="w-5 h-5" />
          </Button>
          <Slider
            value={[volume]}
            onValueChange={handleVolumeChange}
            className="w-20 [&>span:first-child]:h-1 [&>span:first-child]:bg-muted-foreground [&_[role=slider]]:bg-primary [&_[role=slider]]:w-3 [&_[role=slider]]:h-3 [&_[role=slider]]:border-0 [&>span:first-child_span]:bg-primary [&_[role=slider]:focus-visible]:ring-0 [&_[role=slider]:focus-visible]:ring-offset-0 [&_[role=slider]:focus-visible]:scale-105 [&_[role=slider]:focus-visible]:transition-transform"
          />
        </div>
      </div>
      <div className="relative h-1 bg-muted rounded-full overflow-hidden">
        <div
          className="absolute h-full bg-primary"
          style={{ width: `${(currentTime / duration) * 100}%` }}
        />
        <Slider
          value={[(currentTime / duration) * 100]}
          onValueChange={handleSeek}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer [&>span:first-child]:h-full [&>span:first-child]:bg-transparent [&_[role=slider]]:bg-transparent [&_[role=slider]]:w-full [&_[role=slider]]:h-full [&_[role=slider]]:border-0 [&>span:first-child_span]:bg-transparent [&_[role=slider]:focus-visible]:ring-0 [&_[role=slider]:focus-visible]:ring-offset-0 [&_[role=slider]:focus-visible]:scale-100 [&_[role=slider]:focus-visible]:transition-transform"
        />
      </div>
    </div>
  );
}

function PauseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="14" y="4" width="4" height="16" rx="1" />
      <rect x="6" y="4" width="4" height="16" rx="1" />
    </svg>
  );
}

function PlayIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  );
}

function Volume2Icon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
