import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    getHello(){
        return 'Hello World!';
    }

    putHello() {
        return 'yes!!!!!';
    }

    postHello() {
        return 'c\'est fini';
    }
}

