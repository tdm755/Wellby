import PropTypes from 'prop-types'


function FormCompo({title, inputs}) {
  return (
    <div className='w-full border rounded-lg bg-white shadow-xl'>
      <div className="bg-gradient-to-t from-[#FFB404] to-[#FFCE05] h-12 rounded-lg tracking-[0.40em] flex items-center justify-center font-semibold text-white text-md uppercase shadow-lg">{title}</div>
      <div className="px-4 py-7 flex flex-col gap-7">
      {inputs.map((item)=>{
        return item;
      })}
      </div>
    </div>
  )
}

FormCompo.propTypes = {
  title: PropTypes.string.isRequired,
  inputs: PropTypes.array.isRequired,
}

export default FormCompo
