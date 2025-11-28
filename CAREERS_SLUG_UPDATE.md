# Careers Dynamic Route - Updated to Use Slugs

## Date: 2025-11-28

## Summary

Updated the careers dynamic route (`/careers/[id]`) to use URL-friendly slugs instead of IDs, matching the pattern used in the blog (`/blog/[slug]`).

## Problem

The careers dynamic route was using job IDs in the URL:
- `/careers/cm3kj9nw6000014lrmjw0lbr1` (hard to read, not SEO-friendly)
- Inconsistent with blog which uses slugs: `/blog/5-ways-robots-transform-hospitality`

## Solution

### 1. Updated Job Type
- **File**: `lib/api/types.ts`
- Added `slug: string` field to `Job` interface

### 2. Created Job Fetch Function
- **File**: `lib/api/careers.ts`
- Added `getJobBySlug(slug: string)` function
- Fetches careers data and finds job by slug
- Returns `Job | null` with proper error handling

### 3. Updated Dynamic Route
- **File**: `app/careers/[id]/page.tsx`
- Now uses `getJobBySlug(id)` instead of finding by ID
- `generateStaticParams()` returns `job.slug` instead of `job.id`
- Cleaner code, fewer lines

### 4. Updated Job Links
- **File**: `app/careers/JobsGrid.tsx`
- Changed `href={/careers/${job.id}}` to `href={/careers/${job.slug}}`
- Changed `key={job.id || index}` to `key={job.slug || index}`

## Before vs After

### Before (Using IDs)
```typescript
// URL
/careers/cm3kj9nw6000014lrmjw0lbr1

// Code
const job = careersData.jobs.find((j) => j.id === id);
href={`/careers/${job.id}`}
```

### After (Using Slugs)
```typescript
// URL
/careers/senior-software-engineer

// Code
const job = await getJobBySlug(id);
href={`/careers/${job.slug}`}
```

## Benefits

1. **SEO-Friendly URLs**: `/careers/senior-software-engineer` vs `/careers/cm3kj9nw6000014lrmjw0lbr1`
2. **Human-Readable**: Users can understand what the page is about from the URL
3. **Consistency**: Matches blog pattern and web best practices
4. **Better UX**: URLs are shareable and memorable
5. **Professional**: Looks more polished and trustworthy

## Files Modified

1. `lib/api/types.ts` - Added slug field to Job interface
2. `lib/api/careers.ts` - Added getJobBySlug function
3. `app/careers/[id]/page.tsx` - Updated to use slug
4. `app/careers/JobsGrid.tsx` - Updated links to use slug

## Consistency Across Site

Now all dynamic routes use slugs:
- ✅ Blog posts: `/blog/[slug]`
- ✅ Job listings: `/careers/[slug]`

Both follow the same pattern and provide SEO-friendly URLs!

## Testing Checklist

- [ ] Job listing page shows correct links with slugs
- [ ] Clicking a job card navigates to correct job detail page
- [ ] Job detail page loads with slug in URL
- [ ] generateStaticParams creates routes for all jobs
- [ ] 404 page shows for invalid slugs
