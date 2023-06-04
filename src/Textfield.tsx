
type Props = {
    label:string
    type:string
}

const TextField = ({ label }:Props) => { 
return (
    <div>
        <div className='input-label'>{label}</div>
        <input className="input-field" type="text"/> 
    </div>
)
}
export default TextField