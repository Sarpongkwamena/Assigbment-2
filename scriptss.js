
 function onSubmit(event) 
 {
  event.preventDefault();
  const firstname=document.getElementById("Add").elements["First"].value;
  const middlename=document.getElementById("Add").elements["middle"].value;
  const lastname=document.getElementById("Add").elements["last"].value;
  const phonenumber=document.getElementById("Add").elements["contact"].value;
  const mail=document.getElementById("Add").elements["email"].value;
  const address=document.getElementById("Add").elements["addd"].value;
    if (firstname == ""|| middlename==""|| lastname== ""|| phonenumber== ""|| mail ==""|| address=="") {
   alert("Kindly fill all blank spaces");}
    
   /*validating first name*/
   const fn= /^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$/;
   if(firstname !="" && firstname.match(fn)){
     const error=document.getElementById("fnameerror");
     error.innerHTML="";
   } else if (firstname !="" && !firstname.match(fn)){
     alert("Invalid input");
   }
    else if (firstname ==""){
      alert("Kindly enter your first name.");
    } 

    /*validating middlename*/
    const fm= /^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$/;
    if(middlename !="" && middlename.match(fm)){
      const eror=document.getElementById("mnameerror");
      eror.innerHTML="";
    } else if (middlename !="" && !middlename.match(fm)){
      alert("Invalid Input");
    } else if (middlename ==""){
      alert("Kindly enter middle name");
    }
    /*validating last name*/
    const fo= /^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$/;
    if(lastname !="" && lastname.match(fo)){
      const errror=document.getElementById("lnameerror");
      errror.innerHTML="";
    } else if(lastname !="" && !lastname.match(fo)){
      alert("Invalid Input");
    } else if (lastname ==""){
      alert("Kindly enter last name");
    }
    /*Validating phonmumber*/
    const phone= /^\d{10}$/;
    if(phonenumber !="" && phonenumber.match(phone)){
      const error= document.getElementById("numerror");
      error.innerHTML="";
    } else if(phonenumber !="" && !phonenumber.match(phone)){
      alert("Invalid Input");
    } else if (phonenumber ==""){
      alert("Kindly enter phone numer");
    }
    /*Validating email address*/
    const ail= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(mail !="" && mail.match(ail)){
      const error= document.getElementById("mailerror");
      error.innerHTML="";
    } else if(mail !="" && !mail.match(ail)){
      alert("Invalid Input");
    } else if (mail ==""){
     alert("Kindly enter phone number");
    }
    /*Vaidating Address*/
    const fms= /^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$/;
    if(address !="" && address.match(fms)){
      const eror=document.getElementById("addresserror");
      eror.innerHTML="";
    } else if (address !="" && !address.match(fm)){
      alert("Invalid Input");
    } else if (address ==""){
      alert("Kindly enter middle name");
    }

    const Firstname= document.getElementById("Add").elements["Firstname"].value;
    const Lastname= document.getElementById("Add").elements["Lastname"].value;
    const Middlename= document.getElementById("Add").elements["Middlename"].value;
    const Phone= document.getElementById("Add").elements["Phone Number"].value;
    const Email= document.getElementById("Add").elements["Email"].value;
    const Address= document.getElementById("Add").elements["address"].value;
    const Gender = document.getElementById("Add").elements["Gender"].value;

    /* Stored within the local storage in the window */
    localStorage.setItem("f",   Firstname);
    localStorage.setItem("l", Lastname);
    localStorage.setItem("m", Middlename);
    localStorage.setItem("g", Gender);
    localStorage.setItem("p", Phone);
    localStorage.setItem("e", Email);
    localStorage.setItem("a", Address);











   window.location.href = "CV.html";
  }
  const form = document.getElementById("Add");
    form.addEventListener("submit", onSubmit);




  



   

 

 


