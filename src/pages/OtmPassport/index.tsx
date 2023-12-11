import { Modal, Steps } from "antd";
import React from "react";
import InfoCard from "./InfoCard";

function OTMPASSPORT() {
  return (
    <div className="passport">
      <InfoCard
        title="OTM to‘g‘risida umumiy ma’lumotlar"
        url="https://akt.edu.uz/api/aboutUniversity"
      />

      <InfoCard
        url="https://akt.edu.uz/api/universityLicense"
        title="OTM tashkil etilishining huquqiy asoslari"
        nodataBtn="Hujjat qo‘shish"
        nodataTitle="Hujjatni qo‘shishni boshlang"
        nodataInfo="Oliy ta’lim tashkil etilganligini asoslovchi hujjat to‘g‘risidagi 
          ma’lumotlarni qo‘shing"
      />

      <InfoCard
        url="https://akt.edu.uz/api/itResponsibleEmployee"
        title="Rahbariyat tarkibidan iborat aktni joriy etish va rivojlantirish uchun
        ma’sul shaxsning mavjudligi"
        nodataInfo="Oliy ta’limning prorektori, RTT markazi direktori, axborot xavfsizligi
         bo‘yicha ma’sul xodimning ma’lumotlarini qo‘shing"
      />

      <InfoCard
        url="https://akt.edu.uz/api/buildingRate"
        title="Mavjud bino va inshootlar"
        nodataInfo="Oliy ta’limning prorektori, RTT markazi direktori, axborot xavfsizligi
         bo‘yicha ma’sul xodimning ma’lumotlarini qo‘shing"
      />
    </div>
  );
}

export default OTMPASSPORT;
