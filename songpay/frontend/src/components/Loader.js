import React from "react";

const MyLoader = () => (
    <div className="d-flex justify-content-between align-items-center flex-wrap pt-5">
        {new Array(6).fill(" ").map((_, i) => {
            return (
                <div className="card" aria-hidden="true" key={i}>
                    <div className="card-body">
                        <h5 className="card-title placeholder-wave">
                            <span className="placeholder col-8 placeholder-lg"/>
                        </h5>
                        <p className="card-text placeholder-wave">
                            <span className="placeholder col-4 placeholder-lg"/>
                        </p>
                    </div>
                    <div className="card-footer placeholder-wave">
                        <span className="placeholder col-8 mt-2 placeholder-lg"/>
                    </div>
                </div>
            );
        })}
    </div>
)

export default MyLoader