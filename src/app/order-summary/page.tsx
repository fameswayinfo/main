'use client'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import OrderSummary from '@/components/order-summary'
import { useSearchParams } from 'next/navigation'
import React from 'react'

const page = () => {
    const searchParams = useSearchParams();
    return (
        <div className='h-screen flex flex-col relative'>
            <GradientBackground />
            <Container className='h-full flex-1 relative '>
                <Navbar />
                <main className="h-full  flex-1 relative">
                    <OrderSummary />
                </main>
            </Container>
            {/* <Footer /> */}
        </div>
    )
}

export default page