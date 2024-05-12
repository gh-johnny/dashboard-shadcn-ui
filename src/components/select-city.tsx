'use client'

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

interface ISelectCityStateProps {
    location: 'state' | 'city'
}

export function SelectCityState({ location }: ISelectCityStateProps) {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState('')

    const { data: fetchedStates, isLoading } = useQuery({
        queryKey: ['fetch-city-state-query'],
        queryFn: fetchStates,
    })

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between"
                >
                    {value
                        ? fetchedStates?.data.find((item: any) => item.nome === value)?.nome
                        : 'Select value...'}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder="Search value..." />
                    <CommandList>
                        <CommandEmpty>Cidade não encontrada</CommandEmpty>
                        <CommandGroup>
                            {isLoading ?
                                <>loading...</>
                                : fetchedStates?.data.map((value: any) => (
                                    <CommandItem
                                        key={value.sigla}
                                        value={value.nome}
                                        onSelect={(currentValue) => {
                                            setValue(currentValue === value ? '' : currentValue)
                                            setOpen(false)
                                        }}
                                    >
                                        <Check
                                            className={cn(
                                                'mr-2 h-4 w-4',
                                                value === value.nome ? 'opacity-100' : 'opacity-0'
                                            )}
                                        />
                                        {value.nome}
                                    </CommandItem>
                                ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}

