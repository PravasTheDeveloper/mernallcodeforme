import React, { useEffect, useState } from 'react';
import profilepic from '../images/profilepic.jpg';
import { useHistory } from 'react-router-dom';


function About() {

    const history = useHistory();

    const callAboutPage = async() =>{
        try{
            const res = await fetch("/about" , {
                method:"GET",
                headers:{
                    Accept : "application/json",
                    "Content-type":"application/json"
                },
                credentials:"include"
            });

            const data = await res.json();
            console.log(data);
            setuserData(data);

            if(!res.status === 200){
                const error = new Error(res.error);
                throw error;
            }
        }catch(err){
            console.log(err);
            history.push("/login");
        }
    }

    useEffect(() => {

        callAboutPage();

    },[]);

    const [toogletab, settoogletab] = useState(1);
    const [userData, setuserData] = useState({});

    return (
        <>
            <div className="about__fullwrapper">
                <div className="About__Control">
                    <div className="About__divOne About__sections">
                        <div className="About__divOne__content">
                            <div className="divOne__img">
                                <img src={profilepic} alt="PROFILE PIC"/>
                            </div>
                            <div className="divOne__content mt-5">
                                <p>Work Links</p>
                                <p><a href="https://www.facebook.com/profile.php?id=100034474604538" target="_blank">Facebook</a></p>
                                <p><a href="https://www.instagram.com/mith.un259/" target="_blank">Instagram</a></p>
                                <p><a href="https://www.youtube.com/channel/UCB8sEnR7EpKX9g3rkG3OSoA" target="_blank">Youtube</a></p>
                                <p><a href="https://github.com/PravasSarkar" target="_blank">GitHub</a></p>
                                {/*<p><a href="">Huruku</a></p> */}
                            </div>
                        </div>
                    </div>
                    <div className="About__divTwo About__sections">
                        <div className="About__divTwo__content">
                            <div className="About__uperSection">
                                <div className="About__uperSection__content">
                                    <h5>{userData.name}</h5>
                                    <h6>{userData.profession}</h6>
                                    <span><p>Ranking 1/10</p></span>
                                </div>
                                <div className="About__uperSection__btn">
                                    <button className="btn btn-info text-light">Edit Profile</button>
                                </div>
                            </div>
                            <div className="About__LowerSection mt-5">
                                <div className="About__LowerSection__tabsection">
                                    <div className={toogletab===1?"Tab__One tab_active":"Tab__One"} onClick={() => settoogletab(1)}>
                                        <h6>About</h6>
                                    </div>
                                    <div className={toogletab===2?"Tab__Two tab_active":"Tab__Two"} onClick={() => settoogletab(2)}>
                                        <h6>Timeline</h6>
                                    </div>
                                </div>
                                <form method="GET" className="About__LowerSection__tooglesection">
                                    <div className={toogletab===1?"Toogle__One toogle_active":"Toogle__One"}>
                                        <div className="d-flex justify-content-between mt-5">
                                            <div className="Toogle__One__ContentOne">
                                                <p>User Id       : </p>
                                                <p>Name          : </p>
                                                <p>Email         : </p>
                                                <p>Phone         : </p>
                                                <p>Profession    : </p>
                                            </div>
                                            <div className="Toogle__One__ContentTwo">
                                                <p>{userData._id}</p>
                                                <p>{userData.name}</p>
                                                <p>{userData.email}</p>
                                                <p>{userData.phone}</p>
                                                <p>{userData.profession}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={toogletab===2?"Toogle__Two toogle_active":"Toogle__Two"}>
                                        <p>Hello how are you</p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
