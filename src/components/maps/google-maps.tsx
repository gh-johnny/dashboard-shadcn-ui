'use client'

import { Marker, MarkerClusterer } from '@googlemaps/markerclusterer'
import {
    AdvancedMarker,
    APIProvider,
    Map,
    useMap
} from '@vis.gl/react-google-maps'
import { Droplet } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

type TData = { key: string, lat: number, lng: number }

const mapData: TData[] = [
    { key: 'Ash', lat: -23.5505, lng: -46.6333 },
    { key: 'Ash', lat: -23.5835, lng: -46.6733 },
    { key: 'Ash', lat: -23.5385, lng: -46.6133 },
]

export function GoogleMapsMap() {
    return (
        <div className='h-full w-full'>
            <APIProvider apiKey={process.env.NEXT_PUBLIC_MAPS_API_KEY}>
                <Map
                    defaultZoom={10}
                    disableDefaultUI={true}
                    zoomControl={true}
                    fullscreenControl={true}
                    defaultCenter={{ lat: -23.5505, lng: -46.6333 }}
                    mapId={process.env.NEXT_PUBLIC_MAPS_ID}
                >
                    <Markers data={mapData} />
                </Map>
            </APIProvider>
        </div>
    )
}

function Markers({ data }: { data: TData[] }) {
    const map = useMap()
    const [markers, setMarkers] = useState<{ [key: string]: Marker }>({})

    const clusterer = useRef<MarkerClusterer | null>(null)

    const setMarkerRef = (marker: Marker | null, key: string) => {
        if (marker && markers[key]) return
        if (!marker && !markers[key]) return

        setMarkers(prev => {
            if (marker) {
                return { ...prev, [key]: marker }
            }
            const newMarkers = { ...prev }
            delete newMarkers[key]
            return newMarkers
        })
    }

    useEffect(() => {
        if (!map) return
        if (!clusterer.current) {
            clusterer.current = new MarkerClusterer({ map })
        }
    }, [map])

    useEffect(() => {
        clusterer.current?.clearMarkers()
        clusterer.current?.addMarkers(Object.values(markers))
    }, [markers])

    return (
        <>
            {data.map((point, i) =>
                <AdvancedMarker
                    key={point.key}
                    ref={marker => setMarkerRef(marker, point.key)}
                    position={point}
                >
                    {i === 1 ? <Droplet className='text-rose-600' />
                        : <Droplet className='text-emerald-600' />
                    }
                </AdvancedMarker>
            )}
        </>
    )
}
