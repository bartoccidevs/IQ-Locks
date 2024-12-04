
const formFields = [
    {fieldTitle: 'full name', fieldLabel: 'fullname', fieldType: 'name', fieldName:'name'},
    {fieldTitle: 'Phone number', fieldLabel: 'phonenumber', fieldType: 'number', fieldName:'phone'},
    {fieldTitle: 'email', fieldLabel: 'email', fieldType: 'email', fieldName:'email'},
    {fieldTitle: 'zip code', fieldLabel: 'zipcode', fieldType: 'number', fieldName:'postal-code'},
    {fieldTitle: 'details', fieldLabel: 'content', fieldType: 'text', fieldName:'details'},
]

export default function RequestForm() {
    return( 
        <form className="bg-theme-highlight py-8 px-4 space-y-3 flex flex-col">
            {formFields.map((field,i) => (
                <FormField 
                fieldTitle={field.fieldTitle}
                fieldType={field.fieldType} 
                fieldName={field.fieldName} 
                fieldLabel={field.fieldLabel} 
                key={i}/>
                
            ))}
            <input type="submit" className="ml-auto capitalize bg-theme-dark text-white text-2xl font-bold p-3 rounded drop-shadow-2xl" value="Submit"/>
        </form>
    )
}


const FormField = ({ fieldTitle, fieldType, fieldName, fieldLabel }) => {
    if (fieldType == "text") {
        return (
            <div className="space-y-1 w-full">
                <label htmlFor={fieldLabel} className="text-theme-dark text-2xl font-semibold capitalize">{fieldTitle}</label>
                <textarea 
                type={fieldType} 
                name={fieldName} 
                id={fieldLabel}
                className="bg-theme-light rounded w-full p-2 h-32 text-1xl text-theme-dark shadow-inner focus:ring-1 focus:ring-theme-dark resize-y"></textarea>
            </div>
        )
        
    } else {
        return (
            <div className="space-y-1 w-full">
                <label htmlFor={fieldLabel} className="text-theme-dark text-2xl font-semibold capitalize">{fieldTitle}</label>
                <input 
                type={fieldType} 
                name={fieldName} 
                autoComplete="true" 
                id={fieldLabel}
                className="bg-theme-light rounded w-full p-2 text-1xl text-theme-dark shadow-inner focus:ring-1 focus:ring-theme-dark !overflow-x-scroll"></input>
            </div>
        )
    }
}