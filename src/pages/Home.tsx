import Chat from "../components/Chat";
import { useEffect, useState } from "react";
import StreamsGrid from "../components/StreamsGrid";
import TwitchStreamPlayer from "../components/TwitchStreamPlayer";

const HomePage = ({ streamerList }: { streamerList: string[] }) => {
  const [streamers, setStreamers] = useState<string[]>([""]);
  const [selectedStreamer, setSelectedStreamer] = useState<string>("");
  const [selectedExpandedStream, setSelectedExpandedStream] =
    useState<string>("");

  useEffect(() => {
    if (streamerList.length > 0) {
      setStreamers(streamerList);
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

        <div className="flex flex-col">
          <div className="flex w-full justify-center p-2!">
            <button
              className="cursor-pointer rounded-sm bg-[#2a292e] px-2! py-[0.3125rem]! text-[0.8125rem] font-semibold text-white hover:bg-[#302f35]"
              onClick={() => {
                if (streamers.length < 12) {
                  setStreamers([...streamers, ""]);
                }
              }}
            >
              Add Stream
            </button>
          </div>

          <Chat
            className="h-full"
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
