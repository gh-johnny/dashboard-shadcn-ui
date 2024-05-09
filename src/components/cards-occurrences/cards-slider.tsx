'use client'
import { CircleGauge, Droplets, LucideIcon, PersonStanding, TrafficCone } from 'lucide-react'
import { useEffect, useState } from 'react'

import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

import { CardData } from './card-data'
import { SkeletonCard } from './card-skeleton'

export function CardSection() {
    const [cards, setCards] = useState<{ occurrence: string; data: string; icon: LucideIcon; }[]>()
    const [hasData, setHasData] = useState(false)

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
                    data: String((Math.random() * (11 - -5) + -5).toFixed(1)),
                    icon: Droplets,
                },
                {
                    occurrence: 'Baixa Pressão',
                    data: String((Math.random() * (11 - -5) + -5).toFixed(1)),
                    icon: CircleGauge,
                },
                {
                    occurrence: 'Água Suja',
                    data: String((Math.random() * (11 - -5) + -5).toFixed(1)),
                    icon: Droplets,
                },
                {
                    occurrence: 'Buraco na Calçada',
                    data: String((Math.random() * (11 - -5) + -5).toFixed(1)),
                    icon: PersonStanding,
                },
                {
                    occurrence: 'Buraco na Rua',
                    data: String((Math.random() * (11 - -5) + -5).toFixed(1)),
                    icon: TrafficCone,
                },
            ])
        setHasData(true)
    }, [])

    return (
        <>
            <ScrollArea>
                <section className='flex overflow-x-auto overflow-y-hidden gap-2 h-30 bg-zinc-800 p-2 pb-3 rounded-lg'>
                    {!hasData
                        ? Array.from({ length: 6 }).map((_, i) =>
                            <SkeletonCard key={i} />
                        )
                        :
                        cards?.map((item, i) =>
                            <CardData key={i} cardItem={item} />
                        )}
                </section>
                <ScrollBar orientation='horizontal' className='px-2' />
            </ScrollArea>
        </>
    )
}
