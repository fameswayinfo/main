import { UserIcon, VideoCameraIcon, GlobeAmericasIcon, DevicePhoneMobileIcon } from "@heroicons/react/20/solid";


const packages = [
    {
        id: 1,
        icon: GlobeAmericasIcon,  // Replace with the correct icon
        title: "Social Media",
        current: true,
        tiers: [
            {
                name: 'Basic Social Media' as const,
                slug: 'basic',
                description: 'Essential social media strategy and development services.',
                priceMonthly: 14999,
                href: '#',
                highlights: [
                    { description: '8 Posts + 8 Stories + 5 Reels' },
                    { description: 'Instagram Optimization (Bio, Keywords)' },
                    { description: 'Meta Ads Design' },
                    { description: 'Upload to Instagram, Facebook, YouTube' },
                ],
                features: [
                    { section: 'Content Creation', name: 'Posts', value: '8 Posts + 8 Stories + 5 Reels' },
                    { section: 'Strategy', name: 'Instagram Optimization', value: 'Bio, Keywords' },
                    { section: 'Ads', name: 'Meta Ads Design', value: true },
                    { section: 'Posting', name: 'Upload to Platforms', value: ['Instagram', 'Facebook', 'YouTube'] },
                ],
            },
            {
                name: 'Advanced Social Media' as const,
                slug: 'advanced',
                description: 'Enhanced social media services for growth.',
                priceMonthly: 24999,
                href: '#',
                highlights: [
                    { description: '8 Posts + 8 Stories + 12 Reels' },
                    { description: 'Instagram Optimization (Bio, Keywords)' },
                    { description: 'Meta Ads Design' },
                    { description: 'Upload to Instagram, Facebook, YouTube' },
                    { description: 'Photography & Videography Shoots (Bhopal only)' },
                ],
                features: [
                    { section: 'Content Creation', name: 'Posts', value: '8 Posts + 8 Stories + 12 Reels' },
                    { section: 'Strategy', name: 'Instagram Optimization', value: 'Bio, Keywords' },
                    { section: 'Ads', name: 'Meta Ads Design', value: true },
                    { section: 'Posting', name: 'Upload to Platforms', value: ['Instagram', 'Facebook', 'YouTube'] },
                    { section: 'Extras', name: 'Photography & Videography Shoots', value: 'Bhopal only' },
                ],
            },
            {
                name: 'Premium Social Media' as const,
                slug: 'premium',
                description: 'Complete social media strategy with added perks.',
                priceMonthly: 49999,
                href: '#',
                highlights: [
                    { description: '15 Posts + 30 Stories + 24 Reels' },
                    { description: 'Instagram Optimization (Bio, Keywords)' },
                    { description: 'Meta Ads Design' },
                    { description: 'Upload to Instagram, Facebook, YouTube' },
                    { description: 'Photography & Videography Shoots (Bhopal only)' },
                    { description: 'Google My Business Handling' },
                ],
                features: [
                    { section: 'Content Creation', name: 'Posts', value: '15 Posts + 30 Stories + 24 Reels' },
                    { section: 'Strategy', name: 'Instagram Optimization', value: 'Bio, Keywords' },
                    { section: 'Ads', name: 'Meta Ads Design', value: true },
                    { section: 'Posting', name: 'Upload to Platforms', value: ['Instagram', 'Facebook', 'YouTube'] },
                    { section: 'Extras', name: 'Photography & Videography Shoots', value: 'Bhopal only' },
                    { section: 'Extras', name: 'Google My Business Handling', value: true },
                ],
            },
        ],
    },

    {
        id: 2,
        icon: VideoCameraIcon, // Replace with appropriate icon
        title: "Video Editing",
        current: false,
        tiers: [
            {
                name: 'Basic Video Editing' as const,
                slug: 'basic',
                description: 'Essential video editing services for simple projects.',
                priceMonthly: 1199,
                href: '#',
                highlights: [
                    { description: 'Up to 5 minutes video editing' },
                    { description: 'Basic cuts and transitions' },
                    { description: 'Royalty-free music' },
                    { description: 'Simple text and titles' },
                    { description: '1 revision' },
                    { description: 'Basic After Effects templates' }, // Added After Effects
                ],
                features: [
                    { section: 'Editing', name: 'Video Length', value: 'Up to 5 minutes' },
                    { section: 'Effects', name: 'Transitions', value: 'Basic' },
                    { section: 'Effects', name: 'After Effects Templates', value: 'Basic' }, // After Effects feature
                    { section: 'Audio', name: 'Royalty-free Music', value: true },
                    { section: 'Text', name: 'Simple Titles', value: true },
                    { section: 'Revisions', name: 'Revisions Allowed', value: 1 },
                ],
            },
            {
                name: 'Standard Video Editing' as const,
                slug: 'standard',
                description: 'Advanced video editing for moderate projects.',
                priceMonthly: 1499,
                href: '#',
                highlights: [
                    { description: 'Up to 10 minutes video editing' },
                    { description: 'Advanced transitions and effects' },
                    { description: 'Color correction' },
                    { description: 'Royalty-free music and sound effects' },
                    { description: '2 revisions' },
                    { description: 'Intermediate After Effects usage' }, // Added After Effects
                ],
                features: [
                    { section: 'Editing', name: 'Video Length', value: 'Up to 10 minutes' },
                    { section: 'Effects', name: 'Transitions', value: 'Advanced' },
                    { section: 'Effects', name: 'After Effects Usage', value: 'Intermediate' }, // After Effects feature
                    { section: 'Effects', name: 'Color Correction', value: true },
                    { section: 'Audio', name: 'Royalty-free Music and Sound Effects', value: true },
                    { section: 'Revisions', name: 'Revisions Allowed', value: 2 },
                ],
            },
            {
                name: 'Advanced Video Editing' as const,
                slug: 'advanced',
                description: 'Comprehensive video editing for complex projects.',
                priceMonthly: 1799,
                href: '#',
                highlights: [
                    { description: 'Up to 15 minutes video editing' },
                    { description: 'Advanced transitions, effects, and animations' },
                    { description: 'Color grading and corrections' },
                    { description: 'Royalty-free music and custom sound effects' },
                    { description: '3 revisions' },
                    { description: 'Advanced After Effects usage' }, // Added After Effects
                ],
                features: [
                    { section: 'Editing', name: 'Video Length', value: 'Up to 15 minutes' },
                    { section: 'Effects', name: 'Transitions and Animations', value: 'Advanced' },
                    { section: 'Effects', name: 'After Effects Usage', value: 'Advanced' }, // After Effects feature
                    { section: 'Effects', name: 'Color Grading and Corrections', value: true },
                    { section: 'Audio', name: 'Custom Sound Effects', value: true },
                    { section: 'Revisions', name: 'Revisions Allowed', value: 3 },
                ],
            },
            {
                name: 'Premium Video Editing' as const,
                slug: 'premium',
                description: 'Full video editing package for professional-level projects.',
                priceMonthly: 1999,
                href: '#',
                highlights: [
                    { description: 'Up to 20 minutes video editing' },
                    { description: 'Expert transitions, effects, and animations' },
                    { description: 'Professional color grading and corrections' },
                    { description: 'Custom music and sound design' },
                    { description: 'Unlimited revisions' },
                    { description: 'Expert After Effects usage' }, // Added After Effects
                ],
                features: [
                    { section: 'Editing', name: 'Video Length', value: 'Up to 20 minutes' },
                    { section: 'Effects', name: 'Expert Transitions and Animations', value: true },
                    { section: 'Effects', name: 'After Effects Usage', value: 'Expert' }, // After Effects feature
                    { section: 'Effects', name: 'Professional Color Grading', value: true },
                    { section: 'Audio', name: 'Custom Music and Sound Design', value: true },
                    { section: 'Revisions', name: 'Revisions Allowed', value: 'Unlimited' },
                ],
            },
            {
                name: 'Custom Video Editing' as const,
                slug: 'custom',
                description: 'Tailored video editing services to fit your specific needs.',
                priceMonthly: 'Custom', // Custom pricing
                href: '#',
                highlights: [
                    { description: 'Custom video length' },
                    { description: 'Custom effects, transitions, and animations' },
                    { description: 'Professional color grading and corrections' },
                    { description: 'Custom music, sound design, and voiceovers' },
                    { description: 'Unlimited revisions' },
                    { description: 'Fully customizable After Effects usage' }, // Added After Effects
                ],
                features: [
                    { section: 'Editing', name: 'Video Length', value: 'Custom' },
                    { section: 'Effects', name: 'Transitions and Animations', value: 'Custom' },
                    { section: 'Effects', name: 'After Effects Usage', value: 'Fully Customizable' }, // After Effects feature
                    { section: 'Effects', name: 'Professional Color Grading', value: true },
                    { section: 'Audio', name: 'Custom Music and Sound Design', value: true },
                    { section: 'Revisions', name: 'Revisions Allowed', value: 'Unlimited' },
                ],
            },
        ],
    },
    {
        id: 3,
        icon: DevicePhoneMobileIcon,
        title: "Web & App Development",
        current: false,
        tiers: [
            {
                name: 'Basic Development' as const,
                slug: 'basic',
                description: 'Perfect for startups or small businesses looking for an online presence.',
                priceMonthly: 7000,
                href: '#',
                highlights: [
                    { description: 'Responsive Web Design' },
                    { description: 'Basic SEO Optimization' },
                    { description: 'Up to 5 Static Pages' },
                    { description: 'Basic Support', disabled: true },
                    { description: 'App Development', disabled: true },
                ],
                features: [
                    { section: 'Development', name: 'Web Pages', value: 5 },
                    { section: 'Development', name: 'SEO Optimization', value: 'Basic' },
                    { section: 'Development', name: 'Responsive Design', value: true },
                    { section: 'Development', name: 'Hosting Support', value: true },
                    { section: 'Support', name: 'Email Support', value: true },
                    { section: 'Support', name: 'App Development', value: false },
                ],
            },
            {
                name: 'Advanced Development' as const,
                slug: 'advanced',
                description: 'Ideal for growing businesses with more complex needs.',
                priceMonthly: 15000,
                href: '#',
                highlights: [
                    { description: 'Up to 10 Pages or Screens' },
                    { description: 'Advanced SEO Optimization' },
                    { description: 'Custom API Integration' },
                    { description: 'Basic App Development' },
                    { description: 'Ongoing Support' },
                ],
                features: [
                    { section: 'Development', name: 'Web Pages / App Screens', value: 10 },
                    { section: 'Development', name: 'SEO Optimization', value: 'Advanced' },
                    { section: 'Development', name: 'API Integration', value: 'Custom' },
                    { section: 'Development', name: 'App Development', value: 'Basic' },
                    { section: 'Support', name: 'Email Support', value: true },
                    { section: 'Support', name: 'Ongoing Support', value: true },
                ],
            },
            {
                name: 'Premium Development' as const,
                slug: 'premium',
                description: 'Comprehensive solution for larger businesses and custom applications.',
                priceMonthly: 25000,
                href: '#',
                highlights: [
                    { description: 'Unlimited Pages or App Screens' },
                    { description: 'E-commerce Integration' },
                    { description: 'Full App Development' },
                    { description: 'Custom Design & Features' },
                    { description: 'Priority Support' },
                ],
                features: [
                    { section: 'Development', name: 'Web Pages / App Screens', value: 'Unlimited' },
                    { section: 'Development', name: 'E-commerce Integration', value: true },
                    { section: 'Development', name: 'Custom Design', value: true },
                    { section: 'Development', name: 'App Development', value: 'Full' },
                    { section: 'Support', name: 'Priority Support', value: true },
                ],
            },
            {
                name: 'Enterprise Development' as const,
                slug: 'enterprise',
                description: 'Tailored solutions for enterprises needing full-scale web and app services.',
                priceMonthly: 50000,
                href: '#',
                highlights: [
                    { description: 'Custom Web & App Development' },
                    { description: 'Scalable Infrastructure' },
                    { description: 'Advanced Security Features' },
                    { description: 'Full-stack Development' },
                    { description: '24/7 Dedicated Support' },
                ],
                features: [
                    { section: 'Development', name: 'Web Pages / App Screens', value: 'Unlimited' },
                    { section: 'Development', name: 'Scalable Infrastructure', value: true },
                    { section: 'Development', name: 'Security Features', value: 'Advanced' },
                    { section: 'Development', name: 'Full-stack Development', value: true },
                    { section: 'Support', name: 'Dedicated Support', value: true },
                ],
            },
            {
                name: 'Custom Development' as const,
                slug: 'custom',
                description: 'Fully customizable solution tailored to your specific needs.',
                priceMonthly: 'Custom',
                href: '#',
                highlights: [
                    { description: 'Fully Customizable Web & App Development' },
                    { description: 'Flexible Pricing' },
                    { description: 'Tailored Features and Integrations' },
                    { description: 'Custom Support Plan' },
                ],
                features: [
                    { section: 'Development', name: 'Custom Features', value: 'As per requirement' },
                    { section: 'Development', name: 'API Integrations', value: 'As per requirement' },
                    { section: 'Support', name: 'Custom Support', value: 'As per requirement' },
                ],
            },
        ],
    }
]

export default packages;