type SummaryCardComponentProps = {
  children: JSX.Element;
  employerLogo: string;
  jobTitle: string;
  startDate?: string;
  endDate?: string;
  className?: string;
  logoClassName?: string;
  actionable?: boolean;
  imgSize?: string;
  imageScale?: string;
};

const SummaryCard: React.FC<SummaryCardComponentProps> = ({
  children,
  employerLogo,
  jobTitle,
  startDate,
  endDate,
  className,
  logoClassName,
  actionable = false,
  imgSize = "12",
  imageScale = "1",
}) => {
  const cn = className ?? "";
  const logoClass = logoClassName ?? "";

  return (
    <div
      className={`${cn} flex min-h-36 items-start gap-2 rounded-xl border border-[#ad9676] bg-[#e1dfdb] px-2 py-3 shadow-lg transition-all duration-200 ${actionable && "hover:scale-[1.02] hover:cursor-pointer hover:shadow-xl"} lg:h-44 lg:min-h-48 lg:gap-6 lg:p-4`.trim()}
    >
      <div className={`w-fit flex-shrink-0 rounded-lg bg-slate-300 p-4`}>
        <img src={employerLogo} alt="Employer logo" className={`${logoClass} size-${imgSize} scale-[${imageScale}] md:size-16`.trim()} />
      </div>

      <div>
        <p className="text-[#615442]">
          <strong>{jobTitle}</strong>
        </p>
        <p className={`text-left text-[#615442] opacity-70`}>{startDate && endDate ? `${startDate} - ${endDate}` : ""}</p>

        <div className={`mt-1 line-clamp-4 text-left leading-4 text-[#615442] md:leading-normal`}>{children}</div>
      </div>
    </div>
  );
};

export default SummaryCard;
