import { FC } from "react";
import { useParams } from "react-router-dom";
import { blogs } from "../../data";

export const BlogDetailPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const blog = blogs.find((b) => b.id.toString() === id);

  if (!blog) {
    return (
      <p className="text-center text-xl font-semibold text-red-500">
        Blog not found
      </p>
    );
  }

  return (
    <section className="container mx-auto px-6 md:px-16 lg:px-24 py-10 lg:py-20">
      <h1 className="text-3xl lg:text-4xl font-semibold text-grey12">
        {blog.title}
      </h1>
      <img src={blog.imageUrl} alt={blog.title} className="w-full my-6" />
      <p className="text-xl text-grey11">{blog.description}</p>
      <p className="mt-4 text-grey10 text-base font-normal">By {blog.author}</p>
    </section>
  );
};
