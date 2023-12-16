const News = () => {
  return (
    <div className="bg-gradient-to-b from-slate-700/40 to-slate-800/20 py-5">
      <article className="sm:w-5/6  mx-auto">
        <p className="text-2xl uppercase tracking-wide font-bold">About</p>
        <p className="bg-gray-700/20 rounded border border-gray-700/80 shadow-xl p-2">
          Audioo is a simple interactive web app that allows users to mix up to six sounds per playlist. Each playlist is curated to promote focus, relaxation, and sleep. If you like what you hear and wish to contribute to future playlists, please consider contributing by using the <a href="https://forms.gle/aSszBjpU5veCVufDA" target="_blank" className="font-bold underline">audio submission form</a>.
        </p>
      </article>
      <article className="sm:w-5/6 mx-auto mt-5">
        <p className="text-2xl uppercase tracking-wide font-bold">News</p>
        <p><span className="italic text-lg">{new Date(2023, 11, 10).toDateString()}</span> | <span className="font-bold text-lg">The Refactor</span></p>
        <div className="bg-gray-700/20 rounded border border-gray-700/80 shadow-xl p-2">It's been a long time coming, but the redesign is finally here. The site should be a lot faster and more functional than ever before. It's also been a long time since any new playlists have been added, but now I can do just that with a lot less overhead involved. Once again, thank you for your patience. Enjoy.</div>
      </article>
    </div>
  )
}

export default News