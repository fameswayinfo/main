'use client'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import OrderSummary from '@/components/order-summary'
import Person from '@/components/person'
import { Heading, Lead, Subheading } from '@/components/text'
import React from 'react'

const FounderBadge = () => {
    return (
        <figcaption className="mt-10 flex gap-x-6">
            <img
                alt=""
                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=96&h=96&q=80"
                className="h-12 w-12 flex-none rounded-full bg-gray-50"
            />
            <div>
                <div className="text-base font-semibold text-gray-900">Rudransh Shrivastava</div>
                <div className="text-sm leading-6 text-gray-600">Founder of Famesway</div>
            </div>
        </figcaption>
    )
}

function ContactHeader() {
    return (
        <div className="mt-10 lg:mt-14">
            <Subheading className="ml-1">Contact us</Subheading>
            <Heading as="h1" className="mt-2">Let’s talk about your project</Heading>
            <Lead className="mt-6 max-w-3xl text-xl">
                Reach out for sales inquiries, partnerships, or career opportunities. We're here to assist via email, phone, or our contact form. Let's connect!
            </Lead>
        </div>
    )
}

export function ContactForm() {
    return (
        <div className="relative isolate bg-white ">

            <div className="mx-auto ">

                <div className="mt-14 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
                    <form action="#" method="POST" className="lg:flex-auto">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div>
                                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                    First name
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        id="first-name"
                                        name="first-name"
                                        type="text"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Last name
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        id="last-name"
                                        name="last-name"
                                        type="text"
                                        autoComplete="family-name"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="budget" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Budget
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        id="budget"
                                        name="budget"
                                        type="text"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="website" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Website
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        id="website"
                                        name="website"
                                        type="url"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Message
                                </label>
                                <div className="mt-2.5">
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        defaultValue={''}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mt-10">
                            {/* <button
                                type="submit"
                                className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Let’s talk
                            </button> */}

                            <Button className={'w-32'}>Let's Talk</Button>
                        </div>
                    </form>
                    <div className="lg:mt-6 lg:w-80 lg:flex-none">
                        {/* <img alt="asd" src="" className="h-12 w-auto" /> */}
                        <div className="h-12 w-auto border text-center">Logo Here</div>
                        <figure className="mt-10">
                            <blockquote className="text-lg font-semibold leading-8 text-gray-900">
                                <p>
                                    “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias
                                    molestiae. Numquam corrupti in laborum sed rerum et corporis.”
                                </p>
                            </blockquote>

                            <FounderBadge/>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    )
}

const page = () => {
    return (
        <div className=' flex flex-col relative overflow-x-hidden'>
            <Container className='h-full flex-1 relative'>
                <GradientBackground />
                <Navbar />
                <main className="h-full my-10 pb-10  flex-1 relative">
                    <ContactHeader />
                    <ContactForm />
                </main>
            </Container>
            <Footer />
        </div>
    )
}

export default page