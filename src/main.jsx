import { createRoot } from 'react-dom/client'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import './index.css'
import App from './App.jsx'
// Removed duplicate import of RouterProvider
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import User from './components/User/User.jsx';
import Github, { GithubInfoLoader } from './components/Github/Github.jsx';
import Skills from './components/Skills/Skills.jsx';
import Projects from './components/Projects/Projects.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import BgChanger from './components/BgChanger/BgChanger.jsx';
import PasswordGenerator from './components/PasswordGenerator/PasswordGenerator.jsx';
import CurrencyConverter from './components/CurrencyConverter/CurrencyConverter.jsx';
import Todo from './components/Todo/Todo.jsx';
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher.jsx';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       {
//         path: '',
//         element: <Home />
//       },
//       {
//         path: 'about',
//         element: <About />
//       },
//       {
//         path: 'contact',
//         element: <Contact />
//       }
//     ]
//   }
// ])
// Alternate Method
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route 
      loader={GithubInfoLoader}
      path='github' element={<Github />} />
      <Route path="skills" element={<Skills />} />
      <Route path="projects" element={<Projects />} />
      <Route path="bgchanger" element={<BgChanger />} />
      <Route path='passwordGenerator' element={<PasswordGenerator />} />
      <Route path='currencyConverter' element={<CurrencyConverter />} />
      <Route path='todo' element={<Todo />} />
      <Route path='themeSwitcher' element={<ThemeSwitcher />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
