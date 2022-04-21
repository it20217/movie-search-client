import styles from "./ContactUs.module.scss"
import { useState } from 'react'

function ContactUs() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [message, setMessage] = useState("");
  const [nameWarning, setNameWarning] = useState(" ")
  const [telWarning, setTelWarning] = useState(" ")
  const [emailWarning, setEmailWarning] = useState(" ")
  const [messageWarning, setMessageWarning] = useState(" ")
  const [sendForm, setSendForm] = useState(false)

  function handleName(e){
    e.preventDefault()
    setName(e.target.value);
  }

  function handleTel(e){
    e.preventDefault()
    setTel(e.target.value);
  }

  function handleEmail(e){
    e.preventDefault()
    setEmail(e.target.value);
  }

  function handleMessage(e){
    e.preventDefault()
    setMessage(e.target.value);
  }

  function handleForm(e){
    e.preventDefault();

    // Name field validation
    if (!name){
      setNameWarning("Incorrect value")
      setSendForm(false)
    }
    else{
      setNameWarning("")
      setSendForm(true)
    }

    // Tel number field validation
    if (!tel){
      setTelWarning("Incorrect value")
      setSendForm(false)
    }
    else{
      const telValues=[0,1,2,3,4,5,6,7,8,9,"+","-","(",")"," "];
      let valid=0;
      setTelWarning("Incorrect value")
      setSendForm(false)
      for(let i=0; i<tel.length; i++){
        for(let j=0;j<telValues.length;j++){
          if(tel[i]==telValues[j]){
            valid++;
          }
        }
      }
      if (valid===tel.length){
        setTelWarning("")
      }
    }

    // Email field validation
    if (!email){
      setEmailWarning("Incorrect value")
    }
    else {
      setEmailWarning("Incorrect value")
      for(let i=0;i<email.length;i++){
        if(email[i]=="@"){
          setEmailWarning("")
        }
      }
    }

    // Message field validation
    if (!message){
      setMessageWarning("Incorrect value")
    }
    else{
      setMessageWarning("")
    }
    displayMessage();
  }

  // Display message after checking all the fields
  function displayMessage(){
    if(!nameWarning && !telWarning && !emailWarning && !messageWarning){
      setSendForm(true)
    }
    else{
      setSendForm(false)
    }
  }

  return(
    <div>
      <main className={styles.wrapper}>

        { /* Form */ }
        {/* The message styling is partially based on the Tailwind component, available at: https://tailwindcss.com */}
        {!sendForm? (
        <form className="h-screen bg-cover bg-center flex justify-items-center items-center">
          <div className="px-10 lg:px-32 xl:px-40">
            <h1 className="text-6xl font-semibold font-serif mb-6">
                <span className="text-red-500 bg-white">Have a Question?</span> <br />
                <span className="bg-white">Send us a message</span>
            </h1>
            <label>Name</label><br/>
            <input type="text" className={styles.name} onChange={handleName} placeholder="Enter your name" /><br/>
            <span className={styles.warning}>{nameWarning}</span><br />
            <label>Telephone</label><br />
            <input type="tel" className={styles.phoneNumber} onChange={handleTel} placeholder="Enter your number" /><br />
            <span className={styles.warning}>{telWarning}</span><br />
            <label>Email</label><br />
            <input type="email" className={styles.email} onChange={handleEmail} placeholder="Enter your email address" /> <br />
            <span className={styles.warning}>{emailWarning}</span><br />
            <label>Message</label><br />
            <textarea className={styles.message} onChange={handleMessage} placeholder="Enter your message" /><br />
            <span className={styles.warning}>{messageWarning}</span><br />
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-12 border border-gray-400 rounded shadow-md" onClick={handleForm}>Send</button><br /><br />
          </div>
        </form>) : (
          <form className="h-screen bg-cover bg-center flex justify-items-center items-center">
          <div className="px-10 lg:px-32 xl:px-40">
            <h1 className="text-2xl font-semibold font-serif mb-6">
                <span className="text-red-500 bg-white">Thank you for your message {name}</span> <br />
                <span className="bg-white">We will contact you shortly</span>
            </h1>
          </div>
        </form>
        )}

        { /* Side picture */ }
        <div className={styles.image}>
        </div>
      </main>
    </div>
  )
}

export default ContactUs;