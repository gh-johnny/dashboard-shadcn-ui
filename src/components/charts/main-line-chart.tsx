'use client'
import { QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'
import {
    CartesianGrid,
    Line,
    LineChart,
    ResponsiveContainer,
    XAxis,
    YAxis,
} from 'recharts'
import color from 'tailwindcss/colors'

import {
    Card,
    CardContent,
    CardHeader,
} from '@/components/ui/card'
import { DatePickerWithRange } from '@/components/ui/date-picker'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { queryClient } from '@/lib/react-query'

import { SelectCityState } from '../select-city-state'
import SelectLocation from '../select-location/select-location'

const data = [
    {
        date: '10/12',
        value: 1900,
    },
    {
        date: '11/12',
        value: 1298,
    },
    {
        date: '12/12',
        value: 1119,
    },
    {
        date: '13/12',
        value: 929,
    },
    {
        date: '14/12',
        value: 858,
    },
    {
        date: '15/12',
        value: 1193,
    },
    {
        date: '16/12',
        value: 1593,
    },
    {
        date: '17/12',
        value: 1229,
    },
]

export function MainLineChart() {
    const [selectOccurrence, setSelectOccurrence] = useState('Vazamento de Esgoto')

    return (
        <>
            <QueryClientProvider client={queryClient}>
                <Card className='flex-1 bg-zinc-800'>
                    <CardHeader className='flex-row items-center justify-between pb-8'>
                        <div className='space-y-1 '>
                            <CardContent className='py-0 h-fit text-zinc-100 text-base font-medium'>
                                <div className='flex flex-col gap-4 lg:items-center lg:flex-row lg:gap-0'>
                                    <SelectLocation />
                                    <p className='whitespace-pre'>Ocorrências de<span className='lg:hidden'>:</span></p>
                                    <Select
                                        onValueChange={e => setSelectOccurrence(e)}
                                        value={selectOccurrence}
                                        defaultValue={selectOccurrence}
                                    >
                                        <SelectTrigger className="w-[225px] border rounded-md py-2 mx-2">
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
                                    <article className='whitespace-pre mr-2'><span className='lg:hidden'>N</span><span className='hidden lg:inline'>n</span>o período de<span className='lg:hidden'>:</span></article>
                                    <DatePickerWithRange className='ml-2 lg:ml-0' />
                                </div>
                            </CardContent>
                        </div>
                    </CardHeader>

                    <CardContent className=''>
                        <ResponsiveContainer width='100%' height={240}>
                            <LineChart data={data} style={{ fontsize: 12 }}>
                                <CartesianGrid vertical={false} className='stroke-muted' />
                                <Line
                                    type='linear'
                                    strokeWidth={2}
                                    dataKey='value'
                                    stroke={color.yellow[500]}
                                />
                                <YAxis
                                    stroke='#a1a1aa'
                                    axisLine={false}
                                    tickLine={false}
                                    width={80}
                                    tickFormatter={(value: number) =>
                                        value.toLocaleString('en-US', {
                                            style: 'currency',
                                            currency: 'USD',
                                        })
                                    }
                                />
                                <XAxis dataKey='date' stroke='#a1a1aa' tickLine={false} axisLine={false} dy={16} />                        </LineChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
            </QueryClientProvider>
        </>
    )
}
