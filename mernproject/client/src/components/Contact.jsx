import React, { useEffect, useState } from 'react';

function Contact() {

    const callContact = async() =>{
        try{
            const res = await fetch("/getdata" , {
                method:"GET",
                headers:{
                    "Content-type":"application/json"
                }
            });

            const data = await res.json();
            setuserData({...userData,name:data.name,phone:data.phone,email:data.email,messege:data.messege});

            if(!res.status === 200){
                const error = new Error(res.error);
                throw error;
            }
        }catch(err){
            console.log(err);
        }
    }

    useEffect(() => {

        callContact();

    },[]);

    const [userData, setuserData] = useState({name:"",phone:"",email:"",messege:""});

    const hadleInputs = (e) => {
        const {name , value} = e.target;

        setuserData({...userData , [name]:value})
    }

    const contactForm = async(e) => {
        
        e.preventDefault();

        const {name , phone , email , messege} = userData;
        const res = await fetch("/contact" , {
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body: JSON.stringify({
                name , email , phone , messege
            })
        });
        const datas = await res.json();
        if(!datas){
            alert("Messege Not Sent");
            console.log(datas)
        }else{
            alert("Messege Sent SuccessFul");
            setuserData({...userData , messege:""})
            console.log(datas)
        }
    }


    return (
        <>
            <div className="contactUs__wrapper container">
                <div className="contactUS__page">
                    <div className="uperDiv">
                        <div className="allsection sectionOne">
                            <div className="allsection__allcontent">
                                <div className="allsection__icons">
                                    <i className="fas fa-phone-square-alt"></i>
                                </div>
                                <div className="allsection__content">
                                   <h4>Phone</h4>
                                   <p>{userData.phone}</p>
                                </div>
                            </div>
                        </div>
                        <div className="allsection sectionTwo">
                            <div className="allsection__allcontent">
                                <div className="allsection__icons">
                                    <i className="fas fa-at"></i>
                                </div>
                                <div className="allsection__content">
                                   <h4>Email</h4>
                                   <p>{userData.email}</p>
                                </div>
                            </div>
                        </div>
                        <div className="allsection sectionThree">
                            <div className="allsection__allcontent">
                                <div className="allsection__icons">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div className="allsection__content">
                                   <h4>Address</h4>
                                   <p>55/17 S.M. Maleha Road</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lowerDiv">
                        <h2>Get In Touch</h2>
                        <div className="lowerDiv__wrapper">
                            <div className="lowerDiv__Form">
                                <form method="POST">
                                    <div className="slideOne">
                                        <div className="YourName">
                                            <input type="text" name="name" onChange={hadleInputs} value={userData.name} placeholder="Your Name" autoComplete="none" />
                                        </div>
                                        <div className="YourEmail">
                                            <input type="text" name="email" onChange={hadleInputs} value={userData.email} placeholder="Your Email" autoComplete="none" />
                                        </div>
                                        <div className="YourPhone">
                                            <input type="text" name="phone" onChange={hadleInputs} value={userData.phone} placeholder="Your Phone" autoComplete="none" />
                                        </div>
                                    </div>
                                    <div className="slideTwo">
                                        <textarea className="contacttextarea" onChange={hadleInputs} name="messege" value={userData.messege} autoComplete="none">

                                        </textarea>
                                    </div>
                                    <button onClick={contactForm} className="btn btn-info">Sent Messege</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
