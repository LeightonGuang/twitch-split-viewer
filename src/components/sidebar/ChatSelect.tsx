import Button from "../Button";
import HelpButton from "./HelpButton";
import SidebarToggle from "./SidebarToggle";

import { PlusIconSvg } from "../../assets/Icons";

const ChatSelect = ({
  streamers,
  setStreamers,
  showSidebar,
  setShowSidebar,
  team1Streamers,
  setTeam1Streamers,
  team2Streamers,
  setTeam2Streamers,
  selectedStreamerChat,
  setSelectedStreamerChat,
  setShowHelp,
  isGridViewMode,
  isTeamViewMode,
}: {
  streamers: string[];
  setStreamers: React.Dispatch<React.SetStateAction<string[]>>;
  showSidebar: boolean;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  team1Streamers: string[];
  setTeam1Streamers: React.Dispatch<React.SetStateAction<string[]>>;
  team2Streamers: string[];
  setTeam2Streamers: React.Dispatch<React.SetStateAction<string[]>>;
  selectedStreamerChat: string;
  setSelectedStreamerChat: React.Dispatch<React.SetStateAction<string>>;
  setShowHelp: React.Dispatch<React.SetStateAction<boolean>>;
  isGridViewMode: boolean;
  isTeamViewMode: boolean;
}) =>
  isGridViewMode ? (
    <div className="flex flex-wrap gap-2">
      <SidebarToggle
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
      />

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
  ) : isTeamViewMode ? (
    <div className="flex flex-col gap-2">
      <div className="flex flex-wrap gap-2">
        <SidebarToggle
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
        />
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
              <span className="opacity-40">{"Channel " + (i + 1)}</span>
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
              <span className="opacity-40">{"Channel " + (i + 1)}</span>
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

        <HelpButton onClick={() => setShowHelp(true)} />
      </div>
    </div>
  ) : null;

export default ChatSelect;
