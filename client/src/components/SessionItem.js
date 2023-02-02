
import { motion } from 'framer-motion';
import { useState } from 'react';

const SessionItem = ({ item, setSession, removeSession}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        // <div className="session-item">
        //     <div className="item-header">
        //         <h4>Note: {item.title}</h4>
        //     </div>
        //     <div className="item-detail" onClick={() => setSession(item)}>
        //         <p>Title: {item.title}</p>
        //         <p>Duration: {item.duration}</p>
        //         <p>Notes: {item.worked_on}</p>
        //     </div>
        //     <div className="del-btn-container">
        //         <button id={item._id} className="del-btn" onClick={() => removeSession(item._id)}> X </button>
        //     </div>
        // </div>
        <motion.div layout onClick={() => setIsOpen(!isOpen)} className="session-item">
            <motion.div className="item-header">
                <motion.h4>Note: {item.title}</motion.h4>
            </motion.div>
            { isOpen && (
                <>
                    <motion.div className="item-detail" onClick={() => setSession(item)}>
                        <p>Title: {item.title}</p>
                        <p>Duration: {item.duration}</p>
                        <p>Notes: {item.worked_on}</p>
                    </motion.div>
                    <motion.div className="del-btn-container">
                        <button id={item._id} className="del-btn" onClick={() => removeSession(item._id)}> X </button>
                    </motion.div>
                </>
            )}
        </motion.div>
    )
}

export default SessionItem;