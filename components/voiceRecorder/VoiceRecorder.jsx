"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Check, Download, Mic, Trash } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import CustomAudioPlayer from "./CustomAudioPlayer";

let recorder;
let recordingChunks;
let timerTimeout;
// Utility function to pad a number with leading zeros
const padWithLeadingZeros = (num, length) => {
  return String(num).padStart(length, "0");
};

// Utility function to download a blob
const downloadBlob = (blob) => {
  const downloadLink = document.createElement("a");
  downloadLink.href = URL.createObjectURL(blob);
  downloadLink.download = `Audio_${new Date().getMilliseconds()}.mp3`;
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
};

export const AudioRecorderWithVisualizer = ({ className, timerClassName }) => {
  const { theme } = useTheme();
  // States
  const [isRecording, setIsRecording] = useState(false);
  const [isRecordingFinished, setIsRecordingFinished] = useState(false);
  const [timer, setTimer] = useState(0);
  const [currentRecord, setCurrentRecord] = useState({
    id: -1,
    name: "",
    file: null,
  });
  // Calculate the hours, minutes, and seconds from the timer
  const hours = Math.floor(timer / 3600);
  const minutes = Math.floor((timer % 3600) / 60);
  const seconds = timer % 60;

  // Split the hours, minutes, and seconds into individual digits
  const [hourLeft, hourRight] = useMemo(
    () => padWithLeadingZeros(hours, 2).split(""),
    [hours]
  );
  const [minuteLeft, minuteRight] = useMemo(
    () => padWithLeadingZeros(minutes, 2).split(""),
    [minutes]
  );
  const [secondLeft, secondRight] = useMemo(
    () => padWithLeadingZeros(seconds, 2).split(""),
    [seconds]
  );
  // Refs
  const mediaRecorderRef = useRef({
    stream: null,
    analyser: null,
    mediaRecorder: null,
    audioContext: null,
  });
  const canvasRef = useRef(null);
  const animationRef = useRef > null;

  function startRecording() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({
          audio: true,
        })
        .then((stream) => {
          setIsRecording(true);
          // ============ Analyzing ============
          const AudioContext = window.AudioContext;
          const audioCtx = new AudioContext();
          const analyser = audioCtx.createAnalyser();
          const source = audioCtx.createMediaStreamSource(stream);
          source.connect(analyser);
          mediaRecorderRef.current = {
            stream,
            analyser,
            mediaRecorder: null,
            audioContext: audioCtx,
          };

          // const mimeType = MediaRecorder.isTypeSupported("audio/mpeg")
          //   ? "audio/mpeg"
          //   : MediaRecorder.isTypeSupported("audio/webm")
          //   ? "audio/webm"
          //   : "audio/wav";

          const mimeType = MediaRecorder.isTypeSupported(
            "video/webm; codecs=vp9"
          )
            ? "video/webm; codecs=vp9"
            : MediaRecorder.isTypeSupported("video/webm")
            ? "video/webm"
            : MediaRecorder.isTypeSupported("video/mp4")
            ? "video/mp4"
            : "video/mp4";

          const options = { mimeType };
          mediaRecorderRef.current.mediaRecorder = new MediaRecorder(
            stream,
            options
          );
          mediaRecorderRef.current.mediaRecorder.start();
          recordingChunks = [];
          // ============ Recording ============
          recorder = new MediaRecorder(stream);
          recorder.start();
          recorder.ondataavailable = (e) => {
            recordingChunks.push(e.data);
          };
        })
        .catch((error) => {
          alert(error);
          console.log(error);
        });
    }
  }
  function stopRecording() {
    recorder.onstop = () => {
      const recordBlob = new Blob(recordingChunks, {
        type: "video/mp4",
      });
      // downloadBlob(recordBlob);
      setCurrentRecord({
        ...currentRecord,
        file: window.URL.createObjectURL(recordBlob),
      });
      recordingChunks = [];
    };
    console.log(currentRecord.file);
    recorder.stop();

    setIsRecording(false);
    setIsRecordingFinished(true);
    setTimer(0);
    clearTimeout(timerTimeout);
  }
  function resetRecording() {
    const { mediaRecorder, stream, analyser, audioContext } =
      mediaRecorderRef.current;

    if (mediaRecorder) {
      mediaRecorder.onstop = () => {
        recordingChunks = [];
      };
      mediaRecorder.stop();
    } else {
      alert("recorder instance is null!");
    }

    // Stop the web audio context and the analyser node
    if (analyser) {
      analyser.disconnect();
    }
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
    }
    if (audioContext) {
      audioContext.close();
    }
    setIsRecording(false);
    setIsRecordingFinished(true);
    setTimer(0);
    clearTimeout(timerTimeout);

    // Clear the animation frame and canvas
    cancelAnimationFrame(animationRef.current || 0);
    const canvas = canvasRef.current;
    if (canvas) {
      const canvasCtx = canvas.getContext("2d");
      if (canvasCtx) {
        const WIDTH = canvas.width;
        const HEIGHT = canvas.height;
        canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);
      }
    }
  }
  const handleSubmit = () => {
    stopRecording();
  };

  // Effect to update the timer every second
  useEffect(() => {
    if (isRecording) {
      timerTimeout = setTimeout(() => {
        setTimer(timer + 1);
      }, 1000);
    }
    return () => clearTimeout(timerTimeout);
  }, [isRecording, timer]);
  function submitRecording() {
    console.log(currentRecord.file);
  }
  return (
    <div
      className={cn(
        "flex h-16 rounded-md relative w-full items-center justify-center gap-2 max-w-5xl",
        {
          "border p-1": isRecording,
          "border-none p-0": !isRecording,
        },
        className
      )}
    >
      {!isRecordingFinished && (
        <div className="flex gap-2">
          {isRecording ? (
            <Timer
              hourLeft={hourLeft}
              hourRight={hourRight}
              minuteLeft={minuteLeft}
              minuteRight={minuteRight}
              secondLeft={secondLeft}
              secondRight={secondRight}
              timerClassName={timerClassName}
            />
          ) : null}
          {/* ========== Delete recording button ========== */}
          {isRecording ? (
            <Button
              onClick={resetRecording}
              size={"icon"}
              variant={"destructive"}
            >
              <Trash size={15} />
            </Button>
          ) : null}

          {/* ========== Start and send recording button ========== */}
          {!isRecording ? (
            <Button onClick={() => startRecording()} size={"icon"}>
              <Mic size={15} />
            </Button>
          ) : (
            <Button onClick={handleSubmit} size={"icon"}>
              <Check size={15} />
            </Button>
          )}
        </div>
      )}
      {isRecordingFinished && (
        <div className=" w-full p-4 mt-[3rem] flex items-center justify-center">
          <CustomAudioPlayer
            src={currentRecord.file}
            deleteRecording={resetRecording}
            submitRecording={submitRecording}
            setIsRecording={() => setIsRecordingFinished(false)}
          />
        </div>
      )}
    </div>
  );
};

const Timer = React.memo(
  ({
    hourLeft,
    hourRight,
    minuteLeft,
    minuteRight,
    secondLeft,
    secondRight,
    timerClassName,
  }) => {
    return (
      <div
        className={cn(
          "items-center  justify-center gap-0.5 border p-1.5 rounded-md font-mono font-medium text-foreground flex",
          timerClassName
        )}
      >
        <span className="rounded-md bg-background p-0.5 text-foreground ">
          {secondRight}
        </span>
        <span className="rounded-md bg-background p-0.5 text-foreground">
          {secondLeft}
        </span>
        <span>:</span>
        <span className="rounded-md bg-background p-0.5 text-foreground">
          {minuteRight}
        </span>
        <span className="rounded-md bg-background p-0.5 text-foreground">
          {minuteLeft}
        </span>
        <span>:</span>
        <span className="rounded-md bg-background p-0.5 text-foreground">
          {hourRight}
        </span>
        <span className="rounded-md bg-background p-0.5 text-foreground">
          {hourLeft}
        </span>
      </div>
    );
  }
);
Timer.displayName = "Timer";
