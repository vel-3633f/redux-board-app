import { useSelector } from "react-redux";

function App() {
  const ary = useSelector((state) => state.posts.value);
  console.log(ary);
  return (
    <div className="bg-gray-600 h-screen w-screen">
      <div>
        {ary.map((obj) => {
          return (
            <div key={obj.id}>
              <h1>{obj.name}</h1>
              <p>{obj.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
