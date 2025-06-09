import React from 'react'
import { useState } from 'react';
import emailjs from "@emailjs/browser"
import Alert from '../componenets/Alert';
import { AnimatePresence } from 'motion/react';
import { WavyBackground } from '../componenets/wavy-background';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
});

const [isLoading, setIsLoading] = useState(false)
const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value })
};


const[showAlert, setShowAlert] = useState(false);
const[alertMessage, setAlertMessage] = useState("")
const[alertType, setAlertType] = useState("success")


const showAlertMsg = (type, message) => {
    setShowAlert(true);
    setAlertType(type)
    setAlertMessage(message)

    setTimeout(() => {
        setShowAlert(false);
    },5000);
}



const handleSubmit = async (e) => {
    console.log(formData);
    setIsLoading(true)
    e.preventDefault()

    try {
        await emailjs.send("service_glmzfck", "template_771imho", {
        from_name: formData.name,
        to_name: "LMAO TEST",
        from_email: formData.email,
        to_email: "teamminers999@gmail.com",
        message: formData.message
        }, "26wVfGpj_QxyXxJkF")
        setIsLoading(false);
        showAlertMsg("success", "Your thoughts have been sent to the mail gods!")
        setFormData({name:"", email: "", message:""})
        console.log("Form submitted")
    } catch (error) {
        setIsLoading(false);
        
        showAlertMsg("danger","There is an error with the email gods")
        console.log("wtf failed")
    }
    

}
  return (
    <section id='contact' className='relative flex items-center  section-spacing'>
        <WavyBackground className="absolute  -z-50"/>
        <AnimatePresence>
        {showAlert && <Alert type={alertType} text={alertMessage}/>}
        </AnimatePresence>
        <div className='flex flex-col items-center justfiy-center border max-w-sm mx-auto border-white/10 bg-primary rounded-2xl p-5 z-10'>
            
            <div className='flex flex-col items-start gap-2 mt-5 mb-5'>
            <h2 className='text-heading'>Contact Me</h2>
            <p>You can also contact me through this website. Just leave your thoughts here I will get back to them as soon as I can :)</p>
            </div>

            <form className='w-full' onSubmit={handleSubmit}>
                <div className='flex flex-col gap-2 mt-5 mb-5'>
                    <label className='field-label' htmlFor="name">Name</label>
                    <input onChange={handleChange} value={formData.name}required id= 'name' name= 'name' type='text' className='field-input field-input-focus'></input>
                </div>
                <div className='flex flex-col gap-2 mb-5'>
                    <label className='field-label' htmlFor="email">E-mail</label>
                    <input onChange={handleChange} value={formData.email} required id= 'email' name= 'email' type='email' className='field-input field-input-focus'></input>
                </div>
                <div className='flex flex-col gap-2 mb-5'>
                    <label className='field-label' htmlFor="message">Message</label>
                    <textarea onChange={handleChange} value={formData.message} required id= 'message' name= 'message' type='text' className='field-input field-input-focus h-50'></textarea>
                </div>

                <button type="submit" className='w-full px-1 py-3 text-lg text-center cursor-pointer bg-radial from-lavender to-royal hover-animation rounded-md'>
                    {!isLoading? "Submit" : "Submitting"}
                </button>
            </form>
        </div>
    </section>
  )
}

export default Contact