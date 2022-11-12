import { NextPage } from 'next'
import Footer from './Footer'
import Navbar from './Navbar'

interface Props {
    children:any
}

const Layout: NextPage<Props> = ({children}) => {
  return <div className='max-w-[1449px] mx-auto'>
            <Navbar/>
            <main>
                {children}
            </main>
            <Footer/>
        </div>
}

export default Layout