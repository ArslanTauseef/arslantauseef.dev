import { useEffect, useRef, useState } from "react";

interface RotatingTypewriterOptions {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pause?: number;
  loop?: boolean;
}

export function useRotatingTypewriter({
  words,
  typingSpeed = 50,
  deletingSpeed = 30,
  pause = 5000,
  loop = true,
}: RotatingTypewriterOptions) {
  const [text, setText] = useState("");

  const wordIndex = useRef(0);
  const phase = useRef<"typing" | "pausing" | "deleting">("typing");
  const startTime = useRef<number | null>(null);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const animate = (time: number) => {
      if (!startTime.current) startTime.current = time;
      const elapsed = time - startTime.current;

      const word = words[wordIndex.current];

      if (phase.current === "typing") {
        const chars = Math.min(
          Math.floor(elapsed / typingSpeed),
          word.length
        );

        setText(word.slice(0, chars));

        if (chars === word.length) {
          phase.current = "pausing";
          startTime.current = time;
        }
      }

      if (phase.current === "pausing") {
        if (elapsed > pause) {
          phase.current = "deleting";
          startTime.current = time;
        }
      }

      if (phase.current === "deleting") {
        const chars = Math.max(
          word.length - Math.floor(elapsed / deletingSpeed),
          0
        );

        setText(word.slice(0, chars));

        if (chars === 0) {
          phase.current = "typing";
          startTime.current = time;

          wordIndex.current =
            (wordIndex.current + 1) % words.length;

          if (!loop && wordIndex.current === 0) return;
        }
      }

      raf.current = requestAnimationFrame(animate);
    };

    raf.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf.current!);
  }, [words, typingSpeed, deletingSpeed, pause, loop]);

  return text;
}
