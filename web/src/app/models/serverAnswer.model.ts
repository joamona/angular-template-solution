export class ServerAnswerModel {
    data: {
      [key: string]: any; // Permite otras propiedades dinámicas si las hay
    }[]=[];
    message: string='';
    ok: boolean = false;
  }