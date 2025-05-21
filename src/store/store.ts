import { getLocation } from '@/services';
import { Country } from './../types/location';
import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'

type TreatmentState = {
    location: Country
    isLoading: boolean
    fetchLocation: () => Promise<void>
    setLocation: (location: Country) => void
}

export const useTreatmentStore = create<TreatmentState>()(
    devtools(
        persist((set) =>({
            location: "PE",
            isLoading: false,
            fetchLocation: async () => {
                set({isLoading: true})
                const location = await getLocation()
                set({location, isLoading: false})
            },
            setLocation: (location: Country) => set({location}),
        }),
        {
            name: 'treatment-store',
            storage: createJSONStorage(() => localStorage),
        }
    )
    )
)






