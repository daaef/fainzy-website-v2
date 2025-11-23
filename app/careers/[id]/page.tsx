import { notFound } from "next/navigation";
import { jobs } from "../jobs";
import JobDetailClient from "./JobDetailClient";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductDetailPage({ params }: PageProps) {
  // Await params to unwrap the Promise (Next.js 15+)
  const { id } = await params;

  // Find the job by ID
  const job = jobs.find((j) => j.id === id);
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
