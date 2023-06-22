import React from "react";
import Header from "./Header";
import Footer from "./Footer";
const Parent =(props)=>{
    return (
        <div className="PageLayout">
            <Header></Header>
                {props.children}
            <Footer></Footer>
        </div>
    )
}
export default Parent;