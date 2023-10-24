import { ConfigProvider, Table, Tabs } from "antd";
import React from "react";

function Tables() {
  const dataSource = [
    {
      key: "1",
      title:
        "Олий таълим муассасаларининг магистратурасига кириш имтиҳонларида иштирок этиш учун онлайн ариза топшириш ахборот тизими",
      url: "https://todoist.com",
      plan: `- абитуриентларнинг аризаларини қайд қилиш (аризаларни шакллантириш ва тегишли ҳужжатларни илова қилиш); 1- абитуриентларнинг аризаларини қабул қилиш (ОТМ қабул комиссияси томонидан аризаларни кўриб чиқиш, қабул қилиш ёки рад этиш); - абитуриентларнинг маълумотлар базасини яратиш (республиканинг барча ОТМлари абитуриентларининг ягона маълумотлар базасини яратиш); 1- магистратура мутахассисликлари ва уларга мувофиқ бакалавриат таълим йўналишлари рўйхатини яратиш; 1- магистратура қабул квоталарини киритиш (ОТМлар ва мутахассисликлар кесимида магистратура қабул квоталарини шакллантириш);`,
      hemis: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "№",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "АТ ёки модул номиxc",
      dataIndex: "title",
      key: "title",
      width: 300,
    },
    {
      title: "АТ ёки модул домени (линки)",
      dataIndex: "url",
      key: "url",
      width: 300,
    },
    {
      title: "АТ ёки модулнинг мақсад ва вазифалари",
      dataIndex: "plan",
      key: "plan",
      width: 300,
    },
    {
      title: "Интеграция қилинган ахборот тизимлари рўйхати",
      dataIndex: "hemis",
      key: "hemis",
      width: 300,
    },
  ];

  return (
    <div className="tables">
      <h2 className="tables__title">
        ОТМ ахборот тизимлари, ахборот ресурслари ҳолати
      </h2>

      <Tabs
        type="card"
        defaultActiveKey="1"
        items={new Array(3).fill(null).map((_, i) => {
          const id = String(i + 1);
          return {
            label: `2.${id}`,
            key: id,
            children: (
              <Table
                title={() => (
                  <h2 className="tables__title" style={{ fontSize: 18 }}>
                    ОТМ ахборот тизимлари, ахборот ресурслари ҳолати
                  </h2>
                )}
                dataSource={dataSource}
                columns={columns}
                style={{ width: "1180px" }}
                scroll={{ x: 1240 }}
              />
            ),
          };
        })}
      />
    </div>
  );
}

export default Tables;
