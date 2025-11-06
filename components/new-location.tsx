"use client";
import { useTransition } from "react";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Plus } from "lucide-react";
import { MdCancel } from "react-icons/md";
import { useRouter } from "next/navigation";
import { addLocation } from "@/lib/actions/add-location";

export default function NewLocationClient({ tripId }: { tripId: string }) {
    const [isPending, startTransation] = useTransition()

    const router = useRouter();

    const handleCancel = () => router.back();

    return (
        <>
            <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center bg-gray-50">
                <div className="w-full max-w-md mx-auto">
                    <div className="bg-white p-8 shadow-lg rounded-none">
                        <h1 className="text-3xl font-bold text-center mb-6">
                            {" "}
                            Add New Location
                        </h1>

                        <form action={(formData: FormData) => {
                            startTransation(() => {
                                addLocation(formData, tripId);
                            });
                        }} className="space-y-6">
                            <div>
                                <Label className="block text-sm font-medium text-gray-700 mb-2">
                                    {" "} Address
                                </Label>
                                <Input
                                    name="address"
                                    type="text"
                                    required
                                    placeholder="Enter location address"
                                    className="w-full border-none px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-none text-gray-500 focus:ring-offset-0 focus:ring-offset-0"
                                />
                            </div>
                            <div className="flex justify-end space-x-4">
                                <Button type="submit" className="w-full flex justify-center bg-green-600 text-white hover:bg-green-600 rounded-none">
                                    <Plus />
                                    {isPending ? "Adding..." : "Add Location"}
                                </Button>
                                <Button
                                    onClick={handleCancel}
                                    className="w-full flex justify-center bg-red-600 text-white hover:bg-red-600 rounded-none">
                                    <MdCancel />
                                    Cancel
                                </Button>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}