export async function getMsalConfig() {
    // Cambia la URL a la de tu backend desplegado
    const response = await fetch('https://dodgekoopaback-cgc4grgdefhxakav.centralus-01.azurewebsites.net/api/secret/idclient');
    
    const jsonResponse = await response.json();
    console.log("Contenido del cuerpo procesado (JSON):", jsonResponse);
    
    console.log("Respuesta del backend:", jsonResponse);
    if (!response.ok) {
        throw new Error('Error al obtener el Client ID desde el backend');
    }

    const { secret } = await response.json();


    // Configuración dinámica
    return {
        auth: {
            clientId: secret.value, // Obtiene el Client ID desde el backend
            authority: "https://login.microsoftonline.com/common", // Ajusta según tu tenant
            redirectUri: "https://brave-beach-04727251e.4.azurestaticapps.net/game.html", // URL de tu frontend en producción
        },
        cache: {
            cacheLocation: "localStorage", // Cambia a sessionStorage si prefieres
            storeAuthStateInCookie: true, // Compatibilidad con navegadores antiguos
        },
        system: {
            loggerOptions: {
                loggerCallback: (level, message) => {
                    console.log(`[${level}]: ${message}`);
                },
                piiLoggingEnabled: true,
            },
        },
    };
}

export const loginRequest = {
    scopes: ["User.Read"], // Permisos requeridos (Microsoft Graph, etc.)
};
