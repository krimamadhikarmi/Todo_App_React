export function TaskDisplay({tasks}){
    return(
        <>
        <div className="rounded overflow-hidden shadow-lg shadow-purple-900 w-2/6 bg-purple-400 mb-5 mt-8">
          <div className="px-6 py-8 h-full flex flex-col justify-center">
            <h2 className="font-bold text-xl mb-2 text-center text-white">Tasks</h2>
            <div className="font-bold text-md text-white mb-2">
              {tasks.map((task, index) => (
                <div key={index}>{task}</div>
              ))}
            </div>
          </div>
        </div>
        </>
    )
}