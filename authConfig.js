const msalConfig = {
    auth: {
        clientId: "d9990801-97e6-4f05-ac1c-13bfe7749cd9", // Application (client) ID de Azure Portal
        authority: "https://login.microsoftonline.com/common", // Endpoint para autenticación
        redirectUri: "https://brave-beach-04727251e.4.azurestaticapps.net/game.html", // O la URL de producción
    },
    cache: {
        cacheLocation: "localStorage", // O sessionStorage
        storeAuthStateInCookie: true, // Mejor compatibilidad con navegadores antiguos
    },
};

const loginRequest = {
    scopes: ["user.read"], // Permisos requeridos (Microsoft Graph, etc.)
};

export { msalConfig, loginRequest };
