const SummaryCard = ({
  children,
  employerLogo,
  jobTitle,
  startDate,
  endDate,
  className,
  imgSize = "12",
  imageScale = "1",
}) => {
  const cn = className ?? "";
  return (
    <div
      className={`${cn} flex min-h-36 items-start gap-2 rounded-xl bg-gradient-to-r from-[#6b5d4a] px-2 py-3 lg:min-h-40 lg:gap-6 lg:p-4`.trim()}
    >
      <div className="w-fit flex-shrink-0 rounded-full bg-slate-300 p-4">
        <img src={employerLogo} alt="Employer logo" className={`size-${imgSize} scale-[${imageScale}] md:size-16`} />
      </div>

      <div>
        <p className="text-slate-800">
          <strong>{jobTitle}</strong>
        </p>
        <p className="text-slate-800 opacity-80">
          {startDate} - {endDate}
        </p>

        <div className="mt-1 line-clamp-4 text-left leading-4 text-slate-800 md:leading-normal">{children}</div>
      </div>
    </div>
  );
};

export default SummaryCard;
