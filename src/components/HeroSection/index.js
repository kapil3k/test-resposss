import { Form, Input, Button, Col, Row, InputNumber } from "antd";
import axios from "axios";
import React, { useRef } from "react";
import useWindowSize from "../../customHook/useWindowSize";

const HeroSection = () => {
  const formRef = useRef();
  const windowSize = useWindowSize();

  const onSubmit = () => {
    const formValues = formRef.current.getFieldsValue();
    const values = {
      full_name: formValues?.fullName,
      work_email: formValues?.workEmail,
      phone_number: formValues?.phoneNumber,
      company_name: formValues?.companyName,
      job_title: formValues?.jobTitle,
      no_of_docs: formValues?.document,
    };
    axios
      .post("https://webhook.site/a4f01968-888c-4d92-8211-a793a112fe5d", values)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => console.log("finally"));
  };

  return (
    <div
      style={{
        backgroundImage: "linear-gradient(to bottom, black, midnightblue)",
      }}
    >
      <Row
        style={{
          maxWidth: 1200,
          display: "flex",
          justifyContent: "center",
          margin: "auto",
        }}
        className="text-light px-3"
      >
        <Col sm={24} md={14} style={{ marginTop: 100 }}>
          <h5>DOCUMENT AI PLATFORM</h5>
          <h1>
            Extract data from unstructured <br /> documents
          </h1>
          <h3>Easily. Efficiently. Accurately.</h3>
          <p>Ranked as High Performer on G2 (4 of 5)</p>
          <div>
            <span
              style={{ marginRight: 5 }}
              className="fa fa-star checked"
            ></span>
            <span
              style={{ marginRight: 5 }}
              className="fa fa-star checked"
            ></span>
            <span
              style={{ marginRight: 5 }}
              className="fa fa-star checked"
            ></span>
            <span
              style={{ marginRight: 5 }}
              className="fa fa-star checked"
            ></span>
          </div>
          <Button size="large" type="primary">
            Start 14-days free trial
          </Button>
          <Button size="large" className={windowSize > 700 ? "m-2" : "my-2"}>
            Start Product Tour
          </Button>
          <p className="text-secondary">No credit card required</p>
        </Col>
        <Col
          sm={24}
          md={10}
          className={
            windowSize > 700
              ? "bg-white rounded p-5 my-5"
              : "bg-white rounded p-4 my-5"
          }
        >
          <Form
            id="enquiryForm"
            layout="vertical"
            ref={formRef}
            onFinish={onSubmit}
          >
            <Row gutter={16}>
              <Col sm={24} className="w-100">
                <Form.Item
                  name="fullName"
                  label="Full Name"
                  rules={[
                    { required: true, message: "Please enter full Name" },
                  ]}
                >
                  <Input className="w-100" placeholder="Enter Full Name" />
                </Form.Item>
              </Col>
              <Col sm={24} className="w-100">
                <Form.Item
                  name="workEmail"
                  label="Work Email"
                  rules={[
                    { required: true, message: "Please enter full Name" },
                    {
                      message: "Work Email Only!",
                      pattern: new RegExp(
                        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
                      ),
                    },
                  ]}
                >
                  <Input placeholder="Enter work email" />
                </Form.Item>
              </Col>
              <Col sm={24} className="w-100">
                <Form.Item
                  name="phoneNumber"
                  label="Phone Number"
                  rules={[
                    {
                      required: true,
                      message: "Contact only!",
                      pattern: new RegExp(
                        /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/
                      ),
                    },
                  ]}
                >
                  <Input placeholder="+919999999999" />
                </Form.Item>
              </Col>
              <Col sm={24} className="w-100">
                <Form.Item
                  name="companyName"
                  label="Company Name"
                  rules={[
                    { required: true, message: "Please enter company Name" },
                  ]}
                >
                  <Input placeholder="Enter company Name" />
                </Form.Item>
              </Col>
              <Col sm={24} className="w-100">
                <Form.Item
                  name="jobTitle"
                  label="Job Title"
                  rules={[
                    { required: true, message: "Please enter job title" },
                  ]}
                >
                  <Input placeholder="Enter job title" />
                </Form.Item>
              </Col>
              <Col sm={24} className="w-100">
                <Form.Item
                  name="document"
                  label="Document Processed/Month"
                  rules={[
                    {
                      required: true,
                      message: "Please enter document processed/month",
                    },
                  ]}
                >
                  <InputNumber
                    min={0}
                    placeholder="Enter document processed/month"
                    className="w-100"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row className="w-100 d-flex justify-content-center">
              <Button
                size="large"
                form="enquiryForm"
                type="primary"
                htmlType="submit"
              >
                Schedule Demo
              </Button>
            </Row>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default HeroSection;
