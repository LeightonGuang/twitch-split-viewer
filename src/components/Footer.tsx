const Footer = ({ className }: { className?: string }) => {
  return (
    <div className={`flex justify-end bg-black p-2 ${className}`}>
      <span className="text-[0.875rem] text-white opacity-30">
        Watch multiple Twitch streams side by side. Compatible with Stream Track
        Chrome extension or use standalone.
      </span>
    </div>
  );
};

export default Footer;
