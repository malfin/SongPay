import React from "react";
import logo from '../static/img/favicon.svg'

const MyLoader = () => (
    <div className="d-flex justify-content-between align-items-center flex-wrap pt-5">
        {new Array(4).fill(" ").map((_, i) => {
            return (
                <div className="card" aria-hidden="true">
                    <img src={logo} className="card-img-top w-75" alt="Идёт загрузка"/>
                    <div className="card-body">
                        <h5 className="card-title placeholder-glow">
                            <span className="placeholder col-8"/>
                        </h5>
                        <p className="card-text placeholder-glow">
                            <span className="placeholder col-4"/>
                        </p>
                    </div>
                    <div className="card-footer placeholder-glow">
                        <span className="placeholder col-8 mt-2"/>
                    </div>
                </div>
            );
        })}
    </div>
)

export default MyLoader