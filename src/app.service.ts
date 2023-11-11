import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  isBase64 (data: string): boolean {
    //const decoded = atob('data')
    return Buffer.from(data, 'base64').toString('base64') == data
  }
}
