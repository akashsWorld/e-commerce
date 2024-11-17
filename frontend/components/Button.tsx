
const Button = ({content}:{content:string}) => {
  return (
    <button className="px-5 py-2 bg-color-blue text-white font-bold rounded-lg min-w-fit">
      {content}
    </button>
  )
}

export default Button
