import Chat from "../components/Chat";
import { useState, useEffect } from "react";
import StreamsGrid from "../components/StreamsGrid";
import TwitchStreamPlayer from "../components/TwitchStreamPlayer";

const HomePage = ({ channelList }: { channelList: string[] }) => {
  const [streamers, setStreamers] = useState<string[]>([""]);
  const [selectedStreamer, setSelectedStreamer] = useState<string>("");
  const [selectedExpandedStream, setSelectedExpandedStream] =
    useState<string>("");
  const [showChat, setShowChat] = useState<boolean>(true);
  const [isMobile, setIsMobile] = useState<boolean>(false);

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

  useEffect(() => {
    const checkWidth = () => {
      const isMobile = window.innerWidth <= 768;
      setIsMobile(isMobile);
      setShowChat(!isMobile);
    };

    checkWidth();
    window.addEventListener("resize", checkWidth);

    return () => {
      window.removeEventListener("resize", checkWidth);
    };
  }, []);

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
            isMobile={isMobile}
            streamers={streamers}
            setStreamers={setStreamers}
            selectedStreamer={selectedStreamer}
            selectedExpandedStream={selectedExpandedStream}
            setSelectedExpandedStream={setSelectedExpandedStream}
          />
        )}

        <Chat
          streamers={streamers}
          setStreamers={setStreamers}
          showChat={showChat}
          setShowChat={setShowChat}
          selectedStreamer={selectedStreamer}
          setSelectedStreamer={setSelectedStreamer}
          selectedExpandedStream={selectedExpandedStream}
        />
      </div>
    </section>
  );
};

export default HomePage;
