import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";



export default async function TripsPage() {
    const session = await auth()
    if (!session) {
        return (
            <>
                <div className="flex justify-center items-center h-screen text-gray-700 text-xl">
                    {" "}
                    Please Sign In.
                </div>
            </>
        );
    }

    return (
        <>
            <div className="space-y-6 container mx-auto px-4 py-8">
                {" "}
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold tracking-tight"> Dashboard</h1>
                    <Link href="/trips/new">
                        <Button className="rounded-none bg-gray-800 px-4 py-2 text-white hover:bg-ray-800">
                            <FaPlus  />
                            New Trip
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    )

}