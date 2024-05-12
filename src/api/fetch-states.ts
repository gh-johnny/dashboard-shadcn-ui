import { api } from '@/lib/axios'

export async function fetchStates(){
    const response = await api.get('/api/ibge/uf/v1')

    return response
}
