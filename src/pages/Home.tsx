import { useState, useEffect } from "react";

import Help from "../components/Help";
import Sidebar from "../components/sidebar/Sidebar";
import ModeSelect from "../components/ModeSelect";
import StreamsGrid from "../components/StreamsGrid";
import TwitchStreamPlayer from "../components/TwitchStreamPlayer";

const HomePage = ({
  channelList,
  team1List,
  team2List,
}: {
  channelList: string[];
  team1List: string[];
  team2List: string[];
}) => {
  const [streamers, setStreamers] = useState<string[]>([]);
  const [team1Streamers, setTeam1Streamers] = useState<string[]>([]);
  const [team2Streamers, setTeam2Streamers] = useState<string[]>([]);
  const [selectedStreamerChat, setSelectedStreamerChat] = useState<string>("");
  const [selectedExpandedStream, setSelectedExpandedStream] =
    useState<string>("");
  const [showSidebar, setshowSidebar] = useState<boolean>(true);
  const [showHelp, setShowHelp] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const hasParameter =
    streamers.length > 0 ||
    team1Streamers.length > 0 ||
    team2Streamers.length > 0;

  useEffect(() => {
    if (channelList.length > 0) {
      setStreamers(channelList);
    } else if (team1List.length > 0 || team2List.length > 0) {
      setTeam1Streamers(team1List);
      setTeam2Streamers(team2List);
    }
  }, []);

  useEffect(() => {
    if (streamers.length > 0) {
      setSelectedStreamerChat(streamers[0]);
    } else if (team1Streamers.length > 0) {
      setSelectedStreamerChat(team1Streamers[0]);
    } else if (team2Streamers.length > 0) {
      setSelectedStreamerChat(team2Streamers[0]);
    }
  }, [streamers, team1Streamers, team2Streamers]);

  useEffect(() => {
    const checkWidth = () => {
      const isMobile = window.innerWidth <= 768;
      setIsMobile(isMobile);
      setshowSidebar(!isMobile);
    };

    checkWidth();
    window.addEventListener("resize", checkWidth);

    return () => {
      window.removeEventListener("resize", checkWidth);
    };
  }, []);

  return (
    <section
      className="h-dvh w-full overflow-y-clip bg-[#0e0e10]"
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          setShowHelp(false);
        }
      }}
    >
      <div className="flex">
        {hasParameter ? (
          <>
            {selectedExpandedStream ? (
              <TwitchStreamPlayer
                className="h-dvh w-full"
                streamer={selectedExpandedStream}
                streamers={streamers}
                setStreamers={setStreamers}
                selectedExpandedStream={selectedExpandedStream}
                setSelectedExpandedStream={setSelectedExpandedStream}
              />
            ) : (
              <StreamsGrid
                className="max-h-dvh w-full"
                showSidebar={showSidebar}
                streamers={streamers}
                setStreamers={setStreamers}
                team1Streamers={team1Streamers}
                setTeam1Streamers={setTeam1Streamers}
                team2Streamers={team2Streamers}
                setTeam2Streamers={setTeam2Streamers}
                selectedStreamerChat={selectedStreamerChat}
                selectedExpandedStream={selectedExpandedStream}
                setSelectedExpandedStream={setSelectedExpandedStream}
              />
            )}
          </>
        ) : (
          <ModeSelect
            setStreamers={setStreamers}
            setTeam1Streamers={setTeam1Streamers}
            setTeam2Streamers={setTeam2Streamers}
          />
        )}

        <Sidebar
          streamers={streamers}
          setStreamers={setStreamers}
          team1Streamers={team1Streamers}
          setTeam1Streamers={setTeam1Streamers}
          team2Streamers={team2Streamers}
          setTeam2Streamers={setTeam2Streamers}
          showSidebar={showSidebar}
          setShowSidebar={setshowSidebar}
          showHelp={showHelp}
          setShowHelp={setShowHelp}
          selectedStreamerChat={selectedStreamerChat}
          setSelectedStreamerChat={setSelectedStreamerChat}
          selectedExpandedStream={selectedExpandedStream}
        />
      </div>

      {showHelp && <Help setShowHelp={setShowHelp} />}
    </section>
  );
};

export default HomePage;
