import { useQuery } from "react-query";

import { Loader } from "../../components/Loader";
import { Card } from "../../components/Card";
import { getPosts } from "../../api/api.service";

const Posts = () => {
  const { data = [], status, error, isFetching } = useQuery("posts", getPosts);

  return (
    <>
      <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
        <p className="text-3xl text-gray-700 font-bold mb-5">Welcome!</p>
        <p className="text-gray-500 text-lg">
          React and Tailwind CSS in action
        </p>
      </div>

      <div className="container mx-auto">
        {Boolean(!data.length) && isFetching && (
          <div className="flex justify-center align-center">
            <Loader />
          </div>
        )}

        {!!data.length &&
          data.map((item) => {
            return <Card classes="mb-4" {...item} />;
          })}
      </div>
    </>
  );
};

export default Posts;
