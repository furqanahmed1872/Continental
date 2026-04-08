"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const TRACKS = ["/audio/track1.mp3", "/audio/track2.mp3", "/audio/track3.mp3"];

const VOLUME = 0.05; // 🔊 set your desired volume here (0.0 – 1.0)
const FADE_DURATION = 1000;

function fadeVolume(
  audio: HTMLAudioElement,
  from: number,
  to: number,
  duration: number,
  onDone?: () => void,
) {
  audio.volume = Math.max(0, Math.min(1, from));
  const steps = 40;
  const interval = duration / steps;
  const delta = (to - from) / steps;
  let count = 0;
  const timer = setInterval(() => {
    count++;
    audio.volume = Math.min(1, Math.max(0, audio.volume + delta));
    if (count >= steps) {
      clearInterval(timer);
      onDone?.();
    }
  }, interval);
  return timer;
}

export default function SoundButton() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const trackIdxRef = useRef(0);
  const initializedRef = useRef(false);
  const fadeTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const audio = new Audio(TRACKS[0]);
    audio.volume = 0;
    audio.preload = "auto";
    audioRef.current = audio;

    audio.addEventListener("ended", () => {
      trackIdxRef.current = (trackIdxRef.current + 1) % TRACKS.length; // loops back to 0 after last track
      audio.src = TRACKS[trackIdxRef.current];
      audio.volume = VOLUME;
      audio.load(); // required when changing src
      audio.play().catch(() => {});
    });

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  useEffect(() => {
    if (pathname !== "/") {
      setVisible(true);
      return;
    }

    const handler = () => {
      setVisible(true);
      if (!initializedRef.current && audioRef.current) {
        initializedRef.current = true;
        audioRef.current
          .play()
          .then(() => {
            fadeVolume(audioRef.current!, 0, VOLUME, 3000);
            setPlaying(true);
          })
          .catch(() => {});
      }
    };

    window.addEventListener("continental:enter", handler);
    return () => window.removeEventListener("continental:enter", handler);
  }, [pathname]);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (fadeTimerRef.current) clearInterval(fadeTimerRef.current);

    if (playing) {
      fadeTimerRef.current = fadeVolume(
        audio,
        audio.volume,
        0,
        FADE_DURATION,
        () => audio.pause(),
      );
      setPlaying(false);
    } else {
      audio
        .play()
        .then(() => {
          fadeTimerRef.current = fadeVolume(audio, 0, VOLUME, FADE_DURATION);
          setPlaying(true);
        })
        .catch((err) => console.error("Playback failed:", err));
    }
  };

  if (!visible) return null;

  return (
    <button
      id="sound-btn"
      onClick={toggle}
      aria-label="Toggle ambient sound"
      title={playing ? "Pause music" : "Play ambient music"}
      style={{
        borderColor: playing ? "rgba(201,166,107,0.5)" : "rgba(200,16,46,0.4)",
      }}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke={playing ? "#C9A66B" : "#555"}
        strokeWidth="1.5"
        strokeLinecap="round"
      >
        {playing ? (
          <>
            <path d="M9 18V5l12-2v13" />
            <circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="16" r="3" />
          </>
        ) : (
          <>
            <path d="M9 18V5l12-2v13" />
            <circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="16" r="3" />
            <line x1="3" y1="3" x2="21" y2="21" stroke="var(--red)" />
          </>
        )}
      </svg>
    </button>
  );
}
