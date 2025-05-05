import Chat from "../components/Chat";
import { useState, useEffect } from "react";
import StreamsGrid from "../components/StreamsGrid";
import TwitchStreamPlayer from "../components/TwitchStreamPlayer";

const HomePage = ({ channelList }: { channelList: string[] }) => {
  const [streamers, setStreamers] = useState<string[]>([""]);
  const [selectedStreamer, setSelectedStreamer] = useState<string>("");
  const [selectedExpandedStream, setSelectedExpandedStream] =
    useState<string>("");

  useEffect(() => {
    if (channelList.length > 0) {
      setStreamers(channelList);
    } else {
      setStreamers(["twitch"]);
    }
  }, []);

  useEffect(() => {
    if (streamers.length > 0) setSelectedStreamer(streamers[0]);
  }, [streamers]);

  return (
    <section className="h-dvh w-full overflow-y-clip bg-[#0e0e10]">
      <div className="flex">
        {selectedExpandedStream ? (
          <TwitchStreamPlayer
            className="h-dvh w-full"
            streamerIndex={0}
            streamer={selectedExpandedStream}
            setStreamers={setStreamers}
            selectedExpandedStream={selectedExpandedStream}
            setSelectedExpandedStream={setSelectedExpandedStream}
          />
        ) : (
          <StreamsGrid
            className="max-h-dvh w-full"
            streamers={streamers}
            setStreamers={setStreamers}
            selectedStreamer={selectedStreamer}
            selectedExpandedStream={selectedExpandedStream}
            setSelectedExpandedStream={setSelectedExpandedStream}
          />
        )}

        <div className="flex h-dvh flex-col">
          <Chat
            className="flex h-full flex-col"
            streamers={streamers}
            setStreamers={setStreamers}
            selectedStreamer={selectedStreamer}
            setSelectedStreamer={setSelectedStreamer}
            selectedExpandedStream={selectedExpandedStream}
          />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
