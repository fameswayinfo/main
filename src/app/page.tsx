import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import ExecutiveMessage from '@/components/executive-message'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Keyboard } from '@/components/keyboard'
import { Link } from '@/components/link'
import { LinkedAvatars } from '@/components/linked-avatars'
import { LogoCloud } from '@/components/logo-cloud'
import { LogoCluster } from '@/components/logo-cluster'
import { LogoTimeline } from '@/components/logo-timeline'
import { Map } from '@/components/map'
import { Navbar } from '@/components/navbar'
import Pricing from '@/components/pricing'
import { Screenshot } from '@/components/screenshot'
import { Testimonials } from '@/components/testimonials'
import { Heading, Subheading } from '@/components/text'
import { ChevronRightIcon } from '@heroicons/react/16/solid'
import type { Metadata } from 'next'
import Image from 'next/image'

import { auth, signOut } from "@/auth";


export const metadata: Metadata = {
  description:
    'famesway helps you sell more by revealing sensitive information about your customers.',
};

function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-inset ring-black/5" />
      <Container className="relative">
        <Navbar
          banner={
            <Link
              href="/contact"
              className="flex items-center gap-1 rounded-full bg-fuchsia-950/35 px-3 py-0.5 text-sm/6 font-medium text-white data-[hover]:bg-fuchsia-950/30"
            >
              🚀 Transform your clinic today
              <ChevronRightIcon className="size-4" />
            </Link>
          }
        />
        <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-48 md:pt-32">
          <h1 className="font-display text-balance text-6xl/[0.9] font-medium tracking-tight text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.9]">
            We power clinics with tech & social.
          </h1>
          <p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            From cutting-edge technology to viral social media - we handle it all so you can focus on patients.
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="/contact">{"Let's talk"}</Button>
            <Button variant="secondary" href="/pricing">
              View packages
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
function FoundersDesk() {
  return (
    <ExecutiveMessage
      imageSrc="/rudransh.png"
      name="Rudransh Shrivastava"
      quote="Rudransh Shrivastava is a seasoned Business Analyst and Social Media Expert with extensive experience in building businesses, enhancing their digital presence, and scaling them effectively through strategic digital solutions. He possesses sound knowledge in Excel, SQL, Power BI, and Tableau, enabling data-driven decision-making and impactful business insights. Additionally, he is an expert in Meta Ads and Google Ads, leveraging targeted advertising to drive growth and maximize ROI."
      title="Founder & CEO"
    />
  );
}

function DummyImage() {
  return (
    <div className="bg-gray-50 h-full flex items-center justify-center font-semibold">
      DUMMY IMG
    </div>
  );
}

function BentoSection() {
  return (
    <Container>
      <Subheading>What we offer</Subheading>
      <Heading as="h3" className="mt-2 max-w-3xl">
        We are doing only five things. but we make them as good as we can. that’s it.
      </Heading>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          eyebrow="Development"
          title="Website & App Development"
          description="Innovative, user-friendly websites and apps tailored to your brand’s needs, ensuring smooth functionality and stunning design."
          graphic={
            <div className="flex size-full pl-10 pt-10">
              <Keyboard highlighted={['LeftCommand', 'LeftShift', 'D']} />
            </div>
          }
          className="lg:col-span-3 lg:rounded-bl-4xl"
        />
        <BentoCard
          eyebrow="Socials"
          title="Social Media Management"
          description="We create engaging content, build authentic connections, and help you grow your brand’s presence across all social platforms."
          graphic={<LogoCluster />}
          fade={['bottom']}
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
        />
        <BentoCard
          eyebrow="Graphics"
          title="Video Editing"
          description="Expert video editing that brings your vision to life, with creative storytelling and high-quality production for every project."
          graphic={
            <Image
              src="/offer/video-editing.jpg"
              width={1000}
              height={1000}
              alt=""
              className='w-full h-full object-contain'
            />
          }
          fade={['bottom']}
          className="lg:col-span-2 lg:rounded-tr-4xl"
        />


        
        <BentoCard
          eyebrow="Source"
          title="Linkedin Management"
          description="Elevate your professional profile and boost visibility with our strategic, results-driven LinkedIn management services."
          graphic={
            <Image
              src="/offer/linkedin.jpg"
              width={1000}
              height={1000}
              alt=""
              className='w-full h-full object-contain'
            />
          }
          className="lg:col-span-2"
        />
        <BentoCard
          eyebrow="Limitless"
          title="Studio for rent"
          description="A fully-equipped studio, available for all your creative needs—photography, video shoots, and more, designed for professionals."
          graphic={
            <Image
              src="/offer/studio-rent.jpg"
              width={1000}
              height={1000}
              alt=""
              className='w-full h-full object-contain'
            />
          }
          className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
        />
      </div>
    </Container>
  );
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <div className="bg-gradient-to-b from-white from-50% to-gray-100 py-32">
          <BentoSection />
        </div>
      </main>
      <Testimonials />
      <Pricing />
      <FoundersDesk />
      <Footer />
    </div>
  );
}