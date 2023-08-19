import React, { useState } from 'react'
import swal from 'sweetalert';
const Contact = () => {
  const [user, setuser] = useState({
    name: "",
    email: "",
    message: "",
  });
  let name, value;
  const eventhandle = (e) => {
    name = e.target.name;
    value = e.target.value;
    setuser({
      ...user,
      [name]: value,
    });
  };

  const postdata = async (e) => {
    e.preventDefault();
    const { name,email, message } = user;
    if (name && email && message ) {
      
      const res = await fetch(
        "https://portfolio-406cf-default-rtdb.firebaseio.com/contactme.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            message,
          }),
        }
        
      );
      setuser({
        name: "",
        email: "",
        message: "",
      });
      swal("Submitted!", "Thanks for your response", "success");
    } else {
      swal("All fields Required!", "Kindly fill all the fields", "warning");
    }
  }
  return (
    <>
      <div className='mx-5 md:px-20 lg:px-40 lg:py-10 md:py-10' id='contact'>
        <div className='py-5 lg:flex md:flex'>
        <div className='lg:px-20'>
        <h3 className='text-3xl lg:text-8xl md:text-8xl  text-teal-700 font-medium '>Contact Me</h3>
        <h3 className='text-xl font-medium'>Prabhat Kumar | Dit University</h3>

        </div>
        <div style={{width:"100%"}}>
        <form class="p-6 rounded-lg" autoComplete="off">
  <div class="mb-4">
    <label class="block text-gray-700 font-medium mb-2" for="name">
      Name
    </label>
    <input className="border border-teal-700 p-2 w-full bg-transparent rounded-xl "
      type="text"
      id="name"
      name="name"
      required
      value={user.name}
      onChange={eventhandle}
      
    />
  </div>
  <div class="mb-4">
    <label class="block text-gray-700 font-medium mb-2 " for="email">
      Email
    </label>
    <input
      class="border border-teal-700 p-2 w-full rounded-xl bg-transparent"
      type="email"
      id="email"
      name="email"
      required
      value={user.email}
      onChange={eventhandle}
     
    />
  </div>
  <div class="mb-4">
    <label class="block text-gray-700 font-medium mb-2" for="message">
      Message
    </label>
    <textarea
      class="border border-teal-700 p-2 w-full rounded-xl bg-transparent"
      id="message"
      name="message"
      rows="4"
      required
      value={user.message}
      onChange={eventhandle}
      
    ></textarea>
  </div>
  <button onClick={postdata} class=" transition ease-in-out delay-150 hover:scale-110 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-md ml-5 text-white py-2 px-4 ">
    Submit
  </button>
</form>

        </div>
        </div>
      </div>
    </>
  )
}

export default Contact;
