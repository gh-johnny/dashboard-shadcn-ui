import { useState } from 'react'

import SelectCity from './select-city'
import SelectState from './select-state'

export default function SelectLocation(){
    const [stateInfo, setStateInfo] = useState<string | null>(null)

    const passingThings = (stateAbbreviation: string | null = null) => {
        if (stateAbbreviation){
            setStateInfo(stateAbbreviation)
        }
    }

    return (
        <div className='h-10 flex gap-2'>
            <SelectState gettingAbbreviation={passingThings}/>
            <SelectCity stateInfo={stateInfo}/>
        </div>
    )
}
