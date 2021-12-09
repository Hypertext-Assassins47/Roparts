import React from "react";
import { API } from "../config";


//for this part starting from minute 3:11 it's related to backend
const ShowImage = ({item,url}) =>{
<div className="product-img">
    <img src={`${API}/${url}/photo/${item._id}`}
    alt={item.name}
    className="bm-3"
    style={{maxHeight:"100%",maxWidth:"100%"}}
    />
</div>
};

export default ShowImage;