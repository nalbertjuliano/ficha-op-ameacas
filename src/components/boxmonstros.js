import { useState } from 'react'
import './estilo.css'

function Monstro(){
    var [ischeck, setIscheck] = useState(false)
    var [onof, setOnof] = useState(false) 
    var [mat, setMat] = useState(false)
    var [pv, setPv] = useState()
    var [showedpv, setShowedpv] = useState()
    var [name, setName] = useState()
    var [showedname, setShowedname] = useState()
    var [altpv, setAltpv] = useState()
    var [half, setHalf] = useState(1)
    var [res, setRes] = useState(0)

    const alterar = () => {
        setShowedpv(pv)
        setOnof(false)
        setShowedname(name)
    }

    const mudar = () => {
        setShowedpv(showedpv - ((altpv - res)* half))
        console.log(half)
        setMat(false)
    }

    const chack = () => {
        ischeck === true ? setIscheck(false) : setIscheck(true)
        if(!ischeck){
            setHalf(0.5)
        } else if(ischeck){
            setHalf(1)
        }
    }

    return (
        <div>
            <div className='coiso'>
                <div className='b'>
                    <p>NOME</p>
                    <h3>{showedname}</h3>
                    <p>vida</p>
                    <h1>{showedpv}</h1>

                    <button onClick={() => setOnof(true)}>setNomeeVida</button>
                    <button onClick={() => setMat(true)}>AlterVida</button>
                </div>
            </div>

        {onof &&(
            <div className='box'>
                <div className='xbox'>
                    <label>NOMES</label>
                    <input type="text" onChange={(e) => setName(e.target.value)}/>
                    <label>PV</label>
                    <input type="number" onChange={(e) => setPv(e.target.value)}/>
                    <button onClick={() => alterar()}>Alterar</button>
                    <button onClick={() => setOnof(false)}>fechar</button>
                </div>
            </div>

        )

        }
        {mat &&(
            <div className='box'>
                <div className='xbox'>
                    <label>ALTERAR</label>
                    <input type="number" value={altpv} onChange={(e) => setAltpv(e.target.value)}/>
                    <p>Resistencia</p>
                    <input type="number" value={res} onChange={(e) => setRes(e.target.value)} />
                    <p>Metade</p>
                    <input type="checkbox" value='metade' checked={ischeck} onChange={() => chack()}/>
                    <button onClick={() => mudar()}>mudar</button>
                    <button onClick={() => setMat(false)}>fechar</button>

                </div>
            </div>
        )}
        </div>
    )
}

export default Monstro