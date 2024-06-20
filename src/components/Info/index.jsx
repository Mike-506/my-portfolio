import './style.css';

const Info = ({ name, position, description }) => {
  return(
    <div className='info'>
      <h1 className="name">{name}</h1>
      <h3 className="position">{position}</h3>
      <p className="desc">{description}</p>
    </div>
  )
}

export default Info;