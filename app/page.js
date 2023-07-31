"use client"
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  let [state, setState] = useState()
  //const router = useRouter()
  let getPhrase = (event) => {
    setState(event.target.value)
  }
  let changeRoute = () => {
    console.log("oi")
  }
  return (
    <div className='index-container' ba>
      <div className='generator-container'>
        <h1>Gerador de molde de letras</h1>
        <form>
          <div className='input-field'>
            <label>Palavra a ser gerada</label>
            <input type='text' onChange={getPhrase} />
          </div>
          <div className='input-group'>
            <div className='input-field'>
              <label>Tamanho</label>
              <input type='number' />
            </div>
            <div className='input-field'>
              <label>Cor</label>
              <input>

              </input>
            </div>
            <div className='input-field'>
              <label>Fonte</label>
              <input />
            </div>
          </div>
          <div className='input-field '>
            <Link className='submit' href={`/phrase/${state}`}>Enviar</Link>
          </div>
        </form>
        <span className='insta-link'>
          By <a hreF="https://www.instagram.com/ssatanael123/">@ssatanael123</a>
        </span>
      </div>
    </div>
  )
}
