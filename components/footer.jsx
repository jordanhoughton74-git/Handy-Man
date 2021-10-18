
export default function Footer(){
    return(
        <>
    <div className="bg-gray-600">
        <div className="wrapper">
            <div className="grid grid-cols-1 md:grid-cols-3 text-white py-12 px-4 leading-loose md:px-12">
                <div className="order-first md:order-second text-center md:text-left my-auto">
                    <p>Email: HandyMan@gmail.com</p>
                    <p>Tel: 07999445555</p>
                </div>
                <div className="order-second md:order-first text-center my-auto">
                    <p>HandyMan ©2021</p>
                    <p>Website created by Houghton Web Design</p>
                </div>
                <div className="text-center md:text-right order-3 my-auto">
                    <p>Follow Us:</p>
                    <p>Facebook</p>
                    <p>Instagram</p>
                </div>
            </div>
        </div>
    </div>


        </>
    )
}