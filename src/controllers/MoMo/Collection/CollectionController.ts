
import { Request, Response } from 'express';
import CollectionService from '../../../services/MoMo/Collection/CollectionService';
import { LightwayResponse } from '../../../utils/lightwayResponse';
import { generateToken } from '../../../utils/jwt';
import logger from '../../../utils/logger';

class CollectionController {

    public async createInvoice(request: Request, response: Response): Promise<void> {
        try {
            const data = request.body;
            const result = await CollectionService.createInvoice(data);
            response.status(201).json(LightwayResponse.success('Invoice created successfully', result));
        } catch (error) {
            logger.error(`Error creating invoice: ${error}`);
            this.handleErrorResponse(error, response);
        }
    }

    private handleErrorResponse(error: unknown, response: Response): void {
        if (error instanceof Error) {
            response.status(400).json(LightwayResponse.error(error.message));
        } else {
            response.status(400).json(LightwayResponse.error('An unknown error occurred'));
        }
    }
}

export default new CollectionController();
