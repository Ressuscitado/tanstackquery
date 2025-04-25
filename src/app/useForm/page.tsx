"use client";

import { Input } from "@/components/Input";
import { FormInput } from "@/types/FormInput";
import { SubmitHandler, useForm } from "react-hook-form";

export const Page = () => {

    const {
        control,
        handleSubmit
    } = useForm<FormInput>({
        defaultValues: {
            name: "",
            lastName: "",
            age: 0
        }
    });

    const SubmitConsole: SubmitHandler<FormInput> = (data) => {
        console.log(data);
    }

    return (
      <div>
        <form onSubmit={handleSubmit(SubmitConsole)}>

            <Input 
                control={control}
                name="name"
                rules={{ required: true, minLength: 3 }}
                //UseControllerProps la do componente de Input, é dai que vem esses Rules
            />
            <Input 
                control={control}
                name="lastName"
            />
            <Input 
                control={control}
                name="age"
                rules={{ required: true, min: 18 }}
            />

            <input type="submit" value={"Enviar"} />
        </form>
        
      </div>
    );
}

export default Page;