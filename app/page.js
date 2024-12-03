'use client';
import { EmbedPDF } from "@simplepdf/react-embed-pdf";

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
                <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                    PDF Viewer
                </h1>
                <div className="border border-gray-300 rounded-md overflow-hidden">
                    <EmbedPDF companyIdentifier="yourcompany">
                        <a
                            href="https://cdn.simplepdf.com/simple-pdf/assets/sample.pdf"
                            className="text-blue-500 hover:underline"
                        >
                            Open Sample PDF
                        </a>
                    </EmbedPDF>
                </div>
            </div>
            <footer className="mt-6 text-center text-gray-600 text-sm">
                Built with ❤️ using <span className="font-bold">Next.js</span> and{" "}
                <span className="font-bold">Tailwind CSS</span>.
            </footer>
        </div>
    );
}
