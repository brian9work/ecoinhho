import Label from "./Label";

const Input = (({ className, type, name, label, ...props }) => {
    return (
        <div>
            <Label inputName={name}>{label}</Label>
            <input
                name={name}
                type={type}
                className={`
                    flex h-10 w-full 
                    rounded-md 
                    bg-background 
                    px-3 py-4 mt-0.5
                    text-base md:text-lg
                    placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50
                    outline-none 
                    border-gray-300 border-2 focus:border-primary-yellow
                `}
                // className

                {...props} />
        </div>
    );
})
const TextArea = (({ className, type, name, label, ...props }) => {
    return (
        <div>
            <Label inputName={name}>{label}</Label>
            <textarea
                name={name}
                type={type}
                className={`
                    flex h-64 w-full 
                    rounded-md 
                    bg-background 
                    px-3 py-4 mt-0.5
                    text-base md:text-lg
                    placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50
                    outline-none 
                    border-gray-300 border-2 focus:border-primary-yellow
                    resize-none
                `}
                {...props} />

        </div>
    );
})

export { Input, TextArea }
