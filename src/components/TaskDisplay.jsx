export function TaskDisplay({ tasks }) {
  return (
    <>
      <div className="rounded overflow-hidden shadow-lg shadow-purple-900 w-1/4 bg-purple-400 mb-5 mt-8">
        <div className="px-6 py-8 h-full flex flex-col justify-center">
          <h2
            className="font-bold text-2xl mb-2 text-center text-white"
            style={{
              fontFamily: "Chakra Petch, sans-serif",
              fontStyle: "italic",
            }}
          >
            Tasks
            <i class="fa-solid fa-square-check ml-4"></i>
          </h2>

          <div
            className="font-bold text-xl text-white mb-2 mt-2"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            {tasks.map((task, index) => (
              <div key={index}>

                  <li>{task}</li>
              
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
