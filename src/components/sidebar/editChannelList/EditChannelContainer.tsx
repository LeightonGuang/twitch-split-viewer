import React from "react";
import DropArea from "./DropArea";
import ViewModeToggle from "./ViewModeToggle";
import ChannelContainer from "./ChannelContainer";
import ChannelDraggableBox from "./ChannelDraggableBox";

const EditChannelList = ({
  streamers,
  setStreamers,
  team1Streamers,
  setTeam1Streamers,
  team2Streamers,
  setTeam2Streamers,
  isGridViewMode,
  isTeamViewMode,
}: {
  streamers: string[];
  setStreamers: React.Dispatch<React.SetStateAction<string[]>>;
  team1Streamers: string[];
  setTeam1Streamers: React.Dispatch<React.SetStateAction<string[]>>;
  team2Streamers: string[];
  setTeam2Streamers: React.Dispatch<React.SetStateAction<string[]>>;
  isGridViewMode: boolean;
  isTeamViewMode: boolean;
}) => {
  const hasChannels =
    streamers.length > 0 ||
    team1Streamers.length > 0 ||
    team2Streamers.length > 0;

  return (
    <div className="h-full overflow-y-auto bg-[#0e0e10] dark:[color-scheme:dark]">
      <ViewModeToggle
        streamers={streamers}
        setStreamers={setStreamers}
        team1Streamers={team1Streamers}
        setTeam1Streamers={setTeam1Streamers}
        team2Streamers={team2Streamers}
        setTeam2Streamers={setTeam2Streamers}
        isGridViewMode={isGridViewMode}
        isTeamViewMode={isTeamViewMode}
      />

      {hasChannels ? (
        isGridViewMode ? (
          <>
            <div className="m-4">
              <h2 className="text-lg font-medium text-[#efeff1]">Streamers</h2>
              <p className="text-sm text-[#adadb8]">
                Edit, add, reorder and remove streamers here
              </p>
            </div>

            <ChannelContainer>
              {streamers.length > 1 && (
                <DropArea
                  inside="streamers"
                  dropAreaIndex={0}
                  setStreamers={setStreamers}
                />
              )}
              {streamers.map((streamer, i) => (
                <React.Fragment key={i}>
                  <ChannelDraggableBox
                    from="streamers"
                    channel={streamer}
                    boxIndex={i}
                    setStreamers={setStreamers}
                  />
                  {streamers.length > 1 && (
                    <DropArea
                      inside="streamers"
                      dropAreaIndex={i + 1}
                      setStreamers={setStreamers}
                    />
                  )}
                </React.Fragment>
              ))}
            </ChannelContainer>
          </>
        ) : isTeamViewMode ? (
          <>
            <div className="m-4">
              <h2 className="text-lg font-medium text-[#efeff1]">Team 1</h2>
              <p className="text-sm text-[#adadb8]">
                Edit, add, reorder and remove streamers here
              </p>
            </div>

            <ChannelContainer>
              <DropArea
                inside="team1Streamers"
                dropAreaIndex={0}
                setTeam1Streamers={setTeam1Streamers}
                setTeam2Streamers={setTeam2Streamers}
              />

              {team1Streamers.length > 0 ? (
                team1Streamers.map((streamer, i) => (
                  <React.Fragment key={i}>
                    <ChannelDraggableBox
                      from="team1Streamers"
                      boxIndex={i}
                      channel={streamer}
                      setTeam1Streamers={setTeam1Streamers}
                    />
                    <DropArea
                      inside="team1Streamers"
                      dropAreaIndex={i + 1}
                      setTeam1Streamers={setTeam1Streamers}
                      setTeam2Streamers={setTeam2Streamers}
                    />
                  </React.Fragment>
                ))
              ) : (
                <span className="text-sm text-[#adadb8]">
                  No channels in team 1
                </span>
              )}
            </ChannelContainer>

            <h2 className="m-4 text-lg font-medium text-[#efeff1]">Team 2</h2>

            <ChannelContainer>
              <DropArea
                inside="team2Streamers"
                dropAreaIndex={0}
                setTeam1Streamers={setTeam1Streamers}
                setTeam2Streamers={setTeam2Streamers}
              />

              {team2Streamers.length > 0 ? (
                team2Streamers.map((streamer, i) => (
                  <React.Fragment key={i}>
                    <ChannelDraggableBox
                      from="team2Streamers"
                      channel={streamer}
                      boxIndex={i}
                      setTeam2Streamers={setTeam2Streamers}
                    />
                    <DropArea
                      inside="team2Streamers"
                      dropAreaIndex={i + 1}
                      setTeam1Streamers={setTeam1Streamers}
                      setTeam2Streamers={setTeam2Streamers}
                    />
                  </React.Fragment>
                ))
              ) : (
                <span className="text-sm text-[#adadb8]">
                  No channels in team 2
                </span>
              )}
            </ChannelContainer>
          </>
        ) : null
      ) : (
        <div className="text-white">No channels</div>
      )}
    </div>
  );
};

export default EditChannelList;
