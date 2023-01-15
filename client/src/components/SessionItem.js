
const SessionItem = ({ item, removeSession}) => {

    return (
        <div className="session-item">
            <div className="item-detail">
                <p>{item.title}</p>
                <p>{item.duration}</p>
                <p>{item.worked_on}</p>
            </div>
            <div className="del-btn">
                <button id={item._id} onClick={() => removeSession(item._id)}> X </button>
            </div>
        </div>
    )
}

export default SessionItem;