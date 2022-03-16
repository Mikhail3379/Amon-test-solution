import mongoose, { Schema } from "mongoose";

interface ICreateCoin {
  name: string;
  code: string;
  price: string;
}

interface createCoinModelInterface
  extends mongoose.Model<CreateCoinDoc> {
  build(attr: ICreateCoin): CreateCoinDoc;
}

interface CreateCoinDoc extends mongoose.Document {
  name: string;
  code: string;
  price: string;
}

const createCoinSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
});

createCoinSchema.statics.build = (attr: ICreateCoin) => {
  return new CreateCoin(attr);
};

const CreateCoin = mongoose.model<
  CreateCoinDoc,
  createCoinModelInterface
>("CreateCoin", createCoinSchema);

export { CreateCoin };