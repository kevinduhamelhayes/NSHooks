import { useState } from 'react'
const useCount = () => {


const [count, setCount] = useState(0)
  const incrementar = () => {
    setCount(count+1)
  }
  return {count, incrementar}
}
export default useCount