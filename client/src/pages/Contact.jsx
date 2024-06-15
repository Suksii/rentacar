import React from 'react';
import {GoLocation} from "react-icons/go";
import {AiOutlineMail, AiOutlinePhone} from "react-icons/ai";
import Input from "../components/Input.jsx";
import Textarea from "../components/Textarea.jsx";
import Button from "../components/Button.jsx";

const Contact = () => {

    const contactInfo = [
        {
            id: 1,
            icon: <GoLocation size={34} color={"#050C9C"}/>,
            title: "Address",
            info: "Bulevar Kralja Aleksandra"
        },
        {
            id: 2,
            icon: <AiOutlinePhone size={34} color={"#050C9C"}/>,
            title: "Phone",
            info: "+382 69 123 123"
        },
        {
            id: 3,
            icon: <AiOutlineMail size={34} color={"#050C9C"}/>,
            title: "Email",
            info: "somemail@gmail.com"
        }
    ];

    return (
        <div className="w-full bg-gray-200">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94233.44044333613!2d19.173478545840243!3d42.43209794658684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134de8079606867d%3A0x6bf78a76ea588ae9!2z0J_QvtC00LPQvtGA0LjRhtCwLCDQptGA0L3QsCDQk9C-0YDQsA!5e0!3m2!1ssr!2s!4v1718213120811!5m2!1ssr!2s" allowFullScreen loading={"lazy"} className="w-full h-[60vh]"></iframe>
            <div className="flex flex-wrap items-center py-12">
                {
                    contactInfo.map((item) => (
                        <div key={item.id} style={{flex: 1}} className="flex flex-col items-center py-12 gap-4 m-10 bg-gray-100 min-w-[300px]">
                            {item.icon}
                            <p className="font-semibold text-xl text-blue-800">{item.title}</p>
                            <p className="text-xl text-blue-800 tracking-wider">{item.info}</p>
                        </div>
                    ))
                }
            </div>
            <div className="flex flex-wrap bg-blue-900">
                <div style={{flex: 1}} className="flex flex-col items-center justify-center pl-4">
                    <h1 className="text-4xl font-semibold text-center text-blue-100 py-10">Do you have any questions?</h1>
                    <p className="text-center text-blue-200 px-12 text-lg">You are interested in our services and you have some questions? Feel free to contact us.</p>
                </div>
                <div style={{flex: 1}} className="w-full min-w-[500px]">
                    <form className="flex flex-col gap-5 p-10">
                        <Input placeholder="Name" className="w-full border border-gray-300 rounded-md bg-blue-100" required={true}/>
                        <Input type="email" placeholder="Email" className="w-full rounded-md bg-blue-100" required={true}/>
                        <Input type="text" placeholder="Phone" className="w-full rounded-md bg-blue-100" required={true}/>
                        <Textarea placeholder="Message" className="w-full rounded-md bg-blue-100" required={true}/>
                        <div className="flex justify-end self-end md:w-[250px] w-full">
                            <Button label={"Send"} className="w-full text-blue-900 text-xl font-semibold rounded-md bg-blue-100"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;