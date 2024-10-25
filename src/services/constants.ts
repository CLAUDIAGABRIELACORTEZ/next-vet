export const API_CONFIG = {
    BASE_URL: 'http://localhost:3333/api',
    ENDPOINTS: {
        ADM_PERSONAL:   '/admin/personal',
        ADM_CLIENTES:   '/admin/clientes',
        ADM_MASCOTAS:   '/admin/mascotas',
        ADM_LOGS:       '/admin/logs',
        CLI_MASCOTAS:   '/cliente/mascotas'
    },
    ITEMS_PER_PAGE: 6
} as const;
