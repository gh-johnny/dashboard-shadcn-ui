"use client"
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


export default function Home() {
    return (
        <main className='flex flex-col gap-5 w-screen h-dvh bg-zinc-900 p-5'>
            <header className='h-32 border-2 rounded-lg'>
            </header>
            <section className='flex gap-4'>
                <Card className='flex-1 bg-zinc-800'>
                    <CardHeader className='flex-row items-center justify-between pb-8'>
                        <div className='space-y-1'>
                            <CardTitle className='text-zinc-100 text-base font-medium'>
                                {/* Select component from shad to select the ocurrences */}
                                {/* Date-picker component from shad to select the ocurrences */}
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

                <Card className='bg-zinc-800'>
                    <CardHeader className='flex-row items-center justify-between pb-8'>
                        <div className='space-y-1'>
                            <CardTitle className='text-zinc-100 text-base font-medium'>
                                {/* Select component from shad to select the ocurrences */}
                                {/* Date-picker component from shad to select the ocurrences */}
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
    );
}
