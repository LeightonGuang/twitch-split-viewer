const ModeSelect = () => {
  return (
    <div className="flex h-dvh w-full flex-col justify-center bg-[#0e0e10] p-20 text-white">
      <h1 className="text-center text-2xl font-medium">
        Welcome to Twitch Split Viewer
      </h1>

      <p className="mt-2 text-center text-lg">Select a mode to get started</p>

      <div className="mt-8 flex w-full items-center justify-center gap-8">
        <ModeSelectButton
          href="/?channels=twitch"
          header="Grid View Mode"
          description="Watch up to 12 Twitch streams simultaneously in grid view mode"
        >
          <div className="grid grid-cols-2 grid-rows-2 gap-1">
            <div className="aspect-video w-8 rounded-xs bg-zinc-600" />
            <div className="aspect-video w-8 rounded-xs bg-zinc-600" />
            <div className="aspect-video w-8 rounded-xs bg-zinc-600" />
            <div className="aspect-video w-8 rounded-xs bg-zinc-600" />
          </div>
        </ModeSelectButton>

        <ModeSelectButton
          href="/?team1=twitch&team2=twitchrivals"
          header="Teams View Mode"
          description="Watch up to 12 Twitch streams, 6 streams side by side grouped in teams"
        >
          <div className="grid grid-cols-2">
            <div className="flex w-max flex-col bg-green-400 p-0.5">
              <div className="aspect-video w-8 bg-zinc-600" />
              <div className="aspect-video w-8 bg-zinc-600" />
            </div>
            <div className="flex w-max flex-col bg-red-400 p-0.5">
              <div className="aspect-video w-8 bg-zinc-600" />
              <div className="aspect-video w-8 bg-zinc-600" />
            </div>
          </div>
        </ModeSelectButton>
      </div>
    </div>
  );
};

export default ModeSelect;

const ModeSelectButton = ({
  href,
  header,
  description,
  children,
}: {
  href: string;
  header: string;
  description: string;
  children?: React.ReactNode;
}) => (
  <a
    className="flex h-90 w-80 flex-col items-center justify-center rounded-md border-1 border-[#2f2e32] bg-[#18181a] p-4 transition-all duration-300 ease-in-out hover:cursor-pointer hover:shadow-[0_0_15px_5px_rgba(145,71,255,0.75)]"
    href={href}
  >
    <h3 className="text-lg">{header}</h3>
    <p className="mt-[0.5rem] text-[0.875rem]">{description}</p>
    <span className="mt-8">{children}</span>
  </a>
);
