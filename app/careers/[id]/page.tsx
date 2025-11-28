import { notFound } from "next/navigation";
import { getCareersPageData, getJobBySlug } from "@/lib/api/careers";
import JobDetailClient from "./JobDetailClient";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function JobDetailPage({ params }: PageProps) {
  // Await params to unwrap the Promise (Next.js 15+)
  const { id } = await params;

  // Fetch the job by slug
  const job = await getJobBySlug(id);
  
  // If job not found, show 404
  if (!job) {
    notFound();
  }

  return <JobDetailClient job={job} />;
}

// Generate static params for all jobs at build time
export async function generateStaticParams() {
  const careersData = await getCareersPageData();
  
  if (!careersData || !careersData.jobs) {
    return [];
  }

  return careersData.jobs.map((job) => ({
    id: job?.id,
  }));
}
