import { useMutation } from '@tanstack/react-query'
import { Check, ChevronsUpDown } from 'lucide-react'
import { useEffect, useState } from 'react'

import { fetchCities } from '@/api/fetch-cities'
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
import { capitalizeCityName } from '@/utils/capitalize-city-name'

import { Skeleton } from '../ui/skeleton'

type TCities = {
    codigo_ibge: string
    nome: string
}

const selectCityPlaceholder = 'Selecione a Cidade'

export default function SelectCity({ stateInfo }: { stateInfo: string | null }) {
    const [open, setOpen] = useState(false)

    const [citiesArr, setCitiesArr] = useState<TCities[] | null>(null)

    const [cityValue, setCityValue] = useState<string | null>(null)

    const { mutateAsync: fetchCitiesFn, isSuccess: isSuccessFetchedCitiesData, isPending: isFetchCitiesPending } = useMutation({
        mutationKey: ['fetch-city-query'],
        mutationFn: fetchCities,
        onSuccess: data => setCitiesArr(data.data)
    })

    const onSelectCity = (item: TCities) => {
        setCityValue(item.nome)
        setOpen(false)
    }

    const getCities = async () => {
        if (stateInfo !== null) {
            await fetchCitiesFn({ stateAbbreviation: stateInfo })
        }
    }

    const matchCityName = (arr: TCities[] | null) => {
        if (!arr) return selectCityPlaceholder
        const cityName = arr.find(item => item.nome === cityValue)?.nome
        if (!cityName) return selectCityPlaceholder
        return capitalizeCityName(cityName)
    }

    useEffect(() => {
        getCities()
    }, [stateInfo])

    return (
        <>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="bg-zinc-800 w-[200px] justify-between"
                    >
                        {cityValue
                            ? matchCityName(citiesArr)
                            : selectCityPlaceholder
                        }
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                    <Command className='bg-zinc-700 text-white'>
                        <CommandInput placeholder="Search" />
                        <CommandList>
                            <CommandEmpty>Cidade não encontrada</CommandEmpty>
                            <CommandGroup className='bg-zinc-700'>
                                {isFetchCitiesPending &&
                                    Array.from({ length: 2 }).map(_ =>
                                        <CommandItem>
                                            <Skeleton className='w-full h-[30px]' />
                                        </CommandItem>
                                    )
                                }
                                {isSuccessFetchedCitiesData && stateInfo !== null &&
                                    citiesArr?.map((item: TCities) => (
                                        <CommandItem
                                            key={item.codigo_ibge}
                                            value={item.nome}
                                            onSelect={() => onSelectCity(item)}
                                            className='text-white hover:bg-white hover:text-black'
                                        >
                                            <Check
                                                className={cn(
                                                    'mr-2 h-4 w-4',
                                                    cityValue && cityValue === item.nome ? 'opacity-100' : 'opacity-0'
                                                )}
                                            />
                                            {capitalizeCityName(item.nome)}
                                        </CommandItem>
                                    ))
                                }
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        </>
    )
}
