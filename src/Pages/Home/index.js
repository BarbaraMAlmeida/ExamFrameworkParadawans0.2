import React from 'react'
import { Link } from 'react-router-dom'

import Capa from '../../Img/teste.png' 

function Home() {
    return(
        <div>
              <section className='cover'>
                <div className="capa">
                    <img src={Capa} alt="Capa" className="img_capa" />
                </div>

                <div className="text_cover">
                <h1>Processo Seletivo</h1>
                <h2>Framework Padawans</h2>

             <div className="button_call">
                <Link to="/Posts"><button> <p>Visualizar</p> <i class="fas fa-arrow-right"></i></button></Link>
            </div>
            </div>
            </section>
        </div>
    )
}

export default Home