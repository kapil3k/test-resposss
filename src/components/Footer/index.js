import React from "react";
import { Col, Row } from "antd";

const Footer = () => {
  return (
    <div className="mx-3">
      <Row gutter={16} style={{ maxWidth: 1100, margin: "auto" }}>
        <Col xs={24} sm={6} className="mt-2">
          <h5>
            <strong>Product</strong>
          </h5>
          <h6>Features</h6>
          <h6>Pricing</h6>
          <h6>Base Knowledge</h6>
          <h6>Develop API</h6>
          <h6>Intigrations</h6>
        </Col>
        <Col xs={24} sm={6} className="mt-2">
          <h5>
            <strong>Resources</strong>
          </h5>
          <h6>Blog</h6>
          <h6>Pricing</h6>
          <h6>Case Studies</h6>
          <h6>FAQ’s</h6>
        </Col>
        <Col xs={24} sm={6} className="mt-2">
          <h5>
            <strong>Free Tools</strong>
          </h5>
          <h6>PDF to Excel</h6>
          <h6>Online OCR</h6>
          <h6>Extract Table</h6>
          <h6>OCR Chrome Extension</h6>
          <h6>PDF to JPG</h6>
        </Col>
        <Col xs={24} sm={6} className="mt-2">
          <h5>
            <strong>Company</strong>
          </h5>
          <h6>About us</h6>
          <h6>Careers</h6>
          <h6>Contact us</h6>
        </Col>
      </Row>
      <footer className="footer">
        <div style={{ fontSize: 20 }} className="m-3 mt-5">
          Follow us on : <i className="fa fa-linkedin mx-2"></i>
          <i className="fa fa-twitter mx-2"></i>
          <i className="fa fa-instagram mx-2"></i>
        </div>
        <hr />
        <div className="mx-3 my-4">
          <p>&copy; 2023 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
