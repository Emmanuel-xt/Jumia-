import React from "react";
import officialstore from  '../jumiaMedia/pageRandomImages/officialstore.jpg'

const OffcialStore = () => {
    return ( 
        <>
        <section className="officailstore-con ">
            <div className="heading">
                <h2>Official Store</h2>
            </div>

            <div className="image">
                <img src={officialstore} alt="" />

            </div>
        </section>
        </>
     );
}
 
export default OffcialStore;