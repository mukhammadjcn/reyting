import { Button } from "antd";
import { EditOutlined } from "@ant-design/icons";

function CardItem({ card, cardType, setEditCard }: any) {
  return (
    <div className={`card card__${cardType}`} key={card?.title}>
      <div className="card__header">
        <h2>{card?.title}</h2>
        <Button
          icon={<EditOutlined />}
          onClick={() => setEditCard(card?.url)}
        />
      </div>
      <div className="card__body">
        {card?.values?.map((section: any) => (
          <div className="flex" key={section?.title}>
            <h3>{section?.title}</h3>

            {String(section?.count)?.includes("https://") ? (
              <a
                href={section?.count}
                target="_blank"
                style={{ color: "blue" }}
              >
                Havolaga o'tish
              </a>
            ) : (
              <b>
                {typeof section?.count === "boolean" && section?.count
                  ? `Bor`
                  : typeof section?.count === "boolean" && !section?.count
                  ? `Yo'q`
                  : section?.count}
              </b>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardItem;
