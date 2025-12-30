
export function Contact() {
    return (
        <div className="flex flex-col items-center bg-gray-50 p-4">
            <h1 className="font-bold text-2xl text-gray-800 mb-4">
                Tæmú Shop
            </h1>
            <img src="./map.png" alt="Map to contact page" />
            <div className="grid grid-cols-3 gap-2 p-4 bg-gray-50 rounded-md border border-gray-300">

                <address className="text-gray-700">
                    <h4 className="font-semibold text-gray-800 mb-2">
                        Address:
                    </h4>
                    Tæmú Shop<br />
                    Karl Johans Gate 22<br />
                    0954
                </address>

                <div>
                    <img src="contact.jpg" alt="Take contact" className="object-fill" />
                </div>
                <address className="text-gray-700">
                    <p>
                        Tel: <a href="tel:+4754321016" className="text-amber-600 hover:text-amber-700 transition-colors">+47 54 32 10 16</a>
                    </p>
                    <p>
                        Email: <a href="mailto:webshop@tæmu.com" className="text-amber-600 hover:text-amber-700 transition-colors">webshop@tæmu.com</a>
                    </p>
                </address>
            </div>
        </div>)
}