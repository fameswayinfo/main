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
            <img alt="" src={img} className="size-12 rounded-full" />
            <div className="text-sm/6">
                <h3 className="font-medium">{name}</h3>
                <p className="text-gray-500">{description}</p>
            </div>
        </li>
    )
}

export default Person;