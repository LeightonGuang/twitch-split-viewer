import Chat from "../components/Chat";
import Button from "../components/Button";
import { useState, useEffect } from "react";
import { ExpandSidebarSvg } from "../assets/Icons";
import StreamsGrid from "../components/StreamsGrid";
import TwitchStreamPlayer from "../components/TwitchStreamPlayer";

const HomePage = ({ channelList }: { channelList: string[] }) => {
  const [streamers, setStreamers] = useState<string[]>([""]);
  const [selectedStreamer, setSelectedStreamer] = useState<string>("");
  const [selectedExpandedStream, setSelectedExpandedStream] =
    useState<string>("");
  const [isHideChat, setIsHideChat] = useState(false);

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

        {!isHideChat ? (
          <Chat
            className="flex h-dvh flex-col"
            streamers={streamers}
            setStreamers={setStreamers}
            setIsHideChat={setIsHideChat}
            selectedStreamer={selectedStreamer}
            setSelectedStreamer={setSelectedStreamer}
            selectedExpandedStream={selectedExpandedStream}
          />
        ) : (
          <div className="bg-[#18181a] p-2!">
            <Button onClick={() => setIsHideChat(false)} title="Expand Chat">
              <ExpandSidebarSvg className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default HomePage;
