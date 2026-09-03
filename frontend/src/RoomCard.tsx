import { useState } from "react"

type RoomCardProps = {
    title : string
    description : string
    status : string
}

function RoomCard({title, description, status} :RoomCardProps){
    const[opened, setOpened] = useState(false)
    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <span>{status}</span>

            <button onClick={() => setOpened(!opened)}>
                {opened ? 'Close Room' : 'Open Room'}
            </button>
            {opened && (<p>Room content will go here.</p>) }
        </div>
    )
}

export default RoomCard