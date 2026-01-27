import "./styles.css";

export default function Input(props) {
    const { setter, ...properties } = props;

    const onChange = (value) => {
        if (setter) {
            setter(value);

            if (props.onChange) {
                props.onChange(value);
            }
        }
    }

    return (
        <div className="input">
            <label htmlFor={properties.id}>{properties.label}</label>
            <input {...properties} onChange={e => onChange(e.target.value)} />
        </div>
    )
}