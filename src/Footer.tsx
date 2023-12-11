const Footer = () => {
  return (
    <div className="bg-slate-950/60 text-center rounded-b py-2">
      <a href="https://pappas.sh" target="_blank" className="uppercase font-bold tracking-widest text-sm">~/p/<span>{new Date().getFullYear().toString()} </span></a>
    </div>
  )
}

export default Footer