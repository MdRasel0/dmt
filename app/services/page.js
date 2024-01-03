'use client'
import Service from '../components/Service'
const Services = () => {

    return (
        <div className='h-full container mx-auto py-10 px-10'>
            <h3>Services</h3>
            <div className='grid md:grid-cols-3 gap-5'>
                <Service
                    cardimg="/img/services/message.svg"
                    title="Voice Interconnection"
                    content="SComm ICX provides services to all Mobile operators, all IOS operators... "
                    link="/voice"
                />
                <Service
                    cardimg="/img/services/sound.svg"
                    title="SMS Interconnection"
                    content="Purple Telecom Limited is preparing to offer International Incoming..."
                    link="/sms"
                />
                <Service
                    cardimg="/img/services/wave.svg"
                    title="Number Portability"
                    content="Subject to BTRC's approval, We may offer Number Portability Service... "
                    link="/contact"
                />
            </div>
        </div>
    )
}

export default Services