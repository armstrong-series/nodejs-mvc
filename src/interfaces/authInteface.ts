export interface IUserInterface
 {
    create(data: any): Promise<any>;
    getUserById(id: string): Promise<any>;
    update(id: string, data: any): Promise<any>;
    delete(id: string): Promise<void>;
}
