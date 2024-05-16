import { useState } from 'react'

import { DatePickerWithRange } from '@/components/ui/date-picker'

import { SelectCity } from './select-location/select-city'
import { SelectState } from './select-location/select-state'
import { SelectOccurrence } from './select-occurrence' 
import { Button } from './ui/button'

export function Filters() {
    const [stateInfo, setStateInfo] = useState<string | null>(null)

    const gettingStateInfo = (stateAbbreviation: string | null = null) => {
        if (stateAbbreviation) {
            setStateInfo(stateAbbreviation)
        }
    }

    return (
        <div className='bg-zinc-800 p-3 rounded-lg text-white lg:p-0 lg:h-10 [&>*]:flex-1 lg:[&>*]:flex-none flex flex-col lg:flex-row lg:flex-wrap gap-2'>
            <SelectState gettingAbbreviation={gettingStateInfo} />
            <SelectCity stateInfo={stateInfo} />
            <SelectOccurrence />
            <DatePickerWithRange className='mt-2 lg:ml-0' />
            <Button variant="secondary" className='mt-2'>Confirmar</Button>
        </div>
    )
}
