const Footer = () => {
  return (
    <div className="bg-slate-950/60 text-center rounded-b">
      <a href="https://pappas.sh" target="_blank" className="uppercase">~/p/<span>{new Date().getFullYear().toString()} </span></a>
    </div>
  )
}

export default Footer