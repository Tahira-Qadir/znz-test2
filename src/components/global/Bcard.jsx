function Bcard(title) {
  return (
      <div className="w-[250px] rounded-md border">
        <img
          src={title.imsrc}
          className="h-[200px] w-full rounded-md object-cover"
        />
        <div className="p-4">
          <h1 className="text-lg font-semibold">{title.title}</h1>
          <p className="mt-3 text-sm text-gray-600">
            {title.para}
          </p>
          <span className="mt-4 rounded-sm text-black px-2.5 py-1 text-[12px] font-semibold">{title.sname}</span>
        </div>
      </div>
  )
}

export default Bcard

