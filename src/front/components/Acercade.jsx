import { Link } from "react-router-dom";

export const Acercade = () => {
    return (
        // Usamos 'container' para centrar y 'mt-5 pt-5' para que el Navbar no lo tape
        <div className="container mt-5 pt-5 mb-5">
            <h1 className="display-5 fw-bold">Acerca de la Aplicación</h1>
            <p className="lead">
                Esta aplicación fue diseñada por un grupo de desarrolladores estudiantes
                con la finalidad de ayudar a las personas a crear un resumen de sus rutinas
                facilitando la gestión y exportación de datos
                de manera eficiente.
                Lo principal es permitir a los usuarios visualizar
                información clave y generar reportes de la manera mas sencilla
                para ayudarlo a tener de una forma mas comoda un resumen de su dia a dia.
                Esta rutina estara definida
                por el usuario en la que podra guardar su progreso y a su vez editar para hacer las modificaciones que requiera.
                Tambien  contara  con premios como, medallas y trofeos por cumplir su rutina tal como se la haya propuesto
                y asi generar una satisfaccion personal en cada avance.

            </p>

            <hr />

            <h3>Información del Sistema</h3>
            <ul className="list-group shadow-sm border-secondary">
                <li className="list-group-item bg-transparent text-reset border-secondary">
                    <strong>Versión de la App:</strong> 1.0.0
                </li>
                <li className="list-group-item bg-transparent text-reset border-secondary">
                    <strong>React:</strong> v18.2.0
                </li>
                <li className="list-group-item bg-transparent text-reset border-secondary">
                    <strong>Vite:</strong> v4.5.9
                </li>
                <li className="list-group-item bg-transparent text-reset border-secondary">
                    <strong>jsPDF:</strong> v2.5.1
                </li>
                <li className="list-group-item bg-transparent text-reset border-secondary">
                    <strong>React Router:</strong> v6.18.0
                </li>
            </ul>
            <div className="mt-5 mb-5 text-center">
                <Link to="/" className="btn btn-outline-primary">
                    <i className="fa-solid fa-house me-2"></i> Volver al Inicio
                </Link>
            </div>
        </div>
    );
};


export default Acercade;