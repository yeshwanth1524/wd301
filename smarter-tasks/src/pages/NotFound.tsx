function NotFound() {
    return (
        <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
            <h1 className="text-red-600 text-6xl font-bold mb-4">404 - Page Not Found</h1>
            <a href="/home" >
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-800 rounded text-black" id="backToHomeButton">Back to Home</button>
            </a>
        </div>
    )
}
export default NotFound;
