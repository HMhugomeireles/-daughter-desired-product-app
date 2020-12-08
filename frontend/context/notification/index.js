import { createContext, useContext, useState } from 'react'

const NotificationContext = createContext({})

export const useNotification = () => useContext(NotificationContext);

export function NotificationContextProvider(props) {
    const [notifications, setNotifications] = useState([])

    function markReadNotification(id) {

    }
    
    return (
        <NotificationContext.Provider value={{
            data: {
                notifications
            },
            actions: {
                markReadNotification
            }
        }}>
            {props.children}
        </NotificationContext.Provider>
    )
}
