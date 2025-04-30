import { useEffect, useState } from "react";

const TwitchStreamPlayer = ({
  className,
  streamerIndex,
  streamer,
  setStreamers,
}: {
  className?: string;
  streamerIndex: number;
  streamer: string;
  setStreamers: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  const [streamChannel, setStreamChannel] = useState<string>("");

  const onStreamChannelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStreamChannel(e.target.value);
  };

  const handleSearchStreamerButton = () => {
    setStreamers((prevStreamers) => {
      const newStreamers = [...prevStreamers];
      newStreamers[streamerIndex] = streamChannel;
      return newStreamers;
    });
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
    <div className={className}>
      <div className="flex h-full w-full flex-col">
        <div className="m-2! flex items-center justify-between">
          <div className="flex w-full">
            <input
              className="w-48 rounded-l-[0.375rem] border-1 border-[#49494c] bg-[#18181a] px-[0.625rem]! py-[0.3125rem]! text-[0.875rem] font-normal text-[#eeeef1] placeholder-[#959595]"
              type="text"
              value={streamChannel}
              placeholder="Channel Name"
              onChange={onStreamChannelChange}
            />

            <button
              className="cursor-pointer rounded-r-[0.375rem] bg-[#2a292e] px-2! py-[0.3125rem]! text-[0.8125rem] font-semibold text-white hover:bg-[#302f35]"
              onClick={handleSearchStreamerButton}
            >
              {"Search"}
            </button>
          </div>

          <button
            className="cursor-pointer rounded-sm bg-[#2a292e] px-2! py-[0.3125rem]! text-[0.8125rem] font-semibold text-white hover:bg-[#302f35]"
            onClick={handleRemoveStreamPlayer}
          >
            X
          </button>
        </div>

        <iframe
          className="h-full w-full"
          src={`https://player.twitch.tv/?channel=${streamer}&parent=localhost${streamerIndex === 0 ? "&muted=false" : "&muted=true"}`}
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default TwitchStreamPlayer;
