import Header from "@/components/layout/Header"
import CustomButton from "@/components/utils/CustomButton"

const Contato = () => {
  return (
    <>
        <Header />
        <h1>Contato</h1>
       <CustomButton titulo="Login"/>
       <CustomButton user={{name: "Agatha", email: "agatacsoares@gmail.com", photo: "urldafoto"}}/>
    </>
  )
}

export default Contato