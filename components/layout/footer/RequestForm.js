
const formFields = [
    {label: 'full name', fieldType: 'name', fieldName:'name'},
    {label: 'Phone number', fieldType: 'number', fieldName:'phone'},
    {label: 'email', fieldType: 'email', fieldName:'email'},
    {label: 'zipcode', fieldType: 'number', fieldName:'postal-code'},
    {label: 'details', fieldType: 'text', fieldName:'details'},
]

export default function RequestForm() {
    return( 
        <form className="bg-theme-highlight py-8 px-4 space-y-3 flex flex-col">
            {formFields.map((field,i) => (
                <FormField label={field.label} fieldType={field.fieldType} fieldName={field.fieldName} key={i}/>
                
            ))}
            <input type="submit" className="ml-auto capitalize bg-theme-dark text-white text-2xl font-bold p-3 rounded drop-shadow-2xl" value="Submit"/>
        </form>
    )
}


const FormField = ({ label, fieldType, fieldName }) => {
    if (fieldType == "text") {
        return (
            <div className="space-y-1 w-full">
                <h3 className="text-theme-dark text-2xl font-semibold capitalize">{label}</h3>
                <textarea type={fieldType} name={fieldName} className="bg-theme-light rounded w-full p-2 h-32 text-1xl text-theme-dark shadow-inner focus:ring-1 focus:ring-theme-dark resize-y"></textarea>
            </div>
        )
        
    } else {
        return (
            <div className="space-y-1 w-full">
                <h3 className="text-theme-dark text-2xl font-semibold capitalize">{label}</h3>
                <input type={fieldType} name={fieldName} autoComplete="true" className="bg-theme-light rounded w-full p-2 text-1xl text-theme-dark shadow-inner focus:ring-1 focus:ring-theme-dark !overflow-x-scroll"></input>
            </div>
        )
    }
}