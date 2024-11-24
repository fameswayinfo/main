import Image from "next/image";
import { Container } from "./container";

function ExecutiveMessage({
    imageSrc = '',
    quote = 'Hey',
    name = 'Rudransh Shrivastava',
    title = 'asd'
}: {
    imageSrc?: string,
    quote?: string,
    name?: string,
    title?: string
}) {

    console.log(imageSrc)
    return (
        <div className="mx-2 my-24 rounded-4xl bg-gray-900 bg-[url(/dot-texture.svg)] pb-12 pt-72 lg:pt-12">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-[384px_1fr_1fr]">
                    <div className="">
                        <div className="-m-2 rounded-4xl bg-white/15 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:max-w-xs">
                            <div className="rounded-4xl p-2 shadow-md shadow-black/5">
                                <div className="overflow-hidden rounded-3xl shadow-2xl outline outline-1 -outline-offset-1 outline-black/10">
                                    <Image
                                        width={1000}
                                        height={1000}
                                        alt="founder-img"
                                        src={'/rudransh.png'}
                                        className="aspect-[3/4] w-full object-cover "
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex max-lg:mt-16 lg:col-span-2 lg:px-16 ">
                        <figure className="flex max-w-2xl flex-col gap-16 max-lg:text-center self-center">
                            <blockquote>
                                <p className="relative text-3xl tracking-tight text-white before:absolute before:-translate-x-full before:content-['“'] after:absolute after:content-['”'] lg:text-2xl">
                                    {quote}
                                </p>
                            </blockquote>
                            <figcaption className=" ">
                                <p className="text-sm/6 font-medium text-white">{name}</p>
                                <p className="text-sm/6 font-medium">
                                    <span className="bg-gradient-to-r from-[#fff1be] from-[28%] via-[#ee87cb] via-[70%] to-[#b060ff] bg-clip-text text-transparent">
                                        {title}
                                    </span>
                                </p>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default ExecutiveMessage