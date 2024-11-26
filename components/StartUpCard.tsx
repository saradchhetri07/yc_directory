import React from "react";
import { startUpCardType } from "../app/(root)/page";
import { formatDate } from "@/lib/utils";
import Image from "next/image";
import { EyeIcon } from "lucide-react";
import Link from "next/link";

const StartupCard = ({ post }: { post: startUpCardType }) => {
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
    </li>
  );
};

export default StartupCard;
