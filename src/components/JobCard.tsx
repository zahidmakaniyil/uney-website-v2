import { ArrowRight, MapPin, TimerIcon } from "lucide-react";
import Link from "next/link";

export interface JobCardProps {
    id: number;
    slug: string;
    title: string;
    department: string;
    experience: string;
    location: string;
    type: string;
    description: string;
}

const JobCard = (job: JobCardProps) => {
    return (
        <div className="bg-white p-[20px] rounded-[8px] border border-[#DDDFE3]">
            <div className="pt-[24px] flex flex-col gap-[16px]">
                {/* Department Badge */}
                <div className="h-[40px] bg-[#F1F1F4] opacity-[1.5] rounded-[8px] w-fit px-[16px] flex items-center justify-center text-secondary career-card-department">
                    {job.department}
                </div>

                {/* Job Title */}
                <h3 className="font-josefin text-heading career-card-title">
                    {job.title}
                </h3>

                {/* Job Description */}
                <p className="text-secondary career-card-description">
                    {job.description}
                </p>

                {/* Job Details */}
                <div className="flex gap-[16px]">
                    <div className="flex items-center gap-[8px]">
                        <TimerIcon size={16} />
                        <span className="text-secondary career-card-type">{job.type}</span>
                    </div>
                    <div className="flex items-center gap-[8px]">
                        <MapPin size={16} />
                        <span className="text-secondary career-card-location">
                            {job.location}
                        </span>
                    </div>
                </div>

                {/* Apply Button */}
                <Link
                    href={`/careers/${job.slug}`}
                    className="inline-flex items-center bg-transparent border-1 border-[#2E3038] transition-all duration-300 rounded-[8px] py-[10px] px-[16px] gap-[8px] hover:bg-primary hover:text-white hover:border-primary w-max"
                    aria-label={`Apply for ${job.title} position`}
                >
                    Apply Now
                    <ArrowRight size={16} className="ml-2" />
                </Link>
            </div>
        </div>
    );
};

export default JobCard;
