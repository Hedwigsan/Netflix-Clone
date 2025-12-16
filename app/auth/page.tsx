const Auth = () => {
    return (
        <div className="relative min-h-screen w-full bg-[url('/images/hero.png')] bg-no-repeat bg-center bg-fixed bg-cover">
            <div className="bg-black/50 w-full min-h-screen">
                <nav className="px-12 py-5">
                    <img src="/images/logo.png" alt="Logo" className="h-30" />
                </nav>
                <div className="flex justify-center">
                    <div className="bg-black/70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                        <h2 className="text-white text-4xl mb-8 font-semibold">Sign In</h2>
                        {/* Form elements will go here */}
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Auth;