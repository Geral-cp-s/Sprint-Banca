import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './routes/Error.jsx'
import Home from './routes/Home.jsx'
import Pistas from './routes/Pistas.jsx'
import Login from './routes/Login.jsx'
import QuemSomos from './routes/QuemSomos.jsx'
import Comparativos from './routes/Comparativos.jsx'
import Equipes from './routes/EquipesE.jsx'
import Mahindra from './routes/Mahindra.jsx'
import GlobalStyled from './global-styled.js'
import Forum from './routes/Forum.jsx'
import Projeto from  './routes/Projeto.jsx'
import Conta from './routes/Conta.jsx'
import Assinatura from './routes/Assinatura.jsx'
import Loja from './routes/Loja.jsx'
import Memoria from './routes/Memoria.jsx'
import Corrida from './routes/Corrida.jsx'
import MiniGames from './routes/MiniGames.jsx'
import Desenho from './routes/Desenho.jsx'
import EquipesTruck from './routes/EquipesTruck.jsx'
import PistasTruck from './routes/PistasTruck.jsx'
import InfoTruck from './routes/InfoTruck.jsx'
import InfoFormE from './routes/InfoFormE.jsx'
import Categorias from './routes/Categorias.jsx'


const router = createBrowserRouter([
  {
    //Elemento PAI
    path:'/', element:<App/>,
    errorElement:<Error/>,

    //Elemento FILHO
    children:[
      {path:'/', element:<Home/>},
      {path:'/formula-e/pistas', element:<Pistas/>},
      {path:'/formula-truck/pistas', element:<PistasTruck/>},
      {path:'/login', element:<Login/>},
      {path:'/quem-somos', element:<QuemSomos/>},
      {path:'/comparativos', element:<Comparativos/>},
      {path:'/projeto', element:<Projeto/>},
      {path:'/formula-e/equipes', element:<Equipes/>},
      {path:'/formula-truck/pilotos', element:<EquipesTruck/>},
      {path:'/forum', element:<Forum/>},
      {path:'/conta', element:<Conta/>},
      {path:'/assinatura', element:<Assinatura/>},
      {path:'/loja', element:<Loja/>},
      {path:'/memoria', element:<Memoria/>},
      {path:'/corrida', element:<Corrida/>},
      {path:'/minigames', element:<MiniGames/>},
      {path:'/desenho', element:<Desenho/>},
      {path:'/formula-truck/mais-informacoes', element:<InfoTruck/>},
      {path:'/formula-e/mais-informacoes', element:<InfoFormE/>},
      {path:'/categorias', element:<Categorias/>},

      //Chamando as equipes
      {path:'/formula-e/equipes/mahindra', element:<Mahindra/>}
    ]
  }
])
  
    
  


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
    <GlobalStyled/>
  </StrictMode>,
)
