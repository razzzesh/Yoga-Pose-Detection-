window.onload=()=>{
    document.getElementById("yogabtn").onclick=recommendYogaPose;
}

function recommendYogaPose(){
    let disease=document.getElementById("problem").value;
    let age=document.getElementById("age").value;
    let gender=document.getElementById("gender").value;
    let yogaPose;
    if(age==="" || gender==="" || disease===""){
        alert("Please fill all the form fields correctly");
    }
    console.log(disease)
    if(disease==="1"){
        yogaPose="Yoga can be a great way to help alleviate certain medical issues. People suffering from Asthama can practice Pranayam and anulom-vilom in order to help yourselves to get relaxed and calm";
        console.log(yogaPose);
        document.getElementById("resultyoga").value=yogaPose;
    }
    else if(disease==="2"){
        yogaPose="Yoga can help you significantly in curing Arthritis just by doing Suryanamaskar correctly on regualar basis ";
        console.log(yogaPose);
        document.getElementById("resultyoga").value=yogaPose;
    }
    else if(disease==="3"){
        yogaPose="Diabetes can also be kept in control by performing Triangle pose everyday in correct way. This will help you alot in other aspects also. ";
        console.log(yogaPose);
        document.getElementById("resultyoga").value=yogaPose;
    }
    else if(disease==="4"){
        yogaPose="Hypertension can be reduced by Pranayam, Shashaank and Vajrasana. You can practice all these suggested yoga asanas everyday to keep yourself calm, relaxed and tension free. ";
        console.log(yogaPose);
        document.getElementById("resultyoga").value=yogaPose;
    }
    else if(disease==="5"){
        yogaPose="Depression can prove to be dangerous for physical as well as mental health, so as to heal yourself from depression you can perform Uttanasana everyday.";
        console.log(yogaPose);
        document.getElementById("resultyoga").value=yogaPose;
    }
    else if(disease==="6"){
        yogaPose="If you are suffering from liver problems you can try performing Bridge pose or cat pose. It will really help you to reduce problems";
        console.log(yogaPose);
        document.getElementById("resultyoga").value=yogaPose;
    }
    else if(disease==="7"){
        yogaPose="Lower back pain can be cured by performing Tadasan under guidance of an expert so as not to do it in incorrect way which may also cause side effects";
        console.log(yogaPose);
        document.getElementById("resultyoga").value=yogaPose;
    }
    else if(disease==="8"){
        yogaPose="Insomnia can be treated well with Hala and Shirshaasana. This will make you sleep calm and relaxed. You can do it on regualr basis.";
        console.log(yogaPose);
        document.getElementById("resultyoga").value=yogaPose;
    }
    else if(disease==="9"){
        yogaPose=" Acidity can be cured by performing Shalabh Asans. People suffering from frequent acidity problems should try this.";
        console.log(yogaPose);
        document.getElementById("resultyoga").value=yogaPose;
    }
    else if(disease==="10"){
        yogaPose="Constipation can be cured with the help of Tarha, Chakra and Supta Vajra yoga asanas.";
        console.log(yogaPose);
        document.getElementById("resultyoga").value=yogaPose;
    }


}