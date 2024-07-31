import { Request, Response } from 'express';
import AuthService from '../../services/Auth/AuthService';
import { LightwayResponse } from '../../utils/lightwayResponse';

class AuthController {

    constructor(private authService: typeof AuthService) {}

    async create(request: Request, response: Response): Promise<void> {
        try {
            const user = await this.authService.create(request.body);
            response.status(201).json(LightwayResponse.success('Request Completed', user));
        } catch (error) {
            this.handleErrorResponse(error, response);
        }
    }

    async getUserById(request: Request, response: Response): Promise<void> {
        try {
            const user = await this.authService.getUserById(request.params.id);
            if (!user) {
                response.status(404).json(LightwayResponse.error('Unknown User!'));
                return;
            }
            response.status(200).json(user);
        } catch (error) {
            this.handleErrorResponse(error, response);
        }
    }

    async update(request: Request, response: Response): Promise<void> {
        try {
            const user = await this.authService.update(request.params.id, request.body);
            if (!user) {
                response.status(404).json(LightwayResponse.error('Unknown User!'));
                return;
            }
            response.status(200).json(user);
        } catch (error) {
            this.handleErrorResponse(error, response);
        }
    }

    async delete(request: Request, response: Response): Promise<void> {
        try {
            await this.authService.delete(request.params.id);
            response.status(200).json(LightwayResponse.success('User deleted successfully'));
        } catch (error) {
            this.handleErrorResponse(error, response);
        }
    }

    private handleErrorResponse(error: unknown, response: Response): void {
        if (error instanceof Error) {
            response.status(400).json({ error: error.message });
        } else {
            response.status(400).json({ error: 'An unknown error occurred' });
        }
    }
}

export default AuthController;
