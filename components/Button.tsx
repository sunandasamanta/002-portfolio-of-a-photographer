import Link from "next/link";

// type ButtonProps = {
//     onClick: () => void;
//     text: string;
//     style?: React.CSSProperties;
// };

export default function Button({ text }: { text: string }) {
    return (
        <button className="text-gray-500 border-solid border border-gray-700 hover:bg-700 font-medium py-3 px-6 rounded">
            <Link href="https://www.instagram.com/bakshionfilms/">
                {text}
            </Link>
        </button>
    );
};

