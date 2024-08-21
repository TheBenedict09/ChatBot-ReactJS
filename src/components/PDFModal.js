import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import "../CSS/PDFModal.css";
import { closePdf } from '../store';

// pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.6.347/pdf.worker.min.js`;
pdfjs.GlobalWorkerOptions.
workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function PDFModal() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.pdf.isOpen);
  const pdfUrl = useSelector((state) => state.pdf.pdfUrl);

  if (!isOpen) return null;

  const handleClose = () => {
    dispatch(closePdf());
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={handleClose}>
          &times;
        </button>
        <h2>About ATCO Energy Systems</h2>
        <Document
          file={"https://tourism.gov.in/sites/default/files/2019-04/dummy-pdf_2.pdf"}
          onLoadError={(error) => console.error('Error while loading document! ' + error.message)}
        >
          <Page pageNumber={1} />
        </Document>
      </div>
    </div>
  );
}
