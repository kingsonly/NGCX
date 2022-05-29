import { Logo } from "assets";
import React from "react";
import { FiHeadphones, FiMapPin, FiSend } from "react-icons/fi";
import { Colors } from "theme/colors";
import { SectionHeading } from "..";

const FooterColData = ["About us", "Delivery Imformation", "Privacy Policy"];

const FooterColumn = () => {
  return (
    <div>
      <SectionHeading text="Company" />

      <ul>
        {FooterColData.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const index = () => {
  return (
    <footer className="text-gray-400 px-1 md:px-10 py-10 flex flex-wrap md:flex-nowrap justify-between border-b border-b-ncgx-light-green font-poppins">
      <section>
        <img src={Logo} alt="logo" className="w-32 h-32" />

        <ul>
          <li className="flex items-start mb-3">
            <FiMapPin color={Colors["ncgx-green"]} size={20} />
            <p className="ml-5 ">
              <span className="font-bold">Address: </span>
              <span>
                Prince Adelowo Adedeji St, Lekki Phase I, Lagos, Nigeria ·
              </span>
            </p>
          </li>
          <li className="flex items-start mb-3">
            <FiHeadphones color={Colors["ncgx-green"]} size={20} />
            <p className="ml-5">
              <span className="font-bold">Call Us: </span>
              <span>(+234) - 901-888-8818 </span>
            </p>
          </li>
          <li className="flex items-start mb-3">
            <FiSend color={Colors["ncgx-green"]} size={20} />
            <p className="ml-5">
              <span className="font-bold">Email: </span>
              <span>support@ngcx.ng </span>
            </p>
          </li>
        </ul>
      </section>

      {[1, 2, 3].map((i) => (
        <FooterColumn />
      ))}

      <section>
        <SectionHeading text="App & Payment" />

        <p>Install NCGX App from App Store or Google Play</p>
      </section>
    </footer>
  );
};

export default index;
