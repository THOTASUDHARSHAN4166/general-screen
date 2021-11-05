import React from 'react';
import { AiOutlineDropbox } from "react-icons/ai";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BiIdCard } from "react-icons/bi";
import { CgNotes } from "react-icons/cg";
import { BsPiggyBank } from "react-icons/bs";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { AiOutlineFileDone } from "react-icons/ai";

const data = [ {
  id: '1',
  photo: <AiOutlineDropbox />,
  text: "Product Selection",
  sublogo: 'Select your desired product',
  logo: <AiOutlineCheckCircle />,
  active: true,
  completed:false

},
{
  id: '2',
  photo: <BiIdCard />,
  text: "KYC",
  sublogo: 'Verify your identinty',
  logo: <AiOutlineCheckCircle />,
  active: false,
  completed:false


},
{
  id: '3',
  photo: <CgNotes />,
  text: "Application",
  sublogo: 'Your personal and contact details',
  logo: <AiOutlineCheckCircle />,
  active:false,
  completed:false

},
{
  id: '4',
  photo: <BsPiggyBank />,
  text: "Funding",
  sublogo: 'Fund your account',
  logo: <AiOutlineCheckCircle />,
  active: false,
  completed:false

},
{
  id: '5',
  photo: < HiOutlineDesktopComputer />,
  text: "Internet Banking",
  sublogo: 'Create your internet banking ',
  logo: <AiOutlineCheckCircle />,
  active: false,
  completed:false

},
{
  id: '6',
  photo: <AiOutlineFileDone />,
  text: "Done",
  sublogo: 'Your account is ready to use',
  logo: <AiOutlineCheckCircle />,
  active: false,
  completed:false

}

]

export default data;
