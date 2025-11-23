import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Clock } from "lucide-react";

interface JobCardProps {
  title: string;
  location: string;
  date: string;
  type: string;
  salary: string;
  skills: string[];
  href?: string;
}

export default function JobCard({
  title,
  location,
  date,
  type,
  salary,
  skills,
  href,
}: JobCardProps) {
  const CardContent = (
    <div className="box-border content-stretch flex flex-col gap-[22px] items-start p-[25px] relative w-full h-full">
      {/* Title */}
      <div className="h-[30px] relative shrink-0 w-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[30px] left-0 not-italic text-[20px] text-nowrap text-white top-0 whitespace-pre">
          {title}
        </p>
      </div>

      {/* Job Details */}
      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
        {/* Location */}
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
          <div className="relative shrink-0 size-[16px]">
            <MapPin className="size-full stroke-[#737373]" strokeWidth={1.33333} />
          </div>
          <div className="relative shrink-0">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic text-[14px] text-neutral-400 whitespace-pre">
              {location}
            </p>
          </div>
        </div>

        {/* Date */}
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
          <div className="relative shrink-0 size-[16px]">
            <Calendar className="size-full stroke-[#737373]" strokeWidth={1.33333} />
          </div>
          <div className="relative shrink-0">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic text-[14px] text-neutral-400 whitespace-pre">
              {date}
            </p>
          </div>
        </div>

        {/* Type */}
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
          <div className="relative shrink-0 size-[16px]">
            <Clock className="size-full stroke-[#737373]" strokeWidth={1.33333} />
          </div>
          <div className="relative shrink-0">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic text-[14px] text-neutral-400 whitespace-pre">
              {type}
            </p>
          </div>
        </div>
      </div>

      {/* Salary */}
      <div className="relative shrink-0 w-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[27px] left-0 not-italic text-[18px] text-nowrap text-white whitespace-pre">
          {salary}
        </p>
      </div>

      {/* Skills Badges */}
      <div className="relative shrink-0 w-full flex gap-[8px] flex-wrap">
        {skills.map((skill) => (
          <Badge
            key={skill}
            variant="outline"
            className="bg-[rgba(250,250,250,0.05)] h-[28px] rounded-[4px] border-[rgba(38,38,38,0.15)] px-[13px] py-0 flex items-center"
          >
            <span className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic text-[12px] text-neutral-400">
              {skill}
            </span>
          </Badge>
        ))}
      </div>

      {/* Apply Button - Static when card is clickable, interactive otherwise */}
      <div className="bg-neutral-50 text-center relative rounded-[8px] shrink-0 w-full h-auto border border-neutral-800 p-[13px] cursor-pointer">
        <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] not-italic text-[#0a0a0b] text-[14px] text-nowrap whitespace-pre">
          APPLY
        </span>
      </div>
    </div>
  );

  // If href is provided, wrap the whole card so clicking anywhere goes to the job page
  if (href) {
    return (
      <Link
        href={href}
        className="block w-full h-full group"
        aria-label={`View ${title} job details`}
      >
        <div className="bg-[#111113] relative rounded-[16px] self-start shrink-0 w-full h-full transition-transform group-hover:scale-[1.02]">
          <div
            aria-hidden="true"
            className="absolute border border-[rgba(38,38,38,0.15)] border-solid inset-0 pointer-events-none rounded-[16px]"
          />
          {CardContent}
        </div>
      </Link>
    );
  }

  // If no href, render as a static card with an interactive apply button
  return (
    <div className="bg-[#111113] relative rounded-[16px] self-start shrink-0 w-full h-full">
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(38,38,38,0.15)] border-solid inset-0 pointer-events-none rounded-[16px]"
      />
      <div className="box-border content-stretch flex flex-col gap-[22px] items-start p-[25px] relative w-full h-full">
        {/* Title */}
        <div className="h-[30px] relative shrink-0 w-full">
          <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[30px] left-0 not-italic text-[20px] text-nowrap text-white top-0 whitespace-pre">
            {title}
          </p>
        </div>

        {/* Job Details */}
        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
          {/* Location */}
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
            <div className="relative shrink-0 size-[16px]">
              <MapPin className="size-full stroke-[#737373]" strokeWidth={1.33333} />
            </div>
            <div className="relative shrink-0">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic text-[14px] text-neutral-400 whitespace-pre">
                {location}
              </p>
            </div>
          </div>

          {/* Date */}
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
            <div className="relative shrink-0 size-[16px]">
              <Calendar className="size-full stroke-[#737373]" strokeWidth={1.33333} />
            </div>
            <div className="relative shrink-0">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic text-[14px] text-neutral-400 whitespace-pre">
                {date}
              </p>
            </div>
          </div>

          {/* Type */}
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
            <div className="relative shrink-0 size-[16px]">
              <Clock className="size-full stroke-[#737373]" strokeWidth={1.33333} />
            </div>
            <div className="relative shrink-0">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic text-[14px] text-neutral-400 whitespace-pre">
                {type}
              </p>
            </div>
          </div>
        </div>

        {/* Salary */}
        <div className="relative shrink-0 w-full">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[27px] left-0 not-italic text-[18px] text-nowrap text-white whitespace-pre">
            {salary}
          </p>
        </div>

        {/* Skills Badges */}
        <div className="relative shrink-0 w-full flex gap-[8px] flex-wrap">
          {skills.map((skill) => (
            <Badge
              key={skill}
              variant="outline"
              className="bg-[rgba(250,250,250,0.05)] h-[28px] rounded-[4px] border-[rgba(38,38,38,0.15)] px-[13px] py-0 flex items-center"
            >
              <span className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic text-[12px] text-neutral-400">
                {skill}
              </span>
            </Badge>
          ))}
        </div>

        {/* Apply Button - Interactive */}
        <Button className="bg-neutral-50 relative rounded-[8px] shrink-0 w-full h-auto border border-neutral-800 hover:bg-neutral-200 p-[13px]">
          <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] not-italic text-[#0a0a0b] text-[14px] text-nowrap whitespace-pre">
            APPLY
          </span>
        </Button>
      </div>
    </div>
  );
}
