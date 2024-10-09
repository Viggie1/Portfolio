
function Card(props) {
    let techList = props?.technologies
    let inProgress = props?.inProgress

    return (
        <div className="flex flex-row w-full border border-transparent hover:border-white duration-300 ease-in-out p-4 rounded-lg">
            <div className="w-1/4 text-md">
                <p className="text-md">{props.date}</p>
            </div>
            <div className="w-3/5">
                <a href={props?.link} target="_blank">
                    <div className="flex items-center">
                        <h1 className="text-2xl">{props.title}</h1>
                        {inProgress && (
                            <span className="ml-4 text-sm bg-yellow-300 text-black px-2 py-1 rounded-md whitespace-no-wrap">In Progress</span>
                        )}
                    </div>
                    <h1 className="text-xs">{props?.company}</h1>
                    <p className="pt-2">{props.description}</p>
                    <ul className="flex flex-column flex-wrap gap-x-2 gap-y-2 pt-4">
                        {techList?.map(tech => <li className="pr-2 py-1 px-2 border rounded-full whitespace-nowrap">{tech}</li>)}
                    </ul>
                </a>
            </div>
        </div>
    )

}

export default Card;