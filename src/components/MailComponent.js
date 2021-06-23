import React, {useState} from 'react'

const MailComponent = () => {

    const [isVisible, setIsVisible] = useState(true);

    return (
        <div className="h-52">
            <h1 className="mb-5">Inbox</h1>

            {
                isVisible ?
                
                <div className="flex gap-4 p-1 shadow-md rounded text-xs">
                <img src="https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png" alt="" className="w-10 h-10 rounded-lg" />

                <div className="w-full flex flex-col">  
                     <div className="w-full flex gap-2">
                        <p className="font-semibold">Juan García</p>
                        <p className="text-gray-400">Ya leíste la biblia brow?</p>
                        <p className="text-gray-400 ml-auto font-semibold" style={{fontSize:'10px'}}>A day ago</p>
                    </div>
                    <button className="w-12 bg-red-500 p-1 rounded text-white font-semibold" onClick={() => setIsVisible(false)}>delete</button>
                </div>

                </div>
                :

                <h1>There are no messages for you</h1>
            }

           
        </div>
    )
}

export default MailComponent;
