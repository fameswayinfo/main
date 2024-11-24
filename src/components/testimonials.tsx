'use client'

import * as Headless from '@headlessui/react'
import { ArrowLongRightIcon } from '@heroicons/react/20/solid'
import { clsx } from 'clsx'
import {
  MotionValue,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  type HTMLMotionProps,
} from 'framer-motion'
import { useCallback, useLayoutEffect, useRef, useState } from 'react'
import useMeasure, { type RectReadOnly } from 'react-use-measure'
import { Container } from './container'
import { Link } from './link'
import { Heading, Subheading } from './text'

const testimonials = [
  {
    img: '/testimonials/rocky-mohan.jpg',
    name: 'Rocky Mohan',
    title: 'Old Monk Ambassador',
    quote: 'Famesway transformed our video content with expert editing and timely uploads!',
  },
  {
    img: '/testimonials/digraj-singh-rajput.jpg',
    name: 'Digraj Singh Rajput',
    title: 'Co-founder of Next Toppers',
    quote: 'Their video editing and YouTube management significantly boosted our channel\'s reach!',
  },
  {
    img: '/testimonials/dr-farhat-khan.jpg',
    name: 'Dr. Farhat Khan',
    title: 'Dermatologist',
    quote: 'Their professional shoots captured our work beautifully—highly recommended!',
  },
  {
    img: '/testimonials/dr-amit-pandey.webp',
    name: 'Dr. Amit Pandey',
    title: 'Dermatologist',
    quote: 'Famesway\'s shoots and social media management increased our patient engagement!',
  },

  {
    img: '/testimonials/hospitalble-couch.jpg',
    name: 'Hospitable couch',
    title: 'Organization',
    quote: 'Professional shoots and social media management have elevated our brand presence!',
  },
  {
    img: '/testimonials/lake-view-nursery.jpg',
    name: 'Lake View Nursery ',
    title: 'Plant Nursey',
    quote: 'Famesway\'s professional shoots showcased our nursery perfectly. A fantastic !',
  },
  {
    img: '/testimonials/enchante-salon.jpg',
    name: 'Enchante Salon ',
    title: 'Unisex Salon',
    quote: 'Their professional shoots highlighted our services beautifully. Excellent work!',
  },
  {
    img: '/testimonials/dr-sweta.jpg',
    name: 'Dr. Sweta',
    title: 'Dermatologist',
    quote: 'Expert shoots and social media management helped us connect with more clients!',
  },
  {
    img: '/testimonials/namaste-mytho.jpg',
    name: 'Namaste Mytho',
    title: 'Social Media Page',
    quote: 'Famesway\'s video editing and social media management truly brought my vision to life!',
  },
  {
    img: '/testimonials/bo-tree.jpg',
    name: 'Bo Tree',
    title: 'Therapy center',
    quote: 'The carousel and posts created by Famesway effectively showcased our offerings!',
  },
  {
    img: '/testimonials/divine-cosmetic.jpg',
    name: 'Divine Cosmetic Clinic',
    title: 'Skincare Organization',
    quote: 'Their professional shoots and edits have elevated my online presence significantly!',
  },
];

function TestimonialCard({
  name,
  title,
  img,
  children,
  bounds,
  scrollX,
  ...props
}: {
  img: string
  name: string
  title: string
  children: React.ReactNode
  bounds: RectReadOnly
  scrollX: MotionValue<number>
} & HTMLMotionProps<'div'>) {
  let ref = useRef<HTMLDivElement | null>(null)

  let computeOpacity = useCallback(() => {
    let element = ref.current
    if (!element || bounds.width === 0) return 1

    let rect = element.getBoundingClientRect()

    if (rect.left < bounds.left) {
      let diff = bounds.left - rect.left
      let percent = diff / rect.width
      return Math.max(0.5, 1 - percent)
    } else if (rect.right > bounds.right) {
      let diff = rect.right - bounds.right
      let percent = diff / rect.width
      return Math.max(0.5, 1 - percent)
    } else {
      return 1
    }
  }, [ref, bounds.width, bounds.left, bounds.right])

  let opacity = useSpring(computeOpacity(), {
    stiffness: 154,
    damping: 23,
  })

  useLayoutEffect(() => {
    opacity.set(computeOpacity())
  }, [computeOpacity, opacity])

  useMotionValueEvent(scrollX, 'change', () => {
    opacity.set(computeOpacity())
  })

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      {...props}
      className="relative flex aspect-[9/16] w-72 shrink-0 snap-start scroll-ml-[var(--scroll-padding)] flex-col justify-end overflow-hidden rounded-3xl sm:aspect-[3/4] sm:w-96"
    >
      <img
        alt=""
        src={img}
        className="absolute inset-x-0 top-0 aspect-square w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black from-[calc(7/16*100%)] ring-1 ring-inset ring-gray-950/10 sm:from-25%"
      />
      <figure className="relative p-10 ">
        <blockquote>
          <p className="relative text-xl/7 text-white">
            <span aria-hidden="true" className="absolute -translate-x-full">
              “
            </span>
            {children}
            <span aria-hidden="true" className="absolute">
              ”
            </span>
          </p>
        </blockquote>
        <figcaption className="mt-6 border-t border-white/20 pt-6">
          <p className="text-sm/6 font-medium text-white">{name}</p>
          <p className="text-sm/6 font-medium">
            <span className="bg-gradient-to-r from-[#fff1be] from-[28%] via-[#ee87cb] via-[70%] to-[#b060ff] bg-clip-text text-transparent">
              {title}
            </span>
          </p>
        </figcaption>
      </figure>
    </motion.div>
  )
}

function CallToAction() {
  return (
    <div>
      <p className="max-w-lg text-sm/6 text-gray-600">
        Join us to elevate your brand with stunning shoots, engaging social media, cutting-edge websites, and powerful digital marketing!
      </p>
      <div className="mt-2">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 text-sm/6 font-medium text-pink-600"
        >
          Get started
          <ArrowLongRightIcon className="size-5" />
        </Link>
      </div>
    </div>
  )
}

export function Testimonials() {
  let scrollRef = useRef<HTMLDivElement | null>(null)
  let { scrollX } = useScroll({ container: scrollRef })
  let [setReferenceWindowRef, bounds] = useMeasure()
  let [activeIndex, setActiveIndex] = useState(0)

  useMotionValueEvent(scrollX, 'change', (x) => {
    setActiveIndex(Math.floor(x / scrollRef.current!.children[0].clientWidth))
  })

  function scrollTo(index: number) {
    let gap = 32
    let width = (scrollRef.current!.children[0] as HTMLElement).offsetWidth
    scrollRef.current!.scrollTo({ left: (width + gap) * index })
  }

  return (
    <div id='reviews' className="overflow-hidden py-32">
      <Container>
        <div ref={setReferenceWindowRef}>
          <Subheading>What everyone is saying</Subheading>
          <Heading as="h3" className="mt-2">
            Trusted by professionals.
          </Heading>
        </div>
      </Container>
      <div
        ref={scrollRef}
        className={clsx([
          'mt-16 flex gap-8 px-[var(--scroll-padding)]',
          '[scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
          'snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth',
          '[--scroll-padding:max(theme(spacing.6),calc((100vw-theme(maxWidth.2xl))/2))] lg:[--scroll-padding:max(theme(spacing.8),calc((100vw-theme(maxWidth.7xl))/2))]',
        ])}
      >
        {testimonials.map(({ img, name, title, quote }, testimonialIndex) => (
          <TestimonialCard
            key={testimonialIndex}
            name={name}
            title={title}
            img={img}
            bounds={bounds}
            scrollX={scrollX}
            onClick={() => scrollTo(testimonialIndex)}
          >
            {quote}
          </TestimonialCard>
        ))}
        <div className="w-[42rem] shrink-0 sm:w-[54rem]" />
      </div>
      <Container className="mt-16">
        <div className="flex justify-between">
          <CallToAction />
          <div className="hidden sm:flex sm:gap-2">
            {testimonials.map(({ name }, testimonialIndex) => (
              <Headless.Button
                key={testimonialIndex}
                onClick={() => scrollTo(testimonialIndex)}
                data-active={
                  activeIndex === testimonialIndex ? true : undefined
                }
                aria-label={`Scroll to testimonial from ${name}`}
                className={clsx(
                  'size-2.5 rounded-full border border-transparent bg-gray-300 transition',
                  'data-[active]:bg-gray-400 data-[hover]:bg-gray-400',
                  'forced-colors:data-[active]:bg-[Highlight] forced-colors:data-[focus]:outline-offset-4',
                )}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}
