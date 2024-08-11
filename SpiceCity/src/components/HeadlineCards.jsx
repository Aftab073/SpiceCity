import React from "react";

const HeadlineCards = () => {
    return (
        <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
            {/* card */}
            <div className="rounded-xl relative">
                {/* Overlay */}
                <div className="absolute w-full h-full bg-black/50 rounded-xl text-white ">
                    <p className="font-bold text-2xl px-2 pt-4"> Sun's Out,Bogo's Out </p>
                    <p className="px-2">Through 8/26</p>
                    <button className="border-white bg-white text-black px-1 mx-2 absolute bottom-4">Order Now</button>
                </div>
                <img
                 className="max-h-[1640px] md:max-[200px] w-full object-cover rounded-xl " 
                 src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=400" alt="/" />
            </div>
            {/* card */}
            <div className="rounded-xl relative">
                {/* Overlay */}
                <div className="absolute w-full h-full bg-black/50 rounded-xl text-white ">
                    <p className="font-bold text-2xl px-2 pt-4"> New Restaurants </p>
                    <p className="px-2">Added Daily</p>
                    <button className="border-white bg-white text-black px-1 mx-2 absolute bottom-4">Order Now</button>
                </div>
                <img
                 className="max-h-[1640px] md:max-[200px] w-full object-cover rounded-xl " 
                 src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
            </div>
            {/* card */}
            <div className="rounded-xl relative">
                {/* Overlay */}
                <div className="absolute w-full h-full bg-black/50 rounded-xl text-white ">
                    <p className="font-bold text-2xl px-2 pt-4"> We Deliver Desserts </p>
                    <p className="px-2">Tasty Treats</p>
                    <button className="border-white bg-white text-black px-1 mx-2 absolute bottom-4">Order Now</button>
                </div>
                <img
                 className="max-h-[1640px] md:max-[200px] w-full object-cover rounded-xl " 
                 src="https://images.pexels.com/photos/587739/pexels-photo-587739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
            </div>
        </div>
    )
}

export default HeadlineCards