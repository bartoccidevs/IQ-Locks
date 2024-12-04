
const formFields = [
    {label: 'full name'},
    {label: 'Phone number'},
    {label: 'email'},
    {label: 'zipcode'},
    {label: 'details'},
]

export default function RequestForm() {
    return( 
        <form className="bg-theme-highlight py-8 px-4 space-y-2">
            {formFields.map((field,i) => (
                <FormField title={field.label} key={i}/>
                
            ))}
        </form>
    )
}


const FormField = ({title}) => {
    return (
        <div className="space-y-1">
            <h3 className="text-theme-dark text-2xl font-bold capitalize">{title}</h3>
            <input className="bg-theme-light rounded w-full p-3 text-1xl text-theme-dark shadow-inner"></input>
        </div>
    )
}