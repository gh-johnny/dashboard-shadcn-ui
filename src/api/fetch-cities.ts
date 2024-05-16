import { api } from '@/lib/axios'

export async function fetchCities({stateAbbreviation}: {stateAbbreviation: string}) {
    const response = await api.get(`/api/ibge/municipios/v1/${stateAbbreviation}?providers=dados-abertos-br,gov,wikipedia`)

    return response
}

