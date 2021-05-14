export class UserTo {
    id: number;
    name?: string;
    email: string;

    constructor(id: number, email: string) {
        this.id = id;
        this.email = email;
    }
}