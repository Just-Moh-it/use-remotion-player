"use client";

import { Composition } from "remotion";
import Test from "./Test";

export default function Compositions() {
  return (
    <Composition
      id="test"
      component={Test}
      durationInFrames={30 * 5}
      height={1920}
      width={1080}
      fps={30}
    />
  );
}
