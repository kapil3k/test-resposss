// CarouselComponent.js
import React from "react";
import { Button, Card, Col, Flex, Row, Typography } from "antd";
import useWindowSize from "../../customHook/useWindowSize";

const imgStyle = {
  display: "block",
  width: 273,
  height: 273,
  objectFit: "cover",
};

const imgStyleMobile = {
  display: "block",
  width: "100%",
  height: 273,
  objectFit: "cover",
};

const testimonalData = [
  {
    imgLink:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the",
    name: "Henry Finley",
  },
  {
    imgLink:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the",
    name: "Charlie William",
  },
  {
    imgLink:
      "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the",
    name: "Isabella Freya",
  },
  {
    imgLink:
      "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the",
    name: "Louis Bonnie",
  },
  {
    imgLink:
      "https://images.pexels.com/photos/343717/pexels-photo-343717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the",
    name: "Chloe Hallie",
  },
  {
    imgLink:
      "https://plus.unsplash.com/premium_photo-1664870883044-0d82e3d63d99?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the",
    name: "Scarlett Ellie",
  },
];

const TestimonialSection = () => {
  const windowSize = useWindowSize();

  return (
    <div className="my-5 mx-3 d-flex flex-wrap">
      <Row gutter={16}>
        {testimonalData.map(({ imgLink, description, name }) => (
          <Col md={24} lg={12}>
            <Card
              className="shadow-lg my-2"
              bodyStyle={{
                padding: 0,
                overflow: "hidden",
              }}
            >
              <Flex vertical={windowSize < 700} justify="space-between">
                <img
                  alt="avatar"
                  className="rounded"
                  src={imgLink}
                  style={windowSize < 700 ? imgStyleMobile : imgStyle}
                />
                <Flex
                  vertical
                  align="flex-end"
                  justify="space-between"
                  style={{
                    padding: 32,
                  }}
                >
                  <Typography.Title level={3}>{description}</Typography.Title>
                  <Typography.Title level={4} className="text-secondary">
                    {name}
                  </Typography.Title>
                </Flex>
              </Flex>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default TestimonialSection;
