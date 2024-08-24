import React from "react";

export const DisplayClima = ({ clima }) => {

    try {
        //verificar si esta vacio el clima
        if (!clima) {
            return <div> no hay información del clima </div>
        }

        const climaData = JSON.parse(clima);

        //convirtiendo temperatura a grados celsius
        const temperaturaACelsius = climaData.main.temp - 273.15;

        return (
            <>
                <div>
                    <table className="table table-striped table-bordered">
                        <thead className="thead-dark">
                            <tr>
                                <th>Ciudad</th>
                                <th>Temperatura</th>
                                <th>Descripción</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{climaData.name}</td>
                                <td>{temperaturaACelsius.toFixed(2)}°C</td>// lo muestra con dos decimales
                                <td>{traducirDescripcion(climaData.weather[0].description)}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </>

        );
    
    } catch (error) {
    console.log("Error al mostrar el clima", error);
    return <div> Error al mostrar el clima </div>
    }
};
