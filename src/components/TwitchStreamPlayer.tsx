import {
  CloseIconSvg,
  ExpandIconSvg,
  RefreshIconSvg,
  MinimizeIconSvg,
} from "../assets/Icons";
import Button from "./Button";
import { useEffect, useState } from "react";

const TwitchStreamPlayer = ({
  className,
  streamerIndex,
  streamer,
  setStreamers,
  selectedExpandedStream,
  setSelectedExpandedStream,
}: {
  className?: string;
  streamerIndex: number;
  streamer: string;
  setStreamers: React.Dispatch<React.SetStateAction<string[]>>;
  selectedExpandedStream: string;
  setSelectedExpandedStream: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [refreshCount, setRefreshCount] = useState(0);
  const [streamChannel, setStreamChannel] = useState<string>("");
  const [showSearchBar, setShowSearchBar] = useState(false);

  const onStreamChannelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStreamChannel(e.target.value.trim());
  };

  const handleEnterKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearchStreamerButton();
    }
  };

  const handleSearchStreamerButton = () => {
    setStreamers((prevStreamers) => {
      const newStreamers = [...prevStreamers];
      newStreamers[streamerIndex] = streamChannel;
      return newStreamers;
    });
  };

  const handleRefreshStreamPlayer = () => {
    setRefreshCount((prevCount) => prevCount + 1);
  };

  const handleMinimizeStreamPlayer = () => {
    setSelectedExpandedStream("");
  };

  const handleExpandStreamPlayer = () => {
    setSelectedExpandedStream(streamer);
  };

  const handleRemoveStreamPlayer = () => {
    setStreamers((prevStreamers) => {
      const newStreamers = [...prevStreamers];
      newStreamers.splice(streamerIndex, 1);
      return newStreamers;
    });
  };

  useEffect(() => {
    setStreamChannel(streamer);
  }, [streamer]);

  return (
    <div
      className={className}
      onMouseOver={() => setShowSearchBar(true)}
      onMouseLeave={() => setShowSearchBar(false)}
    >
      <div className="flex h-full w-full flex-col">
        <div
          className={`${showSearchBar ? "max-h-full" : "max-h-0"} overflow-hidden duration-1000 ease-in`}
        >
          <div className="m-2! flex items-center justify-between">
            <div className="flex w-full">
              <input
                className="z-10 w-36 rounded-l-[0.375rem] border-1 border-[#49494c] bg-[#18181a] px-[0.625rem]! py-[0.3125rem]! text-[0.875rem] font-normal text-[#eeeef1] placeholder-[#959595] outline-none focus:rounded-r-none focus:border focus:border-[#a674f1] focus:ring-2 focus:ring-[#a674f1]"
                type="text"
                value={streamChannel}
                placeholder={`Channel ${streamerIndex + 1}`}
                onKeyDown={handleEnterKeyPress}
                onChange={onStreamChannelChange}
              />

              <Button
                className="z-0 rounded-l-none rounded-r-[0.375rem]"
                title="Search Streamer"
                onClick={handleSearchStreamerButton}
              >
                Search
              </Button>
            </div>

            <div className="flex gap-2">
              <Button onClick={handleRefreshStreamPlayer}>
                <RefreshIconSvg className="h-4 w-4" />
              </Button>

              {selectedExpandedStream === streamer ? (
                <Button
                  title="Exit Expanded View"
                  onClick={handleMinimizeStreamPlayer}
                >
                  <MinimizeIconSvg className="h-4 w-4" />
                </Button>
              ) : (
                <Button
                  title="Expand Stream"
                  onClick={handleExpandStreamPlayer}
                >
                  <ExpandIconSvg className="h-4 w-4" />
                </Button>
              )}

              {!selectedExpandedStream && (
                <Button
                  className="hover:bg-[#FFAAA8]"
                  onClick={handleRemoveStreamPlayer}
                  title="Close Stream"
                >
                  <CloseIconSvg className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        </div>

        <iframe
          key={streamer + "-" + refreshCount}
          className="h-full w-full"
          src={`https://player.twitch.tv/?channel=${streamer}&parent=${window.location.hostname}${streamerIndex === 0 ? "&muted=false" : "&muted=true"}`}
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default TwitchStreamPlayer;
