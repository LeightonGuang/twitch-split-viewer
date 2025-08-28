const TwitchChat = ({
  selectedExpandedStream,
  selectedStreamerChat,
}: {
  selectedExpandedStream: string;
  selectedStreamerChat: string;
}) => (
  <iframe
    className="h-full w-full"
    src={`https://www.twitch.tv/embed/${selectedExpandedStream || selectedStreamerChat || "twitch"}/chat?darkpopout&parent=${window.location.hostname}`}
  />
);
export default TwitchChat;
