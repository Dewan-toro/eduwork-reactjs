import React from "react";
import style from "./jumbotron.module.css";

export default function Jumbotron() {
  return (
    <div className={style.bgImage}>
      <div className={style.centeredText}>
        <h1 className="fs-1 fw-bold lh-base text-primary-emphasis">
          Raih profesi{" "}
          <span className="bg-primary bg-opacity-25 rounded-circle">
            idamanmu,{" "}
          </span>
          kami bantu <br />
          sampai diterima kerja
        </h1>
        <h4 className="fw-bold text-secondary-emphasis">
          tanpa{" "}
          <span className="text-decoration-line-through fst-italic text-danger fw-bold">
            biaya pendaftaran!
          </span>
        </h4>
        <button className="btn btn-primary rounded-pill mt-3 fs-8 font-monospace">
          Daftar Sekarang
        </button>
      </div>
    </div>
  );
}
