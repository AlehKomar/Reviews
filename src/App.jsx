import { useState } from 'react'
import people from './data'
import { FaAppleWhole } from 'react-icons/fa6'

const App = () => {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = people[index]

  return (
    <div>
      <h2>Reviews Starter</h2>
      <FaAppleWhole className='apple' />
    </div>
  )
}
export default App
