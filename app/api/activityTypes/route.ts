import { NextResponse } from "next/server";
import activities from "@/app/assets/activities.json"

export async function GET() {
    try {
        const activityTypes = Object.keys(activities);
        return NextResponse.json({ activityTypes }, { status: 200 });
    } catch (error) {
        console.error("Error occured while fetching activity: ", error);
        return NextResponse.json({ error: "Failed to fetch activity types" }, { status: 500 });
    }
}