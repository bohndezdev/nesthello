import { Controller, Get } from '@nestjs/common';

@Controller('hello')
export class HelloController {

  @Get()
  getHello() {
    return {
      message: '¡Hola Marcelo!',
      ok: 'Estoy funcionando'
    }
  }

}
