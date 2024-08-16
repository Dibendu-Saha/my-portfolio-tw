const SummaryCard = ({ employerLogo, jobTitle, startDate, endDate, children }) => {
  return (
    <div className="flex min-h-40 items-start gap-2 rounded-xl bg-gradient-to-r from-[#6b5d4a] p-2">
      <div className="w-fit flex-shrink-0 rounded-full bg-slate-300 p-4">
        <img src={employerLogo} alt="" className="size-12 md:size-16" />
      </div>

      <div>
        <p className="text-slate-800">
          <strong>{jobTitle}</strong>
        </p>
        <p className="text-slate-900">
          {startDate} - {endDate}
        </p>

        {children}
      </div>
    </div>
  );
};

export default SummaryCard;
