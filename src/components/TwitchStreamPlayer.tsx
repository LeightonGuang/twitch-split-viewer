import {
  CloseIconSvg,
  ExpandIconSvg,
  SearchIconSvg,
  RefreshIconSvg,
  MinimizeIconSvg,
} from "../assets/Icons";
import Button from "./Button";
import { useEffect, useState } from "react";

const TwitchStreamPlayer = ({
  className,
  streamer,
  setStreamers,
  setTeam1Streamers,
  setTeam2Streamers,
  selectedExpandedStream,
  setSelectedExpandedStream,
}: {
  className?: string;
  streamer: string;
  streamers?: string[];
  setStreamers?: React.Dispatch<React.SetStateAction<string[]>>;
  setTeam1Streamers?: React.Dispatch<React.SetStateAction<string[]>>;
  setTeam2Streamers?: React.Dispatch<React.SetStateAction<string[]>>;
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
    const channelName = streamChannel.includes("/")
      ? streamChannel.split("/")[streamChannel.split("/").length - 1]
      : streamChannel;

    if (setStreamers) {
      setStreamers((prevStreamers) => {
        const newStreamers = [...prevStreamers];
        const streamerIndex = prevStreamers.indexOf(streamer);
        newStreamers[streamerIndex] = channelName;
        return newStreamers;
      });
    } else if (setTeam1Streamers) {
      setTeam1Streamers((prevStreamers) => {
        const streamerIndex = prevStreamers.indexOf(streamer);
        const newTeam1Streamers = [...prevStreamers];
        newTeam1Streamers[streamerIndex] = channelName;
        return newTeam1Streamers;
      });
    } else if (setTeam2Streamers) {
      setTeam2Streamers((prevStreamers) => {
        const streamerIndex = prevStreamers.indexOf(streamer);
        const newTeam2Streamers = [...prevStreamers];
        newTeam2Streamers[streamerIndex] = channelName;
        return newTeam2Streamers;
      });
    }
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

  const handleRemoveStreamPlayer = (streamer: string) => {
    if (setStreamers) {
      setStreamers((prevStreamers) => {
        const newStreamers = [...prevStreamers].filter((s) => s !== streamer);
        return newStreamers;
      });
    } else if (setTeam1Streamers) {
      setTeam1Streamers((prevStreamers) => {
        const newTeam1Streamers = [...prevStreamers].filter(
          (s) => s !== streamer,
        );
        return newTeam1Streamers;
      });
    } else if (setTeam2Streamers) {
      setTeam2Streamers((prevStreamers) => {
        const newTeam2Streamers = [...prevStreamers].filter(
          (s) => s !== streamer,
        );
        return newTeam2Streamers;
      });
    }
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
          className={`flex w-full overflow-hidden bg-[#18181a] duration-500 ease-in-out ${showSearchBar ? "max-h-full" : "max-h-0"}`}
        >
          <div className="m-2 flex w-full items-center justify-between">
            <div className="flex w-full items-center">
              <input
                className="z-10 w-28 rounded-l-[0.375rem] border-1 border-[#d4d4d6] bg-[#18181a] px-[0.625rem] py-[0.3125rem] text-[0.875rem] font-normal text-[#eeeef1] placeholder-[#959595] outline-none hover:border-[#858488] focus:rounded-r-none focus:border focus:border-[#a674f1] focus:ring-2 focus:ring-[#a674f1]"
                type="text"
                value={streamChannel}
                placeholder={`Search`}
                onKeyDown={handleEnterKeyPress}
                onChange={onStreamChannelChange}
              />

              <Button
                className="z-0 rounded-l-none rounded-r-[0.375rem] py-2 leading-normal"
                title="Search Streamer"
                onClick={handleSearchStreamerButton}
              >
                <SearchIconSvg className="h-4 w-4 text-white" />
              </Button>
            </div>

            <div className="flex gap-2">
              <Button title="Refresh " onClick={handleRefreshStreamPlayer}>
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
                <Button title="Expand" onClick={handleExpandStreamPlayer}>
                  <ExpandIconSvg className="h-4 w-4" />
                </Button>
              )}

              {!selectedExpandedStream && (
                <Button
                  className="hover:bg-[#FFAAA8] hover:text-black"
                  onClick={() => {
                    handleRemoveStreamPlayer(streamer);
                  }}
                  title="Close"
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
          src={`https://player.twitch.tv/?channel=${streamer}&parent=${window.location.hostname}`}
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default TwitchStreamPlayer;
