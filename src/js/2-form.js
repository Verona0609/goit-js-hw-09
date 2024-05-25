const formData = {
  email: "",
  message: ""
}

const form = document.querySelector(".feedback-form");
const textareaMessage = document.querySelector(`[name="message"]`);
const emailInput = document.querySelector(`[ name ="email"]`);



 const STORAGE_KEY = "feedback-form-state";



window.addEventListener(`DOMContentLoaded`, () =>{
  const savedData = localStorage.getItem(STORAGE_KEY);
  if(savedData){
    const parsedData =JSON.parse(savedData);
   formData.email = parsedData.email || "";
   formData.message = parsedData.message || "";
   emailInput.value = formData.email;
   textareaMessage.value = formData.message;
  }
});


const saveData = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};



form.addEventListener("input", (event)=> {
  const { name, value } = event.target;
  formData[name] = value.trim();
  saveData();
})


form.addEventListener("submit", (event)=>{
  event.preventDefault();

  if(!formData.email || !formData.message){
    alert("Fill please all fields");
    return;
  }

  console.log("Form Data:", formData);


  form.reset();
  formData.email ="";
  formData.message = "";
  localStorage.removeItem(STORAGE_KEY);
})