import React from "react";
import Menu from "./Menu";
import "../productStyle.css";

const Layout = ({
  title = "Title",
  description = "Description",
  children,
  className,
  ...props
}) => {
  return (
    <div>
    <Menu />
    <div className="layout-container">
        <div className="jumbotron">
      { /*   <div>
            <h2>{title}</h2>
           <p className="lead">{description}</p>
          </div>
          */}
        </div>
      
        <div className={className}>{children}</div>

         
      </div>
      
  
   </div> 
   
  );
};

export default Layout;
