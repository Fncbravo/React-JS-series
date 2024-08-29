import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1>Custom App | chai</h1>
    </div>
  )
}

// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

const anotherElement = (
  <a href="https://google.com"  target='_blank'>Visit google</a>
)

const anotherUser = "chai aur code"

const reactELement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click to me visit google',
  anotherElement
)

createRoot(document.getElementById('root')).render(
    reactELement
)
