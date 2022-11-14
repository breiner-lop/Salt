import { NextPage } from 'next'
import CardWithIconTitleDescLmore from '../../cards/CardWithIconTitleDescLmore'

interface Props {}

const WeLead: NextPage<Props> = ({}) => {
  return <div id='welead' className='md:px-14 px-5 py-16 bg-white'>
    <h2 className='md:text-5xl text-3xl text-center leading-[122%] text-black'>WE LEAD BY EXAMPLE.</h2>
    <p className='text-center text-gray mt-3 md:w-8/12 mx-auto'>Our leadership team brings over a century of experience in payment solutions and fintech globally. We have channeled that experience to provide a variety of solutions to the cannabis retail sector.
    <br /><br />
    Our mission is to empower cannabis dispensaries to create better customer experiences that organically boost traffic and profit.</p>
    <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 mt-10'>
        <CardWithIconTitleDescLmore icon="/icons/payments.png" title='Salt Payments' description='Ensure the highest quality cannabis retail experience for your customers with a variety of our payment solutions ' href='/salt-payments' iconWidth={29} />
        <CardWithIconTitleDescLmore icon="/icons/finance.png" title='Salt Finance' description='Streamline repayment for all cannabis inventory purchases with our inventory financing and cannabis merchant cash advance services' href='/salt-finance' iconWidth={48} />
        <CardWithIconTitleDescLmore icon="/icons/pos.png" title='Salt POS' description="Create a meaningful, modern customer experience with Salt's integrated POS solutions" href='/salt-pos' iconWidth={26} />
        <CardWithIconTitleDescLmore icon="/icons/loyalty.png" title='Salt Loyalty' description='Gain insights into each customer with reward points for every purchase' href='/salt-loyalty' iconWidth={41} />
    </div>
  </div>
}

export default WeLead