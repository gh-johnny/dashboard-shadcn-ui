import { CardContent,CardHeader } from '../ui/card'
import { Skeleton } from '../ui/skeleton'

export function SkeletonCard(){
    return (
        <Skeleton className='text-zinc-200 bg-zinc-700 overflow-hidden'>
            <CardHeader className='w-[340px] h-content flex flex-col justify-between'>
                <div className='relative flex justify-between gap-5'>
                    <Skeleton className='w-[200px] h-6 bg-zinc-600' />
                    <Skeleton
                        className='w-6 h-6 bg-zinc-600 rounded-full'
                    />
                </div>
            </CardHeader>
            <CardContent>
                <div className='pl-1 text-zinc-400 flex'>
                    <Skeleton className='w-[100px] h-4 mt-2 bg-zinc-600' />
                </div>
            </CardContent>
        </Skeleton>
    )
}
