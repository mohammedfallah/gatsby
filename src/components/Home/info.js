import React from 'react'
import { Link } from 'gatsby'
import Title from '../Globals/Title' ;
export default  function Info(){
  return (
    <section>
        <div className='container'>
          <Title title='our story' />
           <div className='row'>
              <div className='col-10 col-sm-8 mx-auto text-center'>
               <p className='lead text-muted mb-5'>
                   bcfgfgfgfgfg gsrfasanrntyer r ytyhrtyby 
               </p>
               <Link to='/about'>
               <button className='btn text-uppercase btn-yellow'>about page</button>
                 </Link>
            </div>
          </div>
        </div>
    </section>

  )
}
