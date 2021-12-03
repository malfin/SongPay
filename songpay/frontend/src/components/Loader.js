import React from "react"


const MyLoader = () => (
    <div className="d-flex align-items-center">
        <strong>Загрузка...</strong>
        <div className="spinner-border ms-auto" role="status" aria-hidden="true"/>
    </div>
)

export default MyLoader