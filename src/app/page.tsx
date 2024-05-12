import { CardSection } from '@/components/cards-occurrences/cards-slider'
import { MainLineChart } from '@/components/charts/main-line-chart'

export default function Home() {

    return (
        <main className='flex flex-col gap-4 w-screen min-h-dvh lg:h-vh bg-zinc-900 p-5'>
            <CardSection />
            <section className='flex flex-col lg:flex-row gap-4'>
                <MainLineChart />
            </section>
        </main>
    )
}
