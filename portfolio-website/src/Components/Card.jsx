
function Card(props) {

    return (
        <div className="flex flex-row">
            <div>
                <p className="text-md">{props.date}</p>
            </div>
            <div className="pl-10">
                <h1 className="text-xl">{props.title}</h1>
                <p>{props.description}</p>
                <ul>
                    <li>React.js</li>
                    <li>JavaScript</li>
                    <li>AWS</li>
                </ul>
            </div>
        </div>
    )

}

export default Card;