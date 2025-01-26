export default function Banner({children="Banner"}) {
    return (
      <div className="relative h-[400px] bg-[url('https://raw.githubusercontent.com/brian9work/ecoinhho/refs/heads/main/src/assets/write.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">{children}</h1>
        </div>
      </div>
    )
  }