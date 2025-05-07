import styles from "./FormInput.module.css";
const FormInput = (
  {htmlFor, label, type, rows, placeholder, require}:{htmlFor:string,label:string, type:string, rows?: number, placeholder?:string, require?:boolean}
) => {
  return (
    <>
      <div className={styles.col}>
        <label htmlFor={htmlFor}>{label}</label>
        {type === "textarea" ? (
        <textarea
          id={htmlFor}
          name={htmlFor}
          placeholder={placeholder}
          required={require}
          rows={rows}
        />
      ) : (
        <input
          type={type}
          id={htmlFor}
          name={htmlFor}
          placeholder={placeholder}
          required={require}
        />
      )}
      </div>
    </>
  )
}

export default FormInput;