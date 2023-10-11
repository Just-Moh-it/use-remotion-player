"use client";

import { useRef } from "react";
import { ComponentProps, ForwardRefRenderFunction, forwardRef } from "react";
import { Player, PlayerRef } from "@remotion/player";
import {
  UseRemotionPlayerOptions,
  useRemotionPlayer,
} from "./use-remotion-player";

const PlayerInternal: ForwardRefRenderFunction<
  PlayerRef,
  ComponentProps<typeof Player> & UseRemotionPlayerOptions
> = (
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
    ...props
  },
  forwardedRef
) => {
  const ref = useRef<PlayerRef>(null);

  if (forwardedRef) {
    if (typeof forwardedRef === "function") {
      forwardedRef(ref.current);
    } else {
      forwardedRef.current = ref.current;
    }
  }
  useRemotionPlayer(ref, {
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
  });

  return <Player {...props} ref={ref} />;
};

export const CustomizablePlayer = forwardRef(PlayerInternal);
