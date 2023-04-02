import { useState } from "react"

const InputShortener = ({ setInputValue }) => {
  const [value, setValue] = useState("");

  const handleClick = () => {
    setInputValue(value);
    setValue("");
  }

  return (
    <div className="w-full inputContainer">
      {/* <h1>URL <span>Shortener</span></h1> */}
      <div>
        <input
        className="flex-auto min-w-full px-5 py-3 mb-4 text-white border-0 max-[600px]:rounded-md shadow-sm sm:min-w-0 sm:my-0 lg:w-96 sm:rounded-l-md bg-white/5 ring-1 ring-inset ring-white/10 focus:ring-1 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
          type="text"
          placeholder="Paste a link to shorten it"
          value={value}
          onChange={e => setValue(e.target.value)} 
          required 
        />
        <button onClick={handleClick} className={'min-w-full sm:min-w-0 max-[600px]:rounded-md sm:rounded-r-md sm:leading-6 bg-indigo-500 px-3.5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400'}>Shorten URL</button>
      </div>
    </div>
  )
}

export default InputShortener