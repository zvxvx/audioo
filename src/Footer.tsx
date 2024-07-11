const Footer = () => {
  return (
    <div className="bg-slate-950/60 text-center rounded-b py-2 shadow-xl">
      <p className="uppercase font-bold tracking-widest text-sm">~/p/<span>{new Date().getFullYear().toString()}</span></p>
    </div>
  )
}

export default Footer