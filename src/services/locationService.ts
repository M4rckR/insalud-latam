import { LocationSchema } from '@/schemas';
import axios from 'axios'

const API_URL = 'https://ip.guide/'

export const getLocation = async () => {

    const {data} = await axios.get(API_URL)

    const result = LocationSchema.safeParse(data)
    
    if(!result.success) {
        console.log(result.error)
        throw new Error('Error al obtener la ubicación')
    }
    else {
        return result.data.network.autonomous_system.country
    }
}



