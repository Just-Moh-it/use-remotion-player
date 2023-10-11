"use client";

import React from "react";
import { CustomizablePlayer } from "use-remotion-player";
import Test from "../remotion/Test";

export default function HomePage() {
  return (
    <>
      <CustomizablePlayer
        controls
        component={Test}
        durationInFrames={30 * 5}
        compositionHeight={1920}
        compositionWidth={1080}
        fps={30}
        style={{ width: 200 }}
        onPlay={console.log}
        onPause={console.log}
      />
    </>
  );
}
