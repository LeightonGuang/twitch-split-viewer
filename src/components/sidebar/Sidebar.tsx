import TwitchChat from "./TwitchChat";
import ChatSelect from "./ChatSelect";
import { useEffect, useState } from "react";
import HelpButton from "./navButtons/HelpButton";
import ChatSelectToggle from "./ChatSelectToggle";
import ShareButton from "./navButtons/ShareButton";
import SidebarToggle from "./navButtons/SidebarToggle";
import EditChannelListButton from "./navButtons/EditChannelListButton";
import EditChannelContainer from "./editChannelList/EditChannelContainer";

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
  showHelp,
  setShowHelp,
  selectedStreamerChat,
  setSelectedStreamerChat,
  selectedExpandedStream,
}: {
  /**
   * class name for the sidebar
   */
  className?: string;
  /**
   * list of streamers in grid view
   */
  streamers: string[];
  /**
   * function to set the list of streamers in grid view
   */
  setStreamers: React.Dispatch<React.SetStateAction<string[]>>;
  /**
   * list of team 1 streamers
   */
  team1Streamers: string[];
  /**
   * function to set the list of team 1 streamers
   */
  setTeam1Streamers: React.Dispatch<React.SetStateAction<string[]>>;
  /**
   * list of team 2 streamers
   */
  team2Streamers: string[];
  /**
   * function to set the list of team 2 streamers
   */
  setTeam2Streamers: React.Dispatch<React.SetStateAction<string[]>>;
  /**
   * boolean to show/hide the sidebar
   */
  showSidebar: boolean;
  /**
   * function to set the boolean to show/hide the sidebar
   */
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  /**
   * boolean to show/hide the help modal
   */
  showHelp: boolean;
  /**
   * function to set the boolean to show/hide the help modal
   */
  setShowHelp: React.Dispatch<React.SetStateAction<boolean>>;
  /**
   * the streamer currently selected for chat
   */
  selectedStreamerChat: string;
  /**
   * function to set the streamer currently selected for chat
   */
  setSelectedStreamerChat: React.Dispatch<React.SetStateAction<string>>;
  /**
   * the streamer currently selected for the expanded view
   */
  selectedExpandedStream: string;
}) => {
  const [showChatSelect, setShowChatSelect] = useState<boolean>(true);
  const [showEditChannelList, setshowEditChannelList] =
    useState<boolean>(false);

  const isGridViewMode = streamers.length > 0;
  const isTeamViewMode = team1Streamers.length > 0 || team2Streamers.length > 0;

  useEffect(() => {
    if (
      streamers.length === 0 &&
      team1Streamers.length === 0 &&
      team2Streamers.length === 0
    ) {
      setshowEditChannelList(false);
    }
  }, [streamers, team1Streamers, team2Streamers]);

  return (
    <nav
      className={`${className} flex h-dvh max-w-85 min-w-12 flex-col bg-[#18181a] transition-[width] duration-750 ease-in-out ${
        showSidebar ? "w-120" : "w-10"
      }`}
    >
      <div
        className={`flex ${showSidebar ? "w-full" : "flex-col items-center"} ${showChatSelect ? "gap-4 p-4" : "gap-2 p-2"}`}
      >
        <SidebarToggle
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
          setshowEditChannelList={setshowEditChannelList}
        />

        <EditChannelListButton
          showEditChannelList={showEditChannelList}
          setshowEditChannelList={setshowEditChannelList}
          setShowSidebar={setShowSidebar}
        />

        <ShareButton
          streamers={streamers}
          team1Streamers={team1Streamers}
          team2Streamers={team2Streamers}
        />

        <HelpButton showHelp={showHelp} onClick={() => setShowHelp(true)} />
      </div>

      {showSidebar && !selectedExpandedStream && (
        <div
          className={`flex h-min w-full flex-wrap gap-2 px-2 pb-2 text-white ${!showSidebar && "w-min flex-col gap-0 p-0"} ${showChatSelect ? "max-h-full" : "hidden"}`}
        >
          <ChatSelect
            streamers={streamers}
            setStreamers={setStreamers}
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
            team1Streamers={team1Streamers}
            setTeam1Streamers={setTeam1Streamers}
            team2Streamers={team2Streamers}
            setTeam2Streamers={setTeam2Streamers}
            selectedStreamerChat={selectedStreamerChat}
            setSelectedStreamerChat={setSelectedStreamerChat}
            showEditChannelList={showEditChannelList}
            setshowEditChannelList={setshowEditChannelList}
            setShowHelp={setShowHelp}
            isGridViewMode={isGridViewMode}
            isTeamViewMode={isTeamViewMode}
          />
        </div>
      )}

      {/* Show/Hide chat select button */}

      {showSidebar &&
        !selectedExpandedStream &&
        (isGridViewMode || isTeamViewMode) && (
          <ChatSelectToggle
            showChatSelect={showChatSelect}
            setShowChatSelect={setShowChatSelect}
          />
        )}

      {/* Twitch chat embed */}

      {showSidebar &&
        (showEditChannelList ? (
          <EditChannelContainer
            streamers={streamers}
            setStreamers={setStreamers}
            team1Streamers={team1Streamers}
            setTeam1Streamers={setTeam1Streamers}
            team2Streamers={team2Streamers}
            setTeam2Streamers={setTeam2Streamers}
            isGridViewMode={isGridViewMode}
            isTeamViewMode={isTeamViewMode}
          />
        ) : (
          <TwitchChat
            selectedExpandedStream={selectedExpandedStream}
            selectedStreamerChat={selectedStreamerChat}
          />
        ))}
    </nav>
  );
};

export default Chat;
