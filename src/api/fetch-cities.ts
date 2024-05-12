import { api } from '@/lib/axios'

interface IFetchCitiesProps {
    stateAbbreviation: string // sp, rj, mg ...
}

export async function fetchCities({ stateAbbreviation }: IFetchCitiesProps) {
    const response = await api.get(`/api/ibge/municipios/v1/${stateAbbreviation}`)

    return response
}

