//import react js
import React from "react";
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";

//import backend
import api from "@/hook/backend.js";

//import loading
import Loading from "@/components/loading/index.jsx";

//import stylings
import '@/styles/pages/feed/style.scss';

import Postagens from '@/components/tables/postagens/index.jsx'

//import cookies
//import Cookies from 'universal-cookie';
//const cookies=new Cookies()


const Feed=()=>{
    //FUNÇÕES------------------------------------------------------------------------------------------------------
    const deleted=async(id)=>{
        await api.delete(`/application/${id}`).then(response => {
            switch(response.status){
                case 203:
                    console.log(203)
                    break
                default:
                    console.log(200)
            }
        }).catch(err => {
            console.log(err.response.status)
        })
        setResponse(response.filter(post => post.id !== id))
    }

    const Data=async()=>{
        await api.get('/application/').then((response)=>{
            console.log('data:',response.data)
            setResponse(response.data)
        }).catch((err)=>{
            switch(err.response.status){
                case 401:
                    navigate('/entrar?')
                    break
                default:
                    console.error(err)
            }
        })
        console.log("response:",response)

        setTimeout(() => {
            setLoading(false)            
        }, 1000);
    }

    //DEFINIÇÕES---------------------------------------------------------------------------------------------------

    //usenavigate
    const navigate=useNavigate()
    //useStates
    const [response,setResponse]=useState()
    const [loading,setLoading]=useState(true)
    //cookies
    //cookies.set('data',response,{path:'/'})

    //-------------------------------------------------------------------------------------------------------------

    useEffect(()=>{
        Data()
    },[])

    //-------------------------------------------------------------------------------------------------------------
    return(
        <div className="py-28 w-full flex justify-center gap-10 flex-wrap">
            {!loading &&
                <>
                    {response?.map((postagens,index)=>{
                        return (
                            <Postagens 
                                deleted={deleted}
                                id={postagens.id} 
                                title={postagens.title}
                                created={postagens.createdAt}                   
                                description={postagens.description}
                                content={postagens.content}
                                user={postagens.user}
                                key={index}
                            />
                        )
                    })}
                </>
            }
            {loading && <Loading/>}
        </div>
    );
}

export default Feed;
