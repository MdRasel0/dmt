import Image from 'next/image'
import Link from 'next/link';
const Service = ({ title, content, cardimg, link }) => {
    return (
        <div className="h-full w-full bg-sky-700 rounded-lg border-2 border-sky-500 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <Image className="h-96 px-3 w-full md:h-96 md:w-full transition-transform duration-500 group-hover:scale-125" src={cardimg} alt="Service image" height={200} width={200} />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
                <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                    <h1 className="pb-5 font-dmserif text-2xl font-bold text-white">{title}</h1>
                    <p className="mb-3 text-lg text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">{content}</p>
                    <div className="mt-4">
                        <Link href={link}>
                            <button className="py-2 px-4  rounded-lg bg-gradient-to-r from-sky-600 via-sky-400 to-sky-600 hover:bg-sky-700 text-white active:bg-fuchsia-700 focus:outline-none focus:ring focus:ring-slate-300 ...">
                                View Details
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service