export default function Button({title, color}: {title: string, color: string}) {
    return(
        <button className={`bg-[${color}] hover:bg-white hover:text-black rounded-lg py-2 px-8`}>{title}</button>
    );
}