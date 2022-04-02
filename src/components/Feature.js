import React from "react";
import styled from "styled-components";

const SidebarWidget = styled.div`
  margin-top: 30px;
`;

const WidgetTitle = styled.div`
  font-size: 25px;
  font-weight: 500;
  margin-bottom: 0;
  margin-top: -7px;
`;

const WidgetFeature = styled.div`
  padding: 35px;
  border: 1px solid rgba(48, 146, 85, 0.2);
  border-radius: 10px;
`;

const WidgetFeatureLi = styled.li`
  cursor: pointer;
  padding: 0 15px;
  height: 50px;
  line-height: 50px;
  display: block;
  color: ${(props) => (props.active ? "white !important" : "")};
  background-color: ${(props) => (props.active ? "#4fa26f" : "")};
  border: 1px solid rgba(48, 146, 85, 0.2);
  border-radius: 10px;
  font-size: 15px;
  text-align: center;
  font-weight: 500;
  margin-top: 10px;
  -webkit-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  &:hover {
    color: #309255;
    background-color: #e7f8ee;
    border-color: #e7f8ee;
  }

  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    font-size: 14px;
    display: block;
  }
`;

const Feature = ({ feats, selectByFeature, activeClass, setActiveClass }) => {
  return (
    <SidebarWidget>
      <WidgetTitle>Features</WidgetTitle>
      <WidgetFeature>
        <ul>
          {feats &&
            feats?.map((feat, index) => (
              <WidgetFeatureLi
                key={index}
                onClick={() => {
                  selectByFeature(feat);
                  setActiveClass(feat);
                }}
                active={activeClass === feat ? true : false}
              >
                {feat}
              </WidgetFeatureLi>
            ))}
        </ul>
      </WidgetFeature>
    </SidebarWidget>
  );
};

export default Feature;
