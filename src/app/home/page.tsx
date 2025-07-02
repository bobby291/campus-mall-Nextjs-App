'use client'

import { Bell, Search, Home, Heart, MessageCircle, User, Users, Box, Wrench } from "lucide-react";
import { useRouter } from "next/navigation";


const products = [
    {
        id: 1,
        title: 'Luxury wears',
        type: 'Goods',
        price: 'N500',
        location: 'University of Abuja',
        isNew: false,
        vendor: { name: 'LaceUp Footies', avatar: '/images/store (8).jpg' },
        media:  '/images/store (3).jpg'
    },
    {
        id: 1,
        title: 'Used Laptop',
        type: 'Goods',
        price: 'N500',
        location: 'University of Abuja',
        isNew: false,
        vendor: { name: 'Blessing', avatar: '/images/store (8).jpg' },
        media:  '/images/store (6).jpg',
    },
    {
        id: 1,
        title: 'Used Laptop',
        type: 'Goods',
        price: 'N500',
        location: 'University of Abuja',
        isNew: false,
        vendor: { name: 'Blessing', avatar: '/images/store (8).jpg' },
        media:  '/images/store (8).jpg',
    },
    {
        id: 1,
        title: 'Used Laptop',
        type: 'Goods',
        price: 'N500',
        location: 'University of Abuja',
        isNew: false,
        vendor: { name: 'Blessing', avatar: '/images/store (8).jpg' },
        media:  '/images/store (7).jpg',
    },
    {
        id: 1,
        title: 'Used Laptop',
        type: 'Goods',
        price: 'N500',
        location: 'University of Abuja',
        isNew: false,
        vendor: { name: 'Blessing', avatar: '/images/store (8).jpg' },
        media:  '/images/store (6).jpg',
    },
    {
        id: 1,
        title: 'Used Laptop',
        type: 'Goods',
        price: 'N500',
        location: 'University of Abuja',
        isNew: false,
        vendor: { name: 'Blessing', avatar: '/images/store (8).jpg' },
        media:  '/images/store (5).jpg',
    },
    {
        id: 1,
        title: 'Used Laptop',
        type: 'Goods',
        price: 'N500',
        location: 'University of Abuja',
        isNew: false,
        vendor: { name: 'Blessing', avatar: '/images/store (8).jpg' },
        media:  '/images/store (4).jpg',
    },
    {
        id: 1,
        title: 'Used Laptop',
        type: 'Goods',
        price: 'N500',
        location: 'University of Abuja',
        isNew: false,
        vendor: { name: 'Blessing', avatar: '/images/store (8).jpg' },
        media:  '/images/store (3).jpg',
    },

    {
        id: 2,
        title: 'Printing and Typsetting',
        type: 'Services',
        price: 'N2000',
        location: 'University of Abuja',
        isNew: false,
        vendor: { name: 'Blessing', avatar: '/images/store (8).jpg' },
        media:  ''
    },
];

export default function HomePage() {
    const router = useRouter();

    return (
        <div className="min-h-screen flex flex-col bg-[#FDF8FA]">
            {/* Top Section */}
            <div className="bg-[#FDF8FA] shadow-md px-4 py-3">
            <input type="text" placeholder="Search product or service...."
                 className="w-full bg-gray-100 text-black rounded-md px-4 py-2 text-sm mb-2"
                />
                <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-bold uppercase text-gray-700">
                        Nigeria
                    </span>
                    <Bell className="w-5 h-5 text-gray-950" />
                </div>
                <span className="text-xl border bg-blue-950 px-6 py-4 rounded-full text-white font-bold">
                    Bayero University, Kano
                </span>
                
            </div>

            {/*  Goods and Service Button */}
                <div className="flex justify-around bg-white py-3 border-b">
                    <button 
                     onClick={() => (window.location.href = '/goods')}
                      className="flex items-center gap-2 px-6 py-4 bg-orange-600 font-bold text-white text-sm rounded-full shadow"
                    >
                        <Box className="w-4 h-4" />Goods
                    </button>
                    <button 
                     onClick={() => (window.location.href = '/service')}
                      className="flex items-center gap-2 px-6 py-4 bg-orange-600 font-bold text-white text-sm rounded-full shadow"
                    >
                        <Wrench className="w-4 h-4" />Service
                    </button>
                </div>

                {/* Main Feed */}
                <div className="flex-1 overflow-y-auto px-4 py-2 space-y-4 rounded-md">
                    <h2 className="text-xl uppercase font-bold text-blue-950"> 
                        Recommended for You
                    </h2>

                    {products.map((item) => (
                        <div key={item.id}
                         className="bg-cream- rounded-lg shadow p-3 space-y-2 cursor-pointer"
                         onClick={() => router.push(`/product/${item.id}`)}
                        >
                            <img 
                             src={item.media}
                             alt={item.title}
                             className="w-full h-40 object-cover rounded-md"
                            /> 
                            <div className="text-sm">
                                <p className="font-bold">
                                    {item.title}
                                </p>
                                <p className="text-gray-600 font-semibold">
                                    {item.location}
                                </p>
                                <p className="text-black font-semibold">
                                    {item.price}
                                </p>
                                <div className="flex items-center justify-between text-xs mt-1">
                                    <span className="text-gray-500 font-semibold">
                                        {item.isNew ? 'New' : 'Used'}
                                    </span>
                                    <div className="flex items-center gap-1"
                                     onClick={(e) => {
                                        e.stopPropagation(); // Prevent parent click
                                        router.push('/seller');
                                     }}>
                                        <img 
                                         src={item.vendor.avatar} 
                                         alt={item.vendor.name} 
                                         className="w-6 h-6 rounded-full"
                                        />
                                        <span className="text-gray-700">
                                            {item.vendor.name}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Navbar */}
                <div className="fixed bottom-0 left-0 right-0 bg-white border-t font-semibold py-2 px-6 flex justify-between items-center text-center text-xs text-gray-900">
                    <div className="flex flex-col items-center ">
                        <Home className="w-5 h-5 hover:bg-gray-400 "/>
                        <span>Home</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <Heart className="w-5 h-5 hover:bg-gray-400"/>
                        <span>Favorites</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <MessageCircle className="w-5 h-5" />
                        <span>Chat</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <Users className="w-5 h-5" />
                        <span>Community</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <User className="w-5 h-5" />
                        <span>Me</span>
                    </div>


                </div>

        </div>
    )
}
