import axios, { AxiosInstance } from 'axios';


class  CollectionService
{
    private axiosInstance: AxiosInstance;
    private token: string | null = null;
    private tokenExpiry: number | null = null;


    constructor() {
        this.axiosInstance = axios.create({
            baseURL: process.env.MOMO_BASE_URL,
            headers: {
                'X-Reference-Id': process.env.MOMO_REFRENCE_ID,
                'Content-Type':  'application/json',
                'Cache-Control': 'no-cache'
            }
        });
    }

    async createInvoice(data: any): Promise<any> {
        try {
            const token = await this.getToken();
            const response = await this.axiosInstance.post('/collection/v2_0/invoice', data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'X-Target-Environment': process.env.MOMO_TARGET_ENVIRONMENT,
                    'Ocp-Apim-Subscription-Key': process.env.MOMO_SUB_KEY
                }
            });
            return {
                "message" :  "Request Completed",
                "data"    :   response.data
            };
        } catch (error) {
            throw new Error(`error while attempting invoice: ${error}`);
        }
    }


    private async getToken(): Promise<string> {
        if (this.token && this.tokenExpiry && Date.now() < this.tokenExpiry) {
            return this.token;
        }

        try {
            const response = await this.axiosInstance.post('/collection/token/', null, {
                headers: {
                    Authorization: `Bearer ${process.env.MOMO_BEARER_TOKEN}`  
                },
            });

            this.token = response.data.access_token;
            this.tokenExpiry = Date.now() + (3600 * 1000); 
            return this.token || '';
        } catch (error) {
            console.error('Failed to fetch token:', error);
            throw new Error('Failed to fetch token');
        }
    }
}

export default new CollectionService();