'use client'
import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    Rectangle,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from 'recharts'

import {
    Card,
    CardContent,
    CardHeader,
} from '@/components/ui/card'

import { Filters } from '../filters'

const data = [
    {
        name: 'Month A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Month B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Month C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Month D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Month E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Month F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Month G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
]

export function MainBarChart() {
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

                <CardContent className='h-[40vh]'>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid vertical={false} className='text-zinc-50 stroke-zinc-700' strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="pv" fill="#f43f5e" activeBar={<Rectangle fill="#fb7185" stroke="red" />} />
                            <Bar dataKey="uv" fill="#10b981" activeBar={<Rectangle fill="#34d399" stroke="green" />} />
                        </BarChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>
        </>
    )
}
