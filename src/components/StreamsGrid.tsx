import TwitchStreamPlayer from "./TwitchStreamPlayer";

const StreamsGrid = ({
  className,
  showSidebar,
  streamers,
  setStreamers,
  team1Streamers,
  setTeam1Streamers,
  team2Streamers,
  setTeam2Streamers,
  selectedStreamerChat,
  selectedExpandedStream,
  setSelectedExpandedStream,
}: {
  className?: string;
  showSidebar: boolean;
  streamers: string[];
  setStreamers: React.Dispatch<React.SetStateAction<string[]>>;
  team1Streamers: string[];
  setTeam1Streamers: React.Dispatch<React.SetStateAction<string[]>>;
  team2Streamers: string[];
  setTeam2Streamers: React.Dispatch<React.SetStateAction<string[]>>;
  selectedStreamerChat: string;
  selectedExpandedStream: string;
  setSelectedExpandedStream: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className={className}>
      {streamers.length > 0 ? (
        <div
          className={`grid h-dvh w-full ${getGridClass(streamers.length, false)}`}
        >
          {streamers.map((streamer, streamerIndex) => (
            <div
              className={`${selectedStreamerChat === streamer && showSidebar && "bg-twitch-gradient p-[0.15rem]"} ${streamerIndex === 0 && (streamers.length === 3 || streamers.length === 5 || streamers.length === 8) ? "col-span-2" : "col-span-1"}`}
              key={streamer}
            >
              <TwitchStreamPlayer
                className="h-full w-full"
                streamer={streamer}
                streamers={streamers}
                setStreamers={setStreamers}
                selectedExpandedStream={selectedExpandedStream}
                setSelectedExpandedStream={setSelectedExpandedStream}
              />
            </div>
          ))}
        </div>
      ) : team1Streamers.length > 0 || team2Streamers.length > 0 ? (
        <div className="flex h-full w-full">
          {team1Streamers.length > 0 && (
            <div
              className={`grid h-dvh w-full ${getGridClass(team1Streamers.length, true)} bg-green-400 p-1`}
            >
              {team1Streamers.map((streamer, streamerIndex) => (
                <TwitchStreamPlayer
                  key={streamer}
                  className={`h-full w-full ${streamerIndex === 0 && (team1Streamers.length === 3 || team1Streamers.length === 5) ? "col-span-2" : ""}`}
                  streamer={streamer}
                  setTeam1Streamers={setTeam1Streamers}
                  selectedExpandedStream={selectedExpandedStream}
                  setSelectedExpandedStream={setSelectedExpandedStream}
                />
              ))}
            </div>
          )}

          {team2Streamers.length > 0 && (
            <div
              className={`grid h-dvh w-full ${getGridClass(team2Streamers.length, true)} bg-red-400 p-1`}
            >
              {team2Streamers.map((streamer, streamerIndex) => (
                <TwitchStreamPlayer
                  key={streamer}
                  className={`h-full w-full ${streamerIndex === 0 && (team2Streamers.length === 3 || team2Streamers.length === 5) ? "col-span-2" : ""}`}
                  streamer={streamer}
                  setTeam2Streamers={setTeam2Streamers}
                  selectedExpandedStream={selectedExpandedStream}
                  setSelectedExpandedStream={setSelectedExpandedStream}
                />
              ))}
            </div>
          )}
        </div>
      ) : (
        "other"
      )}
    </div>
  );
};

export default StreamsGrid;

const getGridClass = (count: number, isTeamView: boolean) => {
  if (count <= 1) return "grid-cols-1 grid-rows-1";
  if (count === 2) return "grid-cols-2 grid-rows-1";
  if (count === 3 || count === 4) return "grid-cols-2 grid-rows-2";
  if (!isTeamView) {
    if (count === 5 || count === 6) return "grid-cols-3 grid-rows-2";
  }
  if (isTeamView) {
    if (count === 5 || count === 6) return "grid-cols-2 grid-rows-3";
  }
  if (count === 7 || count === 8 || count === 9)
    return "grid-cols-3 grid-rows-3";
  if (count === 10 || count === 11 || count === 12)
    return "grid-cols-4 grid-rows-3";
};
