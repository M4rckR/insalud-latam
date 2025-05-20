'use client'
import { sedesData } from "@/data/sedes";
import { useState } from "react";

import { CarouselSedes } from "./CarouselSedes";

export const TabSedes = () => {
    const [activeTab, setActiveTab] = useState("sede-2");

    return (
        <div className="flex flex-col gap-12">
            {/* Tabs: horizontal en móvil, vertical en desktop */}
            <div className="flex flex-row lg:flex-col items-end gap-10 overflow-x-auto lg:overflow-x-visible overflow-y-hidden lg:overflow-y-auto max-w-full lg:max-w-none lg:max-h-[200px] md:pr-4 py-4 md:py-6 custom-scrollbar self-center lg:self-end">
                {sedesData.map((tab) => (
                    <button 
                        key={tab.id} 
                        className={`cursor-pointer text-left whitespace-nowrap transition-all duration-300 text-lg font-semibold ${activeTab === tab.id ? "text-in-orange" : "text-white"}`} 
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
