const Chat = ({
  className,
  streamers,
  selectedStreamer,
  setSelectedStreamer,
  selectedExpandedStream,
}: {
  className?: string;
  streamers: string[];
  selectedStreamer: string;
  setSelectedStreamer: (streamer: string) => void;
  selectedExpandedStream: string;
}) => {
  return (
    <div className={`${className}`}>
      {!selectedExpandedStream && (
        <div className="flex h-min w-full flex-wrap gap-2 p-2! text-white">
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
