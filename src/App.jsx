import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost, deletePost } from "./feature/Post";

function App() {
  const ary = useSelector((state) => state.posts.value);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addPost({ id: ary.length + 1, name: name, content: content }));
    console.log(name, content);
    setName("");
    setContent("");
  };

  return (
    <div className="bg-gray-500 w-screen py-10 min-h-screen">
      <h1 className="text-center text-3xl font-semibold leading-6 text-white mb-10">
        掲示板
      </h1>
      <div className="flex flex-col item-center justify-center items-center">
        <input
          type="text"
          placeholder="お名前"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg block w-96 p-2.5"
        />
        <input
          type="text"
          placeholder="投稿内容"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg block w-96 p-2.5"
        />
        <button
          onClick={() => handleClick()}
          className="px-5 py-3 text-xs font-medium text-center text-black transition duration-500 ease-in-out transform bg-white lg:px-10 rounded-xl hover:bg-white-50 mb-10"
        >
          投稿
        </button>
      </div>
      <div>
        {ary.map((obj) => {
          return (
            <div
              key={obj.id}
              className="mx-auto flex w-80 flex-col justify-center bg-white rounded-2xl shadow-xl shadow-gray-400/20 mb-10"
            >
              <div className="p-6">
                <small className="text-gray-900 text-xl">{obj.name}</small>
                <p className="text text-gray-500 leading-6 mt-2 mb-4">
                  {obj.content}
                </p>
                <button
                  className="px-5 py-3 text-xs font-medium text-center text-white transition duration-500 ease-in-out transform bg-red-500 lg:px-10 rounded-xl hover:bg-red-300"
                  onClick={() => dispatch(deletePost(obj.id))}
                >
                  削除
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
