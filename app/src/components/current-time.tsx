import { useState, useEffect } from 'react'

export const CurrentTime = () => {
    const [date,setDate] = useState(new Date());
    
    useEffect(() => {
        const timer = setInterval(() => setDate(new Date()), 1000)
        return () => {
          clearInterval(timer)
        }
    
    });

    return date.toLocaleTimeString()
}

export default CurrentTime