import { getLocation } from '@/services';
import { Location } from './../types/location';
import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'

type TreatmentState = {
    location: Location
    isLoading: boolean
    fetchLocation: () => Promise<void>
    setLocation: (location: Location) => void
}

export const useTreatmentStore = create<TreatmentState>()(
    devtools(
        persist((set) =>({
            location: {
                country: "PE",
            },
            isLoading: false,
            fetchLocation: async () => {
                set({isLoading: true})
                const location = await getLocation()
                set({location, isLoading: false})
            },
            setLocation: (location: Location) => set({location}),
        }),
        {
            name: 'treatment-store',
            storage: createJSONStorage(() => localStorage),
        }
    )
    )
)






