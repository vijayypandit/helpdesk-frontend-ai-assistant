import React from "react"
import { Button } from "@/components/ui/button"
import { Bot } from "lucide-react"
import { useNavigate } from "react-router"

function ChatHome() {

    const navigate = useNavigate();

    const handleChatStartClieck = () => {
        //custom - logic can be added here before navigation
        //likeemail id innput or unique id 



        navigate("/chat")
    }

    return (
        <div className="h-screen w-screen flex flex-col
        justify-center items-center">
            <Bot size={80} />
            <h1 className="text-4xl font-bold">Welcome to HelpDesk AI Assistant Application</h1>
            <Button onClick={handleChatStartClieck} className={'cursor-pointer'}>Start Getting Help</Button>
        </div>
    )
}

export default ChatHome
