import { Button } from "./button"
import { Gradient } from "./gradient"

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
const products = [
    {
        id: 1,
        name: 'High Wall Tote',
        href: '#',
        price: '$210.00',
        color: 'White and black',
        size: '15L',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/checkout-page-07-product-01.jpg',
        imageAlt: '',
    },
    // More products...
]

export default function OrderSummary() {
    return (
        <div className="mt-5">

            <header className="relative mx-auto bg-transparent py-6 lg:grid lg:grid-cols-2 ">
            </header>

            <main className="relative mx-auto grid w-full grid-cols-1 gap-x-16 lg:grid-cols-2 ">
                <h1 className="sr-only">Checkout</h1>

                <section
                    aria-labelledby="summary-heading"
                    className=" pb-12 pt-6 text-gray-700 md:px-10 lg:col-start-2 lg:row-start-1 lg:mx-auto lg:w-full lg:max-w-8xl lg:px-0 lg:pb-24 lg:pt-0"
                >
                    <div className="mx-auto relative max-w-2xl px-4 lg:max-w-none lg:p-10 border rounded-2xl  h-full inset-0 bottom-0 bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-[#ffffff] from-[28%]  via-[70%] to-[#fff3fb] sm:bg-[linear-gradient(145deg,var(--tw-gradient-stops))]">

                        <h2 id="summary-heading" className="sr-only">
                            Order summary
                        </h2>

                        <dl>
                            <dt className="text-2xl font-medium text-gray-700">Amount due</dt>
                            <dd className="mt-1 text-3xl font-bold tracking-tight text-gray-900">$232.00</dd>
                        </dl>

                        <ul role="list" className="divide-y divide-gray-200 text-sm font-medium">
                            {products.map((product) => (
                                <li key={product.id} className="flex items-start space-x-4 py-6">
                                    {/* <img
                                        alt={product.imageAlt}
                                        src={product.imageSrc}
                                        className="h-20 w-20 flex-none rounded-md object-cover object-center"
                                    /> */}
                                    <div className="flex-auto space-y-1">
                                        <h3 className="text-gray-900">{product.name}</h3>
                                        {/* <p className="text-gray-700">{product.color}</p> */}
                                        {/* <p className="text-gray-700">{product.size}</p> */}
                                    </div>
                                    <p className="flex-none text-base font-medium text-gray-900">{product.price}</p>
                                </li>
                            ))}
                        </ul>

                        <dl className="space-y-6 border-gray-200 pt-6 text-sm font-medium">
                            {/* <div className="flex items-center justify-between">
                                <dt className="text-gray-700">Subtotal</dt>
                                <dd className="text-gray-900">$570.00</dd>
                            </div> */}

                            {/* <div className="flex items-center justify-between">
                                <dt className="text-gray-700">Shipping</dt>
                                <dd className="text-gray-900">$25.00</dd>
                            </div> */}

                            {/* <div className="flex items-center justify-between">
                                <dt className="text-gray-700">Taxes</dt>
                                <dd className="text-gray-900">$47.60</dd>
                            </div> */}

                            <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                                <dt className="text-base font-medium text-gray-900">Total</dt>
                                <dd className="text-base font-medium text-gray-900">$742.60</dd>
                            </div>
                        </dl>
                    </div>
                </section>

                <section
                    aria-labelledby="payment-and-shipping-heading"
                    className="py-16 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:w-full lg:max-w-2xl lg:pb-24 lg:pt-0"
                >
                    <h2 id="payment-and-shipping-heading" className="sr-only">
                        Payment and shipping details
                    </h2>

                    <form>
                        <div className="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
                            <div>
                                <h3 id="contact-info-heading" className="text-lg font-medium text-gray-900">
                                    Contact information
                                </h3>

                                <div className="mt-6">
                                    <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                        Email address
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="email-address"
                                            name="email-address"
                                            type="email"
                                            autoComplete="email"
                                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10">
                                <h3 id="shipping-heading" className="text-lg font-medium text-gray-900">
                                    Shipping address
                                </h3>

                                <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-3">
                                    <div className="sm:col-span-3">
                                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                                            Address
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                id="address"
                                                name="address"
                                                type="text"
                                                autoComplete="street-address"
                                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                            City
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                id="city"
                                                name="city"
                                                type="text"
                                                autoComplete="address-level2"
                                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                                            State / Province
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                id="region"
                                                name="region"
                                                type="text"
                                                autoComplete="address-level1"
                                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                                            Postal code
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                id="postal-code"
                                                name="postal-code"
                                                type="text"
                                                autoComplete="postal-code"
                                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div className="mt-10 flex justify-end pt-3">
                                <div className="">
                                    <Button className="w-full sm:w-auto" href="#">
                                        Get started
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </form>
                </section>
            </main>
        </div>
    )
}
