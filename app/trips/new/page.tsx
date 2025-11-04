import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IoMdArrowBack } from "react-icons/io";

export default function NewTrip() {
    return (
        <>
            <div className="w-full mt-10 space-y-6 container mx-auto px-4 py-8">
                <Link href="/trips">
                    <Button className="mb-4 rounded-none bg-gray-800 px-4 py-2 text-gray-100 hover:bg-gray-800">
                        <IoMdArrowBack />
                        Back to Trips
                    </Button>
                </Link>
                <Card className="rounded-none">
                    <CardHeader className="text-2xl font-bold">
                        New Trip
                    </CardHeader>

                    <CardContent>
                        <form action="" className="space-y-6">
                            <div>
                                <Label className="block text-lg font-medium text-gray-700 mb-1">
                                    {" "}
                                    Title
                                </Label>
                                <Input
                                    type="text"
                                    placeholder="Japan trip..."
                                    className={cn(
                                        "w-full border border-gray-300 px-3 py-2",
                                        "rounded-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    )}
                                    name="title"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-lg font-medium text-gray-700 mb-1">
                                    Description
                                </label>
                                <textarea
                                    name="description"
                                    placeholder="Trip description..."
                                    className={cn(
                                        "w-full border border-gray-300 px-3 py-2",
                                        "rounded-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    )}
                                    required
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-lg font-medium text-gray-700 mb-1">
                                        Start Date
                                    </label>
                                    <Input
                                        type="date"
                                        name="startDate"
                                        className={cn(
                                            "w-full border border-gray-300 px-3 py-2",
                                            "rounded-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        )}
                                    />
                                </div>

                                <div>
                                    <label className="block text-lg font-medium text-gray-700 mb-1">
                                        {" "}
                                        End Date
                                    </label>
                                    <Input
                                        type="date"
                                        name="endDate"
                                        className={cn(
                                            "w-full border border-gray-300 px-3 py-2",
                                            "rounded-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        )}
                                    />
                                </div>
                            </div>

                            <div>
                                <Label className="block text-lg font-medium text-gray-700 mb-1">
                                    Trip Image
                                </Label>
                                <Image
                                    src={"/logo.png"}
                                    alt="Trip Preview"
                                    className="w-full mb-4 rounded-none max-h-48 object-cover"
                                    width={300}
                                    height={100}
                                />
                            </div>

                            <div className="flex justify-end">

                                <Button type="submit" className="w-32 rounded-none bg-green-600 px-4 py-2 text-white hover:bg-green-600">
                                    <IoMdArrowBack />
                                    Create Trip
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}