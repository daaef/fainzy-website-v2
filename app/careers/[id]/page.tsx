import { notFound } from "next/navigation";
import { jobs } from "../jobs";
import JobDetailClient from "./JobDetailClient";

interface PageProps {
    params: {
        id: string;
    };
}

export default function ProductDetailPage({ params }: PageProps) {
    // Find the job by ID
    const job = jobs.find((j) => j.id === params.id);

    // If job not found, show 404
    if (!job) {
        notFound();
    }

    return <JobDetailClient job={job} />;
}

// Generate static params for all jobs at build time
export async function generateStaticParams() {
    return jobs.map((job) => ({
        id: job.id,
    }));
}
