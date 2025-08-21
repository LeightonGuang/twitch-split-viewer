import { useEffect, useState } from "react";
import TwitchStreamPlayer from "./TwitchStreamPlayer";

const StreamsGrid = ({
  className,
  isMobile,
  streamers,
  setStreamers,
  team1Streamers,
  team2Streamers,
  selectedStreamerChat,
  selectedExpandedStream,
  setSelectedExpandedStream,
}: {
  className?: string;
  isMobile: boolean;
  streamers: string[];
  setStreamers: React.Dispatch<React.SetStateAction<string[]>>;
  team1Streamers: string[];
  team2Streamers: string[];
  selectedStreamerChat: string;
  selectedExpandedStream: string;
  setSelectedExpandedStream: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [defaultGridClass, setDefaultGridClass] = useState<string>(
    "grid-cols-1 grid-rows-1",
  );
  const [team1GridClass, setTeam1GridClass] = useState<string>(
    "grid-cols-1 grid-rows-1",
  );
  const [team2GridClass, setTeam2GridClass] = useState<string>(
    "grid-cols-1 grid-rows-1",
  );

  useEffect(() => {
    const handleDefaultStreamersChange = () => {
      if (isMobile) {
        console.log("Mobile view");
        setGridClass("grid-cols-1 grid-rows-3");

        if (streamers.length === 1) {
          setGridClass("grid-cols-1 grid-rows-1");
        } else if (streamers.length === 2) {
          setGridClass("grid-cols-1 grid-rows-2");
        } else if (streamers.length >= 3) {
          setGridClass("grid-cols-1 grid-rows-3");
        }
      } else if (!isMobile) {
        if (streamers.length === 1) {
          setDefaultGridClass("grid-cols-1 grid-rows-1");
        } else if (streamers.length === 2) {
          setDefaultGridClass("grid-cols-2 grid-rows-1");
        } else if (streamers.length === 3 || streamers.length === 4) {
          setDefaultGridClass("grid-cols-2 grid-rows-2");
        } else if (streamers.length === 5 || streamers.length === 6) {
          setDefaultGridClass("grid-cols-3 grid-rows-2");
        } else if (
          streamers.length === 7 ||
          streamers.length === 8 ||
          streamers.length === 9
        ) {
          setDefaultGridClass("grid-cols-3 grid-rows-3");
        } else if (
          streamers.length === 10 ||
          streamers.length === 11 ||
          streamers.length === 12
        ) {
          setDefaultGridClass("grid-cols-4 grid-rows-3");
        }
      }
    };

    handleDefaultStreamersChange();
  }, [streamers]);

  useEffect(() => {
    const handleTeam1StreamerChange = () => {
      if (team1Streamers.length === 1) {
        setTeam1GridClass("grid-cols-1 grid-rows-1");
      } else if (team1Streamers.length === 2) {
        setTeam1GridClass("grid-cols-1 grid-rows-2");
      } else if (team1Streamers.length === 3 || team1Streamers.length === 4) {
        setTeam1GridClass("grid-cols-2 grid-rows-2");
      } else if (team1Streamers.length === 5 || team1Streamers.length === 6) {
        setTeam1GridClass("grid-cols-2 grid-rows-3");
      }
    };

    handleTeam1StreamerChange();
  }, [team1Streamers]);

  useEffect(() => {
    const handleTeam2StreamerChange = () => {
      if (team2Streamers.length === 1) {
        setTeam2GridClass("grid-cols-1 grid-rows-1");
      } else if (team2Streamers.length === 2) {
        setTeam2GridClass("grid-cols-1 grid-rows-2");
      } else if (team2Streamers.length === 3 || team2Streamers.length === 4) {
        setTeam2GridClass("grid-cols-2 grid-rows-2");
      } else if (team2Streamers.length === 5 || team2Streamers.length === 6) {
        setTeam2GridClass("grid-cols-2 grid-rows-3");
      }
    };

    handleTeam2StreamerChange();
  }, [team2Streamers]);

  return (
    <div className={className}>
      {streamers.length > 0 ? (
        <div className={`grid h-dvh w-full ${defaultGridClass}`}>
          {streamers.map((streamer, streamerIndex) => (
            <div
              className={`${selectedStreamerChat === streamer && "bg-twitch-gradient p-[0.15rem]"}`}
              key={streamer}
            >
              <TwitchStreamPlayer
                className="h-full w-full"
                streamerIndex={streamerIndex}
                listType="default"
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
              className={`grid h-dvh w-full ${team1GridClass} bg-green-400 p-1`}
            >
              {team1Streamers.map((streamer) => {
                return (
                  <TwitchStreamPlayer
                    className="h-full w-full"
                    streamerIndex={0}
                    listType="team1"
                    streamer={streamer}
                    streamers={team1Streamers}
                    setStreamers={setStreamers}
                    selectedExpandedStream={selectedExpandedStream}
                    setSelectedExpandedStream={setSelectedExpandedStream}
                  />
                );
              })}
            </div>
          )}

          {team2Streamers.length > 0 && (
            <div
              className={`grid h-dvh w-full ${team2GridClass} bg-red-400 p-1`}
            >
              {team2Streamers.map((streamer) => {
                return (
                  <TwitchStreamPlayer
                    className="h-full w-full"
                    streamerIndex={0}
                    listType="team2"
                    streamer={streamer}
                    streamers={team2Streamers}
                    setStreamers={setStreamers}
                    selectedExpandedStream={selectedExpandedStream}
                    setSelectedExpandedStream={setSelectedExpandedStream}
                  />
                );
              })}
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
