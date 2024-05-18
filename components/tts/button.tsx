
import './button_v2.css';


export default function Button({ loading, onClick }: {
  loading: boolean,
  onClick: () => void
}) {
  // 定义内联样式对象
  const h1Style: React.CSSProperties = {
    textShadow: "18px 18px 28px #9f9f9f, -18px -18px 28px #ffffff",
  };


  return (
    <button
      type="submit"
      onClick={onClick}
      disabled={loading}
      className={`btn_v2 my-4 inline-flex h-12 w-full items-center justify-center rounded  bg-zinc-200  px-4 py-1.5 text-base font-semibold leading-7 ring-1
          ring-transparent transition-all duration-150 dark:text-black md:py-2${loading ? "" : ""}`}
    >
      <svg height="24" width="24" fill="#3c4772" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" className={`${loading ? "animate-spin" : ""} mr-4`}>
        <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
      </svg>
      {/* <span>{loading ? <Cog6ToothIcon className="w-5 h-5 animate-spin" /> : "Generate Audio"}</span> */}
      <span>{loading ? "Generating" : "Generate Audio"}</span>
    </button>
  );
}
