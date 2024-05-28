import { CardSection } from '@/components/cards-occurrences/cards-slider'
import { MainBarChart } from '@/components/charts/main-bar-chart'
import { GoogleMapsMap } from '@/components/maps/google-maps'
import FilterMobileSection from '@/components/mobile/filter-mobile-section'
import QueryClientWrapper from '@/contexts/query-client-wrapper'

export default function Home() {

    return (
        <>
            {
                <main className='min-w-[320px] flex flex-col gap-4 w-screen min-h-dvh lg:h-vh p-5'>
                    <CardSection />
                    <QueryClientWrapper>
                        <FilterMobileSection />
                        <section className='lg:grid lg:grid-cols-6 gap-4'>
                            <section className='col-span-4'>
                                <MainBarChart />
                            </section>
                            <section className='overflow-hidden bg-zinc-800 col-span-2 rounded-lg'>
                                <GoogleMapsMap />
                            </section>
                        </section>
                    </QueryClientWrapper>
                </main>
            }
        </>
    )
}
