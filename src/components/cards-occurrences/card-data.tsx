import { ArrowBigDown,ArrowBigUp, LucideIcon } from 'lucide-react'

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'

interface CardDataProps {
    cardItem: { 
        occurrence: string
        data: string
        icon: LucideIcon
    }
}

export function CardData({ cardItem } : CardDataProps){
    return (
        <Card className='text-zinc-200 bg-zinc-700 overflow-hidden'>
            <CardHeader className='w-[340px] h-content flex flex-col justify-between'>
                <CardTitle className='relative flex justify-between gap-5'>
                    {cardItem.occurrence}
                    {
                        <cardItem.icon
                            data-positive-or-negative={cardItem.data.includes('-')}
                            className='text-emerald-400 data-[positive-or-negative=true]:text-rose-400'
                        />
                    }
                </CardTitle>
            </CardHeader>
            <CardContent>
                <article className='pl-1 text-zinc-400 flex'>
                    {cardItem.data[0] === '-' ? 'Aumento' : 'Queda'} de
                    <article className='flex relative'>
                        {cardItem.data[0] === '-'
                            ?
                            <>
                                <ArrowBigUp className='ml-1 w-5 text-rose-400' />
                                <div className='bg-rose-400 blur-[1.7rem] absolute top-0 right-4 w-4 h-4' />
                            </>
                            :
                            <>
                                <ArrowBigDown className='ml-1 w-5 text-emerald-400' />
                                <div className='bg-emerald-400 blur-[1.7rem] absolute top-0 right-4 w-4 h-4' />
                            </>
                        }
                        <span data-positive-or-negative={cardItem.data.includes('-')} className='text-emerald-400 data-[positive-or-negative=true]:text-rose-400'>
                            {' '}
                            {cardItem.data.includes('-')
                                ? cardItem.data.replace('-', '')
                                : cardItem.data
                            }
                        </span>
                    </article>
                </article>
            </CardContent>
        </Card>
    )
}
