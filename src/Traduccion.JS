export const traducirDescripcion = (descripcionEnIngles) => {
    // Mapeo de descripciones en ingles a español
    const traducciones = {
        "clear sky": "cielo despejado",
        "few clouds": "pocas nubes",
        "scattered clouds": "nubes dispersas",
        "broken clouds": "nubes rotas",
        "shower rain": "lluvia ligera",
        "rain": "lluvia",
        "thunderstorm": "tormenta",
        "snow": "nieve",
        "mist": "niebla",
        "smoke": "humo",
        "haze": "neblina",
        "dust": "polvo",
        "fog": "niebla",
        "sand": "arena",
        "ash": "ceniza",
        "squall": "chubasco",
        "tornado": "tornado"
    };
    //retornar la traducción o la descripción en ingles si no se encuentra en el mapeo
    return traducciones[descripcionEnIngles] || descripcionEnIngles;
};