"use client";

import { Location, Trip } from "@/lib/generated/prisma/client";
import { useState } from "react";
import Image from "next/image";
import { Calendar, Plus } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export type TripWithLocation = Trip & {
    locations: Location[];
};

interface TripDetailClientProps {
    trip: TripWithLocation;
}
export default function TripDetailClient({ trip }: TripDetailClientProps) {

    const [activeTab, setActiveTab] = useState("overview");

    return (
        <>
            <div className="container mx-auto px-4 py-8 space-y-8">
                {trip.imageUrl && (
                    <div className="w-full h-72 md:h-96 overflow-hidden rounded-xl shadow-lg relative">
                        {" "}
                        <Image
                            src={trip.imageUrl}
                            alt={trip.title}
                            className="object-cover"
                            fill
                            priority
                        />
                    </div>
                )}
                <div className="bg-white p-6 shadow rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div>
                        <h1 className="text-4xl font-extrabold text-gray-900">
                            {" "}
                            {trip.title}
                        </h1>

                        <div className="flex items-center text-gray-800 mt-2">
                            <Calendar className="h-5 w-5 mr-2" />
                            <span className="text-lg">
                                {trip.startDate.toLocaleDateString()} -{" "}
                                {trip.endDate.toLocaleDateString()}
                            </span>
                        </div>
                    </div>

                    <div className="mt-4 md:mt-0">
                        <Link href={`/trips/${trip.id}/itinerary/new`}>
                            <Button className="flex items-center bg-green-600 text-white hover:bg-green-700 rounded-none">
                                {" "}
                                <Plus /> Add Location
                            </Button>
                        </Link>
                    </div>
                </div>

                <div className="bg-white p-6 shadow rounded-lg">

                </div>
            </div>
        </>
    )
}