'use client'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import OrderSummary from '@/components/order-summary'
import { Heading, Lead, Subheading } from '@/components/text'
import React from 'react'

function CompanyHeader() {
    return (
        <div className="mt-10 lg:mt-14">
            <Subheading className="ml-1">Payment</Subheading>
            <Heading as="h1" className="mt-2">Order Details</Heading>
            <Lead className="mt-6 max-w-3xl text-xl">
            Review your order details below, including products, quantities, and total cost. Confirm everything looks correct before proceeding to payment.
            </Lead>
        </div>
    )
}

const page = () => {
    return (
        <div className='h-screen flex flex-col relative overflow-x-hidden'>
            <Container className='h-full flex-1 relative '>
                <GradientBackground />
                <Navbar />
                <main className="h-full  flex-1 relative">
                    <CompanyHeader />
                    <OrderSummary />
                </main>
            </Container>
            {/* <Footer /> */}
        </div>
    )
}

export default page