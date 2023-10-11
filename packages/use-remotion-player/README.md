## `use-remotion-player`

React hook and components utilities to customize the remotion player.

### Usage

Either use the hook `useRemotionPlayer` like:

```tsx
import { useRemotionPlayer } from "use-remotion-player";
import { AbsoluteFill } from "remotion";
import { Player, type PlayerRef } from "@remotion/player";
import { createStore } from "zustand";

// Eg: Any global state
const useZustandStore = createStore<{ isPlaying: boolean }>()({
  isPlaying: false,
});

// Configure the player
export const Example: React.FC = () => {
  const playerRef = useRef<PlayerRef>(null);
  const { togglePlayPause } = useRemotionPlayer(playerRef, {
    onPause: () => useZustandStore.setState({ isPlaying: false }),
    onPlay: () => useZustandStore.setState({ isPlaying: true }),
  });

  return (
    <>
      <Player
        ref={playerRef}
        compositionWidth={1920}
        compositionHeight={1080}
        controls
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </>
  );
};

// Somewhere else in your application
export const CustomControls = () => {
  const { isPlaying } = useZustandStore();

  return <>{isPlaying ? <Pause /> : <Play />}</>;
};
```

Or use our `CustomizablePlayer` component (recommended approach):

```tsx
import { CustomizablePlayer } from "use-remotion-player";
import { AbsoluteFill } from "remotion";
import { Player } from "@remotion/player";
import { createStore } from "zustand";

// Eg: Any global state
const useZustandStore = createStore<{ isPlaying: boolean }>()({
  isPlaying: false,
});

// Configure the player
export const Example: React.FC = () => {
  return (
    <>
      <CustomizablePlayer
        compositionWidth={1920}
        compositionHeight={1080}
        controls
        style={{
          width: "100%",
          height: "100%",
        }}
        onPause={() => useZustandStore.setState({ isPlaying: false })}
        onPlay={() => useZustandStore.setState({ isPlaying: true })}
      />
    </>
  );
};

// Somewhere else in your application
export const CustomControls = () => {
  const { isPlaying } = useZustandStore();

  return <>{isPlaying ? <PauseIcon /> : <PlayIcon />}</>;
};
```

## License

This repo is under the MIT licnse. See the [LICENSE.md](LICENSE.md) file for more info.
