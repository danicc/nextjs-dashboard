import { Suspense } from "react";
import AcmeLogo from "../ui/acme-logo";
import LoginForm from "../ui/login-form";

export default function LoginPage() {
    return (
        <main className="flex items-center justify-center md:h-screen">
            <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
                <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
                    <div className="w-32 text-white md:w-36">
                        <AcmeLogo />
                    </div>
                </div>
                <Suspense fallback={<div className="h-10 w-full animate-pulse rounded-md bg-gray-200" />}>
                    <LoginForm />
                </Suspense>
            </div>
        </main>
    )
}