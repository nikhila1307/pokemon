export const Pagination = ({page, totalPages, handleNextPage, handlePreviousPage}) => {

    return(
        <div className="flex justify-center gap-4 mt-6">
                <button
                    onClick={handlePreviousPage}
                    disabled={page === 1}
                    className="px-6 py-2 bg-indigo-600 text-indigo-700 font-bold rounded-lg 
                               transition-transform duration-300 hover:bg-indigo-700 
                               disabled:bg-gray-400 disabled:text-gray-600"
                >
                    Prev
                </button>
                <span className="text-white text-lg">
                    Page {page} of {totalPages}
                </span>
                <button
                    onClick={handleNextPage}
                    disabled={page === totalPages}
                    className="px-6 py-2 bg-indigo-600 text-indigo-700 font-bold rounded-lg 
                               transition-transform duration-300 hover:bg-indigo-700 
                               disabled:bg-gray-400 disabled:text-gray-600"
                >
                    Next
                </button>
            </div>
    )
}