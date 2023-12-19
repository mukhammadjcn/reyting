import { Button, Modal } from "antd";
import React, { useEffect, useState } from "react";
import Form1 from "./Form1";
import axios from "axios";
import { headers } from "src/server/Host";
import Form2 from "./Form2";
import Form3 from "./Form3";
import Form4 from "./Form4";

function InfoCard(props: any) {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [edit, setEdit] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const GetData = () => {
    axios.get(props?.url, { headers }).then((res) => setData(res.data));
  };

  useEffect(() => {
    GetData();
  }, []);

  return (
    <div className="passport__item">
      <div className="flex">
        <h2 className="tables__title">
          {props?.title || `OTM to‘g‘risida umumiy ma’lumotlar`}
        </h2>

        {data.length > 0 && (
          <div className="passport__action">
            {edit ? (
              <div className="flex" style={{ gap: 16 }}>
                <Button onClick={() => setEdit(false)}>Bekor qilish</Button>
                <Button type="primary" onClick={() => setCount(count + 1)}>
                  O‘zgarishlarni saqlash
                </Button>
              </div>
            ) : (
              <Button onClick={() => setEdit(true)} type="primary">
                Ma’lumotlarni tahrirlash
              </Button>
            )}
          </div>
        )}
      </div>

      {data.length > 0 ? (
        <div className="passport__info">
          {props?.url === `https://akt.edu.uz/api/aboutUniversity` ? (
            <Form1
              edit={!edit}
              data={data[0]}
              url={props?.url}
              setEdit={setEdit}
              setData={setData}
              countEdit={count}
            />
          ) : props?.url === `https://akt.edu.uz/api/universityLicense` ? (
            <Form2
              edit={!edit}
              data={data[0]}
              url={props?.url}
              setEdit={setEdit}
              setData={setData}
              countEdit={count}
            />
          ) : props?.url === `https://akt.edu.uz/api/itResponsibleEmployee` ? (
            <Form3
              edit={!edit}
              data={data[0]}
              url={props?.url}
              setEdit={setEdit}
              setData={setData}
              countEdit={count}
            />
          ) : props?.url === `https://akt.edu.uz/api/buildingRate` ? (
            <Form4
              edit={!edit}
              data={data[0]}
              url={props?.url}
              setEdit={setEdit}
              setData={setData}
              countEdit={count}
            />
          ) : (
            <div></div>
          )}
        </div>
      ) : (
        <div className="passport__nodata">
          <h3>{props?.nodataTitle || `Ma’lumot qo‘shishni boshlang`}</h3>
          <p>
            {props?.nodataInfo ||
              `Oliy ta’lim muassasasining nomi, rahbari, yuridik manzili ma’lumotlarini qo‘shing`}
          </p>
          <Button type="primary" onClick={() => setOpenModal(true)}>
            {props?.nodataBtn || `Ma’lumot qo‘shish`}
          </Button>
        </div>
      )}

      <Modal
        width={840}
        footer={false}
        open={openModal}
        className="passport__modal"
        onCancel={() => setOpenModal(false)}
      >
        {props?.url === `https://akt.edu.uz/api/aboutUniversity` ? (
          <Form1
            edit={false}
            isModal={true}
            url={props?.url}
            setOpenModal={setOpenModal}
            getData={() => GetData()}
          />
        ) : props?.url === `https://akt.edu.uz/api/universityLicense` ? (
          <Form2
            edit={false}
            isModal={true}
            url={props?.url}
            setOpenModal={setOpenModal}
            getData={() => GetData()}
          />
        ) : props?.url === `https://akt.edu.uz/api/itResponsibleEmployee` ? (
          <Form3
            edit={false}
            isModal={true}
            url={props?.url}
            setOpenModal={setOpenModal}
            getData={() => GetData()}
          />
        ) : props?.url === `https://akt.edu.uz/api/buildingRate` ? (
          <Form4
            edit={false}
            isModal={true}
            url={props?.url}
            setOpenModal={setOpenModal}
            getData={() => GetData()}
          />
        ) : (
          <div></div>
        )}
      </Modal>
    </div>
  );
}

export default InfoCard;
