'use client'
import { ChevronDown, ChevronUp, CircleGauge, Droplets, LucideIcon, PersonStanding, TrafficCone } from 'lucide-react'
import { useEffect, useState } from 'react'

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Skeleton } from '@/components/ui/skeleton'


export default function CardSection(){
    const [cards, setCards] = useState<{ occurrence: string; data: string; icon: LucideIcon; }[]>()
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setCards(
            [
                {
                    occurrence: 'Vazamento de Esgoto',
                    data: String((Math.random() * (11 - -5) + -5).toFixed(1)),
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
            ])
        setIsMounted(true)
    }, [])

    if(!isMounted){
        return (
            <ScrollArea>
                <section className='flex overflow-x-auto overflow-y-hidden gap-2 h-30 bg-zinc-800 p-2 pb-3 rounded-lg'>
                    {
                        Array.from({length: 6}).map((_, i) =>
                            <Skeleton key={i} className='text-zinc-200 bg-zinc-700 overflow-hidden'>
                                <CardHeader className='w-[340px] h-content flex flex-col justify-between'>
                                    <div className='relative flex justify-between gap-5'>
                                        <Skeleton className='w-[200px] h-6 bg-zinc-600'/>
                                        <Skeleton 
                                            className='w-6 h-6 bg-zinc-600 rounded-full'
                                        />
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className='pl-1 text-zinc-400 flex'>
                                        <Skeleton className='w-[100px] h-4 mt-2 bg-zinc-600'/>
                                    </div>
                                </CardContent>
                            </Skeleton>
                        )
                    }
                </section>
            </ScrollArea>
        )
    }

    return (
        <>
            <ScrollArea>
                <section className='flex overflow-x-auto overflow-y-hidden gap-2 h-30 bg-zinc-800 p-2 pb-3 rounded-lg'>
                    {
                        cards?.map((item, i) =>
                            <Card key={i} className='text-zinc-200 bg-zinc-700 overflow-hidden'>
                                <CardHeader className='w-[340px] h-content flex flex-col justify-between'>
                                    <CardTitle className='relative flex justify-between gap-5'>
                                        {item.occurrence}
                                        {
                                            <item.icon 
                                                data-positive-or-negative={item.data.includes('-')} 
                                                className='text-emerald-400 data-[positive-or-negative=true]:text-rose-400'
                                            />
                                        }
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <article className='pl-1 text-zinc-400 flex'>
                                        {item.data[0] === '-' ? 'Aumento' : 'Queda'} de 
                                        <article className='flex relative'>
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
                                            <span data-positive-or-negative={item.data.includes('-')} className='text-emerald-400 data-[positive-or-negative=true]:text-rose-400'>
                                                {' '}
                                                {
                                                    item.data.includes('-')
                                                        ? item.data.replace('-', '')
                                                        : item.data
                                                }
                                            </span>
                                        </article>
                                    </article>
                                </CardContent>
                            </Card>
                        )
                    }
                </section>
                <ScrollBar orientation='horizontal' className='px-2'/>
            </ScrollArea>
        </>
    )
}
