import React from 'react'
import { Link } from 'react-router-dom'


import Astronaut from '../../Img/errordark.png'



function Error(props) {
    return(
        <div>
              <section className='background-error'>
                  <div className='astronaut'>
                    <img src={Astronaut} alt="astronaut" />
                  </div>

                  <div className='text-error'>
                    <div>
                      <h1>Oops!</h1>
                      <p>
                          Essa página não existe! Caso deseje voltar à 
                          aplicação basta clicar no botão abaixo
                      </p>
                      <Link to="/"><button>Voltar</button></Link>
                    </div>
                  </div>
              </section>
        </div>
    )
}

export default Error