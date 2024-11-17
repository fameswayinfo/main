'use client'
import { createContext, useContext, useState } from "react"
import { Button } from "./button"
import { Container } from "./container"
import { Gradient } from "./gradient"
import { LogoCloud } from "./logo-cloud"
import Tabs from "./pricing-tabs"
import { Heading, Lead, Subheading } from "./text"

import defaultPackages from "@/utils/data/packages"
import '@/utils/helper';
import PlusIcon from "./icons/plus-icon"

type PricingContext = {
    handleChangePackageTab: (id: number) => void;
    packages: object[];
    currentPackage: object
}

export const PricingContext = createContext<PricingContext | undefined>(undefined);

export function PricingProvider({ children }: { children: React.ReactNode }) {
    const [packages, setPackages] = useState(defaultPackages);

    const handleChangePackageTab = (id: number) => {
        setPackages((packages) => packages.map((pack, i) => {
            return { ...pack, current: id === pack.id }
        }))
    }

    const currentPackage = packages.find((pack, i) => pack.current) as object;

    return (
        <PricingContext.Provider value={{ handleChangePackageTab, packages, currentPackage }}>
            <div className="pt-10 pb-24">
                {children}
            </div>
        </PricingContext.Provider>
    )
}

export function usePricingContext() {
    const packages = useContext(PricingContext);

    if (!packages) {
        throw new Error('Context used outside of provider');
    }

    return {
        handleChangePackageTab: packages?.handleChangePackageTab,
        packages: packages?.packages,
        currentPackage: packages?.currentPackage
    }
}

function PricingHeader() {
    return (
        <Container className="mt-5 ">
            <Subheading className="ml-1">Pricing</Subheading>
            <Heading as="h1" className="mt-2">Pricing that grows with your team size.</Heading>
            <Lead className="mt-6 max-w-3xl text-xl">
                {"Flexible pricing that scales with your business needs—whether you're a small startup or an expanding team, we have a plan for you."}
            </Lead>
        </Container>
    )
}

function FeatureItem({
    description,
    disabled = false,
}: {
    description: string
    disabled?: boolean
}) {
    return (
        <li
            data-disabled={disabled ? true : undefined}
            className="flex items-start gap-4 text-sm/6 text-gray-950/75 data-[disabled]:text-gray-950/25"
        >
            <span className="inline-flex h-6 items-center">
                <PlusIcon className="size-[0.9375rem] shrink-0 fill-gray-950/25" />
            </span>
            {disabled && <span className="sr-only">Not included:</span>}
            {description}
        </li>
    )
}

function PricingCard({ tier }: { tier: any }) {
    const { name, description, priceMonthly, href, highlights } = tier;;

    return (
        <div className="-m-2 grid grid-cols-1 rounded-4xl shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:w-full max-lg:max-w-md">
            <div className="grid grid-cols-1 rounded-4xl p-2 shadow-md shadow-black/5">
                <div className="rounded-3xl bg-white p-10 pb-9 shadow-2xl ring-1 ring-black/5">
                    <Subheading>{name}</Subheading>
                    <p className="mt-2 text-sm/6 text-gray-950/75">{description}</p>
                    <div className="mt-8 flex items-center gap-4">
                        <div className="text-5xl font-medium text-gray-950">
                            ₹{priceMonthly}
                        </div>
                        <div className="text-sm/5 text-gray-950/75">
                            <p>INR</p>
                            <p>per month</p>
                        </div>
                    </div>
                    <div className="mt-8">
                        <Button href={href}>Start a free trial</Button>
                    </div>
                    <div className="mt-8">
                        <h3 className="text-sm/6 font-medium text-gray-950">
                            Start selling with:
                        </h3>
                        <ul className="mt-3 space-y-3">
                            {highlights.map((props: any, featureIndex: any) => (
                                <FeatureItem key={featureIndex} {...props} />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}


function PricingCards() {
    const { currentPackage } = usePricingContext() as any;

    return (
        <div className="relative py-20">
            <Gradient className="absolute inset-x-2 bottom-0 top-48 rounded-4xl ring-1 ring-inset ring-black/5" />
            <Container className="relative">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    {currentPackage.tiers.map((tier: any, tierIndex: number) => (
                        <PricingCard key={tierIndex} tier={tier} />
                    ))}
                </div>
                {/* <LogoCloud className="mt-24" /> */}
            </Container>
        </div>
    )
}

export default function Pricing() {
    return (
        <PricingProvider>
            <PricingHeader />
            <Container>
                <Tabs />
            </Container>
            <PricingCards />
        </PricingProvider>
    )
}