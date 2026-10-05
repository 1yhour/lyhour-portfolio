"use client";
import { FaPause, FaPlay } from "react-icons/fa6";
import { Button } from "../ui/button";
import { useEffect, useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    audioRef.current = new Audio("/audio/venta-kmav-av-sbek.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.4;
    return () => audioRef.current?.pause();
  }, []);
  const toggleAudio = async () => {
    if (!audioRef.current) return;
    if (playing) audioRef.current.pause();
    else audioRef.current.play();
    setPlaying(!playing);
  };

  return (
    <div className="fixed bottom-5 left-5 z-50">
      <Button onClick={toggleAudio} className="cursor-pointer rounded-full w-10 h-10 border border-border bg-background/95 backdrop:blur shadow-sm"> {playing ? <FaPause className="w-4 h-4 text-muted-foreground"/> : <FaPlay className="w-4 h-4 text-muted-foreground"/>}</Button>
    </div>
  )
}
