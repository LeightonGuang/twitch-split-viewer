import { useState } from "react";
import TwitchChat from "./TwitchChat";
import HelpButton from "./HelpButton";
import ChatSelect from "./ChatSelect";
import SidebarToggle from "./SidebarToggle";

const Chat = ({
  className,
  streamers,
  setStreamers,
  team1Streamers,
  setTeam1Streamers,
  team2Streamers,
  setTeam2Streamers,
  showSidebar,
  setShowSidebar,
  setShowHelp,
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
  showSidebar: boolean;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  setShowHelp: React.Dispatch<React.SetStateAction<boolean>>;
  selectedStreamerChat: string;
  setSelectedStreamerChat: React.Dispatch<React.SetStateAction<string>>;
  selectedExpandedStream: string;
}) => {
  const [showChatSelect, setShowChatSelect] = useState<boolean>(true);

  const isGridViewMode = streamers.length > 0;
  const isTeamViewMode = team1Streamers.length > 0 || team2Streamers.length > 0;

  const handleShowChatSelectOnClick = () => {
    setShowChatSelect(!showChatSelect);
  };

  return (
    <div
      className={`${className} flex h-dvh max-w-[21.25rem] min-w-[3rem] flex-col bg-[#18181a] transition-[width] duration-750 ease-in-out ${
        showSidebar ? "w-[30rem]" : "w-[3.75rem]"
      }`}
    >
      <div className="flex h-min w-full flex-wrap gap-2 p-2 text-white">
        <SidebarToggle
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
        />

        <div
          // TODO: Add animation
          className={`${showChatSelect ? "max-h-full" : "hidden"}`}
        >
          {showSidebar && !selectedExpandedStream && (
            <ChatSelect
              streamers={streamers}
              setStreamers={setStreamers}
              team1Streamers={team1Streamers}
              setTeam1Streamers={setTeam1Streamers}
              team2Streamers={team2Streamers}
              setTeam2Streamers={setTeam2Streamers}
              selectedStreamerChat={selectedStreamerChat}
              setSelectedStreamerChat={setSelectedStreamerChat}
              isGridViewMode={isGridViewMode}
              isTeamViewMode={isTeamViewMode}
            />
          )}
        </div>

        <HelpButton onClick={() => setShowHelp(true)} />
      </div>

      {/* Show/Hide chat select button */}

      {showSidebar &&
        !selectedExpandedStream &&
        (isGridViewMode || isTeamViewMode) && (
          <div className="flex justify-center">
            <button
              className="flex w-full justify-center p-2 hover:cursor-pointer hover:bg-[#36353b]"
              title={showChatSelect ? "Hide Chat Select" : "Show Chat Select"}
              onClick={handleShowChatSelectOnClick}
            >
              <div className="h-[0.3125rem] w-[2.5rem] rounded-full bg-[#27262c]" />
            </button>
          </div>
        )}

      {/* Twitch chat embed */}

      {showSidebar && (
        <TwitchChat
          selectedExpandedStream={selectedExpandedStream}
          selectedStreamerChat={selectedStreamerChat}
        />
      )}
    </div>
  );
};

export default Chat;
