import { Request, Response } from 'express';
import db from '../connection';

export default class ConnectionsController {

    async index(request: Request, response: Response) {
        const totalConnections = await db('connections').count('* as total').first();
        
        return response.status(201).json(totalConnections);
    }

    async create(request: Request, response: Response) {
        const { user_id } = request.body;

        await db('connections').insert({
            user_id,
        })

        return response.status(201).send();
    }
}