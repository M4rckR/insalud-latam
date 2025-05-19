'use client'
import { sedesData } from "@/data/sedes";
import { useState } from "react";

import { CarouselSedes } from "./CarouselSedes";

export const TabSedes = () => {
    const [activeTab, setActiveTab] = useState("sede-2");

    return (
        <div className="flex flex-col gap-12">
            <div className="flex items-end flex-col gap-10 max-h-[200px] overflow-y-auto pr-4 py-6 custom-scrollbar">
                {sedesData.map((tab) => (
                    <button 
                        key={tab.id} 
                        className={` cursor-pointer text-left transition-all duration-300 text-lg font-semibold ${activeTab === tab.id ? "text-in-orange" : "text-white"}`} 
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.nombre}
                    </button>
                ))}
            </div>
            <CarouselSedes activeTab={activeTab} />

            
            
        </div>
  )
}
