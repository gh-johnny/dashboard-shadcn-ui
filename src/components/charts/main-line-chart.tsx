'use client'
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

import { Filters } from '../filters'

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
    return (
        <>
            <Card className='flex-1 flex flex-col lg:gap-[6vw] xl:gap-[3vw] bg-zinc-800'>
                <CardHeader className='flex-row items-center justify-between lg:pb-8'>
                    <div className='space-y-1'>
                        <section className='hidden lg:block py-0 h-fit text-zinc-100 text-base font-medium'>
                            <Filters />
                        </section>
                    </div>
                </CardHeader>

                <CardContent>
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
        </>
    )
}
