"use client";

import { useState } from "react";
import { Camera } from "lucide-react";

export default function AuthPage() {
    const [step, setStep] = 
    useState<'start' | 'otp' | 'profile'>('start');
    const [formData, setFormData] = 
    useState ({
        method: '',
        contact: '',
        otp: '',
        country: '',
        campus: '',
        profilePic: '',
    });

    const handleInput = (field: string, value: string) => {
        setFormData ({...formData, [field]: value});
    };
    const handleProfilePic = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
                reader.onloadend = () => setFormData({...formData, profilePic: reader.result as string});
                reader.readAsDataURL(file);
        }
    };
    const completeSignUp =() => {
        // Just a demo redirect 
        window.location.href = '/home';
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#FDF8FA] px-4 py-6 ">
            <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md space-y-6">
                <h1 className="text-2xl font-bold text-center text-gray-900">
                    Campus Mall Africa
                </h1>

                {step === 'start' && (
                    <>
                    <label className="text-black block font-medium">Phone or Email</label>
                    <input type="text" placeholder="Enter phone number or email" className="w-full border border-gray-400 rounded-lg px-4 py-2 text-black"
                     onChange={(e) => handleInput(`contact`, e.target.value)} 
                    />
                    <button 
                     onClick={() => setStep('otp')}
                     className="w-full bg-blue-950 text-white rounded-lg py-2 font-semibold"
                    >
                        Send OTP  
                    </button>
                    </>
                )}

                {step ===  'otp' && (
                    <>
                    <label className="block text-black font-medium">Enter OTP</label>
                    <input type="text"
                     placeholder="123456" 
                     className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black"
                     onChange={(e) => handleInput('otp', e.target.value)}
                    />
                    <button 
                     onClick={() => 
                        setStep('profile')}
                     className="w-full bg-blue-950 text-white rounded-lg py-2 font-semibold"
                    >
                        Verify
                    </button>
                    </>
                )}

                {step === 'profile' && (
                    <>
                        <div className="flex flex-col items-center">
                            {formData.profilePic ? 
                                (
                                    <img src={formData.profilePic} className="w-24 h-24 rounded-full object-cover mb-2"
                                    />
                                ) :
                                (
                                    <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 mb-2">
                                        <Camera size={24} color="black" />
                                    </div>
                                )}
                                <input type="file" accept="image/*" onChange={handleProfilePic}/>
                        </div>

                        <label htmlFor="" className="block text-black font-bold mt-4">Country</label>
                        <select className="w-full broder-border-gray-300 rounded-lg px-4 py-2 text-black"
                         onChange={(e) => handleInput('country', e.target.value)}>
                                <option value="" className="font-semibold text-gray-900">Select Country</option>
                                <option className="font-semibold text-gray-900">Nigeria</option>
                                <option className="font-semibold text-gray-900">South African</option>
                                <option className="font-semibold text-gray-900">Ghana</option>
                                <option className="font-semibold text-gray-900">Egypt</option>
                                <option className="font-semibold text-gray-900">Senegal</option>
                                <option className="font-semibold text-gray-900">Morroco</option>
                        </select>

                            <label className="block font-bold mt-2 text-black">Campus</label>
                                <select className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black" 
                                 onChange={(e) => handleInput('campus', e.target.value)}>
                                        <option value="" className="font-semibold text-gray-900">Select Campus</option>
                                        <option className="font-semibold text-gray-900">University of Abuja</option>
                                        <option className="font-semibold text-gray-900">University of Nigeria Nsukka</option>
                                        <option className="font-semibold text-gray-900">University of Uyo</option>
                                        <option className="font-semibold text-gray-900">Baze University</option>
                                        <option className="font-semibold text-gray-900">Nile University Egypt</option>
                                        <option className="font-semibold text-gray-900">University of Lagos</option>
                                </select>

                                <button 
                                 onClick={completeSignUp}
                                 className="w-full mt-4 bg-blue-950 text-white rounded-lg py-2 font-semibold"
                                >
                                    Complete SignUp
                                </button>
                    </>
                )}
                 
            </div>
        </div>
    );
}