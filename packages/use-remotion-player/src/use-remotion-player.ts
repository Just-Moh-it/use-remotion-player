import { useCallback, useState } from "react";
import React, { useEffect } from "react";
import { PlayerRef } from "@remotion/player";
import { CallbackListener } from "@remotion/player/dist/cjs/event-emitter";

export interface UseRemotionPlayerOptions {
  onSeeked?: CallbackListener<"seeked">;
  onPause?: CallbackListener<"pause">;
  onPlay?: CallbackListener<"play">;
  onRateChange?: CallbackListener<"ratechange">;
  onScaleChange?: CallbackListener<"scalechange">;
  onVolumeChange?: CallbackListener<"volumechange">;
  onEnded?: CallbackListener<"ended">;
  onError?: CallbackListener<"error">;
  onTimeUpdate?: CallbackListener<"timeupdate">;
  onFrameUpdate?: CallbackListener<"frameupdate">;
  onFullscreenChange?: CallbackListener<"fullscreenchange">;
  onMuteChange?: CallbackListener<"mutechange">;
}

export const useRemotionPlayer = (
  playerRef: React.RefObject<PlayerRef>,
  {
    onSeeked,
    onPause,
    onPlay,
    onRateChange,
    onScaleChange,
    onVolumeChange,
    onEnded,
    onError,
    onTimeUpdate,
    onFrameUpdate,
    onFullscreenChange,
    onMuteChange,
  }: UseRemotionPlayerOptions
) => {
  const [isPlaying, setIsPlaying] = useState<boolean | null>(null);

  useEffect(() => {
    if (!playerRef?.current) return;

    const { current } = playerRef;

    const _onPlay = () => setIsPlaying(true);
    const _onPause = () => setIsPlaying(false);

    current.addEventListener("play", () => _onPlay());
    current.addEventListener("pause", () => _onPause());

    if (onScaleChange) {
      current.addEventListener("scalechange", onScaleChange);
    }
    if (onSeeked) {
      current.addEventListener("seeked", onSeeked);
    }
    if (onPause) {
      current.addEventListener("pause", onPause);
    }
    if (onPlay) {
      current.addEventListener("play", onPlay);
    }
    if (onRateChange) {
      current.addEventListener("ratechange", onRateChange);
    }
    if (onVolumeChange) {
      current.addEventListener("volumechange", onVolumeChange);
    }
    if (onEnded) {
      current.addEventListener("ended", onEnded);
    }
    if (onError) {
      current.addEventListener("error", onError);
    }
    if (onTimeUpdate) {
      current.addEventListener("timeupdate", onTimeUpdate);
    }
    if (onFrameUpdate) {
      current.addEventListener("frameupdate", onFrameUpdate);
    }
    if (onFullscreenChange) {
      current.addEventListener("fullscreenchange", onFullscreenChange);
    }
    if (onMuteChange) {
      current.addEventListener("mutechange", onMuteChange);
    }

    return () => {
      current.removeEventListener("play", () => _onPlay());
      current.removeEventListener("pause", () => _onPause());

      if (onScaleChange) {
        current.removeEventListener("scalechange", onScaleChange);
      }
      if (onSeeked) {
        current.removeEventListener("seeked", onSeeked);
      }
      if (onPause) {
        current.removeEventListener("pause", onPause);
      }
      if (onPlay) {
        current.removeEventListener("play", onPlay);
      }
      if (onRateChange) {
        current.removeEventListener("ratechange", onRateChange);
      }
      if (onVolumeChange) {
        current.removeEventListener("volumechange", onVolumeChange);
      }
      if (onEnded) {
        current.removeEventListener("ended", onEnded);
      }
      if (onError) {
        current.removeEventListener("error", onError);
      }
      if (onTimeUpdate) {
        current.removeEventListener("timeupdate", onTimeUpdate);
      }
      if (onFrameUpdate) {
        current.removeEventListener("frameupdate", onFrameUpdate);
      }
      if (onFullscreenChange) {
        current.removeEventListener("fullscreenchange", onFullscreenChange);
      }
      if (onMuteChange) {
        current.removeEventListener("mutechange", onMuteChange);
      }
    };
  }, [
    onEnded,
    onError,
    onFrameUpdate,
    onFullscreenChange,
    onMuteChange,
    onPause,
    onPlay,
    onRateChange,
    onScaleChange,
    onSeeked,
    onTimeUpdate,
    onVolumeChange,
    playerRef,
  ]);

  const pause = useCallback(() => {
    if (!playerRef?.current) return;
    playerRef.current.pause();
  }, [playerRef]);

  const play = useCallback(() => {
    if (!playerRef?.current) return;
    playerRef.current.play();
  }, [playerRef]);

  const togglePlayPause = useCallback(() => {
    if (!playerRef?.current) return;
    if (playerRef.current.isPlaying()) {
      playerRef.current.pause();
    } else {
      playerRef.current.play();
    }
  }, [playerRef]);

  return { pause, play, togglePlayPause, isPlaying };
};
