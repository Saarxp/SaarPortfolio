import { createBrowserRouter } from 'react-router-dom'
import NavbarWrapper from '../layout/navbarWrapper/NavbarWrapper'
import HomePage from '../page/homePage/HomePage'
import AboutPage from '../page/aboutPage/AboutPage'
import ProjectsPage from '../page/projectsPage/ProjectsPage'
import PageNotFound from '../page/pageNotFound/PageNotFound'

const router = createBrowserRouter([{
  path: "/SaarPortfolio/",
  element: <NavbarWrapper />,
  children: [
    {path: "", element: <HomePage />},
    {path: "/SaarPortfolio/about", element: <AboutPage  />},
    {path: "/SaarPortfolio/projects", element: <ProjectsPage />},
    {path: "/SaarPortfolio/*", element:<PageNotFound />}
  ]
}])



export default router