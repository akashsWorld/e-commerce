import { IoIosArrowRoundForward } from "react-icons/io";

const Heading = ({content,varient}:{content:string,varient?:'default'|'small'}) => {

    const heading = varient==='small'?'text-2xl':'text-5xl';
    
  return (
    <div className="flex gap-5 w-fit items-center px-10">
        <h2 className={`${heading} font-heading text-color-heading font-semibold`}>
        {content}
        </h2>
        <IoIosArrowRoundForward className="text-color-heading text-5xl"/>
    </div>
  )
}

export default Heading
