import activities from "@/app/assets/activities.json"
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        const activityType = request.nextUrl.searchParams.get("type");
        let activity = "";
        if(!activityType){
            const activityTypes = Object.values(activities).flat();
            activity = activityTypes[Math.floor(Math.random() * activityTypes.length)];
        }
        else {
            const filteredActivities = activities[activityType as keyof typeof activities];
            activity = filteredActivities[Math.floor(Math.random() * filteredActivities.length)];
        }
        return NextResponse.json({ activity }, { status: 200 });
    } catch (error) {
        console.error("Error occured while fetching activity: ", error);
        return NextResponse.json({ error: "Failed to fetch activity" }, { status: 500 });
    }
}