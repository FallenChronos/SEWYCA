// app/api/cloudinary-images/route.ts
import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary once at the top level
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
    api_key: process.env.CLOUDINARY_API_KEY!,
    api_secret: process.env.CLOUDINARY_API_SECRET!,
});

// We will set up pagination to load images gradually
export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const nextCursor = searchParams.get('nextCursor') ?? undefined; // For pagination
    const maxResultsParam = searchParams.get('maxResults') ?? '9';
    const maxResults = parseInt(maxResultsParam, 10);

    try {
        // Example: to fetch *all* images, you can use an expression like "resource_type:image"
        // or restrict by folder (e.g. "folder=your-folder-name"). Adjust as needed.
        const response = await cloudinary.search
            .expression('resource_type:image')
            .sort_by('public_id', 'desc')
            .max_results(maxResults)
            .next_cursor(nextCursor)
            .execute();

        return NextResponse.json({
            resources: response.resources,
            nextCursor: response.next_cursor || null,
        });
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message || 'Something went wrong' },
            { status: 500 }
        );
    }
}
