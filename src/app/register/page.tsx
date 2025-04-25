"use client";

import { SubmitHandler, useForm } from "react-hook-form";

type Input = {
  name: string;
  lastName: string;
  age: number;
}

export const Page = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<Input>();

  const SubmitConsole: SubmitHandler<Input> = (data) => {
    console.log(data);
  }

  
  return (
    <div>

           <form onSubmit={handleSubmit(SubmitConsole)}>
            <input
              {...register("name", { required: true, minLength: 3 })}
              className="text-black bg-white"

            />
            <input
              {...register("lastName")}
              className="text-black bg-white"

            />
            <input
              type="number"
              {...register("age", { required: true, min: 18 })}
              className="text-black bg-white"

            />
            {errors.age && <p>Deve ser maior de 18</p>}

            <input type="submit" value="Enviar" />
           </form>

    </div>
  );
}

export default Page;