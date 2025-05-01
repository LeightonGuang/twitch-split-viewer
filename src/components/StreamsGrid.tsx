import { useEffect, useState } from "react";
import TwitchStreamPlayer from "./TwitchStreamPlayer";

const StreamsGrid = ({
  className,
  streamers,
  setStreamers,
  selectedStreamer,
  selectedExpandedStream,
  setSelectedExpandedStream,
}: {
  className?: string;
  streamers: string[];
  setStreamers: React.Dispatch<React.SetStateAction<string[]>>;
  selectedStreamer: string;
  selectedExpandedStream: string;
  setSelectedExpandedStream: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [gridClass, setGridClass] = useState<string>("grid-cols-1 grid-rows-1");

  useEffect(() => {
    const handleStreamersChange = () => {
      if (streamers.length === 1) {
        setGridClass("grid-cols-1 grid-rows-1");
      } else if (streamers.length === 2) {
        setGridClass("grid-cols-1 grid-rows-2");
      } else if (streamers.length === 3 || streamers.length === 4) {
        setGridClass("grid-cols-2 grid-rows-2");
      } else if (streamers.length === 5 || streamers.length === 6) {
        setGridClass("grid-cols-3 grid-rows-2");
      } else if (
        streamers.length === 7 ||
        streamers.length === 8 ||
        streamers.length === 9
      ) {
        setGridClass("grid-cols-3 grid-rows-3");
      } else if (streamers.length === 10) {
        setGridClass("grid-cols-4 grid-rows-3");
      }
    };

    handleStreamersChange();
  }, [streamers]);

  return (
    <div className={className}>
      <div className={`grid h-dvh w-full ${gridClass}`}>
        {streamers.map((streamer, streamerIndex) => (
          <TwitchStreamPlayer
            className={`h-full w-full ${selectedStreamer === streamer && "border border-[#9147ff]"}`}
            key={streamerIndex}
            streamerIndex={streamerIndex}
            streamer={streamer}
            setStreamers={setStreamers}
            selectedExpandedStream={selectedExpandedStream}
            setSelectedExpandedStream={setSelectedExpandedStream}
          />
        ))}
      </div>
    </div>
  );
};

export default StreamsGrid;
