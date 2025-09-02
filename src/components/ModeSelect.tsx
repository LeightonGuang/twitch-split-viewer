import { GridViewIconSvg, TeamViewIconSvg } from "../assets/Icons";

const ModeSelect = ({
  setStreamers,
  setTeam1Streamers,
  setTeam2Streamers,
}: {
  setStreamers: React.Dispatch<React.SetStateAction<string[]>>;
  setTeam1Streamers: React.Dispatch<React.SetStateAction<string[]>>;
  setTeam2Streamers: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  const ModeSelectButton = ({
    onClick,
    header,
    description,
    icon,
  }: {
    onClick: () => void;
    header: string;
    description: string;
    icon: React.ReactNode;
  }) => (
    <button
      className="flex h-90 w-80 flex-col items-center justify-center rounded-md border-1 border-[#2f2e32] bg-[#18181a] p-4 transition-all duration-300 ease-in-out hover:cursor-pointer hover:shadow-[0_0_15px_5px_rgba(145,71,255,0.75)]"
      onClick={onClick}
    >
      <h3 className="text-lg">{header}</h3>
      <p className="mt-[0.5rem] text-[0.875rem]">{description}</p>
      <span className="mt-8">{icon}</span>
    </button>
  );

  return (
    <div className="flex h-dvh w-full flex-col justify-center bg-[#0e0e10] p-20 text-white">
      <h1 className="text-center text-2xl font-medium">
        Welcome to Twitch Split Viewer
      </h1>

      <p className="mt-2 text-center text-lg">Select a mode to get started</p>

      <div className="mt-8 flex w-full items-center justify-center gap-8">
        <ModeSelectButton
          header="Grid View Mode"
          description="Watch up to 12 Twitch streams simultaneously in grid view mode"
          icon={<GridViewIconSvg className="h-20 w-20" />}
          onClick={() => setStreamers(["twitch"])}
        />

        <ModeSelectButton
          header="Teams View Mode"
          description="Watch up to 12 Twitch streams, 6 streams side by side grouped in teams"
          icon={<TeamViewIconSvg className="h-20 w-20" />}
          onClick={() => {
            setTeam1Streamers(["twitch"]);
            setTeam2Streamers(["twitchrivals"]);
          }}
        />
      </div>
    </div>
  );
};

export default ModeSelect;
