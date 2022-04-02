// singleton clássico
// essa forma só funciona em TS
export class MyDatabaseClassic {
  private static instance: MyDatabaseClassic | null = null;

  // o private não deixa fazer o 'new'
  private constructor() {}

  public static getInstance(): MyDatabaseClassic {
    if (!MyDatabaseClassic.instance) {
      MyDatabaseClassic.instance = new MyDatabaseClassic();
    }

    return MyDatabaseClassic.instance;
  }
}
