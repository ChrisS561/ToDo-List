type Props = {
    label: string;
    type: string;
  };
  
  const TextField = ({ label, type }: Props) => {
    return (
      <div>
        <div className="input-label">{label}</div>
        <input className="input-field" type={type} />
      </div>
    );
  };
  
  export default TextField;
  