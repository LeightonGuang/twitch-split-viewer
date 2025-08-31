import { useEffect, useState } from "react";
import TwitchChat from "./TwitchChat";
import HelpButton from "./HelpButton";
import ChatSelect from "./ChatSelect";
import ShareButton from "./ShareButton";
import SidebarToggle from "./SidebarToggle";
import ChatSelectToggle from "./ChatSelectToggle";
import EditChannelListButton from "./EditChannelListButton";
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
  className?: string;
  streamers: string[];
  setStreamers: React.Dispatch<React.SetStateAction<string[]>>;
  team1Streamers: string[];
  setTeam1Streamers: React.Dispatch<React.SetStateAction<string[]>>;
  team2Streamers: string[];
  setTeam2Streamers: React.Dispatch<React.SetStateAction<string[]>>;
  showSidebar: boolean;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  showHelp: boolean;
  setShowHelp: React.Dispatch<React.SetStateAction<boolean>>;
  selectedStreamerChat: string;
  setSelectedStreamerChat: React.Dispatch<React.SetStateAction<string>>;
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
    <div
      className={`${className} flex h-dvh max-w-[21.25rem] min-w-[3rem] flex-col bg-[#18181a] transition-[width] duration-750 ease-in-out ${
        showSidebar ? "w-[30rem]" : "w-[4.15rem]"
      }`}
    >
      <div
        className={`flex gap-2 ${showSidebar ? "w-full" : "flex-col items-center"} ${showChatSelect ? "px-2 pt-2" : "p-2"}`}
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

      <div
        className={`flex h-min w-full flex-wrap gap-2 px-3 py-2 text-white ${!showSidebar && "w-min flex-col gap-0 p-0"} ${showChatSelect ? "max-h-full" : "hidden"}`}
      >
        {showSidebar && !selectedExpandedStream && (
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
        )}
      </div>

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
    </div>
  );
};

export default Chat;
