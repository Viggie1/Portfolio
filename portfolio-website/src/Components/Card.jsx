
function Card(props) {
    let techList = props?.technologies

    return (
        <div className="flex flex-row w-full border border-transparent hover:border-white duration-300 ease-in-out p-4 rounded-lg">
            <div className="w-1/4 text-md">
                <p className="text-md">{props.date}</p>
            </div>
            <div className="w-3/5">
                <a href={props?.link} target="_blank">
                    <h1 className="text-2xl">{props.title}</h1>
                    <h1 className="text-xs">{props?.company}</h1>
                    <p className="pt-2">{props.description}</p>
                    <ul className="flex flex-column pt-4">
                        {techList?.map(tech => <li className="pr-2">{tech}</li>)}
                    </ul>
                </a>
            </div>
        </div>
    )

}

export default Card;