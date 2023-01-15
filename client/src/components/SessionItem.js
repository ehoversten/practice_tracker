
const SessionItem = ({ item, removeSession}) => {

    return (
        <div className="session-item">
            <div className="item-detail">
                <p>Title: {item.title}</p>
                <p>Duration: {item.duration}</p>
                <p>Notes: {item.worked_on}</p>
            </div>
            <div className="del-btn-container">
                <button id={item._id} className="del-btn" onClick={() => removeSession(item._id)}> X </button>
            </div>
        </div>
    )
}

export default SessionItem;