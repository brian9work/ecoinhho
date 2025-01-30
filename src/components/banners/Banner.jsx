import origin from "@/config/isServer"

export function BannerEdit({ children = "Banner", src = "write.jpg" }) {
  return (
    <div className={"relative min-h-[75vh] bg-cover bg-center "}
      style={{ backgroundImage: `url(${origin + src})` }}
    >
      <div className="absolute inset-0 bg-black/50" />
      {children}
    </div>
  )
}

export default function Banner({ children = "Banner", src = "write.jpg" }) {
  return (
    <div className={"relative h-[400px] bg-cover bg-center "}
      style={{ backgroundImage: `url(${origin + src})` }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative h-full flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">{children}</h1>
      </div>
    </div>
  )
}