import { ShareIconSvg } from "../../assets/Icons";

const ShareButton = ({
  streamers,
  team1Streamers,
  team2Streamers,
}: {
  streamers: string[];
  team1Streamers: string[];
  team2Streamers: string[];
}) => {
  return (
    <button
      className="p-2 leading-none text-gray-500 hover:cursor-pointer hover:text-gray-400 active:scale-95"
      title="Share Channel List & View"
      onClick={() => {
        console.log("share clicked");
        const url = "https://twitchsplitviewer.pages.dev/";

        const hasStreamers = streamers.length > 0;
        const hasTeam1Channels = team1Streamers.length > 0;
        const hasTeam2Channels = team2Streamers.length > 0;

        if (hasStreamers) {
          const streamersParam = streamers.join(",");

          const fullUrl = url + "?channels=" + streamersParam;
          navigator.clipboard.writeText(fullUrl);
          alert(`'${fullUrl}' copied to clipboard.`);
        } else if (hasTeam1Channels || hasTeam2Channels) {
          const team1StreamersParam = team1Streamers.join(",");
          const team2StreamersParam = team2Streamers.join(",");

          const fullUrl = `${url}?${hasTeam1Channels ? "team1=" + team1StreamersParam : ""}${hasTeam2Channels ? (hasTeam1Channels ? "&team2=" : "team2=") + team2StreamersParam : ""}`;
          navigator.clipboard.writeText(fullUrl);
          alert(`'${fullUrl}' copied to clipboard.`);
        }
      }}
    >
      <ShareIconSvg className="h-4 w-4" />
    </button>
  );
};

export default ShareButton;
