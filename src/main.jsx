import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App.jsx'
import './index.css'
import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import { BrowserRouter } from 'react-router-dom'



const config = {
  initialColorMode: 'dark', // 'dark' | 'light'
  useSystemColorMode: false,
}
const styles={
  global:(props)=>({
    body:{
      bg:mode("gray.100", "black")(props),
      color:mode("gray.100","whiteAlppha.900")(props),
    }
  })
}


const theme = extendTheme({ config,styles })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,

    
)


