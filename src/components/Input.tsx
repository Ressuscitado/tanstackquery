import { FormInput } from "@/types/FormInput";
import { useController, UseControllerProps } from "react-hook-form";

export const Input = (props: UseControllerProps<FormInput>) => {
    const { field, fieldState } = useController(props);

    return (
      <div>
        <input 
            className="text-black bg-white"
            {...field}
            placeholder={props.name} 
        />
        {fieldState.error?.type === "required" && <p>Este campo é obrigatório</p>}
        
      </div>
    );
}