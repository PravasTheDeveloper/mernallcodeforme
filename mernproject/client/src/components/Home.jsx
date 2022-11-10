import React, { useEffect, useState } from 'react';

function Home() {


    const callHomePage = async() =>{
        try{
            const res = await fetch("/getdata" , {
                method:"GET",
                headers:{
                    "Content-type":"application/json"
                }
            });

            const data = await res.json();
            setUserName(data.name);
            setstage(true);

            if(!res.status === 200){
                const error = new Error(res.error);
                throw error;
            }
        }catch(err){
            console.log(err);
        }
    }

    useEffect(() => {

        callHomePage();

    },[]);

    const [UserName, setUserName] = useState();
    const [stage, setstage] = useState(false)

    return (
        <>
            <div className="Home__wrapper">
                <div className="Home__content">
                    <p>Welcome</p>
                    <h1>{UserName}</h1>
                    <h2>{stage ? "Happy to see you back" : "Welcome Sir ,"}</h2>
                </div>
            </div>
        </>
    )
}

export default Home
