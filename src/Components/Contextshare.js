import React, { createContext, useState } from 'react'


// create context
export const registerContext = createContext()



// context for delete
export const deleteContext = createContext()

// context for edit
export const editContext = createContext()


function Contextshare({ children }) {
    // create a state to store datas inside context
    const [registerData, setRegisterData] = useState("")

    // state to store delete context data
    const [deleteData, setDeleteData] = useState("")

    // state to edit 
    const [editData, setEditData] = useState("")

    return (
        <div>
            {/* share the context datas to child */}
            <registerContext.Provider value={{ registerData, setRegisterData }}>
                <deleteContext.Provider value={{ deleteData, setDeleteData }}>
                    <editContext.Provider value={{ editData, setEditData }}>
                        {children}
                    </editContext.Provider>
                </deleteContext.Provider>
            </registerContext.Provider>
        </div>
    )


}





export default Contextshare