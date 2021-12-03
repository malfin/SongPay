import {useEffect} from "react";

const Error404 = () => {
    useEffect(() => {
        document.title = 'Ошибка 404'
    }, [])
    return (
        <>
            <h1>Ошибка 404</h1>
            <p>Ошибка 404, страница не найдена!</p>
        </>
    )
}
export default Error404