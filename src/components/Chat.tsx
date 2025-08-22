import {
  PlusIconSvg,
  ExpandSidebarSvg,
  MinimizeSidebarSvg,
} from "../assets/Icons";
import Button from "./Button";
import { useState } from "react";

const Chat = ({
  className,
  streamers,
  setStreamers,
  team1Streamers,
  setTeam1Streamers,
  team2Streamers,
  setTeam2Streamers,
  showChat,
  setShowChat,
  selectedStreamerChat,
  setSelectedStreamerChat,
  selectedExpandedStream,
}: {
  className?: string;
  streamers: string[];
  setStreamers: React.Dispatch<React.SetStateAction<string[]>>;
  team1Streamers: string[];
  setTeam1Streamers: React.Dispatch<React.SetStateAction<string[]>>;
  team2Streamers: string[];
  setTeam2Streamers: React.Dispatch<React.SetStateAction<string[]>>;
  showChat: boolean;
  setShowChat: React.Dispatch<React.SetStateAction<boolean>>;
  selectedStreamerChat: string;
  setSelectedStreamerChat: (streamer: string) => void;
  selectedExpandedStream: string;
}) => {
  const [showChatSelect, setShowChatSelect] = useState<boolean>(true);

  const handleShowChatSelectOnClick = () => {
    setShowChatSelect(!showChatSelect);
  };

  return (
    <div
      className={`${className} flex h-dvh max-w-[21.25rem] min-w-[3rem] flex-col bg-[#18181a] transition-[width] duration-750 ease-in-out ${
        showChat ? "w-[30rem]" : "w-[3.75rem]"
      }`}
    >
      <div className="flex h-min w-full flex-wrap gap-2 p-2 text-white">
        {showChat ? (
          <Button
            onClick={() => {
              setShowChat(false);
            }}
            title="Minimize Chat"
          >
            <MinimizeSidebarSvg className="h-4 w-4" />
          </Button>
        ) : (
          <Button
            className="w-min"
            onClick={() => setShowChat(true)}
            title="Expand Chat"
          >
            <ExpandSidebarSvg className="h-4 w-4" />
          </Button>
        )}

        <div
          // TODO: Add animation
          className={`${showChatSelect ? "max-h-full" : "hidden"}`}
        >
          {showChat &&
            !selectedExpandedStream &&
            (streamers.length > 0 ? (
              <div className="flex gap-2">
                {streamers.map((streamer, i) => (
                  <Button
                    key={streamer}
                    className={`bg-[#2a292e] font-semibold ${streamer && "cursor-pointer hover:bg-[#302f35]"} ${selectedStreamerChat === streamer && "bg-[#9147ff] hover:bg-[#772CE8]"}`}
                    disabled={!streamer}
                    title={streamer && streamer + "'s chat"}
                    onClick={() => setSelectedStreamerChat(streamer)}
                  >
                    {streamer ? (
                      <span className="text-white">{streamer}</span>
                    ) : (
                      <span className="opacity-40">{"Channel " + (i + 1)}</span>
                    )}
                  </Button>
                ))}

                {streamers.length < 12 && (
                  <Button
                    onClick={() => {
                      if (streamers.length < 12) {
                        setStreamers([...streamers, ""]);
                      }
                    }}
                    title="Add Channel"
                  >
                    <div className="flex items-center gap-1">
                      <PlusIconSvg className="h-4 w-4" />
                    </div>
                  </Button>
                )}
              </div>
            ) : team1Streamers.length > 0 || team2Streamers.length > 0 ? (
              <div className="flex flex-col gap-2">
                <div className="flex flex-wrap gap-2">
                  {team1Streamers.map((streamer, i) => (
                    <Button
                      key={streamer}
                      className={`bg-[#2a292e] font-semibold ${streamer && "cursor-pointer hover:bg-green-300"} ${selectedStreamerChat === streamer && "bg-green-400 hover:bg-green-300"}`}
                      disabled={!streamer}
                      title={streamer && streamer + "'s chat"}
                      onClick={() => setSelectedStreamerChat(streamer)}
                    >
                      {streamer ? (
                        <span className="text-white">{streamer}</span>
                      ) : (
                        <span className="opacity-40">
                          {"Channel " + (i + 1)}
                        </span>
                      )}
                    </Button>
                  ))}

                  {team1Streamers.length < 6 && (
                    <Button
                      onClick={() => {
                        if (team1Streamers.length < 6) {
                          setTeam1Streamers([...team1Streamers, ""]);
                        }
                      }}
                      title="Add Channel"
                    >
                      <div className="flex items-center gap-1">
                        <PlusIconSvg className="h-4 w-4" />
                      </div>
                    </Button>
                  )}
                </div>

                <div className="flex flex-wrap gap-2">
                  {team2Streamers.map((streamer, i) => (
                    <Button
                      key={streamer}
                      className={`bg-[#2a292e] font-semibold ${streamer && "cursor-pointer hover:bg-red-300"} ${selectedStreamerChat === streamer && "bg-red-400 hover:bg-red-300"}`}
                      disabled={!streamer}
                      title={streamer && streamer + "'s chat"}
                      onClick={() => setSelectedStreamerChat(streamer)}
                    >
                      {streamer ? (
                        <span className="text-white">{streamer}</span>
                      ) : (
                        <span className="opacity-40">
                          {"Channel " + (i + 1)}
                        </span>
                      )}
                    </Button>
                  ))}

                  {team2Streamers.length < 6 && (
                    <Button
                      onClick={() => {
                        if (team2Streamers.length < 6) {
                          setTeam2Streamers([...team2Streamers, ""]);
                        }
                      }}
                      title="Add Channel"
                    >
                      <div className="flex items-center gap-1">
                        <PlusIconSvg className="h-4 w-4" />
                      </div>
                    </Button>
                  )}
                </div>
              </div>
            ) : (
              "cast"
            ))}
        </div>
      </div>

      {showChat &&
        !selectedExpandedStream &&
        (team1Streamers.length > 0 || team2Streamers.length > 0) && (
          <div className="flex justify-center">
            <button
              className="mx-2 my-1 flex w-full flex-col rounded-full bg-[#302f35] text-sm text-gray-400 hover:cursor-pointer hover:text-gray-300"
              onClick={handleShowChatSelectOnClick}
            >
              <span>
                {showChatSelect ? "Hide Chat Select" : "Show Chat Select"}
              </span>
            </button>
          </div>
        )}

      {showChat && (
        <iframe
          className="h-full w-full"
          src={`https://www.twitch.tv/embed/${selectedExpandedStream || selectedStreamerChat}/chat?darkpopout&parent=${window.location.hostname}`}
        />
      )}
    </div>
  );
};

export default Chat;
