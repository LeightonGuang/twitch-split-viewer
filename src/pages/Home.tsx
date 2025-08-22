import Chat from "../components/Chat";
import { useState, useEffect } from "react";
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
  const [showChat, setShowChat] = useState<boolean>(true);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    if (channelList.length > 0) {
      setStreamers(channelList);
    } else if (team1List.length > 0 || team2List.length > 0) {
      setTeam1Streamers(team1List);
      setTeam2Streamers(team2List);
    } else {
      setStreamers(["twitch"]);
    }
  }, []);

  useEffect(() => {
    if (streamers.length > 0) {
      setSelectedStreamerChat(streamers[0]);
    } else if (team1Streamers.length > 0 || team2Streamers.length > 0) {
      setSelectedStreamerChat(team1Streamers[0]);
    }
  }, [streamers, team1Streamers, team2Streamers]);

  useEffect(() => {
    const checkWidth = () => {
      const isMobile = window.innerWidth <= 768;
      setIsMobile(isMobile);
      setShowChat(!isMobile);
    };

    checkWidth();
    window.addEventListener("resize", checkWidth);

    return () => {
      window.removeEventListener("resize", checkWidth);
    };
  }, []);

  return (
    <section className="h-dvh w-full overflow-y-clip bg-[#0e0e10]">
      <div className="flex">
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
            isMobile={isMobile}
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

        <Chat
          streamers={streamers}
          setStreamers={setStreamers}
          team1Streamers={team1Streamers}
          setTeam1Streamers={setTeam1Streamers}
          team2Streamers={team2Streamers}
          setTeam2Streamers={setTeam2Streamers}
          showChat={showChat}
          setShowChat={setShowChat}
          selectedStreamerChat={selectedStreamerChat}
          setSelectedStreamerChat={setSelectedStreamerChat}
          selectedExpandedStream={selectedExpandedStream}
        />
      </div>
    </section>
  );
};

export default HomePage;
