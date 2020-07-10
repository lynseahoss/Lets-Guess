import React, { useState, useEffect, useContext } from 'react'
import { ScoreContext } from '../../contexts/scoreContext.js';
import Bulma from '@vizuaalog/bulmajs';
import axios from 'axios'
import { RandomNumberContext } from '../../contexts/RandomNumber';



const DropDown = (props) => {

    const [hair, setHair] = useState("")
    const [eye, setEye] = useState("")
    const [glassesQ, setGlassesQ] = useState("")
    const [face, setFace] = useState("")
    const [factQ, setFactQ] = useState("")
    const [quests, setquests] = useState(3)
    const {score,setscore} = useContext(ScoreContext)
    const {RandomNumber}=useContext(RandomNumberContext)

    useEffect(() => {
        
        axios.get('/api/characters')
            .then((res) => {
                // setHair(res.data[RandomNumber].hairColor)
                // setEye(res.data[RandomNumber].eyeColor)
                // setGlassesQ(res.data[RandomNumber].glasses)
                // setFace(res.data[RandomNumber].facialHair)
                // setFactQ(res.data[RandomNumber].fact)
                
            })
            
           
        }, [RandomNumber])



    return (
        <div className="column is-one-quarter">

            <div className="dropdown is-hoverable">
                <div className="dropdown-trigger">
                    <button className="button dropdown-button is-rounded" aria-haspopup="true" aria-controls="dropdown-menu">
                        <span> Choose Your Question! </span>
                    </button>
                </div>
                <div className="dropdown-menu" id="dropdown-menu" role="menu">
                    <div className="dropdown-content">
                        <button className="dropdown-item" onClick={(e) => Bulma().alert({
                            type: "info",
                            title: "My hair color is...",
                            body: `${hair} .... Be aware, each time you ask a question, you will lose a point!`,
                            confirm: {label: "Okay", onClick:function(){
                                setscore(score -1)
                            }}
                        })}
                            value="hair">What is my hair color?</button>
                    </div>
                    <div className="dropdown-content">
                        <button className="dropdown-item"
                            onClick={(e)=> Bulma().alert({
                            type:"info",
                            title:"My eye color is...",
                            body:`${eye} .... Be aware, each time you ask a question, you will lose a point!`,
                            confirm:{label: "Okay", onClick:function(){
                                setscore(score -1)
                            }}
                        })}
                            value="eye">What is my eye color?</button>
                    </div>
                    <div className="dropdown-content">
                        <button className="dropdown-item"
                            onClick={(e)=> Bulma().alert({
                            type:"info",
                            title:"I wear glasses...?",
                            body:`${glassesQ} .... Be aware, each time you ask a question, you will lose a point!`,
                            confirm:{label: "Okay", onClick:function(){
                                setscore(score -1)
                            }}
                        })}
                            value="glassesQr">True or False do I wear glasses?</button>
                    </div>
                    <div className="dropdown-content">
                        <button className="dropdown-item"
                          onClick={(e)=> Bulma().alert({
                            type:"info",
                            title:"I have facial har...?",
                            body:`${face} .... Be aware, each time you ask a question, you will lose a point!`,
                            confirm:{label: "Okay", onClick:function(){
                                setscore(score -1)
                            }}
                        })}
                            value="face">True or False do I have faical hair?</button>
                    </div>
                    <div className="dropdown-content">
                        <button className="dropdown-item"
                          onClick={(e)=> Bulma().alert({
                            type:"info",
                            title:"Here's a random fact about me",
                            body:`${factQ} .... Be aware, each time you ask a question, you will lose a point!`,
                            confirm:{label: "Okay", onClick:function(){
                                setscore(score -1)
                            }}
                        })}
                            value="fact">Wanna Know a random fact about me?</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DropDown