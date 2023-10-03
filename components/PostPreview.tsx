import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <Link href={`/posts/${props.slug}`}>
      
      <div
        className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 border p-4 rounded-md shadow-sm
      bg-white"
      >
        
        <p className="text-sm text-slate-400">{props.date}</p>

        
          <h2 className=" text-black font-medium">{props.title}</h2>
        
        <p className="text-slate-700">{props.subtitle}</p>
      </div>
    </Link>
  );
};

export default PostPreview;
