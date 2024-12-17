import Button from "../ui/Button";

export default function Header() {
    return(
        <nav className="flex bg-[#000000] text-[#fff] w-screen justify-around items-center p-4 text-2xl">
            <div>
                <a href="/" className="no-underline">
                    Abstract | Help Center
                </a>
            </div>
            <div className="flex space-x-2">
                <button className="bg-[#191a1b] rounded-lg border border-white py-2 px-4">Submit a request</button>
                <Button title="Sing in" color="#4C5FD5"/>
            </div>
        </nav>
    );
}