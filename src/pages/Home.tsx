import { useEffect, useState } from "react";
import StreamsGrid from "../components/StreamsGrid";
import Chat from "../components/Chat";

const SplitViewerPage = () => {
  const [streamers, setStreamers] = useState<string[]>([]);

  useEffect(() => {
    setStreamers(["fuslie", "abe", "shroud"]);
  }, []);

  useEffect(() => {
    console.log(streamers);
  }, [streamers]);

  return (
    <section className="h-dvh w-full overflow-y-clip bg-[#0e0e10]">
      <div className="flex">
        <StreamsGrid
          className="max-h-dvh w-full"
          streamers={streamers}
          setStreamers={setStreamers}
        />

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

          <Chat className="h-full" streamers={streamers} />
        </div>
      </div>
    </section>
  );
};

export default SplitViewerPage;
