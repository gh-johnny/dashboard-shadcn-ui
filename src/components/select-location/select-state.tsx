import { useQuery } from '@tanstack/react-query'
import { Check, ChevronsUpDown } from 'lucide-react'
import { useState } from 'react'

import { fetchStates } from '@/api/fetch-states'
import { Button } from '@/components/ui/button'
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from '@/components/ui/command'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'

type TStates = {
    id: number
    nome: string
    regiao: {
        id: number
        nome: string
        sigla: string
    },
    sigla: string
}


export default function SelectState({gettingAbbreviation} : {gettingAbbreviation : (stateAbbreviation: string) => void}) {
    const [open, setOpen] = useState(false)

    const [stateValue, setStateValue] = useState<TStates | null>(null)

    const { data: fetchedStates, isLoading: isLoadingStates, } = useQuery({
        queryKey: ['fetch-state-query'],
        queryFn: fetchStates,
    })

    const onSelectState = async (item: TStates) => {
        setStateValue(item)
        setOpen(false)
        gettingAbbreviation(item.sigla)
    }

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between"
                >
                    {stateValue
                        ? fetchedStates?.data.find((item: TStates) => item.nome === stateValue.nome)?.nome
                        : 'Selecione o Estado'
                    }
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder="Search" />
                    <CommandList>
                        <CommandEmpty>Estado não encontrado</CommandEmpty>
                        {isLoadingStates ?
                            <>loading...</>
                            : fetchedStates?.data.map((item: TStates) => (
                                <CommandGroup>
                                    <CommandItem
                                        key={item.sigla}
                                        value={item.nome}
                                        onSelect={() => onSelectState(item)}
                                    >
                                        <Check
                                            className={cn(
                                                'mr-2 h-4 w-4',
                                                stateValue?.nome === item.nome ? 'opacity-100' : 'opacity-0'
                                            )}
                                        />
                                        {item.nome}
                                    </CommandItem>
                                </CommandGroup>
                            ))
                        }
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
