import {
  PlusIconSvg,
  ExpandSidebarSvg,
  MinimizeSidebarSvg,
} from "../assets/Icons";
import Button from "./Button";

const Chat = ({
  className,
  streamers,
  setStreamers,
  showChat,
  setShowChat,
  selectedStreamer,
  setSelectedStreamer,
  selectedExpandedStream,
}: {
  className?: string;
  streamers: string[];
  setStreamers: React.Dispatch<React.SetStateAction<string[]>>;
  showChat: boolean;
  setShowChat: React.Dispatch<React.SetStateAction<boolean>>;
  selectedStreamer: string;
  setSelectedStreamer: (streamer: string) => void;
  selectedExpandedStream: string;
}) => {
  return (
    <div
      className={`${className} flex h-dvh max-w-[21.25rem] min-w-[3rem] flex-col bg-[#18181a] transition-[width] duration-750 ease-in-out ${
        showChat ? "w-[30rem]" : "w-[3rem]"
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

        {showChat && !selectedExpandedStream && (
          <>
            {streamers.map((streamer, i) => (
              <button
                key={streamer}
                className={`rounded-sm bg-[#2a292e] px-2 py-[0.3125rem] text-[0.8125rem] font-semibold ${streamer && "cursor-pointer hover:bg-[#302f35]"} ${selectedStreamer === streamer && "bg-[#9147ff] hover:bg-[#772CE8]"}`}
                disabled={!streamer}
                title={streamer && streamer + "'s chat"}
                onClick={() => setSelectedStreamer(streamer)}
              >
                {streamer ? (
                  <span className="text-white">{streamer}</span>
                ) : (
                  <span className="opacity-40">{"Channel " + (i + 1)}</span>
                )}
              </button>
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
          </>
        )}
      </div>

      {showChat && (
        <iframe
          className="h-full w-full"
          src={`https://www.twitch.tv/embed/${selectedExpandedStream || selectedStreamer}/chat?darkpopout&parent=${window.location.hostname}`}
        />
      )}
    </div>
  );
};

export default Chat;
