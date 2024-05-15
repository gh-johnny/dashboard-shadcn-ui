import { useState } from 'react'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'

export default function SelectOccurrence(){
    const [selectOccurrence, setSelectOccurrence] = useState('Vazamento de Esgoto')

    return (
        <Select
            onValueChange={e => setSelectOccurrence(e)}
            value={selectOccurrence}
            defaultValue={selectOccurrence}
        >
            <SelectTrigger className="w-[225px] h-10 border rounded-md py-2 mx-2">
                <SelectValue>{selectOccurrence}</SelectValue>
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
