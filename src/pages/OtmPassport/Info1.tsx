import { Form, Modal, Steps } from "antd";
import React, { useState } from "react";

function Info1() {
  const [step, setStep] = useState(0);

  return (
    <div className="passport_1">
      <Modal width={720} title="OTM to‘g‘risida umumiy ma’lumotlar" open>
        <Steps
          current={step}
          style={{ marginTop: 28 }}
          items={[
            {
              title: "Oliy ta’lim haiqda",
            },
            {
              title: "OTM rahbari",
            },
            {
              title: "Yuridik manzil",
            },
          ]}
        />

        <Form></Form>
      </Modal>
    </div>
  );
}

export default Info1;
