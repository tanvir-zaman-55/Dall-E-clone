import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

import {preview} from '../assets'
import {getRandomPrompt} from '../utils'
import {FormField, Loader} from '../components'

const CreatePost = () => {
const navigate = useNavigate();
const [form, setForm] = useState({
  name: '',
  prompt: '',
  photo: '',
})

const [ generateImg, setGenerateImg] = useState(false);
const [loading, setloading] = useState(false)

const handleSubmit = () => {

}

const handleChange = (e) =>{

}

const handleSurpriseMe = () => {

}
  return (
    <section className="max-w-7-xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">
         Create</h1>
        <p className="mt-2 text-[#666e75] text-[16px] max-w-[500px]">
          Create imaginative and visually stunning images through by DALL-E AI and share them with the community</p>
      </div>
      <form onSubmit={handleSubmit} className="mt-16 max-3xl">
        <FormField
          labelName= "You name"
          type= "text"
          name = "name"
          placeholder = "Adib Rahman"
          value= {form.name}
          handleChange={handleChange}
        />
        <FormField
          labelName= "Prompt"
          type= "text"
          name = "prompt"
          placeholder = "A plush toy robot sitting agaisnt a yellow wall"
          value= {form.prompt}
          handleChange={handleChange}
          isSurpriseMe
          handleSurpriseMe = {handleSurpriseMe}
        />

      </form>
    </section>
  )
}

export default CreatePost