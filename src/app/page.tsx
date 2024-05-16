import { CardSection } from '@/components/cards-occurrences/cards-slider'
import { MainBarChart } from '@/components/charts/main-bar-chart'
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
                        <section className='lg:grid lg:grid-cols-6'>
                            <section className='col-span-4'>
                                <MainBarChart />
                            </section>
                            <section className='col-span-2 border'></section>
                        </section>
                    </QueryClientWrapper>
                </main>
            }
        </>
    )
}
