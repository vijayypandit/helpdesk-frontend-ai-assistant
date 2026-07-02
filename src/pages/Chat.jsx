import React, { useEffect, useRef, useState } from 'react';
import { Search, MoreVertical, Send, Plus } from "lucide-react";
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { ScrollArea } from '../components/ui/scroll-area';
import { Avatar } from '../components/ui/avatar';
import { AvatarFallback } from '../components/ui/avatar';
import { AvatarImage } from '../components/ui/avatar';
import { Separator } from '../components/ui/separator';
import { MessageBubble } from '../components/MessageBubble';


const CHAT = [

    {
        id: 1,
        name: "Springboot .... ",
        lastMessage: "Hello , i am John here How can i start springboot project"
    },
    {
        id: 2,
        name: "ReactJS .... ",
        lastMessage: "I need help with React component lifecycle methods."
    },
    {
        id: 3,
        name: "Database .... ",
        lastMessage: "How do I optimize SQL queries for large datasets?"
    },
    {
        id: 4,
        name: "Cloud .... ",
        lastMessage: "What's the best AWS service for serverless functions?"
    },
    {
        id: 5,
        name: "DevOps .... ",
        lastMessage: "Can you explain CI/CD pipelines?"
    }


]

const CONVERSATION = [

    {
        id: 1,
        author: "bot",
        text: "Hello ! How may i assist you with springboot today ?",
        at: "10:00 AM",
    },
    {
        id: 2,
        author: "user",
        text: "I want to create a new Spring Boot project. What are the initial steps?",
        at: "10:05 AM",
    },
    {
        id: 3,
        author: "bot",
        text: "Sure, you can use Spring Initializr to generate a new project. You'll need to choose your project's metadata, dependencies, and Java version.",
        at: "10:07 AM",
    },
    {
        id: 4,
        author: "user",
        text: "Which dependencies are commonly used for a basic web application?",
        at: "10:10 AM",
    },
    {
        id: 5,
        author: "bot",
        text: "For a basic web application, you'll typically need 'Spring Web' and 'Spring Boot DevTools'. If you're using a database, you'll also need the appropriate JDBC driver and a persistence framework like Spring Data JPA.",
        at: "10:12 AM",
    },


]

function Chat() {

    //variables
    const [messages, setMessages] = useState(CONVERSATION);
    const [draft, setDraft] = useState("");
    const endRef = useRef(null);
    const [sending, setSending] = useState(true);

    useEffect(() => {
        endRef.current?.scrollIntoView({ behaviour: "smooth" });

    }, [messages])

    //send message function
    function sendMessages() {
        const textMessage = draft.trim();

        if (!textMessage) return;

        console.log(draft)

        setMessages([...messages,
        {
            id: 3,
            author: "bot",
            text: "Sure, you can use Spring Initializr to generate a new project. You'll need to choose your project's metadata, dependencies, and Java version.",
            at: "10:07 AM",
        }
            ,
        ])
        //call api to send message here

        //setMessages(...)

        //setDrafts



    }
    return (

        <div className="fixed top-0 left-0 right-0  mx-auto min-h-screen max-w-7xl
        grid grid-cols-1 md:grid-cols-[300px_minmax(0,1fr)] border-x">

            <div>
                {/* Sidebar */}
                <aside className='hidden md:flex md:flex-col border-r'>
                    <div className="p-3 flex items-center gap-2">
                        <Button size={'icon'} variant={'outline'} className={'h-8 w-8'}>
                            <Plus className="h-4 w-4"></Plus>

                        </Button>
                        <div className="relative w-full ">

                            <Input placeholder="Search Chats..." type="text" className="h-9  pl-8 rounded-full  bg-muted w-full" />

                            <Search className="h-4 w-4pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        </div>
                    </div>
                    <Separator />
                </aside>
            </div>

            {/* CHAT AREA Right Side */}

                <section className="h-full border-l">
                    {/* Main Chat Area */}

                    {/* Header*/}
                    <div className="flex items-center justify-between gap-3 px-4 py-3 border-b">
                        <div className="flex items-center gap-3">
                            <Avatar>
                                <AvatarImage src="" />
                                <AvatarFallback className={"text-xs"}>AI</AvatarFallback>
                            </Avatar>
                            <div className="leading-tight">
                                <div className="text-sm font-medium">Liza Support AI</div>
                                <div className="text-xs text-muted-foreground">
                                    Online Typing ...
                                </div>
                            </div>

                        </div>
                        <div>
                            <Button variant={'ghost '} size={"icon"} className={"h-8 w-8"}>
                                <Search className={"h-4 w-4"} /></Button>
                            <Button variant={'ghost '} size={"icon"} className={"h-8 w-8"}>
                                <MoreVertical className={"h-4 w-4"} /></Button>
                        </div>
                    </div>

                {/*Chat Area */}
                <ScrollArea className={"flx-1 h-[calc(100vh-190px)]"}>
                    <div className="mx-auto max-w-3xl px-6 py-6 space-y-6">
                            {
                            messages.map((chat, index) =>
                                <MessageBubble key={index} author={chat.author} at={chat.at}>
                                        {chat.text}
                                    </MessageBubble>
                                )
                            }
                        </div>
                    {/*adding ref to scroll to bottom*/}
                    <div ref={endRef}></div>
                    </ScrollArea>
                    {/* composer*/}
                    <div className="border-t p-3">
                    <div className="mx-auto flex max-w-3xl intems-center gap-3">
                        <Input
                            value={draft}
                            onChange={(e) => setDraft(e.target.value)}
                            placeholder="Write a message..."
                            className={"flex-1 rounded-full"} />
                        <Button
                            enabled={!sending}
                            onClick={sendMessages}
                            className={'rounded-full px-5 '}>
                            <Send className="h-4 w-4" /> <span>Send</span>

                        </Button>

                    </div>
                    </div>
                </section>
            </div>





    )
}

export default Chat