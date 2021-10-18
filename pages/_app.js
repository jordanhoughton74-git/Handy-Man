import Header from "../components/header";
import Footer from "../components/footer";

import 'tailwindcss/tailwind.css'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
<>
  <Header />
  <Component {...pageProps} />
  <Footer />
</>  
  )
}

export default MyApp
