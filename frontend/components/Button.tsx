
const Button = ({content}:{content:string}) => {
  return (
    <button className="px-12 py-3 bg-color-blue text-white font-bold rounded-lg min-w-36">
      {content}
    </button>
  )
}

export default Button
