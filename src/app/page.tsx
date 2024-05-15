import { CardSection } from '@/components/cards-occurrences/cards-slider'
import { MainLineChart } from '@/components/charts/main-line-chart'

export default function Home() {

    return (
        <> 
            {
                // <main className='flex flex-col gap-4 w-screen min-h-dvh lg:h-vh bg-zinc-900 p-5'>
                //     <CardSection />
                //     <section className='flex flex-col lg:flex-row lg:w-[70dvw] gap-4'>
                //         <MainLineChart />
                //         <section className='w-[25dvw] border'></section>
                //     </section>
                // </main>
            }
            {
                <main className='flex flex-col gap-4 w-screen min-h-dvh lg:h-vh bg-zinc-900 p-5'>
                    <CardSection />
                    <section className='grid grid-cols-6'>
                        <section className='col-span-4'>
                            <MainLineChart />
                        </section>
                        <section className='col-span-2 border'></section>
                    </section>
                </main>
            }
        </>
    )
}
