export default function Footer() {
    return(
        <footer className="bg-black text-[#fff] pl-32 pt-10 pb-32">
            <div className="flex space-x-56">
                <div className="flex flex-col mt-0.5">
                    <h3 className="text-2xl font-bold mb-4">Abstract</h3>
                    <a href="#" className="hover:underline">Start trial</a>
                    <a href="#" className="hover:underline">Pricing</a>
                    <a href="#" className="hover:underline">Download</a>
                </div>
                <div className="flex flex-col">
                    <h3 className="text-2xl font-bold mb-4">Resources</h3>
                    <a href="#" className="hover:underline">Blog</a>
                    <a href="#" className="hover:underline">Help Center</a>
                    <a href="#" className="hover:underline">Release Notes</a>
                    <a href="#" className="hover:underline">Status</a>
                </div>
                <div className="flex flex-col">
                    <h3 className="text-2xl font-bold mb-4">Community</h3>
                    <a href="#" className="hover:underline">Twitter</a>
                    <a href="#" className="hover:underline">LinkedIn</a>
                    <a href="#" className="hover:underline">Facebook</a>
                    <a href="#" className="hover:underline">Dribble</a>
                    <a href="#" className="hover:underline">Podcast</a>
                </div>
                <div className="flex flex-col">
                    <h3 className="text-2xl font-bold mb-4">Company</h3>
                    <a href="#" className="hover:underline">About Us</a>
                    <a href="#" className="hover:underline">Careers</a>
                    <a href="#" className="hover:underline">Legal</a>
                    <div className="mt-8">
                        <h3 className="font-bold">Contact us</h3>
                        <p>info@abstract.com</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}