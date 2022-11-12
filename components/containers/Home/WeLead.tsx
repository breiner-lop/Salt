import { NextPage } from 'next'
import CardWithIconTitleDescLmore from '../../cards/CardWithIconTitleDescLmore'

interface Props {}

const WeLead: NextPage<Props> = ({}) => {
  return <div className='px-14 py-16'>
    <h2 className='text-5xl text-center leading-[122%]'>WE LEAD BY EXAMPLE.</h2>
    <p className='text-center text-gray mt-3 w-8/12 mx-auto'>Our leadership team brings over a century of experience in payment solutions and fintech globally. We have channeled that experience to provide a variety of solutions to the cannabis retail sector.
    <br /><br />
    Our mission is to empower cannabis dispensaries to create better customer experiences that organically boost traffic and profit.</p>
    <div className='grid grid-cols-4 gap-8 mt-10'>
        <CardWithIconTitleDescLmore icon="/icons/payments.png" title='Salt Payments' description='Ensure the highest quality cannabis retail experience for your customers with a variety of our payment solutions ' href='/' iconWidth={29} />
        <CardWithIconTitleDescLmore icon="/icons/finance.png" title='Salt Finance' description='Cannabis Merchant Cash Advance and Inventory Financing.' href='/' iconWidth={48} />
        <CardWithIconTitleDescLmore icon="/icons/pos.png" title='Salt POS' description="Create a meaningful, modern customer experience with Salt's integrated POS solutions" href='/' iconWidth={26} />
        <CardWithIconTitleDescLmore icon="/icons/loyalty.png" title='Salt Loyalty' description='Gain insights into each customer with reward points for every purchase
*Insert Factor Four Text*' href='/' iconWidth={41} />
    </div>
  </div>
}

export default WeLead