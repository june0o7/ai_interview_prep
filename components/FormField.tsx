import React from 'react'
import {FormControl, FormDescription, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Control, Controller, FieldValues, Path} from "react-hook-form";
import {T} from "tailwindcss/dist/types-B254mqw1";

interface FormFieldProps<T extends FieldValues>{
    control:Control <T>;
    name:Path<T>;
    placeholder:string;
    type?:'text' | 'password' | 'email' | 'file';

}

const FormField = ({control,name,label,placeholder,type="text"}: FormFieldProps<T>) => (

    <Controller
        name={name}
        control = {control}
        render={({field}) =>(
        <FormItem>
            <FormLabel className="label">{label}</FormLabel>
            <FormControl>
                <Input
                    className="input"
                    placeholder={placeholder}
                    {...field}
                />
            </FormControl>

            <FormMessage />
        </FormItem>
    )}


    />
);
export default FormField;
