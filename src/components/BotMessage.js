import React from "react";
import { useDispatch } from "react-redux";
import BlueStar from "../images/BlueStar.png";
import PDFModal from "./PDFModal";
import { openPdf } from '../store';

export default function BotMessage({ message }) {
  const dispatch = useDispatch();
  const pdfUrl = "https://tourism.gov.in/sites/default/files/2019-04/dummy-pdf_2.pdf"; 

  const handleOpenModal = () => {
    dispatch(openPdf(pdfUrl));
  };

  return (
    <div className="BotMessage">
      <img src={BlueStar} alt="Blue Star" />
      <div className="BotMessagecontent">
        <p>{message}</p>
        <p className="subtitleName">Here are Some Quick Support</p>
        <button onClick={handleOpenModal}>About</button>
        <PDFModal />
      </div>
    </div>
  );
}
