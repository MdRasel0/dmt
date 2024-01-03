import Link from 'next/link';
import { FaPhoneAlt, FaRegEnvelope, FaMapMarkerAlt, FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";
const page = () => {
    return (
        <div className='antialiased bg-gray-100 mt-20'>
            <div className='flex w-full min-h-screen justify-center items-center'>
                <div className='flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg text-white overflow-hidden'>
                    <div className='flex flex-col space-y-8 justify-between'>
                        <div>
                            <h1 className='font-bold text-4xl tracking-wide'>Contact Us</h1>
                            <p className='pt-2 text-cyan-100 text-sm'>
                                Contact us form with contact details
                            </p>
                        </div>
                        <div className='flex flex-col space-y-6'>
                            <div className='inline-flex space-x-2 items-center'>
                                <FaPhoneAlt className='text-cyan-100 text-xl' />
                                <span>+8801755632831</span>
                            </div>
                            <div className='inline-flex space-x-2 items-center'>
                                <FaRegEnvelope className='text-cyan-100 text-xl' />
                                <span>support@purple.com.bd</span>
                            </div>
                            <div className='inline-flex space-x-2 items-center'>
                                <FaMapMarkerAlt className='text-cyan-100 text-xl' />
                                <span>Police Plaza Concord, Tower-02
                                    (7th Floor) Plot # 02 Road # 144,
                                    Gulshan-1 Dhaka 1212, Bangladesh.
                                </span>
                            </div>
                        </div>
                        <div className='flex space-x-4 text-lg'>
                            <Link href="/"><FaFacebook /></Link>
                            <Link href="/"><FaYoutube /></Link>
                            <Link href="/"><FaTwitter /></Link>
                        </div>
                    </div>
                    <div className='relative'>
                        <div className='absolute z-0 w-48 h-48 bg-sky-300 rounded-full -right-40 -top-28'>

                        </div>
                        <div className='absolute z-0 w-48 h-48 bg-sky-300 rounded-full -left-40 -bottom-28'>

                        </div>
                        <div className='relative z-10 bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-80'>
                            <form action='' className='flex flex-col space-y-4'>
                                <div>
                                    <label className='text-sm'>Your Name</label>
                                    <input type='text' placeholder='Your Name' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:right-2 focus:ring-green-500' />
                                </div>
                                <div>
                                    <label className='text-sm'>Email Address</label>
                                    <input type='email' placeholder='Email Address' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:right-2 focus:ring-green-500' />
                                </div>
                                <div>
                                    <label className='text-sm'>Email Address</label>
                                    <textarea placeholder='Message' rows='4' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:right-2 focus:ring-green-500'>
                                    </textarea>
                                </div>
                                <button className='inline-block self-end bg-gradient-to-r from-sky-800 via-sky-950 to-sky-900 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm'>Send Message</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default page