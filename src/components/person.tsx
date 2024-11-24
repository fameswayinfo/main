import Image from "next/image";

function Person({
    name,
    description,
    img,
}: {
    name: string
    description: string
    img: string
}) {
    return (
        <li className="flex items-center gap-4">
            <Image alt="" src={img} width={1000} height={1000} className="size-24 rounded-full object-contain" />
            <div className="text-sm/6">
                <h3 className="font-medium">{name}</h3>
                <p className="text-gray-500">{description}</p>
            </div>
        </li>
    )
}

export default Person;