import Link from 'next/link';
import Image from "next/image";
import { FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='h-full w-full mt-auto'>
            <div className="bg-gradient-to-b from-gray-700 via-gray-900 to-black text-white py-12">
                <div className="container mx-auto flex flex-wrap justify-center">
                    <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
                        <Link href="/"
                            className="text-white text-2xl font-bold">
                            <Image
                                className="relative h-20 w-20"
                                src="/img/logo/logo.jpg"
                                alt="Logo"
                                width={180}
                                height={37}
                                priority
                            />
                        </Link>
                        <p className='py-3'>DMT is believed to be one of the popular providers of IT services.</p>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
                        <h2 className="text-lg font-semibold mb-4">Services</h2>
                        <ul>
                            <li>Web Design & Development</li>
                            <li>Software Development</li>
                            <li>Mobile App Development</li>
                            <li>AI Development</li>
                            <li>Graphic Design</li>
                            <li>Digital Marketing</li>
                            <li>Search Engine Optimization (SEO)</li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
                        <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
                        <p>Email: info@cyberchamberbd.com</p>
                        <p>Mobile: +8801112223331</p>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
                        <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
                        <div className="flex space-x-4">
                            <Link href="/" className="text-white hover:text-gray-400">
                                <FaFacebook />
                            </Link>
                            <Link href="/" className="text-white hover:text-gray-400">
                                <FaTwitter />
                            </Link>
                            <Link href="/" className="text-white hover:text-gray-400">
                                <FaYoutube />
                            </Link>
                        </div>
                    </div>
                    <div className="w-full text-center mt-8">
                        <hr className="my-4 border-gray-700" />
                        <div className='md:flex justify-between'>
                            <p className='mt-10'>&copy; 2023 DMT. All Rights Reserved.</p>
                            <p className='mt-10'>Design & Developed by <span className='text-orange-500 font-semibold'><Link href="/">codeex</Link></span></p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer