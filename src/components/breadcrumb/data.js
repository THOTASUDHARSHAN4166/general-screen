import React from 'react'
import { RiProductHuntLine } from "react-icons/ri";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BiIdCard} from "react-icons/bi";
import { CgNotes} from "react-icons/cg";
import { BsPiggyBank } from "react-icons/bs";
import { SiAmazonpay} from "react-icons/si";
import { AiOutlineFileDone } from "react-icons/ai";


const data = [ {
  id: '1',
  photo: <RiProductHuntLine  />,
  text: "ProductSelection",
  sublogo: 'select your desired product',
  logo: <AiOutlineCheckCircle />

},
{
  id: '2',
  photo: <BiIdCard />,
  text: "KYC",
  sublogo: 'Verify your identinty',
  logo: <AiOutlineCheckCircle />

},
{
  id: '3',
  photo: <CgNotes />,
  text: "Application",
  sublogo: 'Your personal and contact details',
  logo: <AiOutlineCheckCircle />

},
{
  id: '4',
  photo: <BsPiggyBank />,
  text: "Funding",
  sublogo: 'Fund your account',
  logo: <AiOutlineCheckCircle />

},
{
  id: '5',
  photo: <SiAmazonpay />,
  text: "Internet Banking",
  sublogo: 'Create your internet banking ',
  logo: <AiOutlineCheckCircle />

},
{
  id: '6',
  photo: <AiOutlineFileDone />,
  text: "Done",
  sublogo: 'Your account is ready to use',
  logo: <AiOutlineCheckCircle />

}

]

export default data;
