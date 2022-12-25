import { useState } from "react";

function Form(){

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
        mode: "",
        addOns: [],
        department: "",
      }); // map this value to the form input fields. As we are mapping the state variable/value to the elements(forms), this is caled 
      // controlled components. because we have controlled to the elements which we have created. 
      console.log(formData);
      function handleSubmit(e) {
        e.preventDefault();
      }

    function handleChange(e){
      //e.target returns the target element.
        // console.log(e.target);
        // Here using object destructuring we can access the property of the e.target element.
        // In form element we have type, value and name attributes, thus in js, the element is considered as an object and those attributes are considered as the propertues.
        //Thus we used object destructuring and access those properties.
        const {type, name, value} = e.target;  
        // console.log(name, value);
        type === "checkbox" 
          ? setFormData((prevData) => {
            return {
              ...prevData,
              addOns: prevData.addOns.concat(value),
            }
          }) :
          setFormData((prevData) => {
            return {
                ...prevData,
                [name]: value
            };
        });
        console.log(formData);
    }
    return(
    <form onSubmit={handleSubmit}>
      <h2>Enter the following details:</h2>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={formData.name}
        />
      </div>
      <br />
      <div>
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={formData.email}
        />
      </div>
      <br />
      <div>
        <label htmlFor="address">Address:</label>
        <textarea
          name="address"
          onChange={handleChange}
          value={formData.address}
        />
      </div>
      <br />
      <div>
        <label htmlFor="mode-of-study">Mode of study:</label>
        <input
          type="radio"
          name="mode"
          onChange={handleChange}
          value="Part Time"
        />
        <label>Part Time</label>
        <input
          type="radio"
          name="mode"
          onChange={handleChange}
          value="Full Time"
        />
        <label>Full Time</label>
      </div>
      <br />
      <div>
        <label htmlFor="add-ons">Add-Ons:</label>
        <input
          type="checkbox"
          name="add-ons-1"
          onChange={handleChange}
          value="Hostel"
        />
        <label>Hostel</label>
        <input
          type="checkbox"
          name="add-ons-2"
          onChange={handleChange}
          value="Bus"
        />
        <label>Bus</label>
      </div>
      <br />
      <div>
        <label htmlFor="department">Department:</label>
        <select
          name="department"
          onChange={handleChange}
          value={formData.department}
        >
          <option value="English">English</option>
          <option value="Maths">Maths</option>
          <option value="Physics">Physics</option>
          <option value="Computer Science">Computer Science</option>
        </select>
      </div>
      <br />
      <div>
        <button>Submit</button>
      </div>
      <div>
        <h1>{formData.name}</h1>
        <p>{formData.email}</p>
        <p>{formData.address}</p>
        <p>{formData.mode}</p>
        <p>{formData.addOns.map((add)=> add)}</p>
        <p>{formData.department}</p>
        
      </div>
    </form>
    )
}

export default Form;