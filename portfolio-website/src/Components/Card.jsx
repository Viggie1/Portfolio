
function Card(props) {

    return (
        <div className="flex flex-row w-full">
            <div className="w-1/4 text-md">
                <p className="text-md">{props.date}</p>
            </div>
            <div className="w-3/5">
                <h1 className="text-2xl">{props.title}</h1>
                <h1 className="text-xs">{props?.company}</h1>
                <p className="pt-2">{props.description}</p>
                <ul>
                    <li className="pt-2">React.js</li>
                    <li>JavaScript</li>
                    <li>AWS</li>
                </ul>
            </div>
        </div>
    )

}

export default Card;