import { CreateCoin } from "../models/coin"
export function createCoin(id: string, name: string, code: string, price: string ): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        let getCoin = CreateCoin.build({
          id,
          name,
          code,
          price
        });
        await CreateCoin.save();
        resolve(CreateCoin);
      } catch (error) {
        reject(error);
      }
    });
  }
export function getCoinByCode(id: any) : any {
    return new Promise ( async (resolve, reject) => {
        resolve( await CreateCoin.find({ id }));

    });
}