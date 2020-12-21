import { useState } from "react"

export const useForm = defaults => {
  const [formInput, setFormInput] = useState(defaults)

  const handleOnChange = e => {
    let { value } = e.target
    // Falls Nummer
    if (e.target.type === "number") {
      value = parseInt(e.target.value)
    }
    setFormInput({
      ...formInput,
      [e.target.name]: value,
    })
  }
  return { formInput, handleOnChange }
}
