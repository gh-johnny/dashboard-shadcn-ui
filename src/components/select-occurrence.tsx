import { useState } from 'react'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'

const defaultOccurrenceValue = 'Selecione a Ocorrência'

export function SelectOccurrence(){
    const [selectOccurrence, setSelectOccurrence] = useState(defaultOccurrenceValue)

    return (
        <Select
            onValueChange={e => setSelectOccurrence(e)}
            value={selectOccurrence}
            defaultValue={defaultOccurrenceValue}
        >
            <SelectTrigger className="w-full lg:w-[225px] mt-2 h-10 border rounded-md py-2">
                <SelectValue className='text-left'>{selectOccurrence}</SelectValue>
            </SelectTrigger>
            <SelectContent className='bg-zinc-700 text-zinc-200'>
                <SelectItem className="" value="Vazamento de Esgoto">Vazamento de Esgoto</SelectItem>
                <SelectItem className="" value="Vazamento de Água">Vazamento de Água</SelectItem>
                <SelectItem className="" value="Baixa Pressão">Baixa Pressão</SelectItem>
                <SelectItem className="" value="Buraco na Calçada">Buraco na Calçada</SelectItem>
                <SelectItem className="" value="Buraco na Rua">Buraco na Rua</SelectItem>
                <SelectItem className="" value="Água Suja">Água Suja</SelectItem>
            </SelectContent>
        </Select>
    )
}
