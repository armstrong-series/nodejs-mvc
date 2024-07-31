export interface ApiResponse<T = any> {
    status: 'success' | 'error';
    message: string;
    data?: T;
    error?: string;
}

export class LightwayResponse {
    static success<T>(message: string, data?: T): ApiResponse<T> {
        return {
            status: 'success',
            message,
            data,
        };
    }

    static error(message: string, error?: string): ApiResponse {
        return {
            status: 'error',
            message,
            error,
        };
    }
}
