
const SessionItem = ({ item, removeSession}) => {

    return (
        <div className="session-item">
            <p>{item.title}</p>
            <p>{item.duration}</p>
            <p>{item.worked_on}</p>
            <button id={item._id} onClick={() => removeSession(item._id)}> X </button>
        </div>
    )
}

export default SessionItem;