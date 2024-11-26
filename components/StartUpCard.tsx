import React from "react";
import { startUpCardType } from "../app/(root)/page";
import { formatDate } from "@/lib/utils";
import Image from "next/image";
import { EyeIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const StartupCard = ({ post }: { post: startUpCardType }) => {
  console.log(`post image link is`, post.image);

  return (
    <li className="startup-card group">
      <div className="flex-between">
        <p className="startup_card_date">{formatDate(post._createdAt)}</p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" />
          <span className="size-6 text-medium">{post.views}</span>
        </div>
      </div>
      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${post.author?._id}`}>
            <p className="text-16-medium line-clamp-1">{post.author?.name}</p>
          </Link>

          <Link href={`/startup/${post._id}`}>
            <h3 className="text-26-bold">{post.title}</h3>
          </Link>
        </div>
        <Link href={`/user/${post.author?._id}`}>
          <Image
            src={post.image}
            alt="placeholder"
            height={48}
            width={48}
            className="rounded-full"
          />
        </Link>
      </div>

      <Link href={`/startup/${post._id}`}>
        <p className="startup-card_desc">{post.description}</p>
        <div>
          <img
            src={post.image}
            alt="placeholder"
            height={48}
            width={48}
            className="startup-card_img"
          />
        </div>
      </Link>

      <div className="flex-between gap-3 mt-2">
        <Link href={`/?query=${post.category.toLowerCase()}`}>
          <p className="text-16-medium">{post.category}</p>
        </Link>
        <Button className="startup-card_btn" asChild>
          <Link href={`/startup/${post._id}`}>details</Link>
        </Button>
      </div>
    </li>
  );
};

export default StartupCard;
