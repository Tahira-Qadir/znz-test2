
function Card(title) {
  return (
    <div className="pt-10">
      <div className="indicator space-x-10">
        <img src="/src/assets/Images/icon.png"  className="indicator-item indicator-center w-8" alt="" />
          <div className="grid grid-rows-1 -space-y-14 w-52 h-52 bg-base-300 place-items-center">
            <h1 className="font-bold">{title.title}</h1>
            <p className="text-center px-3 text-xs py-5">
              Make stuff actually buy, create beautiful, retail-ready custom
              products withcthe same QC standards as leading fashion brands
            </p>
          </div>
        </div>
    </div>
  )
}

export default Card
