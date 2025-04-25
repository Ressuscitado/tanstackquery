"use client";

import { FormInput } from "@/types/FormInput";
import { Input } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

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

                <Controller //controller do reactHookForm
                    control={control}
                    name="name"
                    rules={{ required: true, minLength: 3 }}
                    render={({ field, fieldState }) => 
                        <div>
                            <Input //Input do Material UI
                                {...field}
                                error={fieldState.invalid}
                                style={{ backgroundColor: "#FFF"}} 
                                //Style assim pois a biblioteca MaterialUI n aceita tailwind

                            />
                            {fieldState.error?.type === "required" && <p>Este campo é obrigatório</p>}
                        </div>
                        
                }
                />
                <Controller 
                    control={control}
                    name="lastName"
                    render={({ field }) => 
                        <Input 
                            {...field}
                            style={{ backgroundColor: "#FFF"}} 
                            //Style assim pois a biblioteca MaterialUI n aceita tailwind

                        />
                }
                />
                <Controller 
                    control={control}
                    name="age"
                    rules={{ required: true, min: 18 }}
                    render={({ field, fieldState }) => 
                        <Input 
                            {...field}
                            error={fieldState.invalid}
                            style={{ backgroundColor: "#FFF"}} 
                            //Style assim pois a biblioteca MaterialUI n aceita tailwind

                        />
                }
                />

                <input type="submit" value={"Enviar"} />
            </form>
            
        </div>
    );
};

export default Page;