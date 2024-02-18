import React, {useState, useEffect} from "react";
import { BASE_URL, API_KEY } from "../constants";
import Navbar from "./Navbar";
// import axios from "axios";

export default function NasaPhoto() {
    const [photoData, setPhotoData] = useState(null);
    
    useEffect(() => {
        //Works with either Axios or with Fetch
        // axios.get(`${BASE_URL}${API_KEY}`)
        // .then(res =>  {setPhotoData(res.data);})
        // .catch(err => console.log("There was an error. Fix it: " + err))

        async function fetchPhoto(){
            const res = await fetch(
                `${BASE_URL}${API_KEY}`
            )
            const data = await res.json();
            setPhotoData(data);
        }
        fetchPhoto(); 
    }, []) //empty dependency array

    if (!photoData) return <div />;
    
    return (
        <>
            <Navbar />
            <div className="nasa-photo">
                {photoData.media_type === "image" ? (
                    <img 
                        src={photoData.url} 
                        alt={photoData.title}
                        className="photo"
                    />
                ) : (
                    <iframe
                        title="video"
                        src={photoData.url}
                        frameBorder="0"
                        allow="encrypted-media"
                        allowFullScreen
                        className="photo"
                    />
                )}

                <div>
                    <h1>{photoData.title}</h1>
                    <p className="date">{photoData.date}</p>
                    <p className="explanation">{photoData.explanation}</p>
                </div>
            </div>
        </>
    )
}
