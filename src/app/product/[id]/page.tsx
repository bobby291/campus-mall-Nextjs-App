'use client';

import { useParams } from "next/navigation";

export default function ProductDetails() {
    const {id} = useParams() as { id: string }

    return (
        <div className="flex flex-col items-center justify-center min-h-srceen p-6 bg-white">
            <h1 className="text-2xl font-bold mb-2">
                Product ID: {id}
            </h1>

            <p>This is the availability page for the product</p>
        </div>
    );
}