const formFields = [
    {fieldTitle: 'full name', fieldLabel: 'fullname', fieldType: 'name', fieldName:'name'},
    {fieldTitle: 'Phone number', fieldLabel: 'phonenumber', fieldType: 'number', fieldName:'phone'},
    {fieldTitle: 'email', fieldLabel: 'email', fieldType: 'email', fieldName:'email'},
    {fieldTitle: 'zip code', fieldLabel: 'zipcode', fieldType: 'number', fieldName:'postal-code'},
    {fieldTitle: 'details', fieldLabel: 'content', fieldType: 'text', fieldName:'details'},
]

export default function RequestForm() {
    return( 
        <form className="bg-theme-background py-8 px-4 md:px-10 space-y-3 flex flex-col rounded h-full border-2 border-theme-background-dark text-theme-background-dark">
            {formFields.map((field,i) => (
                <FormField 
                fieldTitle={field.fieldTitle}
                fieldType={field.fieldType} 
                fieldName={field.fieldName} 
                fieldLabel={field.fieldLabel} 
                key={i}/>
                
            ))}
            <input type="submit" className="ml-auto capitalize text-2xl font-bold p-3 drop-shadow-2xl cta-button-orange" value="Submit"/>
        </form>
    )
}


const FormField = ({ fieldTitle, fieldType, fieldName, fieldLabel }) => {
    if (fieldType == "text") {
        return (
            <div className="space-y-1 w-full">
                <label htmlFor={fieldLabel} className="text-2xl font-semibold capitalize">{fieldTitle}</label>
                <textarea 
                type={fieldType} 
                name={fieldName} 
                id={fieldLabel}
                className="bg-theme-form rounded w-full p-2 h-32 text-1xl shadow-inner focus:ring-1 focus:ring-theme-primary resize-y"></textarea>
            </div>
        )
        
    } else {
        return (
            <div className="space-y-1 w-full">
                <label htmlFor={fieldLabel} className="text-2xl font-semibold capitalize">{fieldTitle}</label>
                <input 
                type={fieldType} 
                name={fieldName} 
                autoComplete="true" 
                id={fieldLabel}
                className="bg-theme-form rounded w-full p-2 text-1xl shadow-inner focus:ring-1 focus:ring-theme-primary !overflow-x-scroll"></input>
            </div>
        )
    }
}