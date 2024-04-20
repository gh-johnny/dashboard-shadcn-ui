'use client'
import { ChevronDown, ChevronUp, CircleGauge, Droplets, PersonStanding, TrafficCone } from 'lucide-react'
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
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { DatePickerWithRange } from '@/components/ui/date-picker'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'

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

const cards = [
    {
        occurrence: 'Vazamento de Esgoto',
        data: '11%',
        icon: Droplets,
    },
    {
        occurrence: 'Vazamento de Água',
        data: '-3.1%',
        icon: Droplets, 
    },
    {
        occurrence: 'Baixa Pressão',
        data: '-2.9%',
        icon: CircleGauge,
    },
    {
        occurrence: 'Água Suja',
        data: '0.2%',
        icon: Droplets,
    },
    {
        occurrence: 'Buraco na Calçada',
        data: '-8.1%',
        icon: PersonStanding,
    },
    {
        occurrence: 'Buraco na Rua',
        data: '-1.9%',
        icon: TrafficCone,
    },
]


export default function Home() {
    const [selectOccurrence, setSelectOccurrence] = useState('Vazamento de Esgoto')

    return (
        <main className='flex flex-col gap-4 w-screen min-h-dvh lg:h-vh bg-zinc-900 p-5'>
            <ScrollArea>
                <section className='flex overflow-x-auto overflow-y-hidden gap-2 h-30 bg-zinc-800 p-2 pb-3 rounded-lg'>
                    {
                        cards.map((item, i) =>
                            <Card key={i} className='text-zinc-200 bg-zinc-700 overflow-hidden'>
                                <CardHeader className='w-[340px] h-content flex flex-col justify-between'>
                                    <CardTitle className='relative flex justify-between gap-5'>
                                        {item.occurrence}
                                        {
                                            <item.icon 
                                                data-positive-or-negative={item.data[0] === '-'} 
                                                className='text-emerald-400 data-[positive-or-negative=true]:text-rose-400'
                                            />
                                        }
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <article className='pl-1 text-zinc-400 flex'>
                                        {item.data[0] === '-' ? 'Aumento' : 'Queda'} de 
                                        <p className='flex relative'>
                                            {item.data[0] === '-'
                                                ? 
                                                <>
                                                    <ChevronUp className='ml-1 w-5 text-rose-400'/>
                                                    <div className='bg-rose-400 blur-[1.7rem] absolute top-0 right-4 w-4 h-4'/>
                                                </>
                                                : 
                                                <>
                                                    <ChevronDown className='ml-1 w-5 text-emerald-400'/>
                                                    <div className='bg-emerald-400 blur-[1.7rem] absolute top-0 right-4 w-4 h-4'/>
                                                </>
                                            }
                                            <span data-positive-or-negative={item.data[0] === '-'} className='text-emerald-400 data-[positive-or-negative=true]:text-rose-400'>
                                                {' '}
                                                {
                                                    item.data[0] === '-' 
                                                        ? item.data.replace('-', '')
                                                        : item.data
                                                }
                                            </span>
                                        </p>
                                    </article>
                                </CardContent>
                            </Card>
                        )
                    }
                </section>
                <ScrollBar orientation='horizontal' className='px-2'/>
            </ScrollArea>
            <section className='flex flex-col lg:flex-row gap-4'>
                <Card className='flex-1 bg-zinc-800'>
                    <CardHeader className='flex-row items-center justify-between pb-8'>
                        <div className='space-y-1'>
                            <CardTitle className='text-zinc-100 text-base font-medium'>
                                <div className='flex flex-col gap-4 lg:items-center lg:flex-row lg:gap-0'>
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
                                    <p className='whitespace-pre mr-2'><span className='lg:hidden'>N</span><span className='hidden lg:inline'>n</span>o período de<span className='lg:hidden'>:</span></p>
                                    <DatePickerWithRange className='ml-2 lg:ml-0'/>   
                                </div>
                            </CardTitle>
                            <CardDescription className='text-yellow-500'>
                                Santa Bárbara d'Oeste
                            </CardDescription>
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
                                <XAxis dataKey='date' stroke='#a1a1aa' tickLine={false} axisLine={false} dy={16} />
                            </LineChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                <Card className='bg-zinc-800'>
                    <CardHeader className='flex-row items-center justify-between pb-8'>
                        <div className='space-y-1'>
                            <CardTitle className='text-zinc-100 text-base font-medium'>
                                Ocorrências de Vazamento de água no período de 11/12 01/02
                            </CardTitle>
                            <CardDescription className='text-zinc-400'>
                                Período Mensal
                            </CardDescription>
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
                                <XAxis dataKey='date' stroke='#a1a1aa' tickLine={false} axisLine={false} dy={16} />
                            </LineChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
            </section>
        </main>
    )
}
