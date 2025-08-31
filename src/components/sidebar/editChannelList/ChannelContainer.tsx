const ChannelContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="w-fullborder-1 m-4 rounded-sm border-1 border-[#232327] bg-[#18181a] p-4 text-white">
    <div className="flex flex-col">{children}</div>
  </div>
);

export default ChannelContainer;
