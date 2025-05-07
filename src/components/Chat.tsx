import Button from "./Button";
import { PlusIconSvg, MinimizeSidebarSvg } from "../assets/Icons";

const Chat = ({
  className,
  streamers,
  setStreamers,
  setIsHideChat,
  selectedStreamer,
  setSelectedStreamer,
  selectedExpandedStream,
}: {
  className?: string;
  streamers: string[];
  setStreamers: React.Dispatch<React.SetStateAction<string[]>>;
  setIsHideChat: React.Dispatch<React.SetStateAction<boolean>>;
  selectedStreamer: string;
  setSelectedStreamer: (streamer: string) => void;
  selectedExpandedStream: string;
}) => {
  return (
    <div className={className}>
      {!selectedExpandedStream && (
        <div className="flex h-min w-[18.75rem] flex-wrap gap-2 p-2! text-white">
          <Button
            onClick={() => {
              setIsHideChat(true);
            }}
            title="Minimize Chat"
          >
            <MinimizeSidebarSvg className="h-4 w-4" />
          </Button>

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

          {streamers.map(
            (streamer) =>
              streamer && (
                <button
                  key={streamer}
                  className={`cursor-pointer rounded-sm bg-[#2a292e] px-2! py-[0.3125rem]! text-[0.8125rem] font-semibold text-white hover:bg-[#302f35] ${selectedStreamer === streamer && "bg-[#9147ff] hover:bg-[#772CE8]"}`}
                  title={streamer + "'s chat"}
                  onClick={() => setSelectedStreamer(streamer)}
                >
                  {streamer}
                </button>
              ),
          )}
        </div>
      )}

      <iframe
        className="h-full"
        src={`https://www.twitch.tv/embed/${selectedExpandedStream || selectedStreamer}/chat?darkpopout&parent=${window.location.hostname}`}
      />
    </div>
  );
};

export default Chat;
