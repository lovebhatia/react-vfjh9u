 import React, {useState} from "react"

function AppComplexChangeState() {
    const [inputData, setInputData] = useState({firstName: "", lastName: ""})
    const [contactsData, setContactsData] = useState([])
    
    function handleChange(event) {
      const{name,value}=event.target
     /* setInputData(
        {
          [name] : value
        }
      )
      */
      setInputData(

        (prevInputData) => {
        return {
          ...prevInputData,
            [name] : value
        }
      })

      /*
      function test(prevInputData)
      {
        return{
            ...prevInputData,
          [name] :value
        }
      }

      setInputData(test)
        
        
    }
    */
    }


    
    console.log(contactsData)
    function handleSubmit(event) {
      event.preventDefault()
      setContactsData(prevContacts => [...prevContacts,inputData])
        //here we are returning an array with previous data and input data
    }

   // const contacts= contactsData.map(contact => <h2 key={contact.firstName +contact.lastName}>
    //{contact.firstName}{contact.lastName}</h2>)
    const contacts = contactsData.map(contact => <h2 key={contact.firstName + contact.lastName}>{contact.firstName} {contact.lastName}</h2>)
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input 
                    placeholder="First Name"
                    name="firstName" 
                    value={inputData.firstName}
                    onChange={handleChange}
                />
                <input 
                    placeholder="Last Name"
                    name="lastName" 
                    value={inputData.lastName}
                    onChange={handleChange}
                />
                <br />
                <button>Add contact</button>
            </form>
            {contacts}
        </>
    )
}

export default AppComplexChangeState