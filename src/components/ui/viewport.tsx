import { ReactNode } from "react";

type ViewportProps = {
    children: ReactNode;
};

export default function Viewport({ children }: ViewportProps) {
    return (
        <main className="bg-zinc-950 mx-8 grid grid-cols-1 sm:grid-cols-3">
            {children}
        </main>
    );
}
