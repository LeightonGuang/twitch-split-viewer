import Chat from "../components/Chat";
import Button from "../components/Button";
import { useEffect, useState } from "react";
import { PlusIconSvg } from "../assets/Icons";
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
          <div className="flex h-min w-full justify-center p-2!">
            <Button
              onClick={() => {
                if (streamers.length < 12) {
                  setStreamers([...streamers, ""]);
                }
              }}
              title="Add Stream"
            >
              <div className="flex items-center gap-1">
                <PlusIconSvg className="h-4 w-4" />
                <span>Add Stream</span>
              </div>
            </Button>
          </div>

          <Chat
            className="flex h-full flex-col"
            streamers={streamers}
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
